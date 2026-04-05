import Link from 'next/link';
import type { Metadata } from 'next';
import { Lock, Shield, Database, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About BondType - Our Mission & Story',
  description: 'Learn about BondType\'s mission to help people understand their attachment style and build healthier relationships through science-based assessments.',
  keywords: 'about BondType, attachment style mission, relationship psychology, attachment theory',
  openGraph: {
    title: 'About BondType - Our Mission & Story',
    description: 'Learn about BondType\'s mission to help people understand their attachment style and build healthier relationships.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About BondType</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We build tools that help people understand their relationship patterns.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Built This</h2>
              <p className="text-gray-600 mb-4">
                A few years back, one of our co-founders kept ending up in relationships that felt like
                Groundhog Day — same arguments, same patterns, different person. A therapist mentioned
                attachment styles, and something clicked.
              </p>
              <p className="text-gray-600 mb-4">
                Once they understood their anxious attachment, the patterns they'd blamed on bad luck or
                bad partners suddenly had a shape. That led us to look into the research properly — and we
                found something remarkable: most people have no idea this framework exists, even though it's
                been studied for decades.
              </p>
              <p className="text-gray-600">
                BondType started as a small side project to make that information more accessible.
                We wanted to build something that could give people the same "oh, that's what this is"
                moment we had — without needing a therapist to point the way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">-</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Focus On</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Making research-backed insights readable, not academic</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Keeping your data private by default</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Giving practical guidance, not just labels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Attachment Theory */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Science of Attachment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Attachment theory was developed by psychologist John Bowlby and expanded by Mary Ainsworth.
              It explains how the relationships we had as children shape the ones we have as adults.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Secure */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600 text-sm mb-3">
                Comfortable with closeness and independence. Can trust others and be themselves without excessive worry.
              </p>
              <div className="text-xs text-green-700 font-medium">
                Most common style
              </div>
            </div>

            {/* Anxious */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Anxious</h3>
              <p className="text-gray-600 text-sm mb-3">
                Wants deep connection but worries constantly about being abandoned. Can feel like emotional whiplash.
              </p>
              <div className="text-xs text-yellow-700 font-medium">
                Less common in research samples
              </div>
            </div>

            {/* Avoidant */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ↗
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Avoidant</h3>
              <p className="text-gray-600 text-sm mb-3">
                Values independence heavily. Can feel suffocated in close relationships and tends to pull away.
              </p>
              <div className="text-xs text-red-700 font-medium">
                Underreported in surveys
              </div>
            </div>

            {/* Fearful */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ⚠
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fearful</h3>
              <p className="text-gray-600 text-sm mb-3">
                Craves closeness but fears vulnerability. Often feels stuck in contradictory relationship wants.
              </p>
              <div className="text-xs text-purple-700 font-medium">
                Least common in general population
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/assessment" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Discover Your Attachment Style
            </Link>
          </div>
        </div>
      </section>

      {/* Team Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Team</h2>
            <p className="text-gray-600">
              We're a small group of people who care about making psychology useful
              rather than just interesting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                E
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Elena</h3>
              <p className="text-blue-600 font-medium mb-3">Research & Content</p>
              <p className="text-gray-600 text-sm">
                Background in psychology research. Spent years writing about relationships before
                realizing the "attachment" word should be in everyone's vocabulary.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                J
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">James</h3>
              <p className="text-blue-600 font-medium mb-3">Engineering</p>
              <p className="text-gray-600 text-sm">
                Built software at a healthcare company for a few years. Started reading about attachment
                theory after his own relationship struggles made him curious.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                S
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah</h3>
              <p className="text-blue-600 font-medium mb-3">Product</p>
              <p className="text-gray-600 text-sm">
                Worked in product design at a few startups. Interested in how people communicate in
                relationships and why misunderstanding is so common.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Handle Your Data</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don't store your test responses longer than we need to generate your report.
              We don't sell your data. We don't send you unsolicited emails.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Encryption</h3>
              <p className="text-gray-600 text-sm">Your data is encrypted in transit and at rest</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">No Selling Data</h3>
              <p className="text-gray-600 text-sm">We never sell personal information to anyone</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Minimal Storage</h3>
              <p className="text-gray-600 text-sm">We keep only what we need to operate</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">No Spam</h3>
              <p className="text-gray-600 text-sm">We only email you if you explicitly ask us to</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Questions? Thoughts?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              If you have questions about the assessment, attachment theory, or just want to say something,
              we'd like to hear from you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">-</div>
                <div className="font-semibold mb-1">General</div>
                <div className="opacity-90">hello@bondtype.com</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">-</div>
                <div className="font-semibold mb-1">Support</div>
                <div className="opacity-90">help@bondtype.com</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">-</div>
                <div className="font-semibold mb-1">Location</div>
                <div className="opacity-90">Remote-first team</div>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Understand Yourself?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Takes about 10 minutes. No account required. Just honest questions about how you connect with people.
          </p>
          <Link 
            href="/assessment" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-lg"
          >
            Take Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
