import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nim Gia Minh - Backend Developer',
  description: 'Portfolio website of Nim Gia Minh, a backend developer with 10+ years of experience in web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-text">
        {children}
      </body>
    </html>
  )
}
