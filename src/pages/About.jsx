import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../components/Section'
import { Button } from '../components/Button'
import { SEO } from '../components/SEO'
import { techStack, whyChoose } from '../data/content'

export function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About LunchWeb',
    description: 'LunchWeb is a digital solutions studio bridging modern UI design and full-stack software engineering.',
    url: 'https://lunchweb.onrender.com/about',
    publisher: {
      '@type': 'Organization',
      name: 'LunchWeb',
      url: 'https://lunchweb.onrender.com/',
      logo: 'https://lunchweb.onrender.com/logo.png',
    },
  }

  return (
    <>
      <SEO
        title="About LunchWeb | Technology &amp; Digital Solutions Studio"
        description="Learn how LunchWeb bridges modern UI design and custom software engineering to build fast, responsive digital foundations for growing businesses."
        keywords="About LunchWeb, Web design studio, Custom software studio, Tech solutions partner, Web engineering"
        canonicalUrl="https://lunchweb.onrender.com/about"
        schemaJson={aboutSchema}
      />

      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#F8FAFC] text-[#0F172A] min-h-screen">
        <div className="container-page space-y-20">
          {/* Main Header */}
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4F46E5] shadow-xs">
              About LunchWeb
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
              Technology That Solves Real Business Problems.
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              LunchWeb designs and develops modern websites, custom software and digital solutions that help businesses look professional, work smarter and grow online.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid gap-8 md:grid-cols-12 items-center border-y border-[#E2E8F0] py-16">
            <div className="md:col-span-6 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Built on Technical Craft &amp; Business Clarity
              </h2>
              <p className="text-sm leading-relaxed text-[#475569]">
                We avoid generic template shortcuts and bloated website builders. Every product crafted by LunchWeb is built with clean HTML, modern JavaScript/React, and enterprise Java Spring Boot backend infrastructure where required.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                Our approach prioritizes high speed, crisp mobile responsiveness, SEO foundations, and bulletproof accessibility across all devices.
              </p>
            </div>

            <div className="md:col-span-6 rounded-3xl border border-[#E2E8F0] bg-white p-8 space-y-6 shadow-xs">
              <h3 className="font-display text-xl font-bold text-[#0F172A]">
                What Drives Us
              </h3>
              <div className="space-y-4 text-sm text-[#475569]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#4F46E5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">Business Goal Orientation:</strong> Building features that generate tangible patient, client, or sales leads.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">Engineering Integrity:</strong> Modular codebases with clear documentation and long-term scalability.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">Transparent Collaboration:</strong> Direct communication with the developers executing your project.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div>
            <SectionHeading
              eyebrow="Our Principles"
              title="A Solid Foundation for Long-Term Growth"
              description="Four foundational principles guiding every line of code and UI component we deliver."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-white p-8 space-y-3 shadow-xs"
                >
                  <span className="font-mono text-sm font-bold text-[#4F46E5]">{item.number}</span>
                  <h3 className="font-display text-xl font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#475569]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Grid */}
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-12 space-y-8 shadow-xs">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">
                Technologies We Master
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
                Only standard, industry-proven stacks implemented with high performance targets.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <h3 className="font-display text-base font-bold text-[#0F172A]">{tech.name}</h3>
                  <p className="text-xs text-[#475569] mt-1">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-xl mx-auto space-y-6">
            <h2 className="font-display text-3xl font-extrabold text-[#0F172A]">
              Ready to Work Together?
            </h2>
            <p className="text-sm text-[#475569]">
              Let's discuss how LunchWeb can design and engineer your next digital solution.
            </p>
            <Button to="/contact" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
