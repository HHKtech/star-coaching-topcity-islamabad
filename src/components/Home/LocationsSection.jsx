const locations = [
  'Mumtaz City',
  'TopCity',
  'Airport Green Garden',
]

export default function LocationsSection() {
  return (
    <section className="section bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--sky-500)]/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Serving Your <span className="gradient-text">Community</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Bringing quality education right to your doorstep in Islamabad.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {locations.map((loc, i) => (
            <div
              key={loc}
              className="reveal flex items-center gap-3 px-6 py-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--sky-500)]/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span className="font-semibold text-[var(--text)]">{loc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}