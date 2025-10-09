import React from 'react';
import { VscCode, VscGithub, VscMail, VscTerminal } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import { portfolioData } from '../../data/portfolioData';

const WelcomeSection = () => {
  const { openTab, toggleTerminal } = usePortfolioStore();
  
  const quickActions = [
    {
      icon: '👨‍💻',
      title: 'About Me',
      description: 'Learn about my background',
      action: () => openTab({ id: 'about', name: 'about.js', type: 'about', language: 'javascript' })
    },
    {
      icon: '🚀',
      title: 'Projects',
      description: 'View my latest work',
      action: () => openTab({ id: 'projects-folder', name: 'Projects', type: 'projects' })
    },
    {
      icon: '💻',
      title: 'Skills',
      description: 'Check my tech stack',
      action: () => openTab({ id: 'skills', name: 'skills.json', type: 'skills', language: 'json' })
    },
    {
      icon: '📬',
      title: 'Contact',
      description: 'Get in touch',
      action: () => openTab({ id: 'contact', name: 'contact.jsx', type: 'contact', language: 'react' })
    }
  ];
  
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="text-center max-w-4xl">
        {/* Main Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <VscCode size={100} className="text-vscode-accent opacity-80" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-vscode-bg animate-pulse"></div>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-vscode-accent mb-4 animate-fade-in">
          Welcome to My Portfolio
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-vscode-text mb-3">
          {portfolioData.about.name}
        </p>
        <p className="text-xl text-vscode-text/80 mb-8">
          {portfolioData.about.title} • {portfolioData.about.location}
        </p>
        
        {/* Description */}
        <p className="text-vscode-text/70 text-lg max-w-2xl mx-auto mb-12">
          Passionate about building scalable web applications using the MERN stack. 
          Turning ideas into elegant, efficient, and user-friendly solutions.
        </p>
        
        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="p-6 bg-vscode-hover border border-vscode-border rounded-lg hover:border-vscode-accent hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{action.icon}</div>
              <h3 className="font-bold text-vscode-text mb-1">{action.title}</h3>
              <p className="text-sm text-vscode-text/60">{action.description}</p>
            </button>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={portfolioData.about.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-vscode-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
          >
            <VscGithub size={20} />
            GitHub Profile
          </a>
          <a
            href={portfolioData.about.resume}
            download
            className="flex items-center gap-2 px-6 py-3 border border-vscode-accent text-vscode-accent rounded-lg font-medium hover:bg-vscode-accent hover:text-white transition-all"
          >
            <span>📄</span>
            Download Resume
          </a>
          <button
            onClick={toggleTerminal}
            className="flex items-center gap-2 px-6 py-3 border border-vscode-border text-vscode-text rounded-lg font-medium hover:border-vscode-accent transition-all"
          >
            <VscTerminal size={20} />
            Open Terminal
          </button>
        </div>
        
        {/* Instructions */}
        <div className="space-y-3 text-sm text-vscode-text/60">
          <p className="flex items-center justify-center gap-2">
            <span>💡</span>
            <span>Click on the Explorer icon on the left to browse files</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>⌨️</span>
            <span>Press <kbd className="px-2 py-1 bg-vscode-hover rounded text-xs font-mono">Ctrl + `</kbd> to toggle terminal</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>🎨</span>
            <span>Change theme from the status bar below</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
