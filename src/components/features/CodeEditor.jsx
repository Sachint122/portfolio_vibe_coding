import React, { useMemo } from 'react';
import usePortfolioStore from '../../store/portfolioStore';
import WelcomeSection from '../sections/WelcomeSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';
import ResumeSection from '../sections/ResumeSection';
import NotFound from '../sections/NotFound';

const CodeEditor = React.memo(() => {
  const { activeTabId, openTabs } = usePortfolioStore();
  
  const activeTab = useMemo(() => openTabs.find(tab => tab.id === activeTabId), [openTabs, activeTabId]);
  
  const renderContent = () => {
    if (!activeTab) {
      return <WelcomeSection />;
    }
    
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
        return <ResumeSection />;
      case 'single-resume':
        return <ResumeSection resumeId={activeTab.resumeId} />;
      case 'resume':
        return <ResumeSection />;
      default:
        return <NotFound />;
    }
  };
  
  return (
    <div className="h-full w-full overflow-y-auto bg-vscode-bg pb-[80px] md:pb-0">
      {renderContent()}
    </div>
  );
});

export default CodeEditor;