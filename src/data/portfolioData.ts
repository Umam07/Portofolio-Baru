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
    role: 'Frontend Developer · UI/UX',
    designation: 'Frontend Developer & UI/UX',
    education: 'Information Technology Student at Universitas YARSI',
    headline: 'Building thoughtful, functional, and production-ready digital interfaces.',
    subtext: 'Information Technology student at Universitas YARSI with a focus on frontend development, UI/UX implementation, system workflows, and building genuinely useful digital products.',
    location: 'Jakarta, Indonesia (UTC+7)',
    timezone: 'Asia/Jakarta',
    status: 'Open for Opportunities & Projects',
    isAvailable: true,
    email: 'muhammadumamsyafiul@gmail.com',
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
    bio1: "I am an Information Technology student at Universitas YARSI in Jakarta with a strong interest in frontend development, UI/UX design, and digital product workflows.",
    bio2: "I enjoy translating user needs and wireframes into clean, accessible, and responsive web applications. Through my internship experience at C-Tech ERP Indonesia, I developed a solid foundation in understanding complex business processes, system blueprints, and structured technical documentation.",
    bio3: "Whether building a lecturer research management platform like PentaDosen or crafting modular component libraries, my goal is always to deliver interfaces that are both technically reliable and effortless to use.",
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
    frontend: [
      'React',
      'JavaScript (ES6+)',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'HTML5 & Modern CSS',
      'Astro',
      'Responsive Web Design',
    ],
    backend: [
      'Laravel',
      'Node.js',
      'Express.js',
      'REST API Integration',
    ],
    database: [
      'MySQL',
      'TiDB',
    ],
    design: [
      'Figma & Auto Layout',
      'UI/UX Prototyping',
      'Design Systems & Tokens',
      'Wireframing & User Flows',
      'UI Implementation',
    ],
    tools: [
      'Git & GitHub',
      'Odoo ERP Workflows',
      'VS Code',
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
      year: '2025',
      featured: true,
      image: '/images/projects/pentadosen.jpg',
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
      impact: 'Enhanced operational clarity and standard operating procedures for end-users across critical procurement and inventory workflows.',
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
      description: 'Conducted functional analysis, business workflow documentation, User Acceptance Testing (UAT), and manual book preparation across enterprise Odoo ERP modules.',
      highlights: [
        'Prepared functional blueprints and managed master data import validation for enterprise workflows.',
        'Authored detailed manual books and operational documentation for the Purchase and Construction modules.',
        'Executed User Acceptance Testing (UAT) to ensure system features adhered to business requirements.',
        'Analyzed core Odoo modules: Inventory, Purchase, Sales, Accounting, Manufacturing, Lot/Serial Numbers, Replenishment, MPS, Inventory Valuation, Move History, and Move Analysis.',
        'Created system mockups and documentation to bridge functional requirements with technical execution.',
      ],
      skills: ['Odoo ERP', 'ERP Workflows', 'Business Process Analysis', 'UAT', 'Manual Book Creation', 'Master Data Import', 'Mockup Design'],
    },
  ] as ExperienceItem[],

  seo: {
    title: "Muhammad Syafi'ul Umam (Umam) — Frontend Developer · UI/UX",
    description: "Personal portfolio of Muhammad Syafi'ul Umam, an Information Technology student at Universitas YARSI focused on frontend development, UI/UX implementation, system workflows, and web applications.",
    url: 'https://portfolio-baru.vercel.app',
    ogImage: '/images/projects/pentadosen.jpg',
    keywords: [
      "Muhammad Syafi'ul Umam",
      "Syafi'ul Umam",
      'Syafiul Umam',
      'Umam Frontend Developer',
      "Muhammad Syafi'ul Umam Frontend Developer",
      'Frontend Developer UI UX',
      'Universitas YARSI',
      'PentaDosen',
      'React Developer Indonesia',
      'Tailwind CSS',
      'Web Developer Jakarta',
    ],
  },
};
