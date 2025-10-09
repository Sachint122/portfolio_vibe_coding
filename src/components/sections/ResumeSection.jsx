import React, { useState } from 'react';
import { VscDesktopDownload, VscFilePdf, VscEye, VscCheck, VscArrowLeft } from 'react-icons/vsc';
import { portfolioData } from '../../data/portfolioData';
import usePortfolioStore from '../../store/portfolioStore';

const ResumeSection = ({ resumeId }) => {
  const { about, resumes } = portfolioData;
  const { openTab } = usePortfolioStore();
  const [showPreview, setShowPreview] = useState(false);
  
  // Google Drive links
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
      blue: 'text-blue-500 bg-blue-500/10 border-blue-500/30',
      cyan: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
      green: 'text-green-500 bg-green-500/10 border-green-500/30',
      purple: 'text-purple-500 bg-purple-500/10 border-purple-500/30',
      red: 'text-red-500 bg-red-500/10 border-red-500/30',
      yellow: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
    };
    return colorMap[color] || colorMap.blue;
  };
  
  // If resumeId is provided, show single resume detail view
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
          className="flex items-center gap-2 mb-6 text-vscode-accent hover:underline"
        >
          <VscArrowLeft size={20} />
          <span>Back to All Resumes</span>
        </button>
        
        {/* Resume Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{resume.icon}</div>
          <h1 className="text-4xl font-bold text-vscode-accent mb-3">{resume.title}</h1>
          <p className="text-vscode-text text-lg">{resume.description}</p>
          {resume.featured && (
            <span className="inline-block mt-3 px-4 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 rounded-full text-sm font-medium">
              ⭐ Featured Resume
            </span>
          )}
        </div>
        
        {/* Resume Info Card */}
        <div className="bg-vscode-hover border border-vscode-border rounded-lg p-8 mb-6 max-w-3xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {resume.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${getColorClass(resume.color)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Info */}
          <div className="flex items-center gap-4 mb-6 text-sm text-vscode-text/60">
            <span>📅 Last Updated: {new Date(resume.lastUpdated).toLocaleDateString()}</span>
            <span>•</span>
            <span>📄 PDF Format</span>
          </div>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={handleView}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-vscode-accent transition-all text-lg font-medium group"
            >
              <VscEye size={24} className="group-hover:scale-110 transition-transform" />
              <span>Preview</span>
            </button>
            
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-vscode-accent text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-medium shadow-lg group"
            >
              <VscDesktopDownload size={24} className="group-hover:scale-110 transition-transform" />
              <span>Download</span>
            </button>
          </div>
        </div>
        
        {/* Preview Toggle */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="text-vscode-accent hover:underline flex items-center gap-2 mx-auto"
          >
            {showPreview ? '▼ Hide Preview' : '▶ Show Preview'}
          </button>
        </div>
        
        {/* Embedded Preview */}
        {showPreview && (
          <div className="bg-vscode-hover border border-vscode-border rounded-lg p-4">
            <div className="aspect-[8.5/11] bg-white rounded overflow-hidden">
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
                <button onClick={handleView} className="text-vscode-accent hover:underline ml-2">
                  Open in new tab
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // Show all resumes grid view
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="text-6xl mb-4">📚</div>
        <h1 className="text-4xl font-bold text-vscode-accent mb-3">My Resumes</h1>
        <p className="text-vscode-text text-lg">
          Choose the resume that best fits your needs ({resumes.length} versions available)
        </p>
      </div>
      
      {/* Resumes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            onClick={() => openTab({
              id: `resume-${resume.id}`,
              name: resume.title,
              type: 'single-resume',
              resumeId: resume.id
            })}
            className="bg-vscode-hover border border-vscode-border rounded-lg overflow-hidden hover:border-vscode-accent transition-all cursor-pointer group hover:shadow-lg"
          >
            {/* Header */}
            <div className={`p-6 ${getColorClass(resume.color)} border-b border-vscode-border`}>
              <div className="flex items-center gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {resume.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-vscode-text mb-1 group-hover:text-vscode-accent transition-colors">
                    {resume.title}
                  </h3>
                  {resume.featured && (
                    <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-vscode-text/70 mb-4 min-h-[48px]">
                {resume.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {resume.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-vscode-bg border border-vscode-border text-vscode-text text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
                {resume.tags.length > 3 && (
                  <span className="px-2 py-1 bg-vscode-bg border border-vscode-border text-vscode-text text-xs rounded">
                    +{resume.tags.length - 3}
                  </span>
                )}
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-vscode-text/50">
                  {new Date(resume.lastUpdated).toLocaleDateString()}
                </span>
                <span className="text-vscode-accent font-medium group-hover:underline">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Info Note */}
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <div className="bg-vscode-hover border border-vscode-border rounded-lg p-6">
          <h3 className="text-lg font-bold text-vscode-accent mb-3">📥 About These Resumes</h3>
          <p className="text-vscode-text/70 text-sm mb-4">
            I maintain different versions of my resume tailored for specific roles and positions. 
            Each resume highlights relevant skills and experiences for different job requirements.
          </p>
          <p className="text-vscode-text/50 text-xs">
            All resumes are hosted securely on Google Drive and updated regularly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
