import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TypewriterHeading from '../common/TypewriterHeading.jsx'
import CountUp from '../common/CountUp.jsx'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const getColors = () => {
      const isDark = document.documentElement.classList.contains('dark')
      return {
        isDark,
        sky: isDark ? '14, 165, 233' : '56, 189, 248',
        purple: isDark ? '168, 85, 247' : '192, 132, 252',
        indigo: isDark ? '99, 102, 241' : '129, 140, 248',
        pink: isDark ? '168, 85, 247' : '244, 114, 182',
        centerOp: isDark ? 0.18 : 0.35,
        midOp: isDark ? 0.10 : 0.15,
        outerOp: isDark ? 0.05 : 0.04,
        radiusMult: isDark ? 1.25 : 1.6,
      }
    }

    let colors = getColors()

    const getOrbs = () => [
      // LARGE (3)
      { x: 0.15, y: 0.20, r: 412 * colors.radiusMult, color: colors.sky, speedX: 0.0002, speedY: 0.00015, phase: 0 },
      { x: 0.85, y: 0.75, r: 432 * colors.radiusMult, color: colors.purple, speedX: -0.00015, speedY: 0.0002, phase: 1 },
      { x: 0.50, y: 0.45, r: 392 * colors.radiusMult, color: colors.indigo, speedX: 0.00018, speedY: -0.00012, phase: 2 },

      // MEDIUM (4)
      // { x: 0.25, y: 0.85, r: 312 * colors.radiusMult, color: colors.pink, speedX: -0.00012, speedY: -0.00018, phase: 3 },
      { x: 0.75, y: 0.15, r: 292 * colors.radiusMult, color: colors.sky, speedX: 0.00015, speedY: 0.00018, phase: 4 },
      { x: 0.10, y: 0.55, r: 332 * colors.radiusMult, color: colors.purple, speedX: 0.0002, speedY: 0.0001, phase: 5 },
      { x: 0.90, y: 0.35, r: 272 * colors.radiusMult, color: colors.indigo, speedX: -0.00018, speedY: 0.00015, phase: 6 },

      // SMALL (3) — 2 remove kar diye
      { x: 0.60, y: 0.90, r: 220 * colors.radiusMult, color: colors.sky, speedX: -0.00015, speedY: 0.0002, phase: 7 },
      { x: 0.40, y: 0.10, r: 200 * colors.radiusMult, color: colors.purple, speedX: 0.00012, speedY: -0.00015, phase: 8 },
      { x: 0.65, y: 0.30, r: 240 * colors.radiusMult, color: colors.pink, speedX: -0.0002, speedY: -0.00012, phase: 9 },
    ]

    let orbs = getOrbs()

    const observer = new MutationObserver(() => {
      colors = getColors()
      orbs = getOrbs()
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      orbs.forEach((orb) => {
        const floatX = Math.sin(time + orb.phase) * 0.08
        const floatY = Math.cos(time * 0.7 + orb.phase) * 0.06

        const cx = (orb.x + floatX + Math.sin(time * 0.3) * orb.speedX * 1000) * canvas.width
        const cy = (orb.y + floatY + Math.cos(time * 0.4) * orb.speedY * 1000) * canvas.height

        const pulse = Math.sin(time * 0.5 + orb.phase) * 0.1 + 1
        const radius = orb.r * pulse

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        gradient.addColorStop(0, `rgba(${orb.color}, ${colors.centerOp})`)
        gradient.addColorStop(0.15, `rgba(${orb.color}, ${colors.midOp})`)
        gradient.addColorStop(0.35, `rgba(${orb.color}, ${colors.outerOp})`)
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`)

        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 border border-[var(--sky-500)]/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
            <span className="text-sm font-medium text-[var(--primary-dark)]">
              Home Tuition Available in Islamabad
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 min-h-[1.2em]">
            <TypewriterHeading
              speed={80}
              segments={[
                { text: 'STAR ', className: 'font-serif' },
                { text: ' COACHING ', className: 'gradient-text italic font-serif' },
                { text: '- Topcity Islamabad -', className: 'font-serif font-thin text-[0.35em] opacity-80 whitespace-nowrap tracking-[0.2em]' },
              ]}
            />
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
            We believe every student deserves individual attention and a learning plan tailored to their needs. Our home tuition services provide focused guidance from Grade 5 to Matric, helping students excel in their studies and achieve outstanding results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link 
            to="/contact" 
            className="btn-primary text-base w-full sm:w-auto group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Free Trial Class
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={3} 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Shimmer — <div> use karo taake .btn-primary span override na ho */}
            <div 
              className="absolute inset-0 animate-[shimmer_1.5s_linear_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" 
            />
          </Link>
            <Link 
              to="/about" 
              className="text-base w-full sm:w-auto px-6 py-3 rounded-xl font-semibold border-2 border-slate-400 dark:border-white/30 text-[var(--text)] dark:text-white bg-transparent hover:border-[var(--sky-500)] hover:text-[var(--sky-500)] dark:hover:border-[var(--sky-400)] dark:hover:text-[var(--sky-400)] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.45s' }}>
            {[
              { num: 3, suffix: '+', label: 'Years Experience', delay: 600 },
              { num: 50, suffix: '+', label: 'Students Guided', delay: 800 },
              { num: 95, suffix: '%', label: 'Success Rate', delay: 1000 },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="reveal p-4 sm:p-6 rounded-3xl bg-white/60 dark:bg-slate-700/40 backdrop-blur-sm border border-[var(--border)] dark:border-slate-600 hover:border-[var(--sky-500)]/40 transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-2xl sm:text-4xl font-bold gradient-text mb-1">
                  <CountUp end={stat.num} suffix={stat.suffix} delay={stat.delay} />
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}