import SectionHeader from "../components/SectionHeader.jsx";

const articles = [
  "Tax-Free Savings Explained",
  "RRSP Contribution Strategies",
  "Protecting Your Family with Insurance",
  "Mortgage Renewal Checklist",
  "Planning for Retirement Income",
  "Understanding Estate Planning",
];

const lifePlanning = ["Buying a Home", "Retirement", "Having a Child", "Business Succession"];

const governmentSites = [
  { name: "CRA My Account", href: "https://www.canada.ca/en/revenue-agency.html" },
  { name: "Service Canada", href: "https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html" },
  { name: "FSRA", href: "https://www.fsrao.ca" },
];

export default function Resources() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeader
        eyebrow="Resources"
        title="Your Wealth Planning Library"
        description="Curated guidance to support each stage of your financial journey."
      />
      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-4 text-sm font-semibold uppercase tracking-widest text-navy">
          <a href="#newsletter" className="block border-l-2 border-gold pl-4 text-gold">
            E-Newsletter
          </a>
          <a href="#financial-library" className="block border-l-2 border-transparent pl-4 hover:border-gold">
            Financial Library
          </a>
          <a href="#life-planning" className="block border-l-2 border-transparent pl-4 hover:border-gold">
            Life Planning
          </a>
          <a href="#government-sites" className="block border-l-2 border-transparent pl-4 hover:border-gold">
            Government Sites
          </a>
        </aside>
        <div className="space-y-16">
          <section id="newsletter" className="rounded-sm border border-slate-200 bg-muted p-8">
            <h3 className="font-serif text-2xl font-semibold text-navy">E-Newsletter</h3>
            <p className="mt-3 text-sm text-slate-600">
              Receive timely updates on market trends and planning opportunities.
            </p>
            <a
              href="/newsletter"
              className="mt-6 inline-flex rounded-sm border border-navy px-5 py-2 text-xs font-semibold uppercase tracking-widest text-navy"
            >
              Subscribe Now
            </a>
          </section>

          <section id="financial-library">
            <h3 className="font-serif text-2xl font-semibold text-navy">Financial Library</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <div key={article} className="rounded-sm border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-gold">Article</p>
                  <h4 className="mt-3 font-serif text-xl text-navy">{article}</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Placeholder summary describing the key insight of this resource.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="life-planning">
            <h3 className="font-serif text-2xl font-semibold text-navy">Life Planning</h3>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {lifePlanning.map((item) => (
                <li key={item} className="rounded-sm border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-widest text-gold">Guide</p>
                  <p className="mt-2 font-serif text-lg text-navy">{item}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="government-sites">
            <h3 className="font-serif text-2xl font-semibold text-navy">Government Sites</h3>
            <ul className="mt-4 space-y-3">
              {governmentSites.map((site) => (
                <li key={site.name}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold uppercase tracking-widest text-gold"
                  >
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
