import BlogArticle1 from '@/components/Blog/BlogArticle1'
import LandingPageLayout from '@/components/landingPage/LandingPageLayout'
import React from 'react'

function page() {
  return (
    <LandingPageLayout>
        <BlogArticle1 />
    </LandingPageLayout>
  )
}

export default page