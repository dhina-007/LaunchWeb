import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'
import { SectionHeading } from './Section'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 sm:py-28 border-t border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="Clear answers about our development process, timelines, technology stack, and ongoing support."
        />

        <div className="mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left font-display text-lg font-semibold text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#475569] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#4F46E5]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-[#475569] border-t border-[#E2E8F0] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
