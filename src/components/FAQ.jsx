import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'
import { SectionHeading } from './Section'

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-slate py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered clearly."
          description="Straightforward answers for teams planning their first premium website — or a thoughtful redesign."
        />
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-line bg-white overflow-hidden"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold text-navy">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
