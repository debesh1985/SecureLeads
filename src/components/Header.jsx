import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { mainNav, resourceLinks } from "../data/navigation.js";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center">
          <Logo />
        </NavLink>
        <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-widest text-navy lg:flex">
          {mainNav.map((item) =>
            item.name === "Resources" ? (
              <div key={item.name} className="group relative">
                <span className="cursor-pointer">Resources</span>
                <div className="absolute left-0 top-full hidden w-52 rounded-sm border border-slate-200 bg-white py-3 shadow-lg group-hover:block">
                  {resourceLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.to}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
                          isActive ? "text-gold" : "text-navy"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "text-gold" : "text-navy hover:text-gold"
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>
        <a
          href="tel:9059650460"
          className="hidden rounded-full border border-navy px-5 py-2 text-xs font-semibold uppercase tracking-widest text-navy transition hover:bg-navy hover:text-white lg:inline-flex"
        >
          Speak with an Advisor
        </a>
      </div>
    </header>
  );
}
