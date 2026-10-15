import React, { useState } from 'react';
import { VscCheck, VscCopy, VscMail, VscFilePdf, VscBriefcase, VscGlobe } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import { portfolioData } from '../../data/portfolioData';
import CardTilt3D from '../3d/CardTilt3D';

const LiveDeveloperStatus = () => {
  const { openTab } = usePortfolioStore();
  const [copied, setCopied] = useState(false);
  const { about } = portfolioData;

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(about.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const primaryTech = [
    { name: 'Node.js', icon: '🟢', bg: 'bg-green-500/10 text-green-400 border-green-500/30' },
    { name: 'Express.js', icon: '⚡', bg: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' },
    { name: 'React.js', icon: '⚛️', bg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
    { name: 'MongoDB', icon: '🍃', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
    { name: 'MySQL', icon: '🐬', bg: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
    { name: 'RBAC Systems', icon: '🔐', bg: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
    { name: 'Tailwind CSS', icon: '🎨', bg: 'bg-sky-500/10 text-sky-400 border-sky-500/30' }
  ];

  return (
    <CardTilt3D maxTilt={6} className="h-full">
      <div className="relative h-full flex flex-col justify-between p-5 md:p-6 rounded-2xl bg-gradient-to-b from-vscode-sidebar/90 via-vscode-bg/95 to-vscode-sidebar/90 border border-vscode-border hover:border-vscode-accent/60 shadow-xl backdrop-blur-md transition-all group overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-green-500/10 via-cyan-500/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-green-500/20 transition-all duration-700" />

        <div>
          {/* Header Bar: Status Indicator & Badge */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-vscode-border/60">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
                Available for Work
              </span>
            </div>

            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-vscode-accent/10 border border-vscode-accent/30 text-vscode-accent">
              Full-Time / Contracts
            </span>
          </div>

          {/* Developer Core Info */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-vscode-text group-hover:text-vscode-accent transition-colors flex items-center gap-2">
                {about.name}
                <span className="text-base" title="Verified Developer">🚀</span>
              </h3>
              <p className="text-sm font-medium text-vscode-accent mt-0.5 flex items-center gap-1.5">
                <VscBriefcase size={14} className="flex-shrink-0" />
                <span>Web Developer @ Dindia</span>
              </p>
              <p className="text-xs text-vscode-text/60 mt-1 flex items-center gap-1.5">
                <VscGlobe size={13} className="flex-shrink-0" />
                <span>{about.location} • UTC+5:30 (India)</span>
              </p>
            </div>

            <div className="text-right">
              <span className="block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                1+ Yr
              </span>
              <span className="text-[10px] font-mono text-vscode-text/60 uppercase tracking-wider">
                Full-Time Exp
              </span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 p-2.5 mb-4 rounded-xl bg-vscode-bg/60 border border-vscode-border/50 text-center font-mono">
            <div className="border-r border-vscode-border/40 pr-1">
              <span className="block text-xs font-bold text-vscode-text">10+</span>
              <span className="text-[10px] text-vscode-text/50">Projects</span>
            </div>
            <div className="border-r border-vscode-border/40 px-1">
              <span className="block text-xs font-bold text-emerald-400">&lt; 24h</span>
              <span className="text-[10px] text-vscode-text/50">Response</span>
            </div>
            <div className="pl-1">
              <span className="block text-xs font-bold text-cyan-400">Remote</span>
              <span className="text-[10px] text-vscode-text/50">Worldwide</span>
            </div>
          </div>

          {/* Primary Tech Stack */}
          <div className="mb-4">
            <span className="block text-[11px] font-mono text-vscode-text/60 mb-2 uppercase tracking-wider">
              Primary Stack & Specialization:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {primaryTech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-transform hover:scale-105 ${tech.bg}`}
                >
                  <span className="text-xs">{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-vscode-border/60 flex flex-wrap gap-2">
          <button
            onClick={() => openTab({ id: 'contact', name: 'contact.jsx', type: 'contact', language: 'react' })}
            className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-vscode-accent to-blue-600 hover:from-blue-600 hover:to-vscode-accent text-white rounded-lg text-xs font-semibold shadow-md transition-all active:scale-95"
          >
            <VscMail size={15} />
            <span>Connect / Hire</span>
          </button>

          <button
            onClick={() => openTab({ id: 'all-resumes', name: 'Resumes', type: 'all-resumes' })}
            className="flex-1 min-w-[110px] flex items-center justify-center gap-1.5 px-3 py-2 bg-vscode-hover hover:bg-vscode-bg border border-vscode-border hover:border-vscode-accent text-vscode-text rounded-lg text-xs font-semibold transition-all active:scale-95"
          >
            <VscFilePdf size={15} className="text-vscode-accent" />
            <span>Resume</span>
          </button>

          <button
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="px-3 py-2 bg-vscode-hover hover:bg-vscode-bg border border-vscode-border hover:border-vscode-accent text-vscode-text rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 active:scale-95"
          >
            {copied ? (
              <>
                <VscCheck size={14} className="text-emerald-400" />
                <span className="text-emerald-400 font-mono text-[11px]">Copied</span>
              </>
            ) : (
              <>
                <VscCopy size={14} />
                <span className="font-mono text-[11px]">Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </CardTilt3D>
  );
};

export default React.memo(LiveDeveloperStatus);
