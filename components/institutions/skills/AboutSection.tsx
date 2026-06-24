// components/skills/AboutSection.tsx

import Image from "next/image";
import { features } from "@/lib/skills-college-data";
import FeatureCard from "../caregiver/FeatureCard";

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <Image
            src="/images/afara-building.png"
            alt=""
            width={700}
            height={500}
            className="rounded-3xl"
          />

          <div className="lg:col-span-2">
            <span className="font-semibold uppercase text-orange-500">
              About Us
            </span>

            <h2 className="mt-3 text-5xl font-bold text-blue-950">
              Empowering Skills. Building Futures.
            </h2>

            <p className="mt-6 text-slate-600">
              We deliver practical and industry-relevant
              training for modern careers and entrepreneurship.
            </p>

            <div className="mt-12 grid grid-cols-4 gap-8">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}