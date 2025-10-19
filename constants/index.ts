import { ExpressIcon, FigmaIcon, MongoDBIcon, NextjsIcon, NodeJsIcon, PostgreSQLIcon, PythonIcon, ReactJsIcon, SanityIcon, StripeIcon, SupabaseIcon, TailwindCSSIcon, TypeScriptIcon, UpstashIcon } from "@/components/slider/Slidericon";


export const allLogos = [
    { name: "Python", id: 1, img: PythonIcon },
    { name: "Supabase", id: 2, img: SupabaseIcon },
    { name: "Nodejs", id: 3, img: NodeJsIcon },
    { name: "Reactjs", id: 4, img: ReactJsIcon },
    { name: "Sanity", id: 5, img: SanityIcon },
    { name: "Express", id: 6, img: ExpressIcon },
    { name: "PostgreSql", id: 7, img: PostgreSQLIcon },
    { name: "MongoDB", id: 8, img: MongoDBIcon },
    { name: "Nextjs", id: 9, img: NextjsIcon },
    { name: "Tailwind", id: 10, img: TailwindCSSIcon },
    { name: "Upstash", id: 11, img: UpstashIcon },
    { name: "Typescript", id: 12, img: TypeScriptIcon },
    { name: "Stripe", id: 13, img: StripeIcon },
    { name: "Figma", id: 14, img: FigmaIcon },
  ];




  export const workExperience = [
  {
    id: 1,
    title: "Modern Web Development",
    desc: "Building responsive and dynamic websites using React, Next.js, and TypeScript. Creating seamless user experiences with modern UI/UX principles.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/354259/react.svg",
  },
  {
    id: 2,
    title: "Frontend Specialist",
    desc: "Crafting pixel-perfect interfaces with Tailwind CSS, Material-UI, and modern JavaScript frameworks. Ensuring cross-browser compatibility and mobile responsiveness.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/374146/typescript-official.svg",
  },
  {
    id: 3,
    title: "Backend Development",
    desc: "Developing robust REST APIs and server-side applications using Node.js, Express, and MongoDB. Implementing secure authentication and database management.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/378837/node.svg",
  },
  {
    id: 4,
    title: "Performance Optimization",
    desc: "Optimizing web applications for speed and performance. Implementing SEO best practices, caching strategies, and modern web vitals improvements.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    id: 5,
    title: "API Integration",
    desc: "Seamlessly connecting third-party services and APIs. Building custom integrations for payment gateways, CMS platforms, and external services.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/373595/firebase.svg",
  },
  {
    id: 6,
    title: "Database Management",
    desc: "Expert handling of SQL and NoSQL databases including MongoDB, PostgreSQL, and Firebase. Implementing efficient data structures and optimization strategies.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/373845/mongo.svg",
  },
];


// gradient-card data
export const cardData = [
  {
    badgeText: "Open / Invite-priority",
    badgeColor: "#F59E0B", // Amber
    title: "Client Projects",
    description:
      "We start by understanding your business goals and requirements to create a comprehensive project roadmap. Then craft scalable, AI-powered solutions with clean code architecture using React, Next.js, Express.js, and modern tools.",
    ctaText: "Start a project",
    ctaHref: "/contact",
    imageUrl:
      "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-CVv0qK2DYZbOAQP2LboVFgQGt0UMfB.png&w=320&q=75",
    gradient: "orange" as const,
    features: [
      "Discovery & strategy session",
      "UI/UX wireframes & prototyping",
      "Agile development with best practices",
      "CI/CD deployment & monitoring"
    ]
  },
  {
    badgeText: "Open for applications",
    badgeColor: "#4B5563", // Gray
    title: "Collaborations",
    description:
      "Open to collaborating on exciting projects with transparent workflow and real-time updates. From AI companions to SaaS platforms, we maintain comprehensive documentation and deliver milestone-based progress.",
    ctaText: "Collaborate",
    ctaHref: "/projects",
    imageUrl:
      "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5i9EDsbgEZk9k7NBeKt3ImNXkx0F66.png&w=320&q=75",
    gradient: "gray" as const,
    features: [
      "Daily progress reports",
      "Technical architecture documentation",
      "Code deployment notifications",
      "Issue resolution updates"
    ]
  },
  {
    badgeText: "Invite only",
    badgeColor: "#8B5CF6", // Purple
    title: "Mentorship",
    description:
      "1-on-1 mentorship on Full Stack development with structured timelines and clear deliverables. Learn Next.js, Express.js, Prisma, Drizzle, Appwrite, and Supabase through hands-on guidance and comprehensive documentation.",
    ctaText: "Request invite",
    ctaHref: "/mentorship",
    imageUrl:
      "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5WJZLkaCfLUnCYpgNz89tPx5C4KYgJ.png&w=320&q=75",
    gradient: "purple" as const,
    features: [
      "Project requirements & specifications",
      "API documentation & guides",
      "Deployment & maintenance guides",
      "Milestone completion tracking"
    ]
  },
  {
    badgeText: "Invite only",
    badgeColor: "#10B981", // Green
    title: "Partnerships",
    description:
      "Partner with us to co-create polished MVPs with efficient, transparent processes. We deliver scalable, AI-powered solutions for startups and agencies with modern design systems, seamless CI/CD pipelines, and continuous optimization.",
    ctaText: "Get in touch",
    ctaHref: "/contact",
    imageUrl:
      "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-Q24CTBwBqnBrGujxuykBW9GfOYTdeE.png&w=320&q=75",
    gradient: "green" as const,
    features: [
      "Comprehensive project documentation",
      "Real-time milestone updates",
      "Performance monitoring & optimization",
      "Long-term growth support"
    ]
  },
];
