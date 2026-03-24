import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media',
  description: 'Recent news, features, and publications from the StudioSAHAJ architectural team.',
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
