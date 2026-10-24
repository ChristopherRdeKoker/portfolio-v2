export type Stat = { value: string; label: string };

export type TimelineEntry = {
  kind: "work" | "education";
  period: string;
  title: string;
  organisation: string;
  summary: string;
};

export type Achievement = { title: string; detail: string };

export type SkillGroup = { label: string; items: string[] };

export type StarterProject = {
  name: string;
  description: string;
  image: string;
  demoUrl: string;
};

export const person = {
  name: "Christopher de Koker",
  role: "Intermediate Full-Stack Software Developer",
  location: "Hillcrest, KZN, South Africa",
  email: "christopherdekoker@gmail.com",
  githubUrl: "https://github.com/ChristopherRdeKoker",
  githubHandle: "ChristopherRdeKoker",
  photo: "/images/christopher.webp",
} as const;

export const intro =
  "I build and maintain a production SaaS platform in TypeScript, React/Next.js and PostgreSQL. I like owning features end to end, from the database to the UI, and I have a strong eye for security and business-logic edge cases.";

export const about = [
  "I have almost 4 years of experience on a production SaaS platform at Owlbox Platforms, working day to day in TypeScript, React/Next.js and PostgreSQL. I often own features end to end, from database changes to the UI, and I enjoy finding and fixing the real-life bugs that only show up in production-ready apps.",
  "I came to software from psychology and teaching, so I build with the people using it in mind and can explain technical ideas clearly to non-technical colleagues. Outside work I build family-based apps and self-host them on my own Linux server with Docker.",
];

export const stats: Stat[] = [
  { value: "3.9", label: "Years building production SaaS" },
  { value: "200k+", label: "Lines of TypeScript in the codebase I work on" },
  { value: "21", label: "App sections covered in a structured bug hunt" },
  { value: "Many", label: "Grey hairs from debugging" },
];

export const achievements: Achievement[] = [
  {
    title: "Production authentication with Auth.js",
    detail: "Personally implemented production-ready authentication for the Owlbox platform.",
  },
  {
    title: "TanStack Router + tRPC → Next.js migration",
    detail: "Migrated our app from TanStack Router and tRPC to the Next.js App Router.",
  },
  {
    title: "Leave accrual rewrite",
    detail:
      "Rewrote the pro-rata leave accrual calculator so new employees' balances are calculated correctly, and shipped it to production.",
  },
  {
    title: "Structured security bug hunt",
    detail:
      "Ran a bug hunt across 21 sections of the app, prioritising authorisation, validation and business-logic issues for the team.",
  },
  {
    title: "Self-hosted, hardened Linux VPS",
    detail:
      "Set up and hardened my own server by hand: SSH key-only access, non-root users, firewall, fail2ban and SSL. This site runs on it.",
  },
  {
    title: "Family apps, PM2 → Docker",
    detail:
      "Built and deployed family-scoped apps (Next.js, PostgreSQL) and moved them from PM2 to Docker containers behind nginx.",
  },
  {
    title: "Health monitoring",
    detail:
      "Wrote scripts that watch disk, memory, SSL expiry, security and running services, and alert on problems.",
  },
  {
    title: "Local AI harnesses",
    detail:
      "Build and test local AI harnesses on my own GPU machine, including an LLM-driven bug finder run against real codebases.",
  },
];

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  {
    label: "Frameworks",
    items: ["React", "Next.js (App Router)", "TanStack Router", "tRPC", "Tailwind CSS"],
  },
  { label: "Backend & data", items: ["Node.js", "PostgreSQL", "Prisma", "Auth.js"] },
  { label: "Infrastructure", items: ["Docker", "Linux", "nginx", "Tailscale", "Git & GitHub"] },
  { label: "Tools", items: ["Neovim (LazyVim)", "AI-assisted development"] },
];

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    period: "Feb 2023 – Present",
    title: "Intermediate Full-Stack Software Developer",
    organisation: "Owlbox Platforms (Pty) Ltd",
    summary:
      "Build and maintain an enterprise-sized, multi-tenant HR and training SaaS platform: authentication, multi-step registration with email verification, type-safe server actions, database migrations and file-storage integrations.",
  },
  {
    kind: "work",
    period: "2019 – 2020",
    title: "Proposal Facilitator & Assistant Manager",
    organisation: "Blue Elevator Training Provider",
    summary:
      "Wrote and coordinated SETA training proposals, kept courses within SETA guidelines and BEE requirements, and prepared pricing and status reports for senior management.",
  },
  {
    kind: "work",
    period: "Jul 2015 – 2018",
    title: "Foreign English Teacher",
    organisation: "American Eagle Institute · Nanjing & Chengdu, China",
    summary:
      "Taught English to students and adults, developed lesson plans and assessments, and ran teacher-development workshops and presentations.",
  },
  {
    kind: "work",
    period: "Dec 2014 – Jun 2015",
    title: "Assistant Manager",
    organisation: "Beach View BnB & K.D.T.",
    summary:
      "Handled reservations, guest communication, staff scheduling, stock-taking and administration.",
  },
  {
    kind: "work",
    period: "Oct 2013 – Jun 2014",
    title: "Foreign English Teacher",
    organisation: "EF Education First · Baotou, Inner Mongolia, China",
    summary: "Taught English to students and adults, planned lessons and ran assessments.",
  },
  {
    kind: "education",
    period: "2012",
    title: "BSocSc Honours, Psychology",
    organisation: "University of KwaZulu-Natal (Howard College)",
    summary:
      "Neuropsychology, psychological assessment, research fundamentals and counselling. Volunteered as a teaching assistant at Open Air School, Glenwood.",
  },
  {
    kind: "education",
    period: "2009 – 2011",
    title: "Bachelor of Social Sciences, General & Industrial Psychology",
    organisation: "University of KwaZulu-Natal (Howard College)",
    summary: "Member of the Golden Key International Honour Society.",
  },
];

export const starterProjects: StarterProject[] = [
  {
    name: "Forkify",
    description: "Recipe search app with bookmarks and recipe uploads (MVC, API calls).",
    image: "/images/projects/forkify.webp",
    demoUrl: "https://forkify-cdk.netlify.app/",
  },
  {
    name: "Mapty",
    description: "Workout logger on a map using geolocation and Leaflet.",
    image: "/images/projects/mapty.webp",
    demoUrl: "https://mapty-cdk.netlify.app/",
  },
  {
    name: "Bankist app",
    description: "Banking dashboard with login, transfers, loans and sorting.",
    image: "/images/projects/bankist.webp",
    demoUrl: "https://cdk-bankist.netlify.app/",
  },
  {
    name: "Bankist landing page",
    description: "Marketing page with lazy loading, sticky navigation and a slider.",
    image: "/images/projects/bankist-landing.webp",
    demoUrl: "https://cdk-webpagedesign.netlify.app/",
  },
  {
    name: "Analogue clock",
    description: "A small responsive clock built with plain JavaScript and CSS.",
    image: "/images/projects/clock.webp",
    demoUrl: "https://cdk-basic-functional-clock.netlify.app/",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];
