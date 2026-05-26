import Link from 'next/link'

type HeroButtonsProps = {
  primaryButtonText: string
  primaryButtonLink: string
}

export default function HeroButtons({
  primaryButtonText,
  primaryButtonLink,
}: HeroButtonsProps) {
  return (
      <Link
        href={primaryButtonLink}
        className="rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-800"
      >
        {primaryButtonText}
      </Link>
  )
}