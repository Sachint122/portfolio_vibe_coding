import React, { useState } from 'react';
import { VscCheck, VscLayers } from 'react-icons/vsc';
import CardTilt3D from '../3d/CardTilt3D';

const WORKFLOW_STEPS = [
  {
    step: 1,
    id: 'requirements',
    title: 'Requirements',
    subtitle: 'Scope & Architecture',
    icon: '📋',
    color: 'from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/40',
    dotColor: 'bg-cyan-400',
    summary: 'Translating business logic into technical architecture, entity relationships, and role boundary specifications.',
    practices: [
      'Define user personas, functional specifications, and sprint milestones.',
      'Architect Role-Based Access Control (RBAC) tiers (Admin, HR, Staff, Telecaller).',
      'Model database entities, foreign keys, and document schemas before writing code.',
      'Establish RESTful API response contracts and error handling conventions.'
    ],
    tools: ['Agile User Stories', 'Architecture Blueprints', 'ER Diagrams', 'VS Code'],
    deliverable: 'Technical Specification & Schema Blueprint'
  },
  {
    step: 2,
    id: 'ui',
    title: 'UI Design',
    subtitle: 'Responsive Interfaces',
    icon: '🎨',
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/40',
    dotColor: 'bg-purple-400',
    summary: 'Crafting responsive, accessible, and high-performance interfaces tailored for desktop, tablet, and mobile.',
    practices: [
      'Build modular, reusable React components with zero unnecessary re-renders.',
      'Implement unified design tokens using Tailwind CSS and CSS custom properties.',
      'Design mobile-first responsive viewports (320px to 4K ultra-wide).',
      'Integrate subtle 3D card tilts, micro-animations, and theme palettes.'
    ],
    tools: ['React.js', 'Tailwind CSS', 'Framer Motion', 'VSC Icons'],
    deliverable: 'Component-Driven Responsive UI System'
  },
  {
    step: 3,
    id: 'api',
    title: 'API Engineering',
    subtitle: 'Node.js & Express',
    icon: '⚡',
    color: 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/40',
    dotColor: 'bg-amber-400',
    summary: 'Building secure, scalable, and documented RESTful web services with robust middleware pipelines.',
    practices: [
      'Structure clean REST endpoints following industry standard HTTP status codes.',
      'Implement JWT authentication, refresh tokens, and bcrypt password hashing.',
      'Build granular route authorization guards enforcing multi-tier RBAC.',
      'Centralize error handling middleware with sanitized client error responses.'
    ],
    tools: ['Node.js', 'Express.js', 'JWT Auth', 'REST Architecture', 'Middleware'],
    deliverable: 'Secure RESTful Microservices & Endpoints'
  },
  {
    step: 4,
    id: 'database',
    title: 'Database',
    subtitle: 'Schemas & Indexing',
    icon: '🗄️',
    color: 'from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/40',
    dotColor: 'bg-emerald-400',
    summary: 'Designing robust database architectures across both document (MongoDB) and relational (MySQL) engines.',
    practices: [
      'Architect Mongoose schemas with validation, virtuals, and aggregation pipelines.',
      'Design normalized MySQL relational tables with foreign keys and constraints.',
      'Implement soft delete workflows (trash, restore, and permanent purge).',
      'Optimize query execution with compound indexing and query caching.'
    ],
    tools: ['MongoDB', 'Mongoose ODM', 'MySQL', 'Relational Schemas', 'Indexing'],
    deliverable: 'High-Integrity Database Architecture'
  },
  {
    step: 5,
    id: 'testing',
    title: 'Testing',
    subtitle: 'API & Security Hardening',
    icon: '🧪',
    color: 'from-rose-500/20 to-red-500/20 text-rose-400 border-rose-500/40',
    dotColor: 'bg-rose-400',
    summary: 'Verifying end-to-end functionality, security controls, edge cases, and performance benchmarks.',
    practices: [
      'Execute automated and manual API test suites in Postman.',
      'Validate input sanitization and prevent NoSQL / SQL injection vulnerabilities.',
      'Verify RBAC permission boundaries to prevent unauthorized role escalation.',
      'Audit bundle sizes, memory disposal, and mobile layout stability.'
    ],
    tools: ['Postman', 'ESLint', 'Chrome CDP DevTools', 'Security Audits'],
    deliverable: 'Hardened, Verified & Tested Software'
  },
  {
    step: 6,
    id: 'deployment',
    title: 'Deployment',
    subtitle: 'CI/CD & Cloud Hosting',
    icon: '🚀',
    color: 'from-sky-500/20 to-blue-500/20 text-sky-400 border-sky-500/40',
    dotColor: 'bg-sky-400',
    summary: 'Automating build pipelines and deploying production applications with high availability and fast load times.',
    practices: [
      'Automate testing, linting, and build validation via GitHub Actions CI/CD.',
      'Configure production bundle code-splitting and asset compression (Gzip/WebP).',
      'Deploy full-stack applications to Hostinger Cloud, Vercel, and cloud servers.',
      'Set up domain DNS, SSL certificates, and Google Search Console SEO.'
    ],
    tools: ['GitHub Actions', 'Vite / CRA', 'Hostinger Cloud', 'Vercel', 'Git'],
    deliverable: 'Live Production Platform with CI/CD Automation'
  }
];

const SoftwareBuildWorkflow = () => {
  const [selectedStepId, setSelectedStepId] = useState('requirements');
  const activeStep = WORKFLOW_STEPS.find(s => s.id === selectedStepId) || WORKFLOW_STEPS[0];

  return (
    <div className="mb-10">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-vscode-border/60">
        <div className="flex items-center gap-2">
          <span className="text-xl">⚙️</span>
          <h3 className="text-lg md:text-xl font-bold text-vscode-text">How I Build Software</h3>
        </div>
        <span className="text-[11px] font-mono text-vscode-text/60 hidden sm:inline-block">
          Interactive Engineering Pipeline
        </span>
      </div>

      {/* Interactive Step Navigator Rails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-5">
        {WORKFLOW_STEPS.map((item, idx) => {
          const isSelected = item.id === activeStep.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedStepId(item.id)}
              className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group ${
                isSelected
                  ? 'bg-vscode-hover border-vscode-accent ring-1 ring-vscode-accent/50 shadow-lg'
                  : 'bg-vscode-bg/60 border-vscode-border hover:border-vscode-accent/40 hover:bg-vscode-hover/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded border ${item.color}`}>
                  0{item.step}
                </span>
              </div>
              <h4 className="text-xs font-bold text-vscode-text truncate">{item.title}</h4>
              <p className="text-[10px] text-vscode-text/60 truncate font-mono">{item.subtitle}</p>

              {/* Active Underline Indicator */}
              {isSelected && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-vscode-accent" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Step Deep Dive Inspector */}
      <CardTilt3D maxTilt={3}>
        <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-b from-vscode-sidebar/90 via-vscode-bg to-vscode-sidebar/90 border border-vscode-border shadow-xl backdrop-blur-md relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b border-vscode-border/60">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2 rounded-xl bg-vscode-hover border border-vscode-border">
                {activeStep.icon}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-vscode-accent">
                    STEP 0{activeStep.step} OF 06
                  </span>
                  <span className="text-vscode-text/40">•</span>
                  <span className="text-xs font-mono text-vscode-text/60">
                    {activeStep.subtitle}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-vscode-text">
                  {activeStep.title} Phase
                </h4>
              </div>
            </div>

            <div className="text-left md:text-right">
              <span className="text-[10px] font-mono text-vscode-text/50 uppercase tracking-wider block">
                Deliverable
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-400">
                {activeStep.deliverable}
              </span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-xs md:text-sm text-vscode-text/80 leading-relaxed mb-4">
            {activeStep.summary}
          </p>

          {/* Engineering Practices */}
          <div className="mb-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-vscode-text/60 mb-2 flex items-center gap-1.5">
              <VscLayers className="text-vscode-accent" size={14} />
              <span>Engineering Execution & Standards:</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeStep.practices.map((practice, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-vscode-bg/60 border border-vscode-border/50 text-xs text-vscode-text/80">
                  <VscCheck size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{practice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Tech Applied */}
          <div className="pt-3 border-t border-vscode-border/50 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-vscode-text/50 uppercase tracking-wider mr-1">
              Tools Used:
            </span>
            {activeStep.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-vscode-hover border border-vscode-border text-vscode-text hover:border-vscode-accent transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </CardTilt3D>
    </div>
  );
};

export default React.memo(SoftwareBuildWorkflow);
