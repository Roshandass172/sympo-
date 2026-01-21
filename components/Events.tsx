
import React, { useState, useMemo } from 'react';
import { EventItem } from '../types';

const EVENTS_LIST: EventItem[] = [
  { id: 'e1', name: 'Code-X Hackathon', description: '24-hour intense coding challenge to solve industrial problems. Participants will build functional prototypes under pressure.', category: 'technical', time: 'Day 1 - 09:00' },
  { id: 'e3', name: 'UI/UX Masterclass', description: 'Interactive workshop on modern design principles, Figma best practices, and user psychology.', category: 'workshop', time: 'Day 1 - 11:00' },
  { id: 'e5', name: 'Paper Presentation', description: 'Showcase your research work to a panel of industry experts and academic veterans.', category: 'technical', time: 'Day 1 - 13:00' },
  { id: 'e4', name: 'Gaming Zone', description: 'Compete in popular e-sports titles like Valorant and FIFA for massive prizes.', category: 'non-technical', time: 'Day 2 - 10:00' },
  { id: 'e2', name: 'Robo Wars', description: 'Watch powerful custom-built bots battle for the crown of the ultimate arena survivor.', category: 'technical', time: 'Day 2 - 14:00' },
  { id: 'e6', name: 'Tech Quiz', description: 'A rapid-fire quiz testing your knowledge across AI, Web3, and Hardware engineering.', category: 'technical', time: 'Day 2 - 16:00' },
];

const Events: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Day 1');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredEvents = useMemo(() => {
    return EVENTS_LIST.filter(e => {
      const matchesDay = e.time.startsWith(selectedDay);
      const matchesCat = activeCategory === 'all' || e.category === activeCategory;
      return matchesDay && matchesCat;
    }).sort((a, b) => a.time.localeCompare(b.time));
  }, [selectedDay, activeCategory]);

  return (
    <section id="events" className="py-32 bg-[#040d1a] relative overflow-hidden">
      {/* Background radial highlight influenced by #0C2C55 */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#0C2C55]/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              Event <span className="royal-text-gradient">Timeline</span>
            </h2>
            <p className="text-xl text-blue-100/40 font-medium">
              A curated journey through technical excellence. Navigate by day or interest to plan your symposium experience.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-auto">
            {/* Day Selector using #0C2C55 */}
            <div className="flex p-2 bg-[#0C2C55]/30 rounded-2xl border border-blue-900/30 backdrop-blur-md self-end w-full md:w-auto">
              {['Day 1', 'Day 2'].map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex-1 md:w-36 py-4 rounded-xl text-sm font-black transition-all duration-300 ${
                    selectedDay === day 
                    ? 'bg-[#16437d] text-white shadow-[0_10px_30px_rgba(12,67,125,0.4)] translate-y-[-2px]' 
                    : 'text-blue-100/30 hover:text-white'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-end">
              {['all', 'technical', 'workshop', 'non-technical'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                    activeCategory === cat 
                    ? 'bg-blue-400 text-[#0C2C55] border-blue-400' 
                    : 'bg-transparent text-blue-100/40 border-blue-900/30 hover:border-blue-400 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'View All' : cat.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Timeline implementation */}
        <div className="relative">
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#0C2C55] to-transparent" />

          <div className="space-y-16">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className={`relative flex flex-col md:flex-row items-center gap-12 group ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[30px] md:left-1/2 top-0 md:top-12 -translate-x-1/2 z-20">
                    <div className="w-5 h-5 rounded-full bg-[#040d1a] border-4 border-[#0C2C55] shadow-[0_0_20px_rgba(12,44,85,1)] group-hover:scale-125 transition-all duration-500" />
                  </div>

                  {/* Desktop Side Label */}
                  <div className={`hidden md:block w-1/2 text-right px-12 ${index % 2 === 0 ? 'text-right' : 'text-left order-2'}`}>
                     <span className="text-4xl font-black text-[#0C2C55]/60 group-hover:text-blue-400/20 transition-colors uppercase italic tracking-tighter">
                       {event.time.split(' - ')[1]}
                     </span>
                  </div>

                  {/* Card Side */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0">
                    <div 
                      onClick={() => setExpandedId(expandedId === event.id ? null : event.id)}
                      className={`cursor-pointer p-8 md:p-10 rounded-[2.5rem] bg-[#0C2C55]/20 backdrop-blur-2xl border border-blue-900/40 hover:border-blue-400/40 transition-all duration-700 relative overflow-hidden group/card ${
                        expandedId === event.id ? 'bg-[#0C2C55]/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)]' : ''
                      }`}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <div className="px-4 py-1.5 rounded-full bg-[#16437d] text-white text-[9px] font-black uppercase tracking-widest shadow-lg">
                          {event.category}
                        </div>
                        <span className="md:hidden text-lg font-black text-blue-400">
                          {event.time.split(' - ')[1]}
                        </span>
                      </div>

                      <h3 className="text-3xl font-black text-white mb-4 group-hover/card:translate-x-1 transition-transform">{event.name}</h3>
                      
                      <div className={`overflow-hidden transition-all duration-500 ${
                        expandedId === event.id ? 'max-h-96 opacity-100' : 'max-h-16 opacity-50'
                      }`}>
                        <p className="text-lg text-blue-100/60 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="mt-8 pt-8 border-t border-blue-900/30 flex flex-wrap items-center justify-between gap-6">
                           <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-[#0C2C55] flex items-center justify-center">
                               <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" /></svg>
                             </div>
                             <span className="text-sm font-bold text-white">Entry: Free</span>
                           </div>
                           <button 
                             onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-reg')); }}
                             className="px-8 py-3 bg-[#16437d] hover:bg-[#0C2C55] border border-blue-400/20 text-white rounded-xl text-xs font-black tracking-widest uppercase transition-all shadow-xl active:scale-95"
                           >
                             Register
                           </button>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/40 group-hover/card:text-blue-400 transition-colors">
                        <span>{expandedId === event.id ? 'Minimize' : 'Expand Details'}</span>
                        <svg className={`w-4 h-4 transition-transform duration-500 ${expandedId === event.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-40 border-2 border-dashed border-[#0C2C55]/30 rounded-[3rem] bg-[#0C2C55]/5">
                <div className="text-5xl mb-6 opacity-30">🔭</div>
                <h3 className="text-2xl font-black text-white mb-2">Nothing found here</h3>
                <p className="text-blue-100/30">Adjust your filters to discover more events.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
