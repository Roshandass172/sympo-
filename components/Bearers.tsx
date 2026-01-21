
import React from 'react';
import { Bearer } from '../types';

const BEARERS: Bearer[] = [
  { name: 'Dr. Sarah Connor', role: 'General Chairperson', image: 'https://i.pravatar.cc/300?u=sarah' },
  { name: 'James Miller', role: 'Technical Lead', image: 'https://i.pravatar.cc/300?u=james' },
  { name: 'Elena Rodriguez', role: 'Creative Director', image: 'https://i.pravatar.cc/300?u=elena' },
  { name: 'David Kim', role: 'Head of Operations', image: 'https://i.pravatar.cc/300?u=david' },
];

const Bearers: React.FC = () => {
  return (
    <section id="bearers" className="py-32 bg-gradient-to-b from-black to-[#000814]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Masterminds.</h2>
          <p className="text-xl text-blue-100/40 font-medium max-w-2xl mx-auto">The dedicated committee driving the vision of DATRONIX '26.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {BEARERS.map((bearer, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-10 inline-block">
                {/* Reactive Border */}
                <div className="absolute -inset-4 border border-blue-600/0 group-hover:border-blue-600/40 rounded-[3rem] transition-all duration-700 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
                
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-[2.8rem] overflow-hidden bg-blue-900/10 p-1 group-hover:shadow-[0_20px_50px_rgba(0,86,255,0.2)] transition-all duration-500">
                  <img 
                    src={bearer.image} 
                    alt={bearer.name} 
                    className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h4 className="text-2xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors">{bearer.name}</h4>
              <p className="text-blue-600 font-black text-[10px] tracking-[0.3em] uppercase">{bearer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bearers;
