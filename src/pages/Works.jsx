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
    name: 'LaunchWeb Portfolio Projects',
    itemListElement: works.map((w, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: w.name,
        description: w.summary,
        url: w.url || 'https://launchweb.onrender.com/works',
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
        title="Selected Projects &amp; Case Studies | LaunchWeb"
        description="Explore real production websites, Sri Sai Clinic healthcare portal, LMS platforms, and custom software web applications designed and developed by LaunchWeb."
        keywords="Sri Sai Clinic website, LaunchWeb projects, Web development portfolio, React web apps, Custom software showcase"
        canonicalUrl="https://launchweb.onrender.com/works"
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
              Explore real production websites, healthcare management portals, e-learning platforms, and custom business applications shipped by LaunchWeb.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  filter === category
                    ? 'bg-[#4F46E5] text-white shadow-md'
                    : 'bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#4F46E5] hover:text-[#0F172A]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Works Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    alt={work.imageAlt || work.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
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
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">
                Have a Project Scope in Mind?
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-lg">
                Let's discuss how LaunchWeb can design and engineer a custom digital product tailored to your business needs.
              </p>
            </div>
            <Button to="/contact" variant="primary">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      <WorkModal work={activeWork} onClose={() => setActiveWork(null)} />
    </>
  )
}
