import { useForm, ValidationError } from '@formspree/react'
import { CheckCircle2 } from 'lucide-react'
import { budgets, projectTypes } from '../data/content'
import { Button } from './Button'

const fieldClass =
  'w-full rounded-xl border border-line bg-slate/60 px-4 py-3 text-sm outline-none transition focus:border-blue/50 focus:bg-white focus:ring-4 focus:ring-blue/10 disabled:opacity-60'

export function ContactForm({ compact = false }) {
  const [state, handleSubmit] = useForm('xojgazpl')

  if (state.succeeded) {
    return (
      <div className="rounded-3xl border border-line bg-white p-8 sm:p-10 shadow-[var(--shadow-soft)] text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate text-blue">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-navy">
          Thanks for reaching out!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted max-w-sm mx-auto">
          We received your project inquiry and will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Name
          <input
            id="name"
            name="name"
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs font-medium normal-case tracking-normal text-red-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Email
          <input
            id="email"
            type="email"
            name="email"
            className={fieldClass}
            placeholder="you@company.com"
            autoComplete="email"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs font-medium normal-case tracking-normal text-red-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Phone
          <input
            id="phone"
            type="tel"
            name="phone"
            className={fieldClass}
            placeholder="+91 ..."
            autoComplete="tel"
            disabled={state.submitting}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs font-medium normal-case tracking-normal text-red-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Business Name
          <input
            id="business"
            name="business"
            className={fieldClass}
            placeholder="Company or brand"
            disabled={state.submitting}
          />
          <ValidationError prefix="Business" field="business" errors={state.errors} className="text-xs font-medium normal-case tracking-normal text-red-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Project Type
          <select
            id="projectType"
            name="projectType"
            className={fieldClass}
            defaultValue=""
            disabled={state.submitting}
          >
            <option value="">Select type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ValidationError prefix="Project Type" field="projectType" errors={state.errors} className="text-xs font-medium normal-case tracking-normal text-red-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Budget
          <select
            id="budget"
            name="budget"
            className={fieldClass}
            defaultValue=""
            disabled={state.submitting}
          >
            <option value="">Select range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          <ValidationError prefix="Budget" field="budget" errors={state.errors} className="text-xs font-medium normal-case tracking-normal text-red-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted sm:col-span-2">
          Project Details
          <textarea
            id="message"
            name="message"
            rows={compact ? 4 : 6}
            className={fieldClass}
            placeholder="Tell us about your goals, timeline, and anything important."
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs font-medium normal-case tracking-normal text-red-600" />
        </label>
      </div>

      {state.errors?.getFormErrors?.()?.length ? (
        <p className="mt-3 text-sm font-medium text-red-600">
          Something went wrong. Please try again.
        </p>
      ) : null}

      <div className="mt-6">
        <Button
          type="submit"
          className="w-full sm:w-auto min-w-[220px]"
          disabled={state.submitting}
        >
          {state.submitting ? 'Sending…' : 'Send Project Inquiry'}
        </Button>
      </div>
    </form>
  )
}
