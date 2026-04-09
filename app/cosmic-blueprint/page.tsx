import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Map, Cpu } from 'lucide-react';
import ChaosTheorySection from '@/components/cosmic-blueprint/ChaosTheorySection';
import PricingCards from '@/components/cosmic-blueprint/PricingCards';
import BlueprintPreview from '@/components/cosmic-blueprint/BlueprintPreview';

export const metadata: Metadata = {
  title: 'Cosmic Blueprint — Pattern Intelligence Series | Navigate Your Consciousness',
  description:
    'Discover your energetic terrain through Chrono-Pattern Analysis reframed through modern complexity science. Not fortune-telling — navigation. Starting at $79.99.',
  keywords:
    'cosmic blueprint, birth chart analysis, Chrono-Pattern, four pillars, chaos theory personality, energy mapping, self-discovery, pattern intelligence, consciousness cartography',
  openGraph: {
    title: 'Cosmic Blueprint — Navigate Your Chaos',
    description:
      'The universe is chaos. Your life doesn\'t have to be. Discover your energetic terrain with precision analysis starting at $79.99.',
    type: 'website',
  },
};

export default function CosmicBlueprintPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Cosmic Blueprint',
            description:
              'Premium self-exploration platform using Temporal Genesis Matrix technology to map your unique Pattern Intelligence through complexity science.',
            brand: {
              '@type': 'Brand',
              name: 'Cosmic Blueprint',
            },
            offers: [
              {
                '@type': 'Offer',
                name: '混沌蓝图-完整版',
                price: '79.99',
                priceCurrency: 'USD',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Deep Space Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0D1B2A] to-[#0a0a0f]" />

          {/* Animated Particles/Stellar Field */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor:
                    i % 3 === 0
                      ? '#5B4B8A'
                      : i % 3 === 1
                      ? '#2DD4BF'
                      : '#F59E0B',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`,
                }}
              />
            ))}
          </div>

          {/* Abstract Attractor Lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5B4B8A" />
                <stop offset="50%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            <path
              d="M200,800 Q300,600 500,500 Q700,400 800,200"
              fill="none"
              stroke="url(#heroGradient)"
              strokeWidth="2"
              className="animate-pulse"
            />
            <path
              d="M100,700 Q250,550 450,450 Q650,350 900,150"
              fill="none"
              stroke="url(#heroGradient)"
              strokeWidth="1"
              opacity="0.5"
            />
            <path
              d="M300,900 Q400,700 600,550 Q800,400 850,250"
              fill="none"
              stroke="url(#heroGradient)"
              strokeWidth="1.5"
              opacity="0.7"
            />
          </svg>

          {/* Radial Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-[#5B4B8A]/20 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-[#0D1B2A]/50 border border-[#5B4B8A]/30 rounded-full px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-gray-300 text-sm">The Pattern Intelligence Series</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            The Universe Is Chaos.
            <br />
            <span className="bg-gradient-to-r from-[#5B4B8A] via-[#2DD4BF] to-[#F59E0B] bg-clip-text text-transparent">
              Your Life Doesn&apos;t Have to Be.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto italic">
            &ldquo;Navigate the chaos. Find your pattern.&rdquo;
          </p>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Cosmic Blueprint maps your unique Pattern Intelligence through the Temporal Genesis Matrix — 
            a precision framework for understanding consciousness cartography. Not fortune-telling. Navigation.
          </p>

          {/* CTA Button */}
          <Link
            href="#pricing"
            className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-[#5B4B8A] to-[#2DD4BF] text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[#5B4B8A]/30"
          >
            Discover Your Blueprint
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Map className="w-4 h-4" />
              <span>Temporal Genesis Matrix analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Pattern Intelligence framework</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-4 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold text-white mb-8">
            You&apos;ve Tried the Personality Tests.
            <br />
            <span className="text-[#5B4B8A]">You&apos;ve Read the Horoscopes.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            MBTI. Enneagram. Human Design. They all give you labels. But labels aren&apos;t maps. 
            They don&apos;t show you the terrain — the invisible frequencies of consciousness that shape how 
            you think, love, and move through the world.
          </p>
          <p className="font-['Cormorant_Garamond'] text-xl text-[#2DD4BF] italic">
            &ldquo;You don&apos;t need another label. You need a map.&rdquo;
          </p>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#0D1B2A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5B4B8A] text-sm font-medium tracking-widest uppercase mb-4 block">
              The Method
            </span>
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-6">
              What is Cosmic Blueprint?
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Cosmic Blueprint uses the <strong className="text-white">Temporal Genesis Matrix</strong> — 
              a precision framework mapping four dimensions of your unique consciousness pattern. 
              Built on complexity science and psychological typology, it reveals terrain no other system can see.
            </p>
          </div>

          {/* Four Pillars Visualization */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                pillar: 'Origin',
                title: 'Your Foundation',
                desc: 'How the world perceives your outer expression',
                color: '#F59E0B',
              },
              {
                pillar: 'Growth',
                title: 'Your Evolution',
                desc: 'Where you direct your energy and ambition',
                color: '#2DD4BF',
              },
              {
                pillar: 'Core',
                title: 'Your Essence',
                desc: 'The core frequency of who you are',
                color: '#EF4444',
              },
              {
                pillar: 'Depth',
                title: 'Your Intimacy',
                desc: 'How you connect with intimacy and the unseen',
                color: '#5B4B8A',
              },
            ].map((item) => (
              <div
                key={item.pillar}
                className="bg-[#0D1B2A]/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-opacity-50 transition-all"
                style={{ borderColor: `${item.color}30` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  {item.pillar.charAt(0)}
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2">
                  {item.pillar} Thread
                </h3>
                <p className="text-[#F59E0B] text-sm font-medium mb-2">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Key Differentiators */}
          <div className="bg-[#0D1B2A]/30 border border-[#5B4B8A]/20 rounded-3xl p-8 md:p-12">
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-8 text-center">
              How is this different from traditional astrology?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gray-400 font-semibold mb-4">Traditional Astrology</h4>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">✗</span>
                    <span>Based on sun sign only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">✗</span>
                    <span>Fixed predictions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">✗</span>
                    <span>Generic horoscopes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#2DD4BF] font-semibold mb-4">Cosmic Blueprint</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#2DD4BF]">✓</span>
                    <span>Precise birth timestamp (hour, minute, location)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2DD4BF]">✓</span>
                    <span>Dynamic, navigable Pattern Intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2DD4BF]">✓</span>
                    <span>Personalized consciousness map</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Preview */}
      <BlueprintPreview />

      {/* Philosophy Section */}
      <ChaosTheorySection />

      {/* Pricing Section */}
      <div id="pricing">
        <PricingCards />
      </div>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#0D1B2A]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#F59E0B] text-sm font-medium tracking-widest uppercase mb-4 block">
            Cannot Be Used Lightly
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Map Your Pattern?
          </h2>
          <p className="font-['Cormorant_Garamond'] text-xl text-gray-300 italic mb-8">
            &ldquo;The map requires intention. Pattern Intelligence cannot be navigated without 
            genuine engagement.&rdquo;
          </p>

          <div className="bg-[#0D1B2A]/50 border border-[#5B4B8A]/30 rounded-3xl p-8 mb-8">
            <p className="text-gray-400 mb-6">
              This is not entertainment. This is not casual curiosity. If you&apos;re here, 
              you&apos;re ready. If you&apos;re ready, the investment honors the work.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
              <span>Limited availability each week</span>
              <span>•</span>
              <span>12 Pattern mappings maximum</span>
              <span>•</span>
              <span>Temporal Genesis Matrix analysis</span>
            </div>
          </div>

          <Link
            href="#pricing"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#F59E0B] to-[#5B4B8A] text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[#F59E0B]/20"
          >
            Begin Your Blueprint
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-gray-500 text-sm mt-8">
            Already know your BondType?{' '}
            <Link href="/test" className="text-[#2DD4BF] hover:underline">
              Take the attachment style assessment first →
            </Link>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-[#0a0a0f] border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0D1B2A]/30 border border-gray-800 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#F59E0B] text-2xl">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="font-['Cormorant_Garamond'] text-2xl text-gray-300 italic mb-6">
              &ldquo;I&apos;ve tried every personality system out there. Human Design, Gene Keys, 
              Enneagram. Cosmic Blueprint is the one that actually felt like seeing my own pattern for the first time.&rdquo;
            </blockquote>
            <p className="text-[#5B4B8A] font-medium">— Sarah M., Los Angeles</p>
          </div>
        </div>
      </section>
    </div>
  );
}
