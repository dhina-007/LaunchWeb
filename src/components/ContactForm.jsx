import { useForm, ValidationError } from '@formspree/react'
import { CheckCircle2, MessageSquare } from 'lucide-react'
import { budgets, company, projectTypes } from '../data/content'
import { Button } from './Button'
import { trackContactFormSubmit, trackWhatsAppClick } from '../utils/analytics'

const fieldClass =
  'w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] outline-none transition duration-200 focus:border-[#4F46E5] focus:bg-white focus:ring-4 focus:ring-indigo-500/10 disabled:opacity-50'

export function ContactForm({ compact = false }) {
  const [state, handleSubmit] = useForm('xojgazpl')

  const handleFormSubmit = async (e) => {
    const formData = new FormData(e.currentTarget)
    const projectType = formData.get('projectType') || 'Unspecified'
    const budget = formData.get('budget') || 'Unspecified'
    
    trackContactFormSubmit(projectType, budget)
    await handleSubmit(e)
  }

  if (state.succeeded) {
    return (
      <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-12 text-center space-y-4 shadow-xl shadow-slate-900/5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/30">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
          Enquiry Received!
        </h3>
        <p className="text-sm leading-relaxed text-[#475569] max-w-sm mx-auto">
          Thank you for contacting LunchWeb. Our team will review your business requirements and reply within 2 hours.
        </p>
        <div className="pt-2">
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('form_success')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#16A34A] hover:underline"
          >
            <MessageSquare className="h-4 w-4" />
            Need an urgent response? Chat on WhatsApp →
          </a>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/5 space-y-6"
    >
      <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
        <div>
          <h3 className="font-display text-lg font-bold text-[#0F172A]">
            Start a Project Conversation
          </h3>
          <p className="text-xs text-[#475569]">Fill in details for a custom estimate</p>
        </div>
        <span className="flex h-2.5 w-2.5 rounded-full bg-[#16A34A] animate-pulse" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#475569]">
          Your Name *
          <input
            id="name"
            name="name"
            className={fieldClass}
            placeholder="John Doe"
            autoComplete="name"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs font-normal text-[#EF4444]" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#475569]">
          Email Address *
          <input
            id="email"
            type="email"
            name="email"
            className={fieldClass}
            placeholder="john@business.com"
            autoComplete="email"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs font-normal text-[#EF4444]" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#475569]">
          Phone Number
          <input
            id="phone"
            type="tel"
            name="phone"
            className={fieldClass}
            placeholder="+91 95855 23658"
            autoComplete="tel"
            disabled={state.submitting}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs font-normal text-[#EF4444]" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#475569]">
          Company / Business
          <input
            id="business"
            name="business"
            className={fieldClass}
            placeholder="Your Brand Name"
            disabled={state.submitting}
          />
          <ValidationError prefix="Business" field="business" errors={state.errors} className="text-xs font-normal text-[#EF4444]" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#475569]">
          Project Service Need
          <select
            id="projectType"
            name="projectType"
            className={fieldClass}
            defaultValue=""
            disabled={state.submitting}
          >
            <option value="" disabled>Select service</option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-white text-[#0F172A]">
                {type}
              </option>
            ))}
          </select>
          <ValidationError prefix="Project Type" field="projectType" errors={state.errors} className="text-xs font-normal text-[#EF4444]" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#475569]">
          Estimated Budget
          <select
            id="budget"
            name="budget"
            className={fieldClass}
            defaultValue=""
            disabled={state.submitting}
          >
            <option value="" disabled>Select budget range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget} className="bg-white text-[#0F172A]">
                {budget}
              </option>
            ))}
          </select>
          <ValidationError prefix="Budget" field="budget" errors={state.errors} className="text-xs font-normal text-[#EF4444]" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#475569] sm:col-span-2">
          Project Requirements &amp; Goals *
          <textarea
            id="message"
            name="message"
            rows={compact ? 4 : 5}
            className={fieldClass}
            placeholder="Describe your website, web application, or digital solution goals..."
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs font-normal text-[#EF4444]" />
        </label>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          className="w-full sm:w-auto min-w-[200px]"
          disabled={state.submitting}
        >
          {state.submitting ? 'Sending...' : 'Send Enquiry'}
        </Button>
        <span className="text-xs text-[#475569]">
          ⚡ Average response time: 2 hours
        </span>
      </div>
    </form>
  )
}
