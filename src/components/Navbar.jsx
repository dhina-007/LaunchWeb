import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './Logo'
import { Button } from './Button'
import { navLinks } from '../data/content'
import { useScrolled } from '../hooks/useScroll'

export function Navbar() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/85 backdrop-blur-xl border-b border-line/80 shadow-[0_8px_30px_rgba(11,19,43,0.04)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-[76px] items-center justify-between gap-4">
        <Logo size="sm" />

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors ${
                  isActive ? 'text-navy' : 'text-muted hover:text-navy'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 brand-gradient rounded-full"
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact">Start Project</Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-line bg-white"
          >
            <div className="container-page flex flex-col gap-2 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 font-display text-2xl font-semibold ${
                      isActive ? 'text-navy bg-slate' : 'text-navy/80'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3">
                <Button to="/contact" className="w-full">
                  Start Project
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
