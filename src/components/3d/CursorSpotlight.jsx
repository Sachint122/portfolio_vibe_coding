import React, { useEffect, useRef } from 'react';

/**
 * Feature 19: Cursor Spotlight
 * Subtle ambient radial glow moving softly around the cursor across editor and cards.
 * Zero React re-renders using ref, lerped requestAnimationFrame, and auto-sleep when stationary.
 */
const CursorSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices (pointer: coarse or hover: none) for peak mobile performance
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      (window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches)
    ) {
      return;
    }

    const el = spotlightRef.current;
    if (!el) return;

    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isRunning = false;
    let rafId = null;

    const render = () => {
      // Smooth lerp trailing factor (0.16 provides buttery soft inertia)
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.16;
      currentY += dy * 0.16;

      const roundedX = Math.round(currentX * 10) / 10;
      const roundedY = Math.round(currentY * 10) / 10;

      el.style.background = `radial-gradient(640px circle at ${roundedX}px ${roundedY}px, rgba(99, 102, 241, 0.11), rgba(56, 189, 248, 0.05) 35%, rgba(168, 85, 247, 0.02) 65%, transparent 80%)`;

      // Keep running while moving or catching up
      if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) {
        rafId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Initialize coords on first entry
      if (currentX < 0 || currentY < 0) {
        currentX = targetX;
        currentY = targetY;
      }

      el.style.opacity = '1';

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const handleMouseLeave = () => {
      if (el) el.style.opacity = '0';
      targetX = -1000;
      targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 overflow-hidden opacity-0"
    />
  );
};

export default React.memo(CursorSpotlight);

