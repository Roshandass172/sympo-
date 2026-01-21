
import React, { useState } from 'react';
import { ComponentBit } from '../types';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const BITS: ComponentBit[] = [
  { id: '1', name: '3D Cube', description: 'Interactive geometric bit with CSS-3D transformation.', category: 'display', complexity: 'Medium' },
  { id: '2', name: 'Glass Card', description: 'Frosted glass effect with dynamic light trailing.', category: 'display', complexity: 'Simple' },
  { id: '3', name: 'Live Metrics', description: 'Real-time data visualization bits using Recharts.', category: 'data', complexity: 'Advanced' },
  { id: '4', name: 'AI Guide', description: 'Gemini-powered natural language interaction bit.', category: 'ai', complexity: 'Advanced' },
  { id: '5', name: 'Spotlight', description: 'Hover-based grid illumination effect.', category: 'display', complexity: 'Medium' },
  { id: '6', name: 'Pulse Button', description: 'Haptic-simulating buttons with depth.', category: 'interaction', complexity: 'Simple' },
];

const mockData = [
  { name: 'A', uv: 20 },
  { name: 'B', uv: 45 },
  { name: 'C', uv: 30 },
  { name: 'D', uv: 70 },
  { name: 'E', uv: 40 },
];

const Showcase: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredBits = filter === 'all' ? BITS : BITS.filter(b => b.category === filter);

  return (
    <section id="bits" className="py-32 bg-[#040d1a] relative overflow-hidden">
      {/* Background glow influenced by #0C2C55 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0C2C55]/5 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              The <span className="royal-text-gradient">Bits</span> Collection
            </h2>
            <p className="text-xl text-blue-100/40 font-medium">
              Reusable interactive building blocks that power the DATRONIX '26 digital experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['all', 'interaction', 'display', 'data', 'ai'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                  filter === cat 
                  ? 'bg-blue-400 text-[#0C2C55] border-blue-400' 
                  : 'bg-[#0C2C55]/20 text-blue-100/40 border-blue-900/30 hover:border-blue-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBits.map(bit => (
            <div key={bit.id} className="group relative bg-[#0C2C55]/10 border border-[#0C2C55]/30 rounded-[2.5rem] p-10 hover:border-blue-400/50 transition-all duration-700 backdrop-blur-xl">
              <div className="flex justify-between items-start mb-8">
                <span className={`px-4 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                  bit.complexity === 'Simple' ? 'bg-green-500/10 text-green-400' :
                  bit.complexity === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-red-500/10 text-red-400'
                }`}>
                  {bit.complexity}
                </span>
                <div className="p-2 bg-[#0C2C55]/40 rounded-lg text-blue-400/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">{bit.name}</h3>
              <p className="text-blue-100/40 text-sm mb-10 leading-relaxed font-medium">{bit.description}</p>

              {/* Bit Preview Canvas */}
              <div className="h-48 bg-black/40 rounded-3xl flex items-center justify-center border border-[#0C2C55]/50 mb-2 overflow-hidden relative">
                {bit.id === '1' ? (
                  <div className="cube-container scale-[0.6]">
                    <div className="cube">
                      <div className="cube-face front"></div>
                      <div className="cube-face back"></div>
                      <div className="cube-face right"></div>
                      <div className="cube-face left"></div>
                      <div className="cube-face top"></div>
                      <div className="cube-face bottom"></div>
                    </div>
                  </div>
                ) : bit.id === '3' ? (
                  <div className="w-full h-full p-4 pt-10">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={mockData}>
                        <Area type="monotone" dataKey="uv" stroke="#3b82f6" fill="#3b82f633" strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                ) : bit.id === '6' ? (
                  <button className="px-8 py-4 bg-[#16437d] text-white rounded-2xl text-xs font-black tracking-widest uppercase shadow-xl border border-blue-400/20 active:scale-90 transition-all">
                    Interaction
                  </button>
                ) : bit.id === '2' ? (
                  <div className="w-24 h-32 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md relative overflow-hidden group/glass">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                    <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-400/20 blur-xl rounded-full" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-[#0C2C55] rounded-2xl border border-blue-400/20 flex items-center justify-center animate-pulse">
                     <div className="w-6 h-6 bg-blue-400/40 rounded-full" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
