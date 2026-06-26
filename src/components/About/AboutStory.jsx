import { Link } from 'react-router-dom'
import teacher from '../../assets/teacher.png'
import TiltCard from '../common/TiltCard.jsx'

const noList = [
  {
    text: 'No rigid batch system',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    text: 'No rushing through chapters',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: 'Just focused, personalized learning at the convenience of your home',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
]

export default function AboutStory() {
  return (
    <section className="section bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--sky-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Learn With Me?
            </h2>

            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-8">
              <p>
                I began tutoring with a simple belief: <strong className="text-[var(--text)]">every student has the potential to achieve top grades — they just need the right guidance.</strong> Over the past <strong className="text-[var(--text)]">3+ years</strong>, I have successfully helped students improve their performance and shine in exams.
              </p>
              <p>
                Whether you're struggling with a specific topic or need complete syllabus coverage, I design a <strong className="text-[var(--text)]">study plan around YOU</strong>.
              </p>
            </div>

            {/* 3 Cards */}
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {noList.map((item, i) => (
                <div
                  key={item.text}
                  className="reveal relative p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--sky-500)]/30 hover:shadow-lg hover:shadow-[var(--sky-500)]/5 hover:-translate-y-1 transition-all duration-500 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-[var(--sky-500)] to-[var(--purple-500)] opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 flex items-center justify-center text-[var(--primary-dark)] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                <span>Book a Free Trial</span>
              </Link>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="reveal relative">
            <TiltCard className="rounded-3xl" tiltAmount={8}>
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 p-8 sm:p-12 backdrop-blur-sm">
              <div className="absolute -top-3 left-6 sm:left-8 px-4 py-1.5 rounded-full bg-[var(--surface)]/80 backdrop-blur border border-[var(--border)] shadow-sm text-xs font-semibold text-[var(--sky-500)] animate-float">
                Islamabad Based
              </div>
              <div
                className="absolute -bottom-3 right-6 sm:right-8 px-4 py-1.5 rounded-full bg-[var(--surface)]/80 backdrop-blur border border-[var(--border)] shadow-sm text-xs font-semibold text-[var(--purple-500)] animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                Home Tuition
              </div>

              <div className="text-center">
                {/* <div className="text-7xl sm:text-8xl mb-6 animate-float">👨‍🏫</div> */}
                {/* <img src={study} alt="Tutor" className="w-32 h-32 mx-auto mb-6 rounded-2xl object-cover animate-float" /> */}
                {/* <img src={teacher} alt="Tutor" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 rounded-2xl object-cover animate-float" /> */}
                <img 
  src={teacher} 
  alt="Tutor" 
  className="w-full max-w-[320px] sm:max-w-[380px] h-auto mx-auto mb-6 rounded-xl animate-float" 
/>
                <h3 className="text-3xl font-bold text-[var(--text)] mb-1">3+ Years</h3>
                <p className="text-[var(--text-secondary)]">Of dedicated tutoring experience</p>

                <div className="flex justify-center items-center gap-6 mt-8">
                  <div className="text-center">
                    <p className="text-xl font-bold gradient-text">50+</p>
                    <p className="text-xs text-[var(--text-muted)]">Students</p>
                  </div>
                  <div className="w-px h-8 bg-[var(--border)]" />
                  <div className="text-center">
                    <p className="text-xl font-bold gradient-text">95%</p>
                    <p className="text-xs text-[var(--text-muted)]">Success</p>
                  </div>
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