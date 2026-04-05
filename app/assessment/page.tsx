import type { Metadata } from 'next';
import AssessmentClient from './AssessmentClient';

export const metadata: Metadata = {
  title: 'Take the Attachment Style Assessment - BondType',
  description: 'Take our scientifically-validated 20-question attachment style assessment. Discover your attachment style and get personalized insights about your relationship patterns.',
};

export default function AssessmentPage() {
  return <AssessmentClient />;
}
