import { Badge } from '@/components/ui/Badge'
import { cn } from '@/utils/cn'

/**
 * Standard hero banner for inner pages (About, Services, Training, Contact).
 * Props: badge, title (ReactNode), subtitle, className
 */
export function PageHero({ badge, title, subtitle, className }) {
  return (
    <section className={cn(
      'relative overflow-hidden bg-gradient-hero pt-36 pb-20 text-center',
      className
    )}>
      {/* Grid texture */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] glow-blob rounded-full pointer-events-none" />

      <div className="section-wrapper relative z-10">
        {badge && (
          <div className="flex justify-center mb-4">
            <Badge>{badge}</Badge>
          </div>
        )}
        {title && (
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl mx-auto">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
