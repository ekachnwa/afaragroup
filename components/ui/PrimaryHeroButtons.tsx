import Link from 'next/link'
import { ReactNode } from 'react'

type HeroButtonsProps = {
  primaryButtonText: string
  primaryButtonLink: string
  className?: string
  children?: ReactNode
}

export default function HeroButtons({
  primaryButtonText,
  primaryButtonLink,
  className,
  children,
}: HeroButtonsProps) {
  return (
      <Link
        href={primaryButtonLink}
        className={className}
      >
        {primaryButtonText}
        {children}
      </Link>
  )
}