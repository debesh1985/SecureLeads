import { NavLink } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import { partnerGroups, serviceCards } from "../data/services.js";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-muted">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
            alt="Canadian landscape"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-6 py-20 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            WealthStem.ca
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight lg:text-5xl">
            WealthStem: Rooted in Strategy, Growing Your Future.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-200">
            High-trust mortgage, insurance, and investment planning designed for Canadian families
            and business owners who value long-term stability.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/contact"
              className="rounded-sm bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-navy"
            >
              Book a Consultation
            </NavLink>
            <NavLink
              to="/mortgage"
              className="rounded-sm border border-white px-6 py-3 text-xs font-semibold uppercase tracking-widest"
            >
              Explore Services
            </NavLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionHeader
          eyebrow="Core Services"
          title="Expert guidance across mortgages, insurance, and investments."
          description="WealthStem delivers disciplined advice with a client-first focus and comprehensive market access."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <NavLink
              key={card.title}
              to={card.to}
              className="group rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold"
            >
              <h3 className="font-serif text-2xl font-semibold text-navy group-hover:text-gold">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{card.description}</p>
              <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                Learn More
              </span>
            </NavLink>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <SectionHeader
            eyebrow="Partnerships"
            title="Our Trusted Partners"
            description="We collaborate with Canada’s most respected insurers and investment providers to craft resilient solutions."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {partnerGroups.map((group) => (
              <div key={group.title} className="rounded-sm border border-slate-200 bg-white p-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {group.partners.map((partner) => (
                    <li key={partner}>{partner}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
