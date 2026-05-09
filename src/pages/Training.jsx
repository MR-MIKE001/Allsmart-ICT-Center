import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/layout/PageHero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ApproachSteps } from '@/components/sections/ApproachSteps'
import { CTABanner } from '@/components/sections/CTABanner'
import { ServiceIcon } from '@/components/sections/ServiceIcon'
import { TrainingIllustration } from '@/components/illustrations'
import { COURSES, BENEFITS } from '@/data/training'

const STATUS_STYLES = {
  cyan: 'bg-cyan/10 border-cyan/40 text-cyan',
  yellow: 'bg-yellow-400/10 border-yellow-400/40 text-yellow-400',
  red: 'bg-red-400/10 border-red-400/40 text-red-400',
}

function CourseCard({ course }) {
  return (
    <div className="bg-navy-600/50 border border-navy-400/25 rounded-xl p-5 text-center transition-all duration-300 hover:border-cyan/40 hover:shadow-glow-cyan hover:-translate-y-1.5 group">
      <div className="w-12 h-12 rounded-full bg-gradient-card border border-cyan/30 flex items-center justify-center mx-auto mb-4 text-cyan group-hover:border-cyan/60 transition-colors">
        <ServiceIcon type={course.icon} className="w-5 h-5" />
      </div>
      <h4 className="font-display font-bold text-white text-sm mb-2">{course.title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed mb-3">{course.desc}</p>
      <div className="flex flex-col gap-1 mb-3">
        <span className="text-xs font-bold text-cyan">⏱ {course.duration}</span>
        <span className="text-xs text-slate-600">{course.level}</span>
      </div>
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${STATUS_STYLES[course.statusColor]}`}>
        {course.status}
      </span>
    </div>
  )
}

function CohortCard({ course }) {
  return (
    <div className="bg-navy-600/50 border border-navy-400/25 rounded-xl p-5 transition-all duration-300 hover:border-cyan/35">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-display font-bold text-white text-sm">{course.title}</h4>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${STATUS_STYLES[course.statusColor]}`}>
          {course.status}
        </span>
      </div>
      <p className="text-sm text-slate-500 mb-3">
        Starting: <strong className="text-slate-300">{course.startDate}</strong>
      </p>
      <Link to="/contact" className="text-xs text-cyan font-bold hover:text-brand-300 transition-colors inline-flex items-center gap-1">
        Reserve Spot →
      </Link>
    </div>
  )
}

export default function Training() {
  return (
    <>
      <PageHero
        badge="Tech Training Programs"
        title={<>Learn <span className="text-gradient">High-Income Digital Skills</span></>}
        subtitle="We equip students, entrepreneurs and professionals with practical high-income digital skills through expert-led, hands-on training programs."
      />

      {/* ── COURSES GRID ── */}
      <section className="py-24">
        <div className="section-wrapper">
          <SectionHeader
            badge="Available Programs"
            title={<>Training Courses <span className="text-gradient">Open Now</span></>}
            subtitle="Choose from our range of practical, industry-focused training programs designed around real skills employers pay for."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {COURSES.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ILLUSTRATION + BENEFITS ── */}
      <section className="py-24 bg-navy-600/15">
        <div className="section-wrapper grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-float">
            <TrainingIllustration />
          </div>
          <div>
            <SectionHeader
              badge="Why Train With Us"
              title={<>The Allsmart <span className="text-gradient">Advantage</span></>}
              subtitle="Our programs are designed by industry professionals to ensure you gain the most in-demand skills that employers and clients actually need right now."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {BENEFITS.map(b => (
                <div key={b.label} className="flex items-start gap-3 p-3.5 bg-navy-600/50 border border-navy-400/25 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-gradient-accent shrink-0 mt-1.5" />
                  <div>
                    <p className="text-sm font-bold text-white">{b.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsBar />

      {/* ── HOW TO ENROLL ── */}
      <ApproachSteps
        badge="Getting Started"
        title="How to Enroll"
        subtitle="Four simple steps from choosing your program to launching your career."
      />

      {/* ── COHORT CALENDAR ── */}
      <section className="py-24 bg-navy-600/15">
        <div className="section-wrapper">
          <SectionHeader
            badge="Schedule"
            title={<>Upcoming <span className="text-gradient">Cohorts</span></>}
            subtitle="Limited spaces per cohort. Register early to guarantee your seat."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {COURSES.slice(0, 6).map(course => (
              <CohortCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        badge="Ready to Learn?"
        title={<>Start Your Tech Career <span className="text-gradient">Today</span></>}
        subtitle="Join hundreds who have transformed their careers through our practical, expert-led training programs."
        primaryLabel="Enroll Now"
        secondaryLabel="View Services"
        secondaryTo="/services"
      />
    </>
  )
}
