import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Layout, Code2, Globe, Cpu, ShoppingBag, Palette, Video, Sparkles, CheckCircle2 } from 'lucide-react'

const iconMap = {
  Layout,
  Code2,
  Globe,
  Cpu,
  ShoppingBag,
  Palette,
  Video,
  Sparkles,
}

export function ServiceCard({ service, featured = false }) {
  const IconComponent = iconMap[service.icon] || Layout

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#4F46E5] hover:shadow-2xl hover:shadow-indigo-500/10 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top Accent Stripe on Hover */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Top Bar: Icon, Number & Arrow */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#2563EB] text-white shadow-md shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-110">
              <IconComponent className="h-6 w-6" />
            </div>
            <span className="font-mono text-xs font-bold text-[#4F46E5] bg-[#4F46E5]/10 border border-[#4F46E5]/20 px-2.5 py-1 rounded-lg">
              {service.number}
            </span>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] transition-all duration-200 group-hover:border-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Tagline Badge & Title */}
        <div className="mt-6 space-y-2">
          {service.tagline && (
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#4F46E5]">
              {service.tagline}
            </span>
          )}
          <h3 className="font-display text-2xl font-extrabold text-[#0F172A] tracking-tight transition-colors group-hover:text-[#4F46E5]">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-[#475569]">
          {service.description}
        </p>

        {/* Enterprise Deliverables Checklist */}
        {service.deliverables && service.deliverables.length > 0 && (
          <div className="mt-6 pt-5 border-t border-[#E2E8F0] space-y-2.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">
              Key Service Inclusions:
            </p>
            <ul className="space-y-2 text-xs text-[#475569]">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span className="font-medium text-[#0F172A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Tags & CTA Link */}
      <div className="mt-8 pt-5 border-t border-[#E2E8F0] space-y-4">
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 text-[11px] font-semibold text-[#475569] transition-colors group-hover:border-[#CBD5E1]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="pt-1 flex items-center justify-between">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] group-hover:text-[#2563EB] transition-colors"
          >
            <span>Start This Project</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-[11px] font-semibold text-[#16A34A] flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
            Available Now
          </span>
        </div>
      </div>
    </div>
  )
}
