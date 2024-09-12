import BlogList1 from '@/components/Blog/BlogList1'
import LandingPageLayout from '@/components/landingPage/LandingPageLayout'
import React from 'react'

function page() {
  return (
    <LandingPageLayout>
       <BlogList1 />
    </LandingPageLayout>
  )
}

export default page