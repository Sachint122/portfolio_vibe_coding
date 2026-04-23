import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { VscGithub, VscMail, VscLocation, VscRocket, VscCode, VscSparkle } from 'react-icons/vsc';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import usePortfolioStore from '../../store/portfolioStore';

const AboutSection = () => {
  const { about } = portfolioData;
  const { openTab } = usePortfolioStore();
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
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      {/* AI Badge - Animated */}
      <div className="mb-4 md:mb-6 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative px-4 md:px-6 py-2 md:py-3 bg-vscode-bg border border-vscode-accent rounded-lg flex items-center gap-2 md:gap-3">
            <VscSparkle className="text-vscode-accent animate-pulse" size={16} />
            <span className="text-vscode-accent font-medium text-sm md:text-base">{typedText}</span>
            <VscSparkle className="text-vscode-accent animate-pulse" size={16} />
          </div>
        </div>
      </div>

      {/* Header Card */}
      <div className="relative overflow-hidden bg-gradient-to-r from-vscode-accent to-blue-600 rounded-lg p-4 md:p-8 mb-4 md:mb-8 shadow-2xl">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)`,
          }}></div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
          {/* Avatar with Glow */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-1 bg-white rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 flex items-center justify-center text-5xl md:text-6xl backdrop-blur-sm border-2 border-white/30">
              👨‍💻
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-white text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2 md:gap-3 flex-wrap">
              {about.name}
              <VscRocket className="animate-bounce" size={24} />
            </h1>
            <h2 className="text-lg md:text-2xl mb-2 md:mb-3 opacity-90">{about.title}</h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm md:text-lg opacity-80 mb-3">
              <div className="flex items-center gap-1">
                <VscLocation size={18} />
                <span>{about.location}</span>
              </div>
              <span className="hidden md:inline mx-2">•</span>
              <span>{about.age} years old</span>
            </div>
            <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
              <span className="px-2 md:px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm backdrop-blur-sm">
                🚀 Node.js Stack
              </span>
              <span className="px-2 md:px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm backdrop-blur-sm">
                ⚡ AI Enthusiast
              </span>
              <span className="px-2 md:px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm backdrop-blur-sm">
                💡 Problem Solver
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Card */}
      <div className="bg-vscode-hover border border-vscode-border rounded-lg p-4 md:p-6 mb-4 md:mb-6 hover:border-vscode-accent transition-all">
        <h3 className="text-lg md:text-xl font-bold text-vscode-accent mb-3 md:mb-4 flex items-center gap-2">
          <span>📖</span>
          About Me
        </h3>
        <p className="text-vscode-text leading-relaxed text-base md:text-lg mb-4">
          {about.bio}
        </p>
        <div className="border-t border-vscode-border pt-3 md:pt-4 mt-3 md:mt-4">
          <p className="text-vscode-text/80 leading-relaxed text-sm md:text-base">
            <VscCode className="inline text-vscode-accent" size={18} /> This portfolio is a testament to modern web development,
            combining cutting-edge technologies with AI-assisted development. Every component was crafted with precision and creativity.
          </p>
        </div>
      </div>

      {/* Tech Stack Highlights */}
      <div className="bg-gradient-to-r from-vscode-hover to-vscode-bg border border-vscode-border rounded-lg p-4 md:p-6 mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-bold text-vscode-accent mb-3 md:mb-4 flex items-center gap-2">
          <span>⚡</span>
          What Powers This Portfolio
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="text-center p-3 md:p-4 bg-vscode-bg/50 rounded-lg hover:bg-vscode-accent/10 transition-all">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">⚛️</div>
            <div className="text-xs md:text-sm font-medium text-vscode-text">React.js</div>
            <div className="text-xs text-vscode-text/50">UI Framework</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-vscode-bg/50 rounded-lg hover:bg-vscode-accent/10 transition-all">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">🎨</div>
            <div className="text-xs md:text-sm font-medium text-vscode-text">Tailwind CSS</div>
            <div className="text-xs text-vscode-text/50">Styling</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-vscode-bg/50 rounded-lg hover:bg-vscode-accent/10 transition-all">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">💻</div>
            <div className="text-xs md:text-sm font-medium text-vscode-text">XTerm.js</div>
            <div className="text-xs text-vscode-text/50">Terminal</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-vscode-bg/50 rounded-lg hover:bg-vscode-accent/10 transition-all">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">🤖</div>
            <div className="text-xs md:text-sm font-medium text-vscode-text">AI Assisted</div>
            <div className="text-xs text-vscode-text/50">Development</div>
          </div>
        </div>
      </div>

      {/* AI Development Badge */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
          <div className="text-4xl md:text-5xl">🤖</div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2">
              🌟 Crafted with AI Intelligence
            </h3>
            <p className="text-vscode-text/80 mb-3 text-sm md:text-base leading-relaxed">
              This portfolio showcases the perfect synergy between human creativity and artificial intelligence.
              Built using advanced AI-powered development tools, every feature was designed to deliver an exceptional
              user experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs md:text-sm">
                ✨ AI-Enhanced
              </span>
              <span className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs md:text-sm">
                🎯 Smart Components
              </span>
              <span className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs md:text-sm">
                🚀 Optimized
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-vscode-hover border border-vscode-border rounded-lg p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-vscode-accent mb-3 md:mb-4 flex items-center gap-2">
          <span>📬</span>
          Get In Touch
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {/* Email */}
          <a
            href={`mailto:${about.email}`}
            className="flex items-center gap-3 p-3 md:p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group hover:shadow-lg"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors group-hover:scale-110 flex-shrink-0">
              <VscMail size={20} className="text-vscode-accent" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs md:text-sm text-vscode-text/60">Email</div>
              <div className="text-sm md:text-base text-vscode-text font-medium group-hover:text-vscode-accent transition-colors truncate">{about.email}</div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={about.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 md:p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group hover:shadow-lg"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors group-hover:scale-110 flex-shrink-0">
              <VscGithub size={20} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-xs md:text-sm text-vscode-text/60">GitHub</div>
              <div className="text-sm md:text-base text-vscode-text font-medium group-hover:text-vscode-accent transition-colors">View Profile</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 md:p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group hover:shadow-lg"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors group-hover:scale-110 flex-shrink-0">
              <FaLinkedin size={20} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-xs md:text-sm text-vscode-text/60">LinkedIn</div>
              <div className="text-sm md:text-base text-vscode-text font-medium group-hover:text-vscode-accent transition-colors">Connect</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${about.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 md:p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group hover:shadow-lg"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors group-hover:scale-110 flex-shrink-0">
              <FaWhatsapp size={20} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-xs md:text-sm text-vscode-text/60">WhatsApp</div>
              <div className="text-sm md:text-base text-vscode-text font-medium group-hover:text-vscode-accent transition-colors">Chat with me</div>
            </div>
          </a>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-4 md:mt-6 flex justify-center">
        <button
          onClick={() => openTab({ id: 'all-resumes', name: 'Resumes', type: 'all-resumes' })}
          className="relative group cursor-pointer w-full md:w-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-vscode-accent to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-vscode-accent text-white rounded-lg font-medium text-base md:text-lg hover:opacity-90 transition-opacity shadow-lg">
            <span>📄</span>
            <span>View My Resumes</span>
            <VscRocket className="group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>

      {/* Footer Quote */}
      <div className="mt-6 md:mt-8 text-center">
        <p className="text-vscode-text/50 italic text-xs md:text-sm px-4">
          "Merging human creativity with AI intelligence to build the future, one line of code at a time."
          <span className="text-vscode-accent ml-2">✨</span>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
