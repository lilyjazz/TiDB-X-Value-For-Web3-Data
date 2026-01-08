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
        <section className="py-20 border-t border-slate-900 bg-[#020617] relative z-10">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-white mb-8">Ready to scale your dApp?</h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Start with $300 of free credits. No credit card required. Join thousands of developers using TiDB to power the next generation of Web3 applications.
              </p>
              <div className="flex justify-center">
                <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1 inline-block">
                  Start Building Now for Free
                </a>
              </div>
              <div className="mt-12 text-slate-600 text-sm">
                © {new Date().getFullYear()} TiDB X. All rights reserved.
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;