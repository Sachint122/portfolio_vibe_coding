export const portfolioData = {
  about: {
    name: "Sachin Tiwari",
    title: "MERN Stack Developer",
    location: "Varanasi, India",
    age: 26,
    bio: "Passionate MERN Stack Developer with expertise in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in creating responsive user interfaces and robust backend systems.",
    email: "sachin.tiwari@example.com",
    phone: "+91-XXXXXXXXXX",
    github: "https://github.com/sachintiwari",
    linkedin: "https://linkedin.com/in/sachintiwari",
    twitter: "https://twitter.com/sachintiwari",
    resume: "/resume.pdf"
  },
  
  skills: {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 80 }
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
      { name: "Webpack", level: 75 }
    ]
  },
  
  projects: [
    {
      id: "home-automation",
      title: "Home Automation App",
      description: "IoT-based home automation system allowing users to control home appliances remotely through a web interface. Real-time device status monitoring and scheduling features.",
      techStack: ["React", "Node.js", "MongoDB", "MQTT", "Socket.io"],
      features: [
        "Real-time device control",
        "Scheduled automation",
        "Energy consumption monitoring",
        "Multi-user access control"
      ],
      github: "https://github.com/sachintiwari/home-automation",
      live: "https://home-automation-demo.com",
      image: "/images/home-automation.png",
      category: "fullstack",
      featured: true
    },
    {
      id: "send-mail-app",
      title: "Send Mail Application",
      description: "Email management application with features for composing, sending, and organizing emails. Built with MERN stack and integrated with SMTP services.",
      techStack: ["React", "Express.js", "Node.js", "MongoDB", "Nodemailer"],
      features: [
        "Rich text email composer",
        "Attachment support",
        "Email templates",
        "Contact management"
      ],
      github: "https://github.com/sachintiwari/send-mail-app",
      live: null,
      image: "/images/send-mail.png",
      category: "fullstack",
      featured: true
    },
    {
      id: "library-management",
      title: "Library Management System",
      description: "Comprehensive library management system for tracking books, members, and transactions. Features include book cataloging, issue/return management, and fine calculation.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Book inventory management",
        "Member registration",
        "Issue/return tracking",
        "Automated fine calculation",
        "Search and filter functionality"
      ],
      github: "https://github.com/sachintiwari/library-management",
      live: "https://library-mgmt-demo.com",
      image: "/images/library-mgmt.png",
      category: "fullstack",
      featured: false
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "Tech Solutions Pvt Ltd",
      position: "MERN Stack Developer",
      location: "Remote",
      duration: "Jan 2023 - Present",
      description: "Developing and maintaining web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      responsibilities: [
        "Built RESTful APIs using Node.js and Express.js",
        "Developed responsive UIs with React.js",
        "Implemented authentication and authorization",
        "Optimized database queries for better performance"
      ]
    },
    {
      id: 2,
      company: "Web Dev Agency",
      position: "Frontend Developer",
      location: "Varanasi, India",
      duration: "Jun 2021 - Dec 2022",
      description: "Focused on creating user-friendly interfaces and improving user experience for client projects.",
      responsibilities: [
        "Developed responsive websites using React.js",
        "Collaborated with designers to implement UI/UX",
        "Ensured cross-browser compatibility",
        "Mentored junior developers"
      ]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      location: "Varanasi, India",
      year: "2017 - 2021",
      grade: "8.5 CGPA"
    }
  ]
};
