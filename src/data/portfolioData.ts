export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Design System' | 'Web Application' | 'Interactive Experience' | 'E-Commerce';
  role: string;
  year: string;
  featured: boolean;
  image: string;
  tags: string[];
  summary: string;
  description: string;
  impact: string;
  metrics: ProjectMetric[];
  links: {
    live?: string;
    github?: string;
    figma?: string;
  };
  accentColor: string; // Tailwind tint or hex
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Freelance';
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const portfolioData = {
  personal: {
    name: "Muhammad Syafi'ul Umam",
    role: 'UI/UX Designer & Frontend Developer',
    designation: 'Design Engineer',
    headline: 'Engineering thoughtful digital interfaces with editorial craft.',
    subtext: 'Translating Figma design tokens into fluid, accessible, and ultra-performant web experiences.',
    location: 'Jakarta, Indonesia (UTC+7)',
    timezone: 'Asia/Jakarta',
    status: 'Open for Projects',
    isAvailable: true,
    email: 'muhammadumamsyafiul@gmail.com',
    resumeUrl: '#',
    socials: [
      { name: 'GitHub', url: 'https://github.com/Umam07', icon: 'github', username: '@Umam07' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin', username: 'LinkedIn' },
      { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram', username: '@instagram' },
    ],
    stats: [
      { value: '4+', label: 'Years Experience' },
      { value: '30+', label: 'Shipped Projects' },
      { value: '100%', label: 'Clean Code & A11y' },
      { value: '<100ms', label: 'Interaction Latency' },
    ],
  },

  skills: {
    design: [
      'UI/UX Architecture',
      'Design Systems & Tokens',
      'Figma & Auto Layout',
      'User Journey Mapping',
      'Wireframing & Prototyping',
      'Micro-Interactions & Motion',
      'Accessibility (WCAG AA)',
      'Design-to-Code Systems',
    ],
    frontend: [
      'Astro & Island Architecture',
      'React & Next.js',
      'TypeScript',
      'Tailwind CSS v4',
      'GSAP & ScrollTrigger',
      'Lenis Smooth Scroll',
      'Semantic HTML5 & Modern CSS',
      'Core Web Vitals & SEO',
    ],
    workflow: [
      'Git / GitHub Actions',
      'Component-Driven Development',
      'Storybook / UI Testing',
      'REST & GraphQL APIs',
      'Figma REST API Integration',
      'Performance Profiling',
    ],
  },

  projects: [
    {
      id: 'aura-design-system',
      title: 'Aura Design System & Component Studio',
      subtitle: 'Multi-brand design token system connecting Figma variables directly with production React code.',
      category: 'Design System',
      role: 'Lead Design Engineer',
      year: '2025',
      featured: true,
      image: '/images/projects/aura-ds.jpg',
      tags: ['Design Systems', 'Figma Tokens', 'React', 'Tailwind CSS', 'TypeScript', 'A11y'],
      summary: 'Bridged the gap between product design in Figma and code implementation with zero-drift tokens.',
      description: 'Architected a modular token taxonomy with automated exports from Figma variables to Tailwind CSS configs. Built 80+ WCAG 2.1 AAA compliant UI components with interactive documentation and fluid motion primitives.',
      impact: 'Accelerated feature development speed by 45% and eliminated visual regression bugs across 5 product squads.',
      metrics: [
        { label: 'UI Components', value: '85+' },
        { label: 'Design Tokens', value: '340+' },
        { label: 'Token Sync Drift', value: '0.0%' },
      ],
      links: {
        live: 'https://example.com/aura',
        github: 'https://github.com/example/aura-design-system',
        figma: 'https://figma.com/@example/aura',
      },
      accentColor: 'emerald',
    },
    {
      id: 'nexus-financial-os',
      title: 'Nexus Financial Operating Dashboard',
      subtitle: 'High-density real-time financial analytics dashboard with customizable bento widgets.',
      category: 'Web Application',
      role: 'Product Designer & Frontend Architect',
      year: '2024',
      featured: true,
      image: '/images/projects/nexus-os.jpg',
      tags: ['Fintech UX', 'Next.js', 'GSAP', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
      summary: 'Designed an elegant dark-mode financial workbench with sub-100ms micro-interactions.',
      description: 'Streamlined complex portfolio balances and multi-currency transactions into a customizable bento layout. Engineered real-time charting interactions and responsive split-screen audit drawers with zero layout shift.',
      impact: 'Handled over $14M+ in simulated daily volume with a 99.4% user satisfaction score.',
      metrics: [
        { label: 'Interaction Latency', value: '<80ms' },
        { label: 'Lighthouse Score', value: '99/100' },
        { label: 'User Retention', value: '+38%' },
      ],
      links: {
        live: 'https://example.com/nexus',
        github: 'https://github.com/example/nexus-os',
        figma: 'https://figma.com/@example/nexus',
      },
      accentColor: 'blue',
    },
    {
      id: 'veloce-spatial-commerce',
      title: 'Veloce Luxury Spatial Commerce',
      subtitle: 'Editorial luxury e-commerce experience with smooth inertia scroll and interactive preview.',
      category: 'Interactive Experience',
      role: 'UI/UX & Creative Developer',
      year: '2024',
      featured: true,
      image: '/images/projects/veloce-commerce.jpg',
      tags: ['Astro', 'Lenis Scroll', 'GSAP ScrollTrigger', 'Interaction Design', 'Tailwind'],
      summary: 'Created an immersive, high-fashion commerce site with buttery smooth narrative scrolling.',
      description: 'Engineered scroll-bound GSAP animations, dynamic typography scaling, and instant page transitions using Astro zero-JS server architecture and Lenis smooth momentum scrolling.',
      impact: 'Boosted average user session duration by +85% and achieved perfect 100/100 Core Web Vitals on mobile.',
      metrics: [
        { label: 'Mobile CWV', value: '100/100' },
        { label: 'Session Time', value: '+85%' },
        { label: 'TTFB Speed', value: '75ms' },
      ],
      links: {
        live: 'https://example.com/veloce',
        github: 'https://github.com/example/veloce-commerce',
        figma: 'https://figma.com/@example/veloce',
      },
      accentColor: 'indigo',
    },
    {
      id: 'synapse-ai-studio',
      title: 'Synapse Node-Based AI Canvas',
      subtitle: 'Visual node orchestration canvas for creative developers and prompt workflows.',
      category: 'Web Application',
      role: 'UI/UX Designer & Frontend Developer',
      year: '2024',
      featured: true,
      image: '/images/projects/synapse-canvas.jpg',
      tags: ['AI Interface', 'React Flow', 'Figma UI', 'Tailwind CSS', 'Motion'],
      summary: 'Designed an intuitive node graph interface for chaining generative AI pipelines.',
      description: 'Crafted a sleek, distraction-free dark interface with draggable node connectors, keyboard shortcuts, and instantaneous visual feedback for multi-model LLM generation.',
      impact: 'Accumulated 12,000+ active beta creators with over 4,500 community workflow templates.',
      metrics: [
        { label: 'Active Creators', value: '12k+' },
        { label: 'Community Clones', value: '4.5k' },
        { label: 'Satisfaction', value: '4.9/5' },
      ],
      links: {
        live: 'https://example.com/synapse',
        github: 'https://github.com/example/synapse-ai-studio',
      },
      accentColor: 'purple',
    },
  ] as Project[],

  experience: [
    {
      period: '2023 - Present',
      role: 'Senior Design Engineer',
      company: 'Studio Veloce',
      location: 'Remote',
      type: 'Full-time',
      description: 'Leading the bridge between product design and frontend engineering. Building scalable design systems and high-touch web applications.',
      highlights: [
        'Established automated Figma-to-code token workflows used across 5 major product squads.',
        'Engineered responsive web applications with sub-100ms Core Web Vitals and 100% test coverage.',
        'Mentored 6 junior designers and engineers on interaction design and modern CSS architecture.',
      ],
      skills: ['Design Systems', 'Astro', 'React', 'Tailwind CSS', 'GSAP', 'TypeScript', 'A11y'],
    },
    {
      period: '2021 - 2023',
      role: 'Frontend Developer & UI Specialist',
      company: 'Pixelcraft Interactive',
      location: 'Jakarta, ID',
      type: 'Full-time',
      description: 'Developed responsive client web apps, animated marketing platforms, and reusable component libraries.',
      highlights: [
        'Redesigned core client SaaS dashboards, increasing task completion rate by 34%.',
        'Implemented Lenis smooth scrolling and GSAP scroll experiences for flagship product launches.',
        'Maintained 99+ Lighthouse performance across all shipped client repositories.',
      ],
      skills: ['Figma', 'JavaScript', 'React', 'Tailwind CSS', 'CSS Grid', 'REST APIs'],
    },
    {
      period: '2020 - 2021',
      role: 'Junior UI/UX Designer & Web Developer',
      company: 'Creative Horizon',
      location: 'Bandung, ID',
      type: 'Full-time',
      description: 'Conducted user research, designed high-fidelity wireframes, and built clean HTML/CSS/JS websites for enterprise clients.',
      highlights: [
        'Delivered 18+ client landing pages and brand websites with pixel-perfect precision.',
        'Created interactive Figma prototypes for client stakeholder pitches with 95% approval rate.',
      ],
      skills: ['Figma', 'HTML5', 'CSS3', 'Wireframing', 'Prototyping', 'User Testing'],
    },
  ] as ExperienceItem[],

  testimonials: [
    {
      quote: 'Umam possesses that rare blend of pristine visual taste and robust frontend engineering skills. Handing him a design concept means receiving a production-ready, ultra-smooth web app that exceeds all expectations.',
      author: 'Alex Rivera',
      role: 'Head of Product',
      company: 'Veloce Technologies',
    },
    {
      quote: 'The attention to micro-interactions, layout balance, and performance was extraordinary. Our platform redesign led to an immediate +38% jump in user retention and engagement.',
      author: 'Sarah Chen',
      role: 'Engineering Director',
      company: 'Nexus Labs',
    },
    {
      quote: 'Working with Umam was seamless. His ability to translate complex user journeys into intuitive, accessible, and blazing fast web interfaces is truly best-in-class.',
      author: 'Marcus Vance',
      role: 'Founder & CEO',
      company: 'Aura Studio',
    },
  ] as Testimonial[],

  faq: [
    {
      q: 'What is a Design Engineer?',
      a: 'A Design Engineer operates at the intersection of UI/UX design and frontend development. I do not just design static mocks in Figma; I build the real, interactive, accessible, and performant code that powers the experience.',
    },
    {
      q: 'What is your typical design-to-development workflow?',
      a: '1. Discovery & User Journey mapping -> 2. Wireframes & High-Fidelity UI in Figma -> 3. Design Tokens & Component architecture -> 4. Frontend implementation (Astro/React + Tailwind + GSAP) -> 5. Performance profiling & accessibility testing -> 6. Deployment & documentation.',
    },
    {
      q: 'Are you available for freelance or full-time roles?',
      a: 'Yes, I am currently open to high-impact freelance projects, contract roles, or select full-time Design Engineer opportunities.',
    },
  ],

  seo: {
    title: "Muhammad Syafi'ul Umam — UI/UX Designer & Frontend Developer (Design Engineer)",
    description: "Portfolio of Muhammad Syafi'ul Umam, a Design Engineer specializing in UI/UX design systems, modern frontend architecture, GSAP micro-interactions, and high-performance web applications.",
    url: 'https://portfolio.dev',
    ogImage: '/og-image.png',
    keywords: [
      'UI/UX Designer',
      'Frontend Developer',
      'Design Engineer',
      'Astro Portfolio',
      'GSAP Animation',
      'Lenis Smooth Scroll',
      'Tailwind CSS v4',
      'React Developer',
      'Design Systems',
      'Indonesia Web Developer',
    ],
  },
};
