type Props = {
  feature: any
}

export default function FeatureCard({ feature }: Props) {
  const Icon = feature.icon

  return (
    <div className="flex items-start gap-5 border-r border-slate-200 pr-6 last:border-none">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
        <Icon className="h-8 w-8 text-blue-900" />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-blue-950">
          {feature.title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          {feature.description}
        </p>
      </div>
    </div>
  )
}