import Link from 'next/link';
import SubscribeForm from '@/components/SubscribeForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 font-sans">
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Attachment Style Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your attachment style with our scientifically-validated 20-question assessment.
            Understand how you form relationships and improve your connections.
          </p>
        </header>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Attachment Style?</h2>
            <p className="text-gray-600 mb-6">
              Attachment style refers to how you emotionally bond and relate to others in close relationships. 
              Developed in early childhood, it influences your adult relationships, communication patterns, 
              and emotional responses.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Secure: Comfortable with intimacy and independence</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span>Anxious: Craves closeness but fears abandonment</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span>Avoidant: Values independence over intimacy</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span>Fearful: Mixed feelings about closeness</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Take the Assessment</h2>
            <p className="mb-6 opacity-90">
              Our 20-question assessment takes about 10 minutes to complete. You'll receive:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</div>
                <span>Detailed attachment style analysis</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</div>
                <span>Personalized relationship insights</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</div>
                <span>Actionable improvement strategies</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</div>
                <span>AI-powered personalized summary</span>
              </li>
            </ul>
            <Link href="/assessment" className="block w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-colors text-lg text-center">
              Start Free Assessment
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-blue-500 text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your responses are encrypted and never shared with third parties.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-blue-500 text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Science-Based</h3>
            <p className="text-gray-600">Based on decades of attachment theory research and clinical studies.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-blue-500 text-3xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Actionable Insights</h3>
            <p className="text-gray-600">Get practical advice to improve your relationships and emotional wellbeing.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Understand Yourself Better?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands who have discovered their attachment style and transformed their relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors text-lg">
              Take Assessment Now
            </Link>
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Newsletter Subscribe */}
        <section className="mb-16">
          <SubscribeForm />
        </section>


      </main>
    </div>
  );
}
