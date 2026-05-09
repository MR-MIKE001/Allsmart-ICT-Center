import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

const VARIANTS = {
  primary: `
    bg-gradient-accent text-navy-900 font-bold shadow-btn
    hover:shadow-btn-hover hover:-translate-y-0.5
  `,
  ghost: `
    bg-transparent text-slate-200 border border-navy-400/40
    hover:border-cyan hover:text-cyan hover:-translate-y-0.5
  `,
  navy: `
    bg-navy-600/80 text-cyan border border-cyan/30
    hover:bg-navy-500/90 hover:border-cyan/60 hover:-translate-y-0.5 hover:shadow-glow-cyan
  `,
  outline: `
    bg-transparent text-cyan border border-cyan/50
    hover:bg-cyan/10 hover:border-cyan hover:-translate-y-0.5
  `,
}

const SIZES = {
  sm: 'text-xs px-4 py-2 gap-1.5',
  md: 'text-sm px-6 py-3 gap-2',
  lg: 'text-sm px-8 py-3.5 gap-2',
}

/**
 * Button / Link component with variant and size support.
 * Renders as <Link> when `to` prop is provided, <button> otherwise.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  icon,
  iconPosition = 'right',
  ...props
}) {
  const base = cn(
    'inline-flex items-center justify-center rounded-full font-sans font-bold tracking-wide',
    'transition-all duration-300 ease-smooth cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50',
    VARIANTS[variant],
    SIZES[size],
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  )

  if (to) return <Link to={to} className={base} {...props}>{content}</Link>
  if (href) return <a href={href} className={base} {...props}>{content}</a>
  return <button className={base} {...props}>{content}</button>
}
