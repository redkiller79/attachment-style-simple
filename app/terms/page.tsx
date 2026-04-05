import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | BondType',
  description: 'Read the terms and conditions governing your use of BondType assessment services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using BondType (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service. These terms apply to all visitors, users, and others who access the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-600">
                  BondType provides an attachment style assessment and related educational content. Our assessment is designed to provide insights into your attachment style based on psychological research. While we strive for accuracy, the assessment results are for informational and educational purposes only and should not be considered medical, psychological, or professional advice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-600 mb-4">
                  To access certain features, you may need to create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Purchases and Payments</h2>
                <p className="text-gray-600 mb-4">
                  For paid features and products:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>All payments are processed securely through PayPal or Stripe</li>
                  <li>Prices are listed in USD and subject to change with notice</li>
                  <li>Refunds are available within 30 days of purchase if you are unsatisfied</li>
                  <li>Subscription fees are billed recurring until cancelled</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Conduct</h2>
                <p className="text-gray-600 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Interfere with or disrupt the Service or servers connected to it</li>
                  <li>Use any automated system to access the Service without permission</li>
                  <li>Share your account access with others</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-600">
                  The Service and its original content, features, and functionality are owned by BondType and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You retain ownership of content you submit but grant us a license to use it as necessary to provide our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-gray-600">
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE ASSESSMENT RESULTS ARE COMPLETE, ACCURATE, OR SUITABLE FOR ANY PURPOSE. THE SERVICE IS NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL, PSYCHOLOGICAL, OR THERAPEUTIC ADVICE. PLEASE CONSULT A QUALIFIED PROFESSIONAL FOR SUCH MATTERS.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL BONDTYPE, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                <p className="text-gray-600">
                  You agree to defend, indemnify, and hold harmless BondType and its affiliates, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <p className="text-gray-600">
                  We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately. Accounts may be deleted after 2 years of inactivity.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of San Francisco County, California.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. Your continued use of the Service after any changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Email:</strong> legal@bondtype.com<br />
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
