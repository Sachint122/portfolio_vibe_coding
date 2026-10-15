import React, { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { 
  VscBriefcase, 
  VscCalendar, 
  VscLocation, 
  VscChevronDown, 
  VscChevronUp, 
  VscPass, 
  VscRocket,
  VscFold,
  VscUnfold
} from 'react-icons/vsc';
import CardTilt3D from '../3d/CardTilt3D';

const ExperienceJourneyTimeline = ({ experience = [] }) => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 25%']
  });

  // Default first experience (Dindia) expanded
  const [expandedIds, setExpandedIds] = useState({ 1: true });

  const toggleExpand = (id) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const areAllExpanded = experience.length > 0 && experience.every(exp => expandedIds[exp.id]);

  const toggleExpandAll = () => {
    if (areAllExpanded) {
      setExpandedIds({});
    } else {
      const all = {};
      experience.forEach(exp => {
        all[exp.id] = true;
      });
      setExpandedIds(all);
    }
  };

  const getCompanyColor = (id) => {
    switch (id) {
      case 1:
        return {
          glow: 'from-blue-500/20 via-cyan-500/10 to-transparent',
          border: 'border-blue-500/30 hover:border-blue-400/60',
          badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
          dot: 'bg-blue-500 ring-4 ring-blue-500/20',
          accent: 'text-blue-400'
        };
      case 2:
        return {
          glow: 'from-purple-500/20 via-pink-500/10 to-transparent',
          border: 'border-purple-500/30 hover:border-purple-400/60',
          badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
          dot: 'bg-purple-500 ring-4 ring-purple-500/20',
          accent: 'text-purple-400'
        };
      case 3:
        return {
          glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
          border: 'border-emerald-500/30 hover:border-emerald-400/60',
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-500 ring-4 ring-emerald-500/20',
          accent: 'text-emerald-400'
        };
      case 4:
      default:
        return {
          glow: 'from-amber-500/20 via-orange-500/10 to-transparent',
          border: 'border-amber-500/30 hover:border-amber-400/60',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          dot: 'bg-amber-500 ring-4 ring-amber-500/20',
          accent: 'text-amber-400'
        };
    }
  };

  return (
    <div className="mb-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-vscode-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
              13. Experience Journey
            </span>
            <span className="text-xs text-vscode-text/60 font-mono">
              Timeline · Roles & Deliverables
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-vscode-text tracking-tight">
            My Professional Experiences
          </h2>
          <p className="text-xs md:text-sm text-vscode-text/70 mt-1 max-w-xl">
            Company-wise roles, responsibilities, technical stacks, and verified deliverables in an interactive expandable timeline.
          </p>
        </div>

        {/* Expand All / Collapse All Button */}
        <button
          onClick={toggleExpandAll}
          className="self-start sm:self-center inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-vscode-hover hover:bg-vscode-active border border-vscode-border hover:border-vscode-accent/50 text-xs font-medium text-vscode-text transition-all shadow-sm"
          title={areAllExpanded ? "Collapse all experience cards" : "Expand all experience cards"}
        >
          {areAllExpanded ? (
            <>
              <VscFold className="text-vscode-accent" size={14} />
              <span>Collapse All</span>
            </>
          ) : (
            <>
              <VscUnfold className="text-vscode-accent" size={14} />
              <span>Expand All</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Timeline Container */}
      <div ref={timelineRef} className="relative pl-6 md:pl-10 space-y-8">
        {/* Continuous Background Track */}
        <div className="absolute left-2.5 md:left-4 top-4 bottom-4 w-0.5 bg-vscode-border/50 rounded-full" />

        {/* Animated Progress Line Driven by User Scroll */}
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
          className="absolute left-2.5 md:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.7)] z-0 will-change-transform"
        />

        {experience.map((exp, index) => {
          const colors = getCompanyColor(exp.id);
          const isExpanded = !!expandedIds[exp.id];
          const techList = exp.technologies || [];
          const deliverablesList = exp.deliverables || [];

          return (
            <motion.div
              key={exp.id}
              data-framer-motion="true"
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Dot Marker */}
              <div 
                className={`absolute -left-[27px] md:-left-[39px] top-5 w-4 h-4 md:w-5 md:h-5 rounded-full ${colors.dot} flex items-center justify-center transition-transform duration-300 group-hover:scale-125 z-10`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </div>

              {/* Card Container with 3D Tilt */}
              <CardTilt3D maxTilt={4} className="w-full">
                <div 
                  className={`relative rounded-xl bg-vscode-bg/90 backdrop-blur-md border ${colors.border} transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl`}
                >
                  {/* Subtle top background glow */}
                  <div className={`absolute top-0 inset-x-0 h-28 bg-gradient-to-b ${colors.glow} pointer-events-none`} />

                  {/* Card Header (Always Visible & Clickable) */}
                  <div 
                    onClick={() => toggleExpand(exp.id)}
                    className="relative p-4 md:p-6 cursor-pointer select-none"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                            {exp.type || 'Commercial'}
                          </span>
                          <span className="text-xs text-vscode-text/60 font-mono">
                            #0{index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-vscode-text group-hover:text-vscode-accent transition-colors">
                          {exp.position}
                        </h3>
                      </div>

                      {/* Expand / Collapse Indicator Pill */}
                      <div className="flex items-center gap-2 self-start md:self-auto">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-vscode-hover hover:bg-vscode-border/60 text-vscode-text/90 border border-vscode-border transition-colors"
                        >
                          <span>{isExpanded ? 'Hide Details' : 'View Deliverables & Tech'}</span>
                          {isExpanded ? (
                            <VscChevronUp size={14} className={colors.accent} />
                          ) : (
                            <VscChevronDown size={14} className={colors.accent} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Meta Bar: Company, Location, Duration */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-5 text-xs text-vscode-text/75 font-mono mb-3">
                      <div className="flex items-center gap-1.5">
                        <VscBriefcase size={14} className={colors.accent} />
                        <span className="font-semibold text-vscode-text">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <VscCalendar size={14} className="text-blue-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <VscLocation size={14} className="text-emerald-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Brief Role Description */}
                    <p className="text-xs md:text-sm text-vscode-text/80 leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    {/* Collapsed Preview Badges */}
                    {!isExpanded && (
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-vscode-border/40 text-[11px] font-mono text-vscode-text/60">
                        <span className="text-vscode-accent font-medium">
                          ⚡ {deliverablesList.length} Key Deliverables
                        </span>
                        <span>•</span>
                        <span>
                          🛠️ {techList.slice(0, 4).join(', ')}{techList.length > 4 ? ` +${techList.length - 4} more` : ''}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Expandable Deep-Dive Section */}
                  {isExpanded && (
                    <div className="px-4 md:px-6 pb-6 pt-2 border-t border-vscode-border/50 bg-black/20 space-y-5 animate-fadeIn">
                      {/* Key Deliverables & Milestones */}
                      {deliverablesList.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <VscRocket className={colors.accent} size={15} />
                            <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-vscode-text">
                              Key Deliverables & Verified Milestones
                            </h4>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {deliverablesList.map((item, dIdx) => (
                              <div 
                                key={dIdx}
                                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-vscode-bg/80 border border-vscode-border/60 hover:border-vscode-accent/40 transition-colors"
                              >
                                <VscPass className="text-emerald-400 flex-shrink-0 mt-0.5" size={14} />
                                <span className="text-xs text-vscode-text/90 font-mono leading-relaxed">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Core Responsibilities */}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div>
                          <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-vscode-text/90 mb-2.5 flex items-center gap-2">
                            <span>🎯</span> Core Responsibilities
                          </h4>
                          <div className="space-y-1.5">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <div 
                                key={rIdx}
                                className="flex items-start gap-2 text-xs md:text-sm text-vscode-text/80 p-2 rounded hover:bg-vscode-hover/50 transition-colors"
                              >
                                <span className={`${colors.accent} flex-shrink-0 mt-0.5 font-bold`}>›</span>
                                <span>{resp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies Used */}
                      {techList.length > 0 && (
                        <div className="pt-2">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-vscode-text/70 mb-2 flex items-center gap-1.5">
                            <span>⚙️</span> Technologies & Tooling
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {techList.map((tech, tIdx) => (
                              <span 
                                key={tIdx}
                                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-vscode-hover text-vscode-text/90 border border-vscode-border hover:border-vscode-accent/50 hover:text-vscode-accent transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardTilt3D>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceJourneyTimeline;
