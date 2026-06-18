export const testimonials = [
  {
    id: 1,
    name: 'Aisha Khan',
    role: 'University Student',
    avatar: 'A',
    text: 'STAR Coaching completely transformed my approach to exams. I went from barely passing to topping my class. The personalized attention made all the difference.',
    rating: 5,
    color: 'from-[var(--sky-500)] to-[var(--indigo-500)]',
  },
  {
    id: 2,
    name: 'Bilal Ahmed',
    role: 'Software Engineer',
    avatar: 'B',
    text: 'The career coaching sessions helped me land my dream job at a top tech company. My mentor guided me through every interview round with confidence.',
    rating: 5,
    color: 'from-[var(--indigo-500)] to-[var(--purple-500)]',
  },
  {
    id: 3,
    name: 'Sara Malik',
    role: 'Medical Student',
    avatar: 'S',
    text: 'Group workshops here are incredible. The collaborative environment helped me understand complex concepts I struggled with for months on my own.',
    rating: 5,
    color: 'from-[var(--purple-500)] to-[var(--sky-500)]',
  },
  {
    id: 4,
    name: 'Omar Farooq',
    role: 'Entrepreneur',
    avatar: 'O',
    text: 'Personal growth coaching gave me the clarity I needed to start my own business. The mindset shifts I learned here are priceless.',
    rating: 4,
    color: 'from-[var(--sky-500)] to-[var(--purple-500)]',
  },
  {
    id: 5,
    name: 'Fatima Noor',
    role: 'CSS Aspirant',
    avatar: 'F',
    text: 'I cleared my CSS exam on the first attempt thanks to the structured preparation plan. The mock interviews and feedback were game changers.',
    rating: 5,
    color: 'from-[var(--indigo-500)] to-[var(--sky-500)]',
  },
]

export const featuredTestimonial = testimonials[0]

export const getTestimonialsByRating = (rating) =>
  testimonials.filter((t) => t.rating === rating)