import { NavLink } from "react-router-dom";
import { footerLinks } from "../data/navigation.js";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-navy text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold">WealthStem.ca</p>
          <p className="mt-2 text-sm text-slate-200">
            100 Milverton Dr #210 Mississauga, L5R 3G2
          </p>
          <p className="text-sm text-slate-200">Toll-Free: 1-800-WEALTH</p>
          <p className="text-sm text-slate-200">Phone/WhatsApp: 905-965-0460</p>
        </div>
        <div className="text-sm text-slate-200">
          <p>© 2026 WealthStem.ca. All Rights Reserved. Compliant with PIPEDA/CASL.</p>
          <div className="mt-2 flex flex-wrap gap-4 text-xs uppercase tracking-widest">
            {footerLinks.map((link) => (
              <NavLink key={link.name} to={link.to} className="hover:text-gold">
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
