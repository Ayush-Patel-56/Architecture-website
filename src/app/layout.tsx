import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | StudioSAHAJ',
    default: 'StudioSAHAJ | Global Architecture & Interdisciplinary Design',
  },
  description: 'StudioSAHAJ is a global architectural firm rooted in Ahmedabad, specializing in contextual, sustainable, and human-centric design across the USA, Singapore, Switzerland, and China.',
  keywords: ['Architecture', 'Sustainable Design', 'Global Architecture', 'Urbanism', 'Boutique Firm', 'Ahmedabad Architects', 'StudioSAHAJ'],
  authors: [{ name: 'StudioSAHAJ' }],
  creator: 'StudioSAHAJ',
  publisher: 'StudioSAHAJ',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'StudioSAHAJ | Global Architecture',
    description: 'Architecture that emerges naturally from its context—effortless, rooted, and human.',
    url: 'https://studiosahaj.com',
    siteName: 'StudioSAHAJ',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'StudioSAHAJ Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudioSAHAJ | Global Architecture',
    description: 'Architecture that feels natural, lives lightly, and belongs effortlessly.',
    images: ['/hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
