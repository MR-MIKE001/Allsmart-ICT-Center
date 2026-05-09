import { cn } from '@/utils/cn'
import { Badge } from './Badge'

/**
 * Reusable section header: badge + title + subtitle
 *
 * Props:
 *  - badge: string (eyebrow label)
 *  - title: string | ReactNode
 *  - subtitle: string
 *  - centered: boolean (default false)
 *  - className: string
 */
export function SectionHeader({ badge, title, subtitle, centered = false, className }) {
  return (
    <div className={cn(centered && 'text-align-center', className)}>
      {badge && (
        <div className={cn('mb-3', centered && 'flex justify-center')}>
          <Badge>{badge}</Badge>
        </div>
      )}
      {title && (
        <h2 className={cn(
          'font-display font-bold text-white leading-tight mb-3',
          'text-3xl md:text-4xl',
          centered && 'text-center'
        )}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={cn(
          'text-slate-400 text-base leading-relaxed max-w-2xl',
          centered && 'mx-auto text-center'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
