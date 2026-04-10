import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | BondType',
  description: 'Find answers to common questions about attachment styles, the BondType assessment, data privacy, pricing, and how to interpret your results.',
  openGraph: {
    title: 'FAQ - BondType Attachment Assessment',
    description: 'Answers to common questions about attachment theory, our assessment, pricing, and privacy.',
  },
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
            Everything you need to know about attachment styles and how BondType works.
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
            
            {/* Question 1: What is attachment theory? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">What is attachment theory?</h2>
              <p className="text-[#F8FAFC]/80">
                <strong>Attachment theory</strong>, developed by psychologist John Bowlby in the 1960s–70s, explains how early relationships with caregivers shape adult relationship patterns. Your attachment style is the internal working model you formed based on whether your emotional needs were consistently met in childhood — it influences how you seek closeness, handle conflict, and trust others in adult relationships.
              </p>
            </div>

            {/* Question 2: What are the four attachment styles? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">What are the four attachment styles?</h2>
              <div className="text-[#F8FAFC]/80 space-y-3">
                <p><strong>Secure:</strong> Comfortable with intimacy and independence, trusts others reliably.</p>
                <p><strong>Anxious:</strong> Craves closeness but fears abandonment, seeks frequent reassurance.</p>
                <p><strong>Avoidant:</strong> Values independence over intimacy,习惯性地 keeps emotional distance.</p>
                <p><strong>Fearful-Avoidant:</strong> Wants closeness but is afraid of vulnerability, resulting in mixed or contradictory behaviors.</p>
                <p className="text-sm mt-4">Most people have a dominant style, though blends are common.</p>
              </div>
            </div>

            {/* Question 3: How scientifically valid is BondType? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">How scientifically valid is the BondType assessment?</h2>
              <p className="text-[#F8FAFC]/80">
                <strong>BondType is based on established psychological research</strong>, including the Experiences in Close Relationships (ECR) scale and the Adult Attachment Interview (AAI) — both widely used instruments in attachment research. The assessment uses validated items from peer-reviewed studies.
              </p>
              <p className="text-[#F8FAFC]/60 text-sm mt-4">
                <strong>Important:</strong> No self-report tool captures the full complexity of human relationships. BondType results are a starting point for self-reflection, not a clinical diagnosis. If you have concerns about your mental health, consult a licensed therapist.
              </p>
            </div>

            {/* Question 4: How long does the assessment take? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">How long does the assessment take?</h2>
              <p className="text-[#F8FAFC]/80">
                <strong>10–15 minutes.</strong> The assessment covers your relationship patterns, reactions to hypothetical situations, and reflections on your attachment history. There are no right or wrong answers — answer honestly for the most useful results.
              </p>
            </div>

            {/* Question 5: How much does BondType cost? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">How much does BondType cost? Is it free?</h2>
              <p className="text-[#F8FAFC]/80">
                BondType has a <strong>free tier</strong> that gives you an overview of your attachment style. <strong>Premium features</strong> (detailed analysis, personalized insights, relationship recommendations) require a paid subscription. View current pricing on our <a href="/pricing" className="text-[#2DD4BF] hover:underline">Pricing page</a>.
              </p>
              <p className="text-[#F8FAFC]/80 mt-4">
                <strong>Cancel anytime</strong> from your account settings — no need to contact support.
              </p>
            </div>

            {/* Question 6: Can I cancel my subscription? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Can I cancel my subscription at any time?</h2>
              <p className="text-[#F8FAFC]/80">
                <strong>Yes.</strong> Cancel anytime from your account settings. You retain premium access until the end of your current billing period, after which your account reverts to the free tier.
              </p>
            </div>

            {/* Question 7: Can attachment styles change? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Can my attachment style change over time?</h2>
              <p className="text-[#F8FAFC]/80">
                <strong>Yes — attachment styles are not fixed.</strong> While early patterns form a foundation, your attachment style can evolve through self-awareness, therapy, and healthy relationship experiences. Research shows many people move toward a more secure attachment style over time, particularly when they actively work on understanding their patterns.
              </p>
            </div>

            {/* Question 8: Is my data private? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Is my data private?</h2>
              <p className="text-[#F8FAFC]/80">
                <strong>Yes.</strong> Your assessment responses and results are encrypted at rest and in transit. We do not sell your personal data. You can request full deletion of your account and data at any time by emailing <a href="mailto:help@bondtype.com" className="text-[#2DD4BF] hover:underline">help@bondtype.com</a>. See our <a href="/privacy" className="text-[#2DD4BF] hover:underline">Privacy Policy</a> for full details.
              </p>
            </div>

            {/* Question 9: Does BondType share data with third parties? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Does BondType share my data with third parties?</h2>
              <p className="text-[#F8FAFC]/80">
                We share data only with service providers needed to operate the service (e.g., payment processing, cloud infrastructure). We do <strong>not</strong> sell or share your data for advertising purposes. Full details are in our <a href="/privacy" className="text-[#2DD4BF] hover:underline">Privacy Policy</a>.
              </p>
            </div>

            {/* Question 10: Can I retake the assessment? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Can I retake the assessment?</h2>
              <p className="text-[#F8FAFC]/80">
                <strong>Yes.</strong> Retake anytime. Your attachment patterns may shift as you grow and have new experiences, so retaking every 6–12 months (or after major life changes) can be informative. Note that if you have a premium subscription, retaking may reset or update your results.
              </p>
            </div>

            {/* Question 11: What will I learn from my results? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">What will I learn from my results?</h2>
              <p className="text-[#F8FAFC]/80">
                Your results will identify your <strong>primary attachment style</strong> (or blend of styles), explain how your style typically shows up in relationships, and describe the core fears and needs associated with your style. Premium results include personalized next steps, communication strategies for different attachment pairings, and curated resources for growth.
              </p>
            </div>

            {/* Question 12: Is this a replacement for therapy? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Is this a replacement for therapy?</h2>
              <p className="text-[#F8FAFC]/80">
                <strong>No.</strong> BondType is a self-reflection tool, not a clinical assessment or a substitute for mental health treatment. If you are experiencing significant relationship distress, anxiety, depression, or trauma, we encourage you to work with a licensed therapist. Understanding your attachment style can be a useful complement to therapy, not a replacement for it.
              </p>
            </div>

            {/* Question 13: Difference from MBTI/Big Five? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">What is the difference between attachment style and personality tests like MBTI or the Big Five?</h2>
              <p className="text-[#F8FAFC]/80">
                <strong>Attachment style and personality type tests measure different things.</strong> Personality frameworks like MBTI or the Big Five describe stable traits (e.g., extraversion, openness) that tend to remain consistent across contexts. Attachment style specifically describes your pattern of seeking and maintaining closeness in close relationships — it is rooted in developmental psychology and is supported by decades of research. The two frameworks are complementary, not interchangeable.
              </p>
            </div>

            {/* Question 14: What if results don't feel right? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">What if my results don't feel like me?</h2>
              <p className="text-[#F8FAFC]/80">
                This is common. Self-assessment tools are only as accurate as your self-awareness at the time of taking the test — and many people have a blend of attachment styles. If your results feel off, consider: (1) Were you answering honestly or what you thought was ideal? (2) Do you have traits from more than one style? (3) Has your style shifted since childhood? You can <a href="/assessment" className="text-[#2DD4BF] hover:underline">retake the assessment</a>, explore your blend of styles, or speak with a therapist for deeper insight.
              </p>
            </div>

            {/* Question 15: How to contact? */}
            <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg border border-[#5B4B8A]/30">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">I have more questions. How can I contact BondType?</h2>
              <p className="text-[#F8FAFC]/80">
                For additional questions or support, email us at <a href="mailto:help@bondtype.com" className="text-[#2DD4BF] hover:underline">help@bondtype.com</a>. We aim to respond within 1–2 business days. Please include as much context as possible so we can help effectively.
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
            href="/assessment" 
            className="inline-block bg-gradient-to-r from-[#2DD4BF] to-[#5B4B8A] text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-lg"
          >
            Take Free Assessment
          </a>
        </div>
      </section>

      {/* FAQPage Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is attachment theory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Attachment theory, developed by psychologist John Bowlby in the 1960s–70s, explains how early relationships with caregivers shape adult relationship patterns. Your attachment style is the internal working model you formed based on whether your emotional needs were consistently met in childhood."
                }
              },
              {
                "@type": "Question",
                "name": "What are the four attachment styles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The four attachment styles are: Secure (comfortable with intimacy and independence), Anxious (craves closeness but fears abandonment), Avoidant (values independence over intimacy), and Fearful-Avoidant (wants closeness but fears vulnerability)."
                }
              },
              {
                "@type": "Question",
                "name": "How scientifically valid is the BondType assessment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BondType is based on established psychological research including the Experiences in Close Relationships (ECR) scale and the Adult Attachment Interview (AAI). Results are a starting point for self-reflection, not a clinical diagnosis."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the assessment take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The assessment takes 10–15 minutes to complete."
                }
              },
              {
                "@type": "Question",
                "name": "How much does BondType cost? Is it free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BondType has a free tier that gives an overview of your attachment style. Premium features require a paid subscription. Cancel anytime."
                }
              },
              {
                "@type": "Question",
                "name": "Can my attachment style change over time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — attachment styles are not fixed. They can evolve through self-awareness, therapy, and healthy relationship experiences."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data private?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Assessment responses and results are encrypted at rest and in transit. We do not sell your personal data."
                }
              },
              {
                "@type": "Question",
                "name": "Can I retake the assessment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can retake the assessment at any time."
                }
              },
              {
                "@type": "Question",
                "name": "Is this a replacement for therapy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. BondType is a self-reflection tool, not a clinical assessment or a substitute for mental health treatment."
                }
              },
              {
                "@type": "Question",
                "name": "What will I learn from my results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your results will identify your primary attachment style, explain how your style shows up in relationships, and describe core fears and needs associated with your style."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
