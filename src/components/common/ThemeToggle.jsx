import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Sirf localStorage check karo, system preference ignore karo
    const saved = localStorage.getItem('theme')
    // Agar saved hai toh wohi use karo, warna default LIGHT (false)
    return saved ? saved === 'dark' : false
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-24 right-3 sm:right-6 z-50 w-9 h-9 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-lg flex items-center justify-center text-[var(--text)] hover:scale-110 hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle theme"
      title={isDark ? 'Switch to Light' : 'Switch to Dark'}
    >
      {isDark ? (
        <svg className="w-6 h-6 text-[var(--sky-500)] group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-[var(--purple-500)] group-hover:-rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}