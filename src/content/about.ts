export type StatType = { value: string; label: string };

export type SkillGroupType = { label: string; items: string[] };

export const about = [
  "I have almost 4 years of experience on an enterprise-sized production SaaS platform, working day to day in TypeScript, React/Next.js and PostgreSQL. I often own features end to end, from database changes to the UI, and I enjoy finding and fixing the real-life bugs that only show up in production-ready apps.",
  "I came to software from psychology and teaching, so I build with the people using it in mind and can explain technical ideas clearly to non-technical colleagues. Outside work I build family-based apps and self-host them on my own Linux server with Docker.",
];

export const stats: StatType[] = [
  { value: "3.9", label: "Years building production SaaS" },
  { value: "200k+", label: "Lines of TypeScript in the codebase I work on" },
  { value: "21", label: "App sections covered in a structured bug hunt" },
  { value: "Many", label: "Grey hairs from debugging" },
];

export const skills: SkillGroupType[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  {
    label: "Frameworks",
    items: ["React", "Next.js (App Router)", "TanStack Router", "tRPC", "Tailwind CSS"],
  },
  { label: "Backend & data", items: ["Node.js", "PostgreSQL", "Prisma", "Auth.js"] },
  { label: "Infrastructure", items: ["Docker", "Linux", "nginx", "Tailscale", "Git & GitHub"] },
  { label: "Tools", items: ["Neovim (LazyVim)", "AI-assisted development"] },
];
