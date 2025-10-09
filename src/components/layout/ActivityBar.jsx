import React from 'react';
import { VscFiles, VscSourceControl, VscExtensions, VscSettingsGear, VscHome } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';

const ActivityBar = () => {
  const { activeSidebar, toggleSidebar, openTab } = usePortfolioStore();
  
  const handleHomeClick = () => {
    openTab({ id: 'welcome', name: 'Welcome', type: 'welcome', icon: 'home' });
    toggleSidebar(null); // Close sidebar
  };
  
  const icons = [
    { id: 'home', Icon: VscHome, label: 'Home', action: handleHomeClick },
    { id: 'explorer', Icon: VscFiles, label: 'Explorer' },
    { id: 'git', Icon: VscSourceControl, label: 'Source Control' },
    { id: 'extensions', Icon: VscExtensions, label: 'Extensions' },
    { id: 'settings', Icon: VscSettingsGear, label: 'Settings' },
  ];
  
  return (
    <div className="w-[50px] bg-vscode-sidebar h-full flex flex-col items-center pt-4 gap-1">
      {icons.map(({ id, Icon, label, action }) => (
        <button
          key={id}
          onClick={() => action ? action() : toggleSidebar(id)}
          className={`w-12 h-12 flex items-center justify-center rounded-sm cursor-pointer transition-all duration-150
            ${activeSidebar === id 
              ? 'text-vscode-accent border-l-2 border-vscode-accent bg-vscode-hover' 
              : 'text-vscode-text hover:bg-vscode-hover'
            }`}
          title={label}
        >
          <Icon size={24} />
        </button>
      ))}
    </div>
  );
};

export default ActivityBar;
