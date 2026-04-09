'use client';

import { useState } from 'react';
import { Download, Eye, Calendar } from 'lucide-react';

const sampleBlueprint = {
  name: 'Sarah M.',
  birthData: 'March 15, 1989 • 3:42 PM',
  type: 'Navigator',
  pillars: [
    {
      name: 'Origin Thread',
      element: 'Earth',
      description: 'Your foundation — how the world perceives your outer expression',
      qualities: ['Stable', 'Nurturing', 'Reliable'],
    },
    {
      name: 'Growth Thread',
      element: 'Wood',
      description: 'Your evolution — where you direct your energy and ambition',
      qualities: ['Expansive', 'Visionary', 'Flexible'],
    },
    {
      name: 'Core Thread',
      element: 'Fire',
      description: 'Your essence — the core frequency of who you are',
      qualities: ['Radiant', 'Passionate', 'Transformative'],
    },
    {
      name: 'Depth Thread',
      element: 'Water',
      description: 'Your intimacy — how you connect with intimacy and the unseen',
      qualities: ['Intuitive', 'Flowing', 'Wise'],
    },
  ],
};

export default function BlueprintPreview() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0D1B2A] to-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2DD4BF] text-sm font-medium tracking-widest uppercase mb-4 block">
            What You Receive
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-6">
            Your Blueprint, Decoded
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A complete Pattern Intelligence analysis across four temporal dimensions. 
            Each thread reveals a different dimension of your cosmic self.
          </p>
        </div>

        {/* Blueprint Preview Card */}
        <div className="bg-[#0a0a0f] border border-[#5B4B8A]/30 rounded-3xl overflow-hidden max-w-4xl mx-auto">
          {/* Preview Header */}
          <div className="bg-gradient-to-r from-[#5B4B8A]/20 to-[#2DD4BF]/20 p-6 border-b border-[#5B4B8A]/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B4B8A] to-[#2DD4BF] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SB</span>
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                    {sampleBlueprint.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {sampleBlueprint.birthData}
                  </div>
                </div>
              </div>
              <span className="px-4 py-2 rounded-full bg-[#5B4B8A]/30 text-[#5B4B8A] text-sm font-medium">
                {sampleBlueprint.type}
              </span>
            </div>
          </div>

          {/* Four Pillars Grid */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sampleBlueprint.pillars.map((pillar, index) => (
                <div
                  key={pillar.name}
                  className="bg-[#0D1B2A]/50 border border-gray-800 rounded-xl p-6 hover:border-[#5B4B8A]/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{
                        backgroundColor:
                          index === 0
                            ? '#F59E0B30'
                            : index === 1
                            ? '#2DD4BF30'
                            : index === 2
                            ? '#EF444430'
                            : '#5B4B8A30',
                      }}
                    >
                      {pillar.element.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-['Space_Grotesk'] font-semibold text-white">
                        {pillar.name}
                      </h4>
                      <span
                        className="text-sm font-medium"
                        style={{
                          color:
                            index === 0
                              ? '#F59E0B'
                              : index === 1
                              ? '#2DD4BF'
                              : index === 2
                              ? '#EF4444'
                              : '#5B4B8A',
                        }}
                      >
                        {pillar.element}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{pillar.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.qualities.map((quality) => (
                      <span
                        key={quality}
                        className="px-3 py-1 rounded-full bg-[#0a0a0f] text-gray-300 text-xs"
                      >
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              {!isRevealed ? (
                <button
                  onClick={() => setIsRevealed(true)}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#5B4B8A] hover:bg-[#5B4B8A]/80 text-white rounded-xl font-semibold transition-all"
                >
                  <Eye className="w-5 h-5" />
                  Reveal Full Analysis
                </button>
              ) : (
                <div className="text-center">
                  <p className="text-[#2DD4BF] font-semibold mb-4">
                    ✨ Full analysis unlocked with your Blueprint
                  </p>
                  <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#2DD4BF] hover:bg-[#2DD4BF]/80 text-[#0a0a0f] rounded-xl font-semibold transition-all mx-auto">
                    <Download className="w-5 h-5" />
                    Get Your Blueprint — $14.99
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* What's Included Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Birth Chart', desc: 'Visual representation of your cosmic alignment' },
            { label: 'Element Analysis', desc: 'Your unique balance of the five elements' },
            { label: 'Thread Deep-Dive', desc: 'Detailed interpretation of each temporal thread' },
            { label: 'Actionable Insights', desc: 'Practical guidance for navigating your terrain' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#5B4B8A]/20 mx-auto mb-3 flex items-center justify-center">
                <span className="text-[#5B4B8A] font-bold">{item.label.charAt(0)}</span>
              </div>
              <h4 className="font-['Space_Grotesk'] font-semibold text-white mb-1">
                {item.label}
              </h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
