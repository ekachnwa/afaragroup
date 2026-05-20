import {
  Plane,
  Phone,
  Mail,
  CheckCircle2,
} from 'lucide-react'

export default function ApplicationSidebar() {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-black text-blue-950">
          Application Summary
        </h3>

        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Selected Program
            </p>

            <h4 className="mt-2 text-2xl font-bold text-blue-900">
              Aviation Management
            </h4>

            <p className="mt-1 text-slate-500">
              Afarawings Aero College
            </p>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
            <Plane className="h-8 w-8 text-blue-900" />
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <InfoRow
            label="Intake"
            value="2024/2025 Academic Session"
          />

          <InfoRow
            label="Program Duration"
            value="6 Months"
          />

          <InfoRow
            label="Program Fee"
            value="₦450,000"
          />
        </div>

        <button className="mt-8 font-semibold text-blue-900">
          View program details →
        </button>
      </div>

      {/* Help */}
      <div className="rounded-[28px] bg-[#FFF7E6] p-8">
        <h3 className="text-2xl font-black text-blue-950">
          Need Help?
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Our admissions team is here to assist you.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-blue-900" />

            <span>+234 700 123 4567</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-blue-900" />

            <span>admissions@afaragroup.com</span>
          </div>
        </div>

        <button className="mt-8 w-full rounded-xl bg-amber-400 px-6 py-4 font-semibold text-blue-950 transition hover:bg-amber-300">
          Chat with Us
        </button>
      </div>

      {/* Required Docs */}
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-black text-blue-950">
          Required Documents
        </h3>

        <div className="mt-6 space-y-4">
          {[
            'Passport Photograph',
            'Valid Identification',
            'Academic Certificates',
            "O'Level Results",
            'JAMB Result (if applicable)',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-green-600" />

              <span className="text-slate-600">
                {item}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-8 font-semibold text-blue-900">
          View all requirements →
        </button>
      </div>
    </div>
  )
}

function InfoRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div>
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-slate-700">
        {value}
      </p>
    </div>
  )
}