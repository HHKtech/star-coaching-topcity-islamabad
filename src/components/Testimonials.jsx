import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Aisha Khan',
    role: 'University Student',
    avatar: 'A',
    text: 'STAR Coaching completely transformed my approach to exams. I went from barely passing to topping my class. The personalized attention made all the difference.',
    rating: 5,
    color: 'from-[var(--sky-500)] to-[var(--indigo-500)]',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Software Engineer',
    avatar: 'B',
    text: 'The career coaching sessions helped me land my dream job at a top tech company. My mentor guided me through every interview round with confidence.',
    rating: 5,
    color: 'from-[var(--indigo-500)] to-[var(--purple-500)]',
  },
  {
    name: 'Sara Malik',
    role: 'Medical Student',
    avatar: 'S',
    text: 'Group workshops here are incredible. The collaborative environment helped me understand complex concepts I struggled with for months on my own.',
    rating: 5,
    color: 'from-[var(--purple-500)] to-[var(--sky-500)]',
  },
  {
    name: 'Omar Farooq',
    role: 'Entrepreneur',
    avatar: 'O',
    text: 'Personal growth coaching gave me the clarity I needed to start my own business. The mindset shifts I learned here are priceless.',
    rating: 4,
    color: 'from-[var(--sky-500)] to-[var(--purple-500)]',
  },
  {
    name: 'Fatima Noor',
    role: 'CSS Aspirant',
    avatar: 'F',
    text: 'I cleared my CSS exam on the first attempt thanks to the structured preparation plan. The mock interviews and feedback were game changers.',
    rating: 5,
    color: 'from-[var(--indigo-500)] to-[var(--sky-500)]',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 transition-all duration-300 ${
            i < count ? 'text-[var(--sky-500)]' : 'text-[var(--border)]'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isAutoPlaying])

  const handleDotClick = (index) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="section bg-[var(--bg-alt)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--sky-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Students</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Real stories from real people who transformed their lives with us.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto reveal">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl p-8 sm:p-12 min-h-[320px] flex items-center">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-8xl font-serif text-[var(--sky-500)]/10 leading-none select-none">
              "
            </div>

            <div className="relative w-full">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`transition-all duration-700 ${
                    i === activeIndex
                      ? 'opacity-100 translate-x-0 absolute inset-0 flex flex-col justify-center'
                      : i < activeIndex
                      ? 'opacity-0 -translate-x-12 absolute inset-0 pointer-events-none'
                      : 'opacity-0 translate-x-12 absolute inset-0 pointer-events-none'
                  }`}
                >
                  {/* Avatar + Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text)]">{t.name}</h4>
                      <p className="text-sm text-[var(--text-muted)]">{t.role}</p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <StarRating count={t.rating} />
                    </div>
                  </div>

                  {/* Mobile stars */}
                  <div className="sm:hidden mb-4">
                    <StarRating count={t.rating} />
                  </div>

                  {/* Quote */}
                  <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? 'w-8 bg-gradient-to-r from-[var(--sky-500)] to-[var(--purple-500)]'
                      : 'w-2 bg-[var(--border)] hover:bg-[var(--text-muted)]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}