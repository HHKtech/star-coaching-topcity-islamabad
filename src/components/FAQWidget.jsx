import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    id: 1,
    question: 'Which subjects and grades do you teach?',
    answer: 'I specialize in O-Level, A-Level, and Matric subjects including Mathematics, Physics, Chemistry, and Biology. Both Cambridge and local board syllabi are covered.',
  },
  {
    id: 2,
    question: 'Are classes online or in-person?',
    answer: 'Both! I offer online classes via Zoom for students anywhere in Pakistan, and in-person sessions in Karachi for select subjects and locations.',
  },
  {
    id: 3,
    question: 'How much is the fee?',
    answer: 'Fees vary by subject and level. O-Level and Matric classes are affordably priced, with discounted packages for long-term students. Contact me for a custom quote.',
  },
  {
    id: 4,
    question: 'Can I get a trial class first?',
    answer: 'Absolutely! I offer a free trial class so you can see my teaching style and decide if it is the right fit before committing.',
  },
  {
    id: 5,
    question: 'Do you provide notes and past papers?',
    answer: 'Yes, I provide curated notes, topical worksheets, and past paper practice sets as part of the course material — no extra charges.',
  },
  {
    id: 6,
    question: 'What if I miss a class?',
    answer: 'No worries. Recorded sessions are available for online classes, and we can reschedule in-person sessions with advance notice.',
  },
]

export default function FAQWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  const [hasNotification, setHasNotification] = useState(true)
  const widgetRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleOpen = () => {
    setIsOpen(true)
    setHasNotification(false)
  }

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div
        className={`absolute bottom-16 right-0 w-[340px] sm:w-[380px] bg-[var(--surface)] rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden transition-all duration-500 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="gradient-bg p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
            ?
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">Quick Questions</h4>
            <p className="text-white/70 text-xs">Find answers instantly</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="ml-auto w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* FAQ List */}
        <div className="max-h-[400px] overflow-y-auto p-4 space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 border-[var(--sky-500)]/30'
                  : 'bg-[var(--bg-alt)] border-transparent hover:border-[var(--border)]'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-3 text-left gap-3"
              >
                <span className={`text-sm font-semibold transition-colors duration-300 ${
                  openIndex === index ? 'text-[var(--primary)]' : 'text-[var(--text)]'
                }`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] text-white rotate-180'
                      : 'bg-[var(--border)] text-[var(--text-muted)]'
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-3 pb-3">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-alt)]">
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[var(--sky-500)] to-[var(--purple-500)] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[var(--sky-500)]/25 transition-all"
          >
            <span>Still have questions?</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={handleOpen}
        className="relative w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white shadow-lg shadow-[var(--sky-500)]/30 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        aria-label="Open FAQ"
      >
        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        {/* Notification dot */}
        {hasNotification && (
<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[var(--bg)] animate-pulse" />        )}

        {/* Tooltip */}
<span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">          Have a question?
        </span>
      </button>
    </div>
  )
}