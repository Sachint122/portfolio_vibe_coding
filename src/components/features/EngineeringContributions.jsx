import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  VscServerProcess, 
  VscBrowser, 
  VscShield, 
  VscRocket, 
  VscPass, 
  VscLinkExternal, 
  VscChevronDown, 
  VscChevronUp,
  VscCheck
} from 'react-icons/vsc';
import CardTilt3D from '../3d/CardTilt3D';

const CONTRIBUTION_CATEGORIES = [
  { id: 'all', label: 'All Evidence' },
  { id: 'erp', label: 'ERP Modules' },
  { id: 'websites', label: 'Websites & Portals' },
  { id: 'api', label: 'API & Security' },
  { id: 'devops', label: 'DevOps & Performance' }
];

const CONTRIBUTIONS = [
  {
    id: 'erp-modules',
    category: 'erp',
    title: 'Enterprise ERP & Workforce Automation',
    tag: 'ERP Modules & Systems',
    icon: <VscServerProcess size={22} className="text-blue-400" />,
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    borderColor: 'border-blue-500/30 hover:border-blue-400/60',
    glowColor: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    metrics: [
      { label: 'Access Tiers', val: '4 Roles' },
      { label: 'Data Integrity', val: '100% Recoverable' },
      { label: 'Manual Entry', val: '0 (Automated PDF)' }
    ],
    summary: 'Architected and built core modules for enterprise office operations, automating timesheets, Daily Work Reports, and role boundaries.',
    architecturalPillars: [
      {
        title: '4-Tier Role-Based Access Control (RBAC)',
        desc: 'Engineered granular permission boundaries and route guards isolating Super Admin, HR Manager, Staff Employee, and Telecaller portals.'
      },
      {
        title: 'Daily Work Report (DWR) Pipeline',
        desc: 'Implemented structured daily task submission with hour logging, project milestones, and manager review/approval workflows.'
      },
      {
        title: 'Automated Timesheet PDF Parsing',
        desc: 'Developed an automated PDF extraction pipeline converting attendance records directly into MongoDB documents without manual typing.'
      },
      {
        title: 'Soft-Delete Data Recovery Lifecycle',
        desc: 'Created Employee Trash Bin, one-click restore, and permanent purge flows to prevent accidental data loss in production.'
      }
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC Middleware', 'Tailwind CSS'],
    evidenceProof: 'Internal Enterprise Production System deployed for Dindia corporate operations.'
  },
  {
    id: 'commercial-websites',
    category: 'websites',
    title: 'High-Performance Commercial Client Platforms',
    tag: 'Websites & Frontend Architecture',
    icon: <VscBrowser size={22} className="text-emerald-400" />,
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
    glowColor: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    metrics: [
      { label: 'Deployments', val: '3 Commercial' },
      { label: 'Device Support', val: '320px–1440px' },
      { label: 'Performance', val: '95+ Lighthouse' }
    ],
    summary: 'Engineered responsive commercial websites featuring fluid mobile layouts, rich media showcases, on-page SEO, and interactive APIs.',
    architecturalPillars: [
      {
        title: 'Dindia Corporate Platform (dindiaplus.com)',
        desc: 'Developed official corporate portal with Vite bundling, business offerings showcase, and automated continuous deployment.'
      },
      {
        title: 'Dindia Infratech Real-Estate Portal',
        desc: 'Built property catalog platform with interactive photo galleries, property filters, inquiry intake, and Google Maps integration.'
      },
      {
        title: 'Destination Technologies Platform',
        desc: 'Engineered an ed-tech platform featuring placement statistics dashboards, recruiter partner marquee, and course catalogs.'
      },
      {
        title: 'SEO & Core Web Vitals Optimization',
        desc: 'Implemented on-page meta tags, OpenGraph previews, semantic HTML5 structure, and mobile-first fluid CSS architecture.'
      }
    ],
    techStack: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'Google Maps API', 'Bootstrap'],
    evidenceProof: 'Live commercial deployments at dindiaplus.com and Destination Tech on Vercel.',
    liveUrl: 'https://www.dindiaplus.com/'
  },
  {
    id: 'api-development',
    category: 'api',
    title: 'Scalable RESTful API Architecture & Security',
    tag: 'API Development & Backend Systems',
    icon: <VscShield size={22} className="text-purple-400" />,
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    borderColor: 'border-purple-500/30 hover:border-purple-400/60',
    glowColor: 'from-purple-500/20 via-pink-500/10 to-transparent',
    metrics: [
      { label: 'API Standards', val: 'RESTful / JSON' },
      { label: 'Auth Method', val: 'JWT & Bearer Tokens' },
      { label: 'Payments', val: 'Razorpay Verified' }
    ],
    summary: 'Designed and implemented secure REST API endpoints, JWT token verification, database schemas, and payment gateway integrations.',
    architecturalPillars: [
      {
        title: 'JWT Authentication & Security Middleware',
        desc: 'Built stateless authentication with token verification, expiration handling, password hashing, and role verification middleware.'
      },
      {
        title: 'Razorpay Payment Gateway Integration',
        desc: 'Engineered end-to-end payment flows with HMAC signature verification, webhook listeners, and transaction status recording.'
      },
      {
        title: 'Relational & Document Database Modeling',
        desc: 'Designed normalized schemas in MySQL and document structures in MongoDB with indexes for high query performance.'
      },
      {
        title: 'Automated Postman Test Suites & Validation',
        desc: 'Constructed comprehensive API request validation, centralized error responses, and automated Postman test suites.'
      }
    ],
    techStack: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'JWT', 'Razorpay', 'Postman'],
    evidenceProof: 'Production-level APIs for Deffotech backends, Pasovit Task Manager, and MERN email services.'
  },
  {
    id: 'devops-performance',
    category: 'devops',
    title: 'Performance Engineering, CI/CD & Deployments',
    tag: 'DevOps & Performance Improvements',
    icon: <VscRocket size={22} className="text-amber-400" />,
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    borderColor: 'border-amber-500/30 hover:border-amber-400/60',
    glowColor: 'from-amber-500/20 via-orange-500/10 to-transparent',
    metrics: [
      { label: 'Bundle Compression', val: '~65% Reduced' },
      { label: 'Deployment', val: 'Automated CI/CD' },
      { label: 'Framerate', val: '60 FPS 3D' }
    ],
    summary: 'Automated continuous deployment workflows, optimized frontend bundle sizes, and ensured zero-rerender performance.',
    architecturalPillars: [
      {
        title: 'Automated GitHub Actions CI/CD to Hostinger',
        desc: 'Established continuous integration and deployment pipelines triggering automated builds and uploads upon git push.'
      },
      {
        title: 'React Code-Splitting & Lazy Loading',
        desc: 'Implemented React.lazy and Suspense boundaries for all tabs, 3D scenes, and terminal modules, dropping initial bundle to ~128 kB gzip.'
      },
      {
        title: 'Zero-Rerender 3D & Canvas Architecture',
        desc: 'Engineered CardTilt3D, SimpleParticleField, and CursorSpotlight using DOM refs and requestAnimationFrame to eliminate React state lag.'
      },
      {
        title: 'WebP Asset Optimization & Caching',
        desc: 'Converted heavy screenshots to WebP format with native lazy loading and async decoding, boosting mobile responsiveness.'
      }
    ],
    techStack: ['GitHub Actions', 'Hostinger', 'Vercel', 'Vite Bundler', 'Three.js Cleanup', 'WebP'],
    evidenceProof: 'Automated deployment pipelines to Hostinger/Vercel and sub-second bundle performance.'
  }
];

const EngineeringContributions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCards, setExpandedCards] = useState({
    'erp-modules': true,
    'commercial-websites': false,
    'api-development': false,
    'devops-performance': false
  });

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredContributions = selectedCategory === 'all'
    ? CONTRIBUTIONS
    : CONTRIBUTIONS.filter(c => c.category === selectedCategory);

  return (
    <div className="mb-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-vscode-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              14. Engineering Contributions
            </span>
            <span className="text-xs text-vscode-text/60 font-mono">
              Systems · APIs · Performance · DevOps
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-vscode-text tracking-tight">
            Evidence-Based Contributions
          </h2>
          <p className="text-xs md:text-sm text-vscode-text/70 mt-1 max-w-xl">
            Websites, ERP modules, API development, performance improvements, and deployment work presented in verifiable contribution cards.
          </p>
        </div>

        {/* Total Metric Count */}
        <div className="self-start sm:self-center px-3.5 py-1.5 rounded-lg bg-vscode-bg border border-vscode-border text-xs font-mono text-vscode-text/80">
          Showing <span className="font-bold text-vscode-accent">{filteredContributions.length}</span> of {CONTRIBUTIONS.length} Core Pillars
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {CONTRIBUTION_CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                isActive
                  ? 'bg-vscode-accent text-white font-semibold shadow-md shadow-vscode-accent/20'
                  : 'bg-vscode-bg hover:bg-vscode-hover text-vscode-text/70 hover:text-vscode-text border border-vscode-border'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Contributions Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredContributions.map((item, index) => {
          const isExpanded = !!expandedCards[item.id];

          return (
            <motion.div
              key={item.id}
              data-framer-motion="true"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.25), ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <CardTilt3D maxTilt={4} className="h-full">
              <div 
                className={`relative rounded-xl bg-vscode-bg/90 backdrop-blur-md border ${item.borderColor} transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl flex flex-col h-full`}
              >
                {/* Background top glow */}
                <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${item.glowColor} pointer-events-none`} />

                {/* Card Top Banner */}
                <div className="relative p-5 pb-3">
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                        {item.icon}
                      </div>
                      <div>
                        <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border ${item.badgeColor}`}>
                          {item.tag}
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-vscode-text mt-1 leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs md:text-sm text-vscode-text/80 mt-2 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Evidence Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 mt-4 p-2.5 rounded-lg bg-black/30 border border-white/5">
                    {item.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-[11px] font-mono font-bold text-vscode-text truncate">
                          {metric.val}
                        </div>
                        <div className="text-[10px] text-vscode-text/60 uppercase font-mono mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architectural Breakdown (Expandable Details) */}
                <div className="px-5 py-3 flex-1">
                  <div className="flex items-center justify-between pt-2 border-t border-vscode-border/50">
                    <button
                      type="button"
                      onClick={() => toggleCard(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-vscode-accent hover:text-blue-400 transition-colors py-1"
                    >
                      <span>{isExpanded ? 'Hide Architecture Evidence' : 'View Architecture Evidence (4)'}</span>
                      {isExpanded ? <VscChevronUp size={14} /> : <VscChevronDown size={14} />}
                    </button>

                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:underline"
                      >
                        <span>Live Site</span>
                        <VscLinkExternal size={12} />
                      </a>
                    )}
                  </div>

                  {/* Expanded Pillar Details */}
                  {isExpanded && (
                    <div className="mt-3.5 space-y-2.5 animate-fadeIn">
                      {item.architecturalPillars.map((pillar, pIdx) => (
                        <div 
                          key={pIdx}
                          className="p-2.5 rounded-lg bg-vscode-hover/40 border border-vscode-border/40 text-xs"
                        >
                          <div className="flex items-start gap-2">
                            <VscPass className="text-emerald-400 flex-shrink-0 mt-0.5" size={13} />
                            <div>
                              <div className="font-bold text-vscode-text font-mono text-[11px]">
                                {pillar.title}
                              </div>
                              <div className="text-vscode-text/75 text-[11px] mt-0.5 leading-relaxed">
                                {pillar.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer: Tech Stack & Evidence Reference */}
                <div className="p-5 pt-3 border-t border-vscode-border/50 bg-black/10 mt-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {item.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-vscode-hover/80 text-vscode-text/80 border border-vscode-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Evidence Proof Line */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-vscode-text/60">
                    <VscCheck size={13} className="text-emerald-400 flex-shrink-0" />
                    <span className="truncate">Evidence: {item.evidenceProof}</span>
                  </div>
                </div>
              </div>
            </CardTilt3D>
          </motion.div>
        );
        })}
      </div>
    </div>
  );
};

export default EngineeringContributions;
