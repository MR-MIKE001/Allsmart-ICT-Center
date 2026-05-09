import { StatCard } from '@/components/ui/Card'

const STATS = [
  { number: '500+', label: 'Clients Served' },
  { number: '9+', label: 'ICT Services' },
  { number: '8+', label: 'Training Programs' },
  { number: '100%', label: 'Practical Focus' },
]

export function StatsBar() {
  return (
    <div className="bg-navy-600 border-y border-navy-400/25">
      <div className="section-wrapper py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(stat => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  )
}
