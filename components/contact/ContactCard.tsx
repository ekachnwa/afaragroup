type Props = {
  item: any
}

export default function ContactCard({ item }: Props) {
  const Icon = item.icon

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-900">
        <Icon className="h-10 w-10 text-white" />
      </div>

      <h3 className="mt-6 text-3xl font-bold text-blue-950">
        {item.title}
      </h3>

      <div className="mt-6 space-y-3 text-lg leading-8 text-slate-600">
        {item.details.map((detail: string) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>

      <p className="mt-6 font-medium text-blue-900">
        {item.footer}
      </p>
    </div>
  )
}