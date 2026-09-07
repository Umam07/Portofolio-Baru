export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Application' | 'System Workflows' | 'Mobile Application' | 'Design System' | 'UI/UX' | 'Scripting & Automation';
  role: string;
  year: string;
  featured: boolean;
  image: string;
  tags: string[];
  summary: string;
  description: string;
  impact: string;
  metrics: ProjectMetric[];
  caseStudyUrl?: string;
  links: {
    live?: string;
    github?: string;
    figma?: string;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Muhammad Syafi'ul Umam",
    preferredName: 'Umam',
    role: 'Software Developer & UI/UX Designer',
    designation: 'Software Development · UI/UX · Cyber Security',
    education: 'Fresh Graduate in Information Technology',
    headline: 'Fresh graduate documenting my journey in tech, software development, and digital products.',
    subtext: "Welcome to my personal portfolio. This is where I document my journey in tech, share my professional experiences, and showcase the skills and digital products I've built along the way.",
    location: 'Jakarta, Indonesia (UTC+7)',
    timezone: 'Asia/Jakarta',
    status: 'Open for Roles & Collaboration',
    isAvailable: true,
    email: 'muhammadumamsyafiul@gmail.com',
    resumeUrl: '/resume.pdf',
    socials: [
      { name: 'GitHub', url: 'https://github.com/Umam07', icon: 'github', username: '@Umam07' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin', username: 'LinkedIn' },
      { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram', username: 'Instagram' },
    ],
    stats: [],
  },

  about: {
    title: 'Bridging clean logic with intuitive craft.',
    subtitle: 'Turning complex workflows into dependable, human-centered digital solutions.',
    bio1: "I'm Muhammad Syafi'ul Umam, an Information Technology graduate from Universitas YARSI. I operate at the intersection of frontend engineering, enterprise workflows, and user interface craft.",
    bio2: "Rather than treating frontend as mere presentation, I view it as the vital layer where systems become accessible. My experience spans building modular web applications with React, TypeScript, and Tailwind CSS, to analyzing enterprise ERP business processes and executing structured UAT.",
    bio3: "I strive for digital solutions that are structurally sound, secure by design, and delightfully effortless to navigate.",
    values: [
      {
        title: 'Frontend Engineering',
        description: 'Developing modular, accessible, and type-safe web applications using React, TypeScript, Vite, and modern Tailwind CSS.',
      },
      {
        title: 'ERP & System Workflows',
        description: 'Analyzing enterprise business processes, mapping workflows, and executing User Acceptance Testing (UAT) with comprehensive technical documentation.',
      },
      {
        title: 'UI/UX & Design Systems',
        description: 'Crafting frictionless user journeys, consistent design tokens, and clean visual hierarchies in Figma that turn complexity into clarity.',
      },
    ],
  },

  skills: {
    core: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Figma',
    ],
    backend: [
      'Node.js',
      'Express.js',
      'Laravel',
      'REST API Integration',
    ],
    database: [
      'MySQL',
      'TiDB',
    ],
    tools: [
      'Git',
      'GitHub',
      'Vite',
      'VS Code',
    ],
    additional: [
      'Astro',
      'Flutter & Dart',
      'Odoo ERP Workflows',
      'User Acceptance Testing (UAT)',
      'Technical Documentation',
    ],
  },

  projects: [
    {
      id: 'pentadosen',
      title: 'PentaDosen — Lecturer Research & Performance Management',
      subtitle: 'A dedicated research, publication, and academic performance tracking platform for university lecturers.',
      category: 'Web Application',
      role: 'Frontend Developer & UI Implementation',
      year: '2025 – 2026',
      featured: true,
      image: '/images/projects/pentadosen.png',
      tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'REST API', 'Figma UI'],
      summary: 'Centralized portal empowering university lecturers to monitor research grants, publication milestones, intellectual property (HKI), and academic activity calendars.',
      description: 'PentaDosen was built to solve fragmented academic documentation for lecturers. Developed a modular, responsive dashboard featuring research grant tracking, publication status overviews, HKI intellectual property approval workflows, and an academic calendar schedule.',
      impact: 'Consolidates research documentation into a unified, user-friendly interface that streamlines academic reporting and performance tracking.',
      caseStudyUrl: '/projects/pentadosen',
      metrics: [
        { label: 'Core Modules', value: 'Dashboard · HKI · Research' },
        { label: 'Frontend Stack', value: 'React · Vite · Tailwind' },
        { label: 'Architecture', value: 'Component-Driven' },
      ],
      links: {
        live: 'https://pentadosen.yarsi.ac.id/',
        github: 'https://github.com/Umam07',
      },
    },
    {
      id: 'ctech-erp-workflow',
      title: 'C-Tech ERP — Odoo System Workflows & Module Documentation',
      subtitle: 'Functional ERP blueprints, UAT validation, and technical manual books across core Odoo enterprise modules.',
      category: 'System Workflows',
      role: 'Functional ERP Intern',
      year: '2025 - 2026',
      featured: true,
      image: '/images/projects/ctech-erp.jpg',
      tags: ['Odoo ERP', 'Business Process', 'UAT', 'Manual Book', 'Purchase & Construction', 'Master Data'],
      summary: 'System workflows, functional analysis, and comprehensive user manual documentation for enterprise Odoo ERP implementation.',
      description: 'Analyzed enterprise business processes and formulated functional blueprints for Odoo ERP modules. Authored end-user manual books for Purchase and Construction modules, executed User Acceptance Testing (UAT), and managed master data validation across Inventory, Sales, and Accounting.',
      impact: 'Bridged business requirements with system execution through rigorous UAT and comprehensive standard operating procedures.',
      metrics: [
        { label: 'Modules Covered', value: 'Purchase · Inventory · Sales' },
        { label: 'Documentation', value: 'Manual Books & UAT' },
        { label: 'ERP Platform', value: 'Odoo Ecosystem' },
      ],
      links: {
        github: 'https://github.com/Umam07',
      },
    },
    {
      id: 'infolansia',
      title: 'InfoLansia — Posyandu Elderly Health Monitoring',
      subtitle: 'A digital health monitoring solution for community Posyandu healthcare workers to track elderly wellness metrics.',
      category: 'Mobile Application',
      role: 'Mobile Developer',
      year: '2024 - 2025',
      featured: true,
      image: '/images/projects/infolansia.jpg',
      tags: ['Flutter', 'Dart', 'Mobile App', 'Health Tech', 'Posyandu'],
      summary: 'Cross-platform mobile application designed for community healthcare workers to conduct structured elderly health screening and monitor longitudinal wellness trends.',
      description: 'Digitized manual, paper-based health recording workflows into a structured mobile app. Features periodic screening checklists, biometric trend tracking, and aggregated health reports for local healthcare cadres.',
      impact: 'Replaced manual records with automated trend visualization, enabling faster screening cycles and structured wellness tracking.',
      metrics: [
        { label: 'Technology', value: 'Flutter & Dart' },
        { label: 'Platform', value: 'Mobile Application' },
        { label: 'Domain', value: 'Community Health' },
      ],
      links: {
        github: 'https://github.com/Umam07/InfoLansia',
      },
    },
    {
      id: 'sirapi',
      title: 'SiRapi — Intelligent Directory & File Sorting Utility',
      subtitle: 'Lightweight PowerShell automation script for intelligent, conflict-free file routing and workspace organization.',
      category: 'Scripting & Automation',
      role: 'Script Developer',
      year: '2025',
      featured: true,
      image: '/images/projects/sirapi.png',
      tags: ['PowerShell', 'Automation', 'CLI Script', 'File System', 'Workflow Utility'],
      summary: 'Automated file organization utility built in PowerShell that classifies and moves unorganized workspace files into categorized subfolders by extension safely and non-destructively.',
      description: 'SiRapi is an intelligent directory organization utility written in PowerShell. It systematically scans designated folders, analyzes file extensions, and routes items into neatly structured subfolders with collision detection to prevent overwriting existing assets.',
      impact: 'Automates workspace cleanup with fast, non-destructive file sorting, zero external dependencies, and reliable collision prevention.',
      metrics: [
        { label: 'Runtime Engine', value: 'PowerShell 7+ / 5.1' },
        { label: 'Execution Mode', value: 'Zero-Dependency CLI' },
        { label: 'Safety Level', value: 'Non-Destructive' },
      ],
      links: {
        github: 'https://github.com/Umam07',
      },
    },
  ] as Project[],

  experience: [
    {
      period: '11 Aug 2025 — 11 Feb 2026',
      role: 'Functional ERP Intern',
      company: 'C-Tech ERP Indonesia',
      location: 'Indonesia',
      type: 'Internship',
      description: 'Analyzed enterprise business processes, authored functional documentation and operational manual books, and conducted User Acceptance Testing (UAT) across Odoo ERP modules.',
      highlights: [
        'Business Process & ERP Workflow Analysis: Mapped user requirements and prepared functional blueprints for enterprise procurement and operational flows.',
        'User Acceptance Testing (UAT): Conducted structured test scenarios across modules to validate that system functionalities aligned with real stakeholder needs.',
        'Comprehensive System Documentation: Authored complete end-user manual books and standard operating procedures for Purchase and Construction modules.',
        'Data Migration & Master Data Validation: Managed master data verification and import pipelines across Inventory, Sales, and Accounting.',
        'Odoo Module Competence: Analyzed Inventory, Purchase, Sales, Accounting, Manufacturing, Lot/Serial Numbers, Replenishment, MPS, Inventory Valuation, and Move History.',
        'Translating Business Requirements: Created system mockups and functional specifications bridging end-users and technical teams.',
      ],
      skills: [
        'Business Process Analysis',
        'ERP Workflow Analysis',
        'User Acceptance Testing (UAT)',
        'System Documentation',
        'Manual Book Creation',
        'Master Data Handling',
        'Stakeholder Collaboration',
        'Odoo ERP',
      ],
    },
  ] as ExperienceItem[],

  seo: {
    title: "Muhammad Syafi'ul Umam — Frontend Developer & UI/UX Designer",
    description: "Portfolio of Muhammad Syafi'ul Umam (Umam), an Information Technology student at Universitas YARSI specializing in Frontend Development & UI/UX Design. Building responsive, accessible, and production-ready web applications.",
    url: 'https://syafiul.id',
    ogImage: '/images/projects/pentadosen.png',
    keywords: [
      "Muhammad Syafi'ul Umam",
      "Syafi'ul Umam",
      'Syafiul',
      'Umam',
      'Frontend Developer',
      'UI/UX Designer',
      "Muhammad Syafi'ul Umam Frontend Developer",
      'Universitas YARSI',
      'PentaDosen',
      'React Developer Indonesia',
      'Tailwind CSS',
      'Web Developer Jakarta',
    ],
  },
};
