import React from 'react';
import usePortfolioStore from '../../store/portfolioStore';
import { VscClose } from 'react-icons/vsc';

const TabBar = () => {
  const { openTabs, activeTabId, setActiveTab, closeTab } = usePortfolioStore();
  
  const handleCloseTab = (e, tabId) => {
    e.stopPropagation();
    closeTab(tabId);
  };
  
  return (
    <div className="flex items-center bg-vscode-sidebar overflow-x-auto border-b border-vscode-border scrollbar-hide">
      {openTabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            flex items-center gap-2 px-3 md:px-4 py-2 cursor-pointer border-r border-vscode-border min-w-[100px] md:min-w-[120px] max-w-[150px] md:max-w-[200px] group flex-shrink-0
            ${activeTabId === tab.id 
              ? 'bg-vscode-bg text-vscode-accent border-t-2 border-t-vscode-accent' 
              : 'bg-vscode-sidebar text-vscode-text hover:bg-vscode-hover'
            }
          `}
        >
          <span className="text-xs md:text-sm truncate flex-1">{tab.name}</span>
          {openTabs.length > 1 && (
            <button
              onClick={(e) => handleCloseTab(e, tab.id)}
              className="opacity-0 group-hover:opacity-100 hover:bg-vscode-hover rounded p-0.5 transition-all"
            >
              <VscClose size={14} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
