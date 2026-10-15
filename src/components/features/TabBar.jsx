import React from 'react';
import usePortfolioStore from '../../store/portfolioStore';
import { VscClose } from 'react-icons/vsc';

const getTabIcon = (tab) => {
  if (tab.icon) return tab.icon;
  switch (tab.type) {
    case 'welcome':
      return '🏠';
    case 'about':
      return '👨‍💻';
    case 'skills':
      return '⚡';
    case 'experience':
      return '💼';
    case 'all-projects':
      return '📂';
    case 'project':
      return '🚀';
    case 'all-resumes':
      return '📄';
    case 'single-resume':
      return '📕';
    case 'contact':
      return '📬';
    default:
      if (tab.name?.endsWith('.jsx')) return '⚛️';
      if (tab.name?.endsWith('.js')) return '📄';
      if (tab.name?.endsWith('.json')) return '{}';
      if (tab.name?.endsWith('.md')) return '📝';
      return '📄';
  }
};

/**
 * Feature 21: Tactile IDE Micro-interactions — TabBar
 * Subtle hover lift, active-state glowing border & background, and tactile click depression feedback.
 */
const TabBar = () => {
  const { openTabs, activeTabId, setActiveTab, closeTab } = usePortfolioStore();

  const handleCloseTab = (e, tabId) => {
    e.stopPropagation();
    closeTab(tabId);
  };

  return (
    <div className="flex items-center bg-vscode-sidebar/95 border-b border-vscode-border overflow-x-auto scrollbar-hide select-none">
      {openTabs.map((tab) => {
        const isActive = activeTabId === tab.id;
        const icon = getTabIcon(tab);

        return (
          <div
            key={tab.id}
            role="button"
            tabIndex={0}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveTab(tab.id);
              }
            }}
            className={`
              relative flex items-center gap-2 px-3 md:px-4 py-2 cursor-pointer border-r border-vscode-border/80 
              min-w-[110px] md:min-w-[130px] max-w-[170px] md:max-w-[210px] group flex-shrink-0
              transition-all duration-150 ease-out outline-none
              active:scale-[0.98] active:translate-y-0
              ${
                isActive
                  ? 'bg-vscode-bg text-white font-medium border-t-2 border-t-vscode-accent shadow-[inset_0_1px_8px_rgba(99,102,241,0.18)]'
                  : 'bg-vscode-sidebar/80 text-vscode-text/75 hover:text-white hover:bg-vscode-hover/90 hover:-translate-y-0.5'
              }
            `}
          >
            {/* Tab Mini Icon */}
            <span className="text-xs transition-transform duration-150 group-hover:scale-110">
              {icon}
            </span>

            {/* Tab Name */}
            <span
              className={`text-xs md:text-sm truncate flex-1 transition-colors ${
                isActive ? 'text-vscode-accent font-medium' : 'text-vscode-text/80 group-hover:text-white'
              }`}
            >
              {tab.name}
            </span>

            {/* Active Indicator Dot */}
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-vscode-accent shadow-[0_0_6px_rgba(99,102,241,0.9)] animate-pulse" />
            )}

            {/* Tactile Close Tab Button */}
            {openTabs.length > 1 && (
              <button
                type="button"
                onClick={(e) => handleCloseTab(e, tab.id)}
                className="opacity-75 md:opacity-0 md:group-hover:opacity-100 hover:bg-white/10 hover:text-red-400 p-1 rounded-md transition-all duration-200 hover:rotate-90 hover:scale-110 active:scale-90"
                title="Close tab (Ctrl+W)"
                aria-label={`Close ${tab.name}`}
              >
                <VscClose size={13} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;

