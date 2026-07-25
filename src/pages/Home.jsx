import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components/Button'
import { HeroComposition } from '../components/HeroComposition'
import { SectionHeading, SectionReveal } from '../components/Section'
import { Icon } from '../components/Icon'
import { ServiceCard } from '../components/ServiceCard'
import { FAQ } from '../components/FAQ'
import { WorkModal } from '../components/WorkModal'
import { ContactForm } from '../components/ContactForm'
import {
  company,
  expectations,
  processSteps,
  services,
  techStack,
  whyChoose,
  works,
} from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export function Home() {
  const processRef = useRef(null)
  const [activeWork, setActiveWork] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        opacity: 0,
        y: 24,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 75%',
        },
      })
    }, processRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,210,255,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(122,54,255,0.1),transparent_40%)]" />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-navy shadow-sm backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full brand-gradient" />
              Premium Digital Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 max-w-[12ch] text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.5rem]"
            >
              Launch Websites
              <br />
              That Help Your
              <br />
              Business <span className="gradient-text">Grow</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg"
            >
              Launch Web is a modern web design and development studio creating beautiful,
              fast, and conversion-focused websites for startups, businesses, and entrepreneurs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button to="/contact">Start Your Project</Button>
              <Button to="/services" variant="secondary">
                Explore Our Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Built with
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-navy/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroComposition />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="border-y border-line bg-slate py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Launch Web"
            description="Every business deserves a website that is beautiful, fast, and built to perform."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <SectionReveal
                key={item.title}
                delay={index * 0.04}
                className={`rounded-3xl border border-line bg-white p-6 sm:p-7 shadow-[var(--shadow-soft)] ${
                  index % 2 === 1 ? 'md:translate-y-6' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 font-display text-sm font-bold text-blue/70">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="What we design and build"
              description="From first websites to custom applications — crafted with modern tools and careful attention."
            />
            <Button to="/services" variant="secondary">
              View all services
            </Button>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <SectionReveal key={service.id} delay={index * 0.03} className={service.span}>
                <ServiceCard
                  service={service}
                  featured={service.span.includes('col-span-2')}
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="border-y border-line bg-slate py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Work"
            title="Selected Live Projects"
            description="Real production work — portfolios, landing pages, an LMS platform, and business apps built with modern stacks and careful UX."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <button
                key={work.id}
                type="button"
                onClick={() => setActiveWork(work)}
                className="overflow-hidden rounded-3xl border border-line bg-white text-left transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative h-36 overflow-hidden bg-slate">
                  <img
                    src={work.image}
                    alt={work.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-slate px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue">
                      {work.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{work.name}</h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    {work.type}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{work.summary}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/works" variant="secondary">
              Explore our works
            </Button>
          </div>
        </div>
        <WorkModal work={activeWork} onClose={() => setActiveWork(null)} />
      </section>

      {/* PROCESS */}
      <section ref={processRef} className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Process"
            title="Our Process"
            description="A clear path from first conversation to launch — and support after you go live."
          />
          <div className="mt-12 relative">
            <div className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-line hidden md:block" />
            <div className="grid gap-4 md:gap-0">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="process-step relative grid gap-3 rounded-2xl border border-line bg-white p-5 md:grid-cols-[5rem_1fr] md:border-0 md:bg-transparent md:rounded-none md:py-5"
                >
                  <div className="flex items-center gap-3 md:block">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full brand-gradient text-xs font-bold text-white shadow-sm">
                      {step.step}
                    </span>
                  </div>
                  <div className="md:border-b md:border-line md:pb-5">
                    <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPECTATIONS */}
      <section className="border-y border-line bg-slate py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What You Can Expect"
            title="Trust built through craft — not fake claims."
            description="As a newly established agency, we earn confidence with transparent process, modern technology, and careful delivery."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expectations.map((item, index) => (
              <SectionReveal
                key={item.title}
                delay={index * 0.05}
                className={`rounded-3xl border border-line bg-white p-6 ${
                  index === 0 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate text-blue">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CONTACT TEASER */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's Build Your Online Presence"
              description="Whether you're starting a new business or refreshing an existing one, we'd love to help bring your ideas to life."
            />
            <div className="mt-8 space-y-5 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Call Us
                </p>
                <div className="mt-2 space-y-1">
                  {company.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block font-display text-xl font-semibold hover:text-blue"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 inline-block font-display text-xl font-semibold hover:text-blue"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Location
                </p>
                <p className="mt-2 text-muted">{company.location}</p>
              </div>
              <Link to="/contact" className="inline-flex text-sm font-semibold text-blue">
                Open full contact page →
              </Link>
            </div>
          </div>
          <ContactForm compact />
        </div>
      </section>
    </>
  )
}
