import type { Metadata } from 'next';
import ServicesPageClient from './services-client';

export const metadata: Metadata = {
  title: 'Services | Elevate Digital',
  description: 'Explore our full range of digital services and pricing packages.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
