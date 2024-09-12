import React from 'react'

function FAQSection2() {
    const faqs = [
        {
            question: "Can I cancel at any time?",
            answer: "Yes, you can cancel anytime. No questions are asked, but we would highly appreciate it if you could provide us with some feedback."
        },
        {
            question: "Do you offer a free trial?",
            answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to sign up."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and Stripe. You can also choose to be billed monthly or annually, depending on your preference."
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely. We prioritize data security and use industry-standard encryption to protect your information. We also perform regular security audits to ensure the highest level of protection."
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, we provide 24/7 customer support via chat and email. Our team is always ready to assist you with any issues or questions you may have."
        }
    ];
    
  return (
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Title */}
  <div className="max-w-2xl mx-auto text-center mb-6 lg:mb-10">
    <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-neutral-200">
      Frequently Asked Questions
    </h2>
  </div>
  {/* End Title */}
  <div className="max-w-5xl mx-auto">
    {/* Grid */}
    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        {
            faqs.map((faq, index)=>(
                <div key={index} className="py-8">
                <div className="flex gap-x-5">
                  <svg className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={10} /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                  <div className="grow">
                    <h3 className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      {faq.question}?
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
        }

    </div>
    {/* End Grid */}
  </div>
</div>

  )
}

export default FAQSection2