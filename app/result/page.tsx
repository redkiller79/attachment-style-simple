import type { Metadata } from 'next';
import ResultClient from './ResultClient';

export const metadata: Metadata = {
  title: 'Your Attachment Style Results - BondType',
  description: 'View your personalized attachment style results. Get detailed insights into your relationship patterns, strengths, and growth areas.',
};

export default function ResultPage() {
  return <ResultClient />;
}
