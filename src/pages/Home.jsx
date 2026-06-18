import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Stats from '../components/Stats.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQWidget from '../components/FAQWidget.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <FAQWidget />
    </>
  )
}