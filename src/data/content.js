export const company = {
  name: 'LunchWeb',
  tagline: 'Web Design • Software • Digital Solutions',
  email: 'launchwebservice@gmail.com',
  phones: [
    { label: '+91 95855 23658', href: 'tel:+919585523658', clean: '+919585523658' },
    { label: '+91 90251 02679', href: 'tel:+919025102679', clean: '+919025102679' },
  ],
  whatsapp: 'https://wa.me/919025102679?text=Hello%20LunchWeb%20team,%20I%20would%20like%20to%20discuss%20a%20project.',
  instagram: 'https://www.instagram.com/launch____web/',
  instagramHandle: '@launch____web',
  linkedin: 'https://www.linkedin.com/company/lunchweb',
  linkedinHandle: 'LunchWeb on LinkedIn',
  location: 'Remote-first — Serving clients worldwide',
  founded: '2024',
}

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/works', label: 'Our Works' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const stats = [
  { value: '100%', label: 'Custom Code & Craft' },
  { value: '98+', label: 'Lighthouse Performance' },
  { value: '10+', label: 'Live Digital Products' },
  { value: '24/7', label: 'Dedicated Support' },
]

export const techStack = [
  { name: 'React', desc: 'Interactive UI Library' },
  { name: 'Next.js', desc: 'Full-Stack Framework' },
  { name: 'TypeScript', desc: 'Type-Safe Codebase' },
  { name: 'Spring Boot', desc: 'Enterprise Java Backends' },
  { name: 'JavaScript', desc: 'Modern Web Engineering' },
  { name: 'Tailwind CSS', desc: 'Design Systems' },
  { name: 'PostgreSQL', desc: 'Scalable Databases' },
  { name: 'REST APIs', desc: 'System Integrations' },
]

export const whyChoose = [
  {
    number: '01',
    title: 'Business First',
    text: 'We build around your actual business goals—not just visual trends. Every feature serves a clear operational or revenue growth objective.',
  },
  {
    number: '02',
    title: 'Built for Real Users',
    text: 'Every experience is designed to be clear, responsive and easy to use across desktop, tablet, and mobile browsers.',
  },
  {
    number: '03',
    title: 'Modern Technology',
    text: 'Reliable modern technologies create scalable, secure, and easily maintainable digital products that grow with you.',
  },
  {
    number: '04',
    title: 'Long-Term Thinking',
    text: 'We focus on solutions that can evolve with your business long after launch date, providing ongoing technical partner support.',
  },
]

export const services = [
  {
    id: 'web-design-dev',
    number: '01',
    title: 'Web Design & Development',
    tagline: 'High-Performance Web Solutions',
    description: 'Modern, responsive websites designed to turn visitors into customers with high-speed delivery, clean visual hierarchy, and bespoke component design.',
    icon: 'Layout',
    span: 'md:col-span-2',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web Design', 'React UI', 'Responsive Layouts', 'SEO Ready'],
    deliverables: [
      'Custom React Component Architecture',
      'Mobile-First Responsive Across Viewports',
      'Core Web Vitals & Search Engine Optimization',
    ],
  },
  {
    id: 'custom-software',
    number: '02',
    title: 'Custom Software',
    tagline: 'Scalable Web Applications',
    description: 'Purpose-built web applications designed around the specific way your business operates, backed by Java Spring Boot & RESTful backend architectures.',
    icon: 'Code2',
    span: '',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    tags: ['Web Apps', 'Spring Boot', 'REST APIs', 'Databases'],
    deliverables: [
      'Tailored Enterprise Workflows',
      'Spring Boot & REST API Integrations',
      'Secure User Auth & Database Management',
    ],
  },
  {
    id: 'business-websites',
    number: '03',
    title: 'Business Websites',
    tagline: 'Digital Trust & Lead Conversion',
    description: 'Professional websites that establish immediate credibility and make it effortless for local & international clients to connect with your business.',
    icon: 'Globe',
    span: '',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80',
    tags: ['Brand Sites', 'Lead Generation', 'Fast Loading', 'Mobile First'],
    deliverables: [
      'High-Impact Brand Credibility Layouts',
      'Direct WhatsApp & One-Click Call Buttons',
      'Sub-Second Page Load Speeds',
    ],
  },
  {
    id: 'digital-solutions',
    number: '04',
    title: 'Digital Solutions',
    tagline: 'Smart Business Tools',
    description: 'Practical digital tools that simplify workflows, automate repetitive manual tasks, and enable teams to operate with higher productivity.',
    icon: 'Cpu',
    span: 'md:col-span-2',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
    tags: ['Workflow Automation', 'Dashboards', 'Portals', 'Integrations'],
    deliverables: [
      'Operational Workflow Automation',
      'Interactive Custom Client Dashboards',
      'Third-Party API & Data Integrations',
    ],
  },
  {
    id: 'ecommerce-solutions',
    number: '05',
    title: 'E-Commerce Platforms',
    tagline: 'Conversion Storefronts',
    description: 'Sleek online storefronts with friction-free product catalog browsing, mobile shopping optimization, and conversion-focused checkout flows.',
    icon: 'ShoppingBag',
    span: '',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    tags: ['E-Commerce', 'Catalog', 'Payment Gateway', 'Mobile Commerce'],
    deliverables: [
      'Smooth Product Catalog Filtering',
      'Secure Payment Gateway Triggers',
      'Mobile Shopping Optimization',
    ],
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design',
    tagline: 'Product Experience Design',
    description: 'Thoughtful user interfaces and digital product experiences built on clear typography, accessible contrast, and smooth micro-interactions.',
    icon: 'Palette',
    span: '',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
    tags: ['Figma Wireframes', 'Design Systems', 'User Journeys', 'Prototyping'],
    deliverables: [
      'Figma Design System Architecture',
      'User Journey & Wireframe Prototypes',
      'Accessible High-Contrast UI Layouts',
    ],
  },
  {
    id: 'video-editing',
    number: '07',
    title: 'Video Editing',
    tagline: 'High-Impact Commercial Editing',
    description: 'Professional video editing services designed to showcase your products, services, and brand identity with cinematic cuts, sound design, and motion graphic overlays.',
    icon: 'Video',
    span: '',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80',
    tags: ['Video Editing', 'Promotional Cuts', 'Motion Graphics', 'Reels & Shorts'],
    deliverables: [
      'High-Definition Brand & Product Editing',
      'Social Media Reels & Promotional Cuts',
      'Color Grading & Audio Enhancement',
    ],
  },
  {
    id: 'ai-ads-promotion',
    number: '08',
    title: 'AI Ads & Shop Promotion Videos',
    tagline: 'AI-Powered Video Commercials',
    description: 'AI-assisted promotional videos and high-converting video ad creatives tailored for local businesses, shops, and startups to drive customer visits and social leads.',
    icon: 'Sparkles',
    span: 'md:col-span-2',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI Ads', 'Shop Promotion Videos', 'Social Media Ads', 'Lead Generation'],
    deliverables: [
      'AI Voiceover & Scripted Video Commercials',
      'High-Converting Shop Promotion Videos',
      'Targeted Social Media Ad Asset Delivery',
    ],
  },
]

export const works = [
  {
    id: 'sri-sai-clinic',
    name: 'Sri Sai Clinic',
    category: 'Healthcare',
    type: 'Live Project',
    summary:
      'Modern healthcare & clinic management website with patient appointment booking, specialty doctor schedules, and instant contact channels.',
    focus: ['Healthcare UI', 'Appointment Flow', 'React', 'Responsive Design'],
    url: 'https://srisaiclinic.up.railway.app/',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sri Sai Clinic healthcare web interface on desktop screen',
    challenge:
      'Designing an intuitive digital portal for patients of all age groups to browse medical specialties, check specialist doctor availability, and request consultation appointments smoothly.',
    solution:
      'Built a ultra-clean, high-accessibility healthcare application with structured specialty breakdown, doctor timetable cards, interactive booking trigger, and direct emergency call buttons.',
    tech: ['React', 'Tailwind CSS', 'Responsive UI', 'Appointment Booking', 'SEO'],
  },
  {
    id: 'sri-sai-sports-shop',
    name: 'Sri Sai Sports Shop',
    category: 'Retail',
    type: 'Live Project',
    summary:
      'High-converting landing page for a local sports shop — product showcases, store identity, and clear calls to action driving store visits.',
    focus: ['Landing page', 'React', 'Sports retail', 'Lead conversion'],
    url: 'https://sri-sai-sports.onrender.com/',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sports gear showcase for Sri Sai Sports Shop',
    challenge:
      'Helping a retail sports business showcase premium athletic gear and attract local sports enthusiasts through a modern digital storefront.',
    solution:
      'Crafted a high-energy landing experience featuring category grids, brand identity highlights, direct customer inquiry flows, and Google Map integration.',
    tech: ['React', 'Tailwind CSS', 'Mobile First', 'Lead Generation'],
  },
  {
    id: 'skill-bridge',
    name: 'Skill Bridge LMS',
    category: 'Education',
    type: 'Live Project',
    summary:
      'E-learning management platform with course modules, progress tracking, and a sleek React front end backed by Spring Boot APIs.',
    focus: ['Spring Boot', 'React', 'EdTech LMS', 'Dashboard UI'],
    url: 'https://skill-bridge-s6zv.onrender.com/',
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Skill Bridge online learning management system UI',
    challenge:
      'Building a full-featured online learning hub where students can track course progress and view video modules seamlessly across devices.',
    solution:
      'Developed a responsive learning platform with interactive lesson navigation, user progress dashboards, and REST API integration with Spring Boot.',
    tech: ['Spring Boot', 'React', 'REST APIs', 'Dashboard UI'],
  },
  {
    id: 'dhinagar-portfolio',
    name: 'Dhinagar S Portfolio',
    category: 'Portfolio',
    type: 'Live Project',
    summary:
      'Developer portfolio for a Full-Stack Java & React engineer — showcase of enterprise projects, tech stack, and interactive contact flow.',
    focus: ['React', 'Spring Boot', 'Developer Brand', 'SEO'],
    url: 'https://dhinagarportfolio.onrender.com/',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Developer portfolio website interface on laptop',
    challenge:
      'Creating a polished professional portfolio that demonstrates full-stack Java Spring Boot and React engineering competencies.',
    solution:
      'Designed a sleek dark portfolio featuring live demo links, architecture highlights, resume integration, and crisp performance score.',
    tech: ['React', 'Tailwind CSS', 'Spring Boot', 'SEO'],
  },
  {
    id: 'adarsh-portfolio',
    name: 'Adarsh Portfolio',
    category: 'Portfolio',
    type: 'Live Project',
    summary:
      'Full-stack developer portfolio featuring technical certifications, client deliverables, and interactive project showcases.',
    focus: ['UI/UX', 'React', 'Brand storytelling', 'Responsive design'],
    url: 'https://adarshportfolio-qdxx.onrender.com/',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Adarsh portfolio website showcase',
    challenge:
      'Building an engaging developer brand layout to highlight full-stack projects and technical achievements to prospective clients.',
    solution:
      'Implemented custom animations, clean dark mode layouts, interactive skill badges, and quick contact modal options.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    id: 'aswin-portfolio',
    name: 'Aswin B Portfolio',
    category: 'Portfolio',
    type: 'Live Project',
    summary:
      'Frontend developer showcase featuring responsive UI components, performance optimizations, and polished brand presentation.',
    focus: ['Frontend', 'UI design', 'Responsive layout', 'Personal branding'],
    url: 'https://regal-sunshine-dfda35.netlify.app/',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Aswin B frontend developer portfolio screen',
    challenge:
      'Presenting frontend craft and UI precision through a clean, responsive layout designed for high visual impact.',
    solution:
      'Built a fast, lightweight portfolio website with smooth scrolling, crisp typography, and interactive project cards.',
    tech: ['React', 'JavaScript', 'CSS Modules'],
  },
  {
    id: 'invoice-billing',
    name: 'Invoice Billing Web App',
    category: 'Business',
    type: 'Web Application',
    summary:
      'Web-based billing and invoice creation system — managing client records, line items, automatic tax calculations, and PDF downloads.',
    focus: ['React', 'Invoicing', 'Spring Boot', 'Business Workflows'],
    url: '',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Invoice billing web application workspace',
    challenge:
      'Simplifying daily invoice generation for small business owners who need quick billing without complex accounting software.',
    solution:
      'Created an intuitive web application with real-time tax calculation, saved client profiles, and instant invoice PDF generation.',
    tech: ['React', 'Spring Boot', 'PDF Generation', 'Tailwind CSS'],
  },
]

export const processSteps = [
  { step: '01', title: 'Discover', text: 'Understand your business goals, target audience, and digital requirements.' },
  { step: '02', title: 'Plan', text: 'Define site architecture, user journeys, content structure, and technical stack.' },
  { step: '03', title: 'Design', text: 'Craft custom, high-converting dark-theme wireframes and UI components.' },
  { step: '04', title: 'Build', text: 'Develop clean, scalable React codebases backed by secure backends.' },
  { step: '05', title: 'Launch', text: 'Perform rigorous performance audits, SEO checks, and deploy to production.' },
]

export const faqs = [
  {
    q: 'How long does a website or web app project take?',
    a: 'Most business websites take between 2 to 4 weeks, while complex web applications take 4 to 8 weeks depending on custom feature requirements.',
  },
  {
    q: 'Can LunchWeb redesign my existing website?',
    a: 'Yes. We specialize in modernizing outdated websites into sleek, high-performing digital products while keeping your existing domain and SEO equity.',
  },
  {
    q: 'What technology stack do you use?',
    a: 'We build with modern industry standards including React, Next.js, JavaScript, TypeScript, Java Spring Boot, Tailwind CSS, and PostgreSQL databases.',
  },
  {
    q: 'Will my website be fully mobile responsive and fast?',
    a: 'A hundred percent. Every product we build undergoes strict mobile testing and performance tuning targeting 90+ Lighthouse scores.',
  },
  {
    q: 'Do you build custom web applications for specific business needs?',
    a: 'Yes. We build custom booking tools, customer portals, LMS platforms, billing systems, and inventory managers tailored to your workflow.',
  },
  {
    q: 'What post-launch support do you provide?',
    a: 'We provide post-launch maintenance, security updates, cloud deployment management, and feature enhancements to support your growth.',
  },
]

export const projectTypes = [
  'Business Website',
  'Custom Web Application',
  'Healthcare / Medical Site',
  'E-Commerce Storefront',
  'Video Editing & Commercials',
  'AI Ads & Shop Promotion Videos',
  'Website Redesign',
  'UI/UX Design System',
  'Other Digital Solution',
]

export const budgets = [
  'Under ₹15,000',
  '₹15,000 – ₹35,000',
  '₹35,000 – ₹75,000',
  '₹75,000 – ₹1,50,000',
  '₹1,50,000+',
  'To be discussed',
]
