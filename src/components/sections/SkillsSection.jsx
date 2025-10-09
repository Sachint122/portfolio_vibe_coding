import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const SkillsSection = () => {
  const { skills } = portfolioData;
  
  const SkillCard = ({ skill }) => (
    <div className="bg-vscode-hover border border-vscode-border rounded-lg p-4 hover:border-vscode-accent transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-vscode-text">{skill.name}</span>
        <span className="text-vscode-accent font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-vscode-bg rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-vscode-accent to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
  
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-vscode-accent mb-3">Skills & Technologies</h1>
        <p className="text-vscode-text text-lg">
          Here's a comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>
      
      {/* Frontend Skills */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎨</span>
          <h2 className="text-2xl font-bold text-vscode-text">Frontend Development</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.frontend.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      
      {/* Backend Skills */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">⚙️</span>
          <h2 className="text-2xl font-bold text-vscode-text">Backend Development</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.backend.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      
      {/* Tools & Technologies */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🛠️</span>
          <h2 className="text-2xl font-bold text-vscode-text">Tools & Technologies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.tools.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      
      {/* Summary Card */}
      <div className="bg-gradient-to-r from-vscode-accent/10 to-blue-600/10 border border-vscode-accent rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-vscode-accent mb-2">Full Stack Proficiency</h3>
        <p className="text-vscode-text">
          Experienced in building complete web applications from database design to user interface implementation
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;
