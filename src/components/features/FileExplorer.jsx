import React from 'react';
import { VscFolder, VscFolderOpened, VscFile, VscChevronRight, VscChevronDown } from 'react-icons/vsc';
import { fileSystem } from '../../data/fileSystem';
import usePortfolioStore from '../../store/portfolioStore';

const FileExplorer = () => {
  const { expandedFolders, toggleFolder, openTab, activeTabId } = usePortfolioStore();
  
  const getFileIcon = (language) => {
    const iconMap = {
      javascript: '📄',
      react: '⚛️',
      json: '{}',
      markdown: '📝',
      typescript: '📘',
      pdf: '📕'
    };
    return iconMap[language] || '📄';
  };
  
  const handleFileClick = (file) => {
    const tab = {
      id: file.id,
      name: file.name,
      type: file.content,
      language: file.language,
      projectId: file.projectId || file.id  // Make sure projectId is passed
    };
    openTab(tab);
  };
  
  const renderFile = (file, level = 0) => {
    const isActive = activeTabId === file.id;
    
    return (
      <div
        key={file.id}
        onClick={() => handleFileClick(file)}
        className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-vscode-hover transition-colors
          ${isActive ? 'bg-vscode-selection' : ''}`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        <span className="text-sm">{getFileIcon(file.language)}</span>
        <span className="text-sm text-vscode-text">{file.name}</span>
      </div>
    );
  };
  
  const renderFolder = (folder, level = 0) => {
    const isExpanded = expandedFolders.includes(folder.id);
    
    return (
      <div key={folder.id}>
        {/* Folder Header */}
        <div
          onClick={() => toggleFolder(folder.id)}
          className="flex items-center gap-1 px-2 py-1 cursor-pointer hover:bg-vscode-hover transition-colors"
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          {isExpanded ? (
            <VscChevronDown size={16} className="text-vscode-text" />
          ) : (
            <VscChevronRight size={16} className="text-vscode-text" />
          )}
          {isExpanded ? (
            <VscFolderOpened size={16} className="text-vscode-accent" />
          ) : (
            <VscFolder size={16} className="text-vscode-accent" />
          )}
          <span className="text-sm text-vscode-text font-medium">{folder.name}</span>
        </div>
        
        {/* Folder Contents */}
        {isExpanded && folder.children && (
          <div>
            {folder.children.map((child) =>
              child.type === 'folder'
                ? renderFolder(child, level + 1)
                : renderFile(child, level + 1)
            )}
          </div>
        )}
      </div>
    );
  };
  
  const renderItem = (item, level = 0) => {
    return item.type === 'folder' ? renderFolder(item, level) : renderFile(item, level);
  };
  
  return (
    <div className="py-2">
      {renderItem(fileSystem)}
    </div>
  );
};

export default FileExplorer;
