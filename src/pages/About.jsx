import AboutHero from '../components/About/AboutHero.jsx'
import AboutStory from '../components/About/AboutStory.jsx'
import AboutSubjects from '../components/About/AboutSubjects.jsx'
import AboutApproach from '../components/About/AboutApproach.jsx'
import AboutCTA from '../components/About/AboutCTA.jsx'

export default function About() {
  return (
    <div className="pt-20">
      <AboutHero />
      <AboutStory />
      <AboutSubjects />
      <AboutApproach />
      <AboutCTA />
    </div>
  )
}