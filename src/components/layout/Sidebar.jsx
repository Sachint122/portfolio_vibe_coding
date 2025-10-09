import React from 'react';
import usePortfolioStore from '../../store/portfolioStore';
import FileExplorer from '../features/FileExplorer';
import GitPanel from '../features/GitPanel';

const Sidebar = () => {
  const { activeSidebar } = usePortfolioStore();
  
  if (!activeSidebar) return null;
  
  const renderContent = () => {
    switch (activeSidebar) {
      case 'explorer':
        return <FileExplorer />;
      case 'git':
        return <GitPanel />;
      case 'extensions':
        return <div className="p-4">Extensions Panel (Coming Soon)</div>;
      case 'settings':
        return <div className="p-4">Settings Panel (Coming Soon)</div>;
      default:
        return null;
    }
  };
  
  const getTitle = () => {
    switch (activeSidebar) {
      case 'explorer':
        return 'EXPLORER';
      case 'git':
        return 'SOURCE CONTROL';
      case 'extensions':
        return 'EXTENSIONS';
      case 'settings':
        return 'SETTINGS';
      default:
        return '';
    }
  };
  
  return (
    <div className="w-[250px] bg-vscode-sidebar border-r border-vscode-border h-full flex flex-col">
      {/* Header */}
      <div className="h-[35px] flex items-center px-4 text-xs font-semibold text-vscode-text uppercase tracking-wide border-b border-vscode-border">
        {getTitle()}
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
