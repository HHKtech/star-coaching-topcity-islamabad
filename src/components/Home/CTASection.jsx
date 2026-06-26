import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="section bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--purple-500)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--sky-500)]/10 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Give Your Child the <span className="gradient-text">Academic Edge</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Let's unlock your child's true potential. Contact today to schedule a trial session and experience the difference!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base">
              <span>Book Free Trial Class</span>
            </Link>
            <a href="tel:03426556877" className="btn-secondary text-base">
              Call: 0342-6556877
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}