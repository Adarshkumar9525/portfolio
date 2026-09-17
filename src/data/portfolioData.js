export const portfolioData = {
  personal: {
    name: "Adarsh Kumar",
    title: "Full Stack Developer (MERN Stack)",
    roleTitles: [
      "Full Stack MERN Developer",
      "React.js & Node.js Specialist",
      "REST API & Cloud Architect",
      "CSE Undergraduate @ Haridwar Univ"
    ],
    tagline: "Building scalable web applications with React.js, Node.js, Express.js & MongoDB",
    aboutShort: "Final-year B.Tech CSE student passionate about crafting high-performance full stack web architectures, clean maintainable code, and scalable microservices.",
    email: "adarshkumar952530@gmail.com",
    phone: "+91-9525302740",
    phoneDisplay: "+91 95253 02740",
    location: "Roorkee, Uttarakhand, India",
    github: "https://github.com/Adarshkumar9525",
    githubUsername: "Adarshkumar9525",
    linkedin: "https://linkedin.com/in/adarshrishab",
    linkedinUsername: "adarshrishab",
    resumeUrl: "/resume.pdf",
    avatar: "/profile.jpg",
    status: "Available for Full-time Roles & Internships"
  },

  stats: [
    { label: "MERN Stack Projects", value: "8+", sub: "Production & Academic" },
    { label: "Bundle Optimization", value: "70%", sub: "Route code-splitting" },
    { label: "JSON Compression", value: "80%", sub: "Brotli/Gzip efficiency" },
    { label: "Industry Experience", value: "4 Mos", sub: "CoreGen & cartED" }
  ],

  about: {
    lead: "I'm a final-year B.Tech Computer Science student at Haridwar University with hands-on experience building production-grade full stack applications.",
    paragraphs: [
      "My primary expertise is centered around the modern MERN stack (MongoDB, Express.js, React.js, Node.js) paired with Tailwind CSS, Next.js, and SQL. I specialize in architecting responsive user interfaces, designing secure RESTful APIs with RBAC authentication, and optimizing database query performance.",
      "During my internships at CoreGen and cartED, I drove real-world performance gains, automated shift-based SaaS architectures, and implemented automated data pipelines. I am a strong advocate of clean architecture, modular component-based development, and agile problem solving."
    ],
    highlights: [
      { title: "Education", detail: "B.Tech CSE, Haridwar University (Final Year)" },
      { title: "Core Stack", detail: "React, Node.js, Express.js, MongoDB, SQL" },
      { title: "Certifications", detail: "Meta Front-End & IBM AI Professional" },
      { title: "Focus Areas", detail: "Scalable APIs, Performance & Clean Architecture" }
    ]
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Languages & Frontend",
        description: "Building responsive, accessible, and high-performance interactive interfaces",
        skills: [
          { name: "React.js", level: "Advanced", icon: "Code2", color: "#61DAFB", popular: true },
          { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode2", color: "#F7DF1E", popular: true },
          { name: "Next.js", level: "Intermediate", icon: "Layers", color: "#ffffff", popular: true },
          { name: "Tailwind CSS", level: "Advanced", icon: "Palette", color: "#38BDF8", popular: true },
          { name: "HTML5 / CSS3", level: "Advanced", icon: "Layout", color: "#E34F26" },
          { name: "TypeScript (Foundations)", level: "Intermediate", icon: "Code", color: "#3178C6" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Databases",
        description: "Designing resilient REST endpoints, authentication protocols, and schema designs",
        skills: [
          { name: "Node.js", level: "Advanced", icon: "Server", color: "#68A063", popular: true },
          { name: "Express.js", level: "Advanced", icon: "Cpu", color: "#ffffff", popular: true },
          { name: "MongoDB / Atlas", level: "Advanced", icon: "Database", color: "#47A248", popular: true },
          { name: "RESTful APIs", level: "Advanced", icon: "Network", color: "#06B6D4", popular: true },
          { name: "SQL / MySQL", level: "Intermediate", icon: "Table2", color: "#4479A1" },
          { name: "JWT & RBAC Auth", level: "Advanced", icon: "ShieldCheck", color: "#F59E0B" }
        ]
      },
      {
        id: "tools",
        name: "Tools & DevOps Platforms",
        description: "Version control, containerization, API testing, and continuous cloud deployments",
        skills: [
          { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", color: "#F05032", popular: true },
          { name: "Postman", level: "Advanced", icon: "Send", color: "#FF6C37", popular: true },
          { name: "Docker", level: "Intermediate", icon: "Container", color: "#2496ED" },
          { name: "Vite", level: "Advanced", icon: "Zap", color: "#646CFF", popular: true },
          { name: "Vercel", level: "Advanced", icon: "Cloud", color: "#ffffff" },
          { name: "Render", level: "Intermediate", icon: "ServerCrash", color: "#46E3B7" }
        ]
      }
    ]
  },

  experience: [
    {
      id: "coregen",
      role: "Full Stack Developer Intern",
      company: "CoreGen",
      location: "Remote",
      period: "3 Months",
      type: "Internship",
      highlights: [
        "Developed and integrated scalable front-end components and RESTful APIs using the complete MERN stack.",
        "Implemented robust authentication mechanisms and optimized MongoDB indexing strategies for high-volume queries.",
        "Built dynamic data pipelines and participated in Agile sprint reviews, CI/CD code refactoring, and performance audits."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "REST APIs", "Agile/Scrum"]
    },
    {
      id: "carted",
      role: "Full Stack Developer Intern",
      company: "cartED, Haridwar University",
      location: "Remote",
      period: "1 Month",
      type: "Internship",
      highlights: [
        "Converted UI/UX wireframes into reusable, modular React.js UI components adhering to Component-Based Architecture.",
        "Built secure REST APIs with Role-Based Access Control (RBAC) middleware for multi-role workflows.",
        "Managed staging and production cloud deployments seamlessly on Render."
      ],
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Render", "RBAC"]
    }
  ],

  projects: [
    {
      id: "mishra-library",
      title: "Mishra Library – Reading Room ERP",
      subtitle: "Production Enterprise SaaS Management System",
      description: "A comprehensive production-grade SaaS ERP platform built for commercial reading rooms and libraries to automate real-time seat tracking, 4-shift rotations, dynamic billings, and reporting.",
      category: "Enterprise SaaS",
      featured: true,
      tags: ["React 19", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "Vite", "TanStack Query", "SheetJS"],
      highlights: [
        "Automated shift-based seat allocation across 100 seats and 4 shifts with real-time occupancy status.",
        "Secure REST endpoints for 30-day auto-renewals, payment logs, and dynamic Excel/PDF report generation with SheetJS.",
        "Implemented Gzip/Brotli payload compression reducing JSON data transfer size by up to 80%.",
        "Configured route-level lazy loading and code splitting, cutting initial JS bundle payload by 70%."
      ],
      liveDemo: "https://mishra-library-rr-rbll.vercel.app/students",
      github: "https://github.com/Adarshkumar9525",
      badge: "Production ERP"
    },
    {
      id: "doctor-appointment",
      title: "AI-Powered Doctor Appointment System",
      subtitle: "Smart Healthcare Scheduling Platform",
      description: "An intelligent healthcare triage and appointment scheduling application integrating Google Gemini AI to analyze patient symptoms and recommend specialized medical practitioners.",
      category: "AI & Full Stack",
      featured: true,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini AI", "JWT", "Tailwind CSS"],
      highlights: [
        "Integrated Google Gemini AI API to power an intelligent medical assistant for preliminary symptom checking and automated doctor recommendations.",
        "Scaffolded a multi-role scheduling portal following MVC architecture to streamline booking and doctor availability matrices.",
        "Implemented JSON Web Tokens (JWT) and protected route middleware to secure authentication and role-based views."
      ],
      liveDemo: "https://doctapp-frontend.vercel.app",
      github: "https://github.com/Adarshkumar9525",
      badge: "AI Powered"
    },
    {
      id: "job-portal",
      title: "Job Portal Web Application",
      subtitle: "Modern Job Discovery Engine",
      description: "A fast, modern candidate-employer discovery platform featuring lightning-quick job indexing, filterable criteria, and one-click social authentication.",
      category: "Web Application",
      featured: true,
      tags: ["React.js", "Vite", "Tailwind CSS", "Clerk Authentication", "OAuth"],
      highlights: [
        "Developed modular React components bundled via Vite to establish high-efficiency, cross-device client compatibility.",
        "Integrated Clerk Identity Management to deliver secure social OAuth onboarding and session persistence."
      ],
      liveDemo: "https://github.com/Adarshkumar9525",
      github: "https://github.com/Adarshkumar9525",
      badge: "Modern Web App"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Haridwar University",
      status: "In Progress (Final Year)",
      period: "2021 – Present",
      location: "Roorkee, Uttarakhand",
      details: "Focusing on Full Stack Web Architecture, Data Structures & Algorithms, Database Management Systems, and Cloud Computing."
    },
    {
      degree: "Class XII (Senior Secondary)",
      institution: "Shaheed Bhagat Singh Inter College",
      status: "Completed",
      period: "Graduated",
      location: "Bihar, India",
      details: "Science Stream (Physics, Chemistry, Mathematics, Computer Science)."
    }
  ],

  certifications: [
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta / Coursera",
      issuedDate: "Verified Credential",
      skills: ["React.js", "UI/UX Foundations", "Semantic HTML", "CSS3 Grid/Flexbox", "Responsive Design"],
      badgeColor: "from-blue-500 to-cyan-500",
      icon: "Award"
    },
    {
      title: "IBM Artificial Intelligence Professional Certificate",
      issuer: "IBM / Coursera",
      issuedDate: "Verified Credential",
      skills: ["AI Fundamentals", "Generative AI", "Machine Learning Basics", "Python", "API Integration"],
      badgeColor: "from-teal-500 to-emerald-500",
      icon: "Sparkles"
    }
  ]
};
