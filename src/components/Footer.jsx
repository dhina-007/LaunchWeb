import { Link } from 'react-router-dom'
import { Mail, Phone, MessageSquare, Shield, Instagram, Linkedin } from 'lucide-react'
import { Logo } from './Logo'
import { company, navLinks } from '../data/content'
import { trackEmailClick, trackPhoneClick, trackWhatsAppClick } from '../utils/analytics'

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white text-[#0F172A] pt-16 pb-12">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-[#E2E8F0]">
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-sm leading-relaxed text-[#475569] max-w-sm">
              LaunchWeb is a modern technology studio building websites, custom software, and digital solutions that help businesses build credibility and grow.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[#16A34A] font-semibold">
              <Shield className="h-4 w-4" />
              <span>100% Production-Grade Code &amp; Data Security</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#475569] hover:text-[#4F46E5] transition-colors inline-flex items-center gap-1 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Direct Contact &amp; Social
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  onClick={() => trackEmailClick(company.email)}
                  className="text-[#475569] hover:text-[#4F46E5] transition-colors flex items-center gap-2 font-medium"
                >
                  <Mail className="h-4 w-4 text-[#4F46E5]" />
                  <span>{company.email}</span>
                </a>
              </li>
              {company.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    onClick={() => trackPhoneClick(phone.label)}
                    className="text-[#475569] hover:text-[#2563EB] transition-colors flex items-center gap-2 font-medium"
                  >
                    <Phone className="h-4 w-4 text-[#2563EB]" />
                    <span>{phone.label}</span>
                  </a>
                </li>
              ))}
              {company.instagram && (
                <li>
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#475569] hover:text-[#E1306C] transition-colors flex items-center gap-2 font-medium"
                  >
                    <Instagram className="h-4 w-4 text-[#E1306C]" />
                    <span>{company.instagramHandle || 'Instagram'}</span>
                  </a>
                </li>
              )}
              {company.linkedin && (
                <li>
                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#475569] hover:text-[#0A66C2] transition-colors flex items-center gap-2 font-medium"
                  >
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    <span>{company.linkedinHandle || 'LinkedIn'}</span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer')}
                  className="text-[#16A34A] hover:underline transition-colors flex items-center gap-2 pt-1 text-xs font-bold"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Instant WhatsApp Connect →</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          <p>© 2026 LaunchWeb. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Web Design</span>
            <span>•</span>
            <span>Custom Software</span>
            <span>•</span>
            <span>Digital Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
