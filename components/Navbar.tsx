import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { TiDBLogo } from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="https://www.pingcap.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <TiDBLogo />
          </a>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="https://www.pingcap.com/customers/?industry=web3" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-slate-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Solutions</a>
              <a href="https://www.pingcap.com/education/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-slate-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Developers</a>
              <a href="https://www.pingcap.com/trust-hub/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-slate-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Trush Hub</a>
              <a href="https://www.pingcap.com/pricing/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-slate-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 hover:bg-slate-200 px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1 group">
                Start for Free
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
             </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="https://www.pingcap.com/customers/?industry=web3" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Solutions</a>
            <a href="https://www.pingcap.com/education/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Developers</a>
            <a href="https://www.pingcap.com/trust-hub/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Trush Hub</a>
            <a href="https://www.pingcap.com/pricing/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-base font-medium transition-colors">
              Start for Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;