import type { Metadata } from 'next'
import './globals.css'
import GoogleAdsense from '@/components/google-adsense'

export const metadata: Metadata = {
  title: 'DeepWiki Badge Generator',
  description: 'A simple tool to generate DeepWiki badges for your GitHub README',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepwiki.ryoppippi.com',
    title: 'DeepWiki Badge Generator',
    description: 'A simple tool to generate DeepWiki badges for your GitHub README',
    images: `${process.env.CF_PAGES_URL}/screenshot.jpeg`,
  },
  twitter: {
    title: 'DeepWiki Badge Generator',
    description: 'A simple tool to generate DeepWiki badges for your GitHub README',
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
      <GoogleAdsense pId={process.env.GOOGLE_ADSENSE_PUBLISHER_ID ?? ''} />
    </html>
  )
}
