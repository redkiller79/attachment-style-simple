'use client';

import { Sparkles, Expand, Map } from 'lucide-react';

export default function ChaosTheorySection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#0D1B2A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2DD4BF] text-sm font-medium tracking-widest uppercase mb-4 block">
            The Philosophy
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-6">
            Why the Universe is Unpredictable.
            <br />
            <span className="text-[#5B4B8A]">Your Life Doesn&apos;t Have to Be.</span>
          </h2>
          <p className="font-['Cormorant_Garamond'] text-xl text-gray-300 italic max-w-3xl mx-auto">
            &ldquo;The butterfly effect isn&apos;t poetry — it&apos;s physics. But within complexity, patterns emerge.&rdquo;
          </p>
        </div>

        {/* Two Types of Chaos */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* First Order Chaos */}
          <div className="bg-[#0D1B2A]/50 border border-[#5B4B8A]/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#5B4B8A]/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#5B4B8A]" />
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                First-Order Chaos
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              In 1963, Edward Lorenz discovered something profound: the universe operates as a chaotic system. 
              Tiny changes in initial conditions produce radically different outcomes. The universe is not 
              a clock to be wound — it is weather to be understood.
            </p>
            <p className="text-gray-400 font-['Cormorant_Garamond'] italic">
              &ldquo;Small causes can have massive, unforeseeable consequences.&rdquo;
            </p>
          </div>

          {/* Second Order Chaos */}
          <div className="bg-[#0D1B2A]/50 border border-[#2DD4BF]/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2DD4BF]/20 flex items-center justify-center">
                <Expand className="w-6 h-6 text-[#2DD4BF]" />
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                Second-Order Complexity
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Cosmic Blueprint occupies a fascinating position: it is a map of consciousness. We chart the invisible 
              frequencies that shape your unique Pattern Intelligence. But here is the paradox — the map is 
              itself part of the territory.
            </p>
            <p className="text-[#2DD4BF] font-['Cormorant_Garamond'] italic">
              &ldquo;We don&apos;t predict your future. We map your Pattern Intelligence terrain.&rdquo;
            </p>
          </div>
        </div>

        {/* The Lorenz Attractor Section */}
        <div className="bg-[#0D1B2A]/30 border border-[#5B4B8A]/20 rounded-3xl p-12 text-center">
          <div className="mb-8">
            {/* Abstract Lorenz Attractor Visualization */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Stylized Lorenz Attractor */}
                <defs>
                  <linearGradient id="attractorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5B4B8A" />
                    <stop offset="50%" stopColor="#2DD4BF" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
                <path
                  d="M100,180 Q60,160 80,120 Q100,80 60,60 Q20,40 40,20 Q60,0 100,20 Q140,40 160,80 Q180,120 140,140 Q100,160 100,180"
                  fill="none"
                  stroke="url(#attractorGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <path
                  d="M100,180 Q140,160 120,120 Q100,80 140,60 Q180,40 160,20 Q140,0 100,20 Q60,40 40,80 Q20,120 60,140 Q100,160 100,180"
                  fill="none"
                  stroke="url(#attractorGradient)"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
                {/* Center point */}
                <circle cx="100" cy="100" r="4" fill="#F59E0B" className="animate-pulse" />
              </svg>
            </div>
          </div>

          <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-white mb-6">
            The Lorenz Attractor
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="text-[#F59E0B] font-semibold mb-2">Paths Diverge, Patterns Recur</h4>
              <p className="text-gray-400 text-sm">
                Two people born moments apart will have vastly different lives, yet both trace the same 
                fundamental attractor pattern. The shape is fixed; the journey is not.
              </p>
            </div>
            <div>
              <h4 className="text-[#2DD4BF] font-semibold mb-2">No Equilibrium</h4>
              <p className="text-gray-400 text-sm">
                The system never settles. It never repeats exactly. This is not a bug — it is the beauty 
                of existence. Your Blueprint promises coherent complexity.
              </p>
            </div>
            <div>
              <h4 className="text-[#5B4B8A] font-semibold mb-2">Sensitive Dependence</h4>
              <p className="text-gray-400 text-sm">
                Your birth moment sets your unique trajectory. Small differences create radically different 
                outcomes — but within the same strange attractor.
              </p>
            </div>
          </div>
        </div>

        {/* Why This Is a Map, Not a Prediction */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#0D1B2A]/50 border border-[#F59E0B]/30 rounded-full px-6 py-3 mb-8">
            <Map className="w-5 h-5 text-[#F59E0B]" />
            <span className="text-[#F59E0B] font-medium">This is a map, not a prediction</span>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Traditional fortune-telling says: &ldquo;This will happen to you.&rdquo; 
            Cosmic Blueprint says: &ldquo;This is the energetic territory you inhabit. 
            Here is how to walk it wisely.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
