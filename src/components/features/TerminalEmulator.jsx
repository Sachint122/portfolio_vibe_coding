import React, { useState, useRef, useEffect, useCallback } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import { parseCommand } from '../../utils/commandParser';

const TerminalEmulator = React.memo(() => {
  const [history, setHistory] = useState([
    { type: 'output', text: '╔═════════════════════════════════╗' },
    { type: 'output', text: '║  Portfolio Terminal v1.0  ║' },
    { type: 'output', text: '╚═════════════════════════════════╝' },
    { type: 'output', text: '' },
    { type: 'output', text: 'Type "help" for commands' },
    { type: 'output', text: '' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);
  const { toggleTerminal, openTab, setActiveSidebar } = usePortfolioStore();
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newHistory = [
      ...history,
      { type: 'command', text: input },
    ];
    
    // Pass store functions to parseCommand
    const output = parseCommand(input.trim(), { openTab, setActiveSidebar });
    
    // Handle clear command
    if (output === 'CLEAR_SCREEN') {
      setHistory([]);
      setInput('');
      return;
    }
    
    newHistory.push({ type: 'output', text: output });
    
    setHistory(newHistory);
    setInput('');
  }, [history, input, openTab, setActiveSidebar, parseCommand]);
  
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);
  
  return (
    <div className="h-full flex flex-col bg-vscode-bg">
      {/* Terminal Header */}
      <div className="h-[30px] md:h-[35px] bg-vscode-sidebar border-b border-vscode-border flex items-center justify-between px-3 md:px-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm font-semibold text-vscode-text uppercase tracking-wide">
            Terminal
          </span>
          <span className="text-xs text-vscode-text/50">bash</span>
        </div>
        
        <button
          onClick={toggleTerminal}
          className="text-vscode-text hover:text-vscode-accent transition-colors"
          title="Close Terminal"
        >
          <VscChromeClose size={16} />
        </button>
      </div>
      
      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto p-2 md:p-4 font-mono text-xs md:text-sm">
        {history.map((line, index) => (
          <div key={index} className="mb-0.5 md:mb-1">
            {line.type === 'command' ? (
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-green-400 text-xs md:text-sm">➜</span>
                <span className="text-cyan-400 text-xs md:text-sm">~</span>
                <span className="text-white text-xs md:text-sm">$ {line.text}</span>
              </div>
            ) : (
              <div className="text-gray-300 whitespace-pre-wrap text-xs md:text-sm leading-tight md:leading-normal break-words">{line.text}</div>
            )}
          </div>
        ))}
        
        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-1 md:gap-2 mt-1">
          <span className="text-green-400 text-xs md:text-sm">➜</span>
          <span className="text-cyan-400 text-xs md:text-sm">~</span>
          <span className="text-white text-xs md:text-sm">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white text-xs md:text-sm outline-none border-none"
            placeholder="Type a command..."
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </form>
        
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
});

export default TerminalEmulator;