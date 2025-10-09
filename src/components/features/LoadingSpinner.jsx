import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-vscode-accent mb-4"></div>
        <p className="text-vscode-text text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
