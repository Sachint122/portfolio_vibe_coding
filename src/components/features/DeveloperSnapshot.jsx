import React from 'react';
import { VscCheck, VscBriefcase, VscRocket, VscShield, VscServerProcess } from 'react-icons/vsc';
import CardTilt3D from '../3d/CardTilt3D';

const DeveloperSnapshot = () => {
  const verifiedMetrics = [
    { label: 'Industry Experience', value: '1+ Yr', desc: 'Full-time & Internship', icon: '💼', color: 'from-blue-500/20 to-cyan-500/20 text-cyan-400' },
    { label: 'Production Projects', value: '10+', desc: 'Live apps & platforms', icon: '🚀', color: 'from-purple-500/20 to-pink-500/20 text-purple-400' },
    { label: 'RBAC Roles Built', value: '4 Tiers', desc: 'Admin, HR, Staff, Caller', icon: '🔐', color: 'from-emerald-500/20 to-green-500/20 text-emerald-400' },
    { label: 'CI/CD Pipelines', value: 'Automated', desc: 'GitHub Actions & Hostinger', icon: '⚡', color: 'from-amber-500/20 to-orange-500/20 text-amber-400' },
  ];

  const coreResponsibilities = [
    {
      title: 'Full-Stack ERP & Business Systems',
      desc: 'Architecting workforce management software, employee lifecycle workflows (soft-delete/restore), Daily Work Reports (DWR), and automated PDF parsing.',
      icon: <VscServerProcess className="text-vscode-accent" size={18} />
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      desc: 'Engineering multi-tenant access barriers, JWT token authorization, route guards, and granular permission sets across four distinct organization tiers.',
      icon: <VscShield className="text-green-400" size={18} />
    },
    {
      title: 'RESTful API Architecture & Databases',
      desc: 'Designing scalable Node.js/Express endpoints, centralized error handling, and robust database models across MongoDB/Mongoose and MySQL.',
      icon: <VscRocket className="text-purple-400" size={18} />
    },
    {
      title: 'SEO-Optimized Web Platforms & DevOps',
      desc: 'Building responsive commercial websites with Google Maps integration, high-resolution media galleries, Vite bundling, and automated GitHub Actions CI/CD.',
      icon: <VscBriefcase className="text-blue-400" size={18} />
    }
  ];

  return (
    <div className="mb-10">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-vscode-border/60">
        <span className="text-xl">📊</span>
        <h3 className="text-lg md:text-xl font-bold text-vscode-text">Developer Snapshot</h3>
        <span className="ml-auto text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          Verified Metrics
        </span>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
        {verifiedMetrics.map((metric, idx) => (
          <CardTilt3D key={idx} maxTilt={6}>
            <div className={`p-4 rounded-xl bg-gradient-to-br ${metric.color} border border-vscode-border hover:border-vscode-accent/50 transition-all shadow-md`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{metric.icon}</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-black/40 text-white border border-white/10">
                  {metric.value}
                </span>
              </div>
              <h4 className="text-xs md:text-sm font-semibold text-vscode-text truncate">{metric.label}</h4>
              <p className="text-[11px] text-vscode-text/60 mt-0.5 font-mono">{metric.desc}</p>
            </div>
          </CardTilt3D>
        ))}
      </div>

      {/* Core Responsibilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {coreResponsibilities.map((resp, idx) => (
          <CardTilt3D key={idx} maxTilt={4}>
            <div className="p-4 rounded-xl bg-vscode-hover/70 border border-vscode-border hover:border-vscode-accent/50 transition-all h-full flex flex-col justify-between">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-vscode-bg border border-vscode-border/80 flex-shrink-0 mt-0.5">
                  {resp.icon}
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-vscode-text mb-1 flex items-center gap-1.5">
                    <span>{resp.title}</span>
                  </h4>
                  <p className="text-xs md:text-sm text-vscode-text/70 leading-relaxed">
                    {resp.desc}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-vscode-border/40 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <VscCheck size={13} />
                <span>Production Proven</span>
              </div>
            </div>
          </CardTilt3D>
        ))}
      </div>
    </div>
  );
};

export default React.memo(DeveloperSnapshot);
