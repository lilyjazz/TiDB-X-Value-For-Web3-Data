import React from 'react';
import { ArrowRight, Box, Layers, Zap } from 'lucide-react';
import TerminalDemo from './TerminalDemo';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 lg:pt-24 bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        {/* Horizontal Drifting Blockchain Icons */}
        <img 
          src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029" 
          alt="" 
          className="absolute top-[15%] left-0 w-24 h-24 md:w-40 md:h-40 opacity-0 blur-[3px] animate-drift-right" 
          style={{ animationDuration: '14s' }}
        />
        <img 
          src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=029" 
          alt="" 
          className="absolute top-[28%] left-0 w-20 h-20 md:w-32 md:h-32 opacity-0 blur-[2px] animate-drift-left" 
          style={{ animationDelay: '2s', animationDuration: '16s' }}
        />
        <img 
          src="https://cryptologos.cc/logos/polygon-matic-logo.svg?v=029" 
          alt="" 
          className="absolute bottom-[35%] left-0 w-28 h-28 md:w-48 md:h-48 opacity-0 blur-[4px] animate-drift-right" 
          style={{ animationDelay: '5s', animationDuration: '18s' }}
        />
        <img 
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=029" 
          alt="" 
          className="absolute bottom-[15%] left-0 w-16 h-16 md:w-24 md:h-24 opacity-0 blur-[3px] animate-drift-left" 
          style={{ animationDelay: '1s', animationDuration: '13s' }}
        />
        <img 
          src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029" 
          alt="" 
          className="absolute top-[45%] left-0 w-24 h-24 md:w-36 md:h-36 opacity-0 blur-[5px] animate-drift-right" 
          style={{ animationDelay: '8s', animationDuration: '20s' }}
        />
        
        {/* Additional variation */}
        <img 
          src="https://cryptologos.cc/logos/chainlink-link-logo.svg?v=029" 
          alt="" 
          className="absolute bottom-[50%] left-0 w-12 h-12 md:w-20 md:h-20 opacity-0 blur-[2px] animate-drift-left" 
          style={{ animationDelay: '6s', animationDuration: '15s' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm animate-fade-slide-blur mb-8"
              style={{ animationDelay: '0ms' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">
                TiDB X for Web3
              </span>
            </div>

            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] animate-fade-slide-blur mb-6"
              style={{ animationDelay: '200ms' }}
            >
              Unified Data for the <br />
              <span className="text-gradient">Decentralized Web</span>
            </h1>

            <div 
              className="animate-fade-slide-blur mb-8"
              style={{ animationDelay: '400ms' }}
            >
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Consolidate on-chain and off-chain data into a single, scalable SQL layer. 
                Build real-time dApps without the complexity of ETL pipelines or indexing services.
              </p>
            </div>

            <div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-slide-blur mb-8"
              style={{ animationDelay: '600ms' }}
            >
              <a 
                href="https://tidbcloud.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-base hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2"
              >
                Start Building Free
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a 
                href="https://web3insights.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 text-white border border-slate-700 rounded-full font-semibold text-base hover:bg-slate-800 transition-all backdrop-blur-sm flex items-center justify-center gap-2 group"
              >
                <Box className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                View Demo
              </a>
            </div>

            <div 
              className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-500 animate-fade-slide-blur"
              style={{ animationDelay: '800ms' }}
            >
               <div className="flex items-center gap-2">
                 <Zap className="w-5 h-5 text-yellow-500" />
                 <span className="text-sm font-medium">Real-time HTAP</span>
               </div>
               <div className="flex items-center gap-2">
                 <Layers className="w-5 h-5 text-cyan-500" />
                 <span className="text-sm font-medium">Multi-chain Ready</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="font-bold text-violet-500 text-lg">SQL</div>
                 <span className="text-sm font-medium">Compatible</span>
               </div>
            </div>
          </div>

          {/* Right Column: Visual/Interactive */}
          <div 
            className="lg:w-1/2 w-full perspective-1000 animate-fade-slide-blur"
            style={{ animationDelay: '1000ms' }}
          >
             <div className="relative animate-float">
                {/* Decorative floating elements */}
                <div className="absolute -top-12 -right-8 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-12 w-32 h-32 bg-gradient-to-tr from-violet-600 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
                
                {/* Main Visual: Terminal */}
                <TerminalDemo />
                
                {/* Floating Badge */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 glass-card p-4 rounded-xl hidden xl:block shadow-2xl animate-float" style={{animationDelay: '1s'}}>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                         <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029" alt="ETH" className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-xs text-slate-400">Sync Status</span>
                         <span className="text-sm font-bold text-green-400">99.99% Live</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;