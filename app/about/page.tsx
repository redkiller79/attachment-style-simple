import Link from 'next/link';
import type { Metadata } from 'next';

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
            Helping people understand their attachment style and build healthier, more fulfilling relationships.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                BondType was born from a simple observation: millions of people struggle with relationship patterns they don't understand. We founded this platform to make attachment theory accessible to everyone.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to help people discover their attachment style, understand how it influences their relationships, and provide actionable guidance to build stronger connections.
              </p>
              <p className="text-gray-600">
                We believe that understanding yourself is the first step toward healthier relationships. By combining scientific research with practical tools, we empower individuals to transform their relational patterns.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Do This</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">97% of people have an attachment style that influences their relationships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Most never learn about it in school or therapy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Simple awareness can transform relationship outcomes</span>
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
              Attachment theory, developed by psychologist John Bowlby and expanded by Mary Ainsworth, explains how our early relationships shape our adult connections.
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
                Comfortable with intimacy and independence. Able to trust others and rely on them while maintaining a strong sense of self.
              </p>
              <div className="text-xs text-green-700 font-medium">
                ~56% of adults
              </div>
            </div>

            {/* Anxious */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Anxious</h3>
              <p className="text-gray-600 text-sm mb-3">
                Craves closeness but fears abandonment. Often worried about relationships and needs reassurance from partners.
              </p>
              <div className="text-xs text-yellow-700 font-medium">
                ~20% of adults
              </div>
            </div>

            {/* Avoidant */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ↗
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Avoidant</h3>
              <p className="text-gray-600 text-sm mb-3">
                Values independence over intimacy. Prefers emotional distance and may struggle with vulnerability in relationships.
              </p>
              <div className="text-xs text-red-700 font-medium">
                ~25% of adults
              </div>
            </div>

            {/* Fearful */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ⚠
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fearful</h3>
              <p className="text-gray-600 text-sm mb-3">
                Mixed feelings about closeness. Desires intimacy but fears vulnerability, creating conflicting relationship patterns.
              </p>
              <div className="text-xs text-purple-700 font-medium">
                ~3-5% of adults
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/assessment" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Discover Your Attachment Style →
            </Link>
          </div>
        </div>
      </section>

      {/* Team Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600">
              BondType was founded by a team of psychologists, researchers, and technologists passionate about making relationship science accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                D
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Elena Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-3">Co-Founder & Research Lead</p>
              <p className="text-gray-600 text-sm">
                Clinical psychologist with 15 years of experience in attachment-based therapy. Published researcher in relationship psychology.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                J
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">James Chen</h3>
              <p className="text-blue-600 font-medium mb-3">Co-Founder & Technology</p>
              <p className="text-gray-600 text-sm">
                Former tech lead at a major healthcare company. Built assessment platforms used by millions. Passionate about digital mental health.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                S
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Sarah Mitchell</h3>
              <p className="text-blue-600 font-medium mb-3">Co-Founder & Content Lead</p>
              <p className="text-gray-600 text-sm">
                Relationship educator and author of three books on attachment theory. Expert at translating complex psychology into practical advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trust & Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your privacy and data security are our top priorities. We use enterprise-grade security measures to protect your information.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">256-bit Encryption</h3>
              <p className="text-gray-600 text-sm">Bank-level security for all your data</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600 text-sm">Full compliance with privacy regulations</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🚫</div>
              <h3 className="font-bold text-gray-900 mb-2">No Data Selling</h3>
              <p className="text-gray-600 text-sm">We never sell your personal information</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Anonymous Stats</h3>
              <p className="text-gray-600 text-sm">Aggregate data only, no individual tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Have questions about attachment theory, our assessment, or just want to say hello? We'd love to hear from you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-semibold mb-1">Email</div>
                <div className="opacity-90">hello@bondtype.com</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">💬</div>
                <div className="font-semibold mb-1">Support</div>
                <div className="opacity-90">help@bondtype.com</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🌍</div>
                <div className="font-semibold mb-1">Location</div>
                <div className="opacity-90">San Francisco, CA</div>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Understand Yourself?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our free attachment style assessment and discover how you connect with others. It only takes 10 minutes.
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
