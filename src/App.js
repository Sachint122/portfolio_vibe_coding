import React, { useEffect } from 'react';
import VSCodeLayout from './components/layout/VSCodeLayout';
import usePortfolioStore from './store/portfolioStore';
import { applyTheme, getThemeFromStorage } from './utils/themes';
import './App.css';

function App() {
  const { toggleTerminal,currentTheme } = usePortfolioStore();
  
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl + ` to toggle terminal
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        toggleTerminal();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [toggleTerminal]);

  useEffect(() => {
    // Apply saved theme on mount
    const savedTheme = getThemeFromStorage();
    applyTheme(savedTheme);
  }, []);
  
  useEffect(() => {
    // Apply theme when it changes
    applyTheme(currentTheme);
  }, [currentTheme]);
  
   return (
    <div className="App">
      <VSCodeLayout />
    </div>
  );
}

export default App;
