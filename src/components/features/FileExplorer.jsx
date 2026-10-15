import React, { useMemo } from 'react';
import { VscFolder, VscFolderOpened, VscFile, VscChevronRight } from 'react-icons/vsc';
import { fileSystem } from '../../data/fileSystem';
import usePortfolioStore from '../../store/portfolioStore';

const FileExplorer = () => {
  const { expandedFolders, toggleFolder, openTab, activeTabId } = usePortfolioStore();
  
  const iconMap = useMemo(() => {
    return {
      javascript: { icon: '📄', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
      react: { icon: '⚛️', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
      json: { icon: '{}', color: 'text-green-400', bg: 'bg-green-400/10' },
      markdown: { icon: '📝', color: 'text-blue-400', bg: 'bg-blue-400/10' },
      typescript: { icon: '📘', color: 'text-blue-500', bg: 'bg-blue-500/10' },
      pdf: { icon: '📕', color: 'text-red-400', bg: 'bg-red-400/10' }
    };
  }, []);
  
  const getFileIcon = (language) => {
    return iconMap[language] || { icon: '📄', color: 'text-gray-400', bg: 'bg-gray-400/10' };
  };
  
  const handleFileClick = (file) => {
    if (file.type === 'folder' && file.name === 'projects') {
      openTab({ id: 'all-projects', name: 'Projects', type: 'all-projects' });
      return;
    }
    
    const tab = {
      id: file.id,
      name: file.name,
      type: file.content,
      language: file.language,
      projectId: file.projectId || file.id
    };
    openTab(tab);
  };
  
  const renderFile = (file, level = 0) => {
    const isActive = activeTabId === file.id;
    const { icon, color, bg } = getFileIcon(file.language);

    return (
      <div
        key={file.id}
        role="button"
        tabIndex={0}
        onClick={() => handleFileClick(file)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleFileClick(file);
          }
        }}
        className={`
          group flex items-center gap-2 px-3 py-2 cursor-pointer select-none outline-none
          transition-all duration-150 ease-out active:scale-[0.98]
          ${
            isActive
              ? 'bg-vscode-selection/40 border-l-2 border-vscode-accent shadow-[inset_2px_0_8px_rgba(99,102,241,0.18)] text-vscode-accent'
              : 'hover:bg-vscode-hover/90 hover:translate-x-1 text-vscode-text/80 hover:text-white'
          }
        `}
        style={{ paddingLeft: `${level * 16 + 12}px` }}
      >
        {/* File Icon with Background */}
        <div
          className={`flex items-center justify-center w-5 h-5 rounded ${bg} ${color} text-xs group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-150 shadow-xs`}
        >
          {icon}
        </div>

        {/* File Name */}
        <span
          className={`text-xs md:text-sm flex-1 truncate transition-colors ${
            isActive ? 'text-vscode-accent font-medium' : 'group-hover:text-vscode-accent'
          }`}
        >
          {file.name}
        </span>

        {/* Active Indicator Dot */}
        {isActive && (
          <div className="w-1.5 h-1.5 rounded-full bg-vscode-accent shadow-[0_0_6px_rgba(99,102,241,0.9)] animate-pulse" />
        )}
      </div>
    );
  };

  const renderFolder = (folder, level = 0) => {
    const isExpanded = expandedFolders.includes(folder.id);

    return (
      <div key={folder.id} className="select-none">
        {/* Folder Header */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => toggleFolder(folder.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleFolder(folder.id);
            }
          }}
          className="group flex items-center gap-2 px-3 py-2 cursor-pointer outline-none hover:bg-vscode-hover/90 hover:translate-x-0.5 active:scale-[0.99] transition-all duration-150 ease-out"
          style={{ paddingLeft: `${level * 16 + 12}px` }}
        >
          {/* Smooth Rotating Chevron Icon */}
          <div className="w-4 flex items-center justify-center">
            <VscChevronRight
              size={15}
              className={`text-vscode-text/60 group-hover:text-vscode-accent transition-transform duration-200 ease-out ${
                isExpanded ? 'rotate-90 text-vscode-accent' : 'rotate-0'
              }`}
            />
          </div>

          {/* Folder Icon */}
          {isExpanded ? (
            <VscFolderOpened
              size={18}
              className="text-blue-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-150"
            />
          ) : (
            <VscFolder
              size={18}
              className="text-blue-500 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-150"
            />
          )}

          {/* Folder Name */}
          <span className="text-xs md:text-sm text-vscode-text/90 font-medium group-hover:text-white transition-colors flex-1 truncate">
            {folder.name}
          </span>

          {/* File Count Badge with tactile glow */}
          {folder.children && (
            <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-vscode-accent/15 group-hover:bg-vscode-accent/25 text-vscode-accent font-medium transition-colors">
              {folder.children.length}
            </span>
          )}
        </div>

        {/* Folder Contents with Smooth Expand Animation */}
        {isExpanded && folder.children && (
          <div className="animate-slideDown">
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
    <div className="h-full overflow-y-auto scrollbar-hide bg-vscode-sidebar select-none">
      {/* Header */}
      <div className="sticky top-0 z-10 px-4 py-3 bg-vscode-sidebar border-b border-vscode-border/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-semibold text-vscode-text/60 uppercase tracking-wider mb-0.5">
              Portfolio Files
            </h3>
            <p className="text-xs text-vscode-text/40">
              {fileSystem.children?.length || 0} items
            </p>
          </div>
          <div className="w-8 h-8 rounded bg-vscode-accent/10 flex items-center justify-center">
            <VscFile className="text-vscode-accent" size={16} />
          </div>
        </div>
      </div>
      
      {/* File Tree */}
      <div className="py-2">
        {renderItem(fileSystem)}
      </div>
      
      {/* Footer Info */}
      <div className="sticky bottom-0 px-4 py-3 bg-vscode-sidebar/95 backdrop-blur-sm border-t border-vscode-border/50">
        <div className="text-xs text-vscode-text/40 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Ready</span>
          </div>
          <p>Click any file to view</p>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
