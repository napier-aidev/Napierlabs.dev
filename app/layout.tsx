import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Napier Labs | Agentic Engineer · Technology & Design Hub',
  description:
    'Napier Labs is an agile technology and design hub building AI-assisted software ecosystems for live entertainment, aquaculture compliance, and industrial workflows. Strategic partnerships for API/SDK validation and hardware integrations.',
  keywords:
    'agentic engineer, AI-assisted development, B2B SaaS partnerships, API integration sponsor, Napier Labs, Setlist rip, Pixel Lab, SmartSpec, compliance software, sponsorship',
  robots: 'index, follow',
  authors: [{ name: 'Napier Labs' }],
  creator: 'Napier Labs',
  publisher: 'Napier Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://napierlabs.dev',
    siteName: 'Napier Labs',
    title: 'Napier Labs | Agentic Engineer · Technology & Design Hub',
    description:
      'Agile builds and deployment pipelines spanning live entertainment, aquaculture tooling, and industrial compliance—open to strategic partnerships.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Napier Labs | Agentic Engineer · Technology & Design Hub',
    description:
      'Technology and design hub for AI-assisted pipelines, integrations, and B2B partnership opportunities.',
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
