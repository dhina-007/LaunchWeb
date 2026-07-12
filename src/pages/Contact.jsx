import { Mail, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from '../components/Section'
import { ContactForm } from '../components/ContactForm'
import { company } from '../data/content'

export function Contact() {
  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Your Online Presence"
            description="Whether you're starting a new business or refreshing an existing one, we'd love to help bring your ideas to life."
          />

          <div className="mt-10 space-y-6">
            <div className="rounded-3xl border border-line bg-slate p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                <Phone size={14} /> Call Us
              </p>
              <div className="mt-3 space-y-1">
                {company.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="block font-display text-2xl font-semibold hover:text-blue"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-white p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                <Mail size={14} /> Email
              </p>
              <a
                href={`mailto:${company.email}`}
                className="mt-3 inline-block font-display text-xl font-semibold hover:text-blue"
              >
                {company.email}
              </a>
            </div>

            <div className="rounded-3xl border border-line bg-white p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                <MapPin size={14} /> Location
              </p>
              <p className="mt-3 text-muted">Remote-first</p>
              <p className="text-muted">Serving clients worldwide</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
