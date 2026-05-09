import { cn } from '@/utils/cn'

/**
 * Base card container with hover glow effect and top-line reveal.
 * Usage: <Card className="optional-overrides">...</Card>
 */
export function Card({ children, className, hover = true }) {
  return (
    <div className={cn(
      'relative overflow-hidden rounded-2.5xl p-6',
      'bg-gradient-card border border-navy-400/30',
      'backdrop-blur-sm',
      'card-shine',
      hover && 'transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-cyan/35 hover:shadow-card-hover',
      className
    )}>
      {children}
    </div>
  )
}

/**
 * Service / Feature card with icon slot.
 */
export function ServiceCard({ icon, title, description, items, className }) {
  return (
    <Card className={className}>
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 text-navy-900 shadow-glow-cyan">
        {icon}
      </div>
      {/* Title */}
      <h3 className="font-display font-bold text-base text-white mb-2.5">{title}</h3>
      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>
      {/* Optional item list */}
      {items && (
        <ul className="space-y-1.5">
          {items.map(item => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

/**
 * Stat card — large number + label.
 */
export function StatCard({ number, label, className }) {
  return (
    <div className={cn('text-center', className)}>
      <span className="block font-display font-bold text-3xl text-cyan leading-none mb-1">
        {number}
      </span>
      <span className="text-xs text-slate-500 font-medium">{label}</span>
    </div>
  )
}

/**
 * Step card for process/approach sections.
 */
export function StepCard({ number, title, description }) {
  return (
    <div className="text-center px-4">
      <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-5 shadow-btn font-display font-bold text-xl text-navy-900">
        {number}
      </div>
      <h4 className="font-display font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  )
}

/**
 * Value card — left accent border style.
 */
export function ValueCard({ icon, title, description }) {
  return (
    <div className="bg-navy-600/50 border border-navy-400/30 border-l-2 border-l-cyan rounded-xl p-5 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1">
      <h4 className="font-display font-bold text-white flex items-center gap-2 mb-2">
        <span>{icon}</span>
        {title}
      </h4>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  )
}
