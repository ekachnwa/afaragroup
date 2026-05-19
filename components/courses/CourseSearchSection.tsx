import {
  Search,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'

import CategorySidebar from './CategorySidebar'
import InstitutionTabs from './InstitutionTabs'
import CoursesGrid from './CoursesGrid'

export default function CourseSearchSection() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Search Bar */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_2fr_1fr_1fr_auto]">
            <div className="flex items-center">
              <h3 className="text-3xl font-bold text-blue-950">
                Find the Right Course for You
              </h3>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search courses..."
                className="h-16 w-full rounded-2xl border border-slate-200 pl-12 pr-5 outline-none focus:border-blue-900"
              />
            </div>

            <button className="flex h-16 items-center justify-between rounded-2xl border border-slate-200 px-5">
              All Categories
              <ChevronDown className="h-5 w-5" />
            </button>

            <button className="flex h-16 items-center justify-between rounded-2xl border border-slate-200 px-5">
              All Levels
              <ChevronDown className="h-5 w-5" />
            </button>

            <button className="flex h-16 items-center gap-3 rounded-2xl bg-blue-900 px-8 font-semibold text-white">
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <CategorySidebar />

          {/* Right Content */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-black text-blue-950">
                Browse by Our Institutions
              </h2>
            </div>

            <div className="mt-8">
              <InstitutionTabs />
            </div>

            <div className="mt-10">
              <CoursesGrid />
            </div>

            <div className="mt-10 flex justify-center">
              <button className="inline-flex items-center gap-3 rounded-xl bg-blue-900 px-8 py-4 font-semibold text-white transition hover:bg-blue-800">
                View All Courses
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}