
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040d1a] py-24 border-t border-[#0C2C55]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#16437d] border border-blue-400/20 rounded-2xl flex items-center justify-center font-black text-white text-xl">
                D
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">DATRONIX<span className="text-blue-400">'26</span></span>
            </div>
            <p className="text-blue-100/40 font-medium leading-relaxed">
              Pushing the boundaries of technical excellence through collaboration and competition. Hosted at Easwari Engineering College.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="font-black text-white mb-6 uppercase tracking-widest text-[10px]">Portal</h5>
              <ul className="space-y-4 text-blue-100/40 text-sm font-bold uppercase tracking-wider">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#events" className="hover:text-blue-400 transition-colors">Events</a></li>
                <li><a href="#bearers" className="hover:text-blue-400 transition-colors">Committee</a></li>
                <li><a href="#ai-assistant" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-white mb-6 uppercase tracking-widest text-[10px]">Social</h5>
              <ul className="space-y-4 text-blue-100/40 text-sm font-bold uppercase tracking-wider">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0C2C55]/20 p-10 rounded-[2.5rem] border border-[#0C2C55]">
            <h5 className="font-black text-white mb-4">Stay Notified</h5>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-black/40 border border-blue-900/50 rounded-xl px-4 py-3 text-sm flex-grow focus:outline-none focus:border-blue-400 text-white" />
              <button className="p-3 bg-[#16437d] text-white rounded-xl hover:bg-[#0C2C55] transition-all border border-blue-400/20 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-[#0C2C55]/20 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-blue-100/20 text-[10px] font-black uppercase tracking-[0.4em]">
            &copy; 2026 DATRONIX SYMPOSIUM | EEC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 text-[10px] font-black text-blue-100/40 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
