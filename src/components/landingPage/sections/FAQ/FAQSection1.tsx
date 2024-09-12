import React from 'react'
import { FaqAccordion } from '../../FaqAccordion'

function FAQSection1() {
  return (

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Grid */}
  <div className="grid md:grid-cols-5 gap-10">
    <div className="md:col-span-2">
      <div className="max-w-xs">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Frequently<br />asked questions</h2>
        <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
      </div>
    </div>
    {/* End Col */}
    <div className="md:col-span-3">
      {/* Accordion */}
      <FaqAccordion />
     
      {/* End Accordion */}
    </div>
    {/* End Col */}
  </div>
  {/* End Grid */}
</div>

    
  )
}

export default FAQSection1