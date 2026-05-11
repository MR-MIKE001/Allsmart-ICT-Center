import { NavLink, Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { useNavMenu } from '@/hooks/useNavMenu'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/data/navigation'

function HamburgerIcon({ isOpen }) {
  return (
    <div className="flex flex-col gap-[5px] w-6">
      <span className={cn('block h-0.5 bg-slate-300 rounded transition-all duration-300', isOpen && 'rotate-45 translate-y-[7px]')} />
      <span className={cn('block h-0.5 bg-slate-300 rounded transition-all duration-300', isOpen && 'opacity-0')} />
      <span className={cn('block h-0.5 bg-slate-300 rounded transition-all duration-300', isOpen && '-rotate-45 -translate-y-[7px]')} />
    </div>
  )
}

export function Navbar() {

  const { isOpen, toggle, close } = useNavMenu()

  return (
    <nav className={cn(
      'fixed bg-gray-700 top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4',
   
    )}>
      <div className="section-wrapper flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={close} className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Allsmart Tech Hub" className="h-11 w-auto" />
          <div className="hidden sm:block">
            <div className="font-display font-bold text-white text-base leading-tight group-hover:text-cyan transition-colors duration-300">
              Allsmart
            </div>
            <div className="text-cyan text-[10px] font-bold tracking-[0.15em] uppercase leading-none">
              Tech Hub
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => cn(
                'px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                isActive
                  ? 'text-cyan bg-cyan/10'
                  : 'text-slate-400 hover:text-white hover:bg-navy-600/50'
              )}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" size="md" className="ml-3">
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggle}
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors z-[60]"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <HamburgerIcon isOpen={isOpen} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={cn(
        'lg:hidden fixed inset-0 bg-navy-900/98 nav-blur transition-all duration-300 z-50',
        'flex flex-col items-center justify-center gap-6',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        {NAV_LINKS.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={close}
            className={({ isActive }) => cn(
              'text-xl font-display font-bold transition-colors duration-200',
              isActive ? 'text-cyan' : 'text-slate-300 hover:text-white'
            )}
          >
            {link.label}
          </NavLink>
        ))}
        <Button to="/contact" size="lg" onClick={close} className="mt-4">
          Get Started
        </Button>
      </div>
    </nav>
  )
}
