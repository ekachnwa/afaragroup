import { features } from '@/lib/services-data'
import FeatureCard from './FeatureCard'

export default function FeaturesSection() {
  return (
    <section className="pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl bg-slate-50 px-8 py-10 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
          />
        ))}
      </div>
    </section>
  )
}