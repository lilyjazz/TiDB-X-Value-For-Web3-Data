import React from 'react';
import { Database, Activity, ShieldCheck, Globe, Cpu, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    title: "Unified Storage",
    description: "Store relational data alongside raw blockchain logs in a single distributed database."
  },
  {
    icon: <Activity className="w-6 h-6 text-violet-400" />,
    title: "Real-time Analytics",
    description: "Query fresh data milliseconds after it's minted on-chain. No more waiting for indexers."
  },
  {
    icon: <Code2 className="w-6 h-6 text-pink-400" />,
    title: "Standard SQL",
    description: "Use the MySQL ecosystem you already know. Compatible with all your favorite ORMs and BI tools."
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: "Multi-Chain Native",
    description: "Seamlessly join data across Ethereum, Solana, Polygon, and your off-chain user data."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    title: "Enterprise Grade",
    description: "Built on TiDB, trusted by thousands of enterprises for high availability and strong consistency."
  },
  {
    icon: <Cpu className="w-6 h-6 text-yellow-400" />,
    title: "Serverless Scale",
    description: "Scale compute and storage independently. Pay only for what you use with TiDB Cloud."
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl font-bold text-white mb-4">Why Web3 Builders Choose TiDB X</h2>
           <p className="text-slate-400">
             Stop stitching together fragmented infrastructure. Get a single source of truth for your dApp.
           </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal 
              key={idx} 
              delay={`${idx * 100}ms`}
              className="glass-card p-6 rounded-2xl hover:bg-slate-800/50 transition-colors duration-300 group cursor-default h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;