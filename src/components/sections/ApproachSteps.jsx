import { SectionHeader } from '@/components/ui/SectionHeader'
import { StepCard } from '@/components/ui/Card'

const STEPS = [
  { number: '1', title: 'Discovery', description: 'We deeply understand your business challenges, goals, and technical landscape before recommending any solution.' },
  { number: '2', title: 'Design', description: 'We craft a tailored plan that aligns the right technology with your specific business objectives and budget.' },
  { number: '3', title: 'Deploy', description: 'Our team implements efficiently and transparently, keeping you informed and in control at every stage.' },
  { number: '4', title: 'Optimise', description: 'Post-delivery support and continuous improvement to maximise your return on investment over time.' },
]

export function ApproachSteps({ title = 'A Proven Methodology', subtitle, badge = 'Our Approach' }) {
  return (
    <section className="py-24 bg-navy-800 border-y border-navy-400/20">
      <div className="section-wrapper">
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle || 'We follow a structured, transparent process that consistently delivers reliable results for every client.'}
          centered
        />

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {STEPS.map(step => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
