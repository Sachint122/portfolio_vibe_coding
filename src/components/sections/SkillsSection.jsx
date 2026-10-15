import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { VscCode, VscRocket, VscTools } from 'react-icons/vsc';
import CardTilt3D from '../3d/CardTilt3D';
import SkillExplorer from '../features/SkillExplorer';
import FullStackArchitectureMap from '../features/FullStackArchitectureMap';

const InteractiveSkillsOrbit = React.lazy(() => import('../features/InteractiveSkillsOrbit'));

const SkillsSection = () => {
  const { skills } = portfolioData;
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);
  
  const getSkillColor = (level) => {
    if (level >= 90) return { from: 'from-green-500', to: 'to-emerald-600', text: 'text-green-400', bg: 'bg-green-500/10' };
    if (level >= 75) return { from: 'from-blue-500', to: 'to-cyan-600', text: 'text-blue-400', bg: 'bg-blue-500/10' };
    if (level >= 60) return { from: 'from-purple-500', to: 'to-pink-600', text: 'text-purple-400', bg: 'bg-purple-500/10' };
    return { from: 'from-orange-500', to: 'to-red-600', text: 'text-orange-400', bg: 'bg-orange-500/10' };
  };
  
  const SkillCard = ({ skill, index }) => {
    const colors = getSkillColor(skill.level);
    
    return (
      <motion.div
        data-framer-motion="true"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{
          duration: 0.45,
          delay: Math.min((index % 6) * 0.05, 0.25),
          ease: [0.16, 1, 0.3, 1]
        }}
        className="h-full"
      >
        <CardTilt3D maxTilt={6}>
        <div className="relative group h-full">
          {/* Glow Effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${colors.from} ${colors.to} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
          
          {/* Card */}
          <div className="relative h-full bg-vscode-hover border border-vscode-border rounded-xl p-4 md:p-5 hover:border-vscode-accent transition-all flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex justify-between items-center mb-2 md:mb-3">
                <div className="flex items-center gap-1.5 md:gap-2 min-w-0 flex-1">
                  <div className={`w-2 h-2 rounded-full ${colors.bg} border border-vscode-accent animate-pulse flex-shrink-0`}></div>
                  <span className="font-semibold text-vscode-text text-sm md:text-base group-hover:text-vscode-accent transition-colors truncate">
                    {skill.name}
                  </span>
                </div>
                <span className={`${colors.text} font-bold text-base md:text-lg flex-shrink-0 ml-2`}>
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative w-full bg-vscode-bg rounded-full h-2.5 md:h-3 overflow-hidden border border-vscode-border/50">
                <div
                  className={`bg-gradient-to-r ${colors.from} ${colors.to} h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                  style={{ 
                    width: animated ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
            
            {/* Level Label */}
            <div className="mt-2 text-xs text-vscode-text/50 text-right">
              {skill.level >= 90 && '⭐ Expert'}
              {skill.level >= 75 && skill.level < 90 && '🔥 Advanced'}
              {skill.level >= 60 && skill.level < 75 && '💪 Intermediate'}
              {skill.level < 60 && '🌱 Learning'}
            </div>
          </div>
        </div>
      </CardTilt3D>
    </motion.div>
  );
  };
  
  const CategoryHeader = ({ icon: Icon, title, gradient, count }) => (
    <div className="flex items-center justify-between mb-4 md:mb-6">
      <div className="flex items-center gap-2 md:gap-3">
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
          <Icon size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-vscode-text">{title}</h2>
          <p className="text-xs md:text-sm text-vscode-text/60">{count} technologies</p>
        </div>
      </div>
      <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-vscode-border to-transparent ml-4"></div>
    </div>
  );
  
  // Calculate averages
  const avgFrontend = Math.round(skills.frontend.reduce((acc, s) => acc + s.level, 0) / skills.frontend.length);
  const avgBackend = Math.round(skills.backend.reduce((acc, s) => acc + s.level, 0) / skills.backend.length);
  const avgTools = Math.round(skills.tools.reduce((acc, s) => acc + s.level, 0) / skills.tools.length);
  const overallAvg = Math.round((avgFrontend + avgBackend + avgTools) / 3);
  
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full mb-3 md:mb-4">
          <VscCode className="text-purple-400" size={14} />
          <span className="text-purple-400 text-xs md:text-sm font-medium">Technical Expertise</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          <span className="bg-gradient-to-r from-vscode-accent via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h1>
        <p className="text-vscode-text/70 text-sm md:text-lg max-w-2xl mx-auto px-4">
          A comprehensive overview of my technical skills and proficiency levels across the full stack
        </p>
      </div>
      
      {/* Interactive Orbital Skills Cloud & Recruiter Focus */}
      <React.Suspense
        fallback={
          <div className="w-full min-h-[420px] mb-8 md:mb-12 flex flex-col items-center justify-center rounded-2xl bg-vscode-hover/20 border border-vscode-border/30 animate-pulse">
            <div className="w-10 h-10 rounded-full border-2 border-t-vscode-accent border-vscode-border animate-spin mb-3" />
            <span className="text-xs font-mono text-vscode-text/60">Loading Orbital Radar...</span>
          </div>
        }
      >
        <InteractiveSkillsOrbit />
      </React.Suspense>

      {/* Feature 8: Domain Skill Explorer with Project Linking */}
      <SkillExplorer />

      {/* Feature 9: Full-Stack Architecture Map */}
      <FullStackArchitectureMap />

      {/* Existing Readable Skills List */}
      {/* Frontend Skills */}
      <div className="mb-8 md:mb-12">
        <CategoryHeader 
          icon={VscCode}
          title="Frontend Development"
          gradient="from-blue-500 to-cyan-500"
          count={skills.frontend.length}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {skills.frontend.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
      
      {/* Backend Skills */}
      <div className="mb-8 md:mb-12">
        <CategoryHeader 
          icon={VscRocket}
          title="Backend Development"
          gradient="from-purple-500 to-pink-500"
          count={skills.backend.length}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {skills.backend.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
      
      {/* Tools & Technologies */}
      <div className="mb-8 md:mb-12">
        <CategoryHeader 
          icon={VscTools}
          title="Tools & Technologies"
          gradient="from-green-500 to-emerald-500"
          count={skills.tools.length}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {skills.tools.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
      
      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
        {[
          { label: 'Frontend Avg', val: `${avgFrontend}%`, color: 'text-blue-400', border: 'border-blue-500/30', glow: 'from-blue-600 to-cyan-600' },
          { label: 'Backend Avg', val: `${avgBackend}%`, color: 'text-purple-400', border: 'border-purple-500/30', glow: 'from-purple-600 to-pink-600' },
          { label: 'Tools Avg', val: `${avgTools}%`, color: 'text-green-400', border: 'border-green-500/30', glow: 'from-green-600 to-emerald-600' },
          { label: 'Overall', val: `${overallAvg}%`, color: 'text-vscode-accent', border: 'border-vscode-accent/30', glow: 'from-vscode-accent to-blue-600', colSpan: 'col-span-2 md:col-span-1' }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            data-framer-motion="true"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={`relative group ${item.colSpan || ''}`}
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${item.glow} rounded-lg blur opacity-20 group-hover:opacity-40 transition`}></div>
            <div className={`relative text-center p-4 md:p-6 bg-vscode-hover border ${item.border} rounded-lg`}>
              <div className={`text-2xl md:text-4xl font-bold ${item.color} mb-1 md:mb-2`}>{item.val}</div>
              <div className="text-vscode-text/70 text-xs md:text-sm">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Summary Card */}
      <motion.div
        data-framer-motion="true"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-vscode-accent via-purple-600 to-pink-600 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
        <div className="relative bg-gradient-to-r from-vscode-hover to-vscode-bg border border-vscode-accent/30 rounded-lg p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
            <div className="text-4xl md:text-5xl">🚀</div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-vscode-accent mb-2 md:mb-3">Full Stack Mastery</h3>
              <p className="text-vscode-text/80 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                Proficient in building complete, scalable web applications from database architecture to pixel-perfect user interfaces. 
                Experienced in modern development workflows, cloud deployment, and agile methodologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 md:px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-xs md:text-sm">
                  Node.js Stack
                </span>
                <span className="px-2 md:px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-xs md:text-sm">
                  RESTful APIs
                </span>
                <span className="px-2 md:px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-xs md:text-sm">
                  Responsive Design
                </span>
                <span className="px-2 md:px-3 py-1 bg-pink-500/10 border border-pink-500/30 text-pink-400 rounded-full text-xs md:text-sm">
                  Cloud Deployment
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsSection;
