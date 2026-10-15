import React from 'react';
import usePortfolioStore from '../../store/portfolioStore';
import FileExplorer from '../features/FileExplorer';
import { VscClose } from 'react-icons/vsc';

const GitPanel = React.lazy(() => import('../features/GitPanel'));
const ThemeSelector = React.lazy(() => import('../features/ThemeSelector'));

const Sidebar = React.memo(() => {
  const { activeSidebar, setActiveSidebar } = usePortfolioStore();
  
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
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-[280px] bg-vscode-sidebar border-r border-vscode-border h-full flex-col shadow-lg">
        <div className="h-[35px] flex items-center px-4 text-xs font-semibold text-vscode-text uppercase tracking-wide border-b border-vscode-border bg-gradient-to-r from-vscode-sidebar to-vscode-bg">
          {getTitle()}
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <React.Suspense fallback={<div className="p-4 text-center text-xs text-vscode-text/60 font-mono">Loading...</div>}>
            {renderContent()}
          </React.Suspense>
        </div>
      </div>
      
      {/* Mobile Sidebar (Full Screen Overlay) */}
      <div className="md:hidden fixed inset-0 z-30 flex">
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setActiveSidebar(null)}
        />
        <div className="relative w-[85%] max-w-sm bg-vscode-sidebar border-r border-vscode-border h-full flex flex-col shadow-2xl">
          <div className="h-[50px] flex items-center justify-between px-4 border-b border-vscode-border bg-vscode-header">
            <span className="text-sm font-semibold text-vscode-text uppercase tracking-wide">
              {getTitle()}
            </span>
            <button
              onClick={() => setActiveSidebar(null)}
              className="text-vscode-text hover:text-vscode-accent transition-colors"
            >
              <VscClose size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <React.Suspense fallback={<div className="p-4 text-center text-xs text-vscode-text/60 font-mono">Loading...</div>}>
              {renderContent()}
            </React.Suspense>
          </div>
        </div>
      </div>
    </>
  );
});

export default Sidebar;