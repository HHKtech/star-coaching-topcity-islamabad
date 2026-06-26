const points = [
  {
    title: 'Dedicated Attention',
    desc: 'Every student receives focused, undivided attention throughout each session.',
  },
  {
    title: 'Clear Explanations',
    desc: 'Complex concepts broken down into simple, easy-to-understand explanations.',
  },
  {
    title: 'Progress Tracking',
    desc: 'Regular assessments to monitor improvement and adjust teaching strategies.',
  },
]

export default function FocusedCoachingSection() {
  return (
    <section className="section bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--sky-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
              Quality
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Focused <span className="gradient-text">Coaching</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
              Dedicated attention to every student with clear explanations to strengthen understanding and regular progress tracking to ensure improvement.
            </p>

            <div className="space-y-4">
              {points.map((point, i) => (
                <div
                  key={point.title}
                  className="reveal flex items-start gap-4 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--sky-500)]/30 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 flex items-center justify-center text-[var(--primary-dark)] font-bold flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text)] mb-1">{point.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--purple-500)]/20 to-[var(--sky-500)]/20 p-1">
              <div className="bg-[var(--bg)] rounded-[22px] p-8 sm:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-center items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple-500)]/5 to-[var(--sky-500)]/5" />
                <div className="relative z-10">
                  <div className="text-7xl sm:text-8xl mb-6 animate-float">🎯</div>
                  <h3 className="text-3xl font-bold text-[var(--text)] mb-3">Focused Learning</h3>
                  <p className="text-[var(--text-secondary)] max-w-xs mx-auto">
                    No distractions. No crowds. Just you and your goals.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mt-8 max-w-xs mx-auto">
                    <div className="p-3 rounded-xl bg-[var(--bg-alt)]">
                      <p className="text-lg font-bold gradient-text">1:1</p>
                      <p className="text-[10px] text-[var(--text-muted)]">Ratio</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[var(--bg-alt)]">
                      <p className="text-lg font-bold gradient-text">100%</p>
                      <p className="text-[10px] text-[var(--text-muted)]">Attention</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[var(--bg-alt)]">
                      <p className="text-lg font-bold gradient-text">0</p>
                      <p className="text-[10px] text-[var(--text-muted)]">Distractions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}