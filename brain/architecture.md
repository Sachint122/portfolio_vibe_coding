# System Architecture & State Management

## 1. High-Level Layout Architecture

The application emulates a full-fidelity Visual Studio Code environment with integrated 3D ambient layers.

```
+-------------------------------------------------------------------------------+
| TitleBar (window controls, title, branch status, menu)                        |
+----+-------------------+------------------------------------------------------+
| A  | Sidebar           | TabBar (open file tabs, active indicator, close)     |
| c  | (Explorer, Git,   +------------------------------------------------------+
| t  |  Themes, Settings)| CodeEditor (active section viewport)                 |
| i  |                   |                                                      |
| v  |                   | [Suspense Lazy Loaded Tab Components]                |
| i  |                   |                                                      |
| t  |                   +------------------------------------------------------+
| y  |                   | TerminalEmulator (desktop: split, mobile: overlay)   |
+----+-------------------+------------------------------------------------------+
| StatusBar (git branch, error/warning count, encoding, theme indicator)        |
+-------------------------------------------------------------------------------+
[Ambient Background: SimpleParticleField (2D canvas)]
[Ambient Foreground: CursorSpotlight (radial gradient DOM layer)]
```

### Layout Shell Files
- **Root Component**: [`src/App.js`](file:///d:/devil_code/portfolio-frontend/src/App.js)
  - Sets up global keyboard listener (`Ctrl + \`` to toggle terminal).
  - Loads and applies theme from storage.
  - Renders `<VSCodeLayout />`.
- **Main Shell**: [`src/components/layout/VSCodeLayout.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/VSCodeLayout.jsx)
  - Renders `SimpleParticleField`, `CursorSpotlight`, `TitleBar`, `ActivityBar`, `Sidebar`, `TabBar`, `CodeEditor`, `TerminalEmulator` (lazy loaded), and `StatusBar`.
- **Activity Bar**: [`src/components/layout/ActivityBar.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/ActivityBar.jsx)
  - Left icon column on desktop. Contains floating action button on mobile (bottom-right) to toggle sidebar drawer.
- **Sidebar**: [`src/components/layout/Sidebar.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/Sidebar.jsx)
  - Desktop sidebar (`w-[280px]`) & mobile slide-over overlay.
  - Dynamically renders active panel (`FileExplorer`, or lazy loaded `GitPanel`/`ThemeSelector`).
- **Tab Bar**: [`src/components/features/TabBar.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/TabBar.jsx)
  - Horizontal scrollable file tabs. Displays active file highlight, file icons, and close button.
- **Content Area**: [`src/components/features/CodeEditor.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/CodeEditor.jsx)
  - Reads `activeTabId` from Zustand store, maps tab type to section component, renders inside `<Suspense fallback={<LoadingSpinner />}>`.
- **Terminal**: [`src/components/features/TerminalEmulator.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/TerminalEmulator.jsx)
  - Interactive CLI supporting `help`, `about`, `skills`, `projects`, `clear`, `contact`, `theme`, etc.
- **Status Bar**: [`src/components/layout/StatusBar.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/StatusBar.jsx)
  - Bottom bar with Git branch, error/warning badges, line/col indicators, and theme switcher trigger.

---

## 2. Global State Management (Zustand)

**Store File**: [`src/store/portfolioStore.js`](file:///d:/devil_code/portfolio-frontend/src/store/portfolioStore.js)

### State Slices
| State Field | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `openTabs` | `Array<Tab>` | Initial welcome tab | List of currently opened tabs `{ id, name, type, language, projectId?, resumeId? }` |
| `activeTabId` | `string` | `'welcome'` | ID of the currently active tab displayed in `CodeEditor` |
| `activeSidebar` | `string \| null` | `'explorer'` | Currently active sidebar panel (`'explorer'`, `'git'`, `'themes'`, `'extensions'`, `'settings'`) |
| `terminalVisible` | `boolean` | `false` | Whether the terminal emulator is visible |
| `currentTheme` | `string` | `'githubDark'` | Active theme ID |

### Key Actions
- `openTab(tab)`: Opens a new tab or focuses it if already open. Sets `activeTabId`.
- `closeTab(tabId)`: Closes tab by ID. If active, automatically focuses adjacent tab.
- `setActiveTab(tabId)`: Sets active tab.
- `setActiveSidebar(sidebarId)`: Sets active sidebar panel or toggles off if already active.
- `toggleTerminal()`: Toggles terminal visibility.
- `setTheme(themeId)`: Updates current theme and saves to localStorage.

---

## 3. Tab Routing System

`CodeEditor.jsx` handles virtual file routing without a page reload or heavy URL router:

| Tab `type` | Virtual File Name | Rendered Component | Lazy Loaded? |
| :--- | :--- | :--- | :--- |
| `'welcome'` | `welcome.md` | `WelcomeSection` | No (eager for instant FCP) |
| `'about'` | `about.js` | `AboutSection` | Yes (`React.lazy`) |
| `'skills'` | `skills.js` | `SkillsSection` | Yes (`React.lazy`) |
| `'experience'` | `experience.json` | `ExperienceSection` | Yes (`React.lazy`) |
| `'project'` | `<projectId>.jsx` | `ProjectsSection` (`projectId`) | Yes (`React.lazy`) |
| `'all-projects'` | `projects.jsx` | `ProjectsSection` | Yes (`React.lazy`) |
| `'contact'` | `contact.jsx` | `ContactSection` | Yes (`React.lazy`) |
| `'all-resumes'` | `resumes.json` | `ResumeSection` | Yes (`React.lazy`) |
| `'single-resume'` | `<resumeId>.pdf` | `ResumeSection` (`resumeId`) | Yes (`React.lazy`) |
| Fallback | `unknown` | `NotFound` | Yes (`React.lazy`) |

---

## 4. Code Splitting & Performance Blueprint

```
Initial Main Bundle (123 kB gzip)
├── React + React DOM
├── Zustand Store
├── VSCodeLayout Shell (TitleBar, ActivityBar, TabBar, StatusBar)
├── WelcomeSection Core Text & Metrics
├── SimpleParticleField (2D Canvas)
└── CursorSpotlight (DOM Radial Gradient)

Async Dynamic Chunks (Loaded on Demand)
├── 408.*.chunk.js (136 kB) -> Three.js WebGL HolographicCore
├── 355.*.chunk.js (5.6 kB) -> InteractiveSkillsOrbit Radar
├── 325.*.chunk.js (4.1 kB) -> ResumeSection
├── 66.*.chunk.js  (4.0 kB) -> AboutSection
├── 8.*.chunk.js   (3.0 kB) -> ProjectsSection
├── 508.*.chunk.js (2.9 kB) -> SkillsSection
├── 380.*.chunk.js (2.8 kB) -> ContactSection
├── 477.*.chunk.js (2.5 kB) -> ExperienceSection
├── 981.*.chunk.js (2.4 kB) -> TerminalEmulator
└── 139.*.chunk.js (2.1 kB) -> GitPanel
```
