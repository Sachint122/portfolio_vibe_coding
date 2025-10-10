import React from 'react';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import TabBar from '../features/TabBar';
import CodeEditor from '../features/CodeEditor';
import StatusBar from './StatusBar';
import TerminalEmulator from '../features/TerminalEmulator';
import TitleBar from './TitleBar';
import usePortfolioStore from '../../store/portfolioStore';

const VSCodeLayout = () => {
  const { terminalVisible, toggleTerminal } = usePortfolioStore();
  
  return (
    <div className="h-screen w-screen flex flex-col bg-vscode-bg text-vscode-text overflow-hidden">
      {/* Title Bar */}
      <TitleBar />
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar (Desktop Only) */}
        <ActivityBar />
        
        {/* Sidebar */}
        <Sidebar />
        
        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden w-full">
          {/* Tab Bar */}
          <TabBar />
          
          {/* Code Editor - Scrollable */}
          <div className={`flex-1 overflow-hidden w-full ${terminalVisible ? 'md:h-1/2' : ''}`}>
            <CodeEditor />
          </div>
          
          {/* Terminal - Desktop: Split view, Mobile: Bottom sheet */}
          {terminalVisible && (
            <>
              {/* Desktop Terminal */}
              <div className="hidden md:block md:h-1/2 border-t border-vscode-border overflow-hidden">
                <TerminalEmulator />
              </div>
              
              {/* Mobile Terminal - Bottom Sheet (Above StatusBar) */}
              <div className="md:hidden fixed inset-x-0 z-30 animate-slideUp" style={{ bottom: '20px', height: 'calc(50% - 20px)' }}>
                {/* Backdrop/Overlay for dimming */}
                <div 
                  className="fixed inset-0 bg-black/30 -z-10"
                  onClick={toggleTerminal}
                  style={{ bottom: '20px' }}
                />
                
                {/* Terminal Container */}
                <div className="h-full bg-vscode-bg border-t-2 border-vscode-accent shadow-2xl">
                  <TerminalEmulator />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Status Bar - Always visible with higher z-index */}
      <div className="relative z-50">
        <StatusBar />
      </div>
    </div>
  );
};

export default VSCodeLayout;
