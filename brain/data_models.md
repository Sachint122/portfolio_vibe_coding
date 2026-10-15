# Data Models & Virtual File System

This document outlines the data schemas and virtual file definitions used throughout the portfolio.

---

## 1. Portfolio Data (`src/data/portfolioData.js`)

**File Path**: [`src/data/portfolioData.js`](file:///d:/devil_code/portfolio-frontend/src/data/portfolioData.js)

### Sections Overview
- `personalInfo`: `{ name, role, email, phone, location, github, linkedin, bio }`
- `about`: Profile details, statistics, highlights, and educational background.
- `skills`:
  - `frontend`: `Array<{ name: string, level: number, icon?: string }>`
  - `backend`: `Array<{ name: string, level: number, icon?: string }>`
  - `tools`: `Array<{ name: string, level: number, icon?: string }>`
- `experience`: `Array<{ id, company, role, location, period, description, achievements, technologies }>`
- `projects`: `Array<ProjectItem>`
- `resumes`: `Array<{ id, title, role, filename, fileId, isPrimary, highlights, tags, updated }>`

### Project Item Schema (`projects[]`)
```javascript
{
  id: "dti-website",                   // Unique slug used for tabs (e.g., project-dti-website)
  title: "Destination Technologies",   // Display title
  description: "...",                  // Detailed summary
  category: "fullstack",               // fullstack | backend | frontend
  techStack: ["React.js", "Node.js", "Tailwind CSS"], // Tags displayed on card & detail page
  features: [                          // Array of bullet highlights
    "Interactive course catalog",
    "Placement statistics tracker"
  ],
  github: "https://github.com/...",    // Repository URL (optional)
  live: "https://...",                 // Deployed demo URL (optional)
  image: "/images/dti-hero.webp",      // Main thumbnail image (WebP recommended)
  images: [                            // Gallery list for interactive thumbnail carousel
    "/images/dti-hero.webp",
    "/images/dti-services.webp",
    "/images/dti-placements-stats.webp",
    "/images/dti-why-choose-us.webp",
    "/images/dti-about.webp",
    "/images/dti-placements.webp",
    "/images/dti-contact.webp"
  ],
  featured: true                       // Boolean - triggers star badge on card
}
```

> **Image Storage Rule**: All project images reside in [`public/images/`](file:///d:/devil_code/portfolio-frontend/public/images/). Store screenshots as WebP for optimal compression.

---

## 2. Virtual File System (`src/data/fileSystem.js`)

**File Path**: [`src/data/fileSystem.js`](file:///d:/devil_code/portfolio-frontend/src/data/fileSystem.js)

The file tree in the sidebar is rendered from this nested object. Each file entry maps directly to a virtual tab.

### Schema of File Node
```javascript
{
  id: "about",                        // Unique node ID
  name: "about.js",                   // Label shown in explorer tree and tab bar
  type: "file",                       // "file" | "folder"
  fileType: "about",                  // Handled by CodeEditor switch(activeTab.type)
  language: "javascript",             // Syntax label shown in status bar
  icon: "javascript",                 // Icon type (react, javascript, json, etc.)
  content: null                       // Optional raw code content
}
```

### Schema of Folder Node
```javascript
{
  id: "projects-folder",
  name: "projects",
  type: "folder",
  children: [
    {
      id: "project-dti-website",
      name: "destination-technologies.jsx",
      type: "file",
      fileType: "project",
      projectId: "dti-website",       // References project in portfolioData.projects
      language: "react",
      icon: "react"
    }
    // ...
  ]
}
```

### Virtual File to Tab Mapping Table
| Explorer File Name | Tab `type` | Parameters Passed | Target Component |
| :--- | :--- | :--- | :--- |
| `welcome.md` | `'welcome'` | - | `WelcomeSection` |
| `about.js` | `'about'` | - | `AboutSection` |
| `skills.js` | `'skills'` | - | `SkillsSection` |
| `experience.json` | `'experience'` | - | `ExperienceSection` |
| `projects.jsx` | `'all-projects'` | - | `ProjectsSection` |
| `<slug>.jsx` | `'project'` | `{ projectId: "<slug>" }` | `ProjectsSection` |
| `contact.jsx` | `'contact'` | - | `ContactSection` |
| `resumes.json` | `'all-resumes'` | - | `ResumeSection` |
| `<resumeId>.pdf` | `'single-resume'` | `{ resumeId: "<id>" }` | `ResumeSection` |

### Canonical Project IDs
1. `dindia-erp-system` (`dindia-erp-system.jsx`, tab: `project-dindia-erp-system`)
2. `dindia-infratech` (`dindia-infratech.jsx`, tab: `project-dindia-infratech`)
3. `dindia-website` (`dindia-website.jsx`, tab: `project-dindia-website`)
4. `send-mail-app` (`send-mail-app.js`, tab: `project-send-mail`)
5. `dti-website` (`destination-technologies.jsx`, tab: `project-dti`)
6. `home-automation` (`home-automation.java`, tab: `project-home-automation`)
7. `library-management` (`library-management.ts`, tab: `project-library`)
8. `car-rental-website` (`car-rental-website.html`, tab: `project-car-rental`)
9. `pasovit-task-manager` (`pasovit-task-manager.js`, tab: `project-pasovit`)
10. `youtube-downloader` (`youtube-downloader.js`, tab: `project-youtube`)

> **Alias Resolution**: `ProjectsSection.jsx` provides automatic fallback alias resolution via `PROJECT_ALIASES` (e.g. mapping `erp-system` -> `dindia-erp-system`, `send-mail` -> `send-mail-app`, `library-mgmt` -> `library-management`).

