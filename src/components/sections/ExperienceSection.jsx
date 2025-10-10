import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { VscBriefcase, VscCalendar, VscLocation, VscRocket, VscMortarBoard } from 'react-icons/vsc';

const ExperienceSection = () => {
  const { experience, education } = portfolioData;
  
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header with Gradient */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full mb-4">
          <VscRocket className="text-blue-400" size={16} />
          <span className="text-blue-400 text-sm font-medium">Professional Journey</span>
        </div>
        
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-vscode-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </span>
        </h1>
        <p className="text-vscode-text/70 text-lg max-w-2xl mx-auto">
          Building the future, one project at a time. Here's my journey from learning to leading.
        </p>
      </div>
      
      {/* Work Experience */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <VscBriefcase size={24} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-vscode-text">Work Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-vscode-border to-transparent"></div>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative group"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              
              {/* Content Card */}
              <div className="relative bg-vscode-hover border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all">
                {/* Timeline */}
                <div className="absolute -left-px top-0 bottom-0 w-1 bg-gradient-to-b from-vscode-accent to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-vscode-accent mb-2 group-hover:text-blue-400 transition-colors">
                      {exp.position}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-vscode-text/70">
                      <div className="flex items-center gap-2">
                        <VscBriefcase size={16} className="text-vscode-accent" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <VscLocation size={16} className="text-green-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <VscCalendar size={16} className="text-blue-400" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Index Badge */}
                  <div className="w-10 h-10 rounded-full bg-vscode-accent/10 border border-vscode-accent/30 flex items-center justify-center">
                    <span className="text-vscode-accent font-bold">{index + 1}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-vscode-text/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Responsibilities */}
                <div className="bg-gradient-to-br from-vscode-bg to-vscode-hover rounded-lg p-5 border border-vscode-border/50">
                  <h4 className="text-sm font-semibold text-vscode-accent mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    Key Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-vscode-text text-sm p-2 rounded hover:bg-vscode-hover transition-colors"
                      >
                        <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
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
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <VscMortarBoard size={24} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-vscode-text">Education</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-vscode-border to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Gradient Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              
              {/* Content */}
              <div className="relative bg-vscode-hover border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-3xl">🎓</div>
                      <h3 className="text-xl font-bold text-vscode-accent group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                    
                    <p className="text-vscode-text font-medium mb-3 ml-12">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-vscode-text/70 text-sm ml-12">
                      <span className="flex items-center gap-1">
                        <VscLocation size={14} className="text-green-400" />
                        {edu.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <VscCalendar size={14} className="text-blue-400" />
                        {edu.year}
                      </span>
                      <span>•</span>
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-vscode-accent/20 to-purple-500/20 border border-vscode-accent/30 font-medium text-vscode-accent">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="hidden md:block">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats Summary */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg">
          <div className="text-4xl font-bold text-blue-400 mb-2">
            {experience.length}+
          </div>
          <div className="text-vscode-text/70">Years of Experience</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg">
          <div className="text-4xl font-bold text-purple-400 mb-2">
            {portfolioData.projects?.length || 0}+
          </div>
          <div className="text-vscode-text/70">Projects Completed</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
          <div className="text-4xl font-bold text-green-400 mb-2">
            {(portfolioData.skills?.frontend?.length || 0) + (portfolioData.skills?.backend?.length || 0)}+
          </div>
          <div className="text-vscode-text/70">Skills Mastered</div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-vscode-accent/10 to-purple-500/10 border border-vscode-accent/30 rounded-lg">
          <VscRocket className="text-vscode-accent" />
          <span className="text-vscode-text">
            Want to know more? Check out my{' '}
            <button
              onClick={() => window.open(portfolioData.about.linkedin, '_blank')}
              className="text-vscode-accent hover:underline font-medium"
            >
              LinkedIn profile
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
