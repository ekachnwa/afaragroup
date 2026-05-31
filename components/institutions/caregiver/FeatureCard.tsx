import type { ComponentType } from 'react'

// Local Feature type to avoid relying on absolute import paths
interface Feature {
  icon: ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

interface Props {
  feature: Feature;
}

export default function FeatureCard({
  feature,
}: Props) {
  const Icon = feature.icon;

  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#031B6E] text-white">
        <Icon size={34} />
      </div>

      <h3 className="font-bold text-blue-950">
        {feature.title}
      </h3>

      <p className="mt-3 text-sm text-slate-600">
        {feature.description}
      </p>
    </div>
  );
}