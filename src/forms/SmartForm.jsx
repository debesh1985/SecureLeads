import { useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

const mortgageFields = [
  { name: "familyIncome", label: "Family Income (Annual)", type: "number" },
  { name: "propertyPrice", label: "Purchase Property Price", type: "number" },
  { name: "downPayment", label: "Down Payment %", type: "number" },
  {
    name: "employmentStatus",
    label: "Employment Status",
    type: "select",
    options: ["Employed", "Self-Employed", "Contract", "Retired"],
  },
];

const insuranceFields = [
  { name: "coverageAmount", label: "Coverage Amount Desired", type: "number" },
  { name: "medicalConditions", label: "Medical Conditions", type: "textarea" },
  { name: "smokingStatus", label: "Smoking Status", type: "select", options: ["Yes", "No"] },
  { name: "dateOfBirth", label: "Date of Birth", type: "date" },
];

const respFields = [
  { name: "numberOfKids", label: "Number of Kids", type: "number" },
  { name: "ageOfKids", label: "Age of Kids", type: "text" },
  {
    name: "monthlyContribution",
    label: "Monthly Contribution Budget",
    type: "number",
  },
];

const investmentFields = [
  { name: "currentSavings", label: "Current Savings Balance", type: "number" },
  { name: "timeHorizon", label: "Time Horizon (Years)", type: "number" },
  {
    name: "riskTolerance",
    label: "Risk Tolerance",
    type: "select",
    options: ["Low", "Medium", "High"],
  },
];

const fieldMap = {
  mortgage: mortgageFields,
  insurance: insuranceFields,
  resp: respFields,
  investment: investmentFields,
};

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  consent: false,
};

function Field({ field, value, onChange }) {
  if (field.type === "textarea") {
    return (
      <label className="block text-sm font-semibold text-navy">
        {field.label}
        <textarea
          name={field.name}
          value={value}
          onChange={onChange}
          rows={4}
          className="mt-2 w-full rounded-md border border-slate-300 p-3 text-sm"
        />
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label className="block text-sm font-semibold text-navy">
        {field.label}
        <select
          name={field.name}
          value={value}
          onChange={onChange}
          className="mt-2 w-full rounded-md border border-slate-300 p-3 text-sm"
        >
          <option value="">Select</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label className="block text-sm font-semibold text-navy">
      {field.label}
      <input
        type={field.type}
        name={field.name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-md border border-slate-300 p-3 text-sm"
      />
    </label>
  );
}

export default function SmartForm({ serviceCategory, serviceName }) {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const fields = fieldMap[serviceCategory] || [];

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
      setStatus({ state: "error", message: "Consent is required for submission." });
      return;
    }
    setStatus({ state: "loading", message: "Submitting your request..." });

    const payload = {
      service_category: serviceCategory,
      service_name: serviceName,
      full_name: values.fullName,
      email: values.email,
      phone: values.phone,
      address: values.address,
      consent: values.consent,
      metadata: fields.reduce((accumulator, field) => {
        accumulator[field.name] = values[field.name] || "";
        return accumulator;
      }, {}),
    };

    const { error } = await supabase.from("leads").insert(payload);

    if (error) {
      setStatus({
        state: "error",
        message: "We could not submit your request. Please try again later.",
      });
      return;
    }

    setStatus({ state: "success", message: "Thank you. We will be in touch shortly." });
    setValues({ ...initialState });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <label className="block text-sm font-semibold text-navy">
          Full Name
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-md border border-slate-300 p-3 text-sm"
          />
        </label>
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
        <label className="block text-sm font-semibold text-navy">
          Phone
          <input
            type="tel"
            name="phone"
            placeholder="905-965-0460"
            value={values.phone}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-md border border-slate-300 p-3 text-sm"
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Address
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-md border border-slate-300 p-3 text-sm"
          />
        </label>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {fields.map((field) => (
          <Field
            key={field.name}
            field={field}
            value={values[field.name] || ""}
            onChange={handleChange}
          />
        ))}
      </div>

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
        disabled={status.state === "loading"}
        className="w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-slate-900"
      >
        {status.state === "loading" ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
