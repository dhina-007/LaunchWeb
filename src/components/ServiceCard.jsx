import { Icon } from './Icon'

export function ServiceCard({ service, index, featured = false }) {
  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[var(--shadow-card)]">
      <div
        className={`relative overflow-hidden bg-slate ${
          featured ? 'aspect-[21/9] sm:aspect-[2.4/1]' : 'aspect-[16/10]'
        }`}
      >
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-navy/10 to-transparent" />
        <div className="absolute left-4 bottom-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-blue shadow-sm ring-1 ring-white/60 backdrop-blur">
          <Icon name={service.icon} className="h-5 w-5" />
        </div>
      </div>

      <div className="p-6 sm:p-7">
        {typeof index === 'number' ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            0{index + 1}
          </p>
        ) : null}
        <h3
          className={`font-display font-semibold text-navy ${
            typeof index === 'number' ? 'mt-2 text-2xl' : 'text-xl'
          }`}
        >
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
    </article>
  )
}
