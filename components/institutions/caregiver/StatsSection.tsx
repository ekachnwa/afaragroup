export default function StatsSection() {
  const stats = [
    ["20+", "Programs Offered"],
    ["2,000+", "Students Trained"],
    ["100+", "Healthcare Partners"],
    ["95%", "Job Placement Rate"],
  ];

  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 rounded-3xl border bg-white p-10 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div
            key={label}
            className="text-center"
          >
            <h3 className="text-5xl font-bold text-blue-950">
              {value}
            </h3>

            <p className="mt-3 text-slate-600">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}