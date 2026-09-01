import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Phone, Mail, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '../components/Button'
import { HeroComposition } from '../components/HeroComposition'
import { SectionHeading, SectionReveal } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { FAQ } from '../components/FAQ'
import { WorkModal } from '../components/WorkModal'
import { ContactForm } from '../components/ContactForm'
import { SEO } from '../components/SEO'
import {
  company,
  faqs,
  processSteps,
  services,
  stats,
  techStack,
  whyChoose,
  works,
} from '../data/content'
import { trackPhoneClick, trackEmailClick, trackWhatsAppClick, trackViewProjectClick } from '../utils/analytics'

export function Home() {
  const [activeWork, setActiveWork] = useState(null)

  const featuredWork = works.find((w) => w.id === 'sri-sai-clinic') || works[0]
  const otherWorks = works.filter((w) => w.id !== featuredWork.id).slice(0, 5)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  const handleOpenWorkModal = (work) => {
    trackViewProjectClick(work.name)
    setActiveWork(work)
  }

  return (
    <>
      <SEO
        title="LaunchWeb | Web Design, Software & Digital Solutions"
        description="LaunchWeb builds modern websites, custom software and digital solutions that help businesses establish a stronger digital presence and grow online."
        keywords="Web Design Company, Web Development Company, Website Development, Custom Software Development, Web Design Services, Software Development Services, Digital Solutions, Custom Web Applications, Responsive Web Design"
        canonicalUrl="https://launchweb.onrender.com/"
        schemaJson={faqSchema}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#F8FAFC]">
        {/* Subtle Background Glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.06),transparent_45%)]" />

        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4F46E5] shadow-xs"
            >
              <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
              Modern Digital Solutions Studio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[4.25rem] leading-[1.08]"
            >
              Digital Experiences <br />
              Built to Move Your <br />
              <span className="bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#2563EB] bg-clip-text text-transparent">
                Business Forward.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#475569]"
            >
              LaunchWeb designs and develops modern websites, custom software and digital solutions that help businesses look professional, work smarter and grow online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button to="/contact" size="lg" variant="primary">
                Start a Project
              </Button>
              <Button to="/works" size="lg" variant="secondary">
                View Our Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center gap-6 text-xs font-semibold text-[#475569] uppercase tracking-wider"
            >
              <span className="flex items-center gap-1.5 text-[#0F172A]">
                <Sparkles className="h-4 w-4 text-[#4F46E5]" />
                Web Design
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#0F172A]">
                <Layers className="h-4 w-4 text-[#2563EB]" />
                Custom Software
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#0F172A]">
                <Zap className="h-4 w-4 text-[#16A34A]" />
                Digital Solutions
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroComposition />
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="border-y border-[#E2E8F0] bg-white py-12">
        <div className="container-page">
          <h2 className="text-center text-xs font-bold uppercase tracking-widest text-[#475569] mb-8">
            Built for businesses that want to grow digitally
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] shadow-2xs"
              >
                <p className="font-display text-3xl font-extrabold text-[#0F172A]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold text-[#475569]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Everything You Need to Build Your Digital Presence."
              description="From high-converting business websites to custom web applications built around your actual operations."
            />
            <Button to="/services" variant="secondary">
              All Services
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <SectionReveal key={service.id} delay={index * 0.05} className={service.span}>
                <ServiceCard service={service} featured={service.span.includes('col-span-2')} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY LAUNCHWEB */}
      <section className="border-y border-[#E2E8F0] bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose LaunchWeb"
            title="More Than a Website. A Digital Foundation for Your Business."
            description="We partner with local businesses, startups, and growing enterprises to craft technology solutions built for longevity."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <SectionReveal
                key={item.title}
                delay={index * 0.05}
                className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 space-y-4 hover:border-[#4F46E5]/50 transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#4F46E5]">
                    {item.number}
                  </span>
                  <ShieldCheck className="h-5 w-5 text-[#16A34A]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {item.text}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Process"
            title="From Idea to Launch."
            description="A clear, transparent 5-step engineering process designed to keep your project on schedule and built with precision."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, idx) => (
              <SectionReveal
                key={step.step}
                delay={idx * 0.06}
                className="relative flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 space-y-4 shadow-xs"
              >
                <div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/30 font-mono text-xs font-bold text-[#4F46E5]">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                    {step.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SELECTED WORK */}
      <section className="border-y border-[#E2E8F0] bg-white py-20 sm:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Work Built for Real Business."
              description="Explore live websites, custom healthcare platforms, learning management tools, and business web applications shipped by LaunchWeb."
            />
            <Button to="/works" variant="secondary">
              View All Projects →
            </Button>
          </div>

          {/* Featured Project */}
          <div className="mt-12">
            <button
              type="button"
              onClick={() => handleOpenWorkModal(featuredWork)}
              className="group relative w-full overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] text-left transition-all duration-300 hover:border-[#4F46E5] hover:shadow-xl grid md:grid-cols-12 shadow-xs"
            >
              <div className="md:col-span-7 relative h-72 sm:h-96 overflow-hidden bg-white">
                <img
                  src={featuredWork.image}
                  alt="Sri Sai Clinic business website designed by LaunchWeb"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width="1200"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#F8FAFC]" />
                <span className="absolute top-4 left-4 rounded-full bg-[#4F46E5] px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  ★ Featured Live Project
                </span>
              </div>

              <div className="md:col-span-5 p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#4F46E5]">
                      {featuredWork.category} • {featuredWork.type}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[#475569] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0F172A]" />
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-extrabold text-[#0F172A]">
                    {featuredWork.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                    {featuredWork.summary}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
                  <div className="flex flex-wrap gap-2">
                    {featuredWork.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white border border-[#E2E8F0] px-3 py-1 text-[11px] font-medium text-[#475569]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-[#4F46E5]">
                    Click to view project info &amp; live link →
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Grid of Other Projects */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherWorks.map((work) => (
              <button
                key={work.id}
                type="button"
                onClick={() => handleOpenWorkModal(work)}
                className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/60 hover:shadow-xl shadow-xs"
              >
                <div className="relative h-44 overflow-hidden bg-white">
                  <img
                    src={work.image}
                    alt={`${work.name} project developed by LaunchWeb`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2563EB]">
                      {work.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#475569] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0F172A]">
                    {work.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#475569] line-clamp-2">
                    {work.summary}
                  </p>
                  <p className="pt-2 text-xs font-semibold text-[#4F46E5]">
                    View Project Info →
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGIES */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="container-page">
          <SectionHeading
            eyebrow="Technologies"
            title="Modern, Scalable Technologies."
            description="We build using fast, maintainable frameworks trusted by modern SaaS leaders and enterprise systems."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-5 space-y-2 hover:border-[#4F46E5]/50 transition-colors shadow-xs"
              >
                <h3 className="font-display text-lg font-bold text-[#0F172A]">
                  {tech.name}
                </h3>
                <p className="text-xs text-[#475569]">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ABOUT LAUNCHWEB */}
      <section className="border-t border-[#E2E8F0] bg-white py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="About LaunchWeb"
              title="Technology That Solves Real Business Problems."
              description="LaunchWeb was founded to bridge the gap between creative UI design and robust software engineering. We believe every business deserves a web presence that builds trust from the first second."
            />
            <p className="text-sm leading-relaxed text-[#475569]">
              Whether you are a local clinic, an e-commerce shop, or a growing startup needing custom portal software, we write clean, maintainable code designed to perform under real traffic.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button to="/about" variant="secondary">
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 space-y-6 shadow-xs">
            <h3 className="font-display text-xl font-bold text-[#0F172A]">
              Core Principles
            </h3>
            <ul className="space-y-4 text-sm text-[#475569]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#4F46E5] shrink-0 mt-0.5" />
                <span>Zero template bloat — clean bespoke React builds.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Mobile-first responsive UX tested across all viewports.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
                <span>Direct collaboration with engineers, no middle management.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. HIGH-IMPACT CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="container-page relative">
          <div className="rounded-3xl border border-[#E2E8F0] bg-gradient-to-r from-[#4F46E5]/10 via-white to-[#2563EB]/10 p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-xl shadow-slate-900/5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
              Ready to Upgrade Your Digital Presence?
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0F172A]">
              Let's Build Something
            </h2>

            <p className="text-base sm:text-lg text-[#475569] max-w-xl mx-auto leading-relaxed">
              Whether you need a professional website, custom software or a digital solution for your business, let's turn your idea into something real.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button to="/contact" size="lg" variant="primary">
                Start a Project →
              </Button>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('cta_banner')}
                className="inline-flex items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-7 py-3.5 text-base font-semibold text-[#16A34A] hover:bg-[#F8FAFC] shadow-xs transition-colors"
              >
                Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#E2E8F0]">
        <div className="container-page grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Let's Build Your Online Presence"
              description="Whether starting a new project or refreshing an existing business website, we are here to help."
            />

            <div className="space-y-6 pt-4 text-sm">
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-2 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                  Phone / Call
                </p>
                {company.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    onClick={() => trackPhoneClick(phone.label)}
                    className="flex items-center gap-2 font-display text-lg font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#2563EB]" />
                    {phone.label}
                  </a>
                ))}
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-2 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  onClick={() => trackEmailClick(company.email)}
                  className="flex items-center gap-2 font-display text-lg font-bold text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#4F46E5]" />
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm compact />
          </div>
        </div>
      </section>

      <FAQ />

      {/* Project Case Study Modal */}
      <WorkModal work={activeWork} onClose={() => setActiveWork(null)} />
    </>
  )
}
