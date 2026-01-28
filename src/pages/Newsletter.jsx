import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { supabase } from "../lib/supabaseClient.js";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  consent: false,
};

export default function Newsletter() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!values.consent) {
      setStatus({ state: "error", message: "Consent is required to subscribe." });
      return;
    }

    setStatus({ state: "loading", message: "Submitting..." });
    const { error } = await supabase.from("subscribers").insert({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      consent: values.consent,
    });

    if (error) {
      setStatus({ state: "error", message: "Subscription failed. Please try again." });
      return;
    }

    setStatus({ state: "success", message: "Thank you for subscribing." });
    setValues(initialState);
  };

  return (
    <div className="bg-muted">
      <div className="mx-auto w-full max-w-4xl px-6 py-16">
        <SectionHeader
          eyebrow="Resources"
          title="Stay Informed on Your Financial Future."
          description="Receive our monthly insights, planning checklists, and market updates.
          "
        />
        <div className="rounded-sm border border-slate-200 bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block text-sm font-semibold text-navy">
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-slate-300 p-3 text-sm"
                />
              </label>
              <label className="block text-sm font-semibold text-navy">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-slate-300 p-3 text-sm"
                />
              </label>
            </div>
            <label className="block text-sm font-semibold text-navy">
              Email Address
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-md border border-slate-300 p-3 text-sm"
              />
            </label>
            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                name="consent"
                checked={values.consent}
                onChange={handleChange}
                className="mt-1 rounded border-slate-300"
                required
              />
              <span>
                I consent to receive emails and communications from WealthStem regarding my financial request.
              </span>
            </label>
            {status.message ? (
              <p
                className={`text-sm ${
                  status.state === "success" ? "text-emerald-700" : "text-rose-600"
                }`}
              >
                {status.message}
              </p>
            ) : null}
            <button
              type="submit"
              className="w-full rounded-md bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white"
            >
              Subscribe
            </button>
          </form>
          <a
            href="#"
            className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gold"
          >
            Click Here for Current Issue
          </a>
        </div>
      </div>
    </div>
  );
}
