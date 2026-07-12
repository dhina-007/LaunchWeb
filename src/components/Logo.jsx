import { Link } from 'react-router-dom'

export function Logo({ size = 'md', showWordmark = true }) {
  const mark =
    size === 'lg'
      ? 'h-16 w-16 sm:h-20 sm:w-20'
      : size === 'sm'
        ? 'h-9 w-9'
        : 'h-10 w-10'

  const word =
    size === 'lg'
      ? 'text-3xl sm:text-4xl'
      : size === 'sm'
        ? 'text-lg'
        : 'text-xl'

  return (
    <Link to="/" className="inline-flex items-center gap-3 group" aria-label="Launch Web home">
      <span
        className={`${mark} relative overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(46,91,255,0.16)] ring-1 ring-black/5`}
      >
        <img
          src="/logo.png"
          alt=""
          className="h-full w-full object-cover object-[center_8%] scale-[1.35]"
          loading="eager"
        />
      </span>
      {showWordmark ? (
        <span className={`font-display font-bold tracking-tight text-navy ${word}`}>
          Launch <span className="gradient-text">Web</span>
        </span>
      ) : null}
    </Link>
  )
}
