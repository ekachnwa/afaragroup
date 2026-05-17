export type Institution = {
  id: number
  name: string
  description: string
  image: string
}

export const institutions: Institution[] = [
  {
    id: 1,
    name: 'Afara College of Technology',
    description: 'Hands-on technical education for modern industry careers.',
    image: '/images/technology.webp',
  },
  {
    id: 2,
    name: 'Afara Caregiver &  Allied Health College',
    description: 'Healthcare and caregiver training for a better tomorrow.',
    image: '/images/healthcare.jpg',
  },
  {
    id: 3,
    name: 'Afara Skills & Vocational College',
    description: 'Technical and workplace skills for career excellence.',
    image: '/images/vocational.jepg',
  },
  {
    id: 4,
    name: 'Afara AgriFarm Training',
    description: 'Modern agricultural education for sustainable futures.',
    image: '/images/agriculture.webp',
  },
  {
    id: 5,
    name: 'Afarawings Travels',
    description: 'Travel, visa advisory, and tourism services for the world.',
    image: '/images/travel.webp',
  },
]
