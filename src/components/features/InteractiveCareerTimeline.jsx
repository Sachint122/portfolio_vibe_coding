import React, { useState } from 'react';
import { VscMilestone, VscCheck, VscCalendar, VscLocation } from 'react-icons/vsc';
import CardTilt3D from '../3d/CardTilt3D';

const MILESTONES = [
  {
    id: 'dindia',
    period: 'June 2026 - Present',
    title: 'Web Developer',
    organization: 'Dindia',
    location: 'India',
    type: 'Full-Time',
    category: 'Development',
    badge: 'Current Role',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: '🏢',
    summary: 'Full-stack enterprise ERP & Office Management software engineering alongside commercial web platforms deployment.',
    highlights: [
      'Engineered Role-Based Access Control (RBAC) across 4 tiers: Super Admin, HR, Employee, and Telecaller.',
      'Developed workforce modules: Daily Work Reports (DWR), attendance, leave tracking, and automated PDF data extraction.',
      'Built employee lifecycle workflows including soft delete (Trash, Restore, and Purge flows).',
      'Developed and deployed two company websites (Dindia and Dindia Infratech) with SEO, Google Maps, and high-res media.',
      'Automated continuous build and deployment pipelines using GitHub Actions and Vite for Hostinger hosting.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RBAC', 'GitHub Actions', 'Tailwind CSS']
  },
  {
    id: 'deffotech',
    period: 'Nov 2025 - Feb 2026',
    title: 'Backend Developer Intern',
    organization: 'Deffotech',
    location: 'Remote',
    type: 'Internship',
    category: 'Internships',
    badge: 'Backend Focus',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    icon: '⚡',
    summary: 'Focused on building scalable RESTful APIs, JWT authentication, and real-world payment gateway integrations.',
    highlights: [
      'Developed and maintained RESTful APIs using Node.js and Express.js.',
      'Implemented JWT-based authentication and role-based access control.',
      'Integrated Razorpay payment gateway for secure online financial transactions.',
      'Designed and optimized relational database schemas using MySQL.',
      'Handled API testing, performance optimization, and debugging with Postman.'
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'Razorpay', 'Postman', 'REST APIs']
  },
  {
    id: 'workelate',
    period: 'Aug 2025 - Sep 2025',
    title: 'MERN Stack Developer Intern',
    organization: 'WorkElate',
    location: 'Remote',
    type: 'Internship',
    category: 'Internships',
    badge: 'MERN Stack',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    icon: '⚛️',
    summary: 'Contributed to the development and optimization of web applications with a focus on scalable backend systems.',
    highlights: [
      'Built and maintained responsive web applications using the MERN stack.',
      'Integrated RESTful APIs for seamless communication between frontend and backend.',
      'Implemented secure authentication and route authorization using JWT.',
      'Collaborated in agile team sprints to debug, test, and ship new product features.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git']
  },
  {
    id: 'mgkvp',
    period: '2021 - 2024',
    title: 'BCA in Computer Science',
    organization: 'Mahatama Gandhi Kashi Vidyapeeth (MGKVP)',
    location: 'Varanasi, India',
    type: 'Degree',
    category: 'Education',
    badge: 'Grade: 71%',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    icon: '🎓',
    summary: 'Comprehensive undergraduate education in Computer Science, software architecture, databases, and algorithms.',
    highlights: [
      'Core focus on Computer Applications, Data Structures, OOP, and Relational Databases.',
      'Developed academic projects in web development, database management, and programming.',
      'Built foundational strength in software engineering fundamentals.'
    ],
    tech: ['Computer Science', 'Data Structures', 'C++', 'Java', 'SQL', 'Web Tech']
  },
  {
    id: 'suzuki',
    period: 'Sep 2020 - Mar 2021',
    title: 'Production Engineering',
    organization: 'Suzuki Car Manufacturing',
    location: 'Ahmedabad, Gujarat',
    type: 'Industrial',
    category: 'Industrial',
    badge: 'FTC Reward Winner 🏆',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    icon: '🏭',
    summary: 'Worked in production and assembly engineering ensuring stringent quality control standards and assembly line efficiency.',
    highlights: [
      'Received prestigious FTC Reward for exceptional performance and reliability.',
      'Monitored and maintained product quality standards on the high-volume vehicle assembly line.',
      'Collaborated with cross-functional teams to meet demanding daily operational production targets.'
    ],
    tech: ['Quality Control', 'Workflow Optimization', 'Assembly Systems', 'Precision Standards']
  },
  {
    id: 'iti',
    period: '2017 - 2019',
    title: 'ITI in Electrical',
    organization: 'Amar Private ITI (NCVT)',
    location: 'Prayagraj, India',
    type: 'Diploma',
    category: 'Education',
    badge: 'Grade: 93% (Distinction)',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: '⚡',
    summary: 'Rigorous technical diploma focusing on electrical circuits, precision testing, and industrial equipment.',
    highlights: [
      'Graduated with 93% Distinction under National Council for Vocational Training (NCVT).',
      'Hands-on expertise in electrical systems, circuit diagnostics, and technical safety standards.'
    ],
    tech: ['Electrical Systems', 'Circuit Design', 'Diagnostics', 'Industrial Standards']
  }
];

const CATEGORIES = ['All', 'Development', 'Internships', 'Education', 'Industrial'];

const InteractiveCareerTimeline = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState('dindia');

  const filteredMilestones = activeCategory === 'All'
    ? MILESTONES
    : MILESTONES.filter(m => m.category === activeCategory);

  const selectedMilestone = MILESTONES.find(m => m.id === selectedMilestoneId) || MILESTONES[0];

  return (
    <div className="mb-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-2 border-b border-vscode-border/60">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗺️</span>
          <h3 className="text-lg md:text-xl font-bold text-vscode-text">Interactive Career Timeline</h3>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 [scrollbar-width:none]">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-vscode-accent text-white shadow-md'
                  : 'bg-vscode-hover hover:bg-vscode-bg text-vscode-text/70 border border-vscode-border hover:text-vscode-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Timeline Node Rail */}
        <div className="lg:col-span-5 space-y-2.5">
          {filteredMilestones.map((milestone) => {
            const isSelected = milestone.id === selectedMilestone.id;
            return (
              <div
                key={milestone.id}
                onClick={() => setSelectedMilestoneId(milestone.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-vscode-hover border-vscode-accent ring-1 ring-vscode-accent/40 shadow-lg translate-x-1'
                    : 'bg-vscode-bg/60 border-vscode-border hover:border-vscode-accent/40 hover:bg-vscode-hover/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl p-1.5 rounded-lg bg-vscode-sidebar/90 border border-vscode-border flex-shrink-0">
                    {milestone.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs font-mono text-vscode-accent font-semibold flex items-center gap-1">
                        <VscCalendar size={12} />
                        <span>{milestone.period}</span>
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${milestone.badgeColor}`}>
                        {milestone.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-vscode-text truncate">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-vscode-text/60 truncate">
                      {milestone.organization} • {milestone.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Milestone Inspector */}
        <div className="lg:col-span-7">
          <CardTilt3D maxTilt={4}>
            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-b from-vscode-sidebar/90 via-vscode-bg to-vscode-sidebar/90 border border-vscode-border shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-vscode-accent/10 rounded-full blur-2xl pointer-events-none" />

              {/* Milestone Details Header */}
              <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-vscode-border/60">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{selectedMilestone.icon}</span>
                    <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${selectedMilestone.badgeColor}`}>
                      {selectedMilestone.badge}
                    </span>
                    <span className="text-xs font-mono text-vscode-text/50">
                      • {selectedMilestone.type}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-vscode-text">
                    {selectedMilestone.title}
                  </h3>
                  <p className="text-sm font-medium text-vscode-accent flex items-center gap-2 mt-0.5">
                    <span>{selectedMilestone.organization}</span>
                    <span className="text-vscode-text/40">•</span>
                    <span className="text-xs text-vscode-text/70 flex items-center gap-1">
                      <VscLocation size={13} />
                      {selectedMilestone.location}
                    </span>
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="inline-block px-3 py-1 rounded-lg bg-vscode-hover border border-vscode-border text-xs font-mono text-vscode-text">
                    {selectedMilestone.period}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-xs md:text-sm text-vscode-text/80 leading-relaxed mb-4">
                {selectedMilestone.summary}
              </p>

              {/* Key Accomplishments & Responsibilities */}
              <div className="mb-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-vscode-text/60 mb-2.5 flex items-center gap-1.5">
                  <VscMilestone className="text-vscode-accent" size={14} />
                  <span>Key Accomplishments & Scope:</span>
                </h4>
                <div className="space-y-2">
                  {selectedMilestone.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-vscode-text/80">
                      <VscCheck size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies / Competencies Applied */}
              <div className="pt-3 border-t border-vscode-border/50">
                <span className="block text-[11px] font-mono text-vscode-text/50 mb-2 uppercase tracking-wider">
                  Technologies & Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMilestone.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-vscode-bg border border-vscode-border text-vscode-accent font-medium hover:border-vscode-accent transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardTilt3D>
        </div>
      </div>
    </div>
  );
};

export default React.memo(InteractiveCareerTimeline);
