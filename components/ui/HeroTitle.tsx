
type HeroTitleProps = {
  title: string;
  highlightedText?: string
  subtitle: string;
  trailingText?: string;
  className?: string
}

export default function HeroTitle({
  title,
  highlightedText,
  subtitle,
  trailingText,
  className,
}: HeroTitleProps) {
  return (
    <>
      <h1 //className="max-w-2xl text-5xl font-black leading-tight text-blue-950 md:text-7xl"
      className={className}
      >
        {title}
        <span //className="block text-amber-500"
        className={className}
        >
          {highlightedText}
        </span>
        {trailingText}
      </h1>

      <p //className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
      className={className}
      >
        {subtitle}
      </p>
    </>
  )
}