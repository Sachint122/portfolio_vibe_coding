import React, { useState, useEffect } from 'react';
import { VscGithub, VscRepo, VscGitCommit, VscOrganization, VscLoading } from 'react-icons/vsc';
import { portfolioData } from '../../data/portfolioData';

const GitPanel = () => {
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Extract username from GitHub URL in portfolioData
  const getGitHubUsername = () => {
    const githubUrl = portfolioData.about.github;
    const username = githubUrl.split('github.com/')[1]?.split('/')[0];
    return username || 'sachintiwari'; // fallback
  };
  
  const username = getGitHubUsername();
  
  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch GitHub data');
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const repos = await reposResponse.json();
        
        // Calculate total stars
        const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        
        // Count total commits (approximate from recent activity)
        let totalCommits = 0;
        try {
          const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`);
          if (eventsResponse.ok) {
            const events = await eventsResponse.json();
            const pushEvents = events.filter(event => event.type === 'PushEvent');
            totalCommits = pushEvents.reduce((acc, event) => acc + (event.payload.commits?.length || 0), 0);
          }
        } catch (err) {
          console.log('Could not fetch events');
        }
        
        setGithubStats({
          username: userData.login,
          name: userData.name,
          avatar: userData.avatar_url,
          bio: userData.bio,
          repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars: totalStars,
          commits: totalCommits || 'N/A',
          createdAt: userData.created_at,
          updatedAt: userData.updated_at,
        });
        
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError('Failed to load GitHub stats');
      } finally {
        setLoading(false);
      }
    };
    
    fetchGitHubStats();
  }, [username]);
  
  // Loading state
  if (loading) {
    return (
      <div className="p-4 text-vscode-text flex flex-col items-center justify-center h-full">
        <VscLoading className="animate-spin text-vscode-accent mb-3" size={32} />
        <p className="text-sm">Loading GitHub stats...</p>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="p-4 text-vscode-text">
        <div className="bg-red-500/10 border border-red-500/30 rounded p-4 text-center">
          <p className="text-red-500 mb-2">⚠️ {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-sm text-vscode-accent hover:underline"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  
  // Success state with data
  return (
    <div className="p-4 text-vscode-text">
      {/* Header with Avatar */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-vscode-border">
        <img 
          src={githubStats.avatar} 
          alt={githubStats.name}
          className="w-12 h-12 rounded-full border-2 border-vscode-accent"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-vscode-accent">{githubStats.name}</h3>
          <p className="text-xs text-vscode-text/60">@{githubStats.username}</p>
        </div>
      </div>
      
      {/* Bio */}
      {githubStats.bio && (
        <div className="mb-4 p-3 bg-vscode-hover/50 rounded text-sm italic">
          "{githubStats.bio}"
        </div>
      )}
      
      {/* Stats Grid */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between p-3 bg-vscode-hover rounded hover:bg-vscode-hover/80 transition-colors">
          <div className="flex items-center gap-2">
            <VscRepo size={18} className="text-blue-400" />
            <span>Repositories</span>
          </div>
          <span className="font-bold text-vscode-accent">{githubStats.repos}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-vscode-hover rounded hover:bg-vscode-hover/80 transition-colors">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⭐</span>
            <span>Total Stars</span>
          </div>
          <span className="font-bold text-yellow-400">{githubStats.totalStars}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-vscode-hover rounded hover:bg-vscode-hover/80 transition-colors">
          <div className="flex items-center gap-2">
            <VscOrganization size={18} className="text-green-400" />
            <span>Followers</span>
          </div>
          <span className="font-bold text-green-400">{githubStats.followers}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-vscode-hover rounded hover:bg-vscode-hover/80 transition-colors">
          <div className="flex items-center gap-2">
            <VscOrganization size={18} className="text-purple-400" />
            <span>Following</span>
          </div>
          <span className="font-bold text-purple-400">{githubStats.following}</span>
        </div>
        
        {githubStats.commits !== 'N/A' && (
          <div className="flex items-center justify-between p-3 bg-vscode-hover rounded hover:bg-vscode-hover/80 transition-colors">
            <div className="flex items-center gap-2">
              <VscGitCommit size={18} className="text-orange-400" />
              <span>Recent Commits</span>
            </div>
            <span className="font-bold text-orange-400">{githubStats.commits}+</span>
          </div>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="space-y-2">
        <a
          href={`https://github.com/${githubStats.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-vscode-accent text-white text-center rounded hover:opacity-90 transition-opacity"
        >
          <VscGithub size={18} />
          View GitHub Profile
        </a>
        
        <a
          href={`https://github.com/${githubStats.username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-vscode-hover border border-vscode-border text-vscode-text text-center rounded hover:border-vscode-accent transition-colors"
        >
          <VscRepo size={18} />
          View Repositories
        </a>
      </div>
      
      {/* Last Updated */}
      <div className="mt-4 pt-4 border-t border-vscode-border text-xs text-vscode-text/50 text-center">
        Profile updated: {new Date(githubStats.updatedAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default GitPanel;
