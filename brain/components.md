# Component Inventory & File Map

Use this catalog to locate, inspect, and modify any component without searching the workspace.

---

## 1. Layout Components (`src/components/layout/`)

### `VSCodeLayout.jsx`
- **Path**: [`src/components/layout/VSCodeLayout.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/VSCodeLayout.jsx)
- **Role**: Root application layout container.
- **Children**: `SimpleParticleField`, `CursorSpotlight`, `TitleBar`, `ActivityBar`, `Sidebar`, `TabBar`, `CodeEditor`, `TerminalEmulator` (lazy), `StatusBar`.
- **Props**: None.

### `ActivityBar.jsx`
- **Path**: [`src/components/layout/ActivityBar.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/ActivityBar.jsx)
- **Role**: Left navigation strip with icons for Explorer, Source Control, Themes, Settings. Features Feature 21 tactile micro-interactions: glowing active neon left stripe, hover icon scaling, tactile click depression (`active:scale-90`), and instant floating tooltips.
- **Mobile Behavior**: Hidden on mobile screens; renders tactile floating action button (`bottom-7 right-4`) to toggle the file explorer drawer with ripple feedback.


### `Sidebar.jsx`
- **Path**: [`src/components/layout/Sidebar.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/Sidebar.jsx)
- **Role**: Collapsible panel displaying the active feature view (`FileExplorer`, or lazy loaded `GitPanel`/`ThemeSelector`).
- **Responsive**: `w-[280px]` on desktop; full modal slide-over on mobile (`w-[85%]`).

### `TitleBar.jsx`
- **Path**: [`src/components/layout/TitleBar.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/TitleBar.jsx)
- **Role**: Top window bar with menu items (`File`, `Edit`, `View`, `Terminal`), repository title, and window minimize/maximize/close icons.

### `StatusBar.jsx`
- **Path**: [`src/components/layout/StatusBar.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/StatusBar.jsx)
- **Role**: Bottom status bar displaying current branch (`main`), active file encoding, layout language, and theme picker modal trigger.

### `EditorArea.jsx`
- **Path**: [`src/components/layout/EditorArea.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/layout/EditorArea.jsx)
- **Role**: Tab bar container variant.

---

## 2. Section Views (`src/components/sections/`)

### `WelcomeSection.jsx`
- **Path**: [`src/components/sections/WelcomeSection.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/sections/WelcomeSection.jsx)
- **Role**: Default landing view. Contains the 3D Holographic Core, typing subtitle, AI collaboration highlights, quick action cards, and stats.
- **Lazy Dependencies**: Uses `React.lazy` for `HolographicCore.jsx`.

### `AboutSection.jsx`
- **Path**: [`src/components/sections/AboutSection.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/sections/AboutSection.jsx)
- **Role**: Personal biography, contact details, social links, education timeline, and core interests.
- **Data Source**: `portfolioData.about`.

### `SkillsSection.jsx`
- **Path**: [`src/components/sections/SkillsSection.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/sections/SkillsSection.jsx)
- **Role**: Technical skills categorized into Frontend, Backend, and Tools with animated progress bars, proficiency tags, and 3D tilt cards.
- **Lazy Dependencies**: Uses `React.lazy` for `InteractiveSkillsOrbit.jsx`.
- **Data Source**: `portfolioData.skills`.

### `ProjectsSection.jsx`
- **Path**: [`src/components/sections/ProjectsSection.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/sections/ProjectsSection.jsx)
- **Props**: `{ projectId?: string }`
  - If `projectId` provided: Displays single project showcase with multi-image gallery, interactive thumbnail switcher, tech stack pills, and live demo / github links.
  - If `projectId` omitted: Displays 3-column responsive grid of all projects with card tilt, badges, and quick view buttons.
- **Images**: All images use `loading="lazy"` and `decoding="async"`.
- **Data Source**: `portfolioData.projects`.

### `ExperienceSection.jsx`
- **Path**: [`src/components/sections/ExperienceSection.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/sections/ExperienceSection.jsx)
- **Role**: Experience and Engineering Impact page. Hosts Feature 13 (Experience Journey Timeline), Feature 14 (Engineering Contributions), verified top metrics, academic credentials, and professional contact links with zero duplicated content.
- **Children**: `ExperienceJourneyTimeline`, `EngineeringContributions`, `CardTilt3D`.
- **Data Source**: `portfolioData.experience`, `portfolioData.education`.

### `ContactSection.jsx`
- **Path**: [`src/components/sections/ContactSection.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/sections/ContactSection.jsx)
- **Role**: Contact and Network Portal. Hosts Feature 17 (Interactive Contact Terminal) and Feature 18 (Connection Status Panel) with live telemetry, working communication links, and direct message transmission pipeline with zero duplicate content.
- **Children**: `ConnectionStatusPanel`, `InteractiveContactTerminal`, `CardTilt3D`.
- **Data Source**: `portfolioData.about`.

### `ResumeSection.jsx`
- **Path**: [`src/components/sections/ResumeSection.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/sections/ResumeSection.jsx)
- **Props**: `{ resumeId?: string }`
- **Role**: Resume and Career Profiles page. Hosts Feature 15 (Interactive Resume Preview) and Feature 16 (Resume Variant Selector) with zero duplicate content, zoom controls, direct PDF downloads, and tailored competencies.
- **Children**: `InteractiveResumeViewer`, `CardTilt3D`.
- **Data Source**: `portfolioData.resumes`, `portfolioData.about`, `portfolioData.experience`, `portfolioData.projects`.

### `NotFound.jsx`
- **Path**: [`src/components/sections/NotFound.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/sections/NotFound.jsx)
- **Role**: 404 fallback for invalid virtual file paths.

---

## 3. Feature Components (`src/components/features/`)

### `CodeEditor.jsx`
- **Path**: [`src/components/features/CodeEditor.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/CodeEditor.jsx)
- **Role**: Tab router and Suspense boundary. Loads sections dynamically based on `activeTab.type`.

### `FileExplorer.jsx`
- **Path**: [`src/components/features/FileExplorer.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/FileExplorer.jsx)
- **Role**: VS Code file tree. Features Feature 21 tactile micro-interactions: smooth 90-degree rotating chevrons, active border glow (`border-l-2 border-vscode-accent`), hover micro-slide, tactile click depression, and item badges.
- **Data Source**: `fileSystem.js`.

### `TabBar.jsx`
- **Path**: [`src/components/features/TabBar.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/TabBar.jsx)
- **Role**: Horizontal tabs with file icons, active indicators, and mobile-accessible close buttons. Features Feature 21 tactile micro-interactions: subtle hover lift (`-translate-y-0.5`), glowing active top neon border, active indicator dot, tactile press feedback (`active:scale-[0.98]`), and micro-animated close button.


### `InteractiveSkillsOrbit.jsx`
- **Path**: [`src/components/features/InteractiveSkillsOrbit.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/InteractiveSkillsOrbit.jsx)
- **Role**: Concentric animated orbital radar displaying 4 orbits (Core MERN, Enterprise Architecture, Database & Cloud, Production Tools) with hover pause, recruiter filter toggles, and detail inspector card.

### `TerminalEmulator.jsx`
- **Path**: [`src/components/features/TerminalEmulator.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/TerminalEmulator.jsx)
- **Role**: Interactive terminal emulator with command history, tab completion, and portfolio commands.

### `GitPanel.jsx`
- **Path**: [`src/components/features/GitPanel.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/GitPanel.jsx)
- **Role**: GitHub stats panel fetching live GitHub API user data, repositories, and commits.
- **Lazy Loaded**: Loaded dynamically in `Sidebar.jsx`.

### `ThemeSelector.jsx` & `ThemeSwitcher.jsx`
- **Path**: [`src/components/features/ThemeSelector.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/ThemeSelector.jsx)
- **Role**: Theme picker palette allowing users to switch between GitHub Dark, Monokai, One Dark Pro, Dracula, etc.

### `LiveDeveloperStatus.jsx`
- **Path**: [`src/components/features/LiveDeveloperStatus.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/LiveDeveloperStatus.jsx)
- **Role**: Compact glassmorphic status card on Welcome hero page. Displays live availability badge (`🟢 Available for Work`), current role (`Web Developer @ Dindia`), primary tech stack pills, 1+ yr experience badge, and quick CTA buttons (`Connect / Hire`, `Resume`, `Copy Email`).

### `InteractiveTerminalIntro.jsx`
- **Path**: [`src/components/features/InteractiveTerminalIntro.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/InteractiveTerminalIntro.jsx)
- **Role**: Embedded interactive terminal preview on the Welcome hero page. Supports clickable quick run chips (`whoami`, `skills`, `projects`, `contact`, `clear`), real CLI keyboard input with Up/Down history, formatted interactive responses with tab triggers, and full terminal launcher.

### `DeveloperSnapshot.jsx`
- **Path**: [`src/components/features/DeveloperSnapshot.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/DeveloperSnapshot.jsx)
- **Role**: Compact dashboard cards on About page displaying strictly verified numbers: `1+ Yr Experience`, `10+ Projects`, `4 RBAC Tiers`, `Automated CI/CD`, alongside core responsibilities in ERP systems and API architecture.

### `InteractiveCareerTimeline.jsx`
- **Path**: [`src/components/features/InteractiveCareerTimeline.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/InteractiveCareerTimeline.jsx)
- **Role**: Interactive career roadmap on About page with category filters (`All`, `Development`, `Internships`, `Education`, `Industrial`) and clickable milestones for Dindia, Deffotech, WorkElate, MGKVP BCA, Suzuki Production Engineering (FTC reward), and ITI Electrical (93% distinction).

### `SoftwareBuildWorkflow.jsx`
- **Path**: [`src/components/features/SoftwareBuildWorkflow.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/SoftwareBuildWorkflow.jsx)
- **Role**: Interactive 6-step engineering pipeline diagram on About page (`Requirements` → `UI Design` → `API Engineering` → `Database` → `Testing` → `Deployment`) with active step inspector for practices, deliverables, and tools.

### `SkillExplorer.jsx`
- **Path**: [`src/components/features/SkillExplorer.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/SkillExplorer.jsx)
- **Role**: Domain-focused skill explorer on the Skills page (`skills.js`). Features filter tabs (`All Domains`, `Frontend`, `Backend`, `Database`, `DevOps`, `Integrations`), animated proficiency meters, and direct correlation cards linking skills directly to production projects (`Dindia ERP`, `Deffotech CRM`, `Destination Technologies`, `DevConnect`) with `Inspect Project` tab triggers.

### `FullStackArchitectureMap.jsx`
- **Path**: [`src/components/features/FullStackArchitectureMap.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/FullStackArchitectureMap.jsx)
- **Role**: Interactive 5-tier full-stack architecture diagram (`Client Tier (React)` → `API Gateway (REST & JWT)` → `Application Server (Node & Express)` → `Persistence Tier (MongoDB & MySQL)` → `Deployment & Cloud (Vercel & Render)`). Features clickable nodes, layer inspector panel, active data flow visualization, and exact production tooling.

### `ERPSystemShowcase.jsx`
- **Path**: [`src/components/features/ERPSystemShowcase.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/ERPSystemShowcase.jsx)
- **Role**: Deep-dive enterprise ERP showcase on the Projects page (`dindia-erp-system.jsx` and all-projects spotlight). Features 4 interactive tabs (`Core Modules`, `User Roles (RBAC Matrix)`, `API & Architecture Specs`, `Business Workflows`), key metric counters, live screenshot preview, and direct link to the live production ERP.

### `ResponsiveWebsitePreview.jsx`
- **Path**: [`src/components/features/ResponsiveWebsitePreview.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/ResponsiveWebsitePreview.jsx)
- **Role**: Interactive multi-device preview frame on the Projects page for live client platforms (Dindia Corporate and Dindia Infratech). Supports viewport switching (`💻 Desktop (1440px)` vs `📱 Mobile (390px)` vs `⚡ Dual View`), realistic browser chrome and phone bezels, responsive architecture highlights, and live website links.

### `ExperienceJourneyTimeline.jsx`
- **Path**: [`src/components/features/ExperienceJourneyTimeline.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/ExperienceJourneyTimeline.jsx)
- **Role**: Feature 13 on Experience page. Interactive chronological timeline for Dindia, Deffotech, WorkElate, and Suzuki. Features expandable company nodes, 'Expand All'/'Collapse All' controls, company metadata, key deliverables with verification checkmarks, core responsibilities, and technical stack pills. Uses `CardTilt3D`.

### `EngineeringContributions.jsx`
- **Path**: [`src/components/features/EngineeringContributions.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/EngineeringContributions.jsx)
- **Role**: Feature 14 on Experience page. Evidence-based contribution cards covering 4 technical pillars: ERP Modules & Workforce Systems, Commercial Client Websites, Scalable API Architecture & Security, and DevOps & Performance Engineering. Features category filter tabs, verified metric counters, expandable architectural evidence breakdowns, and live URL links. Uses `CardTilt3D`.

### `InteractiveResumeViewer.jsx`
- **Path**: [`src/components/features/InteractiveResumeViewer.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/InteractiveResumeViewer.jsx)
- **Role**: Feature 15 & 16 on Resume page. Interactive resume viewer featuring a tailored variant selector (Full Stack, MERN Stack, Backend Developer), zoom controls (+, -, reset), view mode toggle (Interactive Doc vs Google Drive PDF), direct PDF download, and full print-ready document typography. Uses `CardTilt3D`.

### `ConnectionStatusPanel.jsx`
- **Path**: [`src/components/features/ConnectionStatusPanel.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/ConnectionStatusPanel.jsx)
- **Role**: Feature 18 on Contact page. Live status telemetry panel displaying real-time availability status (`🟢 Immediate Hire`), preferred role specializations (`Full Stack · MERN · Backend`), response time SLA (`< 24 Hours`), and live contact channels matrix (Email, LinkedIn, GitHub, WhatsApp) with one-click clipboard copy. Uses `CardTilt3D`.

### `InteractiveContactTerminal.jsx`
- **Path**: [`src/components/features/InteractiveContactTerminal.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/features/InteractiveContactTerminal.jsx)
- **Role**: Feature 17 on Contact page. Cyberpunk/VS Code terminal-inspired communication interface with interactive CLI commands (`$ email`, `$ linkedin`, `$ github`, `$ whatsapp`, `$ send-message`), live link protocols, and an integrated EmailJS transmission pipeline for direct message dispatch.

---

## 4. 3D & Ambient Components (`src/components/3d/`)

### `HolographicCore.jsx`
- **Path**: [`src/components/3d/HolographicCore.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/3d/HolographicCore.jsx)
- **Role**: Three.js WebGL geometric core. Features icosahedron wireframe, double orbital rings, floating particles, spherical cursor tracking, and click spin.
- **Lazy Loaded**: Dynamic chunk in `WelcomeSection.jsx`.

### `CardTilt3D.jsx`
- **Path**: [`src/components/3d/CardTilt3D.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/3d/CardTilt3D.jsx)
- **Props**: `{ children, maxTilt?: number, className?: string }`
- **Role**: Interactive 3D perspective tilt with specular shine layer. Uses `useRef` + `framer-motion` for zero React re-renders on mousemove.

### `CursorSpotlight.jsx`
- **Path**: [`src/components/3d/CursorSpotlight.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/3d/CursorSpotlight.jsx)
- **Role**: Feature 19. Subtle ambient radial spotlight tracking cursor across the entire VS Code window with buttery soft lerped inertia (`lerp = 0.16`). Zero React re-renders; auto-sleep rAF when stationary; automatically disabled on touch devices.

### `SimpleParticleField.jsx`
- **Path**: [`src/components/3d/SimpleParticleField.jsx`](file:///d:/devil_code/portfolio-frontend/src/components/3d/SimpleParticleField.jsx)
- **Role**: Feature 20. Low-density 2D constellation canvas behind the code editor (44 nodes on desktop, 20 on mobile). Zero text interference or scrolling impact (`pointer-events-none fixed inset-0 z-0 opacity-40`); auto-pauses when hidden; DPR scaling and reduced-motion compliant.

