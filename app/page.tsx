import Link from 'next/link';
import SubscribeForm from '@/components/SubscribeForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BondType - Free Attachment Style Assessment',
  description: 'Discover your attachment style with our scientifically-validated 20-question assessment. Understand how you form relationships and build healthier connections.',
};

// SVG Icons
const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <SparklesIcon />
              <span>Science-backed attachment theory assessment</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Discover Your
              <span className="block bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
                Attachment Style
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-indigo-100 mb-10 leading-relaxed max-w-2xl">
              Take our free 20-question assessment and understand how you form emotional bonds. 
              Get personalized insights to build healthier relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/assessment"
                className="group inline-flex items-center justify-center gap-2 bg-white text-indigo-600 font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-indigo-50 transition-all duration-200 hover:scale-105"
              >
                Start Free Assessment
                <ArrowRightIcon />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Trust badges inline */}
            <div className="flex flex-wrap items-center gap-6 mt-12 text-indigo-200 text-sm">
              <span className="flex items-center gap-1.5">
                <LockIcon />
                No account required
              </span>
              <span className="w-1 h-1 bg-indigo-300 rounded-full" />
              <span className="flex items-center gap-1.5">
                <ClockIcon />
                10 minutes
              </span>
              <span className="w-1 h-1 bg-indigo-300 rounded-full" />
              <span className="flex items-center gap-1.5">
                <ShieldIcon />
                100% confidential
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHAT IS ATTACHMENT STYLE ====== */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Attachment Style?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Attachment style refers to how you emotionally bond and relate to others in close relationships. 
                Developed in early childhood, it shapes your adult relationships, communication patterns, 
                and emotional responses.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Understanding your attachment style is the first step toward building more secure, 
                fulfilling connections with the people you care about.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Secure Attachment</h3>
                    <p className="text-sm text-gray-600">Comfortable with intimacy and independence. Forms healthy, balanced relationships.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Anxious Attachment</h3>
                    <p className="text-sm text-gray-600">Craves closeness but fears abandonment. Often seeks reassurance from partners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-rose-50 border border-rose-100">
                  <div className="w-3 h-3 bg-rose-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Avoidant Attachment</h3>
                    <p className="text-sm text-gray-600">Values independence over intimacy. Tends to pull away when relationships deepen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fearful-Avoidant Attachment</h3>
                    <p className="text-sm text-gray-600">Mixed feelings about closeness. Desires connection but fears being hurt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES SECTION ====== */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Take Our Assessment?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on decades of psychological research to give you actionable, personalized insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-5">
                <ShieldIcon />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Private & Secure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your responses are encrypted and never shared. Complete anonymity guaranteed.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-5">
                <BookIcon />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Science-Based</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Based on decades of attachment theory research and validated clinical studies.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                <ClockIcon />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick & Easy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Just 20 questions, takes about 10 minutes. No account needed to get started.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-5">
                <HeartIcon />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Actionable Insights</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get practical advice to improve your relationships and emotional wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHAT YOU GET ====== */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What You Will Get
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                After completing the assessment, you will receive a comprehensive analysis 
                of your attachment style with personalized recommendations.
              </p>
              <ul className="space-y-4">
                {[
                  'Detailed attachment style analysis',
                  'Personalized relationship insights',
                  'AI-powered in-depth summary',
                  'Actionable improvement strategies',
                  'Understanding of your emotional patterns',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Start Free Assessment
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2 bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <UserIcon />
                </div>
                <div>
                  <div className="font-bold text-gray-900">1,200+ people</div>
                  <div className="text-sm text-gray-500">have taken this assessment</div>
                </div>
              </div>
              <div className="flex items-end gap-1 mb-4">
                {[5, 4, 5, 5, 4].map((star, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "This assessment gave me incredible insights into why I act the way I do in relationships. 
                The personalized summary was spot on and helped me understand my anxious attachment style. 
                Highly recommend."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-gray-500">
                Sarah M. — Secure Attachment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRUST SECTION ====== */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
                <LockIcon />
              </div>
              <span className="text-sm font-semibold text-gray-900">No account required</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
                <ClockIcon />
              </div>
              <span className="text-sm font-semibold text-gray-900">Takes only 10 minutes</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
                <ShieldIcon />
              </div>
              <span className="text-sm font-semibold text-gray-900">Scientifically-backed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
                <SparklesIcon />
              </div>
              <span className="text-sm font-semibold text-gray-900">AI-powered insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Understand Yourself Better?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands who have discovered their attachment style and transformed their relationships.
          </p>
          <Link
            href="/assessment"
            className="group inline-flex items-center gap-2 bg-white text-indigo-600 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-200"
          >
            Start Free Assessment
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <SubscribeForm />
        </div>
      </section>

    </div>
  );
}
