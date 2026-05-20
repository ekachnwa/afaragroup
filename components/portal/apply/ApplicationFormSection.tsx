import ApplicationStepper from './ApplicationStepper'
import PersonalInformationForm from './PersonalInformationForm'
import ApplicationSidebar from './ApplicationSidebar'
import SecurityNotice from './SecurityNotice'

export default function ApplicationFormSection() {
  return (
    <section className="pb-24 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div>
          <h2 className="text-5xl font-black text-blue-950">
            Application Form
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Fill in your details accurately to complete
            your application.
          </p>
        </div>

        {/* Stepper */}
        <div className="mt-14">
          <ApplicationStepper />
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Form Side */}
          <div className="space-y-8">
            <PersonalInformationForm />

            <SecurityNotice />
          </div>

          {/* Sidebar */}
          <ApplicationSidebar />
        </div>
      </div>
    </section>
  )
}