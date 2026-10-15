import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { VscFilePdf, VscRocket, VscLinkExternal, VscShield, VscBriefcase } from 'react-icons/vsc';
import InteractiveResumeViewer from '../features/InteractiveResumeViewer';
import CardTilt3D from '../3d/CardTilt3D';

const ResumeSection = ({ resumeId }) => {
  const { resumes, about, experience, education, projects } = portfolioData;

  const highlights = [
    { label: 'Tailored Profiles', value: '3 Variants', icon: <VscBriefcase className="text-blue-400" size={15} /> },
    { label: 'Role Targets', value: 'Full Stack · MERN · Backend', icon: <VscRocket className="text-purple-400" size={15} /> },
    { label: 'Credentials Verified', value: '100% Backed', icon: <VscShield className="text-emerald-400" size={15} /> }
  ];

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center pt-2">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-blue-500/30 rounded-full mb-3 md:mb-4">
          <VscFilePdf className="text-blue-400" size={14} />
          <span className="text-blue-400 text-xs md:text-sm font-mono font-medium">
            6. Resume & Career Profiles
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          <span className="bg-gradient-to-r from-vscode-accent via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Resume & Role Variants
          </span>
        </h1>
        <p className="text-vscode-text/75 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
          Preview interactive tailored resumes for Full Stack, MERN Stack, and Backend roles with instant zoom, direct download, and verified credentials.
        </p>

        {/* Highlight Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {highlights.map((h, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-vscode-bg border border-vscode-border/80 text-xs font-mono text-vscode-text/80 shadow-sm"
            >
              {h.icon}
              <span className="text-vscode-text/60">{h.label}:</span>
              <span className="font-bold text-vscode-text">{h.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature 15 & 16: Interactive Resume Viewer & Variant Selector */}
      <section>
        <InteractiveResumeViewer 
          resumes={resumes}
          initialResumeId={resumeId}
          about={about}
          experience={experience}
          education={education}
          projects={projects}
        />
      </section>

      {/* Recruiter / Hiring Manager Info Banner */}
      <div className="pt-4 border-t border-vscode-border/60">
        <CardTilt3D maxTilt={3}>
          <div className="p-5 md:p-6 rounded-xl bg-gradient-to-r from-vscode-bg via-vscode-hover to-vscode-bg border border-vscode-border/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-vscode-accent/10 border border-vscode-accent/30 flex items-center justify-center flex-shrink-0 text-xl">
                💼
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-vscode-text">
                  Looking for a custom interview packet or portfolio walk-through?
                </h3>
                <p className="text-xs text-vscode-text/65 font-mono mt-0.5">
                  Available for immediate Full Stack, MERN Stack, and Backend Developer positions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={about?.linkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-vscode-hover hover:bg-vscode-border border border-vscode-border text-xs font-mono text-vscode-text font-bold transition-all"
              >
                <span>LinkedIn</span>
                <VscLinkExternal size={12} />
              </a>
              <a
                href={`mailto:${about?.email || 'sachintiwari.751858@gmail.com'}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-vscode-accent hover:bg-blue-600 text-white text-xs font-mono font-bold transition-all shadow-md shadow-vscode-accent/20"
              >
                <span>Contact Directly</span>
              </a>
            </div>
          </div>
        </CardTilt3D>
      </div>
    </div>
  );
};

export default ResumeSection;
