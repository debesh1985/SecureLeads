import { NavLink } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import { investmentServices } from "../data/services.js";

export default function InvestmentHub() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeader
        eyebrow="Investments"
        title="Investment Planning Hub"
        description="Long-term wealth strategies shaped by disciplined portfolio management."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {investmentServices.map((service) => (
          <NavLink
            key={service.name}
            to={service.to}
            className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold"
          >
            <h3 className="font-serif text-xl font-semibold text-navy">{service.name}</h3>
            <p className="mt-2 text-sm text-slate-600">
              Align your savings and investments with real-world milestones.
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
