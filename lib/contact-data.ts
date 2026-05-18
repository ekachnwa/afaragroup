import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from 'lucide-react'

export const contactCards = [
  {
    title: 'Call Us',
    icon: Phone,
    details: [
      '+234 700 123 4567',
      '+234 800 987 6543',
    ],
    footer: 'Mon - Fri: 8:00AM - 5:00PM',
  },

  {
    title: 'Email Us',
    icon: Mail,
    details: [
      'info@afaragroup.com',
      'admissions@afaragroup.com',
    ],
    footer: 'We respond within 24 hours',
  },

  {
    title: 'Visit Us',
    icon: MapPin,
    details: [
      'Suite 12, Afara House,',
      'Abuja, FCT, Nigeria.',
    ],
    footer: 'Get directions →',
  },
  {
    title: 'Office Hours',
    icon: Clock3,
    details: [
      'Monday - Friday',
      '8:00AM - 5:00PM',
      'Saturday',
      '9:00AM - 2:00PM',
    ],
    footer: 'Sunday: Closed',
  },
]