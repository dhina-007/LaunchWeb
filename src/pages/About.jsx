import { SectionHeading, SectionReveal } from '../components/Section'
import { Button } from '../components/Button'
import { values } from '../data/content'

export function About() {
  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="About Launch Web"
          description="A newly established creative web agency focused on building premium digital experiences for startups, businesses, and entrepreneurs."
        />

        <SectionReveal className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">
          Although we're a new company, we combine modern technologies, thoughtful design, and
          clean development to deliver websites that help businesses grow online.
        </SectionReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <SectionReveal className="rounded-3xl border border-line bg-slate p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">Mission</p>
            <h2 className="mt-3 font-display text-2xl font-bold">
              Helping businesses launch websites that create trust, generate leads, and support
              long-term success.
            </h2>
          </SectionReveal>
          <SectionReveal
            delay={0.08}
            className="rounded-3xl border border-line bg-navy p-8 text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">Vision</p>
            <h2 className="mt-3 font-display text-2xl font-bold">
              To become a trusted creative digital partner for businesses worldwide.
            </h2>
          </SectionReveal>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Values" title="What guides our work" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <SectionReveal
                key={value.title}
                delay={index * 0.05}
                className="rounded-3xl border border-line bg-white p-6"
              >
                <h3 className="font-display text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal className="mt-16 flex flex-col gap-4 rounded-3xl border border-line bg-slate p-8 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-2xl font-bold max-w-md">
            Let’s build something premium — with honest collaboration.
          </h3>
          <Button to="/contact">Get in touch</Button>
        </SectionReveal>
      </div>
    </div>
  )
}
