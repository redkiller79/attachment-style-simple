'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const capturePayment = async () => {
      // 从 URL 参数或 localStorage 获取 orderId
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get('orderId') || localStorage.getItem('pendingOrderId');

      if (!orderId) {
        setStatus('error');
        return;
      }

      try {
        const response = await fetch('/api/payment/paypal/capture-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setOrderDetails(data);
          setStatus('success');
          // 清除 pending 状态
          localStorage.removeItem('pendingOrderId');
          localStorage.removeItem('pendingPlanId');
          // Bug #2 fix: Set assessmentUnlocked so AssessmentClient grants Q16+ access
          localStorage.setItem('assessmentUnlocked', 'true');
        } else {
          console.error('Payment capture failed:', data.error);
          setStatus('error');
        }
      } catch (error) {
        console.error('Payment capture error:', error);
        setStatus('error');
      }
    };

    capturePayment();
  }, []);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your payment...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Issue</h1>
          <p className="text-gray-600 mb-6">
            There was an issue processing your payment. Please try again or contact support.
          </p>
          <div className="space-y-3">
            <Link
              href="/result"
              className="block w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Back to Results
            </Link>
            <Link
              href="/assessment"
              className="block w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Retake Assessment
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
        <div className="text-7xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your attachment style report is now available.
        </p>

        {orderDetails && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-left">
            <h3 className="font-semibold text-green-800 mb-2">Order Details</h3>
            <div className="text-sm text-green-700 space-y-1">
              <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
              <p><strong>Status:</strong> {orderDetails.status}</p>
              {orderDetails.captureId && (
                <p><strong>Capture ID:</strong> {orderDetails.captureId}</p>
              )}
              {orderDetails.amount && (
                <p><strong>Amount:</strong> {orderDetails.amount.value} {orderDetails.amount.currency_code}</p>
              )}
            </div>
          </div>
        )}

        <div className="space-y-3">
          <Link
            href="/result"
            className="block w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all shadow-lg"
          >
            View Your Full Report
          </Link>
          <Link
            href="/assessment"
            className="block w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Retake Assessment
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          A confirmation email has been sent to your PayPal email address.
        </p>
      </div>
    </div>
  );
}
