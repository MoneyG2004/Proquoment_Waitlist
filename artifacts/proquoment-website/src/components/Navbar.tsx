import { Link, useLocation } from "wouter";

const LOGO_URL = "/Logo.png";

export default function Navbar() {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Platform" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-[0px_4px_20px_rgba(6,0,85,0.04)]">
      <div className="flex justify-between items-center px-6 lg:px-12 py-3 lg:py-4 w-full max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-2 lg:gap-3">
          <img alt="Proquoment Logo" className="h-8 lg:h-9 w-auto rounded-sm" src={LOGO_URL} />
          <span className="text-xl lg:text-2xl font-black tracking-tighter text-[#060055]">Proquoment</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-[#060055] border-b-2 border-[#060055] pb-1"
                    : "text-slate-500 hover:text-[#060055]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link href="/waitlist">
          <button className="bg-[#060055] text-white px-5 lg:px-8 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-bold hover:opacity-90 transition-all active:scale-95">
            Join Waitlist
          </button>
        </Link>
      </div>
    </nav>
  );
}
