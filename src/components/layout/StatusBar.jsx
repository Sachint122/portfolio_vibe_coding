import React from 'react';
import { VscInfo, VscWarning, VscError, VscBell, VscSettingsGear } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import { themes } from '../../utils/themes';

const StatusBar = () => {
  const { currentTheme, setActiveSidebar } = usePortfolioStore();
  
  // Get current theme name
  const themeName = themes[currentTheme]?.name || '🐙 GitHub Dark';
  
  const handleThemeClick = () => {
    setActiveSidebar('themes');
  };
  
  return (
    <div className="h-[20px] md:h-[24px] bg-vscode-accent border-t border-vscode-border flex items-center justify-between px-2 md:px-3 text-[10px] md:text-xs text-white flex-shrink-0">
      {/* Mobile View - Compact */}
      <div className="md:hidden flex items-center justify-between w-full">
        {/* Left: Version only */}
        <div className="flex items-center gap-1">
          <VscInfo size={12} />
          <span>v1.0</span>
        </div>
        
        {/* Right: Theme button */}
        <button
          onClick={handleThemeClick}
          className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 rounded transition-colors"
          title="Change theme"
        >
          <VscSettingsGear size={12} />
          <span className="truncate max-w-[100px]">{themeName}</span>
        </button>
      </div>
      
      {/* Desktop View - Full */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <VscInfo size={14} />
            <span>Portfolio v1.0</span>
          </div>
          <div className="flex items-center gap-1">
            <VscWarning size={14} />
            <span>0</span>
          </div>
          <div className="flex items-center gap-1">
            <VscError size={14} />
            <span>0</span>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Current Theme */}
          <button
            type="button"
            onClick={handleThemeClick}
            className="flex items-center gap-1.5 hover:bg-white/15 active:scale-95 px-2 py-0.5 rounded transition-all duration-150 cursor-pointer select-none"
            title="Click to change theme"
          >
            <VscSettingsGear size={13} className="hover:rotate-45 transition-transform duration-200" />
            <span className="font-medium">{themeName}</span>
          </button>
          
          {/* Encoding */}
          <div className="hover:bg-white/15 active:scale-95 px-2 py-0.5 rounded transition-all duration-150 cursor-pointer select-none">
            UTF-8
          </div>
          
          {/* Line Ending */}
          <div className="hover:bg-white/15 active:scale-95 px-2 py-0.5 rounded transition-all duration-150 cursor-pointer select-none">
            LF
          </div>
          
          {/* Language */}
          <div className="hover:bg-white/15 active:scale-95 px-2 py-0.5 rounded transition-all duration-150 cursor-pointer select-none">
            JavaScript
          </div>
          
          {/* Notifications */}
          <button 
            type="button"
            className="hover:bg-white/15 active:scale-90 p-1 rounded transition-all duration-150 cursor-pointer"
            title="Notifications"
            aria-label="Notifications"
          >
            <VscBell size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
