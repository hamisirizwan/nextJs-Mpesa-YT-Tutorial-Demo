"use client"
import useAppStore from '@/stores/appStore';
import { useSession } from 'next-auth/react';
import React from 'react'
import { toast } from 'sonner'

function PricingSection2() {

  const { data:session } = useSession();

const { togglePaymentDialog } = useAppStore();

  const handleClick = () =>{
   if(!session?.user){
    toast.error("Please login to buy credits")
   }

   togglePaymentDialog()

  }
  return (

<div className="overflow-hidden">
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
      <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
        Solo, agency or team? We’ve got you covered.
      </h2>
    </div>
    {/* End Title */}
    <div className="relative xl:w-10/12 xl:mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 lg:gap-8">
        <div>
          {/* Card */}
          <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800">
            <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-200">Professional</h3>
            <div className="text-sm text-gray-500 dark:text-neutral-500">Everything a small team needs.</div>
            <div className="mt-5">
              <span className="text-6xl font-bold text-gray-800 dark:text-neutral-200">Ksh. 1</span>
              <span className="text-lg font-bold text-gray-800 dark:text-neutral-200">.00</span>
              <span className="ms-3 text-gray-500 dark:text-neutral-500">Kes / 10 Credits</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm text-gray-500 dark:text-neutral-500">Credits Apply Until Used.</p>
              </div>
              <div className="flex justify-end">
                <button onClick={handleClick} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">Buy Credits</button>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Grid */}
      {/* SVG Element */}
      <div className="hidden md:block absolute top-0 end-0 translate-y-16 translate-x-16">
        <svg className="w-16 h-auto text-orange-500" width={121} height={135} viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth={10} strokeLinecap="round" />
          <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth={10} strokeLinecap="round" />
          <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth={10} strokeLinecap="round" />
        </svg>
      </div>
      {/* End SVG Element */}
      {/* SVG Element */}
      <div className="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
        <svg className="w-56 h-auto text-cyan-500" width={347} height={188} viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
        </svg>
      </div>
      {/* End SVG Element */}
    </div>
    <div className="mt-7 text-center">
      <p className="text-xs text-gray-400">
        Prices in Kes.
      </p>
    </div>
  </div>
</div>


  )
}

export default PricingSection2