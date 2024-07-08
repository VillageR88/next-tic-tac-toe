import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import DataProvider from '@/app/_providers/DataContext';

const outfit = Outfit({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Tic tac toe',
  description: 'Tic tac toe',
  applicationName: 'Tic tac toe',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="hidden" lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content={undefined} />
      </head>
      <body
        className={`${outfit.variable} mx-auto flex min-h-dvh flex-col justify-center overflow-x-clip bg-darkNavy p-6 font-outfit sm:py-10 md:min-h-screen`}
      >
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
