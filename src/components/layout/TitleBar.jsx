import React from 'react';
import usePortfolioStore from '../../store/portfolioStore';

const TitleBar = () => {
  const { openTabs, activeTabId } = usePortfolioStore();
  const activeTab = openTabs.find(tab => tab.id === activeTabId);
  
  const getPageInfo = () => {
    if (!activeTab) {
      return {
        icon: '💼',
        title: 'Sachin Tiwari - Portfolio',
        subtitle: 'Backend Developer (Node.js)'
      };
    }
    
    switch (activeTab.type) {
      case 'welcome':
        return { icon: '🏠', title: 'Welcome', subtitle: 'Portfolio Home' };
      case 'about':
        return { icon: '👨‍💻', title: 'About Me', subtitle: 'Get to know me' };
      case 'skills':
        return { icon: '⚡', title: 'Skills', subtitle: 'My expertise' };
      case 'experience':
        return { icon: '💼', title: 'Experience', subtitle: 'My journey' };
      case 'project':
        return { icon: '🚀', title: activeTab.name || 'Project', subtitle: 'Project details' };
      case 'all-projects':
        return { icon: '📂', title: 'Projects', subtitle: 'My work' };
      case 'contact':
        return { icon: '📬', title: 'Contact', subtitle: "Let's connect" };
      case 'all-resumes':
        return { icon: '📄', title: 'Resumes', subtitle: 'Download CV' };
      case 'single-resume':
        return { icon: '📕', title: activeTab.name || 'Resume', subtitle: 'Professional CV' };
      default:
        return { icon: '📄', title: activeTab.name || 'File', subtitle: 'Viewing file' };
    }
  };
  
  const pageInfo = getPageInfo();
  
  return (
    <div className="h-[30px] md:h-[35px] bg-vscode-bg border-b border-vscode-border flex items-center justify-between px-2 md:px-4">
      {/* Mobile: Compact View */}
      <div className="flex md:hidden items-center gap-2 text-xs">
        <span>{pageInfo.icon}</span>
        <span className="font-semibold text-vscode-accent truncate">{pageInfo.title}</span>
      </div>
      
      {/* Desktop: Full View */}
      <div className="hidden md:flex items-center gap-3">
        <span className="text-lg">{pageInfo.icon}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-vscode-accent">{pageInfo.title}</span>
          <span className="text-vscode-text/40">•</span>
          <span className="text-xs text-vscode-text/60">{pageInfo.subtitle}</span>
        </div>
      </div>
      
      {/* Right: Window Controls (Desktop Only) */}
      <div className="hidden md:flex items-center gap-3">
        {activeTab && (
          <div className="flex items-center gap-2 text-xs text-vscode-text/60">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>{activeTab.name}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5 ml-3">
          <div 
            title="Close"
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 hover:scale-115 active:scale-90 transition-all duration-150 cursor-pointer shadow-xs" 
          />
          <div 
            title="Minimize"
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 hover:scale-115 active:scale-90 transition-all duration-150 cursor-pointer shadow-xs" 
          />
          <div 
            title="Maximize"
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 hover:scale-115 active:scale-90 transition-all duration-150 cursor-pointer shadow-xs" 
          />
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
