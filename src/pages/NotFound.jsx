import { Button } from '../components/Button'
import { SEO } from '../components/SEO'

export function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | LunchWeb"
        description="The page you are looking for does not exist on LunchWeb. Return to our homepage to explore our web design, software development, and digital solutions."
        canonicalUrl="https://lunchweb.onrender.com/404"
      />

      <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#F8FAFC] text-[#0F172A] min-h-[70vh] flex items-center justify-center text-center">
        <div className="container-page max-w-xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
            Error 404
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#0F172A]">
            Page Not Found
          </h1>
          <p className="text-base text-[#475569]">
            The page you requested could not be found or may have been moved.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary">
              Return to Homepage
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
