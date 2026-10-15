import React, { useState } from 'react';
import { VscLinkExternal, VscBrowser, VscDeviceMobile, VscCheck, VscGlobe } from 'react-icons/vsc';
import CardTilt3D from '../3d/CardTilt3D';
import { portfolioData } from '../../data/portfolioData';

const getResponsiveSites = () => {
  const corporate = portfolioData.projects.find(p => p.id === 'dindia-website') || {};
  const infratech = portfolioData.projects.find(p => p.id === 'dindia-infratech') || {};

  return [
    {
      id: 'dindia-website',
      title: corporate.title || 'Dindia Corporate Website',
      subtitle: 'Official Company Digital Headquarters',
      url: corporate.live || 'https://www.dindiaplus.com/',
      desktopImage: corporate.image || '/images/dindia-website.webp',
      mobileImage: '/images/dindia-website-features.webp',
      description: corporate.description || 'Official company website designed and developed to establish Dindia’s digital footprint with responsive layouts and automated deployment.',
      techStack: corporate.techStack || ['React.js', 'Vite', 'Tailwind CSS', 'GitHub Actions', 'Hostinger Cloud'],
      responsiveHighlights: [
        'Fluid Breakpoints: Seamless responsiveness across 320px mobile to 1440px desktop viewports',
        'Asset Caching: WebP converted imagery and lazy loading for sub-second mobile page loads',
        'SEO Architecture: Structured semantic HTML, OpenGraph social meta tags, and high Core Web Vitals',
        'Continuous Delivery: Zero-downtime GitHub Actions workflow compiling on main push'
      ]
    },
    {
      id: 'dindia-infratech',
      title: infratech.title || 'Dindia Infratech Real Estate',
      subtitle: 'Commercial Property & Geolocation Portal',
      url: infratech.live || 'https://infratech.dindiaplus.com/',
      desktopImage: infratech.image || '/images/dindia-infratech.webp',
      mobileImage: '/images/dindia-infratech-properties.webp',
      description: infratech.description || 'Real estate and property showcase website featuring dynamic property listings and Google Maps geolocation integration.',
      techStack: infratech.techStack || ['React.js', 'Vite', 'Tailwind CSS', 'Google Maps API', 'Hostinger'],
      responsiveHighlights: [
        'Adaptive Property Grids: 1-column mobile card view expanding to 3-column desktop layout',
        'Touch-Optimized Maps: Interactive Google Maps integration with touch gestures and landmark pins',
        'Image Optimization: High-resolution property photography served with lazy decoding',
        'Fast Lead Inquiries: Integrated modal inquiry form accessible with 1-click on mobile devices'
      ]
    }
  ];
};

const ResponsiveWebsitePreview = ({ initialSiteId, showSiteSwitcher = true }) => {
  const sites = getResponsiveSites();
  const defaultIndex = initialSiteId ? Math.max(0, sites.findIndex(s => s.id === initialSiteId)) : 0;
  const [activeSiteIndex, setActiveSiteIndex] = useState(defaultIndex);
  const [deviceMode, setDeviceMode] = useState('both'); // 'desktop' | 'mobile' | 'both'

  const site = sites[activeSiteIndex] || sites[0];

  return (
    <div className="mb-12 rounded-2xl bg-gradient-to-b from-vscode-sidebar/90 via-vscode-bg to-vscode-sidebar/90 border border-vscode-border p-4 md:p-6 shadow-xl">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-vscode-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">📱</span>
            <h3 className="text-lg md:text-xl font-bold text-vscode-text">
              Responsive Website Preview
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Live Production
            </span>
          </div>
          <p className="text-xs md:text-sm text-vscode-text/60">
            Multi-device desktop & mobile inspection for live client platforms
          </p>
        </div>

        {/* Site Switcher + Viewport Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Site Selector */}
          {showSiteSwitcher && (
            <div className="flex rounded-lg bg-vscode-bg p-1 border border-vscode-border">
              {sites.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSiteIndex(idx)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
                    activeSiteIndex === idx
                      ? 'bg-vscode-accent text-white shadow'
                      : 'text-vscode-text/70 hover:text-vscode-text hover:bg-vscode-hover'
                  }`}
                >
                  {s.title.split(' ')[1]}
                </button>
              ))}
            </div>
          )}

          {/* Device Toggle */}
          <div className="flex rounded-lg bg-vscode-bg p-1 border border-vscode-border">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-vscode-hover text-vscode-accent border border-vscode-accent/40 font-bold'
                  : 'text-vscode-text/70 hover:text-vscode-text'
              }`}
              title="Desktop View"
            >
              <VscBrowser size={14} />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-vscode-hover text-vscode-accent border border-vscode-accent/40 font-bold'
                  : 'text-vscode-text/70 hover:text-vscode-text'
              }`}
              title="Mobile View"
            >
              <VscDeviceMobile size={14} />
              <span className="hidden sm:inline">Mobile</span>
            </button>
            <button
              onClick={() => setDeviceMode('both')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono transition-all ${
                deviceMode === 'both'
                  ? 'bg-vscode-hover text-vscode-accent border border-vscode-accent/40 font-bold'
                  : 'text-vscode-text/70 hover:text-vscode-text'
              }`}
              title="Dual View"
            >
              <span>💻 + 📱</span>
              <span className="hidden sm:inline">Dual</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Mockups Frame */}
      <div className="relative mb-6 rounded-xl bg-vscode-bg/90 p-4 md:p-8 border border-vscode-border/80 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-vscode-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 relative z-10">
          {/* Desktop Laptop Mockup */}
          {(deviceMode === 'desktop' || deviceMode === 'both') && (
            <CardTilt3D maxTilt={4} className={deviceMode === 'both' ? 'flex-1 w-full max-w-2xl' : 'w-full max-w-4xl'}>
              <div className="rounded-xl overflow-hidden border border-vscode-border/90 bg-[#1e1e1e] shadow-2xl">
                {/* Browser Chrome Header */}
                <div className="bg-[#2d2d2d] px-3 py-2 flex items-center justify-between border-b border-vscode-border/40">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="flex-1 max-w-xs mx-3 px-2 py-0.5 bg-[#1e1e1e] rounded text-[11px] font-mono text-vscode-text/60 flex items-center gap-1.5 truncate border border-white/5">
                    <span className="text-emerald-400">🔒</span>
                    <span className="truncate">{site.url}</span>
                  </div>
                  <div className="text-[10px] font-mono text-vscode-text/40">1440 × 900</div>
                </div>

                {/* Desktop Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-vscode-bg">
                  <img
                    src={site.desktopImage}
                    alt={`${site.title} Desktop`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] font-mono text-white/90 border border-white/10 flex items-center gap-1">
                    <VscBrowser size={12} className="text-cyan-400" />
                    <span>Desktop Breakpoint (≥1024px)</span>
                  </div>
                </div>
              </div>
            </CardTilt3D>
          )}

          {/* Mobile Phone Mockup */}
          {(deviceMode === 'mobile' || deviceMode === 'both') && (
            <CardTilt3D maxTilt={6} className={deviceMode === 'both' ? 'w-[260px] md:w-[280px] flex-shrink-0' : 'w-full max-w-xs'}>
              <div className="rounded-[32px] p-2 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 border-2 border-gray-600/80 shadow-2xl relative">
                {/* Speaker Notch / Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-900 mr-2 border border-gray-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-900/60" />
                </div>

                {/* Screen Bezel */}
                <div className="rounded-[24px] overflow-hidden bg-black border border-gray-950 aspect-[9/18] relative">
                  <img
                    src={site.mobileImage}
                    alt={`${site.title} Mobile`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top pt-5 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/80 backdrop-blur-sm rounded-full text-[9px] font-mono text-white/90 border border-white/10 flex items-center gap-1 whitespace-nowrap">
                    <VscDeviceMobile size={11} className="text-pink-400" />
                    <span>Mobile (390px)</span>
                  </div>
                </div>
              </div>
            </CardTilt3D>
          )}
        </div>
      </div>

      {/* Project Details & Responsive Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Left Column: Description & Tags */}
        <div className="lg:col-span-7 space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-base md:text-lg font-bold text-vscode-text">
                {site.title}
              </h4>
              <span className="text-xs font-mono text-vscode-text/50">
                ({site.subtitle})
              </span>
            </div>
            <p className="text-xs md:text-sm text-vscode-text/75 leading-relaxed">
              {site.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {site.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-vscode-hover border border-vscode-border text-vscode-text/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Engineering Highlights & Live Link */}
        <div className="lg:col-span-5 bg-vscode-hover/50 p-4 rounded-xl border border-vscode-border/80 flex flex-col justify-between h-full">
          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-vscode-accent mb-2.5 flex items-center gap-1.5">
              <VscGlobe size={14} />
              <span>Responsive Architecture Highlights</span>
            </h5>
            <ul className="space-y-1.5">
              {site.responsiveHighlights.map((hl, idx) => (
                <li key={idx} className="text-xs text-vscode-text/75 flex items-start gap-1.5 leading-snug">
                  <VscCheck size={13} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-vscode-border/60 flex items-center justify-between">
            <span className="text-[11px] font-mono text-vscode-text/50 truncate max-w-[200px]">
              {site.url}
            </span>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-vscode-accent hover:bg-vscode-accent/90 text-white rounded-lg text-xs font-semibold font-mono shadow-md transition-all active:scale-95"
            >
              <span>Launch Live Site</span>
              <VscLinkExternal size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ResponsiveWebsitePreview);
