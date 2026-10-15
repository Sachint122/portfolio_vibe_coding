import React, { useMemo, Suspense, useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import usePortfolioStore from '../../store/portfolioStore';
import WelcomeSection from '../sections/WelcomeSection';
import LoadingSpinner from './LoadingSpinner';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

const AboutSection = React.lazy(() => import('../sections/AboutSection'));
const SkillsSection = React.lazy(() => import('../sections/SkillsSection'));
const ExperienceSection = React.lazy(() => import('../sections/ExperienceSection'));
const ProjectsSection = React.lazy(() => import('../sections/ProjectsSection'));
const ContactSection = React.lazy(() => import('../sections/ContactSection'));
const ResumeSection = React.lazy(() => import('../sections/ResumeSection'));
const NotFound = React.lazy(() => import('../sections/NotFound'));

/**
 * CodeEditor - Main Editor Area
 * Features smooth scrolling, an interactive floating scroll-down / top controller,
 * a thin cyan-violet scroll progress bar, and lightweight GPU-composited scroll-reveal animations.
 */
const CodeEditor = React.memo(() => {
  const { activeTabId, openTabs } = usePortfolioStore();
  const scrollContainerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  // High-performance Framer Motion scroll tracker bound directly to editor container
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  const activeTab = useMemo(() => openTabs.find((tab) => tab.id === activeTabId), [openTabs, activeTabId]);

  // Check scroll capabilities with ResizeObserver for dynamic Suspense chunks
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScrollable = () => {
      const hasScroll = container.scrollHeight > container.clientHeight + 40;
      setCanScroll(hasScroll);
    };

    checkScrollable();

    const handleScroll = () => {
      const scrolled = container.scrollTop > 120;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
      checkScrollable();
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScrollable);

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        checkScrollable();
      });
      resizeObserver.observe(container);
    }

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollable);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [activeTabId]);

  // Smooth Interactive Scroll Reveal Observer across all pages
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Reset scroll to top on tab switch
    container.scrollTo({ top: 0, behavior: 'instant' });
    setIsScrolled(false);

    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-scroll-revealed');
            entry.target.classList.remove('scroll-reveal-init');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: container,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      }
    );

    const setupObserver = () => {
      // Target top-level section blocks and containers, avoiding conflict with Framer Motion cards
      const candidates = container.querySelectorAll(
        'section, article, [data-scroll-reveal], .scroll-reveal-item, .space-y-6 > div, .space-y-8 > div, .space-y-12 > div, .space-y-14 > div'
      );

      candidates.forEach((el) => {
        // Skip elements or containers already managed by Framer Motion stagger or CardTilt3D
        if (el.closest('[data-framer-motion]') || el.classList.contains('no-scroll-reveal')) {
          return;
        }
        const rect = el.getBoundingClientRect();
        // Reveal elements already in initial viewport immediately
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('is-scroll-revealed');
        } else {
          el.classList.add('scroll-reveal-init');
          observer.observe(el);
        }
      });
    };

    const timer1 = setTimeout(setupObserver, 150);
    const timer2 = setTimeout(setupObserver, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
    };
  }, [activeTabId]);

  const handleScrollAction = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (isScrolled) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({
        top: Math.min(window.innerHeight * 0.7, 520),
        behavior: 'smooth'
      });
    }
  };

  const renderContent = () => {
    if (!activeTab) {
      return <WelcomeSection />;
    }

    switch (activeTab.type) {
      case 'welcome':
        return <WelcomeSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'project':
        return <ProjectsSection projectId={activeTab.projectId} />;
      case 'all-projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      case 'all-resumes':
        return <ResumeSection />;
      case 'single-resume':
        return <ResumeSection resumeId={activeTab.resumeId} />;
      case 'resume':
        return <ResumeSection />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Thin cyan-violet scroll-progress indicator at top of viewport */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(56,189,248,0.7)] z-40 pointer-events-none will-change-transform"
        aria-hidden="true"
      />

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="h-full w-full overflow-y-auto scroll-smooth bg-vscode-bg pb-[80px] md:pb-6"
      >
        <Suspense fallback={<LoadingSpinner />}>
          {renderContent()}
        </Suspense>
      </div>

      {/* Interactive Floating Scroll Down / Top Circular Button */}
      {canScroll && (
        <div
          className={`absolute bottom-6 right-6 md:bottom-7 md:right-8 z-30 pointer-events-auto transition-all duration-300 ease-out ${
            isScrolled
              ? 'opacity-85 hover:opacity-100 scale-100'
              : 'opacity-90 hover:opacity-100 animate-float-bounce'
          }`}
        >
          <div className="relative group flex items-center justify-center">
            <button
              type="button"
              onClick={handleScrollAction}
              className="tactile-btn w-9 h-9 rounded-full bg-vscode-sidebar/95 hover:bg-vscode-hover text-vscode-text hover:text-vscode-accent border border-vscode-border/90 shadow-[0_4px_20px_rgba(0,0,0,0.65)] backdrop-blur-md flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-150"
              aria-label={isScrolled ? 'Scroll to top' : 'Scroll down to explore'}
            >
              {isScrolled ? (
                <VscChevronUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <VscChevronDown size={18} className="transition-transform group-hover:translate-y-0.5 animate-bounce-subtle" />
              )}
            </button>

            {/* Micro Hover Tooltip */}
            <span className="absolute bottom-11 right-0 px-2 py-1 bg-vscode-sidebar/95 text-white text-[11px] font-medium rounded-md shadow-xl border border-vscode-border/80 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-150 pointer-events-none whitespace-nowrap backdrop-blur-sm">
              {isScrolled ? 'Back to top' : 'Scroll down'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
});

export default CodeEditor;