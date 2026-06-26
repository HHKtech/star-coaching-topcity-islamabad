import { Link } from 'react-router-dom'
import TypewriterHeading from '../common/TypewriterHeading.jsx'
import TiltCard from '../common/TiltCard.jsx'

export default function HomeTuitionSection() {
  return (
    <section className="section bg-[var(--bg)] relative overflow-hidden pt-24 sm:pt-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--sky-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual Card */}
          <div className="reveal order-2 lg:order-1">
            <TiltCard className="rounded-3xl" tiltAmount={8}>
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 p-8 sm:p-12 backdrop-blur-sm border border-[var(--border)] text-center">
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-full bg-[var(--surface)]/80 backdrop-blur border border-[var(--border)] text-xs font-semibold text-[var(--sky-500)]">
                Personalized
              </div>

              <div className="text-6xl sm:text-7xl mb-6 animate-float">🏡</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-3">At Your Doorstep</h3>
              <p className="text-[var(--text-secondary)] max-w-xs mx-auto mb-8">
                Quality education delivered right to your home in Islamabad
              </p>
              
              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold gradient-text">Grade 5</p>
                  <p className="text-xs text-[var(--text-muted)]">to</p>
                  <p className="text-2xl sm:text-3xl font-bold gradient-text">Matric</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-1.5 rounded-full bg-[var(--surface)]/80 backdrop-blur border border-[var(--border)] text-xs font-semibold text-[var(--purple-500)]">
                Home Comfort
              </div>
            </div>
            </TiltCard>
          </div>

          {/* Right: Content */}
          <div className="reveal order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
              Core Service
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight min-h-[1.2em]">
              <TypewriterHeading
                speed={70}
                segments={[
                  { text: 'Home Tuition - ', className: '' },
                  { text: 'Learning Made', className: 'gradient-text' },
                  { text: ' Convenient', className: '' },
                ]}
              />
            </h1>
            
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              Teaching in the comfort of your own environment. We bring quality education right to your doorstep, ensuring personalized attention and academic success.
            </p>
            <Link to="/contact" className="btn-primary">
              <span>Book Home Tuition</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}