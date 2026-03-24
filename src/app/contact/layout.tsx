import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out to the StudioSAHAJ root studio in Ahmedabad or our global studios in Switzerland, USA, Singapore, Toronto, and Shanghai.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
