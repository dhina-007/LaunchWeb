import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/Section'
import { WorkModal } from '../components/WorkModal'
import { Button } from '../components/Button'
import { SEO } from '../components/SEO'
import { works } from '../data/content'
import { trackViewProjectClick } from '../utils/analytics'

const categories = ['All', 'Healthcare', 'Retail', 'Education', 'Portfolio', 'Business']

export function Works() {
  const [filter, setFilter] = useState('All')
  const [activeWork, setActiveWork] = useState(null)

  const filtered = useMemo(
    () => (filter === 'All' ? works : works.filter((work) => work.category === filter)),
    [filter],
  )

  const worksSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'LunchWeb Portfolio Projects',
    itemListElement: works.map((w, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: w.name,
        description: w.summary,
        url: w.url || 'https://lunchweb.onrender.com/works',
        image: w.image,
      },
    })),
  }

  const handleOpenWork = (work) => {
    trackViewProjectClick(work.name)
    setActiveWork(work)
  }

  return (
    <>
      <SEO
        title="Selected Projects &amp; Case Studies | LunchWeb"
        description="Explore real production websites, Sri Sai Clinic healthcare portal, LMS platforms, and custom software web applications designed and developed by LunchWeb."
        keywords="Sri Sai Clinic website, LunchWeb projects, Web development portfolio, React web apps, Custom software showcase"
        canonicalUrl="https://lunchweb.onrender.com/works"
        schemaJson={worksSchema}
      />

      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#F8FAFC] text-[#0F172A] min-h-screen">
        <div className="container-page">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4F46E5] shadow-xs">
              Our Works
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
              Our Works &amp; Live Projects
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#475569]">
              Explore real production websites, healthcare management portals, e-learning platforms, and custom business applications shipped by LunchWeb.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  filter === category
                    ? 'bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white shadow-md shadow-indigo-500/20'
                    : 'border border-[#E2E8F0] bg-white text-[#475569] hover:text-[#0F172A] hover:border-[#CBD5E1] shadow-2xs'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((work) => (
              <button
                key={work.id}
                type="button"
                onClick={() => handleOpenWork(work)}
                className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4F46E5] hover:shadow-xl shadow-xs"
              >
                <div className="relative h-48 overflow-hidden bg-[#F8FAFC]">
                  <img
                    src={work.image}
                    alt={`${work.name} project designed by LunchWeb`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                  
                  {work.id === 'sri-sai-clinic' && (
                    <span className="absolute top-3 left-3 rounded-full bg-[#4F46E5] px-2.5 py-1 text-[10px] font-bold text-white shadow-xs">
                      Healthcare Live Project
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4F46E5]">
                      {work.category} • {work.type}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#475569] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0F172A]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0F172A]">
                    {work.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#475569] line-clamp-3">
                    {work.summary}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#4F46E5]">
                    <span>View Project Info</span>
                    <span>→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="mt-16 rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between shadow-xl shadow-slate-900/5">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Want your project showcased next?
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
                Let's collaborate to design and develop your custom web solution.
              </p>
            </div>
            <Button to="/contact" variant="primary">
              Start a Conversation
            </Button>
          </div>
        </div>

        <WorkModal work={activeWork} onClose={() => setActiveWork(null)} />
      </div>
    </>
  )
}
