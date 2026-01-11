import type { Metadata } from 'next';
import { personalInfo } from '@/data';
import './globals.css';

export const metadata: Metadata = {
  title: personalInfo.seo.title,
  description: personalInfo.seo.description,
  keywords: personalInfo.seo.keywords,
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: personalInfo.seo.title,
    description: personalInfo.seo.description,
    url: personalInfo.seo.siteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    images: [personalInfo.seo.ogImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: personalInfo.seo.title,
    description: personalInfo.seo.description,
    images: [personalInfo.seo.ogImage],
  },
  robots: 'index, follow',
  themeColor: '#000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href={personalInfo.images.favicon} />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Passions+Conflict&family=Orbitron&family=Fira+Code&family=Six+Caps&display=swap"
        />
      </head>
      <body className="body">{children}</body>
    </html>
  );
}
