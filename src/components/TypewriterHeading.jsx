import { useState, useEffect, useRef } from 'react'

export default function TypewriterHeading({ segments, speed = 80, delay = 0 }) {
  const [charIndex, setCharIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  // Flatten all text to calculate total length
  const fullText = segments.map(s => s.text).join('')
  const totalLength = fullText.length

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
    if (!started || charIndex >= totalLength) return

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setCharIndex(prev => {
          if (prev >= totalLength) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [started, totalLength, speed, delay])

  // Build visible segments based on current charIndex
  let remaining = charIndex
  const visibleSegments = []

  for (const seg of segments) {
    if (remaining <= 0) break
    const take = Math.min(remaining, seg.text.length)
    visibleSegments.push({
      text: seg.text.slice(0, take),
      className: seg.className,
    })
    remaining -= take
  }

  const isDone = charIndex >= totalLength

  return (
    <span ref={ref} className="inline">
      {visibleSegments.map((seg, i) => (
        <span key={i} className={seg.className}>
          {seg.text}
        </span>
      ))}
      {!isDone && started && (
        <span className="inline-block w-0.5 h-[0.9em] bg-[var(--primary)] ml-1 align-middle animate-pulse" />
      )}
    </span>
  )
}