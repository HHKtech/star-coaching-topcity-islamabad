import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.1
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.1

      glow.style.transform = `translate(${posRef.current.x - 150}px, ${posRef.current.y - 150}px)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    const raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0 opacity-60 dark:opacity-20 transition-opacity duration-500"
      style={{
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(168, 85, 247, 0.15) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  )
}