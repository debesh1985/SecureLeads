import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Resources from "./pages/Resources.jsx";
import Calculators from "./pages/Calculators.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import MortgageHub from "./pages/MortgageHub.jsx";
import InsuranceHub from "./pages/InsuranceHub.jsx";
import InvestmentHub from "./pages/InvestmentHub.jsx";
import LeadGenPage from "./pages/LeadGenPage.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/mortgage" element={<MortgageHub />} />
        <Route path="/insurance" element={<InsuranceHub />} />
        <Route path="/investment" element={<InvestmentHub />} />
        <Route
          path="/mortgage/pre-approval"
          element={
            <LeadGenPage
              title="Mortgage Pre-Approval"
              description="Secure a clear understanding of your borrowing power with a structured pre-approval strategy."
              serviceCategory="mortgage"
              serviceName="Mortgage Pre-Approval"
            />
          }
        />
        <Route
          path="/mortgage/first-home"
          element={
            <LeadGenPage
              title="Buying Your First Home"
              description="We guide first-time buyers with confidence, clarity, and long-term value in mind."
              serviceCategory="mortgage"
              serviceName="First Home Purchase"
            />
          }
        />
        <Route
          path="/mortgage/renewal"
          element={
            <LeadGenPage
              title="Mortgage Renewal"
              description="Evaluate renewal options that reduce costs and align with your evolving goals."
              serviceCategory="mortgage"
              serviceName="Mortgage Renewal"
            />
          }
        />
        <Route
          path="/mortgage/refinance"
          element={
            <LeadGenPage
              title="Mortgage Refinance"
              description="Unlock equity and refine your debt strategy with a refinance analysis."
              serviceCategory="mortgage"
              serviceName="Mortgage Refinance"
            />
          }
        />
        <Route
          path="/mortgage/self-employed"
          element={
            <LeadGenPage
              title="Self-Employed Mortgage"
              description="Specialized lending guidance for entrepreneurs and business owners."
              serviceCategory="mortgage"
              serviceName="Self-Employed Mortgage"
            />
          }
        />
        <Route
          path="/insurance/term-life"
          element={
            <LeadGenPage
              title="Term Life Insurance"
              description="Protect your family with affordable, focused term coverage."
              serviceCategory="insurance"
              serviceName="Term Life Insurance"
            />
          }
        />
        <Route
          path="/insurance/whole-life"
          element={
            <LeadGenPage
              title="Whole Life Insurance"
              description="Lifetime protection with cash value accumulation and legacy planning."
              serviceCategory="insurance"
              serviceName="Whole Life Insurance"
            />
          }
        />
        <Route
          path="/insurance/mortgage-protection"
          element={
            <LeadGenPage
              title="Mortgage Protection"
              description="Safeguard your home with coverage designed for mortgage obligations."
              serviceCategory="insurance"
              serviceName="Mortgage Protection"
            />
          }
        />
        <Route
          path="/insurance/critical-illness"
          element={
            <LeadGenPage
              title="Critical Illness"
              description="Financial stability when unexpected health events occur."
              serviceCategory="insurance"
              serviceName="Critical Illness"
            />
          }
        />
        <Route
          path="/investment/rrsp"
          element={
            <LeadGenPage
              title="RRSP Strategy"
              description="Optimize retirement contributions with disciplined RRSP planning."
              serviceCategory="investment"
              serviceName="RRSP Strategy"
            />
          }
        />
        <Route
          path="/investment/tfsa"
          element={
            <LeadGenPage
              title="TFSA Planning"
              description="Tax-free growth aligned with your near-term and long-term goals."
              serviceCategory="investment"
              serviceName="TFSA Planning"
            />
          }
        />
        <Route
          path="/investment/fhsa"
          element={
            <LeadGenPage
              title="FHSA Setup"
              description="Combine tax savings and future homeownership planning with FHSA guidance."
              serviceCategory="investment"
              serviceName="FHSA Setup"
            />
          }
        />
        <Route
          path="/investment/estate"
          element={
            <LeadGenPage
              title="Estate Planning"
              description="Protect your legacy and coordinate wealth transfer strategies."
              serviceCategory="investment"
              serviceName="Estate Planning"
            />
          }
        />
        <Route
          path="/investment/resp"
          element={
            <LeadGenPage
              title="RESP Education Savings"
              description="Prepare for education costs with structured RESP planning."
              serviceCategory="resp"
              serviceName="RESP Education Savings"
            />
          }
        />
      </Routes>
    </Layout>
  );
}
