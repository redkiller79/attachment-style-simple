import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter - BondType',
  description: 'Subscribe to receive the latest articles and relationship insights from BondType.',
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] font-sans text-[#F8FAFC]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0D1B2A] to-[#5B4B8A] py-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Stay Connected</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get the latest articles and relationship insights delivered straight to your inbox.
          </p>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2DD4BF] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#5B4B8A] rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Value Proposition */}
            <div>
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-6">
                What you&apos;ll receive
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D1B2A] border border-[#2DD4BF]/30 rounded-full flex items-center justify-center text-[#2DD4BF] text-xl flex-shrink-0">
                    📚
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC] mb-1">Weekly Articles</h3>
                    <p className="text-[#F8FAFC]/80">
                      Deep dives into attachment theory, relationship psychology, and practical advice for building healthier connections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D1B2A] border border-[#5B4B8A]/30 rounded-full flex items-center justify-center text-[#5B4B8A] text-xl flex-shrink-0">
                    💡
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC] mb-1">Research Insights</h3>
                    <p className="text-[#F8FAFC]/80">
                      Curated summaries of the latest relationship research, translated into actionable takeaways.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D1B2A] border border-[#2DD4BF]/30 rounded-full flex items-center justify-center text-[#2DD4BF] text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC] mb-1">Practical Tips</h3>
                    <p className="text-[#F8FAFC]/80">
                      Real-world strategies you can apply immediately to improve your relationships and communication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D1B2A] border border-[#F59E0B]/30 rounded-full flex items-center justify-center text-[#F59E0B] text-xl flex-shrink-0">
                    ✨
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC] mb-1">Exclusive Content</h3>
                    <p className="text-[#F8FAFC]/80">
                      Early access to new features, special reports, and subscriber-only resources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#0a0a0f] rounded-xl border border-[#5B4B8A]/30">
                <p className="text-[#F8FAFC]/80 italic">
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
                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-2">Subscribe to Our Newsletter</h2>
                <p className="text-[#F8FAFC]/80">
                  Get the latest articles and relationship insights delivered weekly.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#F8FAFC]/80 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-[#5B4B8A]/50 bg-[#0a0a0f] text-[#F8FAFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#F8FAFC]/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-[#5B4B8A]/50 bg-[#0a0a0f] text-[#F8FAFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2DD4BF] to-[#5B4B8A] text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-[#F8FAFC]/60">
                  🔒 No spam, ever. Unsubscribe anytime.
                </p>
                <p className="text-xs text-[#F8FAFC]/50 mt-2">
                  By subscribing, you agree to our{' '}
                  <Link href="/privacy" className="underline hover:text-[#2DD4BF]">
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
      <section className="py-12 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#F59E0B] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#F8FAFC]/80 mb-4">Want to dive deeper?</p>
          <Link
            href="/assessment"
            className="inline-block bg-gradient-to-r from-[#2DD4BF] to-[#5B4B8A] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Discover Your Attachment Style →
          </Link>
        </div>
      </section>
    </div>
  );
}
