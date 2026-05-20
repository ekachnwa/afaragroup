import {
  Globe,
} from 'lucide-react'

export default function SocialLogin() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <button className="flex h-14 items-center justify-center rounded-2xl border border-slate-200 transition hover:bg-slate-50">
        <Globe className="h-6 w-6 text-slate-700" />
      </button>

      <button className="flex h-14 items-center justify-center rounded-2xl border border-slate-200 transition hover:bg-slate-50">
        {/* Inline SVG for Facebook logo (avoids importing non-exported icon) */}
        <svg className="h-6 w-6 text-slate-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.62 3.5-3.62 1.01 0 2.07.18 2.07.18v2.28h-1.17c-1.15 0-1.5.71-1.5 1.43v1.74h2.56l-.41 2.9h-2.15v7.03C18.34 21.19 22 16.99 22 12.07z" />
        </svg>
      </button>

      <button className="flex h-14 items-center justify-center rounded-2xl border border-slate-200 transition hover:bg-slate-50">
        {/* Inline SVG for LinkedIn logo (avoids importing non-exported icon) */}
        <svg className="h-6 w-6 text-slate-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.48 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.1 3.4 6.1 7.8V24h-5V16.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z" />
        </svg>
      </button>
    </div>
  )
}