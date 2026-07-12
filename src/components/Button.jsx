import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary:
    'brand-gradient text-white shadow-[0_14px_34px_rgba(46,91,255,0.28)] hover:shadow-[0_18px_40px_rgba(46,91,255,0.34)]',
  secondary:
    'bg-white text-navy border border-line hover:border-blue/40 hover:text-blue',
  ghost: 'bg-transparent text-blue hover:text-purple px-2',
}

export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  disabled = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-xl text-sm font-semibold tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: disabled ? undefined : { y: -2 },
    whileTap: disabled ? undefined : { y: 0 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}
