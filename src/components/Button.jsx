import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = true,
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-xl',
    md: 'px-5 py-3 text-sm font-semibold rounded-xl sm:px-6',
    lg: 'px-7 py-3.5 text-base font-semibold rounded-2xl sm:px-8 sm:py-4',
  }

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:opacity-95 active:scale-[0.98]',
    secondary:
      'bg-white text-[#0F172A] border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:bg-[#F8FAFC] active:scale-[0.98]',
    outline:
      'bg-transparent text-[#0F172A] border border-[#CBD5E1] hover:border-[#4F46E5] hover:text-[#4F46E5]',
    ghost:
      'bg-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]',
  }

  const combinedClass = `group inline-flex items-center justify-center gap-2 font-sans tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  )
}
