export default function WhyChooseSection() {
  const reasons = [
    "Practical hands-on training",
    "Affordable education",
    "Modern facilities",
    "Industry-recognized certification",
    "Job placement support",
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-blue-950 p-10 text-white">
        <h2 className="text-4xl font-bold">
          Why Choose Afara Skills &
          Vocational College?
        </h2>

        <ul className="mt-8 space-y-4">
          {reasons.map((reason) => (
            <li key={reason}>
              ✓ {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}