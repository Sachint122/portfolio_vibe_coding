# Performance, 3D Engine & Mobile Responsiveness

This document establishes the performance rules, 3D resource management standards, and responsive boundaries for this repository.

---

## 1. 3D Engine & Holographic Core (`HolographicCore.jsx`)

**File Path**: [`src/components/3d/HolographicCore.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/3d/HolographicCore.jsx)

### Design & Mechanics
- **Renderer**: Three.js WebGLRenderer with `alpha: true`, `powerPreference: 'high-performance'`.
- **Pixel Ratio**: Clamped via `Math.min(window.devicePixelRatio, 2)` to prevent mobile GPU thermal throttling.
- **Scene Objects**:
  - `innerMesh`: Glowing physical icosahedron with cyan/indigo emissive materials.
  - `wireMesh`: Wireframe outer cage with specular roughness.
  - `ringMesh1` & `ringMesh2`: Tilted double orbital rings rotating in opposite directions.
  - `particlePoints`: 60 background floating stardust particles.
- **Cursor Tracking**: Spherical lerp rotation following normalized window coordinates `(x, y)`.
- **Click Boost**: User click on the 3D core temporarily accelerates spin velocity with dampening.

### Mandatory Cleanup Protocol
To prevent memory leaks during tab switches, the `useEffect` cleanup hook **must** dispose every Three.js resource:
```javascript
innerGeo.dispose();
innerMat.dispose();
wireGeo.dispose();
wireMat.dispose();
ringGeo1.dispose();
ringMat1.dispose();
ringGeo2.dispose();
ringMat2.dispose();
particleGeo.dispose();
particleMat.dispose();
renderer.dispose();
if (renderer.domElement && container.contains(renderer.domElement)) {
  container.removeChild(renderer.domElement);
}
```

### Auto-Pause on Hidden / Low Power
- Listens to `document.addEventListener('visibilitychange', ...)` to cancel animation frames when the user switches browser tabs.
- Checks `window.matchMedia('(prefers-reduced-motion: reduce)')` to disable continuous rotation when reduced motion is preferred.

---

## 2. Interactive Tilt (`CardTilt3D.jsx`)

**File Path**: [`src/components/3d/CardTilt3D.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/3d/CardTilt3D.jsx)

### Zero React Re-render Rule
- Mouse movement over project or skill cards calculates rotation degrees (`rotateX`, `rotateY`) and shine coordinates.
- **Do NOT** use `useState` for mouse tracking in card tilts. It causes 60–120 full React tree re-renders per second.
- Updates are directly applied to `framer-motion` MotionValues or DOM transforms via `useRef`.
- Card tilt is gracefully disabled on touch devices (`window.matchMedia('(pointer: coarse)').matches`).

---

## 3. Particle Constellation Canvas (`SimpleParticleField.jsx`) - Feature 20

**File Path**: [`src/components/3d/SimpleParticleField.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/3d/SimpleParticleField.jsx)

- Implemented in vanilla HTML5 Canvas 2D (zero Three.js overhead).
- **Node Density**:
  - Desktop: 44 nodes.
  - Mobile (< 768px): 20 nodes.
- Proximity lines are drawn only between nodes within 105px distance (`rgba(99, 102, 241, 0.14)`).
- Low opacity (`opacity-40`) and `pointer-events-none` ensure crystal-clear text readability and uninterrupted scrolling.
- Includes `visibilitychange` listener to sleep canvas rendering when the browser tab is hidden, plus DPR scaling and `prefers-reduced-motion` support.

---

## 4. Cursor Spotlight (`CursorSpotlight.jsx`) - Feature 19

**File Path**: [`src/components/3d/CursorSpotlight.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/3d/CursorSpotlight.jsx)

- Ambient multi-layered radial gradient: `radial-gradient(640px circle at Xpx Ypx, rgba(99, 102, 241, 0.11), rgba(56, 189, 248, 0.05) 35%, rgba(168, 85, 247, 0.02) 65%, transparent 80%)`.
- Tracks mouse with buttery soft lerped inertia (`lerp factor = 0.16`) in `requestAnimationFrame` with auto-sleep when stationary.
- Zero React re-renders via direct DOM style updates on `spotlightRef`.
- Automatically hidden on touch devices (`pointer: coarse` or `hover: none`) and fades out smoothly on mouse leave.

---

## 5. Image Lazy Loading & Layout Stability

- **Native Lazy Loading**: Every `<img>` element must include:
  ```html
  <img src="..." alt="..." loading="lazy" decoding="async" />
  ```
- **Cumulative Layout Shift (CLS = 0)**:
  - All Suspense fallbacks must specify fixed or min-height placeholders matching the resolved component dimensions (e.g., `w-64 h-64 md:w-80 md:h-80` for `HolographicCore`, `min-h-[420px]` for `InteractiveSkillsOrbit`).

---

## 6. Mobile Responsiveness Breakpoints

The application is rigorously validated across all major viewport tiers:

| Viewport Tier | Target Resolution | Key Behaviors |
| :--- | :--- | :--- |
| **Mobile Extra Small** | 320px | Scale down orbit (`scale-[0.85]`), single column cards, close tab button visible. |
| **Mobile Standard** | 375px, 390px, 430px | Bottom status bar, slide-over file explorer, terminal as bottom sheet overlay. |
| **Tablet** | 768px | Compact sidebar, 2-column project grids. |
| **Desktop** | 1024px, 1440px | Full ActivityBar, persistent sidebar, split-view terminal, 3-column project grids. |

### Critical Mobile Overflow Rule
- Keep outer layout `overflow-hidden` on root container, with inner `overflow-y-auto` on `CodeEditor`.
- Always verify horizontal scroll position: `document.documentElement.scrollWidth <= window.innerWidth`.
