const steps = [
  {
    number: '01',
    title: 'Comprehensive board exam preparation',
    desc: 'Full syllabus coverage with strategic planning for maximum scores.',
  },
  {
    number: '02',
    title: 'Focused notes and effective teaching methods',
    desc: 'Curated study material designed for quick revision and retention.',
  },
  {
    number: '03',
    title: 'Chapter-wise test sessions to track progress',
    desc: 'Regular assessments to identify gaps and measure improvement.',
  },
  {
    number: '04',
    title: 'Proven strategies to maximize board exam scores',
    desc: 'Exam techniques and time management for peak performance.',
  },
]

export default function AcademicExcellenceSection() {
  return (
    <section className="section bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--purple-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
            Method
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experienced Tutors for <span className="gradient-text">Academic Excellence</span>
          </h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-[var(--border)] rounded-full">
            <div className="h-full w-full rounded-full gradient-bg opacity-30" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="reveal relative pt-0 lg:pt-12"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] flex items-center justify-center text-white font-bold text-lg shadow-lg mb-6 mx-auto lg:mx-0">
                  {step.number}
                </div>

                <div className="text-center lg:text-left p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:shadow-lg transition-all duration-500">
                  <h3 className="font-bold text-[var(--text)] mb-2 text-sm sm:text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.desc}
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