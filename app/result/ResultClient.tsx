'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PaymentButton from '@/components/PaymentButton';
import Link from 'next/link';
import { EmailFormModal } from '@/components/EmailPdfModal';

interface AIResult {
  summaries?: string[];
  report?: {
    overview?: string;
    relationshipPatterns?: string;
    communication?: string;
    challenges?: string;
    recommendations?: string[];
    compatibleDynamics?: string;
  };
}

type AttachmentStyle = 'Secure' | 'Anxious' | 'Fearful' | 'Dismissive';

interface StyleInfo {
  name: AttachmentStyle;
  color: string;
  bgColor: string;
  icon: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  growthAreas: string[];
}

const STYLE_INFO: Record<AttachmentStyle, StyleInfo> = {
  Secure: {
    name: 'Secure',
    color: 'text-green-600',
    bgColor: 'bg-green-100 border-green-200',
    icon: '🔐',
    description: 'You are comfortable with intimacy and independence. You can form healthy, balanced relationships and communicate your needs effectively.',
    characteristics: [
      'Comfortable with emotional closeness',
      'Trusting of partners',
      'Can communicate needs openly',
      'Handles conflict constructively',
      'Comfortable being alone sometimes',
    ],
    strengths: [
      'Healthy relationship patterns',
      'Emotional regulation',
      'Effective communication',
      'Built-in trust baseline',
    ],
    growthAreas: [
      'Continue nurturing relationship skills',
      'Maintain boundaries while staying open',
      'Practice vulnerability in safe relationships',
    ],
  },
  Anxious: {
    name: 'Anxious',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100 border-yellow-200',
    icon: '💛',
    description: 'You crave closeness but often fear abandonment. You may feel anxious when your partner needs space and worry they don\'t love you enough.',
    characteristics: [
      'Often worries about relationship stability',
      'Needs frequent reassurance',
      'Fear of abandonment',
      'Can be emotionally demanding',
      'Highly attuned to partner\'s moods',
    ],
    strengths: [
      'Deep emotional awareness',
      'Strong desire for connection',
      'Attentive to partner\'s needs',
      'Passionate about relationships',
    ],
    growthAreas: [
      'Build self-esteem independent of relationships',
      'Learn to tolerate uncertainty',
      'Develop emotional regulation skills',
      'Work through past attachment wounds',
    ],
  },
  Fearful: {
    name: 'Fearful',
    color: 'text-red-600',
    bgColor: 'bg-red-100 border-red-200',
    icon: '😰',
    description: 'You desire closeness but are also scared of it. You might push people away before they can hurt you, even though you want to connect.',
    characteristics: [
      'Mixed feelings about intimacy',
      'Fears being vulnerable',
      'May sabotage relationships',
      'Emotional ups and downs',
      'Difficult trusting others',
    ],
    strengths: [
      'Rich inner emotional life',
      'Ability to empathize deeply',
      'Honest about fears',
      'Appreciates depth when safe',
    ],
    growthAreas: [
      'Work through past trauma or attachment wounds',
      'Build consistent relationship patterns',
      'Learn to regulate emotional swings',
      'Develop stable self-worth',
    ],
  },
  Dismissive: {
    name: 'Dismissive',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 border-purple-200',
    icon: '🛡️',
    description: 'You value independence and self-reliance. You may minimize the importance of relationships and feel uncomfortable with too much closeness.',
    characteristics: [
      'Values independence over intimacy',
      'Dislikes vulnerability',
      'May dismiss emotional needs',
      'Comfortable with distance',
      'Self-contained and self-sufficient',
    ],
    strengths: [
      'Strong sense of self',
      'Healthy independence',
      'Emotional resilience',
      'Clear boundaries',
    ],
    growthAreas: [
      'Allow more vulnerability in relationships',
      'Recognize the value of interdependence',
      'Practice emotional openness',
      'Challenge dismissive beliefs',
    ],
  },
};

const PRICING_PLANS = [
  {
    planId: 'BASIC' as const,
    name: 'Basic Report',
    price: 14.99,
    description: 'Your attachment style analysis',
    features: [
      'Complete attachment style analysis',
      'Personalized insights',
      'PDF report download',
    ],
    featured: false,
  },
  {
    planId: 'COMPLETE' as const,
    name: 'Complete Report + AI',
    price: 24.99,
    originalPrice: 49.99,
    description: 'Full analysis with AI-powered insights',
    features: [
      'Everything in Basic',
      'Detailed relationship patterns',
      'AI-powered BondType analysis',
      'BondType coaching chatbot',
    ],
    featured: true,
  },
];

export default function ResultClient() {
  const [style, setStyle] = useState<AttachmentStyle | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [aiSummaryLoading, setAiSummaryLoading] = useState(false);
  const [aiDetailedLoading, setAiDetailedLoading] = useState(false);
  const [aiSummary, setAiSummary] = useState<string[] | null>(null);
  const [aiDetailedReport, setAiDetailedReport] = useState<AIResult['report'] | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);
  const [paid, setPaid] = useState(false);
  const [detailedReportPaid, setDetailedReportPaid] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const [pdfFilename, setPdfFilename] = useState<string | null>(null);
  
  const searchParams = useSearchParams();

  // Bug #1 Fix: Redirect to /assessment if assessment was not completed
  useEffect(() => {
    const loadResult = async () => {
      const completed = localStorage.getItem('assessmentCompleted');
      const savedStyle = localStorage.getItem('attachmentStyle') as AttachmentStyle | null;
      
      if (!completed || !savedStyle) {
        // Assessment not completed - redirect to assessment page
        window.location.href = '/assessment';
        return;
      }
      
      setStyle(savedStyle);
      
      // Try to fetch from database first
      try {
        const sessionId = localStorage.getItem('quizSessionId');
        if (sessionId) {
          const response = await fetch(`/api/quiz/save-result?sessionId=${sessionId}`);
          if (response.ok) {
            const data = await response.json();
            if (data.success && data.testResult) {
              // Update from database
              setStyle(data.testResult.primary_style as AttachmentStyle);
              
              // Check payment status from database
              if (data.testResult.payment_status === 'completed') {
                setPaid(true);
                setShowPaywall(false);
              }
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch from database:', error);
        // Fall back to localStorage
      }
      
      // Check for payment success
      const paymentStatus = searchParams?.get('payment');
      const planId = searchParams?.get('plan');
      
      if (paymentStatus === 'success' && planId) {
        // Verify session ID matches (Bug #7 Fix)
        const pendingSessionId = localStorage.getItem('pendingSessionId');
        const currentSessionId = localStorage.getItem('paymentSessionId');
        if (pendingSessionId && pendingSessionId !== currentSessionId) {
          console.warn('Session ID mismatch - possible session hijacking attempt');
          // Clear pending state but still allow the payment to proceed
          localStorage.removeItem('pendingSessionId');
        }
        
        setPaid(true);
        setShowPaywall(false);
        localStorage.setItem('paymentSuccess', planId);
        
        // Bug #2 & #3 Fix: If COMPLETE payment succeeded, unlock complete report
        if (planId === 'COMPLETE') {
          setDetailedReportPaid(true);
          localStorage.setItem('detailedReportPaid', 'true');
          // Automatically generate the detailed report after payment
          generateDetailedReport();
        }
        
        // Clear pending session after successful payment
        localStorage.removeItem('pendingSessionId');
      } else {
        // Check localStorage for previous payments
        const savedPayment = localStorage.getItem('paymentSuccess');
        if (savedPayment) {
          setPaid(true);
        }
        
        // Check if detailed report was previously paid
        const detailedPaid = localStorage.getItem('detailedReportPaid');
        if (detailedPaid === 'true') {
          setDetailedReportPaid(true);
        }
      }
      
      setIsLoading(false);
    };
    
    loadResult();
  }, [searchParams]);

  if (isLoading || !style) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  const styleInfo = STYLE_INFO[style];

  const generateAiSummary = async () => {
    setAiSummaryLoading(true);
    setAiError(null);
    try {
      const res = await fetch('/api/ai/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attachmentStyle: style,
          characteristics: styleInfo.characteristics,
          strengths: styleInfo.strengths,
          growthAreas: styleInfo.growthAreas,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate summary');
      setAiSummary(data.summaries);
    } catch (err) {
      setAiError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setAiSummaryLoading(false);
    }
  };

  // Bug #2 & #3 Fix: Payment flow for detailed report
  const handleDetailedReportClick = async () => {
    if (detailedReportPaid || aiDetailedReport) {
      // Already paid or already generated - do nothing or scroll to report
      return;
    }
    
    // Redirect to checkout page for complete report
    window.location.href = '/checkout?plan=COMPLETE';
  };
  
  const generateDetailedReport = async () => {
    setAiDetailedLoading(true);
    setAiError(null);
    try {
      const res = await fetch('/api/ai/detailed-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attachmentStyle: style,
          characteristics: styleInfo.characteristics,
          strengths: styleInfo.strengths,
          growthAreas: styleInfo.growthAreas,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate report');
      setAiDetailedReport(data.report);
    } catch (err) {
      setAiError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setAiDetailedLoading(false);
    }
  };

  const generatePDF = async () => {
    setPdfGenerating(true);
    try {
      const response = await fetch('/api/pdf/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          style: style,
          styleIcon: styleInfo.icon,
          description: styleInfo.description,
          characteristics: styleInfo.characteristics,
          strengths: styleInfo.strengths,
          growthAreas: styleInfo.growthAreas,
          aiReport: aiDetailedReport,
        }),
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to generate PDF');
      
      setPdfFilename(data.filename);
      setShowEmailModal(true);
    } catch (err) {
      setAiError(err instanceof Error ? err.message : 'Failed to generate PDF');
    } finally {
      setPdfGenerating(false);
    }
  };

  const handlePaymentSuccess = () => {
    setPaid(true);
    setShowPaywall(false);
  };

  // Report data for email
  const reportDataForEmail = {
    style,
    styleIcon: styleInfo.icon,
    description: styleInfo.description,
    characteristics: styleInfo.characteristics,
    strengths: styleInfo.strengths,
    growthAreas: styleInfo.growthAreas,
    aiReport: aiDetailedReport || undefined,
  };

  // Freemium fix: If not paid, show paywall instead of style
  const showPaywallStyle = !paid;

  return (
    <div className="min-h-screen bg-[#08090a] text-[#f7f8f8] py-12 px-4">
      {/* Payment Success Banner */}
      {paid && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-[#5e6ad2] text-white rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎉</span>
                <div>
                  <h3 className="font-medium text-lg">Payment Successful!</h3>
                  <p className="text-white/80 text-sm">Your report is now unlocked</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={generatePDF}
                  disabled={pdfGenerating}
                  className="bg-white text-[#0f1011] font-medium py-2 px-6 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {pdfGenerating ? (
                    <>
                      <span className="animate-spin">📄</span> Generating...
                    </>
                  ) : (
                    <>
                      <span>📄</span> Email PDF Report
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Result Header - Paywall for unpaid users */}
        {showPaywallStyle ? (
          /* Unpaid: Show paywall instead of style */
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#5e6ad2]/20 to-[#7170ff]/20 rounded-full mb-6">
              <span className="text-5xl">🔒</span>
            </div>
            <h1 className="text-4xl font-medium text-[#f7f8f8] mb-4">
              Your Results Are Ready!
            </h1>
            <p className="text-xl text-[#8a8f98] max-w-2xl mx-auto mb-8">
              Please choose a plan below to unlock your complete attachment style analysis.
            </p>
            <button
              onClick={() => setShowPaywall(true)}
              className="bg-[#5e6ad2] text-white font-medium py-3 px-8 rounded-md hover:bg-[#828fff] transition-colors"
            >
              View Pricing Plans
            </button>
          </div>
        ) : (
          /* Paid: Show actual style */
          <div className="text-center mb-12">
            <p className="text-[#7170ff] font-medium mb-2">Your Attachment Style Is</p>
            <h1 className={`text-5xl font-medium ${styleInfo.color} mb-4`}>
              {styleInfo.icon} {style}
            </h1>
            <p className="text-xl text-[#8a8f98] max-w-2xl mx-auto">
              {styleInfo.description}
            </p>
          </div>
        )}

        {/* AI Analysis Section - Only visible after payment */}
        {paid && (
          <div className="bg-[#191a1b] rounded-xl p-8 mb-8 border border-[rgba(255,255,255,0.08)]">
            <h2 className="text-2xl font-medium text-[#f7f8f8] mb-4">🤖 BondType Analysis</h2>
          <p className="text-[#8a8f98] text-sm mb-4 italic">
            This report is generated using BondType's proprietary analysis engine, which combines established psychological frameworks with advanced computational methods to deliver personalized relationship insights.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={generateAiSummary}
              disabled={aiSummaryLoading}
              className="bg-[#5e6ad2] text-white font-medium py-2 px-6 rounded-md hover:bg-[#828fff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {aiSummaryLoading ? (
                <>
                  <span className="animate-spin">⏳</span> Generating...
                </>
              ) : (
                <>
                  <span>📝</span> Generate BondType Summary
                </>
              )}
            </button>

            <button
              onClick={handleDetailedReportClick}
              disabled={aiDetailedLoading || !!aiDetailedReport}
              className={`bg-[#7170ff] text-white font-medium py-2 px-6 rounded-md hover:bg-[#828fff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 relative`}
            >
              {aiDetailedLoading ? (
                <>
                  <span className="animate-spin">⏳</span> Generating...
                </>
              ) : aiDetailedReport ? (
                <>
                  <span>✓</span> Detailed Report Generated
                </>
              ) : (
                <>
                  <span>📄</span> Get Detailed Report
                  {!detailedReportPaid && (
                    <span className="absolute -top-2 -right-2 bg-[#5e6ad2] text-white text-xs font-medium py-1 px-2 rounded-full">
                      $24.99
                    </span>
                  )}
                </>
              )}
            </button>
          </div>

          {aiError && (
            <div className="bg-[rgba(220,38,38,0.1)] border border-[rgba(220,38,38,0.2)] text-[#ef4444] px-4 py-3 rounded-md mb-4">
              ❌ Error: {aiError}
            </div>
          )}

          {aiSummary && (
            <div className="bg-[rgba(94,106,210,0.1)] border border-[rgba(94,106,210,0.2)] rounded-md p-6 mb-4">
              <h3 className="text-lg font-medium text-[#5e6ad2] mb-3 flex items-center gap-2">
                <span>📝</span> BondType Summary
              </h3>
              <ul className="space-y-2">
                {aiSummary.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#d0d6e0]">
                    <span className="text-[#5e6ad2] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {aiDetailedReport && (
            <div className="bg-[rgba(113,112,255,0.1)] border border-[rgba(113,112,255,0.2)] rounded-md p-6">
              <h3 className="text-lg font-medium text-[#7170ff] mb-3 flex items-center gap-2">
                <span>📄</span> BondType Detailed Report
              </h3>
              <div className="space-y-4 text-[#d0d6e0]">
                {aiDetailedReport.overview && (
                  <div>
                    <h4 className="font-medium mb-1">Overview</h4>
                    <p className="text-sm">{aiDetailedReport.overview}</p>
                  </div>
                )}
                {aiDetailedReport.relationshipPatterns && (
                  <div>
                    <h4 className="font-medium mb-1">Relationship Patterns</h4>
                    <p className="text-sm">{aiDetailedReport.relationshipPatterns}</p>
                  </div>
                )}
                {aiDetailedReport.communication && (
                  <div>
                    <h4 className="font-medium mb-1">Communication</h4>
                    <p className="text-sm">{aiDetailedReport.communication}</p>
                  </div>
                )}
                {aiDetailedReport.challenges && (
                  <div>
                    <h4 className="font-medium mb-1">Common Challenges</h4>
                    <p className="text-sm">{aiDetailedReport.challenges}</p>
                  </div>
                )}
                {aiDetailedReport.recommendations && aiDetailedReport.recommendations.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-1">Recommendations</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {aiDetailedReport.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {aiDetailedReport.compatibleDynamics && (
                  <div>
                    <h4 className="font-medium mb-1">Compatible Relationship Dynamics</h4>
                    <p className="text-sm">{aiDetailedReport.compatibleDynamics}</p>
                  </div>
                )}
              </div>
              <p className="text-[#8a8f98] text-xs mt-6 pt-4 border-t border-[rgba(113,112,255,0.2)]">
                BondType uses an AI-powered analysis system to generate personalized relationship reports, designed and validated by our research team.
              </p>
            </div>
          )}
        </div>
        )}

        {/* Content - Conditional based on payment */}
        {paid ? (
          /* Full Report - Shown after payment */
          <div className="bg-[#191a1b] rounded-xl p-8 mb-8 border border-[rgba(255,255,255,0.08)]">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-[#f7f8f8] mb-4">📋 Key Characteristics</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {styleInfo.characteristics.map((char, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7170ff] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#d0d6e0]">{char}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-[#5e6ad2] mb-3">💪 Your Strengths</h3>
                <ul className="space-y-2">
                  {styleInfo.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#5e6ad2]">✓</span>
                      <span className="text-[#d0d6e0]">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#7170ff] mb-3">🌱 Growth Areas</h3>
                <ul className="space-y-2">
                  {styleInfo.growthAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7170ff]">→</span>
                      <span className="text-[#d0d6e0]">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Email PDF Button */}
            <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.08)] text-center">
              <p className="text-[#8a8f98] mb-4">Want a beautifully designed PDF report to keep?</p>
              <button
                onClick={() => setShowEmailModal(true)}
                className="bg-[#5e6ad2] text-white font-medium py-3 px-8 rounded-md hover:bg-[#828fff] transition-colors"
              >
                📧 Send PDF to My Email
              </button>
            </div>
          </div>
        ) : (
          /* Blurred Preview Section (Paywall) */
          <div className="bg-[#191a1b] rounded-xl p-8 mb-8 relative overflow-hidden border border-[rgba(255,255,255,0.08)]">
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-[#191a1b]/60 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="text-center z-20">
                <div className="text-6xl mb-4">🔒</div>
                <h2 className="text-2xl font-medium text-[#f7f8f8] mb-2">Unlock Your Full Report</h2>
                <p className="text-[#8a8f98] mb-6 max-w-md">
                  See the complete analysis, detailed characteristics, and personalized recommendations by choosing a plan below.
                </p>
                <button
                  onClick={() => setShowPaywall(true)}
                  className="bg-[#5e6ad2] text-white font-medium py-3 px-8 rounded-md hover:bg-[#828fff] transition-colors"
                >
                  View Pricing Plans
                </button>
              </div>
            </div>

            {/* Blurred content preview */}
            <div className="blur-[8px] opacity-50">
              <div className="mb-8">
                <h2 className="text-2xl font-medium text-[#f7f8f8] mb-4">Key Characteristics</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {styleInfo.characteristics.map((char, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7170ff] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#d0d6e0]">{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-[#5e6ad2] mb-3">Your Strengths</h3>
                  <ul className="space-y-2">
                    {styleInfo.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#5e6ad2]">✓</span>
                        <span className="text-[#d0d6e0]">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#7170ff] mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {styleInfo.growthAreas.map((area, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#7170ff]">→</span>
                        <span className="text-[#d0d6e0]">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {showPaywall && !paid && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-medium text-[#f7f8f8] mb-2">Choose Your Report Plan</h2>
              <p className="text-[#8a8f98]">Unlock your complete attachment style analysis</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.planId}
                  className={`bg-[#191a1b] rounded-xl overflow-hidden border ${
                    plan.featured ? 'border-[#5e6ad2] relative transform md:scale-105' : 'border border-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  {plan.featured && (
                    <div className="bg-[#5e6ad2] text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-[#f7f8f8] mb-2">{plan.name}</h3>
                    <p className="text-[#8a8f98] text-sm mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-medium text-[#f7f8f8]">${plan.price}</span>
                      <span className="text-[#8a8f98]"> USD</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <PaymentButton
                      planId={plan.planId}
                      testResultId={style}
                      onSuccess={handlePaymentSuccess}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <span>🔒</span> Secure Payment
              </div>
              <div className="flex items-center gap-2">
                <span>💳</span> PayPal
              </div>
              <div className="flex items-center gap-2">
                <span>↩️</span> 30-Day Refund
              </div>
            </div>
          </div>
        )}

        {/* Default pricing (collapsed) */}
        {!showPaywall && !paid && (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Get your complete analysis with detailed insights and recommendations</p>
            <button
              onClick={() => setShowPaywall(true)}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors"
            >
              View Pricing Plans
            </button>
          </div>
        )}

        {/* Retake Test */}
        <div className="text-center mt-12">
          <Link
            href="/assessment"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Retake Assessment
          </Link>
        </div>
      </div>

      {/* Email PDF Modal */}
      <EmailFormModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        reportData={reportDataForEmail}
        pdfFilename={pdfFilename || undefined}
      />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
