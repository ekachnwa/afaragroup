import Link from 'next/link'

type SecondaryHeroButtonsProps = {
  secondaryButtonText: string
  secondaryButtonLink: string
  className?: string
  children?: React.ReactNode
}

export default function SecondaryHeroButtons({
  secondaryButtonText,
  secondaryButtonLink,
  className,
  children,
}: SecondaryHeroButtonsProps) {
  return (
    <Link href={secondaryButtonLink} className={className}>
      {children}
      {secondaryButtonText}
    </Link>
  )
}
