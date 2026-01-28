import SectionHeader from "../components/SectionHeader.jsx";

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeader
        eyebrow="About Us"
        title="A disciplined approach to wealth management."
        description="WealthStem combines mortgage expertise, insurance insight, and investment planning to support families and businesses across Ontario and Canada."
      />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-sm text-slate-600">
          <p>
            Our advisors prioritize clarity, compliance, and long-term outcomes. Every recommendation is
            shaped by your goals, risk tolerance, and the regulatory requirements of the Canadian
            market.
          </p>
          <p>
            We partner with national carriers and lenders to create solutions that balance stability
            and growth. Clients receive ongoing reviews, proactive insights, and responsive service
            from a dedicated WealthStem team.
          </p>
        </div>
        <div className="overflow-hidden rounded-sm border border-slate-200 bg-white">
          <iframe
            title="WealthStem Location"
            src="https://maps.google.com/maps?q=396%20Newport%20Dr,%20Cambridge,%20ON&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
