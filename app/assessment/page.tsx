import type { Metadata } from 'next';
import AssessmentClient from './AssessmentClient';

export const metadata: Metadata = {
  title: 'Take the Attachment Style Assessment - BondType',
  description: 'Take our scientifically-validated 36-question attachment style assessment. Discover your attachment style with the first 15 questions free, or unlock the full assessment for complete insights.',
};

export default function AssessmentPage() {
  return <AssessmentClient />;
}
