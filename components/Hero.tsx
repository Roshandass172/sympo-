
import React from 'react';

const Hero: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#040d1a]">
      {/* Background Bits: Animated Cubes and Glows */}
      
      {/* Original Cube 1 - Top Left */}
      <div className="absolute top-[15%] left-[10%] opacity-20 hidden lg:block animate-float">
        <div className="cube-container scale-75">
          <div className="cube" style={{ animationDuration: '12s' }}>
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
      </div>

      {/* New Cube 2 - Top Right (Small & Fast) */}
      <div className="absolute top-[10%] right-[15%] opacity-15 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="cube-container scale-[0.4]">
          <div className="cube" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
            <div className="cube-face front border-blue-400"></div>
            <div className="cube-face back border-blue-400"></div>
            <div className="cube-face right border-blue-400"></div>
            <div className="cube-face left border-blue-400"></div>
            <div className="cube-face top border-blue-400"></div>
            <div className="cube-face bottom border-blue-400"></div>
          </div>
        </div>
      </div>

      {/* New Cube 3 - Mid Left (Large & Slow) */}
      <div className="absolute top-[45%] left-[5%] opacity-[0.08] hidden lg:block animate-float" style={{ animationDelay: '3s' }}>
        <div className="cube-container scale-[1.2]">
          <div className="cube" style={{ animationDuration: '25s' }}>
            <div className="cube-face front bg-[#0C2C55]/40"></div>
            <div className="cube-face back bg-[#0C2C55]/40"></div>
            <div className="cube-face right bg-[#0C2C55]/40"></div>
            <div className="cube-face left bg-[#0C2C55]/40"></div>
            <div className="cube-face top bg-[#0C2C55]/40"></div>
            <div className="cube-face bottom bg-[#0C2C55]/40"></div>
          </div>
        </div>
      </div>

      {/* New Cube 4 - Center Behind Text (Very Large, Ghostly) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <div className="cube-container scale-[3]">
          <div className="cube" style={{ animationDuration: '40s' }}>
            <div className="cube-face front border-white/10"></div>
            <div className="cube-face back border-white/10"></div>
            <div className="cube-face right border-white/10"></div>
            <div className="cube-face left border-white/10"></div>
            <div className="cube-face top border-white/10"></div>
            <div className="cube-face bottom border-white/10"></div>
          </div>
        </div>
      </div>

      {/* Original Cube 5 - Bottom Right */}
      <div className="absolute bottom-[20%] right-[10%] opacity-20 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="cube-container scale-50">
          <div className="cube" style={{ animationDuration: '8s' }}>
            <div className="cube-face front bg-blue-400/20"></div>
            <div className="cube-face back bg-blue-400/20"></div>
            <div className="cube-face right bg-blue-400/20"></div>
            <div className="cube-face left bg-blue-400/20"></div>
            <div className="cube-face top bg-blue-400/20"></div>
            <div className="cube-face bottom bg-blue-400/20"></div>
          </div>
        </div>
      </div>

      {/* New Cube 6 - Bottom Left (Medium) */}
      <div className="absolute bottom-[10%] left-[18%] opacity-10 hidden lg:block animate-float" style={{ animationDelay: '4.5s' }}>
        <div className="cube-container scale-[0.6]">
          <div className="cube" style={{ animationDuration: '15s', animationTimingFunction: 'ease-in-out' }}>
            <div className="cube-face front border-blue-500/30"></div>
            <div className="cube-face back border-blue-500/30"></div>
            <div className="cube-face right border-blue-500/30"></div>
            <div className="cube-face left border-blue-500/30"></div>
            <div className="cube-face top border-blue-500/30"></div>
            <div className="cube-face bottom border-blue-500/30"></div>
          </div>
        </div>
      </div>

      {/* Royal Blue Atmosphere using #0C2C55 */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0C2C55]/30 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[#0C2C55]/20 rounded-full blur-[180px] animate-pulse [animation-delay:1.5s]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0C2C55]/40 border border-blue-400/20 text-blue-300 text-xs font-black uppercase tracking-[0.3em] mb-12 backdrop-blur-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping shadow-[0_0_10px_rgba(59,130,246,1)]" />
          EST. MARCH 2026
        </div>

        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-white mb-10 leading-[0.85] uppercase select-none">
          FUTURE <br />
          <span className="royal-text-gradient italic">UNLOCKED.</span>
        </h1>

        <p className="max-w-2xl text-xl md:text-2xl text-blue-100/40 font-medium mb-16 leading-relaxed">
          The 2026 technical symposium where curiosity meets computation. One stage, two days, infinite breakthroughs.
        </p>

        {/* Dynamic Counter Display */}
        <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 w-full pt-16 border-t border-[#0C2C55]/40 backdrop-blur-sm">
          {[
            { label: 'Events', val: '24' },
            { label: 'Prizes', val: '$10k+' },
            { label: 'Speakers', val: '12' },
            { label: 'Hackers', val: '500+' }
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <div className="text-5xl md:text-6xl font-black text-white group-hover:text-blue-400 transition-colors">{stat.val}</div>
              <div className="text-[10px] font-black text-blue-200/40 uppercase tracking-[0.4em] mt-3 group-hover:translate-x-1 transition-transform">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Futuristic Mesh Background using #0C2C55 */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-screen" 
           style={{ backgroundImage: 'radial-gradient(circle, #0C2C55 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
    </section>
  );
};

export default Hero;
