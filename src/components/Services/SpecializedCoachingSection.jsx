const specializations = [
  {
    icon: '📚',
    title: 'Urdu Literature',
    desc: 'In-depth study of Urdu prose, poetry, and grammar for F.Sc and Bachelor students.',
    level: 'F.Sc & Bachelor',
  },
  {
    icon: '📖',
    title: 'English Literature',
    desc: 'Advanced analysis of English texts, poetry, and critical writing skills.',
    level: 'F.Sc & Bachelor',
  },
  {
    icon: '🎓',
    title: 'Higher-Level Mentoring',
    desc: 'Advanced mentoring for higher-level academic needs and competitive exams.',
    level: 'Advanced',
  },
]

export default function SpecializedCoachingSection() {
  return (
    <section className="section bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--sky-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
            Advanced
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Specialized <span className="gradient-text">Coaching</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Advanced mentoring for higher-level academic needs in literature and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specializations.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:shadow-xl hover:shadow-[var(--purple-500)]/5 hover:-translate-y-2 transition-all duration-500 text-center"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-[var(--sky-500)] to-[var(--purple-500)] opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--bg-alt)] text-[var(--primary-dark)] mb-3">
                {item.level}
              </span>
              <h3 className="font-bold text-xl text-[var(--text)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}