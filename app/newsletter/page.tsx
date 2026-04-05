import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter - BondType',
  description: 'Subscribe to receive the latest articles and relationship insights from BondType.',
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Stay Connected</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get the latest articles and relationship insights delivered straight to your inbox.
          </p>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Value Proposition */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What you&apos;ll receive
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                    📚
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Weekly Articles</h3>
                    <p className="text-gray-600">
                      Deep dives into attachment theory, relationship psychology, and practical advice for building healthier connections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl flex-shrink-0">
                    💡
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Research Insights</h3>
                    <p className="text-gray-600">
                      Curated summaries of the latest relationship research, translated into actionable takeaways.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Practical Tips</h3>
                    <p className="text-gray-600">
                      Real-world strategies you can apply immediately to improve your relationships and communication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xl flex-shrink-0">
                    ✨
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Exclusive Content</h3>
                    <p className="text-gray-600">
                      Early access to new features, special reports, and subscriber-only resources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-gray-700 italic">
                  &quot;Join over 10,000 readers who receive our weekly insights on attachment, relationships, and emotional wellness.&quot;
                </p>
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">📬</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600">
                  Get the latest articles and relationship insights delivered weekly.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  🔒 No spam, ever. Unsubscribe anytime.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  By subscribing, you agree to our{' '}
                  <Link href="/privacy" className="underline hover:text-gray-600">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Want to dive deeper?</p>
          <Link
            href="/assessment"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Discover Your Attachment Style →
          </Link>
        </div>
      </section>
    </div>
  );
}
