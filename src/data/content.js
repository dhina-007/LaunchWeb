export const company = {
  name: 'Launch Web',
  tagline: 'Design • Build • Grow',
  email: 'launchwebservice@gmail.com',
  phones: [
    { label: '+91 95855 23658', href: 'tel:+919585523658' },
    { label: '+91 90251 02679', href: 'tel:+919025102679' },
  ],
  location: 'Remote-first — Serving clients worldwide',
}

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/works', label: 'Our Works' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const techStack = [
  'React',
  'JavaScript',
  'Tailwind CSS',
  'Responsive Design',
  'SEO Ready',
  'Fast Performance',
]

export const whyChoose = [
  {
    title: 'Modern UI Design',
    text: 'Interfaces that feel current, calm, and carefully composed — never template-heavy.',
  },
  {
    title: 'Responsive Development',
    text: 'Every layout is built to perform beautifully across desktop, tablet, and mobile.',
  },
  {
    title: 'SEO Friendly',
    text: 'Semantic structure and technical foundations that help the right people find you.',
  },
  {
    title: 'Performance Optimized',
    text: 'Fast loads, lean assets, and clean delivery for a smoother visitor experience.',
  },
  {
    title: 'Clean Code',
    text: 'Maintainable React codebases you can grow with — not fragile one-offs.',
  },
  {
    title: 'Personal Attention',
    text: 'Direct collaboration with a small team that cares about the details.',
  },
  {
    title: 'Affordable Solutions',
    text: 'Premium standards with scopes that fit early-stage and growing businesses.',
  },
  {
    title: 'Reliable Support',
    text: 'We’re available after launch for refinements, updates, and next steps.',
  },
]

export const services = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description:
      'Professional websites that build trust and strengthen your online presence.',
    icon: 'Globe',
    span: 'md:col-span-2',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Business analytics dashboard on a laptop',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to generate leads.',
    icon: 'LayoutTemplate',
    span: '',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Designer reviewing a landing page layout',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Websites',
    description: 'Modern online stores with seamless shopping experiences.',
    icon: 'ShoppingBag',
    span: '',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Online shopping and checkout experience',
  },
  {
    id: 'custom-apps',
    title: 'Custom Web Applications',
    description: 'Scalable web applications tailored to your business.',
    icon: 'AppWindow',
    span: 'md:col-span-2',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Custom web application code on screen',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Beautiful and user-friendly digital experiences.',
    icon: 'Palette',
    span: '',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'UI UX design wireframes and color swatches',
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Improve visibility and search rankings.',
    icon: 'Search',
    span: '',
    image:
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'SEO research and search marketing workspace',
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Regular updates, security, and technical support.',
    icon: 'Wrench',
    span: '',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Technical maintenance and system support',
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Fast loading websites with excellent user experience.',
    icon: 'Zap',
    span: 'md:col-span-2',
    image:
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Performance charts and speed metrics',
  },
]

export const works = [
  {
    id: 'dhinagar-portfolio',
    name: 'Dhinagar S Portfolio',
    category: 'Portfolio',
    type: 'Live Project',
    summary:
      'Personal portfolio for a Java Spring Boot and full-stack developer — experience, skills, projects, and contact in a clean, production-ready layout.',
    focus: ['React', 'Responsive UI', 'SEO', 'Portfolio UX'],
    url: 'https://dhinagarportfolio.onrender.com/',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Developer workspace with laptop and code on screen',
  },
  {
    id: 'adarsh-portfolio',
    name: 'Adarsh Portfolio',
    category: 'Portfolio',
    type: 'Live Project',
    summary:
      'Full-stack developer portfolio with skills, project showcase, certifications, and a polished contact experience for Adarsh A B.',
    focus: ['UI/UX', 'React', 'Brand storytelling', 'Responsive design'],
    url: 'https://adarshportfolio-qdxx.onrender.com/',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Designer reviewing a portfolio layout on a laptop',
  },
  {
    id: 'skill-bridge',
    name: 'Skill Bridge LMS',
    category: 'Education',
    type: 'Live Project',
    summary:
      'E-learning platform with courses, progress tracking, and a modern React front end backed by Spring Boot.',
    focus: ['Spring Boot', 'React', 'LMS', 'Dashboard UI'],
    url: 'https://skill-bridge-s6zv.onrender.com/',
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Online learning setup with laptop and notebooks',
  },
  {
    id: 'aswin-portfolio',
    name: 'Aswin B Portfolio',
    category: 'Portfolio',
    type: 'Live Project',
    summary:
      'Frontend developer portfolio for Aswin B — clean introduction, skills, project highlights, and contact for new opportunities.',
    focus: ['Frontend', 'UI design', 'Responsive layout', 'Personal branding'],
    url: 'https://regal-sunshine-dfda35.netlify.app/',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'UI UX design wireframes and color swatches',
  },
  {
    id: 'invoice-billing',
    name: 'Invoice Billing Web App',
    category: 'Business',
    type: 'Live Project',
    summary:
      'Web app for creating, managing, and tracking invoices — billing workflows, client records, and payment status in one place.',
    focus: ['React', 'Invoicing', 'Billing', 'Dashboard UI', 'Spring Boot'],
    url: '',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Invoice documents and billing paperwork on a desk',
  },
  {
    id: 'sri-sai-sports-shop',
    name: 'Sri Sai Sports Shop',
    category: 'Landing',
    type: 'Live Project',
    summary:
      'High-converting landing page for a local sports shop — product highlights, store identity, and clear calls to action that drive visits and enquiries.',
    focus: ['Landing page', 'React', 'Sports retail', 'Responsive UI', 'Lead conversion'],
    url: 'https://sri-sai-sports.onrender.com/',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sports gear and soccer ball on an athletic field',
  },
]

export const processSteps = [
  { step: '01', title: 'Discover', text: 'Understanding your business.' },
  { step: '02', title: 'Plan', text: 'Creating the right strategy.' },
  { step: '03', title: 'Design', text: 'Designing a premium user experience.' },
  { step: '04', title: 'Develop', text: 'Building modern responsive websites.' },
  { step: '05', title: 'Launch', text: 'Deploying a fast optimized website.' },
  { step: '06', title: 'Support', text: 'Helping your business grow online.' },
]

export const expectations = [
  {
    title: 'Transparent Communication',
    text: 'We keep every project simple, honest, and collaborative.',
    icon: 'MessageSquare',
  },
  {
    title: 'Premium Quality',
    text: 'Every website is designed with attention to detail.',
    icon: 'Sparkles',
  },
  {
    title: 'Modern Technology',
    text: 'Built using current industry standards.',
    icon: 'Cpu',
  },
  {
    title: 'Reliable Support',
    text: "We're available even after launch.",
    icon: 'LifeBuoy',
  },
  {
    title: 'Business Focus',
    text: 'Every decision is made with your business goals in mind.',
    icon: 'Target',
  },
]

export const faqs = [
  {
    q: 'How long does a website take?',
    a: 'Every project is different, but most websites are completed within a few weeks.',
  },
  {
    q: 'Can you redesign my website?',
    a: 'Yes. We can modernize structure, design, and performance while preserving what already works.',
  },
  {
    q: 'Do you provide hosting?',
    a: 'Yes. We can guide setup or manage hosting so your site stays fast and secure.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Absolutely. Responsive design is part of every project we ship.',
  },
  {
    q: 'Do you build custom features?',
    a: 'Yes. From booking flows to dashboards, we build features that match your business needs.',
  },
  {
    q: 'Do you offer maintenance?',
    a: 'Yes. Ongoing updates, security checks, and improvements are available after launch.',
  },
]

export const values = [
  {
    title: 'Innovation',
    text: 'We use modern tools and thoughtful patterns to keep every build current.',
  },
  {
    title: 'Transparency',
    text: 'Clear scopes, honest timelines, and open communication from start to finish.',
  },
  {
    title: 'Quality',
    text: 'Craft over shortcuts — polish in design, development, and delivery.',
  },
  {
    title: 'Long-Term Partnership',
    text: 'We care about what happens after launch, not just the go-live date.',
  },
]

export const projectTypes = [
  'Business Website',
  'Landing Page',
  'E-Commerce',
  'Custom Web App',
  'Website Redesign',
  'UI/UX Design',
  'Other',
]

export const budgets = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 and more',
  'Not sure yet',
]
