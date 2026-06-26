import { useState, useEffect, useRef } from 'react'

export default function TypewriterText({ text, className = '', speed = 50, delay = 0, onComplete }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started || done) return

    const startTimer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
          onComplete?.()
        }
      }, speed)
      
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [started, text, speed, delay, done, onComplete])

  return (
    <span ref={ref} className={className}>
      {displayed}
      {!done && started && (
        <span className="inline-block w-0.5 h-[1em] bg-[var(--primary)] ml-1 align-middle animate-pulse" />
      )}
    </span>
  )
}