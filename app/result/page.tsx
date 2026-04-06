import type { Metadata } from 'next';
import { Suspense } from 'react';
import ResultClient from './ResultClient';

export const metadata: Metadata = {
  title: 'Your Attachment Style Results - BondType',
  description: 'View your personalized attachment style results. Get detailed insights into your relationship patterns, strengths, and growth areas.',
};

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ResultClient />
    </Suspense>
  );
}
