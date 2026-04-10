import Link from 'next/link';
import type { Metadata } from 'next';
import { Lock, Shield, Database, Mail } from 'lucide-react';

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
    <div className="min-h-screen bg-[#0a0a0f] font-sans text-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0D1B2A] to-[#5B4B8A] py-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About BondType</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We build tools that help people understand their relationship patterns.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2DD4BF] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#5B4B8A] rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-6">Why We Built BondType</h2>
              <p className="text-[#F8FAFC]/70 mb-4">
                <strong>BondType exists because understanding your attachment style changes how you see your relationships.</strong> Our co-founder spent years in repetitive relationship patterns before a therapist introduced attachment theory — and something clicked.
              </p>
              <p className="text-[#F8FAFC]/70 mb-4">
                Once they understood their <strong>anxious attachment style</strong>, patterns they'd blamed on bad luck or incompatible partners suddenly had a name and a structure. Research shows that when people understand their attachment style, they make more intentional choices in relationships and communicate more effectively with partners.
              </p>
              <p className="text-[#F8FAFC]/70">
                BondType started as a side project to make that "aha" moment accessible to more people — without needing a therapist to point the way. We build tools that help you understand your relationship patterns so you can build healthier connections.
              </p>
            </div>
            <div className="bg-[#0D1B2A] border border-[#5B4B8A]/30 rounded-2xl p-8">
              <div className="text-6xl mb-4">-</div>
              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4">What We Focus On</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#F8FAFC]">Making research-backed insights readable, not academic</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#5B4B8A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#F8FAFC]">Keeping your data private by default</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#F8FAFC]">Giving practical guidance, not just labels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Attachment Theory */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#F59E0B] rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">The Science of Attachment</h2>
            <p className="text-[#F8FAFC]/70 max-w-2xl mx-auto">
              Attachment theory was developed by psychologist John Bowlby and expanded by Mary Ainsworth.
              It explains how the relationships we had as children shape the ones we have as adults.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Secure */}
            <div className="bg-[#0D1B2A] border border-[#2DD4BF]/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#2DD4BF] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">Secure</h3>
              <p className="text-[#F8FAFC]/80 text-sm mb-3">
                Comfortable with closeness and independence. Can trust others and be themselves without excessive worry.
              </p>
              <div className="text-xs text-[#2DD4BF] font-medium">
                Most common style
              </div>
            </div>

            {/* Anxious */}
            <div className="bg-[#0D1B2A] border border-[#F59E0B]/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">Anxious</h3>
              <p className="text-[#F8FAFC]/80 text-sm mb-3">
                Wants deep connection but worries constantly about being abandoned. Can feel like emotional whiplash.
              </p>
              <div className="text-xs text-[#F59E0B] font-medium">
                Less common in research samples
              </div>
            </div>

            {/* Avoidant */}
            <div className="bg-[#0D1B2A] border border-[#5B4B8A]/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#5B4B8A] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ↗
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">Avoidant</h3>
              <p className="text-[#F8FAFC]/80 text-sm mb-3">
                Values independence heavily. Can feel suffocated in close relationships and tends to pull away.
              </p>
              <div className="text-xs text-[#5B4B8A] font-medium">
                Underreported in surveys
              </div>
            </div>

            {/* Fearful */}
            <div className="bg-[#0D1B2A] border border-[#2DD4BF]/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#2DD4BF] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ⚠
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">Fearful</h3>
              <p className="text-[#F8FAFC]/80 text-sm mb-3">
                Craves closeness but fears vulnerability. Often feels stuck in contradictory relationship wants.
              </p>
              <div className="text-xs text-[#2DD4BF] font-medium">
                Least common in general population
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/assessment" 
              className="inline-block bg-gradient-to-r from-[#2DD4BF] to-[#5B4B8A] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Discover Your Attachment Style
            </Link>
          </div>
        </div>
      </section>

      {/* Team Story */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#5B4B8A] rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">The Team</h2>
            <p className="text-[#F8FAFC]/70">
              We're a small group of people who care about making psychology useful
              rather than just interesting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-6 shadow-lg text-center border border-[#5B4B8A]/30">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2DD4BF] to-[#5B4B8A] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                E
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Elena</h3>
              <p className="text-[#2DD4BF] font-medium mb-3">Research & Content</p>
              <p className="text-[#F8FAFC]/80 text-sm">
                Background in psychology research. Spent years writing about relationships before
                realizing the "attachment" word should be in everyone's vocabulary.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-6 shadow-lg text-center border border-[#5B4B8A]/30">
              <div className="w-24 h-24 bg-gradient-to-br from-[#5B4B8A] to-[#F59E0B] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                J
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">James</h3>
              <p className="text-[#2DD4BF] font-medium mb-3">Engineering</p>
              <p className="text-[#F8FAFC]/80 text-sm">
                Built software at a healthcare company for a few years. Started reading about attachment
                theory after his own relationship struggles made him curious.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="bg-[#0D1B2A] rounded-2xl p-6 shadow-lg text-center border border-[#5B4B8A]/30">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2DD4BF] to-[#F59E0B] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                S
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Sarah</h3>
              <p className="text-[#2DD4BF] font-medium mb-3">Product</p>
              <p className="text-[#F8FAFC]/80 text-sm">
                Worked in product design at a few startups. Interested in how people communicate in
                relationships and why misunderstanding is so common.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#2DD4BF] rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">How We Handle Your Data</h2>
            <p className="text-[#F8FAFC]/80 max-w-2xl mx-auto">
              We don't store your test responses longer than we need to generate your report.
              We don't sell your data. We don't send you unsolicited emails.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#0D1B2A] rounded-xl p-6 shadow-md text-center border border-[#5B4B8A]/30">
              <div className="w-12 h-12 bg-[#0D1B2A] border border-[#2DD4BF]/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-[#2DD4BF]" />
              </div>
              <h3 className="font-bold text-[#F8FAFC] mb-2">Encryption</h3>
              <p className="text-[#F8FAFC]/80 text-sm">Your data is encrypted in transit and at rest</p>
            </div>

            <div className="bg-[#0D1B2A] rounded-xl p-6 shadow-md text-center border border-[#5B4B8A]/30">
              <div className="w-12 h-12 bg-[#0D1B2A] border border-[#2DD4BF]/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-[#2DD4BF]" />
              </div>
              <h3 className="font-bold text-[#F8FAFC] mb-2">No Selling Data</h3>
              <p className="text-[#F8FAFC]/80 text-sm">We never sell personal information to anyone</p>
            </div>

            <div className="bg-[#0D1B2A] rounded-xl p-6 shadow-md text-center border border-[#5B4B8A]/30">
              <div className="w-12 h-12 bg-[#0D1B2A] border border-[#5B4B8A]/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6 text-[#5B4B8A]" />
              </div>
              <h3 className="font-bold text-[#F8FAFC] mb-2">Minimal Storage</h3>
              <p className="text-[#F8FAFC]/80 text-sm">We keep only what we need to operate</p>
            </div>

            <div className="bg-[#0D1B2A] rounded-xl p-6 shadow-md text-center border border-[#5B4B8A]/30">
              <div className="w-12 h-12 bg-[#0D1B2A] border border-[#F59E0B]/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="font-bold text-[#F8FAFC] mb-2">No Spam</h3>
              <p className="text-[#F8FAFC]/80 text-sm">We only email you if you explicitly ask us to</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#5B4B8A] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0D1B2A] via-[#5B4B8A] to-[#2DD4BF] rounded-2xl p-8 md:p-12 text-[#F8FAFC] text-center border border-[#5B4B8A]/30">
            <h2 className="text-3xl font-bold mb-4">Questions? Thoughts?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              If you have questions about the assessment, attachment theory, or just want to say something,
              we'd like to hear from you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">-</div>
                <div className="font-semibold mb-1">General</div>
                <div className="opacity-90">hello@bondtype.com</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">-</div>
                <div className="font-semibold mb-1">Support</div>
                <div className="opacity-90">help@bondtype.com</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">-</div>
                <div className="font-semibold mb-1">Location</div>
                <div className="opacity-90">Remote-first team</div>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#0D1B2A] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#F59E0B] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">Ready to Understand Yourself?</h2>
          <p className="text-[#F8FAFC]/80 mb-8 max-w-2xl mx-auto">
            Takes about 10 minutes. No account required. Just honest questions about how you connect with people.
          </p>
          <Link 
            href="/assessment" 
            className="bg-gradient-to-r from-[#2DD4BF] to-[#5B4B8A] text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-lg"
          >
            Take Free Assessment
          </Link>
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
                "name": "What is BondType?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BondType is a science-based attachment style assessment that helps people understand their relationship patterns. It provides personalized insights based on established psychological research."
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
                "name": "Is BondType based on scientific research?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. BondType is based on established psychological research including the Experiences in Close Relationships (ECR) scale and attachment theory developed by John Bowlby and expanded by Mary Ainsworth."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the BondType assessment take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The assessment takes approximately 10-15 minutes to complete."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data private with BondType?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. BondType encrypts data at rest and in transit, never sells personal information, and only emails users who explicitly opt in."
                }
              },
              {
                "@type": "Question",
                "name": "Can my attachment style change over time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. While attachment styles are relatively stable, they can evolve through self-awareness, therapy, and healthy relationship experiences."
                }
              },
              {
                "@type": "Question",
                "name": "How is BondType different from personality tests like MBTI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Attachment styles specifically describe your pattern of seeking and maintaining closeness in relationships, rooted in developmental psychology. Personality tests describe stable traits. They are complementary frameworks."
                }
              }
            ]
          })
        }}
      />

      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About BondType",
            "description": "BondType helps people understand their attachment style and build healthier relationships through science-based assessments.",
            "url": "https://bondtype.com/about",
            "publisher": {
              "@type": "Organization",
              "name": "BondType",
              "url": "https://bondtype.com"
            }
          })
        }}
      />
    </div>
  );
}
