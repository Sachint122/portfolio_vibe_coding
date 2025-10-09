import React, { useState, useEffect } from 'react';
import { VscClose, VscTerminal } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import TerminalEmulator from '../features/TerminalEmulator';

const Terminal = () => {
  const { terminalVisible, toggleTerminal, terminalHeight, setTerminalHeight } = usePortfolioStore();
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(terminalHeight);
  const [shouldRender, setShouldRender] = useState(false);
  
  // Delay rendering of TerminalEmulator to ensure DOM is ready
  useEffect(() => {
    if (terminalVisible) {
      setShouldRender(true);
    } else {
      // Keep it mounted but hidden to prevent re-initialization
      // setShouldRender(false);
    }
  }, [terminalVisible]);
  
  const handleMouseDown = (e) => {
    setIsResizing(true);
    setStartY(e.clientY);
    setStartHeight(terminalHeight);
  };
  
  const handleMouseMove = (e) => {
    if (!isResizing) return;
    
    const deltaY = startY - e.clientY;
    const newHeight = Math.min(Math.max(startHeight + deltaY, 200), 600);
    setTerminalHeight(newHeight);
  };
  
  const handleMouseUp = () => {
    setIsResizing(false);
  };
  
  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, startY, startHeight]);
  
  if (!terminalVisible) return null;
  
  return (
    <div 
      className="border-t border-vscode-border bg-vscode-bg"
      style={{ height: `${terminalHeight}px` }}
    >
      {/* Resize Handle */}
      <div
        onMouseDown={handleMouseDown}
        className="h-1 bg-vscode-border hover:bg-vscode-accent cursor-ns-resize transition-colors"
      />
      
      {/* Terminal Header */}
      <div className="h-[35px] bg-vscode-sidebar border-b border-vscode-border flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <VscTerminal size={16} className="text-vscode-accent" />
          <span className="text-sm font-medium text-vscode-text">TERMINAL</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTerminal}
            className="p-1 hover:bg-vscode-hover rounded transition-colors"
            title="Close Terminal (Ctrl+`)"
          >
            <VscClose size={16} className="text-vscode-text" />
          </button>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="h-[calc(100%-36px)] overflow-hidden">
        {shouldRender && <TerminalEmulator />}
      </div>
    </div>
  );
};

export default Terminal;
