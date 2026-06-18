import ContactForm from '../components/ContactForm.jsx'
import TypewriterHeading from '../components/TypewriterHeading.jsx'

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-[var(--bg-alt)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--sky-500)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--purple-500)]/10 rounded-full blur-3xl" />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 text-[var(--primary-dark)] mb-4 border border-[var(--sky-500)]/20">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 min-h-[1.2em]">
            <TypewriterHeading
              speed={80}
              segments={[
                { text: "Let's ", className: '' },
                { text: 'Connect', className: 'gradient-text' },
              ]}
            />
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have a question or ready to start? We're here to help you take the next step.
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}