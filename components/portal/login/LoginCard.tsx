import LoginForm from './LoginForm'
import SocialLogin from './SocialLogin'
import PortalFooter from './PortalFooter'

export default function LoginCard() {
  return (
    <div className="w-full max-w-[520px] rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">
      {/* Header */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
          Welcome Back
        </p>

        <h2 className="mt-4 text-5xl font-black text-blue-950">
          Student Login
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-500">
          Enter your credentials to access your student
          dashboard.
        </p>
      </div>

      {/* Form */}
      <div className="mt-10">
        <LoginForm />
      </div>

      {/* Divider */}
      <div className="my-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-sm font-medium text-slate-400">
          OR CONTINUE WITH
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Social */}
      <SocialLogin />

      {/* Footer */}
      <PortalFooter />
    </div>
  )
}