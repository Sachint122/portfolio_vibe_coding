export const portfolioData = {
  about: {
    name: "Sachin Tiwari",
    title: "MERN Stack Developer",
    location: "Varanasi, India",
    age: 26,
    bio: "Passionate MERN Stack Developer with expertise in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in creating responsive user interfaces and robust backend systems.",
    email: "sachintiwari.751858@gmail.com",
    phone: "+91-8081731062",
    github: "https://github.com/sachint122",
    linkedin: "https://www.linkedin.com/in/sachin-tiwari-javafullstack/",
    whatsapp: "+918081731062"
  },

  // ✅ Add this resumes array
  resumes: [
    {
      id: 'resume-fullstack',
      title: 'Full Stack Developer',
      description: 'Focused on MERN stack development and full-stack projects',
      driveId: '1ZpMOEyuhiSZn6TWbpkVLa3w1sylzV-xd', // Replace with your Google Drive File ID
      icon: '💻',
      color: 'blue',
      tags: ['MERN', 'Full Stack', 'React', 'Node.js'],
      featured: true,
      lastUpdated: '2025-01-15'
    },
    {
      id: 'resume-backend',
      title: 'Backend Developer',
      description: 'Expert in Node.js, Express, and database management',
      driveId: '1zIgxSWQDHPWpIWEH25P49_TRoVwI6SLZ', // Replace with your Google Drive File ID
      icon: '⚙️',
      color: 'green',
      tags: ['Node.js', 'MongoDB', 'REST API', 'Express'],
      featured: false,
      lastUpdated: '2025-01-12'
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 80 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 70 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST API", level: 92 },
      { name: "JWT Auth", level: 80 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "npm/yarn", level: 90 },
    ]
  },

  projects: [
    {
      id: "send-mail-app",
      title: "Send Mail Application",
      description: "Email management application that allows users to compose, send, and organize emails efficiently with template support. Built with MERN stack and integrated SMTP functionality.",
      techStack: ["React", "Express.js", "Node.js", "MongoDB", "Google Auth"],
      features: [
        "Rich text email composer",
        "reusme add and delete",
        "Custom email templates add and delete",
        "history management delete serch and export",
        
      ],
      github: "https://github.com/Sachint122/Mail_System/tree/main/mail_system_live",
      live: "https://mail-system-five.vercel.app/",
      image: "/images/send-mail.png",
      category: "fullstack",
      featured: true
    },
    {
      id: "dti-website",
      title: "Destination Technology Institute Website",
      description: "Official website designed for an educational institute, focusing on responsive design and informative layouts for students and visitors.",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Responsive layout",
        "Course and faculty information",
        "Contact form integration",
        "Modern UI/UX design"
      ],
      github: "https://github.com/Sachint122/Destination-by-React",
      live: "https://destination-by-react-git-main-sachin-tiwaris-projects-48ac4128.vercel.app/",
      image: "/images/dti.png",
      category: "frontend",
      featured: false
    },
    {
      id: "rajasthani-fufi",
      title: "Rajasthani-kulfi",
      description: "A full-stack MERN web application designed to showcase and manage traditional Rajasthani cuisine. The platform allows users to explore dishes, place custom food orders, and manage menu data through an admin dashboard.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Bootstrap"],
      features: [
        "Dynamic food catalog with search and filter",
        "User authentication and order management",
        "Admin panel for adding and updating dishes",
        "Responsive UI with cultural Rajasthani theme"
      ],
      github: "https://github.com/Sachint122/rajasthani-kulfi",
      live: "https://rajasthani-kulfi-cxch.vercel.app/login",
      image: "/images/rajasthani-fufi.png",
      category: "fullstack",
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
      id: 2,
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
