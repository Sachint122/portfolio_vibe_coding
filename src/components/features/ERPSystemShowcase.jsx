import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VscLinkExternal, VscShield, VscCheck, VscServerProcess, VscFilePdf, VscGraph } from 'react-icons/vsc';
import CardTilt3D from '../3d/CardTilt3D';
import { portfolioData } from '../../data/portfolioData';

const ERP_MODULES = [
  {
    id: 'dwr',
    name: 'Workforce Lifecycle & DWR',
    icon: '📋',
    tag: 'Core Operations',
    description: 'Empowers employees to submit structured Daily Work Reports (DWR) with task breakdowns, hour logging, and blocking issues.',
    features: [
      'Daily Work Report submission & validation',
      'Departmental task assignment & status badges',
      'Manager review, feedback & approval workflows',
      'Historical performance analytics & logs'
    ]
  },
  {
    id: 'rbac',
    name: '4-Tier Role-Based Access Control',
    icon: '🔐',
    tag: 'Security & Auth',
    description: 'Enterprise permission boundaries isolating Super Admin, HR Manager, Staff Employee, and Telecaller responsibilities.',
    features: [
      'Super Admin: Full ecosystem configuration & user management',
      'HR Manager: Employee onboarding, leaves, and attendance records',
      'Staff Employee: Self-service DWR, leave requests, and task boards',
      'Telecaller: Lead assignments, call tracking, and customer notes'
    ]
  },
  {
    id: 'attendance',
    name: 'Attendance & Automated PDF Parsing',
    icon: '📄',
    tag: 'Automation',
    description: 'Automates attendance ingestion by parsing PDF timesheets directly into MongoDB documents without manual data entry.',
    features: [
      'Automated PDF document parsing engine',
      'Real-time punch-in/out and overtime calculations',
      'Multi-level leave approval request pipeline',
      'Monthly attendance export for payroll processing'
    ]
  },
  {
    id: 'crm',
    name: 'CRM & Telecaller Lead Pipeline',
    icon: '📞',
    tag: 'Revenue & Sales',
    description: 'Dedicated calling interface enabling telecallers to log prospect calls, update lead statuses, and trigger followup reminders.',
    features: [
      'Lead assignment & distribution among agents',
      'Call outcome tagging (Interested, Followup, Converted, Lost)',
      'Lead history timeline & conversation notes',
      'Conversion rate analytics for management'
    ]
  },
  {
    id: 'invoicing',
    name: 'Billing & Invoice Generation',
    icon: '💳',
    tag: 'Finance',
    description: 'Centralized invoicing engine generating itemized tax invoices, tracking receivable payments, and managing customer accounts.',
    features: [
      'Dynamic invoice builder with tax calculation',
      'Payment tracking & outstanding dues alerts',
      'Customer billing history & statement logs',
      'Instant PDF invoice export & email delivery'
    ]
  },
  {
    id: 'soft-delete',
    name: 'Soft-Delete & Audit Archival',
    icon: '♻️',
    tag: 'Data Integrity',
    description: 'Non-destructive data management ensuring accidental deletions can be restored with full audit history.',
    features: [
      'Soft-delete flags across all collections',
      'Recycle bin / Trash view for Super Admins',
      '1-click restore or permanent purge workflows',
      'Complete audit trail of user modifications'
    ]
  }
];

const ROLES_MATRIX = [
  { role: 'Super Admin', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30', access: 'Complete Access', permissions: ['System Settings', 'All Modules', 'User Roles & Audits', 'Data Purge / Restore'] },
  { role: 'HR Manager', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30', access: 'Human Resources', permissions: ['Staff Onboarding', 'Attendance & Leaves', 'DWR Oversight', 'Payroll Export'] },
  { role: 'Staff Employee', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', access: 'Personal Workspace', permissions: ['Daily DWR Submission', 'Task Tracking', 'Leave Applications', 'Profile Settings'] },
  { role: 'Telecaller', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30', access: 'Sales & Inquiries', permissions: ['Assigned Leads', 'Call Logs & Notes', 'Status Updates', 'Daily Call Metrics'] },
];

const ARCH_SPECS = [
  {
    title: 'Stateless JWT Auth',
    icon: <VscShield className="text-cyan-400" size={16} />,
    desc: 'Secure Bearer tokens signed with HMAC SHA-256 containing user ID and role claims, validated per request by Express middleware.'
  },
  {
    title: 'MongoDB Schema & Indexes',
    icon: <VscServerProcess className="text-emerald-400" size={16} />,
    desc: 'Optimized Mongoose models with compound indexes on employeeId and createdAt for high-speed DWR queries.'
  },
  {
    title: 'Automated PDF Parsing',
    icon: <VscFilePdf className="text-pink-400" size={16} />,
    desc: 'Integrated document parsing scripts that extract text tables from attendance PDFs and bulk upsert into MongoDB.'
  },
  {
    title: 'Zero Redundancy APIs',
    icon: <VscGraph className="text-amber-400" size={16} />,
    desc: 'Standardized REST response shapes with client caching, eliminating redundant network calls across views.'
  }
];

const ERPSystemShowcase = () => {
  const [activeTab, setActiveTab] = useState('modules'); // 'modules' | 'rbac' | 'architecture' | 'workflow'
  const [selectedModule, setSelectedModule] = useState(ERP_MODULES[0]);

  const erpProject = portfolioData.projects.find(p => p.id === 'dindia-erp-system') || {};

  return (
    <motion.div
      initial={{ opacity: 0.95, borderColor: 'rgba(62, 62, 66, 0.6)' }}
      whileInView={{
        opacity: 1,
        borderColor: 'rgba(56, 189, 248, 0.45)',
        boxShadow: '0 0 32px rgba(56, 189, 248, 0.09)'
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 rounded-2xl bg-gradient-to-b from-vscode-sidebar/95 via-vscode-bg to-vscode-sidebar/95 border border-vscode-border p-4 md:p-8 shadow-2xl relative overflow-hidden"
    >
      {/* Top Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vscode-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-vscode-border/60 relative z-10">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-2xl">🏢</span>
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-vscode-accent/15 text-vscode-accent border border-vscode-accent/30">
              Enterprise Production System
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Active in Production
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-vscode-text">
            {erpProject.title || 'Dindia Enterprise ERP & Office Management Suite'}
          </h2>
          <p className="text-xs md:text-sm text-vscode-text/70 max-w-3xl mt-1.5 leading-relaxed">
            {erpProject.description || 'Centralized workforce management platform powering daily work report (DWR) submissions, role-based workflows, automated PDF attendance parsing, and revenue management across 4 organization tiers.'}
          </p>

          {/* Tech Stack Pills from portfolioData */}
          {erpProject.techStack && erpProject.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {erpProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-vscode-hover border border-vscode-border text-vscode-text/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Live System CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={erpProject.live || 'https://erp.dindiaplus.com/'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-vscode-accent hover:bg-vscode-accent/90 text-white rounded-xl text-sm font-semibold font-mono shadow-lg transition-all active:scale-95 hover:shadow-vscode-accent/30"
          >
            <span>Live Production ERP</span>
            <VscLinkExternal size={14} />
          </a>
        </div>
      </div>

      {/* Key Numbers Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
        <div className="p-3.5 rounded-xl bg-vscode-hover border border-vscode-border/70 text-center">
          <div className="text-xl md:text-2xl font-bold font-mono text-cyan-400">4 Tiers</div>
          <div className="text-[11px] font-mono text-vscode-text/60 mt-0.5">RBAC Permission Matrix</div>
        </div>
        <div className="p-3.5 rounded-xl bg-vscode-hover border border-vscode-border/70 text-center">
          <div className="text-xl md:text-2xl font-bold font-mono text-emerald-400">6 Modules</div>
          <div className="text-[11px] font-mono text-vscode-text/60 mt-0.5">Integrated Workflows</div>
        </div>
        <div className="p-3.5 rounded-xl bg-vscode-hover border border-vscode-border/70 text-center">
          <div className="text-xl md:text-2xl font-bold font-mono text-purple-400">Auto PDF</div>
          <div className="text-[11px] font-mono text-vscode-text/60 mt-0.5">Timesheet Extraction</div>
        </div>
        <div className="p-3.5 rounded-xl bg-vscode-hover border border-vscode-border/70 text-center">
          <div className="text-xl md:text-2xl font-bold font-mono text-amber-400">Soft-Delete</div>
          <div className="text-[11px] font-mono text-vscode-text/60 mt-0.5">Audit-Proof Archival</div>
        </div>
      </div>

      {/* Dashboard Screenshot Showcase */}
      <div className="mb-8">
        <CardTilt3D maxTilt={4}>
          <div className="rounded-xl overflow-hidden border border-vscode-border bg-vscode-hover shadow-2xl relative group">
            <div className="bg-[#1e1e1e] px-4 py-2 flex items-center justify-between border-b border-vscode-border/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-vscode-text/60">erp.dindiaplus.com — Production Workspace</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                SSL Secured
              </span>
            </div>
            <img
              src="/images/erp-system.webp"
              alt="Dindia Enterprise ERP Workspace"
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[460px] object-cover object-top hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </CardTilt3D>
      </div>

      {/* Interactive Feature Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 border-b border-vscode-border/60 [scrollbar-width:none]">
        <button
          onClick={() => setActiveTab('modules')}
          className={`px-4 py-2 rounded-lg text-xs md:text-sm font-mono font-medium transition-all ${
            activeTab === 'modules'
              ? 'bg-vscode-accent text-white shadow-md'
              : 'text-vscode-text/70 hover:text-vscode-text hover:bg-vscode-hover'
          }`}
        >
          📦 Core Modules ({ERP_MODULES.length})
        </button>
        <button
          onClick={() => setActiveTab('rbac')}
          className={`px-4 py-2 rounded-lg text-xs md:text-sm font-mono font-medium transition-all ${
            activeTab === 'rbac'
              ? 'bg-vscode-accent text-white shadow-md'
              : 'text-vscode-text/70 hover:text-vscode-text hover:bg-vscode-hover'
          }`}
        >
          🔐 User Roles (RBAC Matrix)
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-4 py-2 rounded-lg text-xs md:text-sm font-mono font-medium transition-all ${
            activeTab === 'architecture'
              ? 'bg-vscode-accent text-white shadow-md'
              : 'text-vscode-text/70 hover:text-vscode-text hover:bg-vscode-hover'
          }`}
        >
          ⚡ API & Architecture
        </button>
        <button
          onClick={() => setActiveTab('workflow')}
          className={`px-4 py-2 rounded-lg text-xs md:text-sm font-mono font-medium transition-all ${
            activeTab === 'workflow'
              ? 'bg-vscode-accent text-white shadow-md'
              : 'text-vscode-text/70 hover:text-vscode-text hover:bg-vscode-hover'
          }`}
        >
          🔄 Business Workflows
        </button>
      </div>

      {/* Tab 1: Core Modules */}
      {activeTab === 'modules' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Module Selector Chips */}
          <div className="lg:col-span-5 space-y-2">
            {ERP_MODULES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setSelectedModule(mod)}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                  selectedModule.id === mod.id
                    ? 'bg-vscode-hover border-vscode-accent shadow-md ring-1 ring-vscode-accent/50'
                    : 'bg-vscode-bg/60 border-vscode-border hover:bg-vscode-hover/50 hover:border-vscode-accent/30'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xl p-1.5 rounded-lg bg-vscode-bg border border-vscode-border">
                    {mod.icon}
                  </span>
                  <div className="min-w-0">
                    <h5 className="text-xs md:text-sm font-bold text-vscode-text truncate">
                      {mod.name}
                    </h5>
                    <span className="text-[10px] font-mono text-vscode-text/50">
                      {mod.tag}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-vscode-accent font-bold">→</span>
              </button>
            ))}
          </div>

          {/* Module Deep-Dive Inspector */}
          <div className="lg:col-span-7 p-5 rounded-xl bg-vscode-hover/70 border border-vscode-border shadow-lg">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-2xl p-2 rounded-xl bg-vscode-bg border border-vscode-border">
                {selectedModule.icon}
              </span>
              <div>
                <h4 className="text-base md:text-lg font-bold text-vscode-text">
                  {selectedModule.name}
                </h4>
                <span className="text-xs font-mono text-vscode-accent">
                  Module Category: {selectedModule.tag}
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-vscode-text/75 leading-relaxed mb-4">
              {selectedModule.description}
            </p>

            <h6 className="text-xs font-mono uppercase tracking-wider text-vscode-text/60 mb-2 flex items-center gap-1.5">
              <span>Integrated Capabilities:</span>
            </h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedModule.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-vscode-bg border border-vscode-border/70 flex items-start gap-2 text-xs text-vscode-text/80"
                >
                  <VscCheck size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: User Roles (RBAC Matrix) */}
      {activeTab === 'rbac' && (
        <div className="space-y-4">
          <p className="text-xs md:text-sm text-vscode-text/70 mb-4">
            A comprehensive Role-Based Access Control matrix engineered with Express route guard middleware, token inspection, and departmental isolation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ROLES_MATRIX.map((r, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-vscode-hover border border-vscode-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🛡️</span>
                    <h4 className="text-base font-bold text-vscode-text">{r.role}</h4>
                  </div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${r.badge}`}>
                    {r.access}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {r.permissions.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-vscode-text/80">
                      <VscCheck size={13} className="text-emerald-400" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: API & Architecture */}
      {activeTab === 'architecture' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ARCH_SPECS.map((spec, idx) => (
            <motion.div
              key={idx}
              data-framer-motion="true"
              initial={{ opacity: 0, y: 12, borderColor: 'rgba(62, 62, 66, 0.7)' }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                borderColor: 'rgba(56, 189, 248, 0.45)',
                boxShadow: '0 0 16px rgba(56, 189, 248, 0.10)'
              }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl bg-vscode-hover border flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-vscode-bg border border-vscode-border">
                    {spec.icon}
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-vscode-text">{spec.title}</h4>
                </div>
                <p className="text-xs md:text-sm text-vscode-text/75 leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tab 4: Business Workflows */}
      {activeTab === 'workflow' && (
        <div className="space-y-4">
          <p className="text-xs md:text-sm text-vscode-text/70 mb-4">
            Structured business pipeline linking employee work directly to managerial oversight, attendance verification, and executive business reports:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              { step: '01', title: 'Daily DWR Submission', actor: 'Staff / Telecaller', desc: 'Employee logs completed tasks, milestones, and customer interactions before end-of-day.' },
              { step: '02', title: 'Department Review', actor: 'Team Lead / Manager', desc: 'Manager evaluates DWR, flags blocking issues, and approves daily deliverable completion.' },
              { step: '03', title: 'Attendance Sync', actor: 'HR Automated Engine', desc: 'PDF timesheet parsing cross-checks biometric logs with DWR hours to verify employee presence.' },
              { step: '04', title: 'Executive Analytics', actor: 'Super Admin', desc: 'Aggregated analytics compute productivity metrics, department throughput, and monthly reports.' }
            ].map((wf, idx) => (
              <motion.div
                key={idx}
                data-framer-motion="true"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 rounded-xl bg-vscode-hover border border-vscode-border flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-bold font-mono text-vscode-accent mb-1">{wf.step}</div>
                  <h5 className="text-sm font-bold text-vscode-text mb-1">{wf.title}</h5>
                  <div className="text-[10px] font-mono text-vscode-accent mb-2">Actor: {wf.actor}</div>
                  <p className="text-xs text-vscode-text/70 leading-relaxed">{wf.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default React.memo(ERPSystemShowcase);
