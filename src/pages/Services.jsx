import { CheckCircle2, ShieldCheck, Zap, Code2, Lock } from 'lucide-react'
import { SectionHeading, SectionReveal } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { FAQ } from '../components/FAQ'
import { Button } from '../components/Button'
import { SEO } from '../components/SEO'
import { services } from '../data/content'

export function Services() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design & Development Services',
    provider: {
      '@type': 'ProfessionalService',
      name: 'LunchWeb',
      url: 'https://lunchweb.onrender.com/',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'LunchWeb Services Catalog',
      itemListElement: services.map((s, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
        },
        position: idx + 1,
      })),
    },
  }

  return (
    <>
      <SEO
        title="Web Design &amp; Development Services | LunchWeb"
        description="LunchWeb designs and develops modern, responsive websites, custom software, and digital solutions for businesses that want a stronger digital presence."
        keywords="Web Design Services, Custom Software Development, Business Website Development, Web Application Development, UI/UX Design, E-Commerce Solutions"
        canonicalUrl="https://lunchweb.onrender.com/services"
        schemaJson={serviceSchema}
      />

      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#F8FAFC] text-[#0F172A] min-h-screen">
        <div className="container-page">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4F46E5] shadow-xs">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
              Professional Web Design &amp; Software Development
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#475569]">
              We combine thoughtful UI design, robust software engineering, and search engine readiness into every digital product we deliver for startups, local businesses, and growing enterprises.
            </p>
          </div>

          {/* Service Cards Bento Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <SectionReveal key={service.id} delay={index * 0.05} className={service.span}>
                <ServiceCard service={service} featured={service.span.includes('col-span-2')} />
              </SectionReveal>
            ))}
          </div>

          {/* Quality Guarantee Standards Bar */}
          <div className="mt-16 rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-10 shadow-xs">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">
                Included with Every Service
              </h2>
              <p className="text-xs text-[#475569]">
                Enterprise standards built into every line of code we write
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-2">
                <div className="flex items-center gap-2 text-[#4F46E5]">
                  <Zap className="h-5 w-5" />
                  <h3 className="font-display text-sm font-bold text-[#0F172A]">90+ Performance</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Optimized Core Web Vitals and lightning-fast page loading.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-2">
                <div className="flex items-center gap-2 text-[#2563EB]">
                  <ShieldCheck className="h-5 w-5" />
                  <h3 className="font-display text-sm font-bold text-[#0F172A]">SEO Foundation</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Clean semantic HTML5 hierarchy, schema markup, and metadata.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-2">
                <div className="flex items-center gap-2 text-[#16A34A]">
                  <Code2 className="h-5 w-5" />
                  <h3 className="font-display text-sm font-bold text-[#0F172A]">Clean React Code</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Maintainable, zero-bloat codebases built for long-term growth.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-2">
                <div className="flex items-center gap-2 text-[#7C3AED]">
                  <Lock className="h-5 w-5" />
                  <h3 className="font-display text-sm font-bold text-[#0F172A]">SSL &amp; Security</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  HTTPS data encryption and production-grade security standards.
                </p>
              </div>
            </div>
          </div>

          {/* Custom Solution Callout */}
          <div className="mt-12 rounded-3xl border border-[#E2E8F0] bg-gradient-to-r from-[#4F46E5]/10 via-white to-[#2563EB]/10 p-8 sm:p-12 text-center space-y-4 shadow-xl shadow-slate-900/5">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Need a Custom Digital Solution?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto leading-relaxed">
              If your business requires a unique web workflow, specific database integration, or API backend, we're ready to engineer it.
            </p>
            <div className="pt-2">
              <Button to="/contact">
                Discuss Your Scope
              </Button>
            </div>
          </div>
        </div>

        <FAQ />
      </div>
    </>
  )
}
