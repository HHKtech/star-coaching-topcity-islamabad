import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TypewriterHeading from './TypewriterHeading.jsx'

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

    const particles = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        gradient.addColorStop(0, `rgba(14, 165, 233, ${p.opacity})`)
        gradient.addColorStop(1, `rgba(168, 85, 247, ${p.opacity * 0.5})`)
        ctx.fillStyle = gradient
        ctx.fill()
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-[var(--sky-500)]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-[var(--purple-500)]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--indigo-500)]/15 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--sky-500)]/10 to-[var(--purple-500)]/10 border border-[var(--sky-500)]/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
            <span className="text-sm font-medium text-[var(--primary-dark)]">
              Online & In-Person Classes Available
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 min-h-[1.2em]">
            <TypewriterHeading
              speed={80}
              segments={[
                { text: 'Ace Your ', className: '' },
                { text: 'O/A Levels', className: 'gradient-text' },
                { text: ' ', className: '' },
                { text: '& Matric Exams', className: '' },
              ]}
            />
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Personalized one-on-one tutoring in Karachi & online across Pakistan. 
            Subject specialist with proven results in Cambridge and local boards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact" className="btn-primary text-base w-full sm:w-auto">
              <span>Book Free Trial Class</span>
            </Link>
            <Link to="/about" className="btn-secondary text-base w-full sm:w-auto">
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.45s' }}>
            {[
              { num: '50+', label: 'Students Taught' },
              { num: '3+', label: 'Years Experience' },
              { num: '90%', label: 'A/A* Rate' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="reveal p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-slate-700/40 backdrop-blur-sm border border-[var(--border)] dark:border-slate-600 hover:border-[var(--sky-500)]/40 transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-2xl sm:text-4xl font-bold gradient-text mb-1">{stat.num}</p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}