import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { VscBriefcase, VscCalendar, VscLocation, VscRocket, VscMortarBoard } from 'react-icons/vsc';

const ExperienceSection = () => {
  const { experience, education } = portfolioData;
  
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      {/* Header with Gradient */}
      <div className="mb-8 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full mb-3 md:mb-4">
          <VscRocket className="text-blue-400" size={14} />
          <span className="text-blue-400 text-xs md:text-sm font-medium">Professional Journey</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          <span className="bg-gradient-to-r from-vscode-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </span>
        </h1>
        <p className="text-vscode-text/70 text-sm md:text-lg max-w-2xl mx-auto px-4">
          Building the future, one project at a time. Here's my journey from learning to leading.
        </p>
      </div>
      
      {/* Work Experience */}
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <VscBriefcase size={20} className="text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-vscode-text">Work Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-vscode-border to-transparent"></div>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative group"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              
              {/* Content Card */}
              <div className="relative bg-vscode-hover border border-vscode-border rounded-lg p-4 md:p-6 hover:border-vscode-accent transition-all">
                {/* Timeline */}
                <div className="absolute -left-px top-0 bottom-0 w-1 bg-gradient-to-b from-vscode-accent to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-3 md:mb-4 gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-2xl font-bold text-vscode-accent mb-2 group-hover:text-blue-400 transition-colors">
                      {exp.position}
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-vscode-text/70">
                      <div className="flex items-center gap-1 md:gap-2">
                        <VscBriefcase size={14} className="text-vscode-accent flex-shrink-0" />
                        <span className="font-medium truncate">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <VscLocation size={14} className="text-green-400 flex-shrink-0" />
                        <span className="truncate">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <VscCalendar size={14} className="text-blue-400 flex-shrink-0" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Index Badge */}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-vscode-accent/10 border border-vscode-accent/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-vscode-accent font-bold text-sm md:text-base">{index + 1}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-vscode-text/80 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
                
                {/* Responsibilities */}
                <div className="bg-gradient-to-br from-vscode-bg to-vscode-hover rounded-lg p-3 md:p-5 border border-vscode-border/50">
                  <h4 className="text-xs md:text-sm font-semibold text-vscode-accent mb-3 md:mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    Key Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-vscode-text text-xs md:text-sm p-2 rounded hover:bg-vscode-hover transition-colors"
                      >
                        <span className="text-green-400 mt-0.5 md:mt-1 flex-shrink-0">✓</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Education */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <VscMortarBoard size={20} className="text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-vscode-text">Education</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-vscode-border to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Gradient Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              
              {/* Content */}
              <div className="relative bg-vscode-hover border border-vscode-border rounded-lg p-4 md:p-6 hover:border-vscode-accent transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <div className="text-2xl md:text-3xl flex-shrink-0">🎓</div>
                      <h3 className="text-base md:text-xl font-bold text-vscode-accent group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                    
                    <p className="text-sm md:text-base text-vscode-text font-medium mb-2 md:mb-3 ml-8 md:ml-12">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-vscode-text/70 text-xs md:text-sm ml-8 md:ml-12">
                      <span className="flex items-center gap-1">
                        <VscLocation size={12} className="text-green-400 flex-shrink-0" />
                        <span className="truncate">{edu.location}</span>
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="flex items-center gap-1">
                        <VscCalendar size={12} className="text-blue-400 flex-shrink-0" />
                        {edu.year}
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="px-2 md:px-3 py-1 rounded-full bg-gradient-to-r from-vscode-accent/20 to-purple-500/20 border border-vscode-accent/30 font-medium text-vscode-accent text-xs">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="hidden md:block flex-shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center">
                      <span className="text-xl md:text-2xl">🏆</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats Summary */}
      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="text-center p-4 md:p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg">
          <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1 md:mb-2">
            4 Months
          </div>
          <div className="text-vscode-text/70 text-xs md:text-base">Internship Experience</div>
        </div>
        
        <div className="text-center p-4 md:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg">
          <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">
            {portfolioData.projects?.length || 0}+
          </div>
          <div className="text-vscode-text/70 text-xs md:text-base">Projects Completed</div>
        </div>
        
        <div className="text-center p-4 md:p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
          <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1 md:mb-2">
            {(portfolioData.skills?.frontend?.length || 0) + (portfolioData.skills?.backend?.length || 0)}+
          </div>
          <div className="text-vscode-text/70 text-xs md:text-base">Skills Mastered</div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-8 md:mt-12 text-center px-4">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-vscode-accent/10 to-purple-500/10 border border-vscode-accent/30 rounded-lg text-xs md:text-sm">
          <VscRocket className="text-vscode-accent flex-shrink-0" size={16} />
          <span className="text-vscode-text">
            Want to know more? Check out my{' '}
          </span>
          <button
            onClick={() => window.open(portfolioData.about.linkedin, '_blank')}
            className="text-vscode-accent hover:underline font-medium"
          >
            LinkedIn profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
