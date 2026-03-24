import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice',
  description: 'Learn about the Firm Philosophy and Global Topology of StudioSAHAJ. An interdisciplinary studio rooted in Ahmedabad with a natural, effortless design approach.',
};

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
