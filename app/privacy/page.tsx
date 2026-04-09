import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BondType',
  description: 'Learn how BondType collects, uses, and protects your personal information. Your privacy is our priority.',
};

export default function PrivacyPage() {
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
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Your privacy matters to us. This policy explains how we collect, use, and protect your information.
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
          <div className="bg-[#0D1B2A] rounded-2xl p-8 md:p-12 shadow-lg border border-[#5B4B8A]/30">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">1. Information We Collect</h2>
                <p className="text-[#F8FAFC]/80 mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-[#F8FAFC]/80 space-y-2">
                  <li>Assessment responses and results</li>
                  <li>Email address (if you subscribe to our newsletter)</li>
                  <li>Payment information (processed securely through our payment provider)</li>
                  <li>Any information you voluntarily share with us</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">2. How We Use Your Information</h2>
                <p className="text-[#F8FAFC]/80 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-[#F8FAFC]/80 space-y-2">
                  <li>Provide and improve our assessment services</li>
                  <li>Send you newsletters and updates (with your consent)</li>
                  <li>Process payments and deliver purchased reports</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Analyze usage to improve user experience (anonymous, aggregate data only)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                <p className="text-gray-600">
                  We implement industry-standard security measures to protect your personal information, including 256-bit SSL encryption, secure data storage, and regular security audits. Your payment information is processed through trusted payment providers and is never stored on our servers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  We use minimal cookies necessary for the website to function properly:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies (anonymous, aggregate data only)</li>
                  <li>Session cookies to maintain your logged-in state</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We do not use third-party advertising cookies or track you across other websites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing emails at any time</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="text-gray-600">
                  We retain your personal data only for as long as necessary to provide our services. Assessment data is retained for 2 years after your last activity. You can request deletion at any time by contacting us at privacy@bondtype.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
                <p className="text-gray-600">
                  We use trusted third-party services for payment processing (PayPal, Stripe), email delivery, and analytics. These services have their own privacy policies, and we encourage you to review them. We do not sell your data to any third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
                <p className="text-gray-600">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or would like to exercise your rights, please contact us at:
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Email:</strong> privacy@bondtype.com<br />
                  <strong>Address:</strong> San Francisco, CA
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
