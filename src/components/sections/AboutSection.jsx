import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { VscGithub, VscMail, VscLocation, VscLink } from 'react-icons/vsc';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutSection = () => {
  const { about } = portfolioData;
  
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-vscode-accent to-blue-600 rounded-lg p-8 mb-8 shadow-lg">
        <div className="flex items-start gap-6">
          {/* Avatar Placeholder */}
          <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-6xl flex-shrink-0">
            👨‍💻
          </div>
          
          {/* Info */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl font-bold mb-2">{about.name}</h1>
            <h2 className="text-2xl mb-3 opacity-90">{about.title}</h2>
            <div className="flex items-center gap-2 text-lg opacity-80">
              <VscLocation size={20} />
              <span>{about.location}</span>
              <span className="mx-2">•</span>
              <span>{about.age} years old</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bio Card */}
      <div className="bg-vscode-hover border border-vscode-border rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-vscode-accent mb-4 flex items-center gap-2">
          <span>📖</span>
          About Me
        </h3>
        <p className="text-vscode-text leading-relaxed text-lg">
          {about.bio}
        </p>
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
            className="flex items-center gap-3 p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors">
              <VscMail size={24} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-sm text-vscode-text/60">Email</div>
              <div className="text-vscode-text font-medium">{about.email}</div>
            </div>
          </a>
          
          {/* GitHub */}
          <a
            href={about.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors">
              <VscGithub size={24} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-sm text-vscode-text/60">GitHub</div>
              <div className="text-vscode-text font-medium">View Profile</div>
            </div>
          </a>
          
          {/* LinkedIn */}
          <a
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors">
              <FaLinkedin size={24} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-sm text-vscode-text/60">LinkedIn</div>
              <div className="text-vscode-text font-medium">Connect</div>
            </div>
          </a>
          
          {/* Twitter */}
          <a
            href={about.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors">
              <FaTwitter size={24} className="text-vscode-accent" />
            </div>
            <div>
              <div className="text-sm text-vscode-text/60">Twitter</div>
              <div className="text-vscode-text font-medium">Follow</div>
            </div>
          </a>
        </div>
      </div>
      
      {/* Download Resume Button */}
      <div className="mt-6 flex justify-center">
        <a
          href={about.resume}
          download
          className="flex items-center gap-2 px-8 py-4 bg-vscode-accent text-white rounded-lg font-medium text-lg hover:opacity-90 transition-opacity shadow-lg"
        >
          <span>📄</span>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
