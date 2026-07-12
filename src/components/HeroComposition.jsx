import { motion } from 'framer-motion'

export function HeroComposition() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[540px] sm:h-[520px]">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_70%_20%,rgba(0,210,255,0.18),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(122,54,255,0.16),transparent_40%)]" />

      <motion.div
        className="absolute left-2 top-8 w-[78%] rounded-2xl border border-line bg-white shadow-[var(--shadow-card)] overflow-hidden"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-1.5 border-b border-line bg-slate px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[10px] font-medium text-muted">launchweb.app</span>
        </div>
        <div className="space-y-3 p-4">
          <div className="h-3 w-24 rounded-full brand-gradient opacity-80" />
          <div className="h-4 w-4/5 rounded-md bg-navy/10" />
          <div className="h-3 w-3/5 rounded-md bg-navy/8" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-xl bg-slate" />
            <div className="h-16 rounded-xl bg-slate" />
            <div className="h-16 rounded-xl brand-gradient/20 bg-[linear-gradient(135deg,rgba(122,54,255,0.12),rgba(0,210,255,0.16))]" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0 top-28 w-[46%] rounded-2xl border border-white/70 bg-white/80 p-3 shadow-[var(--shadow-soft)] backdrop-blur-xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
          Analytics
        </p>
        <p className="mt-2 font-display text-2xl font-bold text-navy">98</p>
        <p className="text-xs text-muted">Lighthouse score target</p>
        <div className="mt-3 flex items-end gap-1 h-12">
          {[40, 65, 48, 80, 58, 92, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm brand-gradient opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-8 w-[42%] rounded-2xl border border-line bg-navy p-4 text-white shadow-[var(--shadow-card)]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <p className="text-[10px] font-medium text-white/60">snippet.jsx</p>
        <pre className="mt-2 overflow-hidden text-[10px] leading-relaxed text-cyan/90 font-mono">
{`const site = {
  fast: true,
  seo: true,
  responsive: true,
}`}
        </pre>
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-6 w-28 rounded-[1.5rem] border border-line bg-white p-2 shadow-[var(--shadow-soft)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      >
        <div className="rounded-[1.1rem] bg-slate p-2">
          <div className="mx-auto mb-2 h-1.5 w-8 rounded-full bg-navy/15" />
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-navy/10" />
            <div className="h-2 w-2/3 rounded bg-navy/10" />
            <div className="mt-2 h-8 rounded-lg brand-gradient opacity-70" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
