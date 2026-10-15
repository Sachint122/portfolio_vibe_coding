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

/**
 * Feature 21: Tactile IDE Micro-interactions — ActivityBar
 * Subtle hover, glowing active-state transitions, click depression, and instant floating tooltips.
 */
const ActivityBar = React.memo(() => {
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
      <div className="hidden md:flex w-[50px] bg-vscode-activitybar border-r border-vscode-border flex-col items-center py-2 gap-1 select-none z-20">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.isTerminal ? terminalVisible : activeSidebar === item.id;
          
          return (
            <div key={item.id} className="relative group flex items-center justify-center">
              <button
                type="button"
                onClick={() => item.isTerminal ? toggleTerminal() : setActiveSidebar(item.id)}
                className={`
                  relative w-11 h-11 flex items-center justify-center rounded-lg outline-none
                  transition-all duration-150 ease-out active:scale-90
                  ${isActive 
                    ? 'bg-vscode-selection/70 text-vscode-accent shadow-[inset_0_0_12px_rgba(99,102,241,0.25)]' 
                    : 'text-vscode-text/70 hover:text-white hover:bg-vscode-hover/90 hover:scale-105'}
                `}
                title=""
                aria-label={item.label}
              >
                {/* Glowing Left Indicator Strip for Active Item */}
                {isActive && (
                  <span className="absolute left-0 top-2.5 bottom-2.5 w-[3px] bg-vscode-accent rounded-r shadow-[0_0_8px_rgba(99,102,241,0.9)]" />
                )}
                
                <Icon size={22} className="transition-transform duration-150 group-hover:scale-110 group-active:scale-95" />
              </button>

              {/* Floating Glassmorphic Tooltip */}
              <span className="absolute left-[54px] px-2 py-1 bg-vscode-sidebar/95 text-white text-[11px] font-medium rounded-md shadow-2xl border border-vscode-border/80 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-150 pointer-events-none whitespace-nowrap z-50 backdrop-blur-sm">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Mobile Menu Floating Action Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed bottom-7 right-4 z-50 w-12 h-12 bg-vscode-accent text-white rounded-full flex items-center justify-center shadow-2xl hover:opacity-95 transition-all duration-150 border-2 border-vscode-border/80 active:scale-85 active:shadow-inner"
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <VscClose size={22} /> : <VscMenu size={22} />}
      </button>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div 
            className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden fixed bottom-22 right-4 bg-vscode-sidebar border border-vscode-border rounded-xl shadow-2xl z-50 p-2 min-w-[210px] animate-slideUp">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.isTerminal ? terminalVisible : activeSidebar === item.id;
              
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleMenuClick(item.id, item.isTerminal)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-150 mb-1 active:scale-[0.98]
                    ${isActive 
                      ? 'bg-vscode-accent text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]' 
                      : 'text-vscode-text hover:bg-vscode-hover hover:text-white'}
                  `}
                >
                  <Icon size={20} className="transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </>
  );
});

export default ActivityBar;