export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Contact Info */}
        <div>
          <span className="text-[10px] font-bold text-[#060055] tracking-[0.1em] uppercase mb-6 block">Global Operations</span>
          <h1 className="text-5xl lg:text-7xl font-black text-[#060055] tracking-tighter leading-none mb-12">
            Connect with<br />Proquoment
          </h1>
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#060055] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-lg">mail</span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 tracking-[0.1em] uppercase mb-1">Inquiries</div>
                <div className="text-xl font-bold text-[#1a1c1c]">Proquoment@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#060055] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-lg">phone</span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 tracking-[0.1em] uppercase mb-1">24X7 Support Line</div>
                <div className="text-xl font-bold text-[#1a1c1c]">+91-7982065422</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Ecosystem Card */}
        <div className="bg-white rounded-[16px] shadow-[0px_20px_40px_rgba(6,0,85,0.06)] p-10">
          <h2 className="text-3xl font-black text-[#1a1c1c] mb-2">Ecosystem</h2>
          <div className="w-10 h-1 bg-[#060055] rounded-full mb-8"></div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[
              { icon: 'share', label: 'Professional', name: 'LinkedIn' },
              { icon: 'public', label: 'Announcements', name: 'Twitter' },
              { icon: 'camera_alt', label: 'Visual Log', name: 'Instagram' },
              { icon: 'play_circle', label: 'Resources', name: 'YouTube' },
            ].map((item) => (
              <button
                key={item.name}
                className="bg-[#f3f3f3] hover:bg-[#eeeeee] transition-colors rounded-[10px] p-6 text-left"
              >
                <span className="material-symbols-outlined text-[#060055] mb-3 block text-2xl">{item.icon}</span>
                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">{item.label}</div>
                <div className="font-black text-[#1a1c1c] text-lg">{item.name}</div>
              </button>
            ))}
          </div>
          <button className="w-full rounded-[10px] p-6 text-left flex items-center justify-between bg-gradient-to-r from-[#060055] to-[#2d2dff] text-white hover:opacity-95 transition-opacity">
            <div>
              <div className="text-[10px] font-bold opacity-70 tracking-widest uppercase mb-1">Immediate Assistance</div>
              <div className="font-black text-xl">Book a Call</div>
            </div>
            <span className="material-symbols-outlined text-3xl">bolt</span>
          </button>
        </div>
      </div>
    </main>
  );
}
