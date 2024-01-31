import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css';
import { dark } from "@clerk/themes";


import LeftSidebar from '../components/shared/LeftSidebar'
import RightSidebar from '../components/shared/Rightsidebar'
import Bottombar from '../components/shared/Bottombar'
import TopSidebar from '../components/shared/TopSidebar'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 14 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}    
    >
      <html lang="en">
        <body className={inter.className}>
          <TopSidebar></TopSidebar>
          <main className='flex flex-row'>
            <LeftSidebar></LeftSidebar>
            <section className='main-container'>
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>
            <RightSidebar></RightSidebar>
          </main>
          <Bottombar></Bottombar>
        </body>
      </html>
    </ClerkProvider>

  )
}
