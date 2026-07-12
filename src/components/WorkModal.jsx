import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { Button } from './Button'

export function WorkModal({ work, onClose }) {
  return (
    <AnimatePresence>
      {work ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy/45 backdrop-blur-sm"
            aria-label="Close project preview"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)]"
          >
            <div className="h-36 brand-gradient relative">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,19,43,0.35))]" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                {work.type} · {work.category}
              </p>
              <h3 id="work-modal-title" className="mt-2 font-display text-3xl font-bold">
                {work.name}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">{work.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {work.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-slate px-3 py-1 text-xs font-medium text-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                {work.url ? (
                  <Button href={work.url} className="gap-2">
                    View live site
                    <ExternalLink size={16} />
                  </Button>
                ) : null}
                <Button to="/contact" variant="secondary">
                  Discuss a similar project
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
