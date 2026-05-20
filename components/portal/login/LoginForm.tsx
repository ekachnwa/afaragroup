'use client'

import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useState } from 'react'

export default function LoginForm() {
  const [showPassword, setShowPassword] =
    useState(false)

  return (
    <form className="space-y-6">
      {/* Email */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Email Address
        </label>

        <div className="relative">
          <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="email"
            placeholder="Enter your email"
            className="h-16 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 text-slate-700 outline-none transition focus:border-blue-900"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Password
        </label>

        <div className="relative">
          <Lock className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            className="h-16 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-14 text-slate-700 outline-none transition focus:border-blue-900"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Options */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300"
          />

          Remember me
        </label>

        <button
          type="button"
          className="text-sm font-semibold text-blue-900 transition hover:text-blue-700"
        >
          Forgot Password?
        </button>
      </div>

      {/* Submit */}
      <button className="flex h-16 w-full items-center justify-center rounded-2xl bg-blue-900 text-lg font-semibold text-white transition hover:bg-blue-800">
        Login to Portal
      </button>
    </form>
  )
}