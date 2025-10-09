import React from 'react';
import usePortfolioStore from '../../store/portfolioStore';
import FileExplorer from '../features/FileExplorer';
import GitPanel from '../features/GitPanel';
import ThemeSelector from '../features/ThemeSelector';

const Sidebar = () => {
  const { activeSidebar } = usePortfolioStore();
  
  if (!activeSidebar) return null;
  
  const renderContent = () => {
    switch (activeSidebar) {
      case 'explorer':
        return <FileExplorer />;
      case 'git':
        return <GitPanel />;
      case 'themes':
        return <ThemeSelector />;
      case 'extensions':
        return (
          <div className="p-4 text-vscode-text">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-vscode-border">
              <span className="text-2xl">🧩</span>
              <h3 className="text-lg font-semibold">Extensions</h3>
            </div>
            <div className="text-center py-8 text-vscode-text/60">
              <p>Coming Soon!</p>
              <p className="text-sm mt-2">View installed extensions and marketplace</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-4 text-vscode-text">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-vscode-border">
              <span className="text-2xl">⚙️</span>
              <h3 className="text-lg font-semibold">Settings</h3>
            </div>
            <div className="text-center py-8 text-vscode-text/60">
              <p>Coming Soon!</p>
              <p className="text-sm mt-2">Customize your portfolio experience</p>
            </div>
          </div>
        );
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
      case 'themes':
        return 'THEME SELECTOR';
      case 'extensions':
        return 'EXTENSIONS';
      case 'settings':
        return 'SETTINGS';
      default:
        return '';
    }
  };
  
  return (
    <div className="w-[280px] bg-vscode-sidebar border-r border-vscode-border h-full flex flex-col shadow-lg">
      <div className="h-[35px] flex items-center px-4 text-xs font-semibold text-vscode-text uppercase tracking-wide border-b border-vscode-border bg-gradient-to-r from-vscode-sidebar to-vscode-bg">
        {getTitle()}
      </div>
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
