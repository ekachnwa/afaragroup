type Props = {
  process: any
}

export default function ProcessCard({ process }: Props) {
  const Icon = process.icon

  return (
    <div className="text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-900">
        <Icon className="h-10 w-10 text-white" />
      </div>

      <p className="mt-5 text-3xl font-black text-blue-950">
        {process.step}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-blue-950">
        {process.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {process.description}
      </p>
    </div>
  )
}