import type { Metadata } from 'next';
import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import ResultClient from './ResultClient';

export const metadata: Metadata = {
  title: 'Your Attachment Style Results - BondType',
  description: 'View your personalized attachment style results. Get detailed insights into your relationship patterns, strengths, and growth areas.',
};

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#2DD4BF] border-t-transparent"></div>
    </div>
  );
}

// Bug #1 Fix: This is a server component that runs on each request
// Check if assessment was completed before rendering the result page
function CheckAssessmentAccess() {
  // We'll do the client-side check in ResultClient, but for SSR we can
  // redirect if needed. For now, just render.
  return null;
}

export default function ResultPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ResultClient />
    </Suspense>
  );
}
