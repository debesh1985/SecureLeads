import { useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";

function MortgageCalculator() {
  const [values, setValues] = useState({ amount: 500000, rate: 5, years: 25 });
  const monthly = useMemo(() => {
    const monthlyRate = values.rate / 100 / 12;
    const payments = values.years * 12;
    if (monthlyRate === 0) return values.amount / payments;
    const factor = Math.pow(1 + monthlyRate, payments);
    return (values.amount * monthlyRate * factor) / (factor - 1);
  }, [values]);

  return (
    <div className="rounded-sm border border-slate-200 bg-white p-6">
      <h3 className="font-serif text-xl font-semibold text-navy">Mortgage Payment</h3>
      <div className="mt-4 grid gap-4 text-sm">
        <label className="flex flex-col gap-2">
          Loan Amount
          <input
            type="number"
            value={values.amount}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, amount: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Interest Rate (%)
          <input
            type="number"
            value={values.rate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, rate: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Amortization (Years)
          <input
            type="number"
            value={values.years}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, years: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <p className="text-sm font-semibold text-gold">Estimated Monthly: ${monthly.toFixed(0)}</p>
      </div>
    </div>
  );
}

function RRSPCalculator() {
  const [values, setValues] = useState({ contribution: 10000, taxRate: 35 });
  const savings = useMemo(
    () => (values.contribution * values.taxRate) / 100,
    [values]
  );

  return (
    <div className="rounded-sm border border-slate-200 bg-white p-6">
      <h3 className="font-serif text-xl font-semibold text-navy">RRSP Tax Savings</h3>
      <div className="mt-4 grid gap-4 text-sm">
        <label className="flex flex-col gap-2">
          Annual Contribution
          <input
            type="number"
            value={values.contribution}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, contribution: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Marginal Tax Rate (%)
          <input
            type="number"
            value={values.taxRate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, taxRate: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <p className="text-sm font-semibold text-gold">Estimated Savings: ${savings.toFixed(0)}</p>
      </div>
    </div>
  );
}

function InvestmentCalculator() {
  const [values, setValues] = useState({ initial: 25000, monthly: 400, years: 15, rate: 6 });
  const futureValue = useMemo(() => {
    const monthlyRate = values.rate / 100 / 12;
    const periods = values.years * 12;
    const growthInitial = values.initial * Math.pow(1 + monthlyRate, periods);
    const growthMonthly =
      monthlyRate === 0
        ? values.monthly * periods
        : values.monthly * ((Math.pow(1 + monthlyRate, periods) - 1) / monthlyRate);
    return growthInitial + growthMonthly;
  }, [values]);

  return (
    <div className="rounded-sm border border-slate-200 bg-white p-6">
      <h3 className="font-serif text-xl font-semibold text-navy">Investment Growth</h3>
      <div className="mt-4 grid gap-4 text-sm">
        <label className="flex flex-col gap-2">
          Initial Investment
          <input
            type="number"
            value={values.initial}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, initial: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Monthly Contribution
          <input
            type="number"
            value={values.monthly}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, monthly: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Years
          <input
            type="number"
            value={values.years}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, years: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Growth Rate (%)
          <input
            type="number"
            value={values.rate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, rate: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <p className="text-sm font-semibold text-gold">Projected Value: ${futureValue.toFixed(0)}</p>
      </div>
    </div>
  );
}

function InsuranceNeedsCalculator() {
  const [values, setValues] = useState({ income: 90000, years: 10, savings: 20000 });
  const coverage = useMemo(() => values.income * values.years - values.savings, [values]);

  return (
    <div className="rounded-sm border border-slate-200 bg-white p-6">
      <h3 className="font-serif text-xl font-semibold text-navy">Life Insurance Needs</h3>
      <div className="mt-4 grid gap-4 text-sm">
        <label className="flex flex-col gap-2">
          Annual Income
          <input
            type="number"
            value={values.income}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, income: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Income Replacement Years
          <input
            type="number"
            value={values.years}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, years: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Current Savings
          <input
            type="number"
            value={values.savings}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, savings: Number(event.target.value) }))
            }
            className="rounded-md border border-slate-300 p-2"
          />
        </label>
        <p className="text-sm font-semibold text-gold">Estimated Coverage: ${coverage.toFixed(0)}</p>
      </div>
    </div>
  );
}

export default function Calculators() {
  return (
    <div className="bg-muted">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionHeader
          eyebrow="Tools"
          title="Financial Calculators"
          description="Use our planning tools to estimate mortgage payments, investment growth, and more."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <MortgageCalculator />
          <RRSPCalculator />
          <InvestmentCalculator />
          <InsuranceNeedsCalculator />
        </div>
      </div>
    </div>
  );
}
