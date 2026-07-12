import { motion } from 'framer-motion'

export function SectionReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <SectionReveal
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue">
          <span className="h-0.5 w-5 rounded-full brand-gradient" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-navy">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </SectionReveal>
  )
}
