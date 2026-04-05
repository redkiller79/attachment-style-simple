'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h3>
      <p className="text-gray-600 mb-6">
        Get the latest insights on attachment styles and relationship psychology.
      </p>

      {status === 'success' ? (
        <div className="text-green-600 bg-green-50 rounded-xl p-4 text-center font-medium">
          ✓ {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all disabled:opacity-60"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{message}</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}

      <p className="text-gray-400 text-xs mt-4 text-center">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
