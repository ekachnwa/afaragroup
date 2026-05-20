import {
  User,
  GraduationCap,
  BookOpen,
  FileText,
  CheckCircle2,
  Shield,
  Clock3,
  Globe,
  ClipboardList,
} from 'lucide-react'

export const applicationSteps = [
  {
    title: 'Personal Information',
    icon: User,
    active: true,
  },

  {
    title: 'Academic Background',
    icon: GraduationCap,
  },

  {
    title: 'Program Selection',
    icon: BookOpen,
  },

  {
    title: 'Documents Upload',
    icon: FileText,
  },

  {
    title: 'Review & Submit',
    icon: CheckCircle2,
  },
]

export const featureItems = [
  {
    title: 'Simple Application',
    description:
      'Easy step-by-step application process.',
    icon: ClipboardList,
  },

  {
    title: 'Secure & Confidential',
    description:
      'Your information is safe with us.',
    icon: Shield,
  },

  {
    title: 'Quick Processing',
    description:
      'Fast review and response time.',
    icon: Clock3,
  },

  {
    title: 'Global Opportunities',
    description:
      'Access world-class education and careers.',
    icon: Globe,
  },
]