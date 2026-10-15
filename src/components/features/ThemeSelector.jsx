import React from 'react';
import { VscColorMode, VscCheck } from 'react-icons/vsc';
import { themes } from '../../utils/themes';
import usePortfolioStore from '../../store/portfolioStore';

const ThemeSelector = () => {
  const { currentTheme, setTheme } = usePortfolioStore();
  
  return (
    <div className="p-4 text-vscode-text">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-vscode-border">
        <VscColorMode size={24} className="text-vscode-accent" />
        <h3 className="text-lg font-semibold">Theme Selector</h3>
      </div>
      
      <p className="text-sm text-vscode-text/70 mb-4">
        Choose your favorite color theme ({Object.keys(themes).length} themes available)
      </p>
      
      <div className="grid grid-cols-1 gap-3 max-h-[600px] overflow-y-auto scrollbar-hide pr-1">
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`
              relative p-4 rounded-lg border-2 transition-all text-left
              ${currentTheme === key 
                ? 'border-vscode-accent bg-vscode-accent/10' 
                : 'border-vscode-border hover:border-vscode-accent/50 bg-vscode-hover'
              }
            `}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-vscode-text">{theme.name}</span>
              {currentTheme === key && (
                <VscCheck size={20} className="text-vscode-accent" />
              )}
            </div>
            
            <div className="flex gap-2">
              <div 
                className="w-8 h-8 rounded border border-vscode-border"
                style={{ backgroundColor: theme.colors.bg }}
                title="Background"
              ></div>
              <div 
                className="w-8 h-8 rounded border border-vscode-border"
                style={{ backgroundColor: theme.colors.accent }}
                title="Accent"
              ></div>
              <div 
                className="w-8 h-8 rounded border border-vscode-border"
                style={{ backgroundColor: theme.colors.text }}
                title="Text"
              ></div>
              <div 
                className="w-8 h-8 rounded border border-vscode-border"
                style={{ backgroundColor: theme.colors.sidebar }}
                title="Sidebar"
              ></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
