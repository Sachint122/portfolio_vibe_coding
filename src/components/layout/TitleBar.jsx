import React from 'react';

const TitleBar = () => {
  const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Help'];
  
  return (
    <div className="h-[30px] bg-[#161b22] border-b border-vscode-border flex items-center justify-between px-2 text-sm">
      {/* Left - Menu Items */}
      <div className="flex items-center gap-4">
        {menuItems.map((item) => (
          <button
            key={item}
            className="px-2 py-1 hover:bg-vscode-hover rounded transition-colors duration-150 cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
      
      {/* Center - Title */}
      <div className="text-sm font-medium text-vscode-text">
        Sachin Tiwari - Portfolio
      </div>
      
      {/* Right - Window Controls */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default TitleBar;
