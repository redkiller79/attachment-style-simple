import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | BondType',
  description: 'Find answers to the most common questions about attachment styles, our assessment, and how to interpret your results.',
};

export default function FAQPage() {
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
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Everything you need to know about attachment styles and our assessment.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2DD4BF] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#5B4B8A] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">What is attachment theory?</h2>
              <p className="text-[#F8FAFC]/80">
                Attachment theory, developed by psychologist John Bowlby, explains how our early relationships with caregivers shape our adult relationships. Your attachment style reflects the patterns you developed based on how your needs were met in childhood, which influences how you connect with others today.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">What are the four attachment styles?</h2>
              <ul className="text-[#F8FAFC]/80 space-y-3">
                <li><strong>Secure:</strong> Comfortable with intimacy and independence, able to trust others</li>
                <li><strong>Anxious:</strong> Craves closeness but fears abandonment, needs frequent reassurance</li>
                <li><strong>Avoidant:</strong> Values independence over intimacy, prefers emotional distance</li>
                <li><strong>Fearful:</strong> Mixed feelings about closeness, desires intimacy but fears vulnerability</li>
              </ul>
            </div>

            {/* Question 3 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">How accurate is the assessment?</h2>
              <p className="text-[#F8FAFC]/80">
                Our assessment is based on validated psychological research and is designed to provide meaningful insights. While no assessment can capture the full complexity of human relationships, our tool has been tested to ensure reliability. The results are meant to be a starting point for self-reflection, not a definitive diagnosis.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">How long does the assessment take?</h2>
              <p className="text-[#F8FAFC]/80">
                The assessment takes approximately 10-15 minutes to complete. It consists of questions designed to understand your relationship patterns, responses to hypothetical situations, and reflections on your attachment history.
              </p>
            </div>

            {/* Question 5 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Can my attachment style change over time?</h2>
              <p className="text-[#F8FAFC]/80">
                Yes! While your early attachment patterns form a foundation, attachment styles can evolve through self-awareness, therapy, and healthy relationship experiences. Many people move toward a more secure attachment style over time, especially when they understand their patterns and actively work on them.
              </p>
            </div>

            {/* Question 6 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Is my data kept private?</h2>
              <p className="text-[#F8FAFC]/80">
                Absolutely. We take your privacy seriously. Your assessment responses and results are encrypted and stored securely. We never sell your personal data, and you can request deletion of your information at any time. Please review our Privacy Policy for full details.
              </p>
            </div>

            {/* Question 7 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">What if I have more questions?</h2>
              <p className="text-[#F8FAFC]/80">
                If you have additional questions or need support, please reach out to us at help@bondtype.com. We&apos;re here to help you understand your results and provide guidance on your journey to healthier relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#F59E0B] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">Ready to Discover Your Attachment Style?</h2>
          <p className="text-[#F8FAFC]/80 mb-8 max-w-2xl mx-auto">
            Take our free assessment and gain valuable insights into your relationship patterns.
          </p>
          <a 
            href="/test" 
            className="inline-block bg-gradient-to-r from-[#2DD4BF] to-[#5B4B8A] text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-lg"
          >
            Take Free Assessment
          </a>
        </div>
      </section>
    </div>
  );
}
