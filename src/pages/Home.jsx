import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, ServiceCard, StepCard } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatsBar } from '@/components/sections/StatsBar'
import { ApproachSteps } from '@/components/sections/ApproachSteps'
import { CTABanner } from '@/components/sections/CTABanner'
import { ServiceIcon } from '@/components/sections/ServiceIcon'
import { HeroIllustration, DashboardIllustration } from '@/components/illustrations'
import { SERVICES } from '@/data/services'

const WHY_ITEMS = [
  { label: 'Professional ICT Consultancy', desc: 'Strategy-first technology advice tailored to your business goals.' },
  { label: 'Digital Transformation', desc: 'End-to-end support moving businesses into the modern digital era.' },
  { label: 'Practical Tech Training', desc: 'Hands-on programs that produce job-ready professionals fast.' },
  { label: 'Expert Support & Guidance', desc: 'Dedicated mentors and professionals available when you need them.' },
  { label: 'Modern Technology Stack', desc: 'We work with current, industry-standard tools and frameworks.' },
  { label: 'Affordable & Reliable', desc: 'Premium quality solutions that fit realistic Nigerian budgets.' },
]

const COURSE_TAGS = ['Web Development', 'AI & Automation', 'Data Analysis', 'Cybersecurity', 'Graphics Design', 'Digital Marketing', 'Solar & CCTV']

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        {/* Textures */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] glow-blob rounded-full -translate-y-1/4 translate-x-1/4" />

        <div className="section-wrapper relative z-10 py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <div className="mb-5">
              <Badge>Lagos, Nigeria — Leading Tech Hub</Badge>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-[1.07] mb-5">
              Empowering Businesses Through{' '}
              <span className="text-gradient">Smart Technology</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-2.5 max-w-lg">
              Welcome to Allsmart Tech Hub — your trusted partner for innovative digital solutions, professional ICT services, and practical tech training.
            </p>
            <p className="text-brand-300 text-sm font-bold tracking-wider mb-8">
              Modern Solutions. Real Skills. Lasting Impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" size="lg" icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              }>
                Get Started
              </Button>
              <Button to="/services" variant="ghost" size="lg">Explore Services</Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:block animate-fade-up animation-delay-300 animate-float">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsBar />

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-navy-600/15">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Why Choose Allsmart Tech Hub"
                title={<>Technology, Creativity & <span className="text-gradient">Innovation</span></>}
                subtitle="At Allsmart Tech Hub, we combine cutting-edge technology with creativity and deep local insight to help Nigerian businesses succeed in the digital economy."
              />
              <div className="mt-8">
                <Button to="/about" variant="navy" size="lg">Learn About Us</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {WHY_ITEMS.map(item => (
                <div key={item.label} className="flex items-start gap-3 p-4 bg-navy-600/50 border border-navy-400/25 rounded-xl transition-all duration-300 hover:border-cyan/30 hover:shadow-glow-cyan">
                  <div className="w-7 h-7 rounded-lg bg-gradient-accent flex items-center justify-center shrink-0 text-navy-900 font-black text-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{item.label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section className="py-24 bg-navy-800/40">
        <div className="section-wrapper">
          <SectionHeader
            badge="Our Core Services"
            title={<>What We <span className="text-gradient">Offer</span></>}
            subtitle="A comprehensive suite of digital and ICT solutions designed to grow your business, improve efficiency and keep you competitive."
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
          <div className="flex justify-center mt-10">
            <Button to="/services" size="lg">View All Services</Button>
          </div>
        </div>
      </section>

      {/* ── DASHBOARD ILLUSTRATION ── */}
      <section className="py-4 pb-20">
        <div className="section-wrapper">
          <DashboardIllustration />
        </div>
      </section>

      {/* ── APPROACH ── */}
      <ApproachSteps />

      {/* ── TRAINING TEASER ── */}
      <section className="py-24 bg-navy-600/15">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Tech Training Programs"
                title={<>Build a Profitable <span className="text-gradient">Tech Career</span></>}
                subtitle="We equip students, entrepreneurs and professionals with practical high-income digital skills through expert-led, hands-on training programs."
              />
              <div className="flex flex-wrap gap-2 mt-6 mb-8">
                {COURSE_TAGS.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-cyan/10 border border-cyan/30 text-cyan text-xs font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Button to="/training" size="lg">Explore Programs</Button>
            </div>

            <div className="space-y-3">
              {[
                ['🎯', 'Practical Hands-on Training', 'Learn by actually building real projects, not just theory.'],
                ['👨‍💻', 'Expert Mentorship', 'Guided by seasoned industry professionals throughout.'],
                ['💼', 'Job-ready Skills', 'Leave training ready to work or launch your own business.'],
                ['🚀', 'Career Support', 'We help you land your first client or job after graduation.'],
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex gap-4 items-start p-4 bg-navy-600/50 border border-navy-400/25 rounded-xl transition-all duration-300 hover:border-cyan/30">
                  <span className="text-xl shrink-0">{icon}</span>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1">{title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title={<>Build Your Future with <span className="text-gradient">Technology</span></>}
        subtitle="Whether you want to grow your business online or start a successful tech career, Allsmart Tech Hub is here to help you succeed."
        secondaryLabel="Our Services"
      />
    </>
  )
}
