import React from 'react';
import usePortfolioStore from '../../store/portfolioStore';
import WelcomeSection from '../sections/WelcomeSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import ExperienceSection from '../sections/ExperienceSection';
import ContactSection from '../sections/ContactSection';
import NotFound from '../sections/NotFound';
import { VscCode } from 'react-icons/vsc';

const CodeEditor = () => {
  const { openTabs, activeTabId } = usePortfolioStore();
  
  const activeTab = openTabs.find(tab => tab.id === activeTabId);
  
  if (!activeTab) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <VscCode size={80} className="text-vscode-accent opacity-50 mx-auto mb-4" />
          <p className="text-vscode-text opacity-50">No file open</p>
        </div>
      </div>
    );
  }
  
  const renderContent = () => {
    switch (activeTab.type) {
      case 'welcome':
        return <WelcomeSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'project':
        return <ProjectsSection projectId={activeTab.projectId} />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      case 'resume':
        return (
          <div className="flex items-center justify-center h-full p-8">
            <div className="text-center">
              <p className="text-6xl mb-4">📕</p>
              <h2 className="text-2xl font-bold text-vscode-text mb-4">Resume</h2>
              <p className="text-vscode-text/70 mb-6">Download my complete resume in PDF format</p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-vscode-accent text-white rounded-lg font-medium text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                <span>📄</span>
                Download Resume PDF
              </a>
            </div>
          </div>
        );
      default:
        return <NotFound />;
    }
  };
  
  return (
    <div className="flex-1 overflow-y-auto">
      {renderContent()}
    </div>
  );
};

export default CodeEditor;
