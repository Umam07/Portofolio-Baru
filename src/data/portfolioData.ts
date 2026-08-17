export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Application' | 'System Workflows' | 'Mobile Application' | 'Design System' | 'UI/UX';
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
    role: 'Frontend Developer & UI/UX Designer',
    designation: 'Frontend Developer & UI/UX Designer',
    education: 'Information Technology Student at Universitas YARSI',
    headline: 'Building thoughtful, functional, and production-ready digital interfaces.',
    subtext: 'Information Technology student at Universitas YARSI specializing in Frontend Development & UI/UX Design. Focused on building responsive, accessible, and structured digital products.',
    location: 'Jakarta, Indonesia (UTC+7)',
    timezone: 'Asia/Jakarta',
    status: 'Open for Roles, Internships & Projects',
    isAvailable: true,
    email: 'muhammadumamsyafiul@gmail.com',
    resumeUrl: '/resume.pdf',
    socials: [
      { name: 'GitHub', url: 'https://github.com/Umam07', icon: 'github', username: '@Umam07' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin', username: 'LinkedIn' },
      { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram', username: 'Instagram' },
    ],
    stats: [
      { label: 'Core Focus', value: 'Frontend & UI/UX' },
      { label: 'University', value: 'Universitas YARSI' },
      { label: 'ERP Experience', value: 'C-Tech Indonesia' },
      { label: 'Location', value: 'Jakarta, ID' },
    ],
  },

  about: {
    title: 'About Me',
    bio1: "I am an Information Technology student at Universitas YARSI in Jakarta with a strong focus on frontend development and UI/UX design.",
    bio2: "I specialize in transforming Figma wireframes, design tokens, and user requirements into clean, accessible, and responsive web applications with React, TypeScript, and Tailwind CSS.",
    bio3: "My internship as a Functional ERP Intern at C-Tech ERP Indonesia equipped me with a deep appreciation for business requirements, User Acceptance Testing (UAT), system blueprints, and structured technical documentation—enabling me to understand how software serves real business operations.",
    values: [
      { title: 'Clarity', description: 'Intuitive layouts and crisp typography that help users accomplish tasks without friction.' },
      { title: 'Consistency', description: 'Modular components and token-driven design bridging Figma to production code.' },
      { title: 'Accessibility', description: 'Semantic HTML, responsive viewports, and readable contrast for all users.' },
      { title: 'Responsiveness', description: 'Fluid adaptations from mobile screens to high-density desktop monitors.' },
      { title: 'Performance', description: 'Fast loading, clean markup, and zero-bloat modern web architectures.' },
      { title: 'Simplicity', description: 'Functional aesthetics focused on what matters most to the user.' },
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
        live: '/projects/pentadosen',
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
      subtitle: 'Solusi digital untuk petugas Posyandu dalam memantau kesehatan lansia secara berkala.',
      category: 'Mobile Application',
      role: 'Developer',
      year: '2024 - 2025',
      featured: true,
      image: '/images/projects/infolansia.jpg',
      tags: ['Flutter', 'Dart', 'Mobile App', 'Health Tech', 'Posyandu'],
      summary: 'Solusi digital untuk petugas Posyandu dalam memantau kesehatan lansia secara berkala.',
      description: 'Memindahkan proses skrining manual ke sistem digital terintegrasi dengan visualisasi tren kesehatan untuk membantu petugas memantau kondisi lansia dengan lebih terstruktur.',
      impact: 'Memindahkan proses skrining manual ke sistem digital terintegrasi dengan visualisasi tren kesehatan untuk membantu pemantauan terstruktur.',
      metrics: [
        { label: 'Technology', value: 'Flutter & Dart' },
        { label: 'Platform', value: 'Mobile Application' },
        { label: 'Domain', value: 'Health Monitoring' },
      ],
      links: {
        github: 'https://github.com/Umam07/InfoLansia',
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
