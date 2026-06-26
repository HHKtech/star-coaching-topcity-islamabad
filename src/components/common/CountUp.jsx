import { useState, useEffect, useRef } from 'react'

export default function CountUp({ end, suffix = '', duration = 2000, delay = 0 }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.8 }  // 80% visible hona chahiye
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    // Pehle delay wait karo (CSS slide-up khatam hone ka time)
    const timer = setTimeout(() => {
      let startTime = null
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(easeOut * end))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timer)
  }, [hasStarted, end, duration, delay])

  return <span ref={ref}>{count}{suffix}</span>
}