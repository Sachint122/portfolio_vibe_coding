import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { VscGithub, VscLinkExternal, VscCheck } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';

const ProjectsSection = ({ projectId }) => {
  const { openTab } = usePortfolioStore();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // If projectId is provided, show single project
  if (projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    
    if (!project) {
      return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-red-500 mb-3 md:mb-4">⚠️ Project Not Found</p>
            <p className="text-vscode-text text-sm md:text-base">Project with ID "{projectId}" does not exist.</p>
            <p className="text-vscode-text/60 mt-2 text-xs md:text-sm">Available project IDs: {portfolioData.projects.map(p => p.id).join(', ')}</p>
          </div>
        </div>
      );
    }

    const imageList = project.images && project.images.length > 0
      ? project.images
      : (project.image ? [project.image] : []);
    const activeImage = imageList[activeImageIndex] || imageList[0] || null;
    
    return (
      <div className="p-4 md:p-8 max-w-5xl mx-auto">
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
        
        {/* Project Image Gallery Banner */}
        <div className="mb-6 md:mb-8">
          <div className="max-h-[460px] rounded-lg overflow-hidden border border-vscode-border bg-vscode-hover flex items-center justify-center shadow-2xl relative group">
            {activeImage ? (
              <img
                src={activeImage}
                alt={`${project.title} preview ${activeImageIndex + 1}`}
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
  
  // Show all projects if no projectId
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-vscode-accent mb-2 md:mb-3">My Projects</h1>
        <p className="text-vscode-text text-sm md:text-lg">
          Explore my portfolio of web applications built with the Node.js stack
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {portfolioData.projects && portfolioData.projects.length > 0 ? (
          portfolioData.projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-vscode-hover border border-vscode-border rounded-lg overflow-hidden hover:border-vscode-accent transition-all hover:shadow-lg"
            >
              {/* Project Image */}
              <div
                className="h-44 md:h-52 relative overflow-hidden bg-gradient-to-br from-vscode-accent/20 to-blue-600/20 flex items-center justify-center border-b border-vscode-border cursor-pointer group"
                onClick={() => openTab({
                  id: `project-${proj.id}`,
                  name: `${proj.id}.jsx`,
                  type: 'project',
                  projectId: proj.id
                })}
              >
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform">
                    {proj.featured ? '⭐' : '🚀'}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1 bg-vscode-accent text-white text-xs font-medium rounded-full shadow-lg">
                    View Details
                  </span>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-bold text-vscode-text mb-2">{proj.title}</h3>
                <p className="text-vscode-text/70 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">
                  {proj.description || 'No description available'}
                </p>
                
                {/* Tech Stack */}
                {proj.techStack && proj.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {proj.techStack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 md:py-1 bg-vscode-accent/10 text-vscode-accent text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.techStack.length > 3 && (
                      <span className="px-2 py-0.5 md:py-1 bg-vscode-accent/10 text-vscode-accent text-xs rounded">
                        +{proj.techStack.length - 3}
                      </span>
                    )}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => openTab({
                      id: `project-${proj.id}`,
                      name: `${proj.id}.jsx`,
                      type: 'project',
                      projectId: proj.id
                    })}
                    className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 px-2 md:px-3 py-2 bg-vscode-bg border border-vscode-border rounded hover:border-vscode-accent transition-colors text-xs md:text-sm text-vscode-text font-medium"
                  >
                    Details
                  </button>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 px-2 md:px-3 py-2 bg-vscode-bg border border-vscode-border rounded hover:border-vscode-accent transition-colors text-xs md:text-sm"
                    >
                      <VscGithub size={14} />
                      Code
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 px-2 md:px-3 py-2 bg-vscode-accent text-white rounded hover:opacity-90 transition-opacity text-xs md:text-sm"
                    >
                      <VscLinkExternal size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-vscode-text text-base md:text-lg">No projects available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
