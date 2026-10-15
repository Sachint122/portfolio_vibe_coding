import React, { useState } from 'react';
import { 
  VscPulse, 
  VscMail, 
  VscGithub, 
  VscCopy, 
  VscCheck, 
  VscLinkExternal
} from 'react-icons/vsc';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import CardTilt3D from '../3d/CardTilt3D';

const ConnectionStatusPanel = ({ about = {} }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (about.email) {
      navigator.clipboard.writeText(about.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const statusMetrics = [
    {
      label: 'Availability Status',
      value: '🟢 Immediate Hire',
      desc: 'Full-Time & Commercial Roles',
      accent: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
    },
    {
      label: 'Preferred Roles',
      value: 'Full Stack · MERN · Backend',
      desc: 'Enterprise & Scalable Web Apps',
      accent: 'border-blue-500/30 bg-blue-500/10 text-blue-400'
    },
    {
      label: 'Response SLA',
      value: '< 24 Hours',
      desc: 'Guaranteed Quick Turnaround',
      accent: 'border-purple-500/30 bg-purple-500/10 text-purple-400'
    },
    {
      label: 'Location & Zone',
      value: 'Varanasi, India',
      desc: 'IST · UTC+5:30 (Global Remote Ready)',
      accent: 'border-amber-500/30 bg-amber-500/10 text-amber-400'
    }
  ];

  const channels = [
    {
      id: 'email',
      name: 'Direct Email Dispatch',
      value: about.email || 'sachintiwari.751858@gmail.com',
      status: 'Inbound Open',
      statusColor: 'text-emerald-400',
      icon: <VscMail className="text-blue-400" size={18} />,
      link: `mailto:${about.email || 'sachintiwari.751858@gmail.com'}`,
      isCopyable: true
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Professional Network',
      value: 'sachin-tiwari-javafullstack',
      status: 'Verified Profile',
      statusColor: 'text-blue-400',
      icon: <FaLinkedin className="text-blue-400" size={17} />,
      link: about.linkedin || 'https://www.linkedin.com/in/sachin-tiwari-javafullstack/',
      isCopyable: false
    },
    {
      id: 'github',
      name: 'GitHub Repositories',
      value: 'Sachint122',
      status: 'Active Repositories',
      statusColor: 'text-purple-400',
      icon: <VscGithub className="text-purple-400" size={18} />,
      link: about.github || 'https://github.com/Sachint122',
      isCopyable: false
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Instant Messaging',
      value: '+91 8081731062',
      status: 'Online Support',
      statusColor: 'text-emerald-400',
      icon: <FaWhatsapp className="text-emerald-400" size={18} />,
      link: `https://wa.me/${(about.whatsapp || '+918081731062').replace(/[^0-9]/g, '')}`,
      isCopyable: false
    }
  ];

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-vscode-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <VscPulse className="animate-spin text-emerald-400" size={13} />
              <span>18. Connection Status Panel</span>
            </span>
            <span className="text-xs text-vscode-text/60 font-mono">
              Live Network Telemetry
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-vscode-text tracking-tight">
            Live Availability & Channels
          </h2>
          <p className="text-xs md:text-sm text-vscode-text/70 mt-1 max-w-xl">
            Real-time contact channels, preferred role specializations, and verified availability telemetry.
          </p>
        </div>

        {/* Live Status Badge */}
        <div className="self-start sm:self-center flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PORTAL ACTIVE · ACCEPTING INQUIRIES</span>
        </div>
      </div>

      {/* Top 4 Telemetry Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        {statusMetrics.map((metric, idx) => (
          <CardTilt3D key={idx} maxTilt={4}>
            <div className={`p-4 rounded-xl border ${metric.accent} backdrop-blur-md shadow-md h-full flex flex-col justify-between`}>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-vscode-text/70 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm md:text-base font-bold text-vscode-text font-mono truncate">
                  {metric.value}
                </div>
              </div>
              <div className="text-[11px] text-vscode-text/60 font-mono mt-2 pt-2 border-t border-white/5">
                {metric.desc}
              </div>
            </div>
          </CardTilt3D>
        ))}
      </div>

      {/* Contact Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {channels.map((chan) => (
          <div 
            key={chan.id}
            className="p-4 md:p-5 rounded-xl bg-vscode-bg/90 border border-vscode-border hover:border-vscode-accent/50 transition-all duration-300 shadow-md group flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {chan.icon}
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-bold text-vscode-text">
                    {chan.name}
                  </h3>
                  <div className="text-xs font-mono text-vscode-text/75 truncate mt-0.5">
                    {chan.value}
                  </div>
                </div>
              </div>

              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/30 border border-white/10 ${chan.statusColor} flex-shrink-0`}>
                {chan.status}
              </span>
            </div>

            {/* Actions Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-vscode-border/50 text-xs font-mono">
              {chan.isCopyable ? (
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-vscode-text/80 hover:text-vscode-accent transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <VscCheck size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <VscCopy size={13} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              ) : (
                <span className="text-[11px] text-vscode-text/50">
                  Direct External Link
                </span>
              )}

              <a
                href={chan.link}
                target={chan.link.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-vscode-accent hover:text-blue-400 font-bold transition-colors ml-auto"
              >
                <span>Connect</span>
                <VscLinkExternal size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectionStatusPanel;
