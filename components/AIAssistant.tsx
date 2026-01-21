
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const context = messages.slice(-4).map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
    const aiResponse = await getGeminiResponse(userMsg, context);

    setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-32 bg-[#040d1a] relative">
      {/* Background radial highlight influenced by #0C2C55 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-[#0C2C55]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">Symposium Guide</h2>
          <p className="text-xl text-blue-100/40 font-medium">Have a question? Our AI guide knows everything about DATRONIX '26.</p>
        </div>

        <div className="bg-[#061a33]/60 rounded-[2.5rem] border border-[#0C2C55] shadow-2xl overflow-hidden flex flex-col h-[650px] backdrop-blur-2xl">
          {/* Chat Header */}
          <div className="p-6 border-b border-[#0C2C55]/30 flex items-center justify-between bg-[#0C2C55]/20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#16437d] flex items-center justify-center border border-blue-400/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <span className="block font-bold text-white text-lg leading-none">Datronix Bot</span>
                <span className="text-xs text-blue-400 font-bold uppercase tracking-widest mt-1 opacity-60">Ready to Assist</span>
              </div>
            </div>
            <button 
              onClick={() => setMessages([])}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0C2C55]/40 text-blue-100/40 hover:text-white transition-all"
            >
              Reset
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 max-w-sm mx-auto">
                <div className="w-24 h-24 bg-[#0C2C55]/30 rounded-[2.5rem] flex items-center justify-center border border-blue-900/30">
                  <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white mb-4">Ask anything!</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <button onClick={() => setInput("What are the technical events?")} className="px-4 py-3 bg-[#0C2C55]/20 border border-blue-900/30 rounded-2xl text-sm text-blue-100/60 hover:text-white hover:bg-[#0C2C55] transition-all">List Technical Events</button>
                    <button onClick={() => setInput("How do I register for Hackathon?")} className="px-4 py-3 bg-[#0C2C55]/20 border border-blue-900/30 rounded-2xl text-sm text-blue-100/60 hover:text-white hover:bg-[#0C2C55] transition-all">Hackathon Registration</button>
                  </div>
                </div>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`max-w-[85%] rounded-[2rem] p-6 ${
                  m.role === 'user' 
                    ? 'bg-[#16437d] text-white shadow-xl shadow-[#0C2C55]/20' 
                    : 'bg-[#0C2C55]/40 border border-[#0C2C55] text-blue-50 leading-relaxed shadow-lg'
                }`}>
                  <p className="text-base whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#0C2C55]/40 border border-[#0C2C55] rounded-2xl p-5 flex gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-6 bg-[#0C2C55]/20 border-t border-[#0C2C55]/30">
            <div className="relative flex items-center gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How can I win the Prize Pool?"
                className="flex-1 bg-black/40 border border-[#0C2C55] rounded-2xl py-5 pl-8 pr-16 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-3 p-3 bg-[#16437d] text-white rounded-xl font-bold hover:bg-[#0C2C55] disabled:opacity-50 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AIAssistant;
