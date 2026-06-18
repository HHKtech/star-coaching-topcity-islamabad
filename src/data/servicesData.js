export const services = [
  {
    id: 1,
    title: 'Career Coaching',
    description: 'Strategic guidance to navigate your professional path, from resume building to interview mastery and career transitions.',
    icon: 'BookOpen',
    gradient: 'from-[var(--sky-500)] to-[var(--sky-400)]',
  },
  {
    id: 2,
    title: 'Academic Excellence',
    description: 'Subject-specific tutoring and study strategies designed to boost grades, confidence, and long-term academic success.',
    icon: 'AcademicCap',
    gradient: 'from-[var(--indigo-500)] to-[var(--indigo-400)]',
  },
  {
    id: 3,
    title: 'Skill Development',
    description: 'Hands-on training in communication, leadership, critical thinking, and other essential life skills for real-world impact.',
    icon: 'LightningBolt',
    gradient: 'from-[var(--purple-500)] to-[var(--purple-400)]',
  },
  {
    id: 4,
    title: 'Exam Preparation',
    description: 'Intensive, structured prep for competitive exams with mock tests, time management techniques, and confidence building.',
    icon: 'Bolt',
    gradient: 'from-[var(--sky-500)] to-[var(--indigo-500)]',
  },
  {
    id: 5,
    title: 'Group Workshops',
    description: 'Collaborative learning sessions that foster teamwork, peer learning, and collective problem-solving in small groups.',
    icon: 'Users',
    gradient: 'from-[var(--indigo-500)] to-[var(--purple-500)]',
  },
  {
    id: 6,
    title: 'Personal Growth',
    description: 'Mindset coaching, goal setting, and habit formation to unlock the best version of yourself every single day.',
    icon: 'Sparkles',
    gradient: 'from-[var(--purple-500)] to-[var(--sky-500)]',
  },
]

export const getServiceById = (id) => services.find((s) => s.id === id)
export const getServicesByIcon = (iconType) => services.filter((s) => s.icon === iconType)