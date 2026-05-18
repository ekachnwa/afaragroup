'use client'

export default function ContactForm() {
  return (
    <form className="space-y-6">
      {/* Row 1 */}
      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          placeholder="Full Name *"
          className="h-16 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-blue-900"
        />

        <input
          type="email"
          placeholder="Email Address *"
          className="h-16 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-blue-900"
        />
      </div>

      {/* Row 2 */}
      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          placeholder="Phone Number *"
          className="h-16 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-blue-900"
        />

        <select className="h-16 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-blue-900">
          <option>Subject *</option>
          <option>Admissions</option>
          <option>Programs</option>
          <option>Support</option>
        </select>
      </div>

      {/* Message */}
      <textarea
        rows={7}
        placeholder="Message *"
        className="w-full rounded-2xl border border-slate-200 p-5 outline-none transition focus:border-blue-900"
      />

      {/* Checkbox */}
      <div className="flex items-center gap-3">
        <input type="checkbox" />

        <p className="text-sm text-slate-600">
          I agree to the
          <span className="font-semibold text-blue-900">
            {' '}
            Privacy Policy
          </span>
          {' '}and{' '}
          <span className="font-semibold text-blue-900">
            Terms & Conditions
          </span>
          .
        </p>
      </div>

      {/* Submit */}
      <button className="rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-800">
        Send Message
      </button>
    </form>
  )
}