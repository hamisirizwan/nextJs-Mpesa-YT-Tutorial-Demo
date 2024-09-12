import React, { ReactNode } from 'react'
import Footer from './Footer'
import LandingPageNav from './LandingNavBar'
import MobileMenu from './MobileMenu'

function LandingPageLayout({children}:{children:ReactNode}) {
  return (
    <main className="flex flex-col min-h-screen ">
    {/* <HomeNavBar /> */}
    <LandingPageNav />
    <MobileMenu />
    <div className="flex-grow">
      {children}
    </div>
    <Footer />
  </main>
  )
}

export default LandingPageLayout