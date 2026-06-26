const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Personalized Guidance',
    desc: 'Tailored to each student\'s pace and learning style for maximum understanding.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Weak Topic Identification',
    desc: 'Targeted improvement plans focusing on areas that need the most attention.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Custom Worksheets',
    desc: 'Practice materials designed for reinforcement and skill building.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'WhatsApp Support',
    desc: 'Direct WhatsApp support for instant doubt clarification anytime.',
  },
]

export default function MentoringSection() {
  return (
    <section className="section bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--purple-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
            Approach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            One-on-One <span className="gradient-text">Mentoring</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Personalized attention tailored to your learning pace with dedicated support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={item.title}
              className="reveal group p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:shadow-xl hover:shadow-[var(--sky-500)]/5 hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] flex items-center justify-center text-white mb-5 shadow-lg shadow-[var(--sky-500)]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-[var(--text)] group-hover:text-[var(--primary-dark)] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}