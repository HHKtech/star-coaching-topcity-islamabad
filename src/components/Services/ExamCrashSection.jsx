import { Link } from 'react-router-dom'

const phases = [
  {
    week: 'Week 1-2',
    title: 'Rapid Concept Review',
    desc: 'Intensive revision of all key concepts and fundamentals.',
  },
  {
    week: 'Week 3-4',
    title: 'Predicted Questions',
    desc: 'Focus on high-probability exam questions and patterns.',
  },
  {
    week: 'Week 5-6',
    title: 'Mock Test Practice',
    desc: 'Timed mock tests to build confidence and exam readiness.',
  },
  {
    week: 'Week 7-8',
    title: 'Final Polish',
    desc: 'Last-minute tips, strategies, and confidence building.',
  },
]

export default function ExamCrashSection() {
  return (
    <section className="section bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--purple-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
            Intensive
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Exam <span className="gradient-text">Crash Courses</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            4–8 week revision programs designed for maximum results before final exams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--sky-500)] via-[var(--purple-500)] to-[var(--sky-500)] opacity-30 rounded-full" />
          
          <div className="space-y-8 md:space-y-12">
            {phases.map((phase, i) => (
              <div
                key={phase.week}
                className={`reveal relative flex items-center gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--sky-500)]/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-2">
                      {phase.week}
                    </span>
                    <h3 className="font-bold text-lg text-[var(--text)] mb-1">{phase.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{phase.desc}</p>
                  </div>
                </div>

                <div className="hidden md:flex relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] items-center justify-center text-white font-bold shadow-lg shadow-[var(--sky-500)]/20 flex-shrink-0">
                  {i + 1}
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 reveal">
          <Link to="/contact" className="btn-primary">
            <span>Enroll in Crash Course</span>
          </Link>
        </div>
      </div>
    </section>
  )
}