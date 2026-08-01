import type { Metadata } from 'next';
import { SaaSTemplate } from '@/components/blocks/saas-template';

export const metadata: Metadata = {
  title: 'SaaS Template — Full Page',
  description: 'Nebula UI SaaS template rendered full-page.',
};

export default function FullPageTemplate() {
  return (
    <div className="flex min-h-screen w-full bg-nb-bg">
      <SaaSTemplate fullPage />
    </div>
  );
}
