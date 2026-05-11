import { Link } from 'react-router-dom'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/data/navigation'

const SOCIAL_ICONS = {
  'Facebook': (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  'Instagram': (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  'X / Twitter': (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  'LinkedIn': (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-800 border-t border-navy-400/20">
      <div className="section-wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img src="/logo.png" alt="Allsmart Tech Hub" className="h-11 w-auto" />
              <div>
                <div className="font-display font-bold text-white text-sm leading-tight">Allsmart</div>
                <div className="text-cyan text-[9px] font-bold tracking-[0.15em] uppercase">Tech Hub</div>
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-[280px]">
              Empowering the next generation of tech professionals and digital innovators across Abia and Nigeria.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-navy-600/60 border border-navy-400/30 flex items-center justify-center text-slate-400 hover:bg-gradient-accent hover:text-navy-900 hover:border-transparent transition-all duration-300 hover:-translate-y-0.5"
                >
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-display font-bold text-white text-xs tracking-[0.12em] uppercase mb-4">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map(l => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="text-sm text-slate-500 hover:text-cyan transition-colors duration-200 hover:pl-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-display font-bold text-white text-xs tracking-[0.12em] uppercase mb-4">Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className="text-sm text-slate-500 hover:text-cyan transition-colors duration-200 hover:pl-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-bold text-white text-xs tracking-[0.12em] uppercase mb-4">Contact</h4>
            <ul className="space-y-2.5 mb-5">
              <li>
                <a href="mailto: info@Allsmarttechhub.com" className="text-sm text-slate-500 hover:text-cyan transition-colors duration-200">
                  info@Allsmarttechhub.com
                </a>
              </li>
              <li>
                <a href="tel:+2349060860993" className="text-sm text-slate-500 hover:text-cyan transition-colors duration-200">
                  +234 906 086 0993
                </a>
              </li>
              <li>
                <a href="tel:+2349123090987" className="text-sm text-slate-500 hover:text-cyan transition-colors duration-200">
                  +234 912 309 0987
                </a>
              </li>
              <li><span className="text-sm text-slate-500">No 80 School Road By Asa Road, 2nd Floor, Mtn Building, Opp CKC Aba, Abia State, Nigeria</span></li>
            </ul>
            <div className="text-xs text-slate-600 space-y-1 leading-relaxed">
              <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-400/15">
        <div className="section-wrapper py-4 text-center">
          <p className="text-xs text-slate-600">
            © {year} Allsmart Tech Hub. All rights reserved. — Abia State, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  )
}
