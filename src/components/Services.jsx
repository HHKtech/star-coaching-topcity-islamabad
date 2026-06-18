import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TiltCard from './TiltCard.jsx'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'O-Level Tutoring',
    desc: 'Comprehensive Cambridge O-Level prep in Sciences, Maths, and English. Past paper practice, concept clarity, and exam techniques that deliver A* grades.',
    color: 'from-[var(--sky-500)] to-[var(--sky-400)]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347 48.62 48.62 0 008.232 4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.499 5.221 69.494 69.494 0 00-2.658.814m-15.482 0a50.699 50.699 0 012.658-.814" />
      </svg>
    ),
    title: 'A-Level Tutoring',
    desc: 'Advanced level coaching for Physics, Chemistry, Biology, and Mathematics. In-depth syllabus coverage, topical revisions, and intensive past paper solving.',
    color: 'from-[var(--indigo-500)] to-[var(--indigo-400)]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'Matric & FSc Prep',
    desc: 'Federal and Sindh board preparation with focused notes, shortcut methods, and chapter-wise test sessions to maximize your board exam scores.',
    color: 'from-[var(--purple-500)] to-[var(--purple-400)]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Exam Crash Course',
    desc: 'Intensive 4-8 week revision programs before final exams. Rapid concept review, predicted questions, and timed mock tests for maximum confidence.',
    color: 'from-[var(--sky-500)] to-[var(--indigo-500)]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Online Classes',
    desc: 'Live interactive sessions via Zoom with digital whiteboard, screen sharing, and recorded lectures for revision. Learn from anywhere in Pakistan.',
    color: 'from-[var(--indigo-500)] to-[var(--purple-500)]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'One-on-One Mentoring',
    desc: 'Personalized attention tailored to your learning pace. Weak topic identification, custom worksheets, and direct WhatsApp support for doubts.',
    color: 'from-[var(--purple-500)] to-[var(--sky-500)]',
  },
]

export default function Services() {
  const [showCards, setShowCards] = useState(false)
  const [visibleCards, setVisibleCards] = useState({})
  const headingRef = useRef(null)

  // Trigger cards when heading scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !showCards) {
          setShowCards(true)
        }
      },
      { threshold: 0.3 }
    )

    if (headingRef.current) observer.observe(headingRef.current)
    return () => observer.disconnect()
  }, [showCards])

  // Staggered card reveal
  useEffect(() => {
    if (!showCards) return

    const timers = []
    services.forEach((_, i) => {
      const timer = setTimeout(() => {
        setVisibleCards(prev => ({ ...prev, [i]: true }))
      }, i * 250)
      timers.push(timer)
    })

    return () => timers.forEach(clearTimeout)
  }, [showCards])

  return (
    <section id="services" className="section bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--sky-500)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--purple-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
            Subjects I Teach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Classes Built for <span className="gradient-text">Your Grades</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            From Matric to A-Levels — focused tutoring that actually improves your marks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                visibleCards[index] 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 -translate-x-8 scale-95 pointer-events-none'
              }`}
            >
              <TiltCard className="group relative p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-transparent hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl`}>
                  {service.icon}
                </div>

                <h3 className="relative text-xl font-bold mb-3 text-[var(--text)] group-hover:text-[var(--primary-dark)] transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-[var(--text-secondary)] leading-relaxed text-sm">
                  {service.desc}
                </p>

                <Link
                  to="/contact"
                  className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--primary)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <span>Contact for details</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`} />
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}