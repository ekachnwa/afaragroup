import { Shield } from 'lucide-react'

export default function SecurityNotice() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-[#F5F8FF] p-6">
      <div className="flex items-start gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900">
          <Shield className="h-8 w-8 text-white" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-950">
            Your Information is Secure
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-slate-600">
            We use industry-standard encryption to protect
            your personal data and ensure your privacy.
          </p>
        </div>
      </div>
    </div>
  )
}