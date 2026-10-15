import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CardTilt3D = ({ children, className = '', maxTilt = 10 }) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const [canTilt, setCanTilt] = useState(true);

  const springConfig = { damping: 22, stiffness: 280 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  useEffect(() => {
    // Disable on touch devices or if user prefers reduced motion
    const isTouch = window.matchMedia && window.matchMedia('(hover: none)').matches;
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) {
      setCanTilt(false);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!canTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (!width || !height) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    const xRotation = (yPct - 0.5) * -maxTilt * 2;
    const yRotation = (xPct - 0.5) * maxTilt * 2;

    rotateX.set(xRotation);
    rotateY.set(yRotation);
    scale.set(1.02);

    if (glareRef.current) {
      glareRef.current.style.opacity = '0.22';
      glareRef.current.style.background = `radial-gradient(circle 240px at ${xPct * 100}% ${yPct * 100}%, rgba(255,255,255,0.2), transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    if (!canTilt) return;
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  if (!canTilt) {
    return (
      <div className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      className={`relative will-change-transform ${className}`}
    >
      {/* Glare Reflection Layer without React re-render overhead */}
      <div
        ref={glareRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-xl transition-opacity duration-300 opacity-0"
      />
      {children}
    </motion.div>
  );
};

export default React.memo(CardTilt3D);
