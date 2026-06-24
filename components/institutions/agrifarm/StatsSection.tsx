export default function StatsSection() {
  const stats = [
    {
      value: "20+",
      label: "Programs Offered",
    },
    {
      value: "1,500+",
      label: "Students Trained",
    },
    {
      value: "100+",
      label: "Industry Partners",
    },
    {
      value: "95%",
      label: "Graduate Employability",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border p-8 text-center"
          >
            <h3 className="mt-6 text-4xl font-bold text-[#031B6E]">
              {stat.value}
            </h3>

            <p className="mt-2 text-slate-600">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}