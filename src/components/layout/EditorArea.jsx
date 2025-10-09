import React from 'react';
import TabBar from '../features/TabBar';
import CodeEditor from '../features/CodeEditor';
import usePortfolioStore from '../../store/portfolioStore';

const EditorArea = () => {
  const { toggleTerminal } = usePortfolioStore();
  
  return (
    <div className="flex-1 bg-vscode-editor flex flex-col">
      {/* Tab Bar */}
      <TabBar />
      
      {/* Code Editor */}
      <CodeEditor />
    </div>
  );
};

export default EditorArea;
