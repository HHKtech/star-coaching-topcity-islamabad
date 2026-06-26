import { Link } from 'react-router-dom'

export default function AboutCTA() {
  return (
    <section className="section bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--sky-500)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--purple-500)]/10 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Unlock Your Child's <span className="gradient-text">True Potential</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact today to schedule a trial session and experience the difference!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              <span>Book Free Trial Class</span>
            </Link>
            <a href="tel:03426556877" className="btn-secondary text-base px-8 py-4">
              📞 Call: 0342-6556877
            </a>
          </div>

          {/* Contact Cards */}
          {/* <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="reveal p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--sky-500)]/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="text-2xl mb-2">📧</div>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">Email</p>
              <p className="text-sm text-[var(--text)] font-medium">asifazizqureshi@gmail.com</p>
            </div>
            <div className="reveal p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--purple-500)]/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: '100ms' }}>
              <div className="text-2xl mb-2">💬</div>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">WhatsApp</p>
              <p className="text-sm text-[var(--text)] font-medium">0342-6556877</p>
            </div>
            <div className="reveal p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--sky-500)]/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: '200ms' }}>
              <div className="text-2xl mb-2">📍</div>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">Location</p>
              <p className="text-sm text-[var(--text)] font-medium">TopCity, Islamabad</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}