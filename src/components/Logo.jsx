import { Link } from 'react-router-dom'

export function Logo({ size = 'md', className = '' }) {
  const isSm = size === 'sm'

  const imgHeight = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-14 lg:h-16',
    lg: 'h-16 sm:h-20',
  }

  const textSize = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
  }

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 font-display font-bold tracking-tight text-[#0F172A] transition-opacity hover:opacity-90 ${className}`}
    >
      <img
        src="/logo.png"
        alt="Lunch Web Logo"
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${imgHeight[size] || imgHeight.md}`}
      />
      
      <div className="flex flex-col">
        <span className={`font-display font-extrabold text-[#0F172A] tracking-tight leading-none ${textSize[size] || textSize.md}`}>
          Lunch <span className="bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#2563EB] bg-clip-text text-transparent">Web</span>
        </span>
      </div>
    </Link>
  )
}
