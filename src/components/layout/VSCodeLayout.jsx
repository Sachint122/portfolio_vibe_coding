import React, { useState } from 'react';
import TitleBar from './TitleBar';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import StatusBar from './StatusBar';
import EditorArea from './EditorArea';
import Terminal from './Terminal';
import { VscMenu, VscClose } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';

const VSCodeLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeSidebar, setActiveSidebar } = usePortfolioStore();
  
  return (
    <div className="h-screen flex flex-col bg-vscode-bg text-vscode-text overflow-hidden">
      {/* Title Bar */}
      <TitleBar />
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-12 left-4 z-50 w-10 h-10 bg-vscode-sidebar border border-vscode-border rounded-lg flex items-center justify-center hover:bg-vscode-hover transition-colors"
      >
        {mobileMenuOpen ? <VscClose size={20} /> : <VscMenu size={20} />}
      </button>
      
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Activity Bar - Hidden on mobile */}
        <div className="hidden md:block">
          <ActivityBar />
        </div>
        
        {/* Sidebar - Overlay on mobile */}
        <div className={`
          ${mobileMenuOpen ? 'fixed inset-0 z-40 bg-black/50 md:relative md:bg-transparent' : 'hidden md:block'}
        `}>
          {mobileMenuOpen && (
            <div 
              className="absolute inset-0 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
          <div className={`
            ${mobileMenuOpen ? 'absolute left-0 top-0 bottom-0 z-50' : ''}
            md:relative
          `}>
            {activeSidebar && <Sidebar />}
          </div>
        </div>
        
        {/* Editor Area */}
        <EditorArea />
      </div>
      
      {/* Terminal - Hidden on small screens by default */}
      <Terminal />
      
      {/* Status Bar */}
      <StatusBar />
    </div>
  );
};

export default VSCodeLayout;
