
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#040d1a]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0C2C55] to-transparent" />
      <div className="absolute -left-20 top-40 w-96 h-96 bg-[#0C2C55]/10 blur-[120px] rounded-full" />
      <div className="absolute -right-20 bottom-40 w-96 h-96 bg-[#0C2C55]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-32">
          
          {/* Section: About the College */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#0C2C55] border border-blue-400/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                The Institution
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                ABOUT THE <span className="royal-text-gradient">COLLEGE</span>
              </h2>
              <div className="space-y-6 text-lg text-blue-100/60 leading-relaxed font-medium">
                <p>
                  Easwari Engineering College, an autonomous institution affiliated with Anna University, was founded in 1996. In 2020, the college established the Department of Artificial Intelligence and Data Science to foster innovation and integrate advanced technologies.
                </p>
                <p>
                  The department is committed to promoting student success by delivering a comprehensive education in data science, machine learning, and AI, supported by industry collaborations, practical training, and personal development initiatives.
                </p>
                <p className="border-l-4 border-[#0C2C55] pl-6 italic text-blue-100/40">
                  This approach equips students with the skills and knowledge necessary for successful careers in these fields, ensuring graduates are well-prepared to excel in these rapidly advancing domains.
                </p>
              </div>
            </div>
            
            {/* College Entrance Image */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-[#0C2C55]/40 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/3] rounded-[3rem] bg-[#0C2C55]/20 border border-blue-400/20 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000" 
                  alt="Easwari Engineering College Entrance" 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C55]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-xs font-black text-white uppercase tracking-widest bg-[#0C2C55] px-4 py-2 rounded-lg">Main Campus Gate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: About Datronix */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Campus Courtyard Image Grid */}
            <div className="lg:col-span-5 relative group">
              <div className="grid grid-cols-1 gap-6">
                <div className="relative aspect-[16/10] rounded-[3rem] bg-[#0C2C55]/20 border border-blue-400/20 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000" 
                    alt="Easwari Engineering College Courtyard" 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0C2C55]/60 to-transparent opacity-40" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-32 rounded-[2rem] bg-[#0C2C55] flex flex-col items-center justify-center border border-blue-400/20">
                    <span className="text-3xl font-black text-white">6.5K</span>
                    <span className="text-[8px] font-bold text-blue-300 uppercase tracking-widest">Participants</span>
                  </div>
                  <div className="h-32 rounded-[2rem] bg-blue-400 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-[#0C2C55]">50+</span>
                    <span className="text-[8px] font-bold text-[#0C2C55]/60 uppercase tracking-widest">Live Stalls</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 lg:pl-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#0C2C55] border border-blue-400/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                The Evolution
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                ABOUT <span className="royal-text-gradient">DATRONIX</span>
              </h2>
              <div className="space-y-6 text-lg text-blue-100/60 leading-relaxed font-medium">
                <p>
                  Datronix, the national-level symposium, has become a hallmark of technological innovation and collaboration. Its inaugural edition in 2023 set a benchmark for excellence, bringing together 4,500 participants from across various institutions.
                </p>
                <p>
                  Building on its stellar debut, the second edition in 2024 drawing an astounding 6,500 participants. Esteemed institutions like <span className="text-white font-bold">Sairam, St. Joseph’s, Saveetha, Panimalar, and REC</span> graced the event, elevating its stature.
                </p>
                <p>
                  Over 50 interactive stalls showcased cutting-edge projects, cementing Datronix as an unmissable event. Our sponsors in 2025 played a pivotal role in bringing this vision to life, encouraging the growth of budding talent.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
