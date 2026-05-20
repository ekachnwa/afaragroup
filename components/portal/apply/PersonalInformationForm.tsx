import {
  CalendarDays,
  ChevronDown,
} from 'lucide-react'

export default function PersonalInformationForm() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <h3 className="text-3xl font-black text-blue-950">
          Personal Information
        </h3>

        <p className="mt-3 text-slate-500">
          Please provide your basic personal details.
        </p>
      </div>

      <form className="mt-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <InputField
            label="Full Name"
            placeholder="Enter your full name"
          />

          <InputField
            label="Email Address"
            placeholder="Enter your email address"
          />

          <InputField
            label="Phone Number"
            placeholder="Enter phone number"
          />

          {/* Date */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Date of Birth
            </label>

            <div className="relative">
              <input
                type="text"
                placeholder="Select your date of birth"
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 pr-12 outline-none focus:border-blue-900"
              />

              <CalendarDays className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          <SelectField label="Gender" />

          <SelectField label="Marital Status" />

          <SelectField label="Nationality" />

          <SelectField label="State of Residence" />

          <SelectField label="LGA" />
        </div>

        {/* Address */}
        <div className="mt-6">
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Home Address
          </label>

          <textarea
            rows={4}
            placeholder="Enter your full home address"
            className="w-full rounded-2xl border border-slate-200 p-5 outline-none focus:border-blue-900"
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <button className="rounded-xl bg-blue-900 px-8 py-4 font-semibold text-white transition hover:bg-blue-800">
            Save & Continue
          </button>

          <button
            type="button"
            className="rounded-xl border border-slate-200 px-8 py-4 font-semibold text-blue-900 transition hover:bg-slate-50"
          >
            Save & Exit
          </button>
        </div>
      </form>
    </div>
  )
}

type InputProps = {
  label: string
  placeholder: string
}

function InputField({
  label,
  placeholder,
}: InputProps) {
  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:border-blue-900"
      />
    </div>
  )
}

function SelectField({
  label,
}: {
  label: string
}) {
  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        <select className="h-14 w-full appearance-none rounded-2xl border border-slate-200 px-5 outline-none focus:border-blue-900">
          <option>Select {label}</option>
        </select>

        <ChevronDown className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  )
}