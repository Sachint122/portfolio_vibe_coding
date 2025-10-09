import React from 'react';
import { VscGithub, VscRepo, VscGitCommit } from 'react-icons/vsc';

const GitPanel = () => {
  const githubStats = {
    username: 'sachintiwari',
    repos: 25,
    commits: 150,
    followers: 50
  };
  
  return (
    <div className="p-4 text-vscode-text">
      <div className="flex items-center gap-2 mb-4">
        <VscGithub size={24} className="text-vscode-accent" />
        <h3 className="text-lg font-semibold">GitHub Stats</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-vscode-hover rounded">
          <div className="flex items-center gap-2">
            <VscRepo size={18} />
            <span>Repositories</span>
          </div>
          <span className="font-bold text-vscode-accent">{githubStats.repos}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-vscode-hover rounded">
          <div className="flex items-center gap-2">
            <VscGitCommit size={18} />
            <span>Total Commits</span>
          </div>
          <span className="font-bold text-vscode-accent">{githubStats.commits}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-vscode-hover rounded">
          <div className="flex items-center gap-2">
            <VscGithub size={18} />
            <span>Followers</span>
          </div>
          <span className="font-bold text-vscode-accent">{githubStats.followers}</span>
        </div>
      </div>
      
      <div className="mt-6">
        <a
          href={`https://github.com/${githubStats.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-2 px-4 bg-vscode-accent text-white text-center rounded hover:opacity-90 transition-opacity"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default GitPanel;
