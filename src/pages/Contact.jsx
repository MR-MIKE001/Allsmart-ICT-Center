import { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/layout/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { MapIllustration } from '@/components/illustrations'

const SERVICES_LIST = [
  'ICT Consultancy', 'Web Development', 'Digital Marketing',
  'Graphics Design & Branding', 'AI Engineering & Automation',
  'Data Analysis', 'Cybersecurity', 'Solar & CCTV Installation',
  'Tech Training Program', 'Other',
]

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'info@allsmarttechhub.com',
    href: 'mailto:info@allsmarttechhub.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+234 XXX XXX XXXX',
    href: 'tel:+234XXXXXXXXXX',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Address',
    value: 'Lagos, Nigeria',
    href: null,
  },
]

const FAQ = [
  { q: 'How quickly do you respond?', a: 'We typically respond to all inquiries within 24 hours on business days.' },
  { q: 'Do you offer free consultations?', a: 'Yes! We offer a free 30-minute consultation to understand your needs before quoting.' },
  { q: 'Can I pay in instalments for training?', a: 'Yes, we have flexible payment plans available for all training programs.' },
  { q: 'Do you work with startups?', a: 'Absolutely. We love working with early-stage businesses and tailor our solutions to fit any budget.' },
]

function ContactInfoItem({ icon, label, value, href }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-card border border-cyan/30 flex items-center justify-center text-cyan">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-0.5">{label}</p>
        {href
          ? <a href={href} className="text-slate-200 text-sm hover:text-cyan transition-colors">{value}</a>
          : <p className="text-slate-200 text-sm">{value}</p>
        }
      </div>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => { e.preventDefault(); setSent(true) }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-navy-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 text-sm mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        <Button onClick={() => setSent(false)} variant="navy">Send Another</Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-1">
      <h3 className="font-display font-bold text-xl text-white mb-1">Send Us a Message</h3>
      <p className="text-slate-400 text-sm mb-5">Fill out the form and we'll respond promptly.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Full Name</label>
          <input name="name" type="text" placeholder="John Doe" value={form.name} onChange={onChange} required className="form-input" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Email Address</label>
          <input name="email" type="email" placeholder="john@example.com" value={form.email} onChange={onChange} required className="form-input" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Phone Number</label>
          <input name="phone" type="tel" placeholder="+234 XXX XXX XXXX" value={form.phone} onChange={onChange} className="form-input" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Service of Interest</label>
          <select name="service" value={form.service} onChange={onChange} className="form-input">
            <option value="">Select a service…</option>
            {SERVICES_LIST.map(s => <option key={s} className="bg-navy-700">{s}</option>)}
          </select>
        </div>
      </div>

      <div className="pt-1">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Message</label>
        <textarea name="message" placeholder="Tell us about your project or inquiry…" value={form.message} onChange={onChange} required className="form-input min-h-[130px] resize-y" />
      </div>

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full" icon={
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        }>
          Send Message
        </Button>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        badge="Get In Touch"
        title={<>Contact <span className="text-gradient">Allsmart Tech Hub</span></>}
        subtitle="We'd love to hear from you. Whether you need digital solutions, professional ICT services, or tech training — our team is ready to help."
      />

      {/* ── CONTACT LAYOUT ── */}
      <section className="py-24">
        <div className="section-wrapper grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display font-bold text-xl text-white">Reach Out to Us</h3>
            <div className="space-y-5">
              {CONTACT_INFO.map(item => (
                <ContactInfoItem key={item.label} {...item} />
              ))}
            </div>
            {/* Hours */}
            <div className="bg-navy-600/50 border border-navy-400/25 rounded-xl p-5">
              <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Business Hours</h5>
              {[['Monday – Friday', '8:00 AM – 6:00 PM'], ['Saturday', '9:00 AM – 4:00 PM'], ['Sunday', 'Closed']].map(([d, t]) => (
                <div key={d} className="flex justify-between py-2 border-b border-navy-400/15 last:border-0 text-sm text-slate-500">
                  <span>{d}</span><span>{t}</span>
                </div>
              ))}
            </div>
            {/* Map */}
            <MapIllustration />
            {/* Social */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {['Facebook', 'Instagram', 'X (Twitter)', 'LinkedIn'].map(s => (
                  <a key={s} href="#"
                    className="px-3.5 py-1.5 bg-navy-600/60 border border-navy-400/30 rounded-full text-xs font-semibold text-slate-400 hover:border-cyan hover:text-cyan transition-all duration-200">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3 bg-navy-600/40 border border-navy-400/25 rounded-2.5xl p-7 md:p-9">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-navy-600/15">
        <div className="section-wrapper">
          <SectionHeader
            badge="FAQ"
            title={<>Common <span className="text-gradient">Questions</span></>}
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-navy-600/50 border border-navy-400/25 rounded-xl p-5">
                <h4 className="font-display font-bold text-cyan text-sm mb-2">{q}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        badge="Ready to Transform?"
        title={<>Ready to Grow with <span className="text-gradient">Technology?</span></>}
        subtitle="Partner with Allsmart Tech Hub today and discover smart digital solutions for modern businesses."
        primaryLabel="Our Services"
        primaryTo="/services"
        secondaryLabel="Training Programs"
        secondaryTo="/training"
      />
    </>
  )
}
