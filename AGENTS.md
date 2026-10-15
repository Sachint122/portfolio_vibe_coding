# AGENTS INSTRUCTIONS (WORKSPACE RULES)

<!-- RULE: TOKEN SAVING & BRAIN-FIRST DIRECTIVE -->
## Critical Rule: Read `brain/` & `rule.md` First (Token Saving)

Before executing ANY user request or inspecting code:
1. **DO NOT scan, search, or read the entire repository.**
2. **ALWAYS read `rule.md` and the appropriate index file in the `brain/` folder first**:
   - `brain/README.md` (Directory overview & quick map)
   - `brain/architecture.md` (Layout, store state, routing, code splitting)
   - `brain/components.md` (Inventory of components, filepaths, props)
   - `brain/data_models.md` (Data schemas in `portfolioData.js` and `fileSystem.js`)
   - `brain/performance_and_3d.md` (Three.js 3D core, particle canvas, tilt, lazy loading)
3. Once the target file and requirements are identified from `brain/`, go directly to that specific file and make the surgical edit.
4. Maintain existing lazy loading (`React.lazy` / `Suspense`), 0-rerender ref interactions, and Three.js memory cleanups.
