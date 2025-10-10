import React, { useState } from 'react';
import { 
  VscFiles, 
  VscSourceControl, 
  VscExtensions, 
  VscSettingsGear,
  VscColorMode,
  VscMenu,
  VscClose,
  VscTerminal
} from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';

const ActivityBar = () => {
  const { activeSidebar, setActiveSidebar, toggleTerminal, terminalVisible } = usePortfolioStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { id: 'explorer', icon: VscFiles, label: 'Explorer' },
    { id: 'git', icon: VscSourceControl, label: 'Source Control' },
    { id: 'extensions', icon: VscExtensions, label: 'Extensions' },
    { id: 'themes', icon: VscColorMode, label: 'Themes' },
    { id: 'terminal', icon: VscTerminal, label: 'Terminal', isTerminal: true },
    { id: 'settings', icon: VscSettingsGear, label: 'Settings' },
  ];
  
  const handleMenuClick = (id, isTerminal) => {
    if (isTerminal) {
      toggleTerminal();
      setMobileMenuOpen(false);
    } else {
      setActiveSidebar(id);
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <>
      {/* Desktop Activity Bar */}
      <div className="hidden md:flex w-[50px] bg-vscode-activitybar border-r border-vscode-border flex-col items-center py-2 gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.isTerminal ? terminalVisible : activeSidebar === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => item.isTerminal ? toggleTerminal() : setActiveSidebar(item.id)}
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
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 w-14 h-14 bg-vscode-accent text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
      >
        {mobileMenuOpen ? <VscClose size={24} /> : <VscMenu size={24} />}
      </button>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden fixed top-10 left-4 bg-vscode-sidebar border border-vscode-border rounded-lg shadow-2xl z-50 p-2 min-w-[200px]">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.isTerminal ? terminalVisible : activeSidebar === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id, item.isTerminal)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-1
                    ${isActive 
                      ? 'bg-vscode-accent text-white' 
                      : 'text-vscode-text hover:bg-vscode-hover'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ActivityBar;
