'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function PaymentCancelPage() {
  useEffect(() => {
    // 清除 pending 状态
    localStorage.removeItem('pendingOrderId');
    localStorage.removeItem('pendingPlanId');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
        <div className="text-6xl mb-4">😐</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your payment was cancelled and you have not been charged. You can still access the free preview of your results.
        </p>

        <div className="space-y-3">
          <Link
            href="/result"
            className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
          >
            View My Free Preview
          </Link>
          <Link
            href="/pricing"
            className="block w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors"
          >
            View Pricing Plans
          </Link>
          <Link
            href="/assessment"
            className="block w-full text-blue-600 hover:text-blue-700 font-medium py-2"
          >
            Retake Assessment
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Need help? <a href="mailto:support@bondtype.com" className="text-blue-600 hover:underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
}
