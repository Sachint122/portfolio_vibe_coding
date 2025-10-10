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
      
      {/* Main Content - Add padding bottom on mobile for StatusBar */}
      <div className="flex flex-1 overflow-hidden pb-[20px] md:pb-0">
        {/* Activity Bar (Desktop Only) */}
        <ActivityBar />
        
        {/* Sidebar */}
        <Sidebar />
        
        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden w-full">
          {/* Tab Bar */}
          <TabBar />
          
          {/* Code Editor - Scrollable with bottom padding on mobile */}
          <div className={`flex-1 overflow-hidden w-full ${terminalVisible ? 'md:h-1/2' : ''}`}>
            <CodeEditor />
          </div>
          
          {/* Terminal - Desktop: Split view, Mobile: Overlay */}
          {terminalVisible && (
            <>
              {/* Desktop Terminal */}
              <div className="hidden md:block md:h-1/2 border-t border-vscode-border overflow-hidden">
                <TerminalEmulator />
              </div>
              
              {/* Mobile Terminal - Above StatusBar */}
              <div 
                className="md:hidden fixed inset-x-0 z-30 animate-slideUp" 
                style={{ 
                  bottom: '20px', 
                  height: 'calc(50vh - 20px)',
                  maxHeight: 'calc(100vh - 100px)' 
                }}
              >
                {/* Backdrop/Overlay */}
                <div 
                  className="fixed inset-0 bg-black/50 -z-10"
                  onClick={toggleTerminal}
                />
                
                {/* Terminal Container */}
                <div className="h-full bg-vscode-bg border-t-2 border-vscode-accent shadow-2xl rounded-t-lg">
                  <TerminalEmulator />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Status Bar - Fixed at bottom on mobile */}
      <div className="fixed md:relative bottom-0 left-0 right-0 z-50">
        <StatusBar />
      </div>
    </div>
  );
};

export default VSCodeLayout;
