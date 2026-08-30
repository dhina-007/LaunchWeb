import { motion } from 'framer-motion'
import { Code2, Zap, ShieldCheck, Activity } from 'lucide-react'

export function HeroComposition() {
  return (
    <div className="relative mx-auto h-[480px] w-full max-w-[560px] sm:h-[540px] flex items-center justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-[#4F46E5]/15 to-[#2563EB]/15 blur-[100px] pointer-events-none" />

      {/* Main Container Window */}
      <motion.div
        className="absolute left-0 top-6 w-[86%] rounded-2xl border border-[#E2E8F0] bg-white shadow-2xl shadow-slate-900/10 overflow-hidden"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Browser Topbar */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
            <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
            <span className="h-3 w-3 rounded-full bg-[#10B981]" />
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-mono text-[#475569] shadow-2xs">
            <span className="text-[#16A34A] font-semibold">https://</span>
            <span className="text-[#0F172A]">lunchweb.app/demo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="text-[10px] font-mono text-[#475569] uppercase tracking-wider font-semibold">Live</span>
          </div>
        </div>

        {/* Browser Mockup Body */}
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="h-4 w-32 rounded-md bg-[#E2E8F0]" />
              <div className="h-3 w-48 rounded-md bg-[#F1F5F9]" />
            </div>
            <span className="rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 px-2.5 py-1 text-[10px] font-semibold text-[#4F46E5]">
              Enterprise Stack
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 space-y-2">
              <div className="flex items-center justify-between text-[#475569]">
                <Code2 className="h-4 w-4 text-[#4F46E5]" />
                <span className="text-[10px] font-mono">React 19</span>
              </div>
              <p className="text-xs font-semibold text-[#0F172A]">Fast UI</p>
              <div className="h-1.5 w-full rounded-full bg-[#E2E8F0] overflow-hidden">
                <div className="h-full w-[95%] bg-[#4F46E5]" />
              </div>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 space-y-2">
              <div className="flex items-center justify-between text-[#475569]">
                <Zap className="h-4 w-4 text-[#2563EB]" />
                <span className="text-[10px] font-mono">Vite</span>
              </div>
              <p className="text-xs font-semibold text-[#0F172A]">0.4s Load</p>
              <div className="h-1.5 w-full rounded-full bg-[#E2E8F0] overflow-hidden">
                <div className="h-full w-[98%] bg-[#2563EB]" />
              </div>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 space-y-2">
              <div className="flex items-center justify-between text-[#475569]">
                <ShieldCheck className="h-4 w-4 text-[#16A34A]" />
                <span className="text-[10px] font-mono">SEO</span>
              </div>
              <p className="text-xs font-semibold text-[#0F172A]">Ranked</p>
              <div className="h-1.5 w-full rounded-full bg-[#E2E8F0] overflow-hidden">
                <div className="h-full w-[92%] bg-[#16A34A]" />
              </div>
            </div>
          </div>

          {/* Interactive Code Preview Block */}
          <div className="rounded-xl border border-[#E2E8F0] bg-[#0F172A] p-3 font-mono text-[11px] leading-relaxed text-[#94A3B8]">
            <div className="flex items-center justify-between border-b border-[#334155] pb-2 mb-2">
              <span className="text-[#F8FAFC] font-semibold">LunchWeb.config.js</span>
              <span className="text-[10px] text-[#4ADE80]">✓ Verified Architecture</span>
            </div>
            <p><span className="text-[#818CF8]">export const</span> app = {'{'}</p>
            <p className="pl-4">mode: <span className="text-[#4ADE80]">'production'</span>,</p>
            <p className="pl-4">design: <span className="text-[#60A5FA]">'world-class'</span>,</p>
            <p className="pl-4">performance: <span className="text-[#FBBF24]">99.8</span>,</p>
            <p>{'}'}</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Lighthouse Metric */}
      <motion.div
        className="absolute right-0 top-16 w-[48%] rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xl shadow-slate-900/10 space-y-2"
        initial={{ y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#475569]">
            Speed Metric
          </span>
          <span className="flex h-2 w-2 rounded-full bg-[#16A34A]" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-3xl font-extrabold text-[#0F172A]">99</span>
          <span className="text-xs text-[#16A34A] font-semibold">/ 100 Score</span>
        </div>
        <p className="text-[11px] text-[#475569]">Core Web Vitals Optimized</p>
        <div className="flex items-end gap-1.5 h-10 pt-1">
          {[45, 70, 55, 88, 72, 98, 85, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-[#4F46E5]/30 to-[#2563EB]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Card 2: API Status */}
      <motion.div
        className="absolute bottom-8 left-4 w-[52%] rounded-2xl border border-[#E2E8F0] bg-white p-3.5 shadow-xl shadow-slate-900/10"
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-[#4F46E5]" />
          <span className="text-xs font-semibold text-[#0F172A]">Custom Software API</span>
        </div>
        <div className="mt-2 flex items-center justify-between rounded-lg bg-[#F8FAFC] px-2.5 py-1.5 border border-[#E2E8F0]">
          <span className="text-[10px] font-mono text-[#475569]">Status: 200 OK</span>
          <span className="text-[10px] font-mono text-[#16A34A] font-semibold">12ms Response</span>
        </div>
      </motion.div>
    </div>
  )
}
