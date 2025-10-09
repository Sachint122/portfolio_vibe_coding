import React from 'react';
import { VscSourceControl, VscBell, VscTerminal } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import ThemeSwitcher from '../features/ThemeSwitcher';

const StatusBar = () => {
  const { toggleTerminal } = usePortfolioStore();
  
  return (
    <div className="h-[22px] bg-[#1f6feb] text-white flex items-center justify-between px-3 text-xs">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Git Branch */}
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
          <VscSourceControl size={14} />
          <span>main</span>
        </div>
        
        {/* File Type */}
        <div className="flex items-center gap-2">
          <span>JavaScript</span>
        </div>
        
        {/* Line/Column */}
        <div className="flex items-center">
          <span>Ln 1, Col 1</span>
        </div>
        
        {/* Terminal Toggle */}
        <button
          onClick={toggleTerminal}
          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          title="Toggle Terminal (Ctrl+`)"
        >
          <VscTerminal size={14} />
          <span>Terminal</span>
        </button>
      </div>
      
      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Encoding */}
        <span>UTF-8</span>
        
        {/* Line Ending */}
        <span>LF</span>
        
        {/* Theme Switcher */}
        <ThemeSwitcher />
        
        {/* Notifications */}
        <VscBell size={14} className="cursor-pointer hover:opacity-80" />
      </div>
    </div>
  );
};

export default StatusBar;
