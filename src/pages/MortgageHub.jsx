import { NavLink } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import { mortgageServices } from "../data/services.js";

export default function MortgageHub() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeader
        eyebrow="Mortgages"
        title="Mortgage Planning Hub"
        description="Explore structured lending solutions tailored to your unique financial goals."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {mortgageServices.map((service) => (
          <NavLink
            key={service.name}
            to={service.to}
            className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold"
          >
            <h3 className="font-serif text-xl font-semibold text-navy">{service.name}</h3>
            <p className="mt-2 text-sm text-slate-600">
              Learn how we support this stage of your mortgage journey.
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
