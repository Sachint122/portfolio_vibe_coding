export const portfolioData = {
  about: {
    name: "Sachin Tiwari",
    title: "MERN Stack & Full Stack Engineer",
    location: "Varanasi, India",
    age: 26,
    bio: "Full-Stack & MERN Stack Engineer with hands-on professional experience building enterprise applications and responsive web platforms. Proficient in crafting dynamic user interfaces with React.js, Tailwind CSS, and Vite, and architecting robust backend systems using Node.js, Express.js, MongoDB/Mongoose, and SQL. Experienced in developing full-scale ERP & office management solutions with Role-Based Access Control (RBAC), employee lifecycle workflows, CRM pipelines, and revenue management, alongside deploying SEO-optimized commercial websites with GitHub Actions and Hostinger.",
    email: "sachintiwari.751858@gmail.com",
    phone: "+91-8081731062",
    github: "https://github.com/Sachint122",
    linkedin: "https://www.linkedin.com/in/sachin-tiwari-javafullstack/",
    whatsapp: "+918081731062",
    badges: [
      "🚀 MERN & Full Stack",
      "⚛️ React.js & Node.js",
      "🏢 Enterprise ERP Systems",
      "⚡ CI/CD & Cloud Deployment"
    ],
    highlights: [
      {
        icon: "💻",
        title: "Full-Stack Web Development",
        desc: "End-to-end development using React.js, Node.js, Express.js, MongoDB, and SQL with clean architecture and REST APIs."
      },
      {
        icon: "🏢",
        title: "Enterprise ERP & Workflows",
        desc: "Building business management systems with RBAC permissions, employee lifecycles, DWR, and leave workflows."
      },
      {
        icon: "🌐",
        title: "Web Platforms & SEO",
        desc: "Developing responsive websites with Google Maps integration, high-resolution listings, and search engine optimization."
      },
      {
        icon: "⚙️",
        title: "DevOps & Integrations",
        desc: "Automating builds with GitHub Actions, Hostinger deployment, PDF data extraction, and third-party APIs."
      }
    ]
  },

  resumes: [
    {
      id: 'resume-mern-fullstack',
      title: 'MERN Stack & Full Stack Engineer',
      description: 'Full-stack development expertise spanning React.js frontend engineering, Node.js and Express.js backend development, RESTful API architecture, MongoDB and SQL database integration, and enterprise ERP systems. Experienced in building responsive business websites, role-based access control (RBAC), employee and task management workflows, CRM, invoicing, authentication, third-party integrations, performance optimization, and CI/CD deployment using GitHub Actions and Hostinger.',
      driveId: '1Yv56XdQ-zK_6rq2Hp1PNgk60SB6qmhDx',
      icon: '💻',
      color: 'blue',
      tags: [
        'MERN Stack Development',
        'Full Stack Engineering',
        'React.js',
        'JavaScript ES6+',
        'Node.js',
        'Express.js',
        'REST API Design',
        'MongoDB & Mongoose',
        'SQL & Relational Databases',
        'Database Modeling',
        'Authentication & Authorization',
        'Role-Based Access Control (RBAC)',
        'Enterprise ERP Systems',
        'CRM & Business Workflows',
        'Employee & Task Management',
        'Invoice & Revenue Workflows',
        'Google OAuth',
        'Razorpay Integration',
        'Responsive UI Development',
        'Tailwind CSS',
        'Vite',
        'Performance Optimization',
        'API Error Handling',
        'Git & GitHub',
        'GitHub Actions CI/CD',
        'Hostinger Deployment'
      ],
      featured: true,
      lastUpdated: '2026-10-15'
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 80 },
      { name: "Vite", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "REST API", level: 92 },
      { name: "MongoDB & Mongoose", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Role-Based Access Control (RBAC)", level: 88 },
      { name: "JWT Authentication", level: 88 },
      { name: "API Security & Optimization", level: 85 },
      { name: "Razorpay Integration", level: 80 },
      { name: "Google OAuth", level: 75 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "GitHub Actions (CI/CD)", level: 82 },
      { name: "Hostinger Deployment", level: 85 },
      { name: "Postman", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "npm", level: 90 }
    ]
  },

  projects: [
    {
      id: "dindia-erp-system",
      title: "ERP & Office Management System",
      description: "A full-stack enterprise ERP and office management platform that centralizes company-wide workforce operations, role-based workflows, and revenue management. Contributed to core business logic, API integrations, and system optimizations.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "REST APIs"],
      features: [
        "Role-Based Access Control (RBAC) with tailored permissions for Super Admin, HR, Employee, and Telecaller",
        "Complete employee management lifecycle including Daily Work Reports (DWR) and Trash / Restore / Deleted workflows",
        "Attendance and leave management integrated with automated PDF data extraction",
        "Task assignment, real-time tracking, and departmental delegation",
        "CRM & Telecaller workflow management for call tracking and lead conversion",
        "Invoice generation and revenue tracking modules",
        "Centralized REST API error handling and client optimization eliminating redundant network calls"
      ],
      github: null,
      live: "https://erp.dindiaplus.com/",
      image: "/images/erp-system.webp",
      category: "fullstack",
      featured: true
    },
    {
      id: "dindia-infratech",
      title: "Dindia Infratech Website",
      description: "Real estate and property showcase website featuring dynamic property listings, high-resolution imagery, Google Maps geolocation integration, and SEO-optimized responsive design.",
      techStack: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "Google Maps", "GitHub Actions", "Hostinger"],
      features: [
        "Property listing pages with detailed specifications and image displays",
        "Interactive Google Maps integration for exact property geolocation and area discovery",
        "SEO improvements with semantic HTML and metadata for high search rankings",
        "Mobile-first, responsive design tailored for diverse screen sizes",
        "Automated deployment pipeline configured with GitHub Actions and Hostinger"
      ],
      github: null,
      live: "https://infratech.dindiaplus.com/",
      image: "/images/dindia-infratech.webp",
      images: [
        "/images/dindia-infratech.webp",
        "/images/dindia-infratech-properties.webp"
      ],
      category: "frontend",
      featured: true
    },
    {
      id: "dindia-website",
      title: "Dindia Corporate Website",
      description: "Official company website designed and developed to establish Dindia's digital footprint with responsive layouts, business-focused service showcases, SEO enhancements, and automated deployment.",
      techStack: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "HTML5", "GitHub Actions", "Hostinger"],
      features: [
        "Responsive, modern user interface built using React and Tailwind CSS",
        "Business-focused presentation pages showcasing company offerings and portfolio",
        "Comprehensive on-page SEO enhancements and meta optimization",
        "Continuous deployment workflow utilizing GitHub Actions and Hostinger"
      ],
      github: null,
      live: "https://www.dindiaplus.com/",
      image: "/images/dindia-website.webp",
      images: [
        "/images/dindia-website.webp",
        "/images/dindia-website-scrolled.webp",
        "/images/dindia-website-services.webp",
        "/images/dindia-website-features.webp",
        "/images/dindia-website-portfolio.webp"
      ],
      category: "frontend",
      featured: true
    },
    {
      id: "send-mail-app",
      title: "Send Mail Application",
      description: "Email management application that allows users to compose, send, and organize emails efficiently with template support. Built with MERN stack and integrated SMTP functionality.",
      techStack: ["React", "Express.js", "Node.js", "MongoDB", "Google Auth"],
      features: [
        "Rich text email composer with bulk mail capabilities",
        "Resume attachment management (upload & delete)",
        "Custom email templates creation & management",
        "Email history tracking with search, delete, and CSV export",
        "Email delivery statistics and real-time dashboard"
      ],
      github: "https://github.com/Sachint122/Mail_System/tree/main/mail_system_live",
      live: "https://mail-system-five.vercel.app/",
      image: "/images/send-mail.webp",
      images: [
        "/images/send-mail.webp",
        "/images/send-mail-history.webp"
      ],
      category: "fullstack",
      featured: true
    },
    {
      id: "dti-website",
      title: "Destination Technologies Website",
      description: "An ed-tech and IT consulting platform providing comprehensive training in Full Stack Web Development, IT staffing, corporate recruitment, and student placement drives with interactive course catalogs and LMS integration.",
      techStack: ["React.js", "JavaScript (ES6+)", "Bootstrap", "HTML5", "CSS3", "React Router", "Vercel"],
      features: [
        "Interactive Hero banner and recruitment marquee showcasing corporate placement partners",
        "Comprehensive service portfolio covering Training & Education, Full Stack Web Development, and IT Staffing",
        "Student placement statistics dashboard tracking salary packages, student metrics, and recruitment drives",
        "Detailed curriculum and course breakdown for Full Stack Development and Digital Marketing",
        "Multi-page responsive experience with dedicated About Us, Services, Placement, and Contact modules",
        "Direct LMS portal connectivity and inquiry contact management"
      ],
      github: "https://github.com/Sachint122/Destination-by-React",
      live: "https://destination-by-react-git-main-sachin-tiwaris-projects-48ac4128.vercel.app/",
      image: "/images/dti-hero.webp",
      images: [
        "/images/dti-hero.webp",
        "/images/dti-services.webp",
        "/images/dti-placements-stats.webp",
        "/images/dti-why-choose-us.webp",
        "/images/dti-about.webp",
        "/images/dti-placements.webp",
        "/images/dti-contact.webp"
      ],
      category: "frontend",
      featured: true
    },

    {
      id: "home-automation",
      title: "Home Automation App",
      description: "IoT-based Android application that enables users to control home electrical appliances remotely via smartphone. Built using Android Studio with real-time control and device status feedback.",
      techStack: ["Android Studio", "Java", "IoT", "Firebase"],
      features: [
        "Remote control of electrical devices",
        "Real-time device status monitoring",
        "User-friendly UI",
        "Secure device pairing"
      ],
      github: "https://github.com/Sachint122/Home-Automation",
      live: null,
      image: "/images/home-automation.png",
      category: "android",
      featured: true
    },
    {
      id: "library-management",
      title: "Library Management System",
      description: "Full-featured web-based system for managing library operations including books, members, and transactions. Built using Node.js, Express, and MongoDB.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Bootstrap", "HTML", "CSS"],
      features: [
        "Book inventory management",
        "Member registration and tracking",
        "Issue/return management",
        "Automated fine calculation",
        "Advanced search and filter"
      ],
      github: "https://github.com/Sachint122/webapp.git",
      live: null,
      image: "/images/library-mgmt.png",
      category: "fullstack",
      featured: false
    },
    {
      id: "car-rental-website",
      title: "Car Rental Website",
      description: "Frontend project designed to showcase car rental services with smooth UI, responsive layouts, and interactive design using front-end technologies.",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Responsive design",
        "Attractive car showcase section",
        "Booking form with validation",
        "Smooth animations and transitions"
      ],
      github: "https://github.com/Sachint122/car-rental-by-React",
      live: null,
      image: "/images/car-rental.png",
      category: "frontend",
      featured: false
    },
    {
      id: "pasovit-task-manager",
      title: "Pasovit Task Manager API",
      description: "A backend REST API for task management with user roles, JWT authentication, and SQL database integration. Built as a backend assessment project.",
      techStack: ["Node.js", "Express.js", "MySQL", "JWT", "Supabase"],
      features: [
        "User authentication and authorization",
        "Task CRUD operations",
        "Search and filter functionality",
        "Dashboard analytics"
      ],
      github: "https://github.com/Sachint122/Backend-Assessment-Test",
      live: null,
      image: "/images/task-manager.png",
      category: "backend",
      featured: false
    },
    {
      id: "youtube-downloader",
      title: "YouTube Downloader",
      description: "A Node js script to download YouTube videos and audio in different formats ",
      techStack: ["Node.js", "ytdl-core"],
      features: [
        "Download videos in multiple formats",
        "Fast and reliable processing",
        "Error handling and validation"
      ],
      github: "https://github.com/Sachint122/youTube-video-Download",
      live: null,
      image: "/images/youtube-downloader.png",
      category: "Node js",
      featured: true
    }
  ],

  experience: [
    {
      id: 1,
      company: "Dindia",
      position: "Web Developer",
      location: "India",
      duration: "June 2026 - Present",
      description: "Working as a Web Developer contributing to full-stack enterprise ERP & Office Management software while developing, optimizing, and deploying responsive corporate web platforms.",
      responsibilities: [
        "Contributed to developing a full-stack ERP & Office Management System centralizing workforce operations, RBAC, CRM telecaller pipelines, and invoice/revenue tracking",
        "Developed and deployed two company websites (Dindia and Dindia Infratech) featuring modern responsive UI, SEO optimizations, and Google Maps integration",
        "Engineered Role-Based Access Control (RBAC) across four distinct roles: Super Admin, HR, Employee, and Telecaller",
        "Built attendance tracking, Daily Work Reports (DWR), and leave management integrated with automated PDF data extraction",
        "Implemented employee lifecycle workflows including soft delete (Employee Trash, Restore, and Purge flows)",
        "Integrated REST APIs with centralized error handling and optimized application performance by reducing redundant API calls",
        "Automated continuous build and deployment pipelines using GitHub Actions and Vite for Hostinger hosting"
      ]
    },
    {
      id: 2,
      company: "WorkElate",
      position: "MERN Stack Developer Intern",
      location: "Remote",
      duration: "Aug 2025 - september 2025",
      description: "Working as a MERN Stack Developer Intern, contributing to the development and optimization of web applications with a focus on scalable backend systems and clean, efficient frontend designs.",
      responsibilities: [
        "Developed and maintained web applications using the MERN stack",
        "Integrated RESTful APIs for seamless communication between frontend and backend",
        "Implemented authentication and authorization using JWT",
        "Collaborated with the team to debug, test, and deploy new features"
      ]
    },
    {
      id: 3,
      company: "Suzuki Car Manufacturing",
      position: "Production Engineering",
      location: "Aahamdabad Gujarat",
      duration: "sepetember 2020 - March 2021",
      description: "Worked in the production department ensuring quality control, assembly line efficiency, and adherence to safety protocols during car manufacturing.",
      responsibilities: [
        "Monitored and maintained product quality standards on the assembly line",
        "Assisted in optimizing workflow and improving operational efficiency",
        "Collaborated with team members to meet daily production targets",
        "Received the FTC Reward for exceptional performance"
      ]
    },
    {
      id: 4,
      company: "Deffotech",
      position: "Backend Developer Intern",
      location: "Remote",
      duration: "Novemeber 2025 - February 2026",
      description: "Worked as a Backend Developer focusing on building scalable APIs, authentication systems, and real-world production-level features including payment integration and secure user management.",
      responsibilities: [
        "Developed and maintained RESTful APIs using Node.js and Express.js",
        "Implemented JWT-based authentication and role-based access control",
        "Integrated Razorpay payment gateway for secure online transactions",
        "Designed and optimized database schemas using MySQL",
        "Built and managed multiple production-level projects including E-commerce, Internship Management, and File Handling systems",
        "Handled API testing, debugging, and performance optimization using Postman",
        "Collaborated with team to deliver scalable and maintainable backend solutions"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of computer application in Computer Science",
      institution: "Mahatama Gandhi kashi vidyapeeth(MGKVP)",
      location: "Varanasi, India",
      year: "2021 - 2024",
      grade: "71%"
    },
    {
      degree: "ITI in Electrical",
      institution: "Amar private iti (NCVT)",
      location: "Bhiti,  Hadia, Prayagraj,India",
      year: "2017 - 2019",
      grade: "93%"
    }

  ]
};
