import Hero from '../components/Home/Hero.jsx'
// import Stats from '../components/Stats.jsx'
import OneOnOneSection from '../components/Home/OneOnOneSection.jsx'
import AcademicExcellenceSection from '../components/Home/AcademicExcellenceSection.jsx'
import BoostSuccessSection from '../components/Home/BoostSuccessSection.jsx'
// import SubjectsSection from '../components/SubjectsSection.jsx'
import LocationsSection from '../components/Home/LocationsSection.jsx'
import CTASection from '../components/Home/CTASection.jsx'
import FAQWidget from '../components/common/FAQWidget.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <OneOnOneSection />
      <AcademicExcellenceSection />
      <BoostSuccessSection />
      {/* <SubjectsSection /> */}
      <LocationsSection />
      <CTASection />
      <FAQWidget />
    </>
  )
}