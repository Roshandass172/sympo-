
import React from 'react';
import { Achievement } from '../types';

const STATS: Achievement[] = [
  { year: '2025', title: 'Global Sponsorship', detail: 'Secured pivotal support from leading tech organizations for a future-ready event.' },
  { year: '2024', title: 'Peak Participation', detail: 'Reached an astounding 6,500 attendees across major regional institutions.' },
  { year: '2023', title: 'Stellar Debut', detail: 'Established a benchmark for excellence with 4,500 participants and innovative projects.' },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-32 bg-[#040d1a] relative">
       {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#0C2C55]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0C2C55] border border-blue-400/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 w-fit">
              Milestones
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">Legacy of <br/> <span className="royal-text-gradient">Excellence.</span></h2>
            <p className="text-xl text-blue-100/40 font-medium leading-relaxed mb-12">
              For nearly a decade, DATRONIX has been the benchmark for technical gatherings at Easwari Engineering College.
            </p>
            <div className="p-10 bg-[#0C2C55] border border-blue-400/20 rounded-[3rem] shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="text-7xl font-black mb-2 relative z-10">98%</div>
              <div className="text-sm font-black text-blue-300 uppercase tracking-[0.2em] relative z-10">Satisfaction Rate</div>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-10">
            {STATS.map((stat, i) => (
              <div key={i} className="group relative p-10 bg-[#0C2C55]/10 border border-[#0C2C55] rounded-[2.5rem] hover:bg-[#0C2C55]/30 transition-all duration-500">
                <div className="absolute top-8 right-10 text-7xl font-black text-blue-400/5 group-hover:text-blue-400/10 transition-all duration-700 select-none">
                  {stat.year}
                </div>
                <h4 className="text-3xl font-black text-white mb-4 relative z-10 group-hover:text-blue-400 transition-colors">
                  {stat.title}
                </h4>
                <p className="text-lg text-blue-100/50 relative z-10 max-w-lg leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
