import { useState } from "react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabase";

const LOGO_URL = "/Logo.png";

export default function WaitlistPage() {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [intent, setIntent] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: insertError } = await supabase
      .from("proquomentwaitlist")
      .insert([
        {
          full_name: fullName,
          work_email: workEmail,
          company_name: companyName,
          intent_profile: intent,
        },
      ]);

    setLoading(false);

    if (insertError) {
      console.error("Supabase insert error:", JSON.stringify(insertError));
      setError(insertError.message || "Something went wrong. Please try again.");
    } else {
      setSubmitted(true);
    }
  }

  return (
    <>
      {/* Custom nav for waitlist page */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm">
        <div className="flex justify-between items-center w-full px-4 sm:px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 text-xl sm:text-[22px] font-black tracking-tighter text-[#1C1C5E]">
            <img alt="Proquoment Logo" className="h-6 w-6 sm:h-7 sm:w-7 object-contain rounded-sm" src={LOGO_URL} />
            <span className="font-black tracking-[-0.05em]">Proquoment</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="text-[#1C1C5E] font-extrabold border-b-2 border-[#1C1C5E] pb-1 tracking-[0.1em] text-[10px] uppercase">Platform</Link>
            <Link href="/case-studies" className="text-slate-500 font-medium pb-1 tracking-[0.1em] text-[10px] uppercase hover:text-indigo-600 transition-colors duration-200">Case Studies</Link>
            <Link href="/contact" className="text-slate-500 font-medium pb-1 tracking-[0.1em] text-[10px] uppercase hover:text-indigo-600 transition-colors duration-200">Contact</Link>
          </div>
          <button className="bg-[#070099] text-white px-4 sm:px-6 py-2 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] transition-transform hover:opacity-90 active:scale-95 whitespace-nowrap">
            The Waitlist
          </button>
        </div>
      </nav>

      <main className="pt-24 sm:pt-32 bg-[#f9f9f9] min-h-screen">
        {/* Hero Section */}
        <section
          className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 sm:mb-24 lg:mb-32 grid grid-cols-12 gap-8 pb-12 sm:pb-24"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23060055' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="col-span-12 lg:col-span-9 text-center lg:text-left">
            <span className="text-[#070099] font-bold tracking-[0.2em] text-[10px] sm:text-[12px] uppercase mb-4 sm:mb-6 block">
              Industrial Revolution 4.0
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] sm:leading-[0.85] font-black tracking-[-0.04em] text-[#070099] mb-8 sm:mb-12">
              THE NEW ERA OF PRECISION SOURCING
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-[#454556] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
              We are building a closed-loop ecosystem for high-precision manufacturing. Proquoment connects elite industrial buyers with verified facilities through an AI-governed protocol.
            </p>
            <div className="flex items-center gap-2 text-[#070099] font-bold">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
              <span className="tracking-[0.1em] text-[10px] sm:text-[11px] uppercase whitespace-nowrap">500+ Verified Manufacturers</span>
            </div>
          </div>
        </section>

        {/* Waitlist Form Section */}
        <section className="bg-[#EEEEEE] py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-12 gap-8 lg:gap-12">
            {/* Left */}
            <div className="col-span-12 lg:col-span-4 text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-[#070099] mb-4 sm:mb-6 uppercase">
                Secure Your Position
              </h2>
              <p className="text-[#454556] mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0">
                Access is strictly controlled to maintain technical integrity and fulfillment speed. Join the cohort and get full one year of our $2,500 subscription completely free.
              </p>
              <div className="space-y-6 max-w-xs mx-auto lg:mx-0">
                <div className="p-6 bg-white rounded-[12px] shadow-[0px_10px_30px_rgba(6,0,85,0.02)] text-left">
                  <span className="text-[#070099] block text-[10px] font-bold tracking-[0.1em] uppercase mb-2">Network Status</span>
                  <div className="text-2xl font-black text-[#070099]">92% Capacity</div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="bg-white p-6 sm:p-10 lg:p-16 rounded-[12px] shadow-[0px_40px_80px_rgba(6,0,85,0.03)]">
                {submitted ? (
                  <div className="text-center py-12">
                    <span className="material-symbols-outlined text-[#070099] text-6xl mb-4 block" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <h3 className="text-2xl font-black text-[#070099] mb-3">Application Submitted!</h3>
                    <p className="text-[#454556]">We'll review your application and be in touch shortly with your access details.</p>
                  </div>
                ) : (
                  <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Full Name</label>
                        <input
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors placeholder-[#c6c4d9]/70 border-0"
                          placeholder="John Doe"
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Work Email</label>
                        <input
                          required
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                          className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors placeholder-[#c6c4d9]/70 border-0"
                          placeholder="john@company.industrial"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Company Name</label>
                      <input
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors placeholder-[#c6c4d9]/70 border-0"
                        placeholder="Advanced Robotics Ltd."
                        type="text"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Intent Profile</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label
                          className={`flex items-center gap-4 p-4 rounded-[10px] cursor-pointer transition-colors group ${intent === "buyer" ? "bg-[#EAEAEB]" : "bg-[#F5F5F7] hover:bg-[#EAEAEB]"}`}
                        >
                          <input
                            className="text-[#070099] focus:ring-0"
                            name="intent"
                            type="radio"
                            value="buyer"
                            checked={intent === "buyer"}
                            onChange={() => setIntent("buyer")}
                          />
                          <span className={`text-sm font-semibold transition-colors ${intent === "buyer" ? "text-[#070099]" : "text-[#454556] group-hover:text-[#070099]"}`}>
                            Interested as Buyer
                          </span>
                        </label>
                        <label
                          className={`flex items-center gap-4 p-4 rounded-[10px] cursor-pointer transition-colors group ${intent === "manufacturer" ? "bg-[#EAEAEB]" : "bg-[#F5F5F7] hover:bg-[#EAEAEB]"}`}
                        >
                          <input
                            className="text-[#070099] focus:ring-0"
                            name="intent"
                            type="radio"
                            value="manufacturer"
                            checked={intent === "manufacturer"}
                            onChange={() => setIntent("manufacturer")}
                          />
                          <span className={`text-sm font-semibold transition-colors ${intent === "manufacturer" ? "text-[#070099]" : "text-[#454556] group-hover:text-[#070099]"}`}>
                            Manufacturer
                          </span>
                        </label>
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#070099] text-white py-4 rounded-full font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Waitlist page footer */}
      <footer className="bg-[#f9f9f9] w-full py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 font-black text-[#1C1C5E] text-lg sm:text-xl mb-2">
              <img alt="Proquoment Logo" className="h-6 w-6 sm:h-7 sm:w-7 object-contain rounded-sm" src={LOGO_URL} />
              <span className="tracking-[-0.05em]">Proquoment</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.1em] font-medium text-slate-500">© 2026 Proquoment. all rights reserved</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {["Terms", "Privacy", "Security", "Contact"].map((item) => (
              <a key={item} className="text-[10px] uppercase tracking-[0.1em] font-medium text-slate-500 hover:text-indigo-600 transition-opacity opacity-80 hover:opacity-100" href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
