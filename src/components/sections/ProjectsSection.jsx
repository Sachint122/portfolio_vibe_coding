import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { VscGithub, VscLinkExternal, VscCheck, VscLayers, VscRocket, VscDeviceMobile } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import CardTilt3D from '../3d/CardTilt3D';
import ERPSystemShowcase from '../features/ERPSystemShowcase';
import ResponsiveWebsitePreview from '../features/ResponsiveWebsitePreview';

const PROJECT_ALIASES = {
  'erp-system': 'dindia-erp-system',
  'dindia-erp': 'dindia-erp-system',
  'erp': 'dindia-erp-system',
  'send-mail': 'send-mail-app',
  'mail-app': 'send-mail-app',
  'library-mgmt': 'library-management',
  'library': 'library-management',
  'dti': 'dti-website',
  'destination-technologies': 'dti-website',
  'infratech': 'dindia-infratech',
  'dindia-infratech-website': 'dindia-infratech',
  'dindia-corporate': 'dindia-website',
  'home-automation-app': 'home-automation',
  'pasovit': 'pasovit-task-manager',
  'youtube': 'youtube-downloader'
};

const PROJECT_FILE_MAP = {
  'dindia-erp-system': { tabId: 'project-dindia-erp-system', name: 'dindia-erp-system.jsx' },
  'dindia-infratech': { tabId: 'project-dindia-infratech', name: 'dindia-infratech.jsx' },
  'dindia-website': { tabId: 'project-dindia-website', name: 'dindia-website.jsx' },
  'send-mail-app': { tabId: 'project-send-mail', name: 'send-mail-app.js' },
  'dti-website': { tabId: 'project-dti', name: 'destination-technologies.jsx' },
  'home-automation': { tabId: 'project-home-automation', name: 'home-automation.java' },
  'library-management': { tabId: 'project-library', name: 'library-management.ts' },
  'car-rental-website': { tabId: 'project-car-rental', name: 'car-rental-website.html' },
  'pasovit-task-manager': { tabId: 'project-pasovit', name: 'pasovit-task-manager.js' },
  'youtube-downloader': { tabId: 'project-youtube', name: 'youtube-downloader.js' }
};

const FILTER_TABS = [
  { id: 'all', label: 'All Projects', icon: '🚀' },
  { id: 'featured', label: 'Featured Enterprise', icon: '⭐' },
  { id: 'fullstack', label: 'Full Stack MERN', icon: '⚡' },
  { id: 'frontend', label: 'Frontend & UI', icon: '⚛️' },
  { id: 'other', label: 'Android & Systems', icon: '🛠️' },
];

const ProjectsSection = ({ projectId }) => {
  const { openTab } = usePortfolioStore();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeViewMode, setActiveViewMode] = useState('cards'); // 'cards' | 'responsive'

  // CASE 1: Single Project Detailed View
  if (projectId) {
    const resolvedId = PROJECT_ALIASES[projectId] || projectId;
    const project = portfolioData.projects.find(p => p.id === resolvedId || p.id === projectId);
    
    if (!project) {
      return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-red-500 mb-3 md:mb-4">⚠️ Project Not Found</p>
            <p className="text-vscode-text text-sm md:text-base">Project with ID "{projectId}" does not exist.</p>
            <p className="text-vscode-text/60 mt-2 text-xs md:text-sm">Available project IDs: {portfolioData.projects.map(p => p.id).join(', ')}</p>
            <button
              onClick={() => openTab({ id: 'all-projects', name: 'Projects', type: 'all-projects' })}
              className="mt-4 px-4 py-2 bg-vscode-accent text-white rounded-lg text-sm font-medium hover:bg-vscode-accent/80 transition-all"
            >
              Browse All Projects
            </button>
          </div>
        </div>
      );
    }

    const fileInfo = PROJECT_FILE_MAP[resolvedId] || { tabId: `project-${resolvedId}`, name: `${resolvedId}.jsx` };

    // SUB-CASE 1A: ERP System Detailed Showcase (Feature 11) - Zero Duplication
    if (resolvedId === 'dindia-erp-system') {
      return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={() => openTab({ id: 'all-projects', name: 'Projects', type: 'all-projects' })}
              className="text-xs font-mono text-vscode-accent hover:underline flex items-center gap-1"
            >
              <span>← Back to All Projects</span>
            </button>
            <span className="text-[11px] font-mono text-vscode-text/50">
              {fileInfo.name}
            </span>
          </div>
          <ERPSystemShowcase />
        </div>
      );
    }

    // SUB-CASE 1B: Responsive Websites Detailed View (Feature 12) - Zero Duplication
    if (resolvedId === 'dindia-website' || resolvedId === 'dindia-infratech') {
      return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={() => openTab({ id: 'all-projects', name: 'Projects', type: 'all-projects' })}
              className="text-xs font-mono text-vscode-accent hover:underline flex items-center gap-1"
            >
              <span>← Back to All Projects</span>
            </button>
            <span className="text-[11px] font-mono text-vscode-text/50">
              {fileInfo.name}
            </span>
          </div>
          <ResponsiveWebsitePreview initialSiteId={resolvedId} showSiteSwitcher={true} />
        </div>
      );
    }

    // SUB-CASE 1C: Standard Project Detailed View (Destination Technologies, SendMail, etc.)
    const imageList = project.images && project.images.length > 0
      ? project.images
      : (project.image ? [project.image] : []);
    const activeImage = imageList[activeImageIndex] || imageList[0] || null;
    
    return (
      <div className="p-4 md:p-8 max-w-5xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() => openTab({ id: 'all-projects', name: 'Projects', type: 'all-projects' })}
            className="text-xs font-mono text-vscode-accent hover:underline flex items-center gap-1"
          >
            <span>← Back to All Projects</span>
          </button>
          <span className="text-[11px] font-mono text-vscode-text/50">
            {fileInfo.name}
          </span>
        </div>

        {/* Project Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            {project.featured && <span className="text-xl md:text-2xl">⭐</span>}
            <h1 className="text-2xl md:text-4xl font-bold text-vscode-accent">{project.title}</h1>
          </div>
          <p className="text-vscode-text text-sm md:text-lg leading-relaxed">
            {project.description || 'No description available'}
          </p>
        </div>
        
        {/* Project Image Gallery Banner with 3D Tilt */}
        <div className="mb-6 md:mb-8">
          <CardTilt3D maxTilt={5}>
            <div className="max-h-[460px] rounded-xl overflow-hidden border border-vscode-border bg-vscode-hover flex items-center justify-center shadow-2xl relative group">
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={`${project.title} preview ${activeImageIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[460px] object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                />
              ) : (
                <div className="h-48 md:h-64 w-full bg-gradient-to-br from-vscode-accent/20 to-blue-600/20 flex items-center justify-center text-6xl md:text-8xl">
                  🚀
                </div>
              )}
              {imageList.length > 1 && (
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20 shadow-lg">
                  📷 {activeImageIndex + 1} / {imageList.length}
                </div>
              )}
            </div>
          </CardTilt3D>

          {/* Interactive Thumbnails for multiple images */}
          {imageList.length > 1 && (
            <div className="flex gap-2 md:gap-3 mt-3 overflow-x-auto pb-2">
              {imageList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === activeImageIndex
                      ? 'border-vscode-accent ring-2 ring-vscode-accent/50 scale-105'
                      : 'border-vscode-border opacity-70 hover:opacity-100 hover:border-vscode-accent/40'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="bg-vscode-hover border border-vscode-border rounded-lg p-4 md:p-6 mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-vscode-accent mb-3 md:mb-4 flex items-center gap-2">
              <span>💻</span>
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-vscode-bg border border-vscode-accent/30 rounded-lg text-vscode-text text-xs md:text-base font-medium hover:border-vscode-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="bg-vscode-hover border border-vscode-border rounded-lg p-4 md:p-6 mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-vscode-accent mb-3 md:mb-4 flex items-center gap-2">
              <span>✨</span>
              Key Features
            </h3>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-vscode-bg rounded-lg hover:border hover:border-vscode-accent transition-all">
                  <VscCheck size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-vscode-text text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        {project.category && (
          <div className="mb-4 md:mb-6">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-vscode-accent/10 border border-vscode-accent text-vscode-accent rounded-full text-xs md:text-sm font-medium">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project
            </span>
          </div>
        )}
        
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-vscode-hover border border-vscode-border rounded-lg hover:border-vscode-accent transition-all text-base md:text-lg font-medium"
            >
              <VscGithub size={20} />
              <span>View Source Code</span>
            </a>
          )}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-vscode-accent text-white rounded-lg hover:opacity-90 transition-opacity text-base md:text-lg font-medium shadow-lg"
            >
              <VscLinkExternal size={20} />
              <span>Live Demo</span>
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-vscode-hover border border-vscode-border rounded-lg opacity-50 cursor-not-allowed text-base md:text-lg font-medium">
              <VscLinkExternal size={20} />
              <span>Demo Not Available</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // CASE 2: All Projects Overview Page - Clean, Non-Duplicated
  const allProjects = portfolioData.projects || [];
  
  const filteredProjects = allProjects.filter(p => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'featured') return p.featured;
    if (selectedFilter === 'fullstack') return p.category === 'fullstack';
    if (selectedFilter === 'frontend') return p.category === 'frontend';
    if (selectedFilter === 'other') return p.category === 'android' || p.category === 'other' || !p.category;
    return true;
  });

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      {/* Header & View Mode Switcher */}
      <div className="mb-6 md:mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-vscode-border/60">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-vscode-accent/10 border border-vscode-accent/30 rounded-full mb-2">
            <VscRocket className="text-vscode-accent" size={13} />
            <span className="text-vscode-accent text-xs font-mono font-medium">Production Portfolio</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-vscode-text">
            My Projects
          </h1>
          <p className="text-vscode-text/70 text-sm md:text-base mt-1">
            Enterprise systems, responsive client portals, and full-stack software built with the MERN stack
          </p>
        </div>

        {/* View Mode Switcher: 3D Cards Grid vs Multi-Device Responsive */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex rounded-lg bg-vscode-hover p-1 border border-vscode-border">
            <button
              onClick={() => setActiveViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                activeViewMode === 'cards'
                  ? 'bg-vscode-accent text-white shadow-md font-semibold'
                  : 'text-vscode-text/70 hover:text-vscode-text'
              }`}
            >
              <VscLayers size={13} />
              <span>3D Project Cards</span>
            </button>
            <button
              onClick={() => setActiveViewMode('responsive')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                activeViewMode === 'responsive'
                  ? 'bg-vscode-accent text-white shadow-md font-semibold'
                  : 'text-vscode-text/70 hover:text-vscode-text'
              }`}
            >
              <VscDeviceMobile size={13} />
              <span>Responsive Showcase</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: Responsive Showcase (Feature 12) */}
      {activeViewMode === 'responsive' && (
        <div>
          <ResponsiveWebsitePreview showSiteSwitcher={true} />
        </div>
      )}

      {/* VIEW MODE 2: 3D Project Cards Grid (Feature 10) */}
      {activeViewMode === 'cards' && (
        <div>
          {/* Category Filters Bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {FILTER_TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedFilter === tab.id
                      ? 'bg-vscode-accent text-white shadow-md font-semibold'
                      : 'bg-vscode-hover hover:bg-vscode-bg border border-vscode-border text-vscode-text/70 hover:text-vscode-text'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-vscode-text/50">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </span>
          </div>

          {/* 3D Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((proj, index) => {
                const fileInfo = PROJECT_FILE_MAP[proj.id] || { tabId: `project-${proj.id}`, name: `${proj.id}.jsx` };

                return (
                  <motion.div
                    key={proj.id}
                    data-framer-motion="true"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min((index % 6) * 0.05, 0.25),
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="h-full"
                  >
                    <CardTilt3D maxTilt={6} className="h-full">
                      <div className="h-full flex flex-col justify-between rounded-xl overflow-hidden border border-vscode-border bg-gradient-to-b from-vscode-sidebar/95 via-vscode-bg to-vscode-sidebar/95 hover:border-vscode-accent/70 transition-all hover:shadow-2xl relative group">
                        {/* Subtle Glare Line on Hover */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Card Image Area with Zoom & Badges */}
                        <div
                          className="h-44 md:h-52 relative overflow-hidden bg-vscode-hover border-b border-vscode-border/70 cursor-pointer"
                          onClick={() => openTab({
                            id: fileInfo.tabId,
                            name: fileInfo.name,
                            type: 'project',
                            projectId: proj.id
                          })}
                        >
                          {proj.image ? (
                            <img
                              src={proj.image}
                              alt={proj.title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-br from-vscode-accent/15 to-blue-600/15 flex items-center justify-center text-5xl">
                              {proj.featured ? '⭐' : '🚀'}
                            </div>
                          )}

                          {/* Gradient Overlay & Glare on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                          {/* Badges on Image */}
                          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                            {proj.featured ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/90 text-black shadow-md flex items-center gap-1">
                                ⭐ Featured
                              </span>
                            ) : <span />}

                            {proj.live && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/90 text-black shadow-md flex items-center gap-1">
                                🟢 Live Site
                              </span>
                            )}
                          </div>

                          {/* Hover Inspect CTA */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="px-3.5 py-1.5 bg-vscode-accent text-white text-xs font-mono font-bold rounded-lg shadow-xl border border-white/20 transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                              Inspect {fileInfo.name}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-base md:text-lg font-bold text-vscode-text group-hover:text-vscode-accent transition-colors mb-1.5">
                              {proj.title}
                            </h4>
                            <p className="text-vscode-text/70 text-xs leading-relaxed line-clamp-3 mb-3">
                              {proj.description || 'Full-stack application engineered with scalable architecture.'}
                            </p>

                            {/* Tech Stack Pills */}
                            {proj.techStack && proj.techStack.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-4">
                                {proj.techStack.slice(0, 3).map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-vscode-hover border border-vscode-border text-vscode-text/80"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {proj.techStack.length > 3 && (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-vscode-accent/15 text-vscode-accent border border-vscode-accent/30 font-bold">
                                    +{proj.techStack.length - 3}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Action Links Toolbar */}
                          <div className="pt-3 border-t border-vscode-border/50 flex items-center gap-2">
                            <button
                              onClick={() => openTab({
                                id: fileInfo.tabId,
                                name: fileInfo.name,
                                type: 'project',
                                projectId: proj.id
                              })}
                              className="flex-1 py-1.5 px-2 bg-vscode-hover hover:bg-vscode-bg border border-vscode-border rounded-lg text-xs font-mono text-vscode-text hover:text-vscode-accent hover:border-vscode-accent/50 transition-all text-center"
                            >
                              Details
                            </button>

                            {proj.github && (
                              <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-1.5 px-2 bg-vscode-hover hover:bg-vscode-bg border border-vscode-border rounded-lg text-xs font-mono text-vscode-text hover:text-white hover:border-vscode-accent/50 transition-all flex items-center justify-center gap-1"
                              >
                                <VscGithub size={13} />
                                <span>Code</span>
                              </a>
                            )}

                            {proj.live && (
                              <a
                                href={proj.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-1.5 px-2 bg-vscode-accent hover:bg-vscode-accent/90 text-white rounded-lg text-xs font-mono font-semibold shadow transition-all flex items-center justify-center gap-1 active:scale-95"
                              >
                                <VscLinkExternal size={12} />
                                <span>Live</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardTilt3D>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-vscode-text text-base">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProjectsSection);
