import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ContactInfo from './ContactInfo.jsx'

// 🔧 CONFIG: Replace these with your EmailJS credentials
const EMAILJS_PUBLIC_KEY = '-Wi8G1amDHRSX4oiN'
const EMAILJS_SERVICE_ID = 'service_32mxewg'
const EMAILJS_TEMPLATE_ID = 'template_bgdgz47'

export default function ContactForm() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ from_name: '', from_email: '', phone: '', subject: '', message: '' })
  const [focused, setFocused] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
      setForm({ from_name: '', from_email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch (err) {
      console.error('Email failed:', err)
      setError('Failed to send message. Please try again or contact via WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  const inputClasses = (field) =>
    `w-full px-4 py-3.5 rounded-xl bg-[var(--surface)] border-2 text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all duration-300 ${
      focused[field] || form[field]
        ? 'border-[var(--sky-500)] shadow-[0_0_0_4px_rgba(14,165,233,0.1)]'
        : 'border-[var(--border)]'
    }`

  return (
    <section className="section bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--sky-500)]/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[var(--purple-500)]/8 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <ContactInfo />

          {/* Right: Form */}
          <div className="reveal">
            <div className="bg-[var(--surface)] rounded-3xl border border-[var(--border)] shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              {/* Success Overlay */}
              <div
                className={`absolute inset-0 bg-[var(--surface)] z-20 flex flex-col items-center justify-center transition-all duration-700 ${
                  submitted ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] flex items-center justify-center mb-6 animate-scale-in shadow-lg shadow-[var(--sky-500)]/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 animate-slide-up">Message Sent!</h3>
                <p className="text-[var(--text-secondary)] text-center max-w-xs animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Thank you! I'll get back to you within a few hours.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Full Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="Your name"
                      value={form.from_name}
                      onChange={handleChange}
                      onFocus={() => setFocused({ ...focused, from_name: true })}
                      onBlur={() => setFocused({ ...focused, from_name: false })}
                      className={inputClasses('from_name')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder="you@example.com"
                      value={form.from_email}
                      onChange={handleChange}
                      onFocus={() => setFocused({ ...focused, from_email: true })}
                      onBlur={() => setFocused({ ...focused, from_email: false })}
                      className={inputClasses('from_email')}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-1.5">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0342-6556877"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused({ ...focused, phone: true })}
                      onBlur={() => setFocused({ ...focused, phone: false })}
                      className={inputClasses('phone')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="e.g. Math Tuition for Grade 9"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused({ ...focused, subject: true })}
                      onBlur={() => setFocused({ ...focused, subject: false })}
                      className={inputClasses('subject')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your goals, weak topics, or preferred schedule..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, message: true })}
                    onBlur={() => setFocused({ ...focused, message: false })}
                    className={`${inputClasses('message')} resize-none`}
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full !py-4 !text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}