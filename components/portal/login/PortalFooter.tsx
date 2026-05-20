import Link from 'next/link'

export default function PortalFooter() {
  return (
    <div className="mt-10 border-t border-slate-200 pt-8">
      <p className="text-center text-sm text-slate-500">
        Don’t have an account?{' '}
        <Link
          href="/apply"
          className="font-semibold text-blue-900 hover:text-blue-700"
        >
          Apply Now
        </Link>
      </p>

    </div>
  )
}