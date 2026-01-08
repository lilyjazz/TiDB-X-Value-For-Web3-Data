import React from 'react';
import { AlertTriangle, CheckCircle2, ServerCrash, RefreshCw, Zap, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ChallengesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1120] relative border-t border-white/5 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-red-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <ScrollReveal delay="0ms">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Event Flood: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Can Your DB Survive?
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay="200ms">
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The scale and velocity of Web3 data exposes the architectural flaws in legacy systems.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Problem Column */}
          <ScrollReveal 
            delay="400ms"
            className="relative group"
          >
             <div className="absolute -inset-1 bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
             <div className="relative bg-slate-900/80 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm h-full">
               <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 bg-red-500/10 rounded-lg">
                   <AlertTriangle className="w-6 h-6 text-red-500" />
                 </div>
                 <h3 className="text-xl font-bold text-white">The Reality</h3>
               </div>
               
               <div className="space-y-8">
                 <div className="flex gap-4">
                   <div className="mt-1">
                     <ServerCrash className="w-5 h-5 text-red-400" />
                   </div>
                   <div>
                     <h4 className="text-white font-medium mb-2">Ingestion Bottlenecks</h4>
                     <p className="text-slate-400 leading-relaxed text-sm">
                       Traditional DBs hit a wall with write throughput. They simply <span className="text-red-300">can’t handle millions of events per hour</span> across 100+ chains without massive latency or failures.
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="mt-1">
                     <RefreshCw className="w-5 h-5 text-red-400" />
                   </div>
                   <div>
                     <h4 className="text-white font-medium mb-2">Schema Evolution Headache</h4>
                     <p className="text-slate-400 leading-relaxed text-sm">
                        Smart contracts evolve constantly. Migrating rigid schemas is risky and frequently causes <span className="text-red-300">downtime</span> for critical dApps.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
          </ScrollReveal>

          {/* Solution Column */}
          <ScrollReveal 
            delay="600ms"
            className="relative group"
          >
             <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
             <div className="relative bg-slate-900/80 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm h-full">
               <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 bg-cyan-500/10 rounded-lg">
                   <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                 </div>
                 <h3 className="text-xl font-bold text-white">Why TiDB X</h3>
               </div>
               
               <div className="space-y-8">
                 <div className="flex gap-4">
                   <div className="mt-1">
                     <Layers className="w-5 h-5 text-cyan-400" />
                   </div>
                   <div>
                     <h4 className="text-white font-medium mb-2">Unified Ingestion</h4>
                     <p className="text-slate-400 leading-relaxed text-sm">
                       A single, unified system that handles <span className="text-cyan-300 font-medium">multi-chain ingestion and consolidation</span>. Scale writes linearly to keep up with the network.
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="mt-1">
                     <Zap className="w-5 h-5 text-cyan-400" />
                   </div>
                   <div>
                     <h4 className="text-white font-medium mb-2">Schema Flexibility</h4>
                     <p className="text-slate-400 leading-relaxed text-sm">
                       Native support for JSON and schema changes lets you adapt to <span className="text-cyan-300 font-medium">evolving smart contract data</span> instantly without downtime.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;