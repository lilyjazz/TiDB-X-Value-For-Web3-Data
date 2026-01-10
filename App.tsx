import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChallengesSection from './components/ChallengesSection';
import ScenariosSection from './components/ScenariosSection';
import WithoutTidbSection from './components/WithoutTidbSection';
import ScrollReveal from './components/ScrollReveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <ChallengesSection />
        <ScenariosSection />
        <WithoutTidbSection />
        
        {/* Simple Footer / CTA Section */}
        <section className="py-28 bg-[#020617] relative border-t border-white/5 overflow-hidden">
          {/* Ambient Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight drop-shadow-sm">
                Ready to scale your dApp?
              </h2>
              
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Start with <span className="text-cyan-300 font-medium">$300 of free credits</span>. No credit card required. 
                Join thousands of developers using TiDB to power the next generation of Web3 applications.
              </p>
              
              <div className="flex justify-center mb-16">
                <a 
                  href="https://tidbcloud.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:-translate-y-1 duration-300"
                >
                  Start Building Now for Free
                </a>
              </div>
              
              <div className="border-t border-slate-800/50 pt-8 mt-8">
                <div className="text-slate-600 text-sm font-medium tracking-wide">
                  © {new Date().getFullYear()} TiDB X. All rights reserved.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;