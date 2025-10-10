import React, { useState, useEffect } from 'react';
import { VscCode, VscGithub, VscTerminal, VscRocket, VscSparkle } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import { portfolioData } from '../../data/portfolioData';

const WelcomeSection = () => {
  const { openTab, toggleTerminal } = usePortfolioStore();
  const [typingText, setTypingText] = useState('');
  const fullText = "Crafted with AI Intelligence";
  
  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);
  
  const quickActions = [
    {
      icon: '👨‍💻',
      title: 'About Me',
      description: 'Discover my journey',
      color: 'from-blue-500 to-cyan-500',
      action: () => openTab({ id: 'about', name: 'about.js', type: 'about', language: 'javascript' })
    },
    {
      icon: '🚀',
      title: 'Projects',
      description: 'Explore my creations',
      color: 'from-purple-500 to-pink-500',
      action: () => openTab({ id: 'all-projects', name: 'Projects', type: 'all-projects' })
    },
    {
      icon: '💻',
      title: 'Skills',
      description: 'Tech stack & expertise',
      color: 'from-green-500 to-emerald-500',
      action: () => openTab({ id: 'skills', name: 'skills.json', type: 'skills', language: 'json' })
    },
    {
      icon: '📬',
      title: 'Contact',
      description: "Let's connect",
      color: 'from-orange-500 to-red-500',
      action: () => openTab({ id: 'contact', name: 'contact.jsx', type: 'contact', language: 'react' })
    }
  ];
  
  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8 py-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Icon with Glow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-vscode-accent blur-2xl opacity-20 rounded-full"></div>
              <VscCode size={120} className="text-vscode-accent opacity-90 relative" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-vscode-bg animate-pulse flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
            </div>
          </div>
          
          {/* Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-vscode-accent via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-vscode-text mb-2 font-semibold">
            {portfolioData.about.name}
          </p>
          <p className="text-xl text-vscode-accent mb-3">
            {portfolioData.about.title}
          </p>
          <p className="text-lg text-vscode-text/60 mb-8 flex items-center justify-center gap-2">
            <span>📍</span>
            <span>{portfolioData.about.location}</span>
          </p>
          
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full mb-8">
            <VscSparkle className="text-purple-400 animate-pulse" size={16} />
            <span className="text-purple-400 text-sm font-medium">{typingText}</span>
            <VscSparkle className="text-pink-400 animate-pulse" size={16} />
          </div>
          
          {/* AI Description Box */}
          <div className="max-w-3xl mx-auto mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="text-3xl">🤖</div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  AI-Enhanced Development
                </h3>
                <p className="text-vscode-text/80 leading-relaxed">
                  This portfolio represents the perfect fusion of <span className="text-vscode-accent font-semibold">human creativity</span> and 
                  <span className="text-purple-400 font-semibold"> artificial intelligence</span>. Every component, from the VS Code-inspired 
                  interface to the interactive terminal, was meticulously crafted using cutting-edge AI collaboration, resulting in a seamless, 
                  professional experience.
                </p>
              </div>
            </div>
            
            {/* Tech Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className="p-3 bg-vscode-bg/50 rounded border border-vscode-border">
                <div className="text-2xl mb-1">⚛️</div>
                <div className="text-xs font-medium text-vscode-text">React.js</div>
              </div>
              <div className="p-3 bg-vscode-bg/50 rounded border border-vscode-border">
                <div className="text-2xl mb-1">🎨</div>
                <div className="text-xs font-medium text-vscode-text">Tailwind</div>
              </div>
              <div className="p-3 bg-vscode-bg/50 rounded border border-vscode-border">
                <div className="text-2xl mb-1">💻</div>
                <div className="text-xs font-medium text-vscode-text">XTerm.js</div>
              </div>
              <div className="p-3 bg-vscode-bg/50 rounded border border-vscode-border">
                <div className="text-2xl mb-1">✨</div>
                <div className="text-xs font-medium text-vscode-text">AI-Powered</div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="relative p-6 bg-vscode-hover border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {action.icon}
                  </div>
                  <h3 className="font-bold text-vscode-text mb-1 group-hover:text-vscode-accent transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-vscode-text/60">
                    {action.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={portfolioData.about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-vscode-accent to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition"></div>
              <div className="relative flex items-center gap-2 px-6 py-3 bg-vscode-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg">
                <VscGithub size={20} />
                <span>GitHub Profile</span>
              </div>
            </a>
            
            <button
              onClick={() => openTab({ id: 'all-resumes', name: 'Resumes', type: 'all-resumes' })}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition"></div>
              <div className="relative flex items-center gap-2 px-6 py-3 border border-vscode-accent text-vscode-accent rounded-lg font-medium hover:bg-vscode-accent hover:text-white transition-all">
                <span>📄</span>
                <span>View Resumes</span>
              </div>
            </button>
            
            <button
              onClick={toggleTerminal}
              className="flex items-center gap-2 px-6 py-3 border border-vscode-border text-vscode-text rounded-lg font-medium hover:border-vscode-accent hover:text-vscode-accent transition-all"
            >
              <VscTerminal size={20} />
              <span>Open Terminal</span>
            </button>
          </div>
          
          {/* Features Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="p-4 bg-vscode-hover border border-vscode-border rounded-lg">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-vscode-text mb-1">Interactive Terminal</h4>
              <p className="text-xs text-vscode-text/60">
                Full-featured terminal with 20+ commands
              </p>
            </div>
            <div className="p-4 bg-vscode-hover border border-vscode-border rounded-lg">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold text-vscode-text mb-1">15 Premium Themes</h4>
              <p className="text-xs text-vscode-text/60">
                Customize your experience instantly
              </p>
            </div>
            <div className="p-4 bg-vscode-hover border border-vscode-border rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-vscode-text mb-1">Lightning Fast</h4>
              <p className="text-xs text-vscode-text/60">
                Built with modern React & optimization
              </p>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="space-y-3 text-sm text-vscode-text/60 bg-vscode-hover/50 p-6 rounded-lg border border-vscode-border">
            <h4 className="text-vscode-accent font-semibold mb-3 flex items-center justify-center gap-2">
              <VscRocket size={18} />
              <span>Quick Start Guide</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <p className="flex items-center gap-2">
                <span>📁</span>
                <span>Click <span className="text-vscode-accent font-medium">Explorer</span> to browse files</span>
              </p>
              <p className="flex items-center gap-2">
                <span>⌨️</span>
                <span>Type <kbd className="px-2 py-1 bg-vscode-bg rounded text-xs font-mono text-vscode-accent">help</kbd> in terminal</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🎨</span>
                <span>Try <span className="text-vscode-accent font-medium">15 themes</span> from sidebar</span>
              </p>
            </div>
          </div>
          
          {/* Footer Quote */}
          <div className="mt-8 pt-6 border-t border-vscode-border/30">
            <p className="text-vscode-text/50 italic text-sm flex items-center justify-center gap-2">
              <VscSparkle className="text-purple-400" />
              <span>"Where human creativity meets AI intelligence to build extraordinary experiences"</span>
              <VscSparkle className="text-pink-400" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
