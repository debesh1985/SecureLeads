import SectionHeader from "../components/SectionHeader.jsx";

export default function Disclaimer() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionHeader
        eyebrow="Legal"
        title="Disclaimer"
        description="This website provides general information and does not constitute financial advice."
      />
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          All content is provided for informational purposes only. WealthStem.ca does not guarantee
          the completeness or accuracy of information and encourages clients to consult with a
          licensed advisor before making financial decisions.
        </p>
      </div>
    </div>
  );
}
