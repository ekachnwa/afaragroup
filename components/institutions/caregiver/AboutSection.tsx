import Image from "next/image";
import { features } from "@/lib/caregiver-data";
import FeatureCard from "./FeatureCard";

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
          <Image
            src="/images/afara-building.png"
            alt=""
            width={700}
            height={500}
            className="rounded-3xl"
          />

          <div className="lg:col-span-2">
            <span className="font-semibold uppercase text-[#F6B400]">
              About Us
            </span>

            <h2 className="mt-3 text-5xl font-bold text-blue-950">
              Building Healthier Communities
            </h2>

            <p className="mt-6 text-slate-600">
              We train compassionate and competent healthcare
              professionals for the modern workforce.
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