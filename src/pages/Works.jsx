import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/Section'
import { WorkModal } from '../components/WorkModal'
import { Button } from '../components/Button'
import { works } from '../data/content'

const categories = ['All', 'Portfolio', 'Education', 'Business', 'Landing']

export function Works() {
  const [filter, setFilter] = useState('All')
  const [activeWork, setActiveWork] = useState(null)

  const filtered = useMemo(
    () => (filter === 'All' ? works : works.filter((work) => work.category === filter)),
    [filter],
  )

  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Works"
          title="Selected Live Projects"
          description="Real websites we've designed and developed — portfolios, landing pages, an LMS platform, and business apps, live in production."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                filter === category
                  ? 'brand-gradient text-white'
                  : 'border border-line bg-white text-muted hover:text-navy'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work) => (
            <button
              key={work.id}
              type="button"
              onClick={() => setActiveWork(work)}
              className="group overflow-hidden rounded-3xl border border-line bg-white text-left transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="relative h-40 overflow-hidden bg-slate">
                <img
                  src={work.image}
                  alt={work.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue">
                    {work.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted" />
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold">{work.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">{work.type}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{work.summary}</p>
                <p className="mt-4 text-xs font-semibold text-blue">View details →</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-line bg-slate p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-2xl font-bold max-w-md">
            Want your project in the next chapter?
          </h3>
          <Button to="/contact">Start a conversation</Button>
        </div>
      </div>

      <WorkModal work={activeWork} onClose={() => setActiveWork(null)} />
    </div>
  )
}
