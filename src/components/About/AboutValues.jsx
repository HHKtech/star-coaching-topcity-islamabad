const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'Passion for Teaching',
    desc: 'Every student is unique. I adapt my teaching style to match how your child learns best — visual, practical, or concept-first.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Results Driven',
    desc: 'I track progress through regular assessments and past paper practice. My students consistently achieve outstanding grades in board exams.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Scheduling',
    desc: 'Home tuition at your convenience in Islamabad. No rigid timings — classes scheduled around your child\'s routine and comfort.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Always Available',
    desc: 'Got a question before an exam? I am just a WhatsApp message away. Quick doubt clearance is part of the package.',
  },
]

export default function AboutValues() {
  return (
    <section className="section bg-[var(--bg)]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How I <span className="gradient-text">Teach</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Principles that guide every lesson and every student interaction.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {v.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-[var(--text)]">{v.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}