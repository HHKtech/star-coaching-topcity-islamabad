import { Link } from 'react-router-dom'
import study from '../../assets/study.png'
import TiltCard from '../common/TiltCard.jsx'

const points = [
  'Advanced coaching in Physics, Chemistry, Biology, and Mathematics',
  'Complete syllabus coverage with in-depth explanations',
  'Topical revisions to strengthen understanding',
  'Intensive past paper practice for exam readiness',
]

export default function BoostSuccessSection() {
  return (
    <section className="section bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--sky-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
              Results
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Boost Confidence, <br />
              <span className="gradient-text">Improve Grades</span>,<br />
              Secure Success
            </h2>

            <ul className="space-y-4 mb-8">
              {points.map((point, i) => (
                <li
                  key={point}
                  className="reveal flex items-start gap-3"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary inline-flex">
              <span>Start Learning Today</span>
            </Link>
          </div>

          {/* Right: Clean Visual Card */}
          <div className="reveal">
            <TiltCard className="rounded-3xl" tiltAmount={8}>
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 p-8 sm:p-12 backdrop-blur-sm border border-[var(--border)] text-center">
              {/* <div className="text-6xl mb-4 animate-float">🎯</div> */}
              <img src={study} alt="Tutor" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 rounded-2xl object-cover animate-float" />
              
              <h3 className="text-2xl font-bold text-[var(--text)] mb-2">95% Success Rate</h3>
              <p className="text-[var(--text-secondary)] mb-8">Students achieving top grades with our focused approach</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <p className="text-2xl font-bold gradient-text">50+</p>
                  <p className="text-xs text-[var(--text-muted)]">Students Guided</p>
                </div>
                <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <p className="text-2xl font-bold gradient-text">3+</p>
                  <p className="text-xs text-[var(--text-muted)]">Years Experience</p>
                </div>
              </div>
            </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}