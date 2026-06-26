import { Link } from 'react-router-dom'
import starLogo from '../../assets/star_logo.svg'

const footerLinks = {
  subjects: [
    { name: 'Mathematics', path: '/services' },
    { name: 'Physics', path: '/services' },
    { name: 'Chemistry', path: '/services' },
    { name: 'Biology', path: '/services' },
    { name: 'Urdu', path: '/services' },
    { name: 'English', path: '/services' },
  ],
  pages: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ],
}

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/923426556877',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:asifazizqureshi@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer 
  className="bg-[#F0F4FF] dark:bg-[#0B1120] text-[var(--text)] 
             relative overflow-hidden 
             border-t border-[var(--border)] dark:border-white/10 
             shadow-[0_-4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.4)]
             transition-all duration-500"
>
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={starLogo} alt="STAR" className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight gradient-text leading-none">
                  STAR
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase leading-none mt-0.5">
                  Coaching
                </span>
              </div>
            </Link>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-xs">
              Personalized home tuition in Islamabad for Grade 5 to Matric. Focused guidance in sciences and languages.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-xl bg-[var(--surface)] dark:bg-white/5 border border-[var(--border)] dark:border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] dark:hover:text-white hover:bg-gradient-to-br hover:from-[var(--sky-500)] hover:to-[var(--purple-500)] hover:border-transparent transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-[var(--text)] dark:text-white">Subjects</h4>
            <ul className="space-y-3">
              {footerLinks.subjects.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[var(--text-muted)] hover:text-[var(--sky-500)] dark:hover:text-[var(--sky-400)] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-[var(--text)] dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[var(--text-muted)] hover:text-[var(--sky-500)] dark:hover:text-[var(--sky-400)] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-[var(--text)] dark:text-white">Get Started</h4>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Ready to help your child excel? Book a free trial class today.
            </p>
            <Link to="/contact" className="btn-primary !py-2.5 !px-4 !text-sm inline-flex">
              <span>Book Free Trial</span>
            </Link>
            <div className="mt-4 space-y-1 text-xs text-[var(--text-muted)]">
              <p>📍 TopCity, Islamabad</p>
              <p>📞 0342-6556877</p>
              <p>✉️ asifazizqureshi@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} STAR Coaching. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Built with care in Islamabad 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  )
}