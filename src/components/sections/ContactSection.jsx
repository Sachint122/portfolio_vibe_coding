import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { VscRadioTower } from 'react-icons/vsc';
import ConnectionStatusPanel from '../features/ConnectionStatusPanel';
import InteractiveContactTerminal from '../features/InteractiveContactTerminal';

const ContactSection = () => {
  const { about } = portfolioData;

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center pt-2">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-blue-500/30 rounded-full mb-3 md:mb-4">
          <VscRadioTower className="text-blue-400" size={14} />
          <span className="text-blue-400 text-xs md:text-sm font-mono font-medium">
            7. Contact & Network Portal
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          <span className="bg-gradient-to-r from-vscode-accent via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Let's Connect & Collaborate
          </span>
        </h1>
        <p className="text-vscode-text/75 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
          Reach out for commercial Full Stack, MERN Stack, and Backend opportunities. Inquire via the interactive terminal or connect through verified live channels.
        </p>
      </div>

      {/* Feature 18: Connection Status Panel */}
      <section>
        <ConnectionStatusPanel about={about} />
      </section>

      {/* Feature 17: Interactive Contact Terminal */}
      <section>
        <InteractiveContactTerminal about={about} />
      </section>
    </div>
  );
};

export default ContactSection;
