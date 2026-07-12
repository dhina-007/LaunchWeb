import { SectionHeading, SectionReveal } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { Button } from '../components/Button'
import { services } from '../data/content'

export function Services() {
  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Premium website services for growing businesses."
          description="Clear offers, modern delivery, and personal attention — whether you need a first site, a redesign, or a custom application."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <SectionReveal key={service.id} delay={index * 0.04} className={service.span}>
              <ServiceCard
                service={service}
                index={index}
                featured={service.span.includes('col-span-2')}
              />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-16 flex flex-col gap-4 rounded-3xl border border-line bg-slate p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold">Ready to start?</h3>
            <p className="mt-2 max-w-md text-sm text-muted">
              Tell us about your business and we’ll recommend a clear first phase.
            </p>
          </div>
          <Button to="/contact">Start Project</Button>
        </SectionReveal>
      </div>
    </div>
  )
}
