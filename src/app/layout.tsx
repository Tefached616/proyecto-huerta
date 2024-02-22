import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Control de temperatura ambiente y del suelo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <ClerkProvider>
    <html lang='es'>
      <body className={poppins.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
