import React, { useState } from 'react';
import { 
  VscZoomIn, 
  VscZoomOut, 
  VscDesktopDownload, 
  VscEye, 
  VscLinkExternal, 
  VscRefresh, 
  VscFilePdf,
  VscCheck
} from 'react-icons/vsc';

const InteractiveResumeViewer = ({ 
  resumes = [], 
  initialResumeId, 
  about = {}, 
  experience = [], 
  education = [],
  projects = []
}) => {
  const [selectedId, setSelectedId] = useState(
    initialResumeId || (resumes[0] && resumes[0].id) || 'resume-fullstack'
  );
  const [zoom, setZoom] = useState(1.0);
  const [viewMode, setViewMode] = useState('doc'); // 'doc' | 'drive'

  const activeResume = resumes.find(r => r.id === selectedId) || resumes[0] || {};

  const handleZoomIn = () => {
    setZoom(prev => Math.min(1.5, Math.round((prev + 0.15) * 100) / 100));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(0.6, Math.round((prev - 0.15) * 100) / 100));
  };

  const handleResetZoom = () => {
    setZoom(1.0);
  };

  const getDownloadLink = (driveId) => {
    return `https://drive.google.com/uc?export=download&id=${driveId}`;
  };

  const getPreviewLink = (driveId) => {
    return `https://drive.google.com/file/d/${driveId}/preview`;
  };

  const getViewLink = (driveId) => {
    return `https://drive.google.com/file/d/${driveId}/view`;
  };

  // Get targeted projects for this variant
  const targetedProjectIds = activeResume.featuredProjects || [];
  const variantProjects = projects.filter(p => targetedProjectIds.includes(p.id));

  return (
    <div className="space-y-8">
      {/* Feature 16: Resume Variant Selector */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                16. Resume Variant Selector
              </span>
              <span className="text-xs text-vscode-text/60 font-mono">
                Tailored Career Profiles
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-vscode-text">
              Targeted Role Variants
            </h2>
          </div>
          <span className="text-xs font-mono text-vscode-text/70 self-start sm:self-auto">
            Switch profile to view tailored experience & skills
          </span>
        </div>

        {/* 3 Variant Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {resumes.map((variant) => {
            const isSelected = variant.id === selectedId;
            return (
              <button
                key={variant.id}
                type="button"
                onClick={() => setSelectedId(variant.id)}
                className={`text-left p-4 rounded-xl border transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-vscode-hover border-vscode-accent shadow-lg shadow-vscode-accent/10 ring-1 ring-vscode-accent'
                    : 'bg-vscode-bg hover:bg-vscode-hover/70 border-vscode-border hover:border-vscode-border/80'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-vscode-accent/20 to-transparent pointer-events-none" />
                )}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-2xl">{variant.icon}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    isSelected 
                      ? 'bg-vscode-accent/20 text-vscode-accent border-vscode-accent/40 font-bold'
                      : 'bg-vscode-hover text-vscode-text/60 border-vscode-border'
                  }`}>
                    {variant.badge}
                  </span>
                </div>
                <h3 className={`text-base font-bold transition-colors ${
                  isSelected ? 'text-vscode-accent' : 'text-vscode-text group-hover:text-vscode-accent'
                }`}>
                  {variant.title}
                </h3>
                <p className="text-xs text-vscode-text/70 mt-1 line-clamp-2 leading-relaxed">
                  {variant.description}
                </p>
                
                {/* Active check indicator */}
                <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-vscode-border/50 text-[11px] font-mono">
                  {isSelected ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <VscCheck size={13} /> Active Variant Previewed
                    </span>
                  ) : (
                    <span className="text-vscode-text/50 group-hover:text-vscode-text/80">
                      Click to switch variant →
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feature 15: Interactive Resume Preview with Zoom & Controls */}
      <div className="rounded-xl border border-vscode-border bg-vscode-bg/90 backdrop-blur-md overflow-hidden shadow-2xl">
        {/* Preview Control Toolbar */}
        <div className="p-3 md:p-4 bg-vscode-sidebar/90 border-b border-vscode-border flex flex-wrap items-center justify-between gap-3">
          {/* Left: Active Variant Label & Format */}
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-vscode-accent/10 text-vscode-accent border border-vscode-accent/30 flex items-center gap-1.5">
              <VscFilePdf size={14} />
              <span>15. Interactive Preview: {activeResume.title}</span>
            </span>

            {/* Mode Switcher */}
            <div className="hidden sm:inline-flex rounded-lg p-0.5 bg-vscode-bg border border-vscode-border text-xs font-mono">
              <button
                type="button"
                onClick={() => setViewMode('doc')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  viewMode === 'doc'
                    ? 'bg-vscode-accent text-white font-bold'
                    : 'text-vscode-text/70 hover:text-vscode-text'
                }`}
              >
                📄 Interactive Doc
              </button>
              <button
                type="button"
                onClick={() => setViewMode('drive')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  viewMode === 'drive'
                    ? 'bg-vscode-accent text-white font-bold'
                    : 'text-vscode-text/70 hover:text-vscode-text'
                }`}
              >
                🌐 Drive PDF
              </button>
            </div>
          </div>

          {/* Right: Zoom Controls & Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Zoom Controls (only active in doc view) */}
            {viewMode === 'doc' && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-vscode-bg border border-vscode-border text-xs font-mono">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.6}
                  className="p-1 text-vscode-text hover:text-vscode-accent disabled:opacity-30 disabled:hover:text-vscode-text transition-colors"
                  title="Zoom Out (-15%)"
                  aria-label="Zoom Out"
                >
                  <VscZoomOut size={15} />
                </button>
                <span className="w-12 text-center font-bold text-vscode-text">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoom >= 1.5}
                  className="p-1 text-vscode-text hover:text-vscode-accent disabled:opacity-30 disabled:hover:text-vscode-text transition-colors"
                  title="Zoom In (+15%)"
                  aria-label="Zoom In"
                >
                  <VscZoomIn size={15} />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="ml-1 pl-1 border-l border-vscode-border text-vscode-text/60 hover:text-vscode-accent transition-colors"
                  title="Reset Zoom to 100%"
                >
                  <VscRefresh size={13} />
                </button>
              </div>
            )}

            {/* View Full / External Link */}
            <a
              href={getViewLink(activeResume.driveId)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-vscode-hover hover:bg-vscode-active border border-vscode-border text-xs font-mono text-vscode-text transition-all"
              title="Open full PDF in Google Drive tab"
            >
              <VscEye size={14} />
              <span className="hidden sm:inline">Drive View</span>
              <VscLinkExternal size={11} className="text-vscode-text/60" />
            </a>

            {/* Direct Download Button */}
            <a
              href={getDownloadLink(activeResume.driveId)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-vscode-accent hover:bg-blue-600 text-white text-xs font-mono font-bold transition-all shadow-md shadow-vscode-accent/20"
              title={`Download ${activeResume.title} PDF`}
            >
              <VscDesktopDownload size={15} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Preview Content Area */}
        <div className="p-4 md:p-8 bg-vscode-header/50 min-h-[600px] flex items-center justify-center overflow-x-auto">
          {viewMode === 'drive' ? (
            /* Google Drive PDF Iframe View */
            <div className="w-full max-w-4xl aspect-[8.5/11] min-h-[680px] bg-white rounded-lg overflow-hidden shadow-2xl border border-vscode-border">
              <iframe
                src={getPreviewLink(activeResume.driveId)}
                className="w-full h-full"
                title={`${activeResume.title} Preview`}
                frameBorder="0"
              />
            </div>
          ) : (
            /* Interactive Scaled Resume Document Canvas */
            <div className="w-full overflow-x-auto flex justify-center py-4">
              <div 
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
                className="w-[800px] flex-shrink-0 bg-white text-gray-900 rounded-lg shadow-2xl p-8 md:p-10 font-sans border border-gray-300 select-text"
              >
                {/* Document Header */}
                <div className="border-b-2 border-blue-600 pb-4 mb-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
                        {about.name || 'Sachin Tiwari'}
                      </h1>
                      <div className="text-sm font-semibold text-blue-600 mt-0.5 uppercase tracking-wide">
                        {activeResume.targetRole || activeResume.title}
                      </div>
                    </div>
                    <div className="text-right text-[11px] text-gray-600 space-y-0.5 font-mono">
                      <div>📧 {about.email}</div>
                      <div>📱 {about.phone}</div>
                      <div>📍 {about.location}</div>
                    </div>
                  </div>

                  {/* Links Bar */}
                  <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-600 font-mono mt-3 pt-2 border-t border-gray-200">
                    <span className="font-semibold text-blue-600">LinkedIn:</span> linkedin.com/in/sachin-tiwari-javafullstack
                    <span>•</span>
                    <span className="font-semibold text-blue-600">GitHub:</span> github.com/Sachint122
                  </div>
                </div>

                {/* Document Body */}
                <div className="space-y-5 text-left text-xs leading-relaxed text-gray-800">
                  {/* Tailored Professional Summary */}
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2">
                      Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-normal">
                      {activeResume.description}
                    </p>
                  </div>

                  {/* Tailored Core Competencies & Skills */}
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2">
                      Technical Skills & Core Competencies
                    </h2>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {activeResume.coreCompetencies && activeResume.coreCompetencies.map((comp, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-1.5 text-[11px] text-gray-700">
                          <span className="text-blue-600 font-bold">›</span>
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {activeResume.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-800 border border-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2.5">
                      Professional Work Experience
                    </h2>
                    <div className="space-y-3.5">
                      {experience.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex items-baseline justify-between text-xs">
                            <span className="font-bold text-gray-900">
                              {exp.position} <span className="text-blue-600 font-semibold">— {exp.company}</span>
                            </span>
                            <span className="text-[11px] font-mono text-gray-500">
                              {exp.duration} | {exp.location}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-600 mt-0.5 mb-1.5">
                            {exp.description}
                          </p>
                          {exp.deliverables && (
                            <ul className="list-disc list-inside text-[11px] text-gray-700 space-y-0.5 ml-1">
                              {exp.deliverables.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="leading-snug">{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Projects tailored for this variant */}
                  {variantProjects.length > 0 && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-2">
                        Key Targeted Projects
                      </h2>
                      <div className="grid grid-cols-1 gap-2">
                        {variantProjects.map((proj) => (
                          <div key={proj.id} className="text-[11px]">
                            <div className="flex items-center justify-between font-bold text-gray-900">
                              <span>{proj.title}</span>
                              <span className="font-mono text-[10px] text-blue-600">
                                {proj.techStack ? proj.techStack.slice(0, 3).join(', ') : ''}
                              </span>
                            </div>
                            <p className="text-gray-600 text-[10px] line-clamp-1 mt-0.5">
                              {proj.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Education Credentials */}
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-blue-800 border-b border-gray-300 pb-1 mb-1.5">
                      Education & Certifications
                    </h2>
                    <div className="space-y-1">
                      {education.map((edu, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px]">
                          <div>
                            <span className="font-bold text-gray-900">{edu.degree}</span>
                            <span className="text-gray-600"> — {edu.institution}</span>
                          </div>
                          <span className="font-mono text-gray-500">
                            {edu.year} (Grade: {edu.grade})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveResumeViewer;
