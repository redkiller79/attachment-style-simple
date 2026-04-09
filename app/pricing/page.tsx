import Link from 'next/link';
import { PRICING } from '@/lib/pricing';

export const metadata = {
  title: 'Pricing - Attachment Style Assessment',
  description: 'Choose between Basic Report ($14.99) or Complete Report + AI ($24.99, originally $49.99) for your attachment style assessment.',
};

export default function PricingPage() {
  const plans = [
    {
      id: 'BASIC',
      name: PRICING.BASIC.name,
      price: PRICING.BASIC.price,
      description: PRICING.BASIC.description,
      features: [
        '15-question free trial',
        'Basic attachment style analysis',
        'Personalized insights',
        'PDF report download',
      ],
      borderColor: 'rgba(255,255,255,0.08)',
      buttonBg: '#5e6ad2',
      popular: false,
    },
    {
      id: 'COMPLETE',
      name: PRICING.COMPLETE.name,
      price: PRICING.COMPLETE.price,
      originalPrice: PRICING.COMPLETE.originalPrice,
      description: PRICING.COMPLETE.description,
      features: [
        'Full 36-question assessment',
        'Complete attachment profile',
        'Detailed relationship patterns',
        'AI-powered BondType analysis',
        'BondType coaching chatbot',
        'PDF report download',
      ],
      borderColor: '#5e6ad2',
      buttonBg: 'linear-gradient(to right, #5e6ad2, #7170ff)',
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#08090a] py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-[#f7f8f8] mb-4 tracking-tight">
            Choose Your Plan
          </h1>
          <p className="text-[#d0d6e0] max-w-2xl mx-auto">
            Start with the Basic Plan or get the Complete Report with full analysis.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#191a1b] rounded-xl overflow-hidden border ${
                plan.popular ? 'border-[#5e6ad2]' : 'border-[rgba(255,255,255,0.08)]'
              }`}
            >
              {plan.popular && (
                <div className="bg-[#5e6ad2] text-white text-center py-2 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8 text-center">
                <h2 className="text-xl font-medium text-[#f7f8f8] mb-2">
                  {plan.name}
                </h2>
                <p className="text-[#8a8f98] text-sm mb-5">{plan.description}</p>
                <div className="mb-6">
                  {'originalPrice' in plan && plan.originalPrice ? (
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-5xl font-medium text-[#f7f8f8]">${plan.price.toFixed(2)}</span>
                      <span className="text-lg text-[#62666d] line-through">${plan.originalPrice.toFixed(2)}</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-5xl font-medium text-[#f7f8f8]">${plan.price.toFixed(2)}</span>
                    </div>
                  )}
                  <span className="text-[#8a8f98] text-sm ml-1"> USD</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#7170ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#d0d6e0] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/checkout?plan=${plan.id}`}
                  className="w-full py-3 px-6 rounded-md font-medium text-white transition-colors flex items-center justify-center gap-2"
                  style={{
                    background: plan.buttonBg,
                  }}
                >
                  <span>{plan.buttonText || (plan.id === 'BASIC' ? 'Start with Basic' : 'Get Complete Report')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* What People Say */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-xl font-medium text-[#f7f8f8] mb-8 text-center">
            What People Say After Getting Their Report
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#191a1b] rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <p className="text-[#d0d6e0] text-sm italic mb-3">
                &quot;I expected another generic personality quiz. Instead I got something that described
                my marriage patterns so accurately I forwarded it to my therapist.&quot;
              </p>
              <p className="text-[#8a8f98] text-xs">— M, 41, Chicago</p>
            </div>
            <div className="bg-[#191a1b] rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <p className="text-[#d0d6e0] text-sm italic mb-3">
                &quot;The premium report helped me understand why I always felt like I had to chase
                my partner. That was worth every penny.&quot;
              </p>
              <p className="text-[#8a8f98] text-xs">— R, 28, Portland</p>
            </div>
            <div className="bg-[#191a1b] rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <p className="text-[#d0d6e0] text-sm italic mb-3">
                &quot;I was skeptical. But the language in the report — about how anxious attachment
                shows up — was like reading a description of myself.&quot;
              </p>
              <p className="text-[#8a8f98] text-xs">— K, 35, New York</p>
            </div>
            <div className="bg-[#191a1b] rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <p className="text-[#d0d6e0] text-sm italic mb-3">
                &quot;Simple, direct, no nonsense. I took the test, paid, got my PDF.
                Exactly what I needed.&quot;
              </p>
              <p className="text-[#8a8f98] text-xs">— D, 30, Denver</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-[#f7f8f8] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-[#191a1b] rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <h3 className="font-medium text-[#f7f8f8] text-sm mb-2">
                How does payment work?
              </h3>
              <p className="text-[#8a8f98] text-sm">
                We use PayPal for secure payments. After completing the test, you&apos;ll be redirected
                to PayPal to complete your purchase.
              </p>
            </div>
            <div className="bg-[#191a1b] rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <h3 className="font-medium text-[#f7f8f8] text-sm mb-2">
                Can I get a refund?
              </h3>
              <p className="text-[#8a8f98] text-sm">
                Yes. If you&apos;re not satisfied with your report, email us within 30 days and we&apos;ll refund you.
                No questions asked.
              </p>
            </div>
            <div className="bg-[#191a1b] rounded-xl p-5 border border-[rgba(255,255,255,0.08)]">
              <h3 className="font-medium text-[#f7f8f8] text-sm mb-2">
                How will I receive my report?
              </h3>
              <p className="text-[#8a8f98] text-sm">
                Your report is generated immediately after payment and available as a PDF you can
                access and download right away.
              </p>
            </div>
          </div>
        </div>

        {/* Trust */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-8 text-[#8a8f98]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs font-medium">30-Day Refund</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
