import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ServiceCard } from '@/components/ui/Card'
import { PageHero } from '@/components/layout/PageHero'
import { ApproachSteps } from '@/components/sections/ApproachSteps'
import { CTABanner } from '@/components/sections/CTABanner'
import { ServiceIcon } from '@/components/sections/ServiceIcon'
import { DashboardIllustration } from '@/components/illustrations'
import { SERVICES } from '@/data/services'

/** Single service detail block — alternates layout */
function ServiceDetail({ service, index }) {
  const isReversed = index % 2 !== 0
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 border-b border-navy-400/20 last:border-b-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
      <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
        <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-navy-900 mb-5 shadow-glow-cyan">
          <ServiceIcon type={service.icon} />
        </div>
        <h2 className="font-display font-bold text-3xl text-white mb-4">{service.title}</h2>
        <p className="text-slate-400 leading-relaxed mb-6">{service.fullDesc}</p>
        <ul className="space-y-2.5 mb-8">
          {service.items.map(item => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
              <span className="w-2 h-2 rounded-full bg-gradient-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Button to="/contact" size="md">Get a Quote</Button>
      </div>
      {/* Mini service illustration */}
      <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
        <ServiceMiniIllus service={service} index={index} />
      </div>
    </div>
  )
}

function ServiceMiniIllus({ service, index }) {
  const colors = ['#00d4ff', '#48b9f7', '#1e6fbc', '#7ee8fa', '#00d4ff', '#48b9f7']
  const c = colors[index % colors.length]
  return (
    <svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl">
      <defs>
        <linearGradient id={`sg${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#050d1e" /><stop offset="100%" stopColor="#0d2255" />
        </linearGradient>
        <filter id={`sf${index}`}><feGaussianBlur stdDeviation="9" /></filter>
      </defs>
      <rect width="420" height="280" rx="16" fill={`url(#sg${index})`} />
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1={i * 52} y1="0" x2={i * 52} y2="280" stroke={c} strokeWidth="0.3" opacity="0.14" />
      ))}
      <circle cx="210" cy="130" r="88" fill={c} opacity="0.05" filter={`url(#sf${index})`} />
      <circle cx="210" cy="128" r="54" fill="none" stroke={c} strokeWidth="1.4" opacity="0.38" />
      <circle cx="210" cy="128" r="38" fill="rgba(13,34,85,0.85)" stroke={c} strokeWidth="1" />
      <text x="210" y="125" textAnchor="middle" fill={c} fontSize="26" fontWeight="800" fontFamily="Syne, sans-serif">
        {String(index + 1).padStart(2, '0')}
      </text>
      <text x="210" y="142" textAnchor="middle" fill={c} fontSize="7.5" fontWeight="700" opacity="0.65" letterSpacing="2">SERVICE</text>
      {[[28, 28], [392, 28], [28, 252], [392, 252]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={c} opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <text x="210" y="256" textAnchor="middle" fill={c} fontSize="9" fontWeight="700" opacity="0.45" letterSpacing="1">
        {service.title.toUpperCase().substring(0, 26)}
      </text>
    </svg>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        badge="What We Offer"
        title={<>Our <span className="text-gradient">Services</span></>}
        subtitle="A wide range of digital and ICT solutions designed to help businesses grow, improve efficiency, and remain competitive in the modern world."
      />

      {/* ── SERVICES OVERVIEW GRID ── */}
      <section className="py-24 bg-navy-600/15">
        <div className="section-wrapper">
          <SectionHeader
            badge="Complete ICT Solutions"
            title={<>Everything Your Business <span className="text-gradient">Needs</span></>}
            subtitle="From digital strategy to hands-on implementation — we cover the full technology spectrum."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {SERVICES.map(service => (
              <ServiceCard
                key={service.id}
                icon={<ServiceIcon type={service.icon} />}
                title={service.title}
                description={service.shortDesc}
                items={service.items.slice(0, 3)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD ── */}
      <section className="py-4 pb-16">
        <div className="section-wrapper">
          <DashboardIllustration />
        </div>
      </section>

      {/* ── DETAILED BREAKDOWNS ── */}
      <section className="py-12">
        <div className="section-wrapper">
          <SectionHeader
            badge="Deep Dive"
            title={<>Core Service <span className="text-gradient">Details</span></>}
            centered
          />
          <div className="mt-4">
            {SERVICES.slice(0, 6).map((service, index) => (
              <ServiceDetail key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <ApproachSteps
        badge="How We Work"
        title="Our Delivery Process"
        subtitle="Every project follows our proven methodology for reliable, on-time delivery."
      />

      <CTABanner
        badge="Ready to Start?"
        title={<>Let's Transform Your <span className="text-gradient">Business</span></>}
        subtitle="Reach out today and let's discuss how our services can help your business grow smarter and faster."
        secondaryLabel="Training Programs"
        secondaryTo="/training"
      />
    </>
  )
}
