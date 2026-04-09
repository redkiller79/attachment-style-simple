'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PRICING } from '@/lib/pricing';

const PRICING_PLANS = [
  {
    planId: 'BASIC' as const,
    name: PRICING.BASIC.name,
    price: PRICING.BASIC.price,
    description: PRICING.BASIC.description,
    features: [
      '15-question free trial',
      'Basic attachment style analysis',
      'Personalized insights',
      'PDF report download',
    ],
    featured: false,
  },
  {
    planId: 'COMPLETE' as const,
    name: PRICING.COMPLETE.name,
    price: PRICING.COMPLETE.price,
    description: PRICING.COMPLETE.description,
    features: [
      'Full 36-question assessment',
      'Complete attachment profile',
      'Detailed relationship patterns',
      'AI-powered BondType analysis',
      'BondType coaching chatbot',
      'PDF report download',
    ],
    featured: true,
  },
];

export default function CheckoutClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState<string>('COMPLETE');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string>('');
  const [testResultId, setTestResultId] = useState<string>('');

  useEffect(() => {
    // Get session ID from localStorage or generate one
    let storedSessionId = localStorage.getItem('paymentSessionId');
    if (!storedSessionId) {
      storedSessionId = crypto.randomUUID();
      localStorage.setItem('paymentSessionId', storedSessionId);
    }
    setSessionId(storedSessionId);

    // Get test result ID from URL or localStorage
    const urlTestResultId = searchParams?.get('testResultId');
    const storedTestResultId = localStorage.getItem('testResultId');
    const resultId = urlTestResultId || storedTestResultId || '';
    setTestResultId(resultId);

    // Get plan from URL if specified
    const urlPlan = searchParams?.get('plan');
    if (urlPlan && PRICING_PLANS.some(p => p.planId === urlPlan)) {
      setSelectedPlan(urlPlan);
    }
  }, [searchParams]);

  const handlePayment = async () => {
    if (!selectedPlan) {
      setError('Please select a plan');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch('/api/payment/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: selectedPlan,
          testResultId: testResultId,
          sessionId: sessionId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create payment order');
      }

      // Save pending payment info
      localStorage.setItem('pendingOrderId', data.orderId);
      localStorage.setItem('pendingPlanId', selectedPlan);
      localStorage.setItem('pendingSessionId', data.sessionId || sessionId);

      // Redirect to PayPal
      if (data.approvalUrl) {
        window.location.href = data.approvalUrl;
      } else {
        throw new Error('No approval URL returned');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
      setIsProcessing(false);
    }
  };

  const selectedPlanData = PRICING_PLANS.find(p => p.planId === selectedPlan);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Link
            href="/result"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            ← Back to Results
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Complete Your Purchase</h1>
          <p className="text-gray-600 text-lg">
            Choose a plan to unlock your full attachment style report
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.planId}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                selectedPlan === plan.planId
                  ? 'ring-2 ring-blue-500 transform scale-105'
                  : 'border border-gray-200 hover:shadow-xl'
              } ${plan.featured ? 'border-2 border-blue-500' : ''}`}
              onClick={() => setSelectedPlan(plan.planId)}
            >
              {plan.featured && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  {selectedPlan === plan.planId && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price.toFixed(2)}</span>
                  <span className="text-gray-600"> USD</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan(plan.planId);
                  }}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    selectedPlan === plan.planId
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.planId ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
          
          {selectedPlanData && (
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedPlanData.name}</h3>
                  <p className="text-gray-600 text-sm">{selectedPlanData.description}</p>
                </div>
                <span className="text-lg font-bold text-gray-900">${selectedPlanData.price.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${selectedPlanData.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Processing fee</span>
                <span>$0.00</span>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t text-lg font-bold">
                <span>Total</span>
                <span>${selectedPlanData.price.toFixed(2)} USD</span>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
              ❌ Error: {error}
            </div>
          )}

          <button
            onClick={handlePayment}
            disabled={isProcessing || !selectedPlan}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                Processing...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Pay with PayPal
              </>
            )}
          </button>

          <p className="text-center text-gray-500 text-sm mt-4">
            You'll be redirected to PayPal to complete your payment
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            Secure Payment
          </div>
          <div className="flex items-center gap-2">
            <span>💳</span>
            PayPal Protected
          </div>
          <div className="flex items-center gap-2">
            <span>↩️</span>
            30-Day Refund
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            Email Support
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                q: 'What happens after I pay?',
                a: 'You\'ll be redirected back to your results page where your full report will be unlocked immediately.',
              },
              {
                q: 'Can I get a refund?',
                a: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with your report.',
              },
              {
                q: 'Is my payment secure?',
                a: 'Yes, we use PayPal for all payments. We never store your credit card information.',
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Yes, you can upgrade at any time by purchasing a higher-tier plan.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}