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
  // Premium Questions 16-36
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

const COMPLETE_PRICE = 9.99;

function PaywallModal({ onUnlock, onContinueFree, isLoading }: { onUnlock: () => void; onContinueFree: () => void; isLoading?: boolean }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#191a1b] rounded-xl max-w-lg w-full p-8 border border-[rgba(255,255,255,0.08)]">
        <div className="w-16 h-16 bg-gradient-to-br from-[#5e6ad2] to-[#7170ff] rounded-xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h2 className="text-2xl font-medium text-[#f7f8f8] text-center mb-3">
          Unlock the Full Assessment
        </h2>
        <p className="text-[#8a8f98] text-center mb-6">
          You've completed the free preview. Get your complete attachment profile.
        </p>

        <div className="space-y-3 mb-8">
          {[
            { icon: '🎯', text: 'Unlock remaining 21 questions' },
            { icon: '📊', text: 'Detailed scoring algorithm' },
            { icon: '💡', text: 'Personalized insights & recommendations' },
            { icon: '📱', text: 'Mobile-friendly report you can save' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[#d0d6e0]">
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#0f1011] rounded-xl p-6 mb-6 text-center border border-[rgba(255,255,255,0.08)]">
          <div className="text-sm text-[#8a8f98] line-through mb-1">Normally $29</div>
          <div className="text-4xl font-medium text-[#f7f8f8] mb-1">${COMPLETE_PRICE.toFixed(2)}</div>
          <div className="text-sm text-[#8a8f98]">One-time payment - Lifetime access</div>
        </div>

        <button
          onClick={onUnlock}
          disabled={isLoading}
          className="w-full py-4 bg-[#5e6ad2] text-white rounded-md font-medium text-base hover:bg-[#828fff] transition-colors mb-3 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
          className="w-full py-3 text-[#8a8f98] hover:text-[#d0d6e0] font-medium transition-colors"
        >
          Continue with free preview
        </button>
      </div>
    </div>
  );
}

function TeaserPreview({ question, onUnlock }: { question: typeof QUESTIONS[0]; onUnlock: () => void }) {
  return (
    <div className="bg-[#191a1b] rounded-xl p-8 opacity-75 border border-[rgba(255,255,255,0.08)]">
      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-[rgba(94,106,210,0.1)] text-[#5e6ad2] text-xs font-medium rounded-full">
          Premium Question {question.id}
        </span>
        <span className="px-3 py-1 bg-[#191a1b] text-[#8a8f98] text-xs font-medium rounded-full flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Locked
        </span>
      </div>
      
      <h2 className="text-xl font-medium text-[#f7f8f8] mb-6">
        {question.text}
      </h2>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <div
            key={index}
            className="w-full text-left p-4 rounded-md border border-[rgba(255,255,255,0.08)] bg-[#0f1011] cursor-pointer"
          >
            <span className="flex items-center">
              <span className="w-6 h-6 rounded-full border border-[rgba(94,106,210,0.3)] mr-3"></span>
              {option.text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onUnlock}
        className="w-full py-3 bg-[#5e6ad2] text-white rounded-md font-medium hover:bg-[#828fff] transition-colors"
      >
        Unlock to answer →
      </button>
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
  const [isVerifying, setIsVerifying] = useState(true);
  const [isPaywallLoading, setIsPaywallLoading] = useState(false);

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
        // Network error - fall back to localStorage for UX only
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
    if (currentQuestion >= FREE_QUESTIONS) {
      setCurrentQuestion(FREE_QUESTIONS - 1);
    }
  };

  const handleAnswer = async (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    
    // Save response to database
    try {
      // Get or create session ID
      let sessionId = localStorage.getItem('quizSessionId');
      if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem('quizSessionId', sessionId);
      }
      
      // Save to database
      await fetch('/api/quiz/save-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          questionId: currentQuestion + 1, // Questions are 1-indexed
          answer: value
        }),
      });
    } catch (error) {
      console.error('Failed to save response to database:', error);
      // Continue anyway - localStorage backup is already in place
    }
  };

  const handleNext = () => {
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

  const handleSubmit = async () => {
    setIsCalculating(true);
    
    const style = calculateAttachmentStyle(answers);
    
    // Calculate scores
    const anxietyQuestions = [1, 2, 4, 6, 8, 10, 12, 13, 15, 17, 18, 20, 21, 23, 25, 27, 29, 30, 32, 33, 34, 36];
    const avoidanceQuestions = [1, 3, 4, 7, 8, 11, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 31, 33, 34, 36];
    
    let anxietyScore = 0;
    let avoidanceScore = 0;
    let secureScore = 0;
    let disorganizedScore = 0;
    
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
    
    // Calculate derived scores
    const maxScore = 3 * 36; // Max possible score
    secureScore = Math.max(0, maxScore - anxietyScore - avoidanceScore);
    disorganizedScore = Math.min(anxietyScore, avoidanceScore);
    
    const scores = {
      secure: secureScore,
      anxious: anxietyScore,
      avoidant: avoidanceScore,
      disorganized: disorganizedScore
    };
    
    // Save to localStorage
    localStorage.setItem('assessmentAnswers', JSON.stringify(answers));
    localStorage.setItem('attachmentStyle', style);
    localStorage.setItem('assessmentCompleted', 'true');
    localStorage.setItem('assessmentDate', new Date().toISOString());
    
    // Save to database
    try {
      // Get session ID
      let sessionId = localStorage.getItem('quizSessionId');
      if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem('quizSessionId', sessionId);
      }
      
      // Save complete result
      await fetch('/api/quiz/save-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          answers: answers.filter(a => a !== null) as number[],
          scores,
          primaryStyle: style,
          reportType: isUnlocked ? 'complete' : 'basic'
        }),
      });
      
      // Save test result ID for payment reference
      localStorage.setItem('testResultId', sessionId);
      
    } catch (error) {
      console.error('Failed to save result to database:', error);
      // Continue anyway - localStorage backup is in place
    }
    
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
      <div className="min-h-screen bg-[#08090a] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#5e6ad2] border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-2xl font-medium text-[#f7f8f8]">Verifying access...</h2>
        </div>
      </div>
    );
  }

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-[#08090a] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#5e6ad2] border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-2xl font-medium text-[#f7f8f8]">Analyzing Your Responses...</h2>
          <p className="text-[#8a8f98] mt-2">Calculating your attachment style</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090a] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium text-[#f7f8f8] mb-2">Attachment Style Assessment</h1>
          <p className="text-[#8a8f98]">
            {isUnlocked 
              ? `Complete all ${TOTAL_QUESTIONS} questions for your full profile`
              : `Answer ${FREE_QUESTIONS} questions to discover your attachment style`}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-[#8a8f98] mb-2">
            <span>
              {isUnlocked ? (
                <>Question {currentQuestion + 1} of {TOTAL_QUESTIONS}</>
              ) : (
                <span className="flex items-center gap-2">
                  <span className="text-[#7170ff] font-medium">{answeredFreeCount} of {FREE_QUESTIONS} free</span>
                  <span className="text-[rgba(255,255,255,0.2)]">/</span>
                  <span className="text-[#5e6ad2] font-medium">{lockedCount} locked</span>
                </span>
              )}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          
          <div className="w-full bg-[#191a1b] rounded-full h-2 overflow-hidden">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                isUnlocked 
                  ? 'bg-[#5e6ad2]' 
                  : 'bg-gradient-to-r from-[#7170ff] via-[#5e6ad2] to-[#191a1b]'
              }`}
              style={{ 
                width: `${progress}%`,
              }}
            ></div>
          </div>

          {!isUnlocked && (
            <div className="mt-2 text-center">
              <span className="inline-flex items-center gap-1 text-xs text-[#8a8f98] bg-[#191a1b] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.08)]">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                {lockedCount} questions unlocked with premium
              </span>
            </div>
          )}
        </div>

        {isLocked ? (
          <TeaserPreview question={question} onUnlock={() => setShowPaywall(true)} />
        ) : (
          <div className="bg-[#191a1b] rounded-xl p-8 border border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-2 mb-4">
              {isPremiumQuestion ? (
                <span className="px-3 py-1 bg-[rgba(94,106,210,0.1)] text-[#5e6ad2] text-xs font-medium rounded-full">
                  Premium Question {question.id}
                </span>
              ) : (
                <span className="px-3 py-1 bg-[rgba(113,112,255,0.1)] text-[#7170ff] text-xs font-medium rounded-full">
                  Question {question.id}
                </span>
              )}
              {isUnlocked && isPremiumQuestion && (
                <span className="px-3 py-1 bg-[rgba(113,112,255,0.1)] text-[#7170ff] text-xs font-medium rounded-full">
                  ✓ Unlocked
                </span>
              )}
            </div>
            
            <h2 className="text-xl font-medium text-[#f7f8f8] mb-6">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full text-left p-4 rounded-md border transition-colors ${
                    answers[currentQuestion] === option.value
                      ? 'border-[#7170ff] bg-[rgba(113,112,255,0.1)] text-[#7170ff] font-medium'
                      : 'border-[rgba(255,255,255,0.08)] hover:border-[#7170ff] hover:bg-[#0f1011]'
                  }`}
                >
                  <span className="flex items-center">
                    <span className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center ${
                      answers[currentQuestion] === option.value
                        ? 'border-[#7170ff] bg-[#7170ff] text-white'
                        : 'border-[rgba(94,106,210,0.3)]'
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

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  currentQuestion === 0
                    ? 'bg-[#191a1b] text-[#62666d] cursor-not-allowed'
                    : 'bg-[#191a1b] text-[#d0d6e0] hover:bg-[rgba(94,106,210,0.1)]'
                }`}
              >
                Previous
              </button>

              {currentQuestion < TOTAL_QUESTIONS - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!hasAnswer}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    !hasAnswer
                      ? 'bg-[#191a1b] text-[#62666d] cursor-not-allowed'
                      : 'bg-[#5e6ad2] text-white hover:bg-[#828fff]'
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!allAnswered}
                  className={`px-8 py-3 rounded-md font-medium transition-colors ${
                    !allAnswered
                      ? 'bg-[#191a1b] text-[#62666d] cursor-not-allowed'
                      : 'bg-[#5e6ad2] text-white hover:bg-[#828fff]'
                  }`}
                >
                  See My Results →
                </button>
              )}
            </div>
          </div>
        )}

        {hasSeenPaywall && !isUnlocked && (
          <div className="mt-4 text-center">
            <p className="text-[#8a8f98] text-sm mb-2">You've completed the free preview</p>
            <button
              onClick={handleSubmit}
              disabled={answeredFreeCount < FREE_QUESTIONS}
              className="px-6 py-3 bg-[#5e6ad2] text-white rounded-md font-medium hover:bg-[#828fff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              See Your Results →
            </button>
          </div>
        )}

        {!isUnlocked && answeredFreeCount === FREE_QUESTIONS && !hasSeenPaywall && (
          <div className="mt-6 bg-[#0f1011] rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e6ad2] to-[#7170ff] rounded-md flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-[#f7f8f8] mb-1">Great progress! 🎉</h3>
                <p className="text-[#8a8f98] text-sm mb-3">
                  You've answered all free questions. Upgrade to unlock the remaining {lockedCount} questions and get your complete attachment profile.
                </p>
                <button
                  onClick={() => setShowPaywall(true)}
                  className="px-5 py-2 bg-[#5e6ad2] text-white rounded-md font-medium text-sm hover:bg-[#828fff] transition-colors"
                >
                  Unlock Full Assessment
                </button>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-[#8a8f98] text-sm mt-6">
          Your responses are private and secure 🔒
        </p>
      </div>

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
