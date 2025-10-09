import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { VscBriefcase, VscCalendar, VscLocation } from 'react-icons/vsc';

const ExperienceSection = () => {
  const { experience, education } = portfolioData;
  
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-vscode-accent mb-3">Experience & Education</h1>
        <p className="text-vscode-text text-lg">
          My professional journey and educational background
        </p>
      </div>
      
      {/* Work Experience */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-vscode-text mb-6 flex items-center gap-2">
          <span>💼</span>
          Work Experience
        </h2>
        
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-vscode-hover border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-4 h-4 bg-vscode-accent rounded-full border-4 border-vscode-bg" />
              {index < experience.length - 1 && (
                <div className="absolute left-[7px] top-12 bottom-0 w-0.5 bg-vscode-border" />
              )}
              
              {/* Content */}
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-vscode-accent mb-2">{exp.position}</h3>
                
                <div className="flex flex-wrap items-center gap-4 text-vscode-text/70 mb-3">
                  <div className="flex items-center gap-2">
                    <VscBriefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VscLocation size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VscCalendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-vscode-text mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="bg-vscode-bg rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-vscode-accent mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-vscode-text text-sm">
                        <span className="text-green-500 mt-0.5">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Education */}
      <div>
        <h2 className="text-2xl font-bold text-vscode-text mb-6 flex items-center gap-2">
          <span>🎓</span>
          Education
        </h2>
        
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-vscode-hover border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all"
            >
              <h3 className="text-xl font-bold text-vscode-accent mb-2">{edu.degree}</h3>
              <p className="text-vscode-text font-medium mb-1">{edu.institution}</p>
              <div className="flex items-center gap-4 text-vscode-text/70 text-sm">
                <span className="flex items-center gap-1">
                  <VscLocation size={14} />
                  {edu.location}
                </span>
                <span>•</span>
                <span>{edu.year}</span>
                <span>•</span>
                <span className="font-medium text-vscode-accent">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
