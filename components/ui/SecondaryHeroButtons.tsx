import Link from 'next/link'

type SecondaryHeroButtonsProps = {
  secondaryButtonText: string
  secondaryButtonLink: string
}

export default function SecondaryHeroButtons({
  secondaryButtonText,
  secondaryButtonLink,
}: SecondaryHeroButtonsProps) {
  return (
    <Link
      href={secondaryButtonLink}
      className="rounded-xl border border-blue-900 px-7 py-4 font-semibold text-blue-900 transition hover:bg-blue-50"
    >
      {secondaryButtonText}
    </Link>
  )
}