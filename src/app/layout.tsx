'use client';

import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';
import {
  Footer,
  Navbar,
} from '@/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Simple nft marketplace',
  description: 'Place to trade your nft',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute='class'
        >
          <div
            className='dark:bg-nft-dark bg-white min-h-screen'
          >
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Script
          src='https://kit.fontawesome.com/fc3af24e15.js'
          crossOrigin='anonymous'
        />
      </body>
    </html>
  );
}
