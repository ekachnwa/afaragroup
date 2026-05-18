import { institutions } from '@/lib/courses-data'

export default function InstitutionTabs() {
  return (
    <div className="flex flex-wrap gap-4">
      {institutions.map((item, index) => (
        <button
          key={item}
          className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
            index === 0
              ? 'bg-blue-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  )
}