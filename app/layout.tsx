import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Import authorization
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prompt-AI',
  description: 'AI generator'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Wrap authorization
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
