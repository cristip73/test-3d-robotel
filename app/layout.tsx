import type { Metadata } from 'next'
import { Libre_Baskerville, Open_Sans } from 'next/font/google'
import './globals.css'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-libre-baskerville',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Kilostop - Transformă-ți Viața: Slăbește Sănătos și Definitiv',
  description: 'Programul Kilostop te ajută să slăbești sănătos și definitiv. Peste 23.000 de pacienți mulțumiți.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className={`${libreBaskerville.variable} ${openSans.variable} font-sans antialiased max-w-screen-xl mx-auto pt-20`}>
        {children}
      </body>
    </html>
  )
}

