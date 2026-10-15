import React, { useState } from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiTailwindcss, 
  SiMysql, 
  SiGit,
  SiVite
} from 'react-icons/si';
import { VscShield, VscOrganization, VscSparkle } from 'react-icons/vsc';

const InteractiveSkillsOrbit = () => {
  const [activeSkill, setActiveSkill] = useState({
    id: 'erp',
    name: 'Enterprise ERP & RBAC',
    category: 'Enterprise Engineering',
    level: 92,
    icon: VscOrganization,
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    recruiterNote: 'Engineered Role-Based Access Control (4 roles: Super Admin, HR, Employee, Telecaller), DWR, Soft Delete & Leave Workflows.'
  });

  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'mern', 'erp'

  // Orbital Skill Nodes
  const orbit1Nodes = [
    {
      id: 'node',
      name: 'Node.js',
      category: 'Backend Core',
      level: 90,
      icon: SiNodedotjs,
      color: '#22c55e',
      glowColor: 'rgba(34, 197, 94, 0.4)',
      angle: 0,
      recruiterNote: 'Scalable RESTful microservices, asynchronous I/O, middleware architecture & high throughput APIs.'
    },
    {
      id: 'express',
      name: 'Express.js',
      category: 'Backend Framework',
      level: 90,
      icon: SiExpress,
      color: '#e2e8f0',
      glowColor: 'rgba(226, 232, 240, 0.4)',
      angle: 120,
      recruiterNote: 'Centralized error-handling, route controllers, JWT authentication, and secure request validation.'
    },
    {
      id: 'mongodb',
      name: 'MongoDB & Mongoose',
      category: 'Database Architecture',
      level: 85,
      icon: SiMongodb,
      color: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      angle: 240,
      recruiterNote: 'Schema design, indexing, aggregation pipelines, document lifecycles & relationship modeling.'
    }
  ];

  const orbit2Nodes = [
    {
      id: 'react',
      name: 'React.js',
      category: 'Frontend Engineering',
      level: 85,
      icon: SiReact,
      color: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.4)',
      angle: 30,
      recruiterNote: 'Single Page Apps (SPAs), custom hooks, reusable components, state management (Zustand) & performance optimization.'
    },
    {
      id: 'javascript',
      name: 'JavaScript (ES6+)',
      category: 'Core Language',
      level: 88,
      icon: SiJavascript,
      color: '#eab308',
      glowColor: 'rgba(234, 179, 8, 0.4)',
      angle: 120,
      recruiterNote: 'Asynchronous JavaScript (Promises, async/await), DOM events, closures, modular architecture.'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Modern Styling',
      level: 85,
      icon: SiTailwindcss,
      color: '#06b6d4',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      angle: 210,
      recruiterNote: 'Utility-first modern styling, responsive layouts, theme configurations & dark-mode IDE aesthetics.'
    },
    {
      id: 'vite',
      name: 'Vite & Tooling',
      category: 'Build Architecture',
      level: 85,
      icon: SiVite,
      color: '#a855f7',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      angle: 300,
      recruiterNote: 'Lightning fast HMR, optimized production asset bundling, and CI/CD automated deployments.'
    }
  ];

  const orbit3Nodes = [
    {
      id: 'erp',
      name: 'Enterprise ERP & RBAC',
      category: 'Enterprise Production',
      level: 92,
      icon: VscOrganization,
      color: '#f43f5e',
      glowColor: 'rgba(244, 63, 94, 0.5)',
      angle: 45,
      recruiterNote: 'Built full-scale enterprise ERP with 4-role RBAC, DWR, Soft Delete/Restore workflows & automated PDF extraction.'
    },
    {
      id: 'rbac',
      name: 'Role-Based Access (RBAC)',
      category: 'Security & Auth',
      level: 88,
      icon: VscShield,
      color: '#8b5cf6',
      glowColor: 'rgba(139, 92, 246, 0.4)',
      angle: 135,
      recruiterNote: 'Granular permissions: Super Admin, HR, Employee, Telecaller with protected API routes and UI guards.'
    },
    {
      id: 'mysql',
      name: 'MySQL & Relational Data',
      category: 'Relational Database',
      level: 85,
      icon: SiMysql,
      color: '#0284c7',
      glowColor: 'rgba(2, 132, 199, 0.4)',
      angle: 225,
      recruiterNote: 'Structured SQL relational schemas, foreign keys, normalized queries, and transaction handling.'
    },
    {
      id: 'git',
      name: 'Git & GitHub Actions',
      category: 'DevOps & CI/CD',
      level: 85,
      icon: SiGit,
      color: '#f97316',
      glowColor: 'rgba(249, 115, 22, 0.4)',
      angle: 315,
      recruiterNote: 'Automated CI/CD build & deployment pipelines targeting Hostinger and cloud hosting platforms.'
    }
  ];

  const handleSelectSkill = (skill) => {
    setActiveSkill(skill);
  };

  const isHighlighted = (skillId) => {
    if (activeFilter === 'mern') {
      return ['react', 'node', 'express', 'mongodb', 'javascript'].includes(skillId);
    }
    if (activeFilter === 'erp') {
      return ['erp', 'rbac', 'node', 'mongodb', 'mysql'].includes(skillId);
    }
    return true;
  };

  const ActiveIcon = activeSkill.icon;

  return (
    <div className="relative mb-12 bg-gradient-to-b from-vscode-hover/70 via-vscode-bg to-vscode-bg border border-vscode-border rounded-2xl p-4 md:p-8 shadow-2xl overflow-hidden">
      {/* Background Decorative Grid and Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Recruiter Fast Filters */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 md:mb-8 pb-6 border-b border-vscode-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h2 className="text-xl md:text-2xl font-bold text-vscode-text flex items-center gap-2">
              <span>Interactive Skills Cloud & Ecosystem</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-vscode-text/60">
            Hover over any orbiting node to inspect core engineering capabilities and production impact.
          </p>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-vscode-text/50 uppercase tracking-wider mr-1">Focus:</span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-vscode-accent text-white shadow-lg shadow-vscode-accent/25'
                : 'bg-vscode-bg border border-vscode-border text-vscode-text/70 hover:border-vscode-accent/50'
            }`}
          >
            All Tech Stack
          </button>
          <button
            onClick={() => setActiveFilter('mern')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'mern'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-vscode-bg border border-vscode-border text-vscode-text/70 hover:border-cyan-400/50'
            }`}
          >
            ⚛️ Core MERN Stack
          </button>
          <button
            onClick={() => setActiveFilter('erp')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'erp'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                : 'bg-vscode-bg border border-vscode-border text-vscode-text/70 hover:border-purple-400/50'
            }`}
          >
            🏢 Enterprise ERP & RBAC
          </button>
        </div>
      </div>

      {/* Main Grid: Orbit Visualizer (Left) + Recruiter Insight Terminal (Right) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Orbit Visualization Column (7 cols) */}
        <div 
          className="lg:col-span-7 flex flex-col items-center justify-center overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Circular Orbit Canvas with Mobile Scale Adaptation */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] max-w-full flex items-center justify-center select-none scale-[0.85] xs:scale-[0.92] sm:scale-100 origin-center my-[-15px] sm:my-0">
            
            {/* Center Core: < > Developer Hub */}
            <div className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-vscode-bg border-2 border-vscode-accent/80 shadow-[0_0_30px_rgba(99,102,241,0.5)] flex flex-col items-center justify-center text-vscode-accent group cursor-pointer transition-transform duration-300 hover:scale-110">
              <span className="font-mono text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                &lt; / &gt;
              </span>
              <span className="text-[9px] font-mono font-semibold text-vscode-text/60 mt-0.5">FULLSTACK</span>
            </div>

            {/* Orbit 1 (Inner Track) - Backend Core */}
            <div 
              className={`absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-center ${isPaused ? '' : 'animate-spin'}`}
              style={{ animationDuration: '32s', animationTimingFunction: 'linear' }}
            >
              {orbit1Nodes.map((node) => {
                const r = 90; // approx radius
                const NodeIcon = node.icon;
                const highlighted = isHighlighted(node.id);
                const isSelected = activeSkill.id === node.id;

                return (
                  <div
                    key={node.id}
                    onClick={() => handleSelectSkill(node)}
                    onMouseEnter={() => handleSelectSkill(node)}
                    className="absolute cursor-pointer transition-transform duration-300"
                    style={{
                      transform: `rotate(${node.angle}deg) translate(${r}px) rotate(-${node.angle}deg)`,
                      opacity: highlighted ? 1 : 0.25
                    }}
                  >
                    {/* Counter-rotate icon container so icon stays upright */}
                    <div className={isPaused ? '' : 'animate-reverse-spin'} style={{ animationDuration: '32s' }}>
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected 
                            ? 'scale-125 border-2 shadow-xl ring-4 ring-cyan-500/30' 
                            : 'border hover:scale-115'
                        }`}
                        style={{
                          backgroundColor: '#0d1117',
                          borderColor: node.color,
                          boxShadow: isSelected ? `0 0 20px ${node.glowColor}` : '0 2px 8px rgba(0,0,0,0.5)'
                        }}
                        title={node.name}
                      >
                        <NodeIcon size={18} style={{ color: node.color }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Orbit 2 (Middle Track) - Frontend & UI Engineering */}
            <div 
              className={`absolute w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] md:w-[340px] md:h-[340px] rounded-full border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.15)] flex items-center justify-center ${isPaused ? '' : 'animate-spin-reverse'}`}
              style={{ animationDuration: '45s', animationTimingFunction: 'linear' }}
            >
              {orbit2Nodes.map((node) => {
                const NodeIcon = node.icon;
                const highlighted = isHighlighted(node.id);
                const isSelected = activeSkill.id === node.id;
                const r = 125;

                return (
                  <div
                    key={node.id}
                    onClick={() => handleSelectSkill(node)}
                    onMouseEnter={() => handleSelectSkill(node)}
                    className="absolute cursor-pointer transition-transform duration-300"
                    style={{
                      transform: `rotate(${node.angle}deg) translate(${r}px) rotate(-${node.angle}deg)`,
                      opacity: highlighted ? 1 : 0.25
                    }}
                  >
                    <div className={isPaused ? '' : 'animate-spin'} style={{ animationDuration: '45s' }}>
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected 
                            ? 'scale-125 border-2 shadow-xl ring-4 ring-indigo-500/30' 
                            : 'border hover:scale-115'
                        }`}
                        style={{
                          backgroundColor: '#0d1117',
                          borderColor: node.color,
                          boxShadow: isSelected ? `0 0 20px ${node.glowColor}` : '0 2px 8px rgba(0,0,0,0.5)'
                        }}
                        title={node.name}
                      >
                        <NodeIcon size={18} style={{ color: node.color }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Orbit 3 (Outer Track) - Enterprise ERP, Security & DevOps */}
            <div 
              className={`absolute w-[320px] h-[320px] sm:w-[390px] sm:h-[390px] md:w-[430px] md:h-[430px] rounded-full border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.15)] flex items-center justify-center ${isPaused ? '' : 'animate-spin'}`}
              style={{ animationDuration: '60s', animationTimingFunction: 'linear' }}
            >
              {orbit3Nodes.map((node) => {
                const NodeIcon = node.icon;
                const highlighted = isHighlighted(node.id);
                const isSelected = activeSkill.id === node.id;
                const r = 160;

                return (
                  <div
                    key={node.id}
                    onClick={() => handleSelectSkill(node)}
                    onMouseEnter={() => handleSelectSkill(node)}
                    className="absolute cursor-pointer transition-transform duration-300"
                    style={{
                      transform: `rotate(${node.angle}deg) translate(${r}px) rotate(-${node.angle}deg)`,
                      opacity: highlighted ? 1 : 0.25
                    }}
                  >
                    <div className={isPaused ? '' : 'animate-reverse-spin'} style={{ animationDuration: '60s' }}>
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected 
                            ? 'scale-125 border-2 shadow-xl ring-4 ring-purple-500/30' 
                            : 'border hover:scale-115'
                        }`}
                        style={{
                          backgroundColor: '#0d1117',
                          borderColor: node.color,
                          boxShadow: isSelected ? `0 0 20px ${node.glowColor}` : '0 2px 8px rgba(0,0,0,0.5)'
                        }}
                        title={node.name}
                      >
                        <NodeIcon size={18} style={{ color: node.color }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <p className="text-[11px] font-mono text-vscode-text/40 mt-2 flex items-center gap-1.5">
            <span>💡</span> Click or hover on any orbital node to inspect details. Hover pauses rotation.
          </p>
        </div>

        {/* Recruiter Focus Inspector & Highlights Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Active Skill Inspector Card */}
          <div className="relative p-5 md:p-6 bg-vscode-bg/90 backdrop-blur-md border border-vscode-border rounded-xl shadow-xl overflow-hidden group">
            {/* Glow Accent */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none transition-all duration-500"
              style={{ backgroundColor: activeSkill.color }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-vscode-accent px-2 py-0.5 bg-vscode-accent/10 border border-vscode-accent/20 rounded">
                  {activeSkill.category}
                </span>
                <span className="text-sm font-bold font-mono" style={{ color: activeSkill.color }}>
                  {activeSkill.level}% Proficiency
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-md flex-shrink-0"
                  style={{ backgroundColor: '#0d1117', borderColor: activeSkill.color }}
                >
                  <ActiveIcon size={26} style={{ color: activeSkill.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-vscode-text leading-tight">
                    {activeSkill.name}
                  </h3>
                  <div className="w-full bg-vscode-border rounded-full h-1.5 mt-2 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${activeSkill.level}%`, backgroundColor: activeSkill.color }}
                    />
                  </div>
                </div>
              </div>

              {/* Recruiter-Centric Production Note */}
              <div className="p-3 bg-vscode-hover/70 border border-vscode-border/70 rounded-lg text-xs md:text-sm text-vscode-text/90 leading-relaxed">
                <div className="flex items-center gap-1.5 text-vscode-accent font-semibold text-xs mb-1">
                  <VscSparkle size={13} />
                  <span>Production Impact for Recruiters:</span>
                </div>
                {activeSkill.recruiterNote}
              </div>
            </div>
          </div>

          {/* 4 Core Pillars at a Glance for Recruiters */}
          <div className="grid grid-cols-2 gap-2.5">
            <div 
              onClick={() => handleSelectSkill(orbit2Nodes[0])}
              className={`p-3 bg-vscode-bg/80 border rounded-lg cursor-pointer transition-all ${
                activeSkill.id === 'react' ? 'border-cyan-400 bg-cyan-950/20' : 'border-vscode-border hover:border-cyan-400/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <SiReact className="text-cyan-400" size={16} />
                <span className="font-bold text-xs text-vscode-text">React.js</span>
              </div>
              <p className="text-[11px] text-vscode-text/60 line-clamp-1">Hooks, SPAs, Responsive</p>
            </div>

            <div 
              onClick={() => handleSelectSkill(orbit1Nodes[0])}
              className={`p-3 bg-vscode-bg/80 border rounded-lg cursor-pointer transition-all ${
                activeSkill.id === 'node' ? 'border-green-400 bg-green-950/20' : 'border-vscode-border hover:border-green-400/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <SiNodedotjs className="text-green-400" size={16} />
                <span className="font-bold text-xs text-vscode-text">Node & Express</span>
              </div>
              <p className="text-[11px] text-vscode-text/60 line-clamp-1">REST APIs, JWT, Scale</p>
            </div>

            <div 
              onClick={() => handleSelectSkill(orbit1Nodes[2])}
              className={`p-3 bg-vscode-bg/80 border rounded-lg cursor-pointer transition-all ${
                activeSkill.id === 'mongodb' ? 'border-emerald-400 bg-emerald-950/20' : 'border-vscode-border hover:border-emerald-400/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <SiMongodb className="text-emerald-400" size={16} />
                <span className="font-bold text-xs text-vscode-text">MongoDB</span>
              </div>
              <p className="text-[11px] text-vscode-text/60 line-clamp-1">Schemas & Aggregations</p>
            </div>

            <div 
              onClick={() => handleSelectSkill(orbit3Nodes[0])}
              className={`p-3 bg-vscode-bg/80 border rounded-lg cursor-pointer transition-all ${
                activeSkill.id === 'erp' ? 'border-rose-400 bg-rose-950/20' : 'border-vscode-border hover:border-rose-400/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <VscOrganization className="text-rose-400" size={16} />
                <span className="font-bold text-xs text-vscode-text">Enterprise ERP</span>
              </div>
              <p className="text-[11px] text-vscode-text/60 line-clamp-1">RBAC, DWR, Workflows</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default InteractiveSkillsOrbit;
