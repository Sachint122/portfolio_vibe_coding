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
import ResumeSection from '../sections/ResumeSection';


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
    case 'all-projects':
      return <ProjectsSection />;
    case 'contact':
      return <ContactSection />;
    case 'all-resumes':
      return <ResumeSection />;  // All resumes grid
    case 'single-resume':
      return <ResumeSection resumeId={activeTab.resumeId} />;  // Single resume detail
    case 'resume':  // Default resume.pdf click
      return <ResumeSection />;  // Shows all resumes
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
