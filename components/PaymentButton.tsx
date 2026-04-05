'use client';

import { useState } from 'react';
import { PRICING } from '@/lib/pricing';

interface PaymentButtonProps {
  planId: keyof typeof PRICING;
  testResultId?: string;
  onSuccess?: (orderId: string) => void;
  onError?: (error: string) => void;
  className?: string;
}

export default function PaymentButton({ 
  planId, 
  testResultId, 
  onSuccess, 
  onError,
  className = '' 
}: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const plan = PRICING[planId];
  if (!plan) {
    return <div className="text-red-500">Invalid plan</div>;
  }

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // 创建PayPal订单
      const response = await fetch('/api/payment/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          testResultId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create order');
      }

      // 如果有approval URL，跳转到PayPal
      if (data.approvalUrl) {
        // 在新窗口中打开PayPal结账页面
        window.open(data.approvalUrl, '_blank');
        
        // 同时也可以用当前窗口跳转
        // window.location.href = data.approvalUrl;
        
        // 保存orderId以便后续验证
        localStorage.setItem('pendingOrderId', data.orderId);
        localStorage.setItem('pendingPlanId', planId);
        
        onSuccess?.(data.orderId);
      }

    } catch (err: any) {
      const errorMessage = err.message || 'Payment failed';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className={`
          w-full py-3 px-6 rounded-lg font-semibold text-white
          bg-gradient-to-r from-blue-600 to-blue-700
          hover:from-blue-700 hover:to-blue-800
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          flex items-center justify-center gap-2
          shadow-lg hover:shadow-xl
        `}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle 
                className="opacity-25" 
                cx="12" cy="12" r="10" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none" 
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
              />
            </svg>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <span>Pay with</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c0 .582.126 1.076.378 1.482.304.502.79.781 1.457.781.667 0 1.142-.279 1.457-.781.252-.406.378-.9.378-1.482 0-.667-.126-1.176-.378-1.526a1.425 1.425 0 0 1-.354-.963c0-.199.024-.384.07-.555.601-2.243.267-3.857-.99-4.821-.653-.501-1.48-.752-2.48-.752h-4.01c-.467 0-.853.151-1.163.455-.308.302-.462.686-.462 1.148 0 .297.056.56.168.79.112.229.274.464.485.706.484.541.774 1.164.874 1.87.05.353.08.713.08 1.08l.024.276a2.428 2.428 0 0 1-.567 1.664c-.367.436-.864.654-1.493.654z"/>
            </svg>
            <span>PayPal</span>
          </>
        )}
      </button>
      
      {error && (
        <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
      )}
      
      <p className="mt-2 text-xs text-gray-500 text-center">
        Secure payment powered by PayPal
      </p>
    </div>
  );
}
