import React, { useState } from 'react';
import { VscDesktopDownload, VscFilePdf, VscEye, VscArrowLeft, VscRocket } from 'react-icons/vsc';
import { portfolioData } from '../../data/portfolioData';
import usePortfolioStore from '../../store/portfolioStore';

const ResumeSection = ({ resumeId }) => {
  const { about, resumes } = portfolioData;
  const { openTab } = usePortfolioStore();
  const [showPreview, setShowPreview] = useState(false);
  
  const getDownloadLink = (fileId) => {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  };
  
  const getPreviewLink = (fileId) => {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };
  
  const getViewLink = (fileId) => {
    return `https://drive.google.com/file/d/${fileId}/view`;
  };
  
  const getColorClass = (color) => {
    const colorMap = {
      blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', gradient: 'from-blue-600 to-cyan-600' },
      cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', gradient: 'from-cyan-600 to-blue-600' },
      green: { text: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30', gradient: 'from-green-600 to-emerald-600' },
      purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', gradient: 'from-purple-600 to-pink-600' },
      red: { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', gradient: 'from-red-600 to-orange-600' },
      yellow: { text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', gradient: 'from-yellow-600 to-orange-600' },
    };
    return colorMap[color] || colorMap.blue;
  };
  
  // Single Resume Detail View
  if (resumeId) {
    const resume = resumes.find(r => r.id === resumeId);
    
    if (!resume) {
      return (
        <div className="p-8 max-w-5xl mx-auto text-center">
          <p className="text-red-500 text-xl mb-4">Resume not found</p>
          <button
            onClick={() => openTab({ id: 'all-resumes', name: 'Resumes', type: 'all-resumes' })}
            className="px-6 py-2 bg-vscode-accent text-white rounded-lg hover:opacity-90"
          >
            View All Resumes
          </button>
        </div>
      );
    }
    
    const colors = getColorClass(resume.color);
    
    const handleDownload = () => {
      window.open(getDownloadLink(resume.driveId), '_blank');
    };
    
    const handleView = () => {
      window.open(getViewLink(resume.driveId), '_blank');
    };
    
    return (
      <div className="p-8 max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => openTab({ id: 'all-resumes', name: 'Resumes', type: 'all-resumes' })}
          className="flex items-center gap-2 mb-8 text-vscode-accent hover:underline group"
        >
          <VscArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Resumes</span>
        </button>
        
        {/* Resume Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} blur-2xl opacity-20 rounded-full`}></div>
              <div className="relative text-8xl">{resume.icon}</div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
              {resume.title}
            </span>
          </h1>
          <p className="text-vscode-text/70 text-lg max-w-2xl mx-auto">{resume.description}</p>
          {resume.featured && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full text-sm font-medium">
              <span>⭐</span>
              <span>Featured Resume</span>
            </div>
          )}
        </div>
        
        {/* Resume Info Card */}
        <div className="relative group mb-8">
          <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500`}></div>
          <div className="relative bg-vscode-hover border border-vscode-border rounded-lg p-8 max-w-4xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {resume.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${colors.bg} ${colors.border} ${colors.text} border`}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Info */}
            <div className="flex items-center justify-center gap-6 mb-8 text-sm text-vscode-text/60">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>Last Updated: {new Date(resume.lastUpdated).toLocaleDateString()}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span>📄</span>
                <span>PDF Format</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={handleView}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-vscode-accent to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition"></div>
                <div className="relative flex items-center justify-center gap-3 px-6 py-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all text-lg font-medium">
                  <VscEye size={24} className="group-hover:scale-110 transition-transform" />
                  <span>Preview Online</span>
                </div>
              </button>
              
              <button
                onClick={handleDownload}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-lg blur opacity-25 group-hover:opacity-50 transition`}></div>
                <div className={`relative flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${colors.gradient} text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-medium shadow-lg`}>
                  <VscDesktopDownload size={24} className="group-hover:scale-110 transition-transform" />
                  <span>Download PDF</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Preview Toggle */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`inline-flex items-center gap-2 px-6 py-3 ${colors.bg} ${colors.border} ${colors.text} border rounded-lg hover:opacity-80 transition-all font-medium`}
          >
            <span>{showPreview ? '▼' : '▶'}</span>
            <span>{showPreview ? 'Hide Preview' : 'Show Preview'}</span>
          </button>
        </div>
        
        {/* Embedded Preview */}
        {showPreview && (
          <div className="bg-vscode-hover border border-vscode-border rounded-lg p-6 animate-slideDown">
            <div className="aspect-[8.5/11] bg-white rounded overflow-hidden shadow-2xl">
              <iframe
                src={getPreviewLink(resume.driveId)}
                className="w-full h-full"
                title="Resume Preview"
                frameBorder="0"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-vscode-text/60 text-sm">
                Having trouble viewing?
                <button onClick={handleView} className="text-vscode-accent hover:underline ml-2 font-medium">
                  Open in new tab
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // All Resumes Grid View
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-20 rounded-full"></div>
            <div className="relative text-8xl">📚</div>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-vscode-accent via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Resumes
          </span>
        </h1>
        <p className="text-vscode-text/70 text-lg max-w-2xl mx-auto mb-4">
          Choose the resume that best fits your needs
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-vscode-accent/10 border border-vscode-accent/30 text-vscode-accent rounded-full text-sm font-medium">
          <VscRocket size={16} />
          <span>{resumes.length} versions available</span>
        </div>
      </div>
      
      {/* Resumes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {resumes.map((resume) => {
          const colors = getColorClass(resume.color);
          return (
            <div
              key={resume.id}
              onClick={() => openTab({
                id: `resume-${resume.id}`,
                name: resume.title,
                type: 'single-resume',
                resumeId: resume.id
              })}
              className="relative group cursor-pointer"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-vscode-hover border border-vscode-border rounded-lg overflow-hidden hover:border-vscode-accent transition-all hover:shadow-2xl">
                {/* Header */}
                <div className={`p-6 ${colors.bg} border-b border-vscode-border`}>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      {resume.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-vscode-text mb-1 group-hover:text-vscode-accent transition-colors">
                        {resume.title}
                      </h3>
                      {resume.featured && (
                        <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                          <span>⭐</span>
                          <span>Featured</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-vscode-text/70 mb-4 min-h-[48px] leading-relaxed">
                    {resume.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resume.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-vscode-bg border border-vscode-border text-vscode-text text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {resume.tags.length > 4 && (
                      <span className="px-3 py-1 bg-vscode-bg border border-vscode-border text-vscode-text text-xs rounded-full">
                        +{resume.tags.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-vscode-border/50">
                    <span className="text-xs text-vscode-text/50">
                      Updated {new Date(resume.lastUpdated).toLocaleDateString()}
                    </span>
                    <span className={`${colors.text} font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all`}>
                      <span>View Details</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Info Note */}
      <div className="relative group max-w-3xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-vscode-accent to-purple-600 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
        <div className="relative bg-vscode-hover border border-vscode-border rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📥</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-vscode-accent mb-3">About These Resumes</h3>
              <p className="text-vscode-text/70 mb-4 leading-relaxed">
                I maintain different versions of my resume tailored for specific roles and positions. 
                Each resume highlights relevant skills and experiences for different job requirements.
              </p>
              <div className="flex items-center gap-2 text-sm text-vscode-text/50">
                <span>🔒</span>
                <span>All resumes are hosted securely on Google Drive and updated regularly.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
