import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

/**
 * Full-width CTA section — reused across all pages.
 */
export function CTABanner({
  badge = 'Get Started Today',
  title,
  subtitle,
  primaryLabel = 'Contact Us Today',
  primaryTo = '/contact',
  secondaryLabel = 'View Our Services',
  secondaryTo = '/services',
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero border-t border-navy-400/20 py-28">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="section-wrapper relative z-10 text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <Badge>{badge}</Badge>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
          {title}
        </h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button to={primaryTo} size="lg">{primaryLabel}</Button>
          <Button to={secondaryTo} variant="ghost" size="lg">{secondaryLabel}</Button>
        </div>
      </div>
    </section>
  )
}
