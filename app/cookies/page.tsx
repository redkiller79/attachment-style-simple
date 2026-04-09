import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy - BondType',
  description: 'Learn how BondType uses cookies and similar technologies to improve your experience.',
};

export default function CookiesPage() {
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
          <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl opacity-90">
            Understanding how we use cookies to improve your experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2DD4BF] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#5B4B8A] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#0D1B2A] rounded-2xl shadow-lg p-8 md:p-12 border border-[#5B4B8A]/30">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#F8FAFC]/80 mb-8">
                Last updated: April 5, 2026
              </p>

              <h2 className="text-2xl font-bold text-[#F8FAFC] mt-8 mb-4">What Are Cookies?</h2>
              <p className="text-[#F8FAFC]/80 mb-4">
                Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall browsing experience.
              </p>

              <h2 className="text-2xl font-bold text-[#F8FAFC] mt-8 mb-4">How We Use Cookies</h2>
              <p className="text-[#F8FAFC]/80 mb-4">
                BondType uses cookies for several important purposes:
              </p>
              <ul className="list-disc list-inside text-[#F8FAFC]/80 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly, such as maintaining your session and keeping you logged in.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website so we can improve it.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences for future visits.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#F8FAFC] mt-8 mb-4">Google Analytics</h2>
              <p className="text-[#F8FAFC]/80 mb-4">
                We use Google Analytics to collect and analyze data about how our website is used. Google Analytics uses cookies to gather information such as:
              </p>
              <ul className="list-disc list-inside text-[#F8FAFC]/80 mb-4 space-y-2">
                <li>Pages you visit and time spent on each page</li>
                <li>How you arrived at our website (search, direct, referral)</li>
                <li>Your general geographic location</li>
                <li>Device and browser information</li>
              </ul>
              <p className="text-[#F8FAFC]/80 mb-4">
                This information is aggregated and anonymized — we cannot identify individual users. Google Analytics helps us understand which content resonates with our audience and how we can improve the user experience.
              </p>
              <p className="text-[#F8FAFC]/80 mb-4">
                You can opt out of Google Analytics by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8FAFC] underline hover:text-[#2DD4BF]"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>

              <h2 className="text-2xl font-bold text-[#F8FAFC] mt-8 mb-4">Types of Cookies We Use</h2>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-[#5B4B8A]/30 rounded-lg overflow-hidden">
                  <thead className="bg-[#0a0a0f]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#F8FAFC]">Cookie Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#F8FAFC]">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#F8FAFC]">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#5B4B8A]/30">
                    <tr>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">_ga</td>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">Google Analytics - distinguishes users</td>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">_gid</td>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">Google Analytics - distinguishes users</td>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">_gat</td>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">Google Analytics - throttles requests</td>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">1 minute</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">session_id</td>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">Maintains your session state</td>
                      <td className="px-4 py-3 text-sm text-[#F8FAFC]/80">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-[#F8FAFC] mt-8 mb-4">Managing Cookies</h2>
              <p className="text-[#F8FAFC]/80 mb-4">
                Most web browsers allow you to control cookies through their settings. However, disabling cookies may affect the functionality of our website.
              </p>
              <p className="text-[#F8FAFC]/80 mb-4">Here&apos;s how to manage cookies in popular browsers:</p>
              <ul className="list-disc list-inside text-[#F8FAFC]/80 mb-4 space-y-2">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F8FAFC] underline hover:text-[#2DD4BF]"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F8FAFC] underline hover:text-[#2DD4BF]"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F8FAFC] underline hover:text-[#2DD4BF]"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F8FAFC] underline hover:text-[#2DD4BF]"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[#F8FAFC] mt-8 mb-4">Third-Party Cookies</h2>
              <p className="text-[#F8FAFC]/80 mb-4">
                Some cookies are placed by third-party services that appear on our pages, such as Google Analytics. These third parties have their own privacy policies and may collect information about your browsing activity across different websites.
              </p>

              <h2 className="text-2xl font-bold text-[#F8FAFC] mt-8 mb-4">Updates to This Policy</h2>
              <p className="text-[#F8FAFC]/80 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.
              </p>

              <h2 className="text-2xl font-bold text-[#F8FAFC] mt-8 mb-4">Contact Us</h2>
              <p className="text-[#F8FAFC]/80 mb-4">
                If you have questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-[#0a0a0f] rounded-lg p-4 mb-4 border border-[#5B4B8A]/30">
                <p className="text-[#F8FAFC]/80">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:hello@bondtype.com" className="text-[#F8FAFC] underline hover:text-[#2DD4BF]">
                    hello@bondtype.com
                  </a>
                </p>
              </div>

              <div className="mt-8 p-6 bg-[#0a0a0f] rounded-xl border border-[#5B4B8A]/30">
                <p className="text-[#F8FAFC]/80">
                  For more information about how we protect your privacy, please read our{' '}
                  <Link href="/privacy" className="text-[#F8FAFC] underline hover:text-[#2DD4BF] font-medium">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-[#F8FAFC]/80 mb-4">Ready to understand your attachment style?</p>
            <Link
              href="/assessment"
              className="inline-block bg-gradient-to-r from-[#2DD4BF] to-[#5B4B8A] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Take Free Assessment →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
