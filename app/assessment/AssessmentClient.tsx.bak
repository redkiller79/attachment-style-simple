'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const FREE_QUESTIONS = 15;
const TOTAL_QUESTIONS = 36;

const QUESTIONS = [
  // Free Questions 1-15
  {
    id: 1,
    text: "When someone gets too close to me, I feel uncomfortable and want to pull away.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 2,
    text: "I often worry that my partner doesn't really love me or won't want to stay with me.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 3,
    text: "I feel comfortable depending on others and having them depend on me.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 4,
    text: "I tend to get emotionally distant when relationships become too intense.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 5,
    text: "I rarely worry about being abandoned or someone getting too close to me.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 6,
    text: "When my partner is away, I feel anxious and constantly think about our relationship.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 7,
    text: "I find it easy to get close to others and feel safe in intimate relationships.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 8,
    text: "I often push people away because I'm afraid of getting hurt.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 9,
    text: "I feel confident that others will be there for me when I need them.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 10,
    text: "I tend to be clingy in relationships and fear being alone.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 11,
    text: "I prefer to keep my distance and not rely too much on others.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 12,
    text: "I feel uneasy when someone wants to get very close to me.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 13,
    text: "I worry that I don't measure up to what my partner wants in a relationship.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 14,
    text: "I am comfortable sharing my thoughts and feelings openly with my partner.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 15,
    text: "I often feel that my partner wants me to be more intimate than I am comfortable with.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  // Premium Questions 16-36 (21 questions)
  {
    id: 16,
    text: "I rarely give much thought to how my actions affect my partner.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 17,
    text: "I find myself wanting to merge completely with another person.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 18,
    text: "I am nervous when any romantic partner gets too close.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 19,
    text: "I do not often worry about being abandoned.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 20,
    text: "I find it difficult to trust completely in romantic relationships.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 21,
    text: "I feel a deep need to be needed by my partner.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 22,
    text: "I am able to let my guard down and feel safe in relationships.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 23,
    text: "I fear that showing my true self will cause my partner to reject me.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 24,
    text: "I enjoy my independence and seldom feel the need to seek close emotional bonds.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 25,
    text: "When partners express strong emotions, I feel overwhelmed and want to escape.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 26,
    text: "I believe in maintaining healthy boundaries even in committed relationships.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 27,
    text: "I often test my partner's commitment by creating distance.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 28,
    text: "I feel secure enough to express vulnerable emotions without fear.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 29,
    text: "I become possessive or jealous when my partner interacts with others.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 30,
    text: "I struggle to initiate intimate conversations with my partner.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 31,
    text: "I am calm and centered even during relationship conflicts.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 32,
    text: "I feel incomplete when I'm not in a romantic relationship.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 33,
    text: "I tend to analyze relationships rather than simply experiencing them.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 34,
    text: "I have difficulty accepting criticism from romantic partners.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
  {
    id: 35,
    text: "I believe I deserve love and affection in my relationships.",
    options: [
      { text: "Strongly Disagree", value: 3 },
      { text: "Disagree", value: 2 },
      { text: "Agree", value: 1 },
      { text: "Strongly Agree", value: 0 },
    ],
  },
  {
    id: 36,
    text: "I often sabotage relationships before they get too serious.",
    options: [
      { text: "Strongly Disagree", value: 0 },
      { text: "Disagree", value: 1 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 3 },
    ],
  },
];

type AttachmentStyle = 'Secure' | 'Anxious' | 'Fearful' | 'Dismissive';

function calculateAttachmentStyle(answers: (number | null)[]): AttachmentStyle {
  const anxietyQuestions = [1, 2, 4, 6, 8, 10, 12, 13, 15, 17, 18, 20, 21, 23, 25, 27, 29, 30, 32, 33, 34, 36];
  const avoidanceQuestions = [1, 3, 4, 7, 8, 11, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 31, 33, 34, 36];
  
  let anxietyScore = 0;
  let avoidanceScore = 0;
  
  answers.forEach((answer, index) => {
    if (answer === null) return;
    const qNum = index + 1;
    if (anxietyQuestions.includes(qNum)) {
      anxietyScore += answer;
    }
    if (avoidanceQuestions.includes(qNum)) {
      avoidanceScore += answer;
    }
  });
  
  const maxAnxiety = anxietyQuestions.length * 3;
  const maxAvoidance = avoidanceQuestions.length * 3;
  
  const anxietyNorm = anxietyScore / maxAnxiety;
  const avoidanceNorm = avoidanceScore / maxAvoidance;
  
  if (anxietyNorm < 0.4 && avoidanceNorm < 0.4) {
    return 'Secure';
  } else if (anxietyNorm >= 0.4 && avoidanceNorm < 0.4) {
    return 'Anxious';
  } else if (anxietyNorm < 0.4 && avoidanceNorm >= 0.4) {
    return 'Dismissive';
  } else {
    return 'Fearful';
  }
}

// Paywall Modal Component
const COMPLETE_PRICE = 9.99;

function PaywallModal({ onUnlock, onContinueFree, isLoading }: { onUnlock: () => void; onContinueFree: () => void; isLoading?: boolean }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl">
        {/* Lock Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
          Unlock the Full Assessment
        </h2>
        <p className="text-gray-600 text-center mb-6">
          You've completed the free preview. Get your complete attachment profile with all 36 questions.
        </p>

        {/* Value Props */}
        <div className="space-y-3 mb-8">
          {[
            { icon: 'ðŸŽ¯', text: 'Complete 36-question assessment' },
            { icon: 'ðŸ“Š', text: 'Detailed scoring algorithm' },
            { icon: 'ðŸ’¡', text: 'Personalized insights & recommendations' },
            { icon: 'ðŸ“±', text: 'Mobile-friendly report you can save' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-700">
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 text-center">
          <div className="text-sm text-gray-500 line-through mb-1">Normally $29</div>
          <div className="text-4xl font-bold text-gray-900 mb-1">${COMPLETE_PRICE.toFixed(2)}</div>
          <div className="text-sm text-gray-600">One-time payment â€?Lifetime access</div>
        </div>

        {/* CTA Buttons */}
        <button
          onClick={onUnlock}
          disabled={isLoading}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl mb-3 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              Redirecting to PayPal...
            </>
          ) : (
            'Unlock Full Assessment'
          )}
        </button>
        <button
          onClick={onContinueFree}
          className="w-full py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors"
        >
          Continue with free preview
        </button>
      </div>
    </div>
  );
}

// Teaser Preview Component
function TeaserPreview({ question, onUnlock }: { question: typeof QUESTIONS[0]; onUnlock: () => void }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 opacity-75">
      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
          Premium Question {question.id}
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Locked
        </span>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {question.text}
      </h2>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <div
            key={index}
            className="w-full text-left p-4 rounded-xl border-2 border-gray-200 bg-gray-50 cursor-pointer"
          >
            <span className="flex items-center">
              <span className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3"></span>
              {option.text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onUnlock}
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
      >
        Unlock to answer â†?      </button>
    </div>
  );
}

export default function AssessmentClient() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(TOTAL_QUESTIONS).fill(null));
  const [isComplete, setIsComplete] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [hasSeenPaywall, setHasSeenPaywall] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true); // Bug #3 fix: show loading while verifying
  const [isPaywallLoading, setIsPaywallLoading] = useState(false);

  // Bug #3 fix: Verify payment with server on mount (don't trust localStorage alone)
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await fetch('/api/payment/verify', { method: 'POST' });
        if (response.ok) {
          const data = await response.json();
          if (data.unlocked) {
            setIsUnlocked(true);
          }
        }
      } catch {
        // Network error â€?fall back to localStorage for UX only; server is authoritative
      } finally {
        setIsVerifying(false);
      }
    };
    verifyPayment();
  }, []);

  const handleUnlock = async () => {
    setIsPaywallLoading(true);
    try {
      const response = await fetch('/api/payment/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: 'COMPLETE' }),
      });
      const data = await response.json();
      if (data.approvalUrl) {
        // Bug #2 fix: Store pending state and redirect to PayPal
        localStorage.setItem('pendingOrderId', data.orderId);
        localStorage.setItem('pendingPlanId', 'COMPLETE');
        window.location.href = data.approvalUrl;
      }
    } catch {
      setIsPaywallLoading(false);
    }
  };

  const handleContinueFree = () => {
    setShowPaywall(false);
    setHasSeenPaywall(true);
    // Bug #4 fix: After seeing paywall, lock user to Q1-15 only â€?navigate back
    if (currentQuestion >= FREE_QUESTIONS) {
      setCurrentQuestion(FREE_QUESTIONS - 1);
    }
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    // Bug #1 fix: Show paywall EVERY TIME user reaches Q15, regardless of prior dismissals
    if (currentQuestion === FREE_QUESTIONS - 1 && !isUnlocked) {
      setShowPaywall(true);
      return;
    }

    if (currentQuestion < TOTAL_QUESTIONS - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsCalculating(true);
    
    const style = calculateAttachmentStyle(answers);
    
    localStorage.setItem('assessmentAnswers', JSON.stringify(answers));
    localStorage.setItem('attachmentStyle', style);
    localStorage.setItem('assessmentCompleted', 'true');
    localStorage.setItem('assessmentDate', new Date().toISOString());
    
    setTimeout(() => {
      setIsComplete(true);
      setIsCalculating(false);
      router.push('/result');
    }, 1500);
  };

  const question = QUESTIONS[currentQuestion];
  const hasAnswer = answers[currentQuestion] !== null;
  const allAnswered = answers.every(a => a !== null);
  const isPremiumQuestion = currentQuestion >= FREE_QUESTIONS;
  const isLocked = isPremiumQuestion && !isUnlocked;
  const answeredFreeCount = answers.slice(0, FREE_QUESTIONS).filter(a => a !== null).length;
  const lockedCount = TOTAL_QUESTIONS - FREE_QUESTIONS;

  const progress = isUnlocked
    ? ((currentQuestion + (hasAnswer ? 1 : 0)) / TOTAL_QUESTIONS) * 100
    : (answeredFreeCount / FREE_QUESTIONS) * 100;

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900">Verifying access...</h2>
        </div>
      </div>
    );
  }

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900">Analyzing Your Responses...</h2>
          <p className="text-gray-600 mt-2">Calculating your attachment style</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Attachment Style Assessment</h1>
          <p className="text-gray-600">
            {isUnlocked 
              ? `Complete all ${TOTAL_QUESTIONS} questions for your full profile`
              : `Answer ${FREE_QUESTIONS} questions to discover your attachment style`}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              {isUnlocked ? (
                <>Question {currentQuestion + 1} of {TOTAL_QUESTIONS}</>
              ) : (
                <span className="flex items-center gap-2">
                  <span className="text-blue-600 font-medium">{answeredFreeCount} of {FREE_QUESTIONS} free</span>
                  <span className="text-gray-400">â€?/span>
                  <span className="text-purple-600 font-medium">{lockedCount} locked</span>
                </span>
              )}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                isUnlocked 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                  : 'bg-gradient-to-r from-blue-500 via-purple-500 to-gray-300'
              }`}
              style={{ 
                width: `${progress}%`,
                background: isUnlocked 
                  ? undefined 
                  : `linear-gradient(to right, #3B82F6 ${progress}%, #E5E7EB ${progress}%)`
              }}
            ></div>
          </div>

          {/* Lock indicator */}
          {!isUnlocked && (
            <div className="mt-2 text-center">
              <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                {lockedCount} questions unlocked with premium
              </span>
            </div>
          )}
        </div>

        {/* Question Card */}
        {isLocked ? (
          <TeaserPreview question={question} onUnlock={() => setShowPaywall(true)} />
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-2 mb-4">
              {isPremiumQuestion ? (
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                  Premium Question {question.id}
                </span>
              ) : (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  Question {question.id}
                </span>
              )}
              {isUnlocked && isPremiumQuestion && (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  âœ?Unlocked
                </span>
              )}
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    answers[currentQuestion] === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center">
                    <span className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                      answers[currentQuestion] === option.value
                        ? 'border-blue-500 bg-blue-500 text-white'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion] === option.value && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    {option.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                  currentQuestion === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              {currentQuestion < TOTAL_QUESTIONS - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!hasAnswer}
                  className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                    !hasAnswer
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!allAnswered}
                  className={`px-8 py-3 rounded-xl font-semibold transition-colors ${
                    !allAnswered
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  }`}
                >
                  See My Results â†?                </button>
              )}
            </div>
          </div>
        )}

        {/* After paywall dismissed, lock to Q1-15 â€?show "See results" instead */}
        {hasSeenPaywall && !isUnlocked && (
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm mb-2">You've completed the free preview</p>
            <button
              onClick={handleSubmit}
              disabled={answeredFreeCount < FREE_QUESTIONS}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              See Your Results â†?            </button>
          </div>
        )}

        {/* Free Questions Completion Banner */}
        {!isUnlocked && answeredFreeCount === FREE_QUESTIONS && !hasSeenPaywall && (
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Great progress! ðŸŽ‰</h3>
                <p className="text-gray-600 text-sm mb-3">
                  You've answered all free questions. Upgrade to unlock the remaining {lockedCount} questions and get your complete attachment profile.
                </p>
                <button
                  onClick={() => setShowPaywall(true)}
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Unlock Full Assessment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Your responses are private and secure ðŸ”’
        </p>
      </div>

      {/* Paywall Modal */}
      {showPaywall && (
        <PaywallModal
          onUnlock={handleUnlock}
          onContinueFree={handleContinueFree}
          isLoading={isPaywallLoading}
        />
      )}
    </div>
  );
}
