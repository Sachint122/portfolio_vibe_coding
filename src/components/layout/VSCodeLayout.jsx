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
  const { terminalVisible } = usePortfolioStore();
  
  return (
    <div className="h-screen flex flex-col bg-vscode-bg text-vscode-text">
      {/* Title Bar */}
      <TitleBar />
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar />
        
        {/* Sidebar */}
        <Sidebar />
        
        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tab Bar */}
          <TabBar />
          
          {/* Code Editor - Scrollable */}
          <div className={`flex-1 overflow-hidden ${terminalVisible ? 'h-1/2' : ''}`}>
            <CodeEditor />
          </div>
          
          {/* Terminal */}
          {terminalVisible && (
            <div className="h-1/2 border-t border-vscode-border overflow-hidden">
              <TerminalEmulator />
            </div>
          )}
        </div>
      </div>
      
      {/* Status Bar */}
      <StatusBar />
    </div>
  );
};

export default VSCodeLayout;
