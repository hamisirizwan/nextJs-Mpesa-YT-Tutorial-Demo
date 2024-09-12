import React from 'react'

function ContactSection1() {
  return (

<div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
  <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
    <h2 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
      Contacts
    </h2>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
    <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contacts Image" />
    </div>
    {/* End Col */}
    <div className="space-y-8 lg:space-y-16">
      <div>
        <h3 className="mb-5 font-semibold text-black dark:text-white">
          Our address
        </h3>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="flex gap-4">
            <svg className="shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx={12} cy={10} r={3} /></svg>
            <div className="grow">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                United Kingdom
              </p>
              <address className="mt-1 text-black not-italic dark:text-white">
                300 Bath Street, Tay House<br />
                Glasgow G2 4JR
              </address>
            </div>
          </div>
        </div>
        {/* End Grid */}
      </div>
      <div>
        <h3 className="mb-5 font-semibold text-black dark:text-white">
          Our contacts
        </h3>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="flex gap-4">
            <svg className="shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
            <div className="grow">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Email us
              </p>
              <p>
                <a className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="mailto:example@site.so">
                  hello@example.so
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <svg className="shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            <div className="grow">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Call us
              </p>
              <p>
                <a className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="mailto:example@site.so">
                  +44 222 777-000
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* End Grid */}
      </div>
    </div>
    {/* End Col */}
  </div>
</div>

  )
}

export default ContactSection1