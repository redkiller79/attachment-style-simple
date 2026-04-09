import { Metadata } from 'next';
import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Checkout - Attachment Style Assessment',
  description: 'Complete your purchase to unlock your full attachment style report',
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}