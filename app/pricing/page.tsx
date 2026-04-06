import PaymentButton from '@/components/PaymentButton';

export const metadata = {
  title: 'Pricing - Attachment Style Assessment',
  description: 'Unlock all 36 questions + complete attachment profile + PDF report for $9.99.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Full Assessment Unlock
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock all 36 questions + complete attachment profile + PDF report.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-500">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Complete Report
              </h2>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$9.99</span>
                <span className="text-gray-600 text-lg"> USD</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">All 36 questions</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Complete attachment profile</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">PDF report</span>
                </li>
              </ul>
              <PaymentButton
                planId="COMPLETE"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* What People Say */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What People Say After Getting Their Report
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-700 italic mb-3">
                &quot;I expected another generic personality quiz. Instead I got something that described
                my marriage patterns so accurately I forwarded it to my therapist.&quot;
              </p>
              <p className="text-gray-500 text-sm">— M, 41, Chicago</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-700 italic mb-3">
                &quot;The premium report helped me understand why I always felt like I had to chase
                my partner. That was worth every penny.&quot;
              </p>
              <p className="text-gray-500 text-sm">— R, 28, Portland</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-700 italic mb-3">
                &quot;I was skeptical. But the language in the report — about how anxious attachment
                shows up — was like reading a description of myself.&quot;
              </p>
              <p className="text-gray-500 text-sm">— K, 35, New York</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-700 italic mb-3">
                &quot;Simple, direct, no nonsense. I took the test, paid, got my PDF.
                Exactly what I needed.&quot;
              </p>
              <p className="text-gray-500 text-sm">— D, 30, Denver</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How does payment work?
              </h3>
              <p className="text-gray-600">
                We use PayPal for secure payments. After completing the test, you&apos;ll be redirected
                to PayPal to complete your purchase.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I get a refund?
              </h3>
              <p className="text-gray-600">
                Yes. If you&apos;re not satisfied with your report, email us within 30 days and we&apos;ll refund you.
                No questions asked.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How will I receive my report?
              </h3>
              <p className="text-gray-600">
                Your report is generated immediately after payment and available as a PDF you can
                access and download right away.
              </p>
            </div>
          </div>
        </div>

        {/* Trust */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">30-Day Refund</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
