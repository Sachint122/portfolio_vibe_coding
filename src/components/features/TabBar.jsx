import React from 'react';
import { VscClose, VscFile } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';

const TabBar = () => {
  const { openTabs, activeTabId, setActiveTab, closeTab } = usePortfolioStore();
  
  const getTabIcon = (tab) => {
    const iconMap = {
      home: '🏠',
      javascript: '📄',
      react: '⚛️',
      json: '{}',
      markdown: '📝',
      typescript: '📘',
      pdf: '📕'
    };
    return iconMap[tab.language] || iconMap[tab.icon] || '📄';
  };
  
  return (
    <div className="h-[35px] bg-vscode-sidebar border-b border-vscode-border flex items-center overflow-x-auto">
      {openTabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`group flex items-center gap-2 px-3 h-full border-r border-vscode-border cursor-pointer transition-colors
            ${activeTabId === tab.id 
              ? 'bg-vscode-editor text-vscode-text border-t-2 border-t-vscode-accent' 
              : 'bg-vscode-sidebar text-vscode-text hover:bg-vscode-hover'
            }`}
        >
          <span className="text-sm">{getTabIcon(tab)}</span>
          <span className="text-sm whitespace-nowrap">{tab.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeTab(tab.id);
            }}
            className="ml-2 opacity-0 group-hover:opacity-100 hover:bg-vscode-hover rounded p-1 transition-opacity"
          >
            <VscClose size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
