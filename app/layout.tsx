import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pawsome Walks - Professional Dog Walking Services',
  description: 'Professional dog walking and pet care services. Licensed, insured, and passionate about keeping your furry friends happy and healthy.',
  keywords: 'dog walking, pet care, dog sitter, professional dog walker, pet services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}