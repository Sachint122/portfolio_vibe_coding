import React, { useState } from 'react';
import { VscCode, VscRocket, VscLinkExternal, VscCheck } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import CardTilt3D from '../3d/CardTilt3D';

const EXPLORER_CATEGORIES = [
  { id: 'all', label: 'All Domains', icon: '🌐' },
  { id: 'frontend', label: 'Frontend', icon: '⚛️' },
  { id: 'backend', label: 'Backend', icon: '⚡' },
  { id: 'database', label: 'Database', icon: '🗄️' },
  { id: 'devops', label: 'DevOps', icon: '🚀' },
  { id: 'integrations', label: 'Integrations', icon: '🔌' },
];

const DOMAIN_DATA = {
  frontend: {
    title: 'Frontend Architecture',
    desc: 'Crafting responsive, high-performance user interfaces with modern React, Tailwind CSS, and 3D interactivity.',
    skills: [
      { name: 'React.js', level: 90, tag: 'Component Architecture', icon: '⚛️' },
      { name: 'Tailwind CSS', level: 88, tag: 'Responsive Design Tokens', icon: '🎨' },
      { name: 'JavaScript (ES6+)', level: 88, tag: 'Async / Modern Syntax', icon: '📜' },
      { name: 'Vite / CRA', level: 85, tag: 'Build Tooling & Bundling', icon: '⚡' },
      { name: 'HTML5 & CSS3', level: 90, tag: 'Semantic Web & A11y', icon: '🌐' },
    ],
    projects: [
      {
        id: 'dti-website',
        tabId: 'project-dti',
        name: 'destination-technologies.jsx',
        title: 'Destination Technologies',
        desc: 'Interactive course portal, placement stats gallery, responsive navigation, and mobile-optimized layouts.',
        tags: ['React.js', 'Tailwind CSS', 'Vite', 'Responsive']
      },
      {
        id: 'dindia-infratech',
        tabId: 'project-dindia-infratech',
        name: 'dindia-infratech.jsx',
        title: 'Dindia Infratech Real Estate',
        desc: 'Commercial property platform with dynamic listings, Google Maps integration, and sleek modal previews.',
        tags: ['React.js', 'Tailwind', 'Google Maps']
      }
    ]
  },
  backend: {
    title: 'Backend & API Engineering',
    desc: 'Designing scalable RESTful services, secure JWT authentication, and multi-tier Role-Based Access Control.',
    skills: [
      { name: 'Node.js', level: 90, tag: 'Runtime & Event Loop', icon: '🟢' },
      { name: 'Express.js', level: 90, tag: 'RESTful Routing & Middleware', icon: '⚡' },
      { name: 'Role-Based Access Control (RBAC)', level: 88, tag: '4 Organization Tiers', icon: '🔐' },
      { name: 'JWT Authentication', level: 88, tag: 'Stateless Token Security', icon: '🛡️' },
      { name: 'RESTful API Architecture', level: 92, tag: 'Standardized Endpoints', icon: '📡' },
    ],
    projects: [
      {
        id: 'dindia-erp-system',
        tabId: 'project-dindia-erp-system',
        name: 'dindia-erp-system.jsx',
        title: 'Dindia Enterprise ERP',
        desc: 'Workforce management system with RBAC guards across Super Admin, HR, Staff, and Telecaller tiers.',
        tags: ['Node.js', 'Express.js', 'RBAC', 'JWT Auth']
      },
      {
        id: 'send-mail-app',
        tabId: 'project-send-mail',
        name: 'send-mail-app.js',
        title: 'Email Dispatch Microservice',
        desc: 'Automated email sending backend with HTML templates, verification tokens, and history logs.',
        tags: ['Node.js', 'Express', 'Nodemailer']
      }
    ]
  },
  database: {
    title: 'Database Architecture & Modeling',
    desc: 'Architecting robust schemas across document (MongoDB) and relational (MySQL) databases with indexing.',
    skills: [
      { name: 'MongoDB & Mongoose', level: 88, tag: 'Document Models & Aggregation', icon: '🍃' },
      { name: 'MySQL', level: 85, tag: 'Relational Schemas & Foreign Keys', icon: '🐬' },
      { name: 'Soft-Delete Workflows', level: 90, tag: 'Trash / Restore / Purge Flows', icon: '♻️' },
      { name: 'Indexing & Performance', level: 85, tag: 'Query Optimization', icon: '📈' },
    ],
    projects: [
      {
        id: 'dindia-erp-system',
        tabId: 'project-dindia-erp-system',
        name: 'dindia-erp-system.jsx',
        title: 'Dindia Enterprise ERP Database',
        desc: 'Complex data models powering attendance records, Daily Work Reports (DWR), and employee archives.',
        tags: ['MongoDB', 'Mongoose', 'MySQL', 'Indexing']
      },
      {
        id: 'library-management',
        tabId: 'project-library',
        name: 'library-management.ts',
        title: 'Library Management Database',
        desc: 'Relational schema tracking book borrowings, fines, member records, and inventory transactions.',
        tags: ['MySQL', 'Relational DB', 'Foreign Keys']
      }
    ]
  },
  devops: {
    title: 'DevOps & Cloud Deployment',
    desc: 'Automating continuous integration and delivery pipelines with GitHub Actions and production hosting.',
    skills: [
      { name: 'GitHub Actions', level: 85, tag: 'CI/CD Pipeline Automation', icon: '⚙️' },
      { name: 'Hostinger Cloud', level: 88, tag: 'Production Web Hosting', icon: '☁️' },
      { name: 'Git & GitHub', level: 90, tag: 'Version Control & Workflows', icon: '🐙' },
      { name: 'Vercel Deployment', level: 88, tag: 'Serverless Edge Hosting', icon: '▲' },
      { name: 'Postman', level: 90, tag: 'API Testing & Collections', icon: '🧪' },
    ],
    projects: [
      {
        id: 'dindia-website',
        tabId: 'project-dindia-website',
        name: 'dindia-website.jsx',
        title: 'Dindia Corporate CI/CD',
        desc: 'Automated continuous deployment workflow utilizing GitHub Actions to build and push to Hostinger.',
        tags: ['GitHub Actions', 'CI/CD', 'Hostinger']
      },
      {
        id: 'dti-website',
        tabId: 'project-dti',
        name: 'destination-technologies.jsx',
        title: 'Destination Technologies Live',
        desc: 'Live production deployment on Vercel with automated Git pushes, SSL, and asset caching.',
        tags: ['Vercel', 'Production', 'SSL']
      }
    ]
  },
  integrations: {
    title: 'Third-Party Services & Integrations',
    desc: 'Seamlessly connecting third-party payment gateways, maps APIs, and data extraction pipelines.',
    skills: [
      { name: 'Razorpay Payment Gateway', level: 85, tag: 'E-Commerce Transactions', icon: '💳' },
      { name: 'Google Maps API', level: 85, tag: 'Interactive Geolocation', icon: '🗺️' },
      { name: 'PDF Data Extraction', level: 88, tag: 'Automated Doc Parsing', icon: '📄' },
      { name: 'Google OAuth 2.0', level: 80, tag: 'Social Sign-in Authentication', icon: '🔑' },
    ],
    projects: [
      {
        id: 'dindia-erp-system',
        tabId: 'project-dindia-erp-system',
        name: 'dindia-erp-system.jsx',
        title: 'Automated PDF Parsing System',
        desc: 'Integrated PDF extraction scripts to parse and populate workforce reports directly into ERP records.',
        tags: ['PDF Parsing', 'Automation', 'REST APIs']
      },
      {
        id: 'dindia-infratech',
        tabId: 'project-dindia-infratech',
        name: 'dindia-infratech.jsx',
        title: 'Google Maps Commercial Integration',
        desc: 'Interactive property geolocation with embedded maps, directions, and nearby landmark queries.',
        tags: ['Google Maps API', 'Geo Services']
      }
    ]
  }
};

const SkillExplorer = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const { openTab } = usePortfolioStore();

  const currentDomain = DOMAIN_DATA[activeCategory] || DOMAIN_DATA.frontend;

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-2 border-b border-vscode-border/60">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔍</span>
          <h3 className="text-lg md:text-xl font-bold text-vscode-text">Skill Explorer</h3>
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 [scrollbar-width:none]">
          {EXPLORER_CATEGORIES.filter(c => c.id !== 'all').map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-vscode-accent text-white shadow-md scale-105'
                  : 'bg-vscode-hover hover:bg-vscode-bg text-vscode-text/70 border border-vscode-border hover:text-vscode-text'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Domain Overview Banner */}
      <div className="p-4 rounded-xl bg-vscode-hover/50 border border-vscode-border mb-6">
        <h4 className="text-base font-bold text-vscode-accent flex items-center gap-2">
          <span>{EXPLORER_CATEGORIES.find(c => c.id === activeCategory)?.icon}</span>
          <span>{currentDomain.title}</span>
        </h4>
        <p className="text-xs md:text-sm text-vscode-text/70 mt-1 leading-relaxed">
          {currentDomain.desc}
        </p>
      </div>

      {/* Dual Column Grid: Skills on Left, Correlated Projects on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Relevant Skills List */}
        <div className="lg:col-span-6 space-y-3">
          <h5 className="text-xs font-mono uppercase tracking-wider text-vscode-text/60 mb-2 flex items-center gap-1.5">
            <VscCode size={14} className="text-vscode-accent" />
            <span>Demonstrated Skills & Proficiencies:</span>
          </h5>

          {currentDomain.skills.map((skill, idx) => (
            <CardTilt3D key={idx} maxTilt={4}>
              <div className="p-3.5 rounded-xl bg-vscode-hover border border-vscode-border hover:border-vscode-accent/50 transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl p-1.5 rounded-lg bg-vscode-bg border border-vscode-border/80 flex-shrink-0">
                    {skill.icon}
                  </span>
                  <div className="min-w-0">
                    <h6 className="text-sm font-bold text-vscode-text truncate">
                      {skill.name}
                    </h6>
                    <span className="text-[11px] font-mono text-vscode-text/50 truncate block">
                      {skill.tag}
                    </span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-mono font-bold text-vscode-accent px-2 py-0.5 rounded bg-vscode-accent/10 border border-vscode-accent/30">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </CardTilt3D>
          ))}
        </div>

        {/* Right Column: Correlated Production Projects */}
        <div className="lg:col-span-6 space-y-3">
          <h5 className="text-xs font-mono uppercase tracking-wider text-vscode-text/60 mb-2 flex items-center gap-1.5">
            <VscRocket size={14} className="text-purple-400" />
            <span>Proven In Production Projects:</span>
          </h5>

          {currentDomain.projects.map((proj, idx) => (
            <CardTilt3D key={idx} maxTilt={4}>
              <div className="p-4 rounded-xl bg-gradient-to-br from-vscode-sidebar/95 via-vscode-bg to-vscode-sidebar/95 border border-vscode-border hover:border-vscode-accent/60 transition-all shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h6 className="text-sm md:text-base font-bold text-vscode-text flex items-center gap-1.5">
                      <span>{proj.title}</span>
                    </h6>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <VscCheck size={11} />
                      <span>Live Work</span>
                    </span>
                  </div>

                  <p className="text-xs text-vscode-text/75 leading-relaxed mb-3">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-vscode-hover border border-vscode-border text-vscode-text/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-vscode-border/50 flex justify-end">
                  <button
                    onClick={() => openTab({
                      id: proj.tabId || `project-${proj.id}`,
                      name: proj.name,
                      type: 'project',
                      projectId: proj.id
                    })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-vscode-accent/15 hover:bg-vscode-accent text-vscode-accent hover:text-white rounded-lg text-xs font-semibold font-mono border border-vscode-accent/40 transition-all active:scale-95"
                  >
                    <span>Inspect Project</span>
                    <VscLinkExternal size={12} />
                  </button>
                </div>
              </div>
            </CardTilt3D>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SkillExplorer);
