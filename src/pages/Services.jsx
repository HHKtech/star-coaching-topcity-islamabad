import HomeTuitionSection from '../components/Services/HomeTuitionSection.jsx'
import MentoringSection from '../components/Services/MentoringSection.jsx'
import FocusedCoachingSection from '../components/Services/FocusedCoachingSection.jsx'
import ExamCrashSection from '../components/Services/ExamCrashSection.jsx'
import SpecializedCoachingSection from '../components/Services/SpecializedCoachingSection.jsx'

export default function Services() {
  return (
    <div className="pt-20">
      <HomeTuitionSection />
      <MentoringSection />
      <FocusedCoachingSection />
      <ExamCrashSection />
      <SpecializedCoachingSection />
    </div>
  )
}