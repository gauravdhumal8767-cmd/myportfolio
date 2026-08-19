export const portfolioData = {
  personal: {
    name: "Gaurav Dhumal",
    role: "Frontend Developer",
    location: "Shevgaon, Maharashtra, India",
    email: "gauravdhumal8767@gmail.com",
    availability: "Available for freelance & full-time roles",
    avatar: "./public/profile.jpeg",
    bioShort: "Passionate Frontend Developer specializing in building modern, responsive, and user-centric web applications using React.js and modern CSS.",
    bioLong: "I am a dedicated frontend developer transforming complex design concepts into seamless, intuitive, and responsive digital experiences. I believe in clean code, accessible design, and continuous learning.",
    resumeUrl: "#",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      codepen: "https://codepen.io/"
    }
  },

  // EmailJS Configuration for receiving messages directly in your inbox
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",   // Replace with your EmailJS service ID
    templateId: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
    publicKey: "YOUR_PUBLIC_KEY"    // Replace with your EmailJS Public Key
  },

  stats: [
    { label: "Years Experience", value: "6 months" },
    { label: "Projects Completed", value: "2+" },
    { label: "Code Commits", value: "1,200+" }
  ],

  about: {
    intro: "Hello! I'm Gaurav Dhumal, a frontend developer based in Maharashtra, India. I craft high-performance web applications with a sharp eye for design details, responsive layouts, and smooth user interactions.",
    education: [
      {
        period: "2025 - 2027",
        degree: "B.S. in Computer Science",
        institution: "Savitribai Phule Pune University, Pune, India",
        description: "Focus on Human-Computer Interaction, Web Technologies, Software Engineering, and Data Structures."
      }
    ],
    goals: [
      "Master modern micro-frontend architectures and Next.js 15 server actions.",
      "Contribute actively to open-source UI libraries and developer tooling.",
      "Build highly accessible, lightning-fast digital products that elevate user experiences."
    ]
  },

  skills: [
    {
      name: "HTML5",
      level: 95,
      icon: "bi-filetype-html",
      category: "Frontend Core",
      color: "#e34f26",
      description: "Semantic markup, modern APIs, SEO best practices, accessibility (ARIA)."
    },
    {
      name: "CSS3 / Modern CSS",
      level: 90,
      icon: "bi-filetype-css",
      category: "Frontend Core",
      color: "#1572b6",
      description: "Flexbox, Grid, Custom Properties, keyframe animations, responsive design."
    },
    {
      name: "JavaScript (ES6+)",
      level: 88,
      icon: "bi-filetype-js",
      category: "Frontend Core",
      color: "#f7df1e",
      description: "Async/Await, Closures, DOM manipulation, modular architecture, fetch/REST."
    },
    {
      name: "Bootstrap 5",
      level: 92,
      icon: "bi-bootstrap-fill",
      category: "UI Framework",
      color: "#7952b3",
      description: "Grid system, utilities, responsive breakpoints, customized themes, modals."
    },
    {
      name: "React.js",
      level: 90,
      icon: "bi-code-slash",
      category: "Frontend Framework",
      color: "#61dafb",
      description: "Hooks, Context API, state management, reusable components, Vite."
    },
    {
      name: "Git & GitHub",
      level: 85,
      icon: "bi-git",
      category: "Tools & Workflow",
      color: "#f05032",
      description: "Version control, branching strategies, pull requests, CI/CD basics."
    }
  ],

  projects: [
    {
      id: 1,
      title: "DevPulse - SaaS Analytics Dashboard",
      tagline: "Real-time developer metrics & team performance monitoring",
      description: "A comprehensive SaaS dashboard featuring live interactive charts, user management, light/dark mode toggles, and responsive analytics widgets.",
      tags: ["React.js", "Bootstrap 5", "Chart.js", "CSS3"],
      imageGradient: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)",
      featured: true,
      liveUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/devpulse-dashboard"
    },
    {
      id: 2,
      title: "ShopSphere - Modern E-Commerce UI",
      tagline: "High-converting online store with seamless checkout flow",
      description: "A responsive e-commerce web application featuring product filtering, dynamic shopping cart drawer, instant search, and responsive grid layouts.",
      tags: ["React.js", "Bootstrap 5", "JavaScript ES6+", "HTML5"],
      imageGradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
      featured: true,
      liveUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/shopsphere-ecommerce"
    },
    {
      id: 3,
      title: "TaskFlow - Collaborative Project Board",
      tagline: "Intuitive Kanban-style task management application",
      description: "An interactive project management tool featuring drag-and-drop task boards, priority filters, task deadlines, and persistent localStorage sync.",
      tags: ["React.js", "CSS Grid", "Bootstrap 5", "Web Storage"],
      imageGradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
      featured: true,
      liveUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/taskflow-board"
    },
    {
      id: 4,
      title: "WeatherVista - Interactive Climate App",
      tagline: "Accurate forecasting with interactive radar and map views",
      description: "A clean weather application fetching real-time meteorological data with hourly/weekly forecast predictions, dynamic weather condition themes, and geolocation.",
      tags: ["JavaScript", "React.js", "OpenWeather API", "Bootstrap 5"],
      imageGradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      featured: false,
      liveUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/weathervista-app"
    }
  ]
};
