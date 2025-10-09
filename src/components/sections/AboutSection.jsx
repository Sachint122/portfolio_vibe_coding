import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { VscGithub, VscMail, VscLocation, VscRocket, VscCode, VscSparkle } from 'react-icons/vsc';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import usePortfolioStore from '../../store/portfolioStore';
const AboutSection = () => {
  const { about } = portfolioData;
  const { openTab } = usePortfolioStore(); // Add this
  const [typedText, setTypedText] = useState('');
  const fullText = "Built with AI-Powered Creativity ✨";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* AI Badge - Animated */}
      <div className="mb-6 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative px-6 py-3 bg-vscode-bg border border-vscode-accent rounded-lg flex items-center gap-3">
            <VscSparkle className="text-vscode-accent animate-pulse" size={20} />
            <span className="text-vscode-accent font-medium">{typedText}</span>
            <VscSparkle className="text-vscode-accent animate-pulse" size={20} />
          </div>
        </div>
      </div>

      {/* Header Card */}
      <div className="relative overflow-hidden bg-gradient-to-r from-vscode-accent to-blue-600 rounded-lg p-8 mb-8 shadow-2xl">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)`,
          }}></div>
        </div>

        <div className="relative flex items-start gap-6">
          {/* Avatar with Glow */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-white rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-6xl flex-shrink-0 backdrop-blur-sm border-2 border-white/30">
              👨‍💻
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              {about.name}
              <VscRocket className="animate-bounce" size={32} />
            </h1>
            <h2 className="text-2xl mb-3 opacity-90">{about.title}</h2>
            <div className="flex items-center gap-2 text-lg opacity-80">
              <VscLocation size={20} />
              <span>{about.location}</span>
              <span className="mx-2">•</span>
              <span>{about.age} years old</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                🚀 MERN Stack Expert
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                ⚡ AI Enthusiast
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                💡 Problem Solver
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Card */}
      <div className="bg-vscode-hover border border-vscode-border rounded-lg p-6 mb-6 hover:border-vscode-accent transition-all">
        <h3 className="text-xl font-bold text-vscode-accent mb-4 flex items-center gap-2">
          <span>📖</span>
          About Me
        </h3>
        <p className="text-vscode-text leading-relaxed text-lg mb-4">
          {about.bio}
        </p>
        <div className="border-t border-vscode-border pt-4 mt-4">
          <p className="text-vscode-text/80 leading-relaxed">
            <VscCode className="inline text-vscode-accent" size={20} /> This portfolio is a testament to modern web development,
            combining cutting-edge technologies with AI-assisted development. Every component, from the VS Code-inspired interface
            to the interactive terminal, was crafted with precision and creativity using the power of AI collaboration.
          </p>
        </div>
      </div>

      {/* Tech Stack Highlights */}
      <div className="bg-gradient-to-r from-vscode-hover to-vscode-bg border border-vscode-border rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-vscode-accent mb-4 flex items-center gap-2">
          <span>⚡</span>
          What Powers This Portfolio
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-vscode-bg/50 rounded-lg hover:bg-vscode-accent/10 transition-all">
            <div className="text-3xl mb-2">⚛️</div>
            <div className="text-sm font-medium text-vscode-text">React.js</div>
            <div className="text-xs text-vscode-text/50">UI Framework</div>
          </div>
          <div className="text-center p-4 bg-vscode-bg/50 rounded-lg hover:bg-vscode-accent/10 transition-all">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-sm font-medium text-vscode-text">Tailwind CSS</div>
            <div className="text-xs text-vscode-text/50">Styling</div>
          </div>
          <div className="text-center p-4 bg-vscode-bg/50 rounded-lg hover:bg-vscode-accent/10 transition-all">
            <div className="text-3xl mb-2">💻</div>
            <div className="text-sm font-medium text-vscode-text">XTerm.js</div>
            <div className="text-xs text-vscode-text/50">Terminal</div>
          </div>
          <div className="text-center p-4 bg-vscode-bg/50 rounded-lg hover:bg-vscode-accent/10 transition-all">
            <div className="text-3xl mb-2">🤖</div>
            <div className="text-sm font-medium text-vscode-text">AI Assisted</div>
            <div className="text-xs text-vscode-text/50">Development</div>
          </div>
        </div>
      </div>

      {/* AI Development Badge */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="text-5xl">🤖</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              🌟 Crafted with AI Intelligence
            </h3>
            <p className="text-vscode-text/80 mb-3">
              This portfolio showcases the perfect synergy between human creativity and artificial intelligence.
              Built using advanced AI-powered development tools, every feature was designed to deliver an exceptional
              user experience while maintaining clean, efficient code.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                ✨ AI-Enhanced Design
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                🎯 Smart Components
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                🚀 Optimized Performance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-vscode-hover border border-vscode-border rounded-lg p-6">
        <h3 className="text-xl font-bold text-vscode-accent mb-4 flex items-center gap-2">
          <span>📬</span>
          Get In Touch
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <a
            href={`mailto:${about.email}`}
            className="flex items-center gap-3 p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors group-hover:scale-110">
              <VscMail size={24} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-sm text-vscode-text/60">Email</div>
              <div className="text-vscode-text font-medium group-hover:text-vscode-accent transition-colors">{about.email}</div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={about.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors group-hover:scale-110">
              <VscGithub size={24} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-sm text-vscode-text/60">GitHub</div>
              <div className="text-vscode-text font-medium group-hover:text-vscode-accent transition-colors">View Profile</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors group-hover:scale-110">
              <FaLinkedin size={24} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-sm text-vscode-text/60">LinkedIn</div>
              <div className="text-vscode-text font-medium group-hover:text-vscode-accent transition-colors">Connect</div>
            </div>
          </a>

          {/* Twitter */}
          <a
            href={`https://wa.me/${about.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors group-hover:scale-110">
              <FaWhatsapp size={24} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-sm text-vscode-text/60">Whatsapp</div>
              <div className="text-vscode-text font-medium group-hover:text-vscode-accent transition-colors">chat with me</div>
            </div>
          </a>
        </div>
      </div>

      {/* Download Resume Button */}
      {/* Download Resume Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => openTab({ id: 'all-resumes', name: 'Resumes', type: 'all-resumes' })}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-vscode-accent to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative flex items-center gap-2 px-8 py-4 bg-vscode-accent text-white rounded-lg font-medium text-lg hover:opacity-90 transition-opacity shadow-lg">
            <span>📄</span>
            <span>View My Resumes</span>
            <VscRocket className="group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>


      {/* Footer Quote */}
      <div className="mt-8 text-center">
        <p className="text-vscode-text/50 italic text-sm">
          "Merging human creativity with AI intelligence to build the future, one line of code at a time."
          <span className="text-vscode-accent ml-2">✨</span>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
