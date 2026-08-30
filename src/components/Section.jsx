import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div className={`max-w-2xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#4F46E5] shadow-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#475569]">
          {description}
        </p>
      )}
    </div>
  )
}

export function SectionReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
