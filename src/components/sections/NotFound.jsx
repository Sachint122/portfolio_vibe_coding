import React from 'react';
import { VscError } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';

const NotFound = () => {
  const { openTab } = usePortfolioStore();
  
  const goHome = () => {
    openTab({ id: 'welcome', name: 'Welcome', type: 'welcome', icon: 'home' });
  };
  
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="text-center max-w-md">
        <VscError size={80} className="text-red-500 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-vscode-accent mb-4">404</h1>
        <h2 className="text-2xl font-bold text-vscode-text mb-4">File Not Found</h2>
        <p className="text-vscode-text/70 mb-8">
          The file you're looking for doesn't exist in this portfolio.
        </p>
        <button
          onClick={goHome}
          className="px-6 py-3 bg-vscode-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
