'use client';

import { Check, Sparkles, Rocket, Terminal } from 'lucide-react';

const plans = [
  {
    name: '混沌蓝图-完整版',
    price: '$79.99',
    description: 'Complete cosmic blueprint analysis',
    features: [
      'Complete Four Pillars analysis',
      'Full birth chart analysis',
      'Year, Month, Day & Hour pillar mastery',
      'Monthly cosmic weather updates',
      'Lifetime access to all updates',
      'Priority processing and support',
      'PDF download included',
    ],
    notIncluded: [],
    cta: 'Get Complete Blueprint',
    popular: true,
    accentColor: '#5B4B8A',
  },
];

export default function PricingCards() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F59E0B] text-sm font-medium tracking-widest uppercase mb-4 block">
            Investment in Understanding
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Path
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each Blueprint reading requires 47 calculations. Your investment honors the complexity 
            of the map — and your readiness to receive it.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#5B4B8A]/30 to-[#0D1B2A]/50 border-2 border-[#5B4B8A]'
                  : 'bg-[#0D1B2A]/30 border border-gray-800'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#5B4B8A] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${plan.accentColor}20` }}
                >
                  {plan.name === 'Explorer' && (
                    <Sparkles className="w-8 h-8" style={{ color: plan.accentColor }} />
                  )}
                  {plan.name === 'Navigator' && (
                    <Rocket className="w-8 h-8" style={{ color: plan.accentColor }} />
                  )}
                  {plan.name === 'Architect' && (
                    <Terminal className="w-8 h-8" style={{ color: plan.accentColor }} />
                  )}
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-['Space_Grotesk'] text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: plan.accentColor }}
                    />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 opacity-40">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-500" />
                    <span className="text-gray-500 text-sm line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className="w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: plan.popular ? plan.accentColor : `${plan.accentColor}30`,
                  color: plan.popular ? 'white' : plan.accentColor,
                  border: plan.popular ? 'none' : `1px solid ${plan.accentColor}50`,
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee Note */}
        <p className="text-center text-gray-500 text-sm mt-12">
          Secure payment • Instant access • 47 calculations per reading
        </p>
      </div>
    </section>
  );
}
