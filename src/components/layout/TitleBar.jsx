import React from 'react';
import usePortfolioStore from '../../store/portfolioStore';

const TitleBar = () => {
  const { openTabs, activeTabId } = usePortfolioStore();
  
  // Find active tab
  const activeTab = openTabs.find(tab => tab.id === activeTabId);
  
  // Get dynamic content based on active page
  const getPageInfo = () => {
    if (!activeTab) {
      return {
        icon: '💼',
        title: 'Sachin Tiwari - Portfolio',
        subtitle: 'MERN Stack Developer'
      };
    }
    
    switch (activeTab.type) {
      case 'welcome':
        return {
          icon: '🏠',
          title: 'Welcome',
          subtitle: 'Portfolio Home'
        };
      case 'about':
        return {
          icon: '👨‍💻',
          title: 'About Me',
          subtitle: 'Get to know me better'
        };
      case 'skills':
        return {
          icon: '⚡',
          title: 'Technical Skills',
          subtitle: 'My expertise & proficiency'
        };
      case 'experience':
        return {
          icon: '💼',
          title: 'Work Experience',
          subtitle: 'My professional journey'
        };
      case 'project':
        return {
          icon: '🚀',
          title: activeTab.name || 'Project Details',
          subtitle: 'View project information'
        };
      case 'all-projects':
        return {
          icon: '📂',
          title: 'All Projects',
          subtitle: 'Browse my work'
        };
      case 'contact':
        return {
          icon: '📬',
          title: 'Contact Me',
          subtitle: "Let's connect"
        };
      case 'all-resumes':
        return {
          icon: '📄',
          title: 'My Resumes',
          subtitle: 'Download professional resume'
        };
      case 'single-resume':
        return {
          icon: '📕',
          title: activeTab.name || 'Resume',
          subtitle: 'Professional CV'
        };
      case 'resume':
        return {
          icon: '📄',
          title: 'Resumes',
          subtitle: 'Professional documents'
        };
      default:
        return {
          icon: '📄',
          title: activeTab.name || 'File',
          subtitle: 'Viewing file'
        };
    }
  };
  
  const pageInfo = getPageInfo();
  
  return (
    <div className="h-[30px] bg-vscode-bg border-b border-vscode-border flex items-center justify-between px-4">
      {/* Left - Page Info */}
      <div className="flex items-center gap-3">
        <span className="text-lg">{pageInfo.icon}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-vscode-accent">
            {pageInfo.title}
          </span>
          <span className="text-vscode-text/40">•</span>
          <span className="text-xs text-vscode-text/60">
            {pageInfo.subtitle}
          </span>
        </div>
      </div>
      
      {/* Right - Status */}
      <div className="flex items-center gap-3">
        {/* Active File Indicator */}
        {activeTab && (
          <div className="flex items-center gap-2 text-xs text-vscode-text/60">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>{activeTab.name}</span>
          </div>
        )}
        
        {/* Window Controls */}
        <div className="flex items-center gap-1.5 ml-3">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
