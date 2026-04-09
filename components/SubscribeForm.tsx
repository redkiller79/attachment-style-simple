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
    <div className="bg-[#0D1B2A] rounded-2xl p-8 shadow-lg max-w-md mx-auto border border-[#5B4B8A]/30">
      <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Stay Updated</h3>
      <p className="text-[#F8FAFC]/70 mb-6">
        Get the latest insights on attachment styles and relationship psychology.
      </p>

      {status === 'success' ? (
        <div className="text-[#2DD4BF] bg-[#2DD4BF]/10 rounded-xl p-4 text-center font-medium">
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
              className="w-full px-4 py-3 rounded-xl border border-[#5B4B8A]/30 bg-[#0a0a0f] text-[#F8FAFC] focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/20 outline-none transition-all disabled:opacity-60"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm bg-red-400/10 rounded-lg px-3 py-2">{message}</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#2DD4BF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#2DD4BF]/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}

      <p className="text-[#F8FAFC]/50 text-xs mt-4 text-center">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
