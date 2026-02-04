import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Napier Labs | Cross-Platform Native Developer & B2B Brand Architect',
  description: 'Napier Labs is a premier digital forge specializing in iOS & Android native development, B2B brand identity, and AI-driven business solutions. Led by the Vibe-Smith, we bridge the gap between digital code and physical production.',
  keywords: 'iOS developer, Android developer, vibe coder, B2B branding, Napier Labs, Cyberboss Studios, Next.js developer, AI automation, custom software, digital fabrication',
  robots: 'index, follow',
  authors: [{ name: 'Napier Labs' }],
  creator: 'Napier Labs',
  publisher: 'Napier Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://napierlabs.dev',
    siteName: 'Napier Labs',
    title: 'Napier Labs | Cross-Platform Native Developer & B2B Brand Architect',
    description: 'Napier Labs is a premier digital forge specializing in iOS & Android native development, B2B brand identity, and AI-driven business solutions. Led by the Vibe-Smith, we bridge the gap between digital code and physical production.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Napier Labs | Cross-Platform Native Developer & B2B Brand Architect',
    description: 'Napier Labs is a premier digital forge specializing in iOS & Android native development, B2B brand identity, and AI-driven business solutions.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
