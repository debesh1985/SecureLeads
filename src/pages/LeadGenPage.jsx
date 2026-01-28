import SmartForm from "../forms/SmartForm.jsx";

export default function LeadGenPage({ title, description, serviceCategory, serviceName }) {
  return (
    <div className="bg-muted">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="rounded-sm border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Lead Request</p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-navy">{title}</h1>
          <p className="mt-4 text-sm text-slate-600">{description}</p>
          <SmartForm serviceCategory={serviceCategory} serviceName={serviceName} />
        </div>
      </div>
    </div>
  );
}
