import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'People',
  description: 'Meet the team behind StudioSAHAJ. Interdisciplinary architectural leadership and partners across our global studios.',
};

export default function PeopleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
