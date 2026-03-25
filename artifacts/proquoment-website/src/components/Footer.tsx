import { Link } from "wouter";

const LOGO_URL = "/Logo.png";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 bg-[#eeeeee]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-full">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img alt="Proquoment Logo" className="w-6 h-6 rounded shadow-sm" src={LOGO_URL} />
            <div className="text-xl font-black text-[#060055]">Proquoment</div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            The technical authority in global industrial sourcing and supply chain architecture.
          </p>
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#060055] tracking-widest uppercase mb-6 block">Platform</span>
          <ul className="space-y-4">
            <li><Link href="/case-studies" className="text-sm text-slate-600 hover:text-[#060055] transition-all">Case Studies</Link></li>
            <li><a href="#" className="text-sm text-slate-600 hover:text-[#060055] transition-all">Solutions</a></li>
            <li><a href="#" className="text-sm text-slate-600 hover:text-[#060055] transition-all">API Documentation</a></li>
          </ul>
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#060055] tracking-widest uppercase mb-6 block">Legal</span>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-slate-600 hover:text-[#060055] transition-all">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-slate-600 hover:text-[#060055] transition-all">Terms of Service</a></li>
            <li><a href="#" className="text-sm text-slate-600 hover:text-[#060055] transition-all">Security</a></li>
          </ul>
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#060055] tracking-widest uppercase mb-6 block">Newsletter</span>
          <div className="flex gap-2">
            <input
              className="bg-white border-none rounded-full px-4 py-2 text-xs flex-1 outline-none ring-1 ring-slate-200 focus:ring-[#060055]"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-[#060055] text-white p-2 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20 px-12 border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-slate-500">© 2026 Proquoment. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-[#060055] transition-colors">
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-[#060055] transition-colors">
            <span className="material-symbols-outlined text-sm">mail</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-[#060055] transition-colors">
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
