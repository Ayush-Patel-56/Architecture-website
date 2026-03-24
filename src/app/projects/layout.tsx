import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Our global portfolio of cultural, residential, and institutional architecture. Discover the iconic works of StudioSAHAJ.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
