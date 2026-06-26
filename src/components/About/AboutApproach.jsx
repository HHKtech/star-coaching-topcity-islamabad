const approaches = [
  {
    title: 'Clear Explanations',
    desc: 'Strengthen understanding with simple, concept-first teaching that makes even complex topics easy to grasp.',
  },
  {
    title: 'Regular Assessments',
    desc: 'Track progress through chapter-wise tests and quizzes to identify gaps and measure improvement over time.',
  },
  {
    title: 'Exam-Focused Prep',
    desc: 'Past paper practice and proven exam strategies to maximize board exam scores and build time management skills.',
  },
  {
    title: 'Supportive Mentoring',
    desc: 'Build confidence through encouraging guidance and direct WhatsApp support for instant doubt clarification.',
  },
]

export default function AboutApproach() {
  return (
    <section className="section bg-[var(--bg)]] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--purple-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
            Method
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Approach</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            A structured yet flexible teaching methodology designed around your child's success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--sky-500)] via-[var(--purple-500)] to-[var(--sky-500)] opacity-30 rounded-full hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {approaches.map((item, i) => (
              <div
                key={item.title}
                className="reveal relative flex items-start gap-4 sm:gap-8 group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg shadow-[var(--sky-500)]/20 group-hover:scale-110 group-hover:shadow-[var(--purple-500)]/30 transition-all duration-500">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Content Card */}
                <div className="flex-1 p-5 sm:p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--sky-500)]/30 hover:shadow-lg hover:shadow-[var(--sky-500)]/5 transition-all duration-500 group-hover:-translate-y-1">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-[var(--text)] group-hover:text-[var(--primary-dark)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}