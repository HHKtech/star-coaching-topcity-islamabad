import TypewriterHeading from '../common/TypewriterHeading.jsx'

export default function AboutHero() {
  return (
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
            I am a dedicated tutor based in <strong className="text-[var(--text)]">TopCity, Islamabad</strong>, specializing in 
            <strong className="text-[var(--text)]"> Middle School and Matric subjects</strong>. With a strong focus on 
            <strong className="text-[var(--text)]"> concept clarity</strong> and 
            <strong className="text-[var(--text)]"> exam techniques</strong>, I help students not just pass — but truly excel.
          </p>
        </div>
      </div>
    </section>
  )
}