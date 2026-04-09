import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - BondType',
  description: 'Get in touch with BondType. We respond to all inquiries within 24 hours.',
};

export default function ContactPage() {
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
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">
            We&apos;d love to hear from you. Get in touch and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2DD4BF] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#5B4B8A] rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#0D1B2A] rounded-2xl shadow-lg p-8 border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#F8FAFC]/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-[#5B4B8A]/50 bg-[#0a0a0f] text-[#F8FAFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent"
                    placeholder="John Doe"
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
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#F8FAFC]/80 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-[#5B4B8A]/50 bg-[#0a0a0f] text-[#F8FAFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#F8FAFC]/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-[#5B4B8A]/50 bg-[#0a0a0f] text-[#F8FAFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2DD4BF] to-[#5B4B8A] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
              <p className="text-center text-sm text-[#F8FAFC]/60 mt-4">
                ⚡ We typically respond within 24 hours
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-[#0D1B2A] rounded-2xl shadow-lg p-8 border border-[#5B4B8A]/30">
                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-6">Other ways to reach us</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0D1B2A] border border-[#2DD4BF]/30 rounded-full flex items-center justify-center text-[#2DD4BF] text-xl flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F8FAFC] mb-1">Email</h3>
                      <p className="text-[#F8FAFC]/80">hello@bondtype.com</p>
                      <p className="text-sm text-[#F8FAFC]/60 mt-1">We reply within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0D1B2A] border border-[#5B4B8A]/30 rounded-full flex items-center justify-center text-[#5B4B8A] text-xl flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F8FAFC] mb-1">Support</h3>
                      <p className="text-[#F8FAFC]/80">help@bondtype.com</p>
                      <p className="text-sm text-[#F8FAFC]/60 mt-1">For technical issues &amp; questions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0D1B2A] border border-[#2DD4BF]/30 rounded-full flex items-center justify-center text-[#2DD4BF] text-xl flex-shrink-0">
                      🌍
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F8FAFC] mb-1">Location</h3>
                      <p className="text-[#F8FAFC]/80">San Francisco, CA</p>
                      <p className="text-sm text-[#F8FAFC]/60 mt-1">Remote-first team</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0D1B2A] via-[#5B4B8A] to-[#2DD4BF] rounded-2xl p-8 text-[#F8FAFC] border border-[#5B4B8A]/30">
                <h3 className="text-xl font-bold mb-4">Have questions about your attachment style?</h3>
                <p className="opacity-90 mb-6">
                  Take our assessment to discover your attachment style and get personalized insights.
                </p>
                <Link
                  href="/assessment"
                  className="inline-block bg-white text-[#0D1B2A] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Take Assessment →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
