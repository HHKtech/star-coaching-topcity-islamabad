import { Link } from 'react-router-dom'
import TypewriterHeading from '../components/TypewriterHeading.jsx'

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'Passion for Teaching',
    desc: 'Every student is unique. I adapt my teaching style to match how you learn best — whether that is visual, practical, or concept-first.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Results Driven',
    desc: 'I track progress through regular assessments and past paper practice. My students consistently achieve A and A* grades in board exams.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Learning',
    desc: 'Online classes for students across Pakistan, and in-person sessions in Karachi for those who prefer face-to-face learning.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Always Available',
    desc: 'Got a question at midnight before your exam? I am just a WhatsApp message away. Quick doubt clearance is part of the package.',
  },
]

const subjects = [
  'Mathematics (O/A Level)',
  'Physics (O/A Level)',
  'Chemistry (O/A Level)',
  'Biology (O/A Level)',
  'Additional Mathematics',
  'Matric Science Group',
  'FSc Pre-Medical',
  'FSc Pre-Engineering',
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-28 bg-[var(--bg-alt)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--sky-500)]/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
              About Me
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 min-h-[1.2em]">
              <TypewriterHeading
                speed={80}
                segments={[
                  { text: 'Your Tutor, ', className: '' },
                  { text: 'Your Mentor', className: 'gradient-text' },
                ]}
              />
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I am a dedicated tutor based in Karachi, specializing in O-Level, A-Level, and Matric subjects. With a focus on concept clarity and exam technique, I help students not just pass — but excel.
            </p>
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="section bg-[var(--bg)]">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Learn With Me?
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I started tutoring because I believe every student has the potential to score top grades — they just need the right guidance. Over the past 3+ years, I have helped students go from failing to scoring A and A* in their Cambridge and board exams.
                </p>
                <p>
                  Whether you are struggling with a specific topic or need full syllabus coverage, I build a study plan around YOU. No rigid batch system. No rushing through chapters. Just focused, personalized learning.
                </p>
                <p>
                  Classes are available both online (for students anywhere in Pakistan) and in-person in Karachi for select subjects.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4 text-[var(--text)]">Subjects I Teach</h3>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] border border-[var(--sky-500)]/20"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  <span>Book a Free Trial</span>
                </Link>
                <Link to="/" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <div className="bg-gradient-to-br from-[var(--sky-500)]/20 to-[var(--purple-500)]/20 rounded-3xl p-1 shadow-[0_0_0_2px_rgba(14,165,233,0.15)] dark:shadow-[0_0_0_2px_rgba(56,189,248,0.1)]">
                <div className="bg-[var(--bg)] rounded-[22px] h-80 sm:h-96 flex flex-col items-center justify-center relative overflow-hidden p-8 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--sky-500)]/5 to-[var(--purple-500)]/5" />
                  <span className="text-8xl animate-float mb-4">👨‍🏫</span>
                  <h3 className="text-2xl font-bold mb-2 text-[var(--text)]">3+ Years</h3>
                  <p className="text-[var(--text-secondary)]">Of dedicated tutoring experience</p>
                  
                  <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-sm text-xs font-semibold text-[var(--primary)] animate-float" style={{ animationDelay: '1s' }}>
                    Karachi Based
                  </div>
                  <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-sm text-xs font-semibold text-[var(--purple-500)] animate-float" style={{ animationDelay: '2s' }}>
                    Online + In-Person
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[var(--bg-alt)]">
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
    </div>
  )
}