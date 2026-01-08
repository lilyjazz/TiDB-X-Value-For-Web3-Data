import React, { useState } from 'react';
import { Play, Copy, Check, Loader2 } from 'lucide-react';

const TerminalDemo: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'running' | 'success'>('idle');

  const sqlCode = `SELECT 
  block_number, 
  count(*) as tx_count,
  sum(gas_used) as total_gas
FROM ethereum.transactions
WHERE block_time > NOW() - INTERVAL 1 HOUR
GROUP BY block_number
ORDER BY block_number DESC
LIMIT 5;`;

  const handleRun = () => {
    if (status === 'running') return;
    setStatus('running');
    
    // Simulate query execution time
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group w-full max-w-2xl mx-auto perspective-1000">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative rounded-xl bg-[#0B1120] border border-slate-700/50 shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-slate-800 shrink-0">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-xs text-slate-400 font-mono">TiDB Cloud SQL Editor</div>
          <div className="w-16"></div> {/* Spacer */}
        </div>

        {/* Code Area */}
        <div className="p-6 font-mono text-sm overflow-x-auto relative bg-[#0B1120] min-h-[220px]">
           <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button 
                onClick={handleCopy}
                className="p-1.5 text-slate-400 hover:text-white transition-colors rounded hover:bg-white/10"
                title="Copy SQL"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <button 
                onClick={handleRun}
                disabled={status === 'running'}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white text-xs font-semibold rounded transition-all shadow-lg shadow-cyan-900/50"
              >
                {status === 'running' ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <Play className="w-3 h-3 fill-current" />
                )}
                {status === 'running' ? 'RUNNING' : 'RUN'}
              </button>
           </div>

           <pre className="text-slate-300 leading-relaxed font-mono">
            <code>
              <span className="text-violet-400">SELECT</span> <br/>
              {'  '}block_number, <br/>
              {'  '}count(*) <span className="text-violet-400">as</span> tx_count,<br/>
              {'  '}sum(gas_used) <span className="text-violet-400">as</span> total_gas<br/>
              <span className="text-violet-400">FROM</span> <span className="text-cyan-400">ethereum.transactions</span><br/>
              <span className="text-violet-400">WHERE</span> block_time {'>'} <span className="text-yellow-300">NOW</span>() - <span className="text-violet-400">INTERVAL</span> 1 HOUR<br/>
              <span className="text-violet-400">GROUP BY</span> block_number<br/>
              <span className="text-violet-400">ORDER BY</span> block_number <span className="text-violet-400">DESC</span><br/>
              <span className="text-violet-400">LIMIT</span> 5;
            </code>
           </pre>
        </div>

        {/* Output Area */}
        <div 
          className={`
            border-t border-slate-800 bg-[#020617] transition-all duration-500 ease-in-out
            ${status === 'idle' ? 'max-h-0 opacity-0 border-t-0' : 'max-h-[300px] opacity-100'}
            overflow-hidden
          `}
        >
           <div className="p-4">
             {status === 'running' && (
               <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono animate-pulse py-2">
                 <Loader2 className="w-3 h-3 animate-spin" />
                 Executing query...
               </div>
             )}
             
             {status === 'success' && (
               <>
                 <div className="text-xs text-green-400 mb-3 font-mono flex items-center gap-2 animate-fade-in">
                   <Check className="w-3 h-3" /> Query executed in 142ms
                 </div>
                 <table className="w-full text-left text-xs font-mono text-slate-300">
                   <thead>
                     <tr className="text-slate-500 border-b border-slate-800">
                       <th className="pb-2 pl-2">block_number</th>
                       <th className="pb-2">tx_count</th>
                       <th className="pb-2 text-right pr-2">total_gas</th>
                     </tr>
                   </thead>
                   <tbody>
                     {[
                       { block: '19420389', tx: '142', gas: '14,203,120' },
                       { block: '19420388', tx: '205', gas: '28,910,443' },
                       { block: '19420387', tx: '89', gas: '8,450,221' },
                       { block: '19420386', tx: '134', gas: '12,678,901' },
                       { block: '19420385', tx: '112', gas: '10,543,210' }
                     ].map((row, i) => (
                       <tr 
                         key={i} 
                         className="border-b border-slate-800/50 animate-slide-in fill-mode-backwards opacity-0"
                         style={{ animationDelay: `${i * 150}ms` }}
                       >
                         <td className="py-2 pl-2 text-cyan-300">{row.block}</td>
                         <td className="py-2">{row.tx}</td>
                         <td className="py-2 text-right pr-2">{row.gas}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </>
             )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalDemo;