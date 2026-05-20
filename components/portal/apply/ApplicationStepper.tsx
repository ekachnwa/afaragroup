import { applicationSteps } from '@/lib/apply-data'

export default function ApplicationStepper() {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[850px] items-center justify-between">
        {applicationSteps.map((step, index) => {
          const Icon = step.icon

          return (
            <div
              key={step.title}
              className="relative flex flex-1 flex-col items-center"
            >
              {/* Line */}
              {index !==
                applicationSteps.length - 1 && (
                <div className="absolute left-1/2 top-6 h-[2px] w-full bg-slate-200" />
              )}

              {/* Circle */}
              <div
                className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 ${
                  step.active
                    ? 'border-blue-900 bg-blue-900 text-white'
                    : 'border-slate-200 bg-white text-slate-400'
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <p
                className={`mt-4 text-center text-sm font-medium ${
                  step.active
                    ? 'text-blue-900'
                    : 'text-slate-500'
                }`}
              >
                {step.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}