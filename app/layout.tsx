import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeepWiki Badge Generator',
  description: 'Generate badges for your DeepWiki from GitHub repositories',
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
