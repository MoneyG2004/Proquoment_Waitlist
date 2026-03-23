import { Link } from "wouter";

export default function CaseStudiesPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="relative px-8 md:px-12 py-20 overflow-hidden">
        <div className="absolute inset-0 halftone-bg -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8">
            <span className="text-label-caps text-[#060055] mb-4 block">Precision Results</span>
            <h1 className="text-display text-[#060055] mb-8 max-w-3xl">
              Quantifiable Impact in <br />Global Sourcing.
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              We don't just find suppliers. We re-engineer supply chains for the world's most demanding brands through technical rigor and industrial authority.
            </p>
          </div>
          <div className="md:col-span-4 self-end">
            <div className="bg-white p-8 rounded-[10px] shadow-[0px_20px_40px_rgba(6,0,85,0.04)]">
              <div className="text-[#060055] text-4xl font-black mb-1">−42%</div>
              <p className="text-label-caps opacity-60">Avg. Operational Waste Reduc.</p>
              <div className="mt-6 flex items-center gap-2 text-[#060055]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>colors_spark</span>
                <span className="text-xs font-bold tracking-tight">AI-Optimized Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-[#eeeeee] py-24 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* 1. Coastline Apparel */}
            <div className="md:col-span-7 bg-white rounded-[10px] shadow-[0px_20px_40px_rgba(6,0,85,0.04)] overflow-hidden flex flex-col md:flex-row group transition-all duration-300">
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 relative">
                <img
                  alt="Model wearing premium apparel outdoors"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEWn-ZvSPs5LwxNXr_3K63cCa0NVuG94b-DuFcBOpWMfgCVE-hWnt7tkKfdD0vM6ip7UX6xLsLDZVyZvYBv752_8P4NMdB5MkG6bB1SNIqGXntMlYUsjd0j9iNnkmMNgzHRYxlwL5g4WOPg2PWCs85XlWTvi6fLmL02A_fmslenyo2BmUMFIPIriGpPNxSYm3Fmfc33FLc_j6EUIJc293kr3kOnWRRleLhOjCitGC8xbGUPxKP8GsQ0jXQ5LhHoYur-wsBgqrruy3C"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">USA</div>
              </div>
              <div className="p-10 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-black text-[#060055] mb-2">Coastline Apparel</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">Optimization of Southeast Asian manufacturing hubs for high-volume apparel distribution.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[#060055] text-2xl font-bold">−22%</span>
                      <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">Landed Cost</p>
                    </div>
                    <div>
                      <span className="text-[#060055] text-2xl font-bold">−84%</span>
                      <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">Rejects</p>
                    </div>
                  </div>
                </div>
                <a className="mt-8 text-[#060055] text-xs font-bold tracking-widest uppercase flex items-center group/link" href="#">
                  View Analysis <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 2. NOMO Goods */}
            <div className="md:col-span-5 bg-white rounded-[10px] shadow-[0px_20px_40px_rgba(6,0,85,0.04)] p-10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="bg-slate-200 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#060055]">home</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Sweden</span>
                </div>
                <h3 className="text-2xl font-black text-[#060055] mb-2">NOMO Goods</h3>
                <p className="text-slate-500 text-sm mb-6">Home textiles margin recovery project.</p>
                <div className="bg-blue-50 p-6 rounded-[8px]">
                  <span className="text-[#060055] text-4xl font-black block">+34%</span>
                  <span className="text-label-caps text-[#060055] opacity-60">Gross Margin Growth</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-6 font-medium italic">Project Timeline: 7 Weeks</p>
            </div>

            {/* 3. Harlo Home */}
            <div className="md:col-span-5 bg-[#060055] text-white rounded-[10px] shadow-[0px_20px_40px_rgba(6,0,85,0.04)] p-10">
              <div className="mb-12">
                <span className="text-[10px] font-bold opacity-60 tracking-widest uppercase">UK | Canvas & Bags</span>
                <h3 className="text-2xl font-black mt-2">Harlo Home</h3>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="text-3xl font-bold">£2.1M</div>
                  <p className="text-[10px] font-bold opacity-60 tracking-widest uppercase mt-1">New Line Revenue</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-white/20"></div>
                  <div className="text-xs font-bold tracking-widest uppercase px-4 py-2 border border-white/20 rounded-full">14 Weeks to shelf</div>
                </div>
              </div>
              <button className="mt-12 w-full py-4 bg-white text-[#060055] rounded-full text-xs font-bold tracking-widest uppercase hover:bg-opacity-90 transition-all">Download PDF</button>
            </div>

            {/* 4. Forrest & Reed */}
            <div className="md:col-span-7 bg-white rounded-[10px] shadow-[0px_20px_40px_rgba(6,0,85,0.04)] overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <img
                  alt="High quality leather texture close up"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrZ1QiiCtQxLFMiDIds7u5b7MoZs5v8SkbrLiV23OI-31Yq69zdDSpYY5rdjDn_BzwTJFKa33I8yaDBbXW_j3gTb7Yux8vhlR_WsoOvS_EEAt26uhuAXxNnA-uBXTeji3_v12A0U8Ib0hrOcptWrjHs47PZfEZD_0BQfWx1HvcrYmurBeZjJm4PjJ6ww4uQ8sfzxp3WOku6CwFMq2YTbBQocfkTyX4RHWqGG3PZbYcaXoAUxbHzoffmB0e4-1OTROaX6Cg_kCIMPAE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060055]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-10 flex items-center gap-4">
                  <div className="text-white">
                    <div className="text-xl font-black">Forrest &amp; Reed</div>
                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-80">Australia</div>
                  </div>
                </div>
              </div>
              <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">Strategic sourcing of sustainable leather goods with verified ethical compliance across the entire Tier-2 supply chain.</p>
                  <div className="flex items-center gap-2 text-[#060055]">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    <span className="text-xs font-bold tracking-tight">LWG Gold Certification</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end text-right">
                  <span className="text-[#060055] text-5xl font-black tracking-tighter">−26%</span>
                  <span className="text-label-caps text-slate-400 mt-2">Operational Cost Basis</span>
                </div>
              </div>
            </div>

            {/* 5. Meridian Co. */}
            <div className="md:col-span-4 bg-white rounded-[10px] shadow-[0px_20px_40px_rgba(6,0,85,0.04)] p-10 flex flex-col">
              <div className="flex justify-between mb-8">
                <span className="material-symbols-outlined text-[#060055]">settings_suggest</span>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Germany</span>
              </div>
              <h3 className="text-xl font-black text-[#060055] mb-4">Meridian Co.</h3>
              <p className="text-slate-500 text-sm mb-10">Industrial components lead-time compression.</p>
              <div className="relative pl-6 border-l-2 border-[#060055]/10 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[26px] top-1 w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Baseline</div>
                  <div className="text-xl font-bold text-slate-600">14 Weeks</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[26px] top-1 w-2 h-2 rounded-full bg-[#060055]"></div>
                  <div className="text-sm font-bold text-[#060055] uppercase tracking-widest">Optimized</div>
                  <div className="text-2xl font-black text-[#060055]">21 Days</div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-slate-100">
                <span className="text-[#060055] font-black text-xl">−75% Lead Time</span>
              </div>
            </div>

            {/* 6. Arket Supply */}
            <div className="md:col-span-8 bg-white rounded-[10px] shadow-[0px_20px_40px_rgba(6,0,85,0.04)] p-12 flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <span className="text-label-caps text-blue-500 mb-4 block">Market Entry</span>
                <h3 className="text-3xl font-black text-[#060055] mb-6">Arket Supply</h3>
                <p className="text-slate-500 leading-relaxed mb-8">Rapid deployment of a multi-category sports goods line for Northern European markets, covering logistics, compliance, and quality control.</p>
                <div className="flex gap-10">
                  <div>
                    <div className="text-2xl font-bold text-[#060055]">45</div>
                    <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">SKUs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#060055]">8</div>
                    <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Categories</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">€4.8M</div>
                    <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Y1 Revenue</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-[#f9f9f9] rounded-[8px] p-8 flex flex-col justify-center items-center text-center">
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-4">Netherlands</span>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-[#060055] text-3xl">sports_basketball</span>
                </div>
                <p className="text-xs font-bold text-[#060055] uppercase tracking-tighter">Sports Goods Partner</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#060055] mb-8 leading-tight">Ready to see these numbers in your balance sheet?</h2>
          <p className="text-lg text-slate-600 mb-12">Our industrial sourcing engine is built for scale. Let's engineer your competitive advantage.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/waitlist">
              <button className="bg-[#060055] text-white px-10 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all">Schedule a Consultation</button>
            </Link>
            <Link href="/waitlist">
              <button className="bg-transparent border-2 border-slate-200 text-[#060055] px-10 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:border-[#060055] transition-all">Join Waitlist</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
