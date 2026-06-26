const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'asifazizqureshi@gmail.com',
    href: 'mailto:asifazizqureshi@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '0342-6556877',
    href: 'https://wa.me/923426556877',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'TopCity, Islamabad',
    href: null,
  },
]

export default function ContactInfo() {
  return (
    <div className="reveal">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Let's Take the <span className="gradient-text">First Step</span> Together
      </h2>
      <p className="text-[var(--text-secondary)] text-lg mb-10 leading-relaxed">
        Your child's success begins with the right guidance. Reach out today and let's discuss how I can help.
      </p>

      <div className="space-y-6">
        {contactDetails.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href?.startsWith('http') ? '_blank' : undefined}
            rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`flex items-start gap-4 group ${item.href ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--sky-500)] to-[var(--purple-500)] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text)]">{item.label}</p>
              <p className="text-[var(--text-secondary)] group-hover:text-[var(--primary-dark)] transition-colors">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Quick CTA */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 border border-[var(--sky-500)]/20">
        <p className="text-sm text-[var(--text-secondary)] mb-3">
          Prefer a quick chat?
        </p>
        <a
          href="https://wa.me/923426556877"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center inline-flex justify-center"
        >
          <span className="flex items-center gap-2">💬 Message on WhatsApp</span>
        </a>
      </div>
    </div>
  )
}