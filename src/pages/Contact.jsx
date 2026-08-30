import { Mail, Phone, MessageSquare, MapPin, Clock, Instagram, Linkedin } from 'lucide-react'
import { SectionHeading } from '../components/Section'
import { ContactForm } from '../components/ContactForm'
import { SEO } from '../components/SEO'
import { company } from '../data/content'
import { trackEmailClick, trackPhoneClick, trackWhatsAppClick } from '../utils/analytics'

export function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact LunchWeb',
    description: 'Get in touch with LunchWeb for custom web design, software development, and digital solutions.',
    url: 'https://lunchweb.onrender.com/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'LunchWeb',
      telephone: '+919585523658',
      email: 'launchwebservice@gmail.com',
      url: 'https://lunchweb.onrender.com/',
      sameAs: [
        company.instagram,
        company.linkedin,
        'https://lunchweb.onrender.com/'
      ]
    },
  }

  return (
    <>
      <SEO
        title="Contact LunchWeb | Start Your Web &amp; Software Project"
        description="Contact LunchWeb for web design, custom software development, or digital solution inquiries. Reach us by project form, phone, LinkedIn, Instagram or instant WhatsApp."
        keywords="Contact LunchWeb, Web design inquiry, Hire web developers, Software development contact, Get project quote"
        canonicalUrl="https://lunchweb.onrender.com/contact"
        schemaJson={contactSchema}
      />

      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#F8FAFC] text-[#0F172A] min-h-screen">
        <div className="container-page">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4F46E5] shadow-xs">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
              Let's Build Something Great Together.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#475569]">
              Have a project question or ready to start? Reach out to LunchWeb through our enquiry form or direct channels below.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 space-y-6 shadow-xs">
                <h2 className="font-display text-xl font-bold text-[#0F172A]">
                  Direct Contact Channels
                </h2>

                <div className="space-y-6 text-sm">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">
                      Email Support
                    </p>
                    <a
                      href={`mailto:${company.email}`}
                      onClick={() => trackEmailClick(company.email)}
                      className="flex items-center gap-2.5 font-display text-lg font-bold text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                    >
                      <Mail className="h-5 w-5 text-[#4F46E5]" />
                      {company.email}
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">
                      Phone &amp; Call Lines
                    </p>
                    <div className="space-y-2">
                      {company.phones.map((phone) => (
                        <a
                          key={phone.href}
                          href={phone.href}
                          onClick={() => trackPhoneClick(phone.label)}
                          className="flex items-center gap-2.5 font-display text-lg font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                        >
                          <Phone className="h-5 w-5 text-[#2563EB]" />
                          {phone.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {company.instagram && (
                    <div className="pt-4 border-t border-[#E2E8F0]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">
                        Instagram Profile
                      </p>
                      <a
                        href={company.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 font-display text-base font-bold text-[#E1306C] hover:underline"
                      >
                        <Instagram className="h-5 w-5 text-[#E1306C]" />
                        <span>{company.instagramHandle}</span>
                      </a>
                    </div>
                  )}

                  {company.linkedin && (
                    <div className="pt-4 border-t border-[#E2E8F0]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">
                        LinkedIn Page
                      </p>
                      <a
                        href={company.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 font-display text-base font-bold text-[#0A66C2] hover:underline"
                      >
                        <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                        <span>{company.linkedinHandle}</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">
                      Instant Messaging
                    </p>
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contact_page')}
                      className="inline-flex items-center gap-2.5 font-display text-base font-bold text-[#16A34A] hover:underline"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Chat on WhatsApp →
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-1">
                      Working Model
                    </p>
                    <p className="flex items-center gap-2 text-sm text-[#475569]">
                      <MapPin className="h-4 w-4 text-[#4F46E5]" />
                      {company.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 flex items-center gap-4 shadow-xs">
                <Clock className="h-8 w-8 text-[#4F46E5] shrink-0" />
                <div>
                  <h3 className="font-display text-sm font-bold text-[#0F172A]">
                    Quick Turnaround
                  </h3>
                  <p className="text-xs text-[#475569] mt-1">
                    All enquiries receive a response and preliminary project estimate within 2 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
