import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Code2, ExternalLink } from 'lucide-react'
import { Button } from './Button'

export function WorkModal({ work, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (work) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [work, onClose])

  return (
    <AnimatePresence>
      {work && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container optimized for mobile height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', duration: 0.35 }}
            className="relative z-10 w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-3xl border border-[#E2E8F0] bg-white shadow-2xl my-auto touch-pan-y"
          >
            {/* Header Image Frame */}
            <div className="relative h-40 sm:h-56 w-full overflow-hidden bg-[#F8FAFC]">
              <img
                src={work.image}
                alt={work.imageAlt || work.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white/90 text-[#0F172A] backdrop-blur-md shadow-md active:scale-95 transition-transform"
                aria-label="Close project info"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 sm:left-6 sm:right-6 flex items-end justify-between gap-3">
                <div>
                  <span className="rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 px-3 py-0.5 text-[10px] font-bold text-[#4F46E5]">
                    {work.category} • {work.type}
                  </span>
                  <h3 className="mt-1 font-display text-xl sm:text-3xl font-extrabold text-[#0F172A]">
                    {work.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-5 sm:p-7 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                  Project Summary
                </h4>
                <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-[#475569]">
                  {work.summary}
                </p>
              </div>

              {/* Challenge & Solution */}
              {work.challenge && (
                <div className="space-y-3.5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                      The Challenge
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {work.challenge}
                    </p>
                  </div>
                  {work.solution && (
                    <div className="pt-3 border-t border-[#E2E8F0]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#16A34A]">
                        Our Solution
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {work.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tech Stack Badges */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-[#4F46E5]" />
                  Technologies &amp; Architecture
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {(work.tech || work.focus).map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#0F172A]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Optimized Action Buttons */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {work.url ? (
                  <Button href={work.url} variant="primary" className="w-full sm:w-auto">
                    Visit Live Project
                  </Button>
                ) : (
                  <span className="text-xs font-mono text-[#475569] text-center sm:text-left">
                    Private Client Software
                  </span>
                )}
                <Button variant="ghost" onClick={onClose} className="w-full sm:w-auto">
                  Close Info
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
