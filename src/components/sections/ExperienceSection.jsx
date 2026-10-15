import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { 
  VscRocket, 
  VscMortarBoard, 
  VscLocation, 
  VscCalendar, 
  VscLinkExternal,
  VscShield,
  VscBriefcase
} from 'react-icons/vsc';
import ExperienceJourneyTimeline from '../features/ExperienceJourneyTimeline';
import EngineeringContributions from '../features/EngineeringContributions';
import CardTilt3D from '../3d/CardTilt3D';

const ExperienceSection = () => {
  const { experience, education, about } = portfolioData;

  const topMetrics = [
    { label: 'Commercial Experience', value: '1+ Yr', icon: <VscBriefcase className="text-blue-400" size={16} /> },
    { label: 'Organizations & Roles', value: `${experience.length}`, icon: <VscRocket className="text-purple-400" size={16} /> },
    { label: 'Production Deliverables', value: '12+', icon: <VscShield className="text-emerald-400" size={16} /> },
    { label: 'Evidence Verified', value: '100%', icon: <span className="text-amber-400 text-sm font-bold">✓</span> }
  ];

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center pt-2">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-blue-500/30 rounded-full mb-3 md:mb-4">
          <VscRocket className="text-blue-400" size={14} />
          <span className="text-blue-400 text-xs md:text-sm font-mono font-medium">
            5. Experience & Engineering Impact
          </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          <span className="bg-gradient-to-r from-vscode-accent via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Professional Experience & Contributions
          </span>
        </h1>
        <p className="text-vscode-text/75 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
          Full-stack commercial development, enterprise ERP systems, and responsive web platforms built with rigorous engineering standards.
        </p>

        {/* Quick High-Level Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-3xl mx-auto">
          {topMetrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="p-3 rounded-xl bg-vscode-bg border border-vscode-border/80 flex flex-col items-center justify-center text-center shadow-sm"
            >
              <div className="flex items-center gap-1.5 mb-1">
                {metric.icon}
                <span className="text-base md:text-lg font-bold font-mono text-vscode-text">
                  {metric.value}
                </span>
              </div>
              <span className="text-[11px] font-mono text-vscode-text/60 uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature 13: Expandable Experience Journey Timeline */}
      <section>
        <ExperienceJourneyTimeline experience={experience} />
      </section>

      {/* Feature 14: Evidence-Based Engineering Contributions */}
      <section>
        <EngineeringContributions />
      </section>

      {/* Academic Background & Qualifications */}
      <section className="pt-4 border-t border-vscode-border/60">
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
            <VscMortarBoard size={20} className="text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-vscode-text">
              Academic Qualifications & Credentials
            </h2>
            <p className="text-xs text-vscode-text/60 font-mono mt-0.5">
              Foundational computer science education and technical credentials
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {education.map((edu, index) => (
            <CardTilt3D key={index} maxTilt={4}>
              <div className="p-5 rounded-xl bg-vscode-bg/90 border border-vscode-border hover:border-purple-500/40 transition-all duration-300 shadow-md">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎓</span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
                    Score: {edu.grade}
                  </span>
                </div>

                <h3 className="text-base font-bold text-vscode-text mb-1">
                  {edu.degree}
                </h3>
                <p className="text-xs md:text-sm text-vscode-text/80 mb-3">
                  {edu.institution}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-vscode-text/60 pt-2 border-t border-vscode-border/40">
                  <div className="flex items-center gap-1.5">
                    <VscCalendar size={13} className="text-blue-400" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <VscLocation size={13} className="text-emerald-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </CardTilt3D>
          ))}
        </div>
      </section>

      {/* Verified Professional Contact CTA */}
      <div className="text-center pt-6 pb-2">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-vscode-accent/10 via-purple-500/10 to-emerald-500/10 border border-vscode-border/80 rounded-xl text-xs md:text-sm shadow-sm">
          <span className="text-vscode-text">
            Looking for detailed technical references or commercial verifications?
          </span>
          <a
            href={about?.linkedin || "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-vscode-accent hover:underline ml-1"
          >
            <span>Connect on LinkedIn</span>
            <VscLinkExternal size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
