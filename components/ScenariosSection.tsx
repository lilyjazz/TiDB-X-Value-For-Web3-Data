import React from 'react';
import { XCircle, CheckCircle, TrendingUp, AlertOctagon, Database, ArrowRight, Server, FileWarning } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ScenariosSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-World Scenarios</h2>
            <p className="text-slate-400">See how TiDB X transforms specific Web3 data challenges.</p>
          </ScrollReveal>
        </div>

        <div className="space-y-24">
          
          {/* Scenario 1: Scalability */}
          <div className="relative">
            <ScrollReveal>
               <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-lg shadow-red-900/20">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    Millions of Events per Hour, Tens of Terabytes per Chain <br />
                    <span className="text-slate-500 text-xl md:text-2xl font-medium">– Costs Skyrocket</span>
                  </h3>
               </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <ScrollReveal delay="150ms" className="bg-slate-800 p-2 rounded-full border border-slate-700 shadow-xl">
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                </ScrollReveal>
              </div>

              {/* Before Card */}
              <ScrollReveal delay="100ms" className="bg-[#0f172a]/50 border border-red-900/30 rounded-2xl p-6 md:p-8 flex flex-col h-full">
                 <div className="flex items-center gap-2 mb-6 text-red-400 font-bold uppercase tracking-wider text-sm border-b border-red-900/30 pb-4">
                   <XCircle className="w-5 h-5" /> What Breaks First
                 </div>
                 <ul className="space-y-4 text-slate-400 flex-grow">
                   <li className="flex gap-3 items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0"></span>
                     <span>Traditional databases struggle with multi-chain append-only workloads.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0"></span>
                     <span>Storing hundreds of TBs of historical chain data incurs massive storage costs.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0"></span>
                     <span>Large tables with multi-modal data (transactions, NFT metadata) hit scalability limits quickly.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0"></span>
                     <span>Sharding and manual scaling add operational complexity and risk.</span>
                   </li>
                 </ul>
              </ScrollReveal>

              {/* After Card */}
              <ScrollReveal delay="200ms" className="bg-gradient-to-br from-cyan-900/10 to-violet-900/10 border border-cyan-500/20 rounded-2xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden group">
                 <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                 <div className="flex items-center gap-2 mb-6 text-cyan-400 font-bold uppercase tracking-wider text-sm border-b border-cyan-500/20 pb-4">
                   <CheckCircle className="w-5 h-5" /> With TiDB X
                 </div>
                 <ul className="space-y-4 text-slate-300 flex-grow relative z-10">
                   <li className="flex gap-3 items-start">
                     <TrendingUp className="w-5 h-5 text-cyan-500 shrink-0" />
                     <span><strong className="text-white">High-concurrency writes:</strong> handles millions of events per hour natively.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <Database className="w-5 h-5 text-cyan-500 shrink-0" />
                     <span><strong className="text-white">Tiered storage:</strong> hot data in SSDs, historical/cold data in cheaper storage — dramatically reduces costs.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <Server className="w-5 h-5 text-cyan-500 shrink-0" />
                     <span><strong className="text-white">Elastic horizontal scaling:</strong> system grows seamlessly with data volume.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                     <span>No complex sharding needed.</span>
                   </li>
                 </ul>
              </ScrollReveal>
            </div>

            {/* Key Takeaway */}
            <ScrollReveal delay="300ms" className="mt-6 bg-slate-900/50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
               <p className="text-slate-300 italic">
                 <span className="font-bold text-cyan-400 not-italic">Key Takeaway:</span> TiDB X enables cost-effective, scalable storage for massive multi-chain workloads, supporting both high-speed writes and tiered storage for efficient long-term retention.
               </p>
            </ScrollReveal>
          </div>

          {/* Scenario 2: Online DDL */}
          <div className="relative">
            <ScrollReveal>
               <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg shadow-lg shadow-pink-900/20">
                    <FileWarning className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    Every New Contract Risks Breaking Your Pipelines <br />
                    <span className="text-slate-500 text-xl md:text-2xl font-medium">– Until TiDB X</span>
                  </h3>
               </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <ScrollReveal delay="150ms" className="bg-slate-800 p-2 rounded-full border border-slate-700 shadow-xl">
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                </ScrollReveal>
              </div>

              {/* Before Card */}
              <ScrollReveal delay="100ms" className="bg-[#0f172a]/50 border border-red-900/30 rounded-2xl p-6 md:p-8 flex flex-col h-full">
                 <div className="flex items-center gap-2 mb-6 text-red-400 font-bold uppercase tracking-wider text-sm border-b border-red-900/30 pb-4">
                   <AlertOctagon className="w-5 h-5" /> What Breaks First
                 </div>
                 <ul className="space-y-4 text-slate-400 flex-grow">
                   <li className="flex gap-3 items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0"></span>
                     <span>Smart contracts, NFT metadata, and DeFi protocol schemas constantly evolve.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0"></span>
                     <span>Traditional OLTP databases require downtime or complex migrations to accommodate schema changes.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0"></span>
                     <span>Multi-modal and heterogeneous data forces compromises: slower ingestion, partial data loss, or schema rigidness.</span>
                   </li>
                 </ul>
              </ScrollReveal>

              {/* After Card */}
              <ScrollReveal delay="200ms" className="bg-gradient-to-br from-cyan-900/10 to-violet-900/10 border border-cyan-500/20 rounded-2xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden group">
                 <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                 <div className="flex items-center gap-2 mb-6 text-cyan-400 font-bold uppercase tracking-wider text-sm border-b border-cyan-500/20 pb-4">
                   <CheckCircle className="w-5 h-5" /> With TiDB X
                 </div>
                 <ul className="space-y-4 text-slate-300 flex-grow relative z-10">
                   <li className="flex gap-3 items-start">
                     <TrendingUp className="w-5 h-5 text-violet-400 shrink-0" />
                     <span><strong className="text-white">Online DDL</strong> allows schema changes without blocking reads/writes.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <Database className="w-5 h-5 text-violet-400 shrink-0" />
                     <span><strong className="text-white">Flexible, schema-aware storage</strong> supports heterogeneous contract data.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                     <CheckCircle className="w-5 h-5 text-violet-400 shrink-0" />
                     <span>New chains, contracts, and token types can be onboarded instantly.</span>
                   </li>
                 </ul>
              </ScrollReveal>
            </div>

            {/* Key Takeaway */}
            <ScrollReveal delay="300ms" className="mt-6 bg-slate-900/50 border-l-4 border-violet-500 p-6 rounded-r-xl">
               <p className="text-slate-300 italic">
                 <span className="font-bold text-violet-400 not-italic">Key Takeaway:</span> TiDB X transforms schema evolution from a risk into a fast, safe, and flexible process, letting teams innovate across multiple chains without downtime or data loss.
               </p>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;