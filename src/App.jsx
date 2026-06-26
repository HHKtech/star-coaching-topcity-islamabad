import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/common/Navbar.jsx'
import Footer from './components/common/Footer.jsx'
import FAQWidget from './components/common/FAQWidget.jsx'
import ScrollToTopBtn from './components/common/ScrollToTop.jsx'
import ThemeToggle from './components/common/ThemeToggle.jsx'
import CursorGlow from './components/common/CursorGlow.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx' 
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Force scroll to top immediately and after a short delay
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    
    scrollToTop()
    
    // Double-check after a frame
    requestAnimationFrame(() => {
      setTimeout(scrollToTop, 50)
    })

    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [pathname, hash])

  return null
}

function RevealObserver() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Sab se pehle active hatao
    const elements = document.querySelectorAll('.reveal, .reveal-left')
    elements.forEach(el => el.classList.remove('active'))

    // 600ms wait karo taky page top pe settle ho jaye
    // aur user ko blank page dikhe, phir animation start ho
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
              observer.unobserve(entry.target)
            }
          })
        },
        { 
          threshold: 0.1, 
          rootMargin: '0px 0px -60px 0px' // 60px neechy aane pe trigger
        }
      )

      elements.forEach((el) => observer.observe(el))
    }, 600)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
      <CursorGlow />
      <ScrollToTop />
      <RevealObserver />
      <Navbar />
      <ThemeToggle />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />  
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FAQWidget />
      <ScrollToTopBtn />
    </div>
  )
}