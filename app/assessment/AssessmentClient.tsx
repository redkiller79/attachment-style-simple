'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const QUESTIONS = [
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
];

type AttachmentStyle = 'Secure' | 'Anxious' | 'Fearful' | 'Dismissive';

function calculateAttachmentStyle(answers: number[]): AttachmentStyle {
  const anxietyQuestions = [1, 2, 4, 6, 8, 10, 12, 13, 15, 17, 18, 20];
  const avoidanceQuestions = [1, 3, 4, 7, 8, 11, 12, 14, 15, 16, 18, 20];
  
  let anxietyScore = 0;
  let avoidanceScore = 0;
  
  answers.forEach((answer, index) => {
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

export default function AssessmentClient() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(20).fill(null));
  const [isComplete, setIsComplete] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const progress = ((currentQuestion + (answers[currentQuestion] !== null ? 1 : 0)) / 20) * 100;

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < 19) {
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
    
    const style = calculateAttachmentStyle(answers as number[]);
    
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
          <p className="text-gray-600">Answer 20 questions to discover your attachment style</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of 20</span>
            <span>{answers.filter(a => a !== null).length}/20 answered</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="mb-6 flex flex-wrap gap-2">
          {QUESTIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                currentQuestion === index
                  ? 'bg-blue-600 text-white'
                  : answers[index] !== null
                  ? 'bg-green-100 text-green-700 border border-green-300'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
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

            {currentQuestion < 19 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl font-semibold transition-colors bg-blue-600 text-white hover:bg-blue-700"
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
                See My Results →
              </button>
            )}
          </div>

          {/* Question dots */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {QUESTIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentQuestion
                    ? 'bg-blue-500'
                    : answers[index] !== null
                    ? 'bg-blue-300'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Your responses are private and secure 🔒
        </p>
      </div>
    </div>
  );
}
