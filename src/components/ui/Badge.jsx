import { cn } from '@/utils/cn'

/**
 * Small pill badge used as section labels / eyebrow text.
 * Usage: <Badge>Why Choose Us</Badge>
 */
export function Badge({ children, className }) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-3 py-1',
      'bg-cyan/10 border border-cyan/40 rounded-full',
      'text-cyan text-xs font-bold tracking-widest uppercase',
      className
    )}>
      <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
      {children}
    </span>
  )
}
