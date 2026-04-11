import Link from 'next/link';
import SubscribeForm from '@/components/SubscribeForm';
import TestimonialAvatars from '@/components/TestimonialAvatars';
import TrustBadges from '@/components/TrustBadges';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BondType - Free Attachment Style Assessment',
  description: 'Discover your attachment style with our scientifically-validated 15-question assessment. Understand how you form relationships and build healthier connections.',
};

// SVG Icons
const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090a] text-[#f7f8f8]">

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden bg-[#08090a]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5e6ad2]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7170ff]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[rgba(113,112,255,0.1)] text-[#7170ff] text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-[rgba(113,112,255,0.2)]">
              <SparklesIcon />
              <span>Science-backed attachment theory assessment</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#f7f8f8] leading-[1.05] tracking-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
              Discover Your
              <span className="block text-[#7170ff]">
                Attachment Style
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#d0d6e0] mb-10 leading-relaxed max-w-2xl">
              Take our free 15-question assessment and understand how you form emotional bonds. 
              Get personalized insights to build healthier relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/assessment"
                className="group inline-flex items-center justify-center gap-2 bg-[#5e6ad2] text-white font-medium text-base px-8 py-3.5 rounded-md hover:bg-[#828fff] transition-colors relative"
              >
                <span className="relative">
                  Take Free 15-Question Test
                  <span className="absolute -top-2 -right-6 bg-[#7170ff] text-white text-xs font-bold px-2 py-0.5 rounded-full">FREE</span>
                </span>
                <ArrowRightIcon />
              </Link>
              <Link
                href="#features"
                className="btn-ghost inline-flex items-center justify-center gap-2 text-[#d0d6e0] font-medium text-base px-8 py-3.5 rounded-md hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Trust badges inline */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-[#8a8f98] text-sm">
              <span className="flex items-center gap-2">
                <LockIcon />
                No account required
              </span>
              <span className="w-px h-4 bg-[rgba(255,255,255,0.1)]" />
              <span className="flex items-center gap-2">
                <ClockIcon />
                10 minutes
              </span>
              <span className="w-px h-4 bg-[rgba(255,255,255,0.1)]" />
              <span className="flex items-center gap-2">
                <ShieldIcon />
                100% confidential
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHAT IS ATTACHMENT STYLE ====== */}
      <section className="py-20 bg-[#0f1011]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-[#f7f8f8] mb-6 tracking-tight">
                What is Attachment Style?
              </h2>
              <p className="text-[#d0d6e0] mb-6 leading-relaxed">
                Attachment style refers to how you emotionally bond and relate to others in close relationships. 
                Developed in early childhood, it shapes your adult relationships, communication patterns, 
                and emotional responses.
              </p>
              <p className="text-[#d0d6e0] leading-relaxed">
                Understanding your attachment style is the first step toward building more secure, 
                fulfilling connections with the people you care about.
              </p>
            </div>

            <div className="bg-[#191a1b] rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                  <div className="w-2.5 h-2.5 bg-[#5e6ad2] rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#f7f8f8] text-sm mb-0.5">Secure Attachment</h3>
                    <p className="text-[#8a8f98] text-sm">Comfortable with intimacy and independence. Forms healthy, balanced relationships.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                  <div className="w-2.5 h-2.5 bg-[#7170ff] rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#f7f8f8] text-sm mb-0.5">Anxious Attachment</h3>
                    <p className="text-[#8a8f98] text-sm">Craves closeness but fears abandonment. Often seeks reassurance from partners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                  <div className="w-2.5 h-2.5 bg-[#8a8f98] rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#f7f8f8] text-sm mb-0.5">Avoidant Attachment</h3>
                    <p className="text-[#8a8f98] text-sm">Values independence over intimacy. Tends to pull away when relationships deepen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                  <div className="w-2.5 h-2.5 bg-[#62666d] rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#f7f8f8] text-sm mb-0.5">Fearful-Avoidant Attachment</h3>
                    <p className="text-[#8a8f98] text-sm">Mixed feelings about closeness. Desires connection but fears being hurt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES SECTION ====== */}
      <section id="features" className="py-20 bg-[#08090a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-[#f7f8f8] mb-4 tracking-tight">
              Why Take Our Assessment?
            </h2>
            <p className="text-[#d0d6e0] max-w-2xl mx-auto">
              Built on decades of psychological research to give you actionable, personalized insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#191a1b] p-5 rounded-lg border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.12)] transition-colors">
              <div className="w-10 h-10 bg-[rgba(94,106,210,0.1)] text-[#5e6ad2] rounded-md flex items-center justify-center mb-4">
                <ShieldIcon />
              </div>
              <h3 className="text-[#f7f8f8] font-medium mb-1.5">Private & Secure</h3>
              <p className="text-[#8a8f98] text-sm leading-relaxed">
                Your responses are encrypted and never shared. Complete anonymity guaranteed.
              </p>
            </div>

            <div className="bg-[#191a1b] p-5 rounded-lg border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.12)] transition-colors">
              <div className="w-10 h-10 bg-[rgba(94,106,210,0.1)] text-[#5e6ad2] rounded-md flex items-center justify-center mb-4">
                <BookIcon />
              </div>
              <h3 className="text-[#f7f8f8] font-medium mb-1.5">Science-Based</h3>
              <p className="text-[#8a8f98] text-sm leading-relaxed">
                Based on decades of attachment theory research and validated clinical studies.
              </p>
            </div>

            <div className="bg-[#191a1b] p-5 rounded-lg border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.12)] transition-colors">
              <div className="w-10 h-10 bg-[rgba(113,112,255,0.1)] text-[#7170ff] rounded-md flex items-center justify-center mb-4">
                <ClockIcon />
              </div>
              <h3 className="text-[#f7f8f8] font-medium mb-1.5">Quick & Easy</h3>
              <p className="text-[#8a8f98] text-sm leading-relaxed">
                Just 15 questions, takes about 10 minutes. No account needed to get started.
              </p>
            </div>

            <div className="bg-[#191a1b] p-5 rounded-lg border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.12)] transition-colors">
              <div className="w-10 h-10 bg-[rgba(113,112,255,0.1)] text-[#7170ff] rounded-md flex items-center justify-center mb-4">
                <HeartIcon />
              </div>
              <h3 className="text-[#f7f8f8] font-medium mb-1.5">Actionable Insights</h3>
              <p className="text-[#8a8f98] text-sm leading-relaxed">
                Get practical advice to improve your relationships and emotional wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHAT YOU GET ====== */}
      <section className="py-20 bg-[#0f1011]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-medium text-[#f7f8f8] mb-6 tracking-tight">
                What You Will Get
              </h2>
              <p className="text-[#d0d6e0] mb-8 leading-relaxed">
                After completing the assessment, you will receive a comprehensive analysis 
                of your attachment style with personalized recommendations.
              </p>
              <ul className="space-y-3">
                {[
                  'Detailed attachment style analysis',
                  'Personalized relationship insights',
                  'In-depth summary powered by BondType',
                  'Actionable improvement strategies',
                  'Understanding of your emotional patterns',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#d0d6e0]">
                    <span className="w-5 h-5 bg-[#5e6ad2] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 bg-[#5e6ad2] text-white font-medium px-7 py-3.5 rounded-md hover:bg-[#828fff] transition-colors"
                >
                  Start Free Assessment
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2 bg-[#191a1b] rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-[rgba(94,106,210,0.1)] rounded-full flex items-center justify-center">
                  <UserIcon />
                </div>
                <div>
                  <div className="font-medium text-[#f7f8f8] text-sm">Based on research</div>
                  <div className="text-[#8a8f98] text-xs">Attachment theory &amp; psychology</div>
                </div>
              </div>
              <div className="flex items-end gap-0.5 mb-3">
                {[5, 4, 5, 5, 4].map((star, i) => (
                  <svg key={i} className="w-4 h-4 text-[#5e6ad2]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#d0d6e0] text-sm italic leading-relaxed">
                &quot;This assessment gave me incredible insights into why I act the way I do in relationships. 
                The personalized summary was spot on and helped me understand my anxious attachment style. 
                Highly recommend.&quot;
              </p>
              <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)] text-xs text-[#8a8f98]">
                Sarah M. — Secure Attachment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRUST SECTION ====== */}
      <section className="py-14 bg-[#08090a] border-y border-[rgba(255,255,255,0.05)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 bg-[#191a1b] text-[#8a8f98] rounded-md flex items-center justify-center border border-[rgba(255,255,255,0.08)]">
                <LockIcon />
              </div>
              <span className="text-sm font-medium text-[#d0d6e0]">No account required</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 bg-[#191a1b] text-[#8a8f98] rounded-md flex items-center justify-center border border-[rgba(255,255,255,0.08)]">
                <ClockIcon />
              </div>
              <span className="text-sm font-medium text-[#d0d6e0]">Takes only 10 minutes</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 bg-[#191a1b] text-[#8a8f98] rounded-md flex items-center justify-center border border-[rgba(255,255,255,0.08)]">
                <ShieldIcon />
              </div>
              <span className="text-sm font-medium text-[#d0d6e0]">Scientifically-backed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 bg-[#191a1b] text-[#8a8f98] rounded-md flex items-center justify-center border border-[rgba(255,255,255,0.08)]">
                <SparklesIcon />
              </div>
              <span className="text-sm font-medium text-[#d0d6e0]">BondType-powered insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="py-20 bg-[#0f1011]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-[#f7f8f8] mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#191a1b] rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
              <h3 className="text-[#f7f8f8] font-medium mb-3">What is an attachment style?</h3>
              <p className="text-[#8a8f98] text-sm leading-relaxed">
                <strong>Attachment style</strong> is a psychological pattern that describes how you form and maintain emotional bonds in close relationships. Developed in early childhood based on your relationship with caregivers, it influences how you seek closeness, handle conflict, and trust others as an adult. The four attachment styles are: Secure, Anxious, Avoidant, and Fearful-Avoidant.
              </p>
            </div>

            <div className="bg-[#191a1b] rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
              <h3 className="text-[#f7f8f8] font-medium mb-3">How is this different from personality tests like MBTI or the Big Five?</h3>
              <p className="text-[#8a8f98] text-sm leading-relaxed">
                Personality tests describe stable traits (e.g., introversion, openness) that tend to remain consistent across contexts. Attachment style specifically describes your pattern of seeking and maintaining closeness in relationships — it is rooted in developmental psychology and supported by decades of research. The two frameworks are complementary, not interchangeable.
              </p>
            </div>

            <div className="bg-[#191a1b] rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
              <h3 className="text-[#f7f8f8] font-medium mb-3">Is my data private?</h3>
              <p className="text-[#8a8f98] text-sm leading-relaxed">
                <strong>Yes.</strong> Your responses are encrypted at rest and in transit. We don&apos;t require an account to get started — no email, no password. We never sell your personal data. See our <Link href="/privacy" className="text-[#5e6ad2] hover:underline">Privacy Policy</Link> for full details.
              </p>
            </div>

            <div className="bg-[#191a1b] rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
              <h3 className="text-[#f7f8f8] font-medium mb-3">What do I get with the free vs. paid version?</h3>
              <p className="text-[#8a8f98] text-sm leading-relaxed">
                <strong>Free:</strong> 15 questions + basic attachment style overview. <strong>Premium ($9.99):</strong> Full 36-question assessment + detailed personalized report + actionable improvement strategies. <Link href="/pricing" className="text-[#5e6ad2] hover:underline">View full pricing</Link>.
              </p>
            </div>

            <div className="bg-[#191a1b] rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
              <h3 className="text-[#f7f8f8] font-medium mb-3">Can my attachment style change over time?</h3>
              <p className="text-[#8a8f98] text-sm leading-relaxed">
                <strong>Yes.</strong> While attachment styles are relatively stable, research shows they can evolve through self-awareness, therapy, and consistent healthy relationship experiences. Understanding your attachment style is the first step toward building more secure patterns.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/faq" className="text-[#5e6ad2] hover:underline text-sm">
              View all questions →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-24 bg-[#08090a] relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5e6ad2]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#7170ff]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-[#f7f8f8] mb-5 tracking-tight">
            Ready to Understand Yourself Better?
          </h2>
          <p className="text-[#d0d6e0] mb-10 max-w-2xl mx-auto">
            Join thousands who have discovered their attachment style and transformed their relationships.
          </p>
          <Link
            href="/assessment"
            className="group inline-flex items-center gap-2 bg-[#5e6ad2] text-white font-medium text-base px-10 py-4 rounded-md hover:bg-[#828fff] transition-colors"
          >
            Start Free Assessment
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section className="py-16 bg-[#0f1011]">
        <div className="max-w-6xl mx-auto px-6">
          <SubscribeForm />
        </div>
      </section>

    </div>
  );
}