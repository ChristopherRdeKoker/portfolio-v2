export type AchievementType = { title: string; detail: string };

export const achievements: AchievementType[] = [
  {
    title: "Production authentication with Auth.js",
    detail:
      "Personally implemented production-ready authentication for an enterprise-sized company app.",
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
