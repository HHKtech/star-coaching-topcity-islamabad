export const faqs = [
  {
    id: 1,
    question: 'How do I book a free demo session?',
    answer: 'Simply click the "Book Free Demo" button anywhere on the site, fill out the contact form with your preferred subject and time, and our team will confirm your slot within 24 hours via email or WhatsApp.',
  },
  {
    id: 2,
    question: 'What subjects and courses do you offer?',
    answer: 'We offer comprehensive coaching in academic subjects (Mathematics, Physics, Chemistry, Biology, English), competitive exam prep (CSS, PMS, NTS, SAT), and professional skills (Communication, Leadership, Career Development).',
  },
  {
    id: 3,
    question: 'Are the sessions online or in-person?',
    answer: 'Both! We offer flexible online sessions via Zoom/Google Meet for remote students, and in-person coaching at our center for local students. You can choose what works best for your schedule.',
  },
  {
    id: 4,
    question: 'What is the success rate of your students?',
    answer: 'Over 95% of our students achieve their target goals — whether that is grade improvement, exam clearance, or career advancement. We track progress monthly and adjust strategies accordingly.',
  },
  {
    id: 5,
    question: 'How much does coaching cost?',
    answer: 'Pricing varies by program. Individual sessions start affordably, and we offer discounted packages for long-term commitments. Contact us for a custom quote tailored to your needs and budget.',
  },
  {
    id: 6,
    question: 'Can I switch coaches if I am not satisfied?',
    answer: 'Absolutely. Your success is our priority. If you feel a different teaching style would suit you better, we will match you with another expert coach from our team at no extra cost.',
  },
]

export const getFAQById = (id) => faqs.find((f) => f.id === id)