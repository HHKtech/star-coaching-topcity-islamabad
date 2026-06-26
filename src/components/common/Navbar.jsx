import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import starLogo from '../../assets/star_logo.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleServicesClick = (e) => {
    if (location.pathname !== '/') {
      // Will navigate to home with hash, App.jsx handles scroll
      return
    }
    e.preventDefault()
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services'},
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => {
    if (path === '/#services') return location.pathname === '/' && location.hash === '#services'
    return location.pathname === path
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-black/5 dark:border-white/5 backdrop-blur-md ${
    scrolled 
      ? 'glass shadow-lg py-3' 
      : 'bg-white/40 dark:bg-slate-950/40 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* <div className="absolute inset-0 rounded-lg gradient-bg opacity-90 group-hover:opacity-100 transition-opacity" /> */}
              {/* <span className="relative text-white font-bold text-lg">★</span> */}
              <img src={starLogo} alt="STAR" className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight gradient-text leading-none">STAR</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase leading-none mt-0.5">
                Coaching
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={link.onClick}
                className={`relative text-sm font-medium transition-colors animated-underline ${
                  isActive(link.path) ? 'text-[var(--primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm !py-2.5 !px-5">
              <span>Book Free Demo</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--bg-alt)] transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-3.5 relative flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full bg-[var(--text)] transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block h-0.5 rounded-full bg-[var(--text)] transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-0.5 rounded-full bg-[var(--text)] transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 glass border-t border-[var(--border)] overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => {
                link.onClick?.(e)
                setIsOpen(false)
              }}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive(link.path)
                  ? 'bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-alt)] hover:text-[var(--text)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-center mt-2">
            <span>Book Free Demo</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}