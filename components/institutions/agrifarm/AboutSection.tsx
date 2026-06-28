import Image from "next/image";
import { Users, Leaf, Globe, GraduationCap } from "lucide-react";

const features = [
  {
    title: "Practical Learning",
    icon: GraduationCap,
  },
  {
    title: "Experienced Instructors",
    icon: Users,
  },
  {
    title: "Modern Facilities",
    icon: Leaf,
  },
  {
    title: "Global Opportunities",
    icon: Globe,
  },
];

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          <Image
            src="/images/travel-expirence.webp"
            alt="Travel Experience"
            width={600}
            height={500}
            className="rounded-3xl"
          />

          <div>
            <span className="font-semibold text-[#F6B400] uppercase">
              About Us
            </span>

            <h2 className="mt-2 text-4xl font-bold text-[#031B6E]">
              Building Sustainable Agriculture
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We train future agricultural professionals through hands-on learning,
              modern facilities and industry partnerships.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div className='text-center'>
                  <div 
                    key={feature.title}
                    className="gap-5 flex flex-col items-center justify-center"
                  >
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#031B6E] text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#031B6E]">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}