import SectionHeader from "../components/SectionHeader.jsx";

export default function Contact() {
  return (
    <div className="bg-muted">
      <div className="mx-auto w-full max-w-4xl px-6 py-16">
        <SectionHeader
          eyebrow="Contact"
          title="Connect with WealthStem"
          description="Speak with an advisor to discuss mortgages, insurance, or investment planning."
        />
        <div className="rounded-sm border border-slate-200 bg-white p-8 text-sm text-slate-600">
          <p>Address: 396 Newport Dr, Cambridge, ON, N3H 5S7</p>
          <p className="mt-2">Toll-Free: 1-800-WEALTH</p>
          <p>Phone/WhatsApp: 905-965-0460</p>
          <p className="mt-4 text-navy">
            Email: <span className="font-semibold">advisor@wealthstem.ca</span>
          </p>
        </div>
      </div>
    </div>
  );
}
