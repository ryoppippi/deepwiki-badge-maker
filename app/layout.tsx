import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeepWiki Badge Generator',
  description: 'Generate badges for your DeepWiki from GitHub repositories',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepwiki.ryoppippi.com',
    title: 'DeepWiki Badge Generator',
    description: 'Generate badges for your DeepWiki from GitHub repositories',
    images: `${process.env.CF_PAGES_URL}/screenshot.jpeg`,
  },
  twitter: {
    title: 'DeepWiki Badge Generator',
    description: 'Generate badges for your DeepWiki from GitHub repositories',
    card: 'summary_large_image',
    creator: '@ryoppippi',
    images: `${process.env.CF_PAGES_URL}/screenshot.jpeg`,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
