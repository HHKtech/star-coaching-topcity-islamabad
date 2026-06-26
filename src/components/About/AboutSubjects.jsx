const scienceSubjects = [
  { name: 'Physics', icon: '⚛️', desc: 'Concepts to calculations' },
  { name: 'Chemistry', icon: '🧪', desc: 'Organic & inorganic' },
  { name: 'Biology', icon: '🧬', desc: 'Life sciences' },
  { name: 'Mathematics', icon: '📐', desc: 'Problem-solving' },
]

const languageSubjects = [
  { name: 'Urdu', icon: '📖', desc: 'Literature & grammar' },
  { name: 'English', icon: '📝', desc: 'Language skills' },
]

export default function AboutSubjects() {
  return (
    <section className="section bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--sky-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Subjects I <span className="gradient-text">Teach</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Comprehensive coaching tailored for Middle School and Matric students.
          </p>
        </div>

        {/* Science Group */}
        <div className="mb-10 reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary-dark)] px-3 py-1 rounded-full bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 border border-[var(--sky-500)]/20">
              Science
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {scienceSubjects.map((subject, i) => (
              <div
                key={subject.name}
                className="reveal p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{subject.icon}</div>
                <p className="font-bold text-[var(--text)] mb-1">{subject.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{subject.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Group */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--purple-500)] px-3 py-1 rounded-full bg-gradient-to-r from-[var(--purple-500)]/10 to-[var(--sky-500)]/10 border border-[var(--purple-500)]/20">
              Languages
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            {languageSubjects.map((subject, i) => (
              <div
                key={subject.name}
                className="reveal p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group"
                style={{ transitionDelay: `${(i + 4) * 100}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{subject.icon}</div>
                <p className="font-bold text-[var(--text)] mb-1">{subject.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{subject.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}