'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Footer, Navbar } from '@/components';
import './globals.css';

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: 'Simple nft marketplace',
  description: 'Place to trade your nft',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute="class"
        >
          <div
            className='dark:bg-nft-dark bg-white min-h-screen'
          >
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
