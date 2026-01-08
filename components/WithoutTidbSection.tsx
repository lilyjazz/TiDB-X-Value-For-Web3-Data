import React from 'react';
import { Ban, CheckCircle2, Scale, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const WithoutTidbSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050B19] border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Know the Limits — <br className="hidden md:block"/>
              <span className="text-slate-400">When TiDB X Might Not Be the Best Fit</span>
            </h2>
            <a 
              href="https://www.pingcap.com/blog/tidbx-origins-architecture/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group"
            >
              Read the Architecture Guide
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Avoid Card */}
          <ScrollReveal delay="100ms" className="h-full">
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 h-full hover:border-red-900/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/10 rounded-lg">
                   <Ban className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Avoid TiDB X if all are met:</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0"></span>
                  <span className="leading-relaxed">Workload is small, single-node, or single-table (&lt; 1T, low QPS)</span>
                </li>
                <li className="flex gap-4 items-start text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0"></span>
                  <span className="leading-relaxed">Only simple OLTP queries are needed, without horizontal scaling or multi-tenant concerns</span>
                </li>
                <li className="flex gap-4 items-start text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0"></span>
                  <span className="leading-relaxed">Storage cost is not a concern, and traditional databases are sufficient</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Rule of Thumb Card */}
          <ScrollReveal delay="200ms" className="h-full">
            <div className="bg-gradient-to-br from-cyan-900/10 to-transparent border border-cyan-500/20 rounded-2xl p-8 h-full relative overflow-hidden flex flex-col justify-center">
               {/* Background accent */}
               <div className="absolute right-0 top-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
               
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Rule of Thumb</h3>
              </div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                  Use TiDB X when you need <span className="text-cyan-400">scalable databases</span> with <span className="text-cyan-400">evolving schema</span> and <span className="text-cyan-400">large workloads</span>.
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/5">
                   <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Scale className="w-4 h-4" />
                      <span>Balance cost, scale, and complexity wisely.</span>
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

export default WithoutTidbSection;