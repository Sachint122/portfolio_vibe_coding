import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VscLayers } from 'react-icons/vsc';
import CardTilt3D from '../3d/CardTilt3D';

const ARCHITECTURE_LAYERS = [
  {
    id: 'react',
    step: 1,
    name: 'React.js',
    category: 'Client Layer',
    icon: '⚛️',
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/40',
    summary: 'Single Page Application (SPA) client rendering responsive views, state management, and 3D ambient layers.',
    actualTools: ['React.js', 'Tailwind CSS', 'Zustand State Store', 'Three.js (WebGL)', 'Vite / CRA', 'Framer Motion'],
    dataFlow: 'Captures user interactions → Manages local state → Sends authenticated REST requests with JWT headers.',
    productionProof: 'Destination Technologies, Dindia Infratech & Portfolio UI'
  },
  {
    id: 'rest-api',
    step: 2,
    name: 'REST API',
    category: 'Gateway & Protocol',
    icon: '📡',
    color: 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/40',
    summary: 'Contract-driven HTTP endpoints with Bearer token validation, CORS rules, and centralized error sanitization.',
    actualTools: ['RESTful Standards', 'JSON Web Tokens (JWT)', 'Axios & Fetch', 'CORS Middleware', 'Postman Suites'],
    dataFlow: 'Validates Authorization headers → Deserializes JSON payloads → Routes to targeted controller handlers.',
    productionProof: 'Dindia ERP API Gateway & SendMail REST Endpoints'
  },
  {
    id: 'node',
    step: 3,
    name: 'Node.js & Express',
    category: 'Application Server',
    icon: '🟢',
    color: 'from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/40',
    summary: 'Asynchronous event-driven backend enforcing business rules, multi-tier RBAC route guards, and workflow services.',
    actualTools: ['Node.js (LTS)', 'Express.js', '4-Tier RBAC Middleware', 'bcrypt.js', 'Error Middleware'],
    dataFlow: 'Enforces permission barriers (Super Admin, HR, Employee, Telecaller) → Processes logic → Queries DB.',
    productionProof: 'Dindia Enterprise ERP Backend & Deffotech APIs'
  },
  {
    id: 'mongodb',
    step: 4,
    name: 'MongoDB & MySQL',
    category: 'Data Persistence',
    icon: '🗄️',
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/40',
    summary: 'High-availability document and relational databases with schema validation, indexing, and soft-delete models.',
    actualTools: ['MongoDB', 'Mongoose ODM', 'MySQL Relational DB', 'Compound Indexing', 'Soft-Delete (Trash/Restore)'],
    dataFlow: 'Executes optimized indexed queries → Enforces schema integrity → Persists workforce & transactional data.',
    productionProof: 'Dindia ERP Workforce Database & Library Management MySQL'
  },
  {
    id: 'deployment',
    step: 5,
    name: 'Deployment',
    category: 'CI/CD & Cloud',
    icon: '🚀',
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/40',
    summary: 'Automated continuous integration and deployment pipelines pushing production builds to Hostinger and Vercel.',
    actualTools: ['GitHub Actions', 'Hostinger Cloud', 'Vercel Serverless', 'Git Version Control', 'Gzip / WebP Caching'],
    dataFlow: 'Git push triggers GitHub Actions runner → Runs lint & test → Deploys production bundle to cloud servers.',
    productionProof: 'Dindia Corporate Website CI/CD & Destination Technologies on Vercel'
  }
];

const FullStackArchitectureMap = () => {
  const [activeLayerId, setActiveLayerId] = useState('react');
  const activeLayer = ARCHITECTURE_LAYERS.find(l => l.id === activeLayerId) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-2 border-b border-vscode-border/60">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗺️</span>
          <h3 className="text-lg md:text-xl font-bold text-vscode-text">Full-Stack Architecture Map</h3>
        </div>
        <span className="text-xs font-mono text-vscode-text/60">
          Click any layer to inspect data flow & production tools
        </span>
      </div>

      {/* Clickable Pipeline Flow Buttons with Arrow Connectors */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        {ARCHITECTURE_LAYERS.map((layer) => {
          const isSelected = layer.id === activeLayer.id;
          return (
            <motion.div
              key={layer.id}
              data-framer-motion="true"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: (layer.step - 1) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <button
                type="button"
                onClick={() => setActiveLayerId(layer.id)}
                className={`w-full h-full p-3 rounded-xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-vscode-hover border-vscode-accent ring-1 ring-vscode-accent/50 shadow-lg scale-102'
                    : 'bg-vscode-bg/60 border-vscode-border hover:border-vscode-accent/40 hover:bg-vscode-hover/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{layer.icon}</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${layer.color}`}>
                    L{layer.step}
                  </span>
                </div>
                <h4 className="text-xs md:text-sm font-bold text-vscode-text truncate">{layer.name}</h4>
                <p className="text-[10px] text-vscode-text/60 truncate font-mono">{layer.category}</p>

                {/* Active Underline */}
                {isSelected && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-vscode-accent" />
                )}
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Layer Deep-Dive Inspector */}
      <motion.div
        data-framer-motion="true"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <CardTilt3D maxTilt={3}>
          <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-b from-vscode-sidebar/95 via-vscode-bg to-vscode-sidebar/95 border border-vscode-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b border-vscode-border/60">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2.5 rounded-xl bg-vscode-hover border border-vscode-border">
                  {activeLayer.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-vscode-accent">
                      LAYER 0{activeLayer.step} OF 05
                    </span>
                    <span className="text-vscode-text/40">•</span>
                    <span className="text-xs font-mono text-vscode-text/60">
                      {activeLayer.category}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-vscode-text">
                    {activeLayer.name} Architecture
                  </h4>
                </div>
              </div>

              <div className="text-left md:text-right">
                <span className="text-[10px] font-mono text-vscode-text/50 uppercase tracking-wider block">
                  Production Implementation
                </span>
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {activeLayer.productionProof}
                </span>
              </div>
            </div>

            {/* Layer Summary */}
            <p className="text-xs md:text-sm text-vscode-text/80 leading-relaxed mb-4">
              {activeLayer.summary}
            </p>

            {/* Data Flow Pipeline Box */}
            <div className="p-3.5 rounded-xl bg-vscode-hover/70 border border-vscode-border/70 mb-4">
              <h5 className="text-xs font-mono uppercase tracking-wider text-vscode-accent mb-1.5 flex items-center gap-1.5 font-semibold">
                <VscLayers size={14} />
                <span>Data Flow & Boundary Responsibilities:</span>
              </h5>
              <p className="text-xs text-vscode-text/90 font-mono leading-relaxed">
                {activeLayer.dataFlow}
              </p>
            </div>

            {/* Actual Tools Applied in Production */}
            <div>
              <span className="block text-[11px] font-mono text-vscode-text/60 mb-2 uppercase tracking-wider">
                Actual Tools & Packages Applied:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeLayer.actualTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-vscode-bg border border-vscode-border text-vscode-text font-medium hover:border-vscode-accent transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardTilt3D>
      </motion.div>
    </div>
  );
};

export default React.memo(FullStackArchitectureMap);
