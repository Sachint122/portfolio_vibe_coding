# AGENT EXECUTION RULES (TOKEN-SAVING & EFFICIENCY DIRECTIVE)

> **CRITICAL INSTRUCTION FOR ALL AI CODING SESSIONS**:
> When a user gives you any task, bug fix, feature request, or audit:
> **DO NOT first scan, search, or read the entire project repository.**
> **ALWAYS first read this `rule.md` file and the relevant file(s) in the `brain/` directory.**
> Then proceed directly to the exact target file(s) and execute the task surgically.

---

## 1. The Token Economy Protocol

1. **Zero Full-Project Scans**:
   - Never run open-ended searches, mass directory listings, or read multiple source files hoping to understand the project structure.
   - The entire architecture, component inventory, data schema, and 3D effects are pre-indexed in `brain/`.

2. **Lookup Workflow**:
   - Step 1: Check `brain/README.md` or the specific topic file in `brain/`:
     - Need component location or props? -> Read `brain/components.md`
     - Need layout, routing, or state flow? -> Read `brain/architecture.md`
     - Need project items, skills data, or virtual files? -> Read `brain/data_models.md`
     - Working on 3D, animations, or responsiveness? -> Read `brain/performance_and_3d.md`
   - Step 2: Open **only** the exact target file identified.
   - Step 3: Apply the minimal, surgical change needed.

3. **Verify Without Bloat**:
   - Verify changes with targeted commands (`npx eslint src` or `npm run build` when needed).
   - Do not claim tests passed without executing them.

---

## 2. Architecture & Code Constraints

- **Preserve Lazy Loading**: All section tabs, 3D core, orbital skills cloud, terminal, and secondary sidebar panels are code-split with `React.lazy` and `Suspense`. Keep this intact.
- **Preserve Zero-Rerender Interaction**: `CardTilt3D`, `CursorSpotlight`, and `SimpleParticleField` use `useRef` + DOM transforms/Canvas. Never bind fast mouse events (`mousemove`) to React state (`useState`).
- **Preserve Clean Three.js Resource Management**: Any WebGL/Three.js resources (geometries, materials, renderers) must be properly disposed in `useEffect` cleanup.
- **Preserve Virtual File Explorer Contract**: Virtual files in `src/data/fileSystem.js` map to tabs handled by `src/components/features/CodeEditor.jsx`. Never break tab ID/type mappings.
- **Preserve Visual Theme**: The dark VS Code aesthetic is strictly defined in Tailwind config and CSS custom properties. Maintain UI consistency.
