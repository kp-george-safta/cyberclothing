import type { Metadata, Viewport } from 'next'
import { Inter, Geist } from 'next/font/google'
import '@/styles/globals.css'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ['latin'] })

// Replaces the <Head> block that used to be copy-pasted into every page.
export const metadata: Metadata = {
  title: 'CyberGhost Clothing',
  description: 'Training project for the CyberGhost Clothing store',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        <Header />
        
        {children}
        
        <Footer />

      </body>
    </html>
  )
}
