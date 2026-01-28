import SectionHeader from "../components/SectionHeader.jsx";

export default function Privacy() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionHeader
        eyebrow="Compliance"
        title="Privacy Policy"
        description="WealthStem.ca is committed to safeguarding personal information under PIPEDA and CASL guidelines."
      />
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          We collect information solely for the purpose of delivering financial advice and services.
          Your data is stored securely and shared only with authorized partners necessary to fulfill
          your request.
        </p>
        <p>
          You may request access, corrections, or removal of your information by contacting our
          compliance team.
        </p>
      </div>
    </div>
  );
}
