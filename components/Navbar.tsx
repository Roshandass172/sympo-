
import React, { useState } from 'react';

const Navbar: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Bits', href: '#bits' },
    { name: 'Committee', href: '#bearers' },
    { name: 'Guide', href: '#ai-assistant' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C2C55]/80 backdrop-blur-2xl border-b border-blue-900/30 transition-all duration-500 shadow-2xl shadow-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-12 h-12 bg-[#16437d] border border-blue-400/20 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-[0_0_20px_rgba(12,44,85,0.4)] group-hover:rotate-12 transition-transform">
                D
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                DATRONIX<span className="text-blue-400">'26</span>
              </span>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xs font-black uppercase tracking-[0.2em] text-blue-100/50 hover:text-white transition-all hover:translate-y-[-2px]"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={onRegisterClick}
                className="px-8 py-3 bg-[#16437d] border border-blue-400/20 hover:bg-[#0C2C55] text-white rounded-xl text-xs font-black tracking-widest uppercase shadow-xl shadow-black/20 transition-all active:scale-95"
              >
                Register
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-3 text-white bg-[#0C2C55] rounded-xl border border-blue-900/30"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[60] bg-[#061a33]/98 backdrop-blur-3xl transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden`}>
        <div className="flex flex-col h-full p-10">
          <div className="flex items-center justify-between mb-20">
             <span className="text-2xl font-black text-white">MENU</span>
             <button onClick={() => setIsOpen(false)} className="p-4 text-white bg-[#0C2C55] border border-blue-900/30 rounded-2xl">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>
          <div className="flex flex-col gap-10 text-left">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-5xl font-black text-white/40 hover:text-blue-400 transition-colors tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { setIsOpen(false); onRegisterClick(); }}
              className="mt-12 px-10 py-5 bg-[#0C2C55] border border-blue-400/20 text-white rounded-2xl text-xl font-black tracking-widest shadow-2xl shadow-black/40"
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
