import { Montserrat } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'

import type { Metadata } from 'next'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata: Metadata = {
  title: 'Mesa Radiônica Essencial KuanYin',
  description: 'Instituto Suzy Keller',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <meta name="theme-color" content="#390a57" />
      <body className={montserrat.className}>{children}</body>
      {/* <GoogleAnalytics gaId="G-DFJY4MQZW4" /> */}
      <GoogleAnalytics gaId="G-D3XE7FPQPS" />

      <Analytics />
    </html>
  )
}
