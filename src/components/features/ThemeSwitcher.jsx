import React, { useState } from 'react';
import { VscColorMode, VscCheck } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import { availableThemes } from '../../data/themes';

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = usePortfolioStore();
  const [isOpen, setIsOpen] = useState(false);
  
  const themeColors = {
    githubDark: { bg: '#0d1117', accent: '#58a6ff' },
    dracula: { bg: '#282a36', accent: '#bd93f9' },
    onedark: { bg: '#282c34', accent: '#61afef' }
  };
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 hover:bg-vscode-hover rounded transition-colors"
        title="Change Theme"
      >
        <VscColorMode size={14} />
        <span className="text-xs">{availableThemes.find(t => t.id === currentTheme)?.name}</span>
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute bottom-full right-0 mb-2 w-64 bg-vscode-sidebar border border-vscode-border rounded-lg shadow-2xl z-50 overflow-hidden">
            <div className="p-3 border-b border-vscode-border">
              <h3 className="text-sm font-semibold text-vscode-text">Select Theme</h3>
            </div>
            
            <div className="p-2">
              {availableThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg hover:bg-vscode-hover transition-colors ${
                    currentTheme === theme.id ? 'bg-vscode-hover' : ''
                  }`}
                >
                  {/* Theme Preview */}
                  <div className="flex gap-1">
                    <div 
                      className="w-6 h-6 rounded border border-vscode-border"
                      style={{ backgroundColor: themeColors[theme.id].bg }}
                    />
                    <div 
                      className="w-6 h-6 rounded border border-vscode-border"
                      style={{ backgroundColor: themeColors[theme.id].accent }}
                    />
                  </div>
                  
                  {/* Theme Name */}
                  <span className="flex-1 text-left text-sm text-vscode-text font-medium">
                    {theme.name}
                  </span>
                  
                  {/* Check Icon */}
                  {currentTheme === theme.id && (
                    <VscCheck size={18} className="text-vscode-accent" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
