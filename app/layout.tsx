import React from 'react';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk ',
});

export const metadata: Metadata = {
  title: 'DevOverFlow',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world.',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500',
        },
      }}
    >
      <html lang="en">
        This is the root layout
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
