import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './Logo'
import { Button } from './Button'
import { company, navLinks } from '../data/content'
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
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Logo size="md" />

        <nav className="hidden md:flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/80 px-4 py-1.5 backdrop-blur-md shadow-xs">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive ? 'text-[#0F172A]' : 'text-[#475569] hover:text-[#0F172A]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill-light"
                      className="absolute inset-0 z-[-1] rounded-full bg-[#F1F5F9] border border-[#CBD5E1]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button to="/contact" size="sm" variant="primary">
            Let's Talk
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] transition-colors hover:border-[#4F46E5]"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-b border-[#E2E8F0] bg-white"
          >
            <div className="container-page flex flex-col gap-2 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 font-display text-lg font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1]'
                        : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </NavLink>
              ))}
              <div className="pt-4 border-t border-[#E2E8F0] mt-2 flex flex-col gap-3">
                <Button to="/contact" className="w-full justify-center">
                  Let's Talk
                </Button>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-xs font-semibold text-[#16A34A] hover:underline"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
