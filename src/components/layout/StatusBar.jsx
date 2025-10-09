import React from 'react';
import { VscInfo, VscWarning, VscError, VscBell, VscSettingsGear } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import { themes } from '../../utils/themes';

const StatusBar = () => {
  const { currentTheme, setActiveSidebar } = usePortfolioStore();
  
  // Get current theme name
  const themeName = themes[currentTheme]?.name || 'GitHub Dark';
  
  const handleThemeClick = () => {
    setActiveSidebar('themes');
  };
  
  return (
    <div className="h-[24px] bg-vscode-accent border-t border-vscode-border flex items-center justify-between px-3 text-xs text-white">
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
      <div className="flex items-center gap-4">
        {/* Current Theme */}
        <button
          onClick={handleThemeClick}
          className="flex items-center gap-1.5 hover:bg-white/10 px-2 py-0.5 rounded transition-colors cursor-pointer"
          title="Click to change theme"
        >
          <VscSettingsGear size={14} />
          <span className="font-medium">{themeName}</span>
        </button>
        
        {/* Encoding */}
        <div className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors cursor-pointer">
          UTF-8
        </div>
        
        {/* Line Ending */}
        <div className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors cursor-pointer">
          LF
        </div>
        
        {/* Language */}
        <div className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors cursor-pointer">
          JavaScript
        </div>
        
        {/* Notifications */}
        <button className="hover:bg-white/10 p-1 rounded transition-colors">
          <VscBell size={14} />
        </button>
      </div>
    </div>
  );
};

export default StatusBar;
