import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { company } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-slate">
      <div className="h-1 brand-gradient" />
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo size="sm" />
          <p className="mt-4 text-xs font-semibold tracking-[0.22em] uppercase text-muted">
            {company.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Building modern websites for startups, businesses, and entrepreneurs.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/services" className="hover:text-blue transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/works" className="hover:text-blue transition-colors">
                Our Works
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-5 text-sm">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted flex items-center gap-2">
              <Phone size={14} /> Phone
            </h3>
            <ul className="mt-3 space-y-1.5">
              {company.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className="font-medium hover:text-blue transition-colors">
                    {phone.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted flex items-center gap-2">
              <Mail size={14} /> Email
            </h3>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 inline-block font-medium hover:text-blue transition-colors"
            >
              {company.email}
            </a>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted flex items-center gap-2">
              <MapPin size={14} /> Location
            </h3>
            <p className="mt-3 text-muted">{company.location}</p>
          </div>
        </div>
      </div>
      <div className="container-page border-t border-line py-5 text-sm text-muted">
        © 2026 Launch Web. All Rights Reserved.
      </div>
    </footer>
  )
}
