import React from 'react';
import { 
  VscFiles, 
  VscSourceControl, 
  VscExtensions, 
  VscSettingsGear,
  VscColorMode
} from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';

const ActivityBar = () => {
  const { activeSidebar, setActiveSidebar } = usePortfolioStore();
  
  const menuItems = [
    { id: 'explorer', icon: VscFiles, label: 'Explorer' },
    { id: 'git', icon: VscSourceControl, label: 'Source Control' },
    { id: 'extensions', icon: VscExtensions, label: 'Extensions' },
    { id: 'themes', icon: VscColorMode, label: 'Themes' },
    { id: 'settings', icon: VscSettingsGear, label: 'Settings' },
  ];
  
  return (
    <div className="w-[50px] bg-vscode-activitybar border-r border-vscode-border flex flex-col items-center py-2 gap-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSidebar === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => setActiveSidebar(item.id)}
            className={`
              w-12 h-12 flex items-center justify-center rounded-lg transition-all
              ${isActive 
                ? 'bg-vscode-selection text-vscode-accent border-l-2 border-vscode-accent' 
                : 'text-vscode-text hover:bg-vscode-hover'
              }
            `}
            title={item.label}
          >
            <Icon size={24} />
          </button>
        );
      })}
    </div>
  );
};

export default ActivityBar;
