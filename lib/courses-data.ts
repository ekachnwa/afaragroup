import {
  Plane,
  HeartPulse,
  Hammer,
  Leaf,
  Globe,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Users,
  Award,
} from 'lucide-react'

export const categories = [
  {
    title: 'All Courses',
    icon: Briefcase,
  },
  {
    title: 'Aviation',
    icon: Plane,
  },
  {
    title: 'Healthcare',
    icon: HeartPulse,
  },
  {
    title: 'Vocational & Technical',
    icon: Hammer,
  },
  {
    title: 'Agriculture',
    icon: Leaf,
  },
  {
    title: 'Travel & Tourism',
    icon: Globe,
  },
  {
    title: 'Management',
    icon: Briefcase,
  },
  {
    title: 'Safety & Compliance',
    icon: ShieldCheck,
  },
]

export const institutions = [
  'All',
  'Afarawings Aero College',
  'Afara Caregiver & Allied Health College',
  'Afara Skills & Vocational College',
  'Afara AgriFarm Training',
  'Afarawings Travels',
]

export const courses = [
  {
    title: 'Aviation Management',
    image: '/images/technology.webp',
    category: 'Aviation',
    duration: '6 Months',
  },

  {
    title: 'Caregiver Certification',
    image: '/images/healthcare.jpg',
    category: 'Healthcare',
    duration: '3 Months',
  },

  {
    title: 'Wood Work Operation',
    image: '/images/vocational.jpg',
    category: 'Vocational',
    duration: '4 Weeks',
  },

  {
    title: 'Visa Advisory Services',
    image: '/images/travel.webp',
    category: 'Travel & Tourism',
    duration: '2 Weeks',
  },

  {
    title: 'Cabin Crew AB-INITIO',
    image: '/images/hero-main.png',
    category: 'Aviation',
    duration: '3 Months',
  },

  {
    title: 'First Aid & Emergency Response',
    image: '/images/healthcare.jpg',
    category: 'Healthcare',
    duration: '2 Weeks',
  },

  {
    title: 'Crane Operation',
    image: '/images/vocational.jpg',
    category: 'Vocational',
    duration: '4 Weeks',
  },

  {
    title: 'Piggery Farming',
    image: '/images/agriculture.webp',
    category: 'Agriculture',
    duration: '6 Weeks',
  },

  {
    title: 'Flight Ticket Booking',
    image: '/images/travel.webp',
    category: 'Travel & Tourism',
    duration: '1 Week',
  },
]

export const stats = [
  {
    title: '50+',
    subtitle: 'Courses',
    icon: GraduationCap,
  },

  {
    title: '5+',
    subtitle: 'Institutions',
    icon: Users,
  },

  {
    title: '10,000+',
    subtitle: 'Students Enrolled',
    icon: Award,
  },

  {
    title: 'Global',
    subtitle: 'Opportunities',
    icon: Globe,
  },

  {
    title: '100%',
    subtitle: 'Career Focused',
    icon: Briefcase,
  },
]