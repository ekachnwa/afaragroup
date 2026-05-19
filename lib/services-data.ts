import {
  Plane,
  HeartPulse,
  Hammer,
  Leaf,
  Globe,
  BadgeCheck,
  BriefcaseBusiness,
  Users,
  FileText,
  CreditCard,
  BookOpen,
  GraduationCap,
} from 'lucide-react'

export const services = [
  {
    title: 'Aviation Training Services',
    description:
      'Professional aviation training programs that prepare you for careers in the global aviation industry.',
    image: '/images/technology.webp',
    icon: Plane,
    color: 'text-blue-700',
    button: 'Explore Aviation Programs',

    items: [
      'Flight Operations',
      'Cabin Crew Training',
      'Cargo & Baggage Handling',
      'Aviation Management',
      'Airline Ticketing & Reservation',
    ],
  },

  {
    title: 'Healthcare & Allied Health Services',
    description:
      'Healthcare and caregiver training to build compassionate professionals.',
    image: '/images/healthcare.jpg',
    icon: HeartPulse,
    color: 'text-emerald-600',
    button: 'Explore Healthcare Programs',

    items: [
      'Caregiver Certification',
      'Nursing Assistant Training',
      'First Aid & Emergency Response',
      'Healthcare Support Services',
    ],
  },

  {
    title: 'Vocational & Technical Training Services',
    description:
      'Hands-on vocational and technical training for in-demand careers.',
    image: '/images/vocational.jpg',
    icon: Hammer,
    color: 'text-orange-500',
    button: 'Explore Vocational Programs',

    items: [
      'Forklift Operation',
      'Crane Operation',
      'Truck Driving Training',
      'Workplace Safety Certification',
    ],
  },

  {
    title: 'Agricultural Training Services',
    description:
      'Modern agricultural education promoting sustainable farming.',
    image: '/images/agriculture.webp',
    icon: Leaf,
    color: 'text-lime-600',
    button: 'Explore Agricultural Programs',

    items: [
      'Catfish Farming',
      'Piggery Farming',
      'Agricultural Business Management',
      'Farm Operations',
    ],
  },

  {
    title: 'Travel & Advisory Services',
    description:
      'Comprehensive travel, visa, and advisory services for global mobility.',
    image: '/images/travel.webp',
    icon: Globe,
    color: 'text-indigo-600',
    button: 'Explore Travel Services',

    items: [
      'Flight Ticket Booking',
      'Visa Advisory Services',
      'Travel Documentation Support',
      'International Travel Consultancy',
    ],
  },
]

export const features = [
  {
    title: 'Industry Expertise',
    description:
      'Experienced professionals delivering quality services.',
    icon: BadgeCheck,
  },

  {
    title: 'Practical Approach',
    description:
      'Hands-on training and real-world learning experience.',
    icon: BriefcaseBusiness,
  },

  {
    title: 'Global Opportunities',
    description:
      'Connecting you to international pathways.',
    icon: Globe,
  },

  {
    title: 'Student-Centered Support',
    description:
      'We support you every step of the way.',
    icon: Users,
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Choose a Service',
    description:
      'Explore our services and choose one that fits your goals.',
    icon: FileText,
  },

  {
    step: '02',
    title: 'Apply / Enroll',
    description:
      'Complete your application and submit required documents.',
    icon: GraduationCap,
  },

  {
    step: '03',
    title: 'Make Payment',
    description:
      'Secure your spot by making payment through trusted platforms.',
    icon: CreditCard,
  },

  {
    step: '04',
    title: 'Start Your Journey',
    description:
      'Begin your training or service and achieve your dreams.',
    icon: BookOpen,
  },

  {
    step: '05',
    title: 'Get Certified',
    description:
      'Complete your program and receive certification.',
    icon: BadgeCheck,
  },
]