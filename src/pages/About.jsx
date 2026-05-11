import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ValueCard } from '@/components/ui/Card'
import { PageHero } from '@/components/layout/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { NetworkIllustration, TeamIllustration } from '@/components/illustrations'
import teamMembers from '../data/teamMembers'
import { TeamCard } from '../components/cards/TeamCard'

const VALUES = [
  { icon: '💡', title: 'Innovation', description: 'We embrace modern technology and creative thinking to deliver forward-looking solutions that keep our clients ahead.' },
  { icon: '🏆', title: 'Excellence', description: 'We are committed to quality service delivery and the highest professional standards in everything we produce.' },
  { icon: '🤝', title: 'Integrity', description: 'We operate with honesty, transparency, and full accountability in every engagement and relationship.' },
  { icon: '🚀', title: 'Empowerment', description: 'We believe technology should create real opportunities, increase productivity, and improve lives for everyone.' },
]

const WHY_EXIST = [
  { icon: '🌍', title: 'Closing the Digital Divide', desc: 'We reduce the gap between technology leaders and businesses being left behind.' },
  { icon: '🎓', title: 'Solving the Skills Shortage', desc: 'We produce job-ready tech professionals that industry urgently needs right now.' },
  { icon: '💼', title: 'Enabling Business Growth', desc: 'We give entrepreneurs the digital tools to compete at any level, any market.' },
  { icon: '🔒', title: 'Addressing Security Gaps', desc: 'We protect organisations from the growing wave of cybersecurity threats.' },
]

export default function About() {
  return (
    <>
      <PageHero
        badge="About Allsmart Tech Hub"
        title={<>Technology That <span className="text-gradient">Transforms Lives</span></>}
        subtitle="A modern technology company delivering innovative digital solutions and practical ICT training for businesses, students, entrepreneurs, and professionals across Nigeria."
      />

      {/* ── WHO WE ARE ── */}
      <section className="py-24">
        <div className="section-wrapper grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Who We Are"
              title={<>About <span className="text-gradient">Allsmart Tech Hub</span></>}
            />
            <div className="space-y-4 mt-6">
              <p className="text-slate-400 leading-relaxed">
                Allsmart Tech Hub is a modern technology company focused on delivering innovative digital solutions and practical ICT training for businesses, students, entrepreneurs, and professionals.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our mission is to empower individuals and organisations with the tools, skills, and technology needed to thrive in today's digital economy.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We believe technology should not only solve problems but also create opportunities, increase productivity, and improve lives across every sector.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/contact" size="lg">Partner With Us</Button>
            </div>
          </div>
          <div className="animate-float">
            <NetworkIllustration />
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-24 bg-navy-600/15">
        <div className="section-wrapper">
          <SectionHeader badge="Our Direction" title={<>Vision & <span className="text-gradient">Mission</span></>} centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Vision */}
            <div className="relative overflow-hidden bg-gradient-hero border border-navy-400/30 rounded-2.5xl p-7">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan/8" />
              <h3 className="font-display font-bold text-cyan text-xl mb-3 relative">🎯 Our Vision</h3>
              <p className="text-slate-400 leading-relaxed relative">
                To become a leading ICT and digital solutions hub recognised for excellence, innovation, and impactful tech education across Africa and beyond.
              </p>
            </div>
            {/* Mission */}
            <div className="relative overflow-hidden bg-gradient-hero border border-navy-400/30 rounded-2.5xl p-7">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand-500/8" />
              <h3 className="font-display font-bold text-cyan text-xl mb-3 relative">🎯 Our Mission</h3>
              <ul className="space-y-2 relative">
                {['Provide reliable and affordable technology solutions', 'Equip individuals with practical digital skills', 'Support businesses with smart digital transformation', 'Create opportunities through innovation and technology'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                    <span className="text-cyan font-bold shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section className="py-24">
        <div className="section-wrapper grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-3 order-2 lg:order-1">
            {WHY_EXIST.map(item => (
              <div key={item.title} className="flex gap-4 items-start p-5 bg-navy-600/50 border border-navy-400/25 rounded-xl transition-all duration-300 hover:border-cyan/35 hover:shadow-glow-cyan">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-display font-bold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              badge="Why We Exist"
              title={<>Bridging the <span className="text-gradient">Technology Gap</span></>}
              subtitle="Many businesses in Nigeria struggle with online visibility, digital operations, and modern technology adoption. At Allsmart Tech Hub, we bridge that gap."
            />
            <p className="text-slate-400 text-sm leading-relaxed mt-4 mb-8">
              We also train the next generation of tech professionals with hands-on experience and industry-relevant skills that are immediately applicable in the real world — turning ambition into income.
            </p>
            <Button to="/services" size="lg">Our Services</Button>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-navy-600/15">
        <div className="section-wrapper">
          <SectionHeader
            badge="Our Team"
            title={<>The Professionals Behind the <span className="text-gradient">Hub</span></>}
            subtitle="Passionate experts combining technology knowledge with real-world business experience to deliver outstanding results."
            centered
          />
          <div className=" mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {
            teamMembers.map(v => (
              <TeamCard key={v.name} image={v.image} name={v.name} role={v.role} description={v.description} />
            ))
           }
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24">
        <div className="section-wrapper">
          <SectionHeader
            badge="Core Values"
            title={<>What We <span className="text-gradient">Stand For</span></>}
            subtitle="These principles guide every decision we make, every solution we build, and every relationship we nurture."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12 max-w-3xl mx-auto">
            {VALUES.map(v => (
              <ValueCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        badge="Work With Us"
        title={<>Let's Build Something <span className="text-gradient">Remarkable</span></>}
        subtitle="Partner with Allsmart Tech Hub and discover smart digital solutions designed for modern businesses and future tech professionals."
        secondaryLabel="Our Services"
      />
    </>
  )
}
