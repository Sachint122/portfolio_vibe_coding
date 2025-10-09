import React, { useEffect } from 'react';
import VSCodeLayout from './components/layout/VSCodeLayout';
import usePortfolioStore from './store/portfolioStore';
import './App.css';

function App() {
  const { toggleTerminal } = usePortfolioStore();
  
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
  
  return <VSCodeLayout />;
}

export default App;
