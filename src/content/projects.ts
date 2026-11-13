import { person } from "@/content/person";

export type ProjectImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectType = {
  name: string;
  description: string;
  href: string;
  stack: string[];
  image: ProjectImageType;
};

export const featuredProject: ProjectType = {
  name: "This portfolio",
  description:
    "A rebuild of my 2022 portfolio. It is exported as static files and served by nginx from my own hardened VPS, so there is no server-side code to attack. A strict Content Security Policy only lets the site's own scripts run.",
  href: `${person.githubUrl}/portfolio-v2`,
  stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Static export", "nginx", "CSP"],
  image: {
    src: "/images/projects/portfolio-v2.webp",
    alt: "Screenshot of this portfolio site",
    width: 1440,
    height: 900,
  },
};

export const projects: ProjectType[] = [
  {
    name: "Retirement calculator",
    description:
      "See how long your savings last, in rand and in today's money. Save and compare up to three scenarios. Everything stays in your browser.",
    href: "/apps/retirement/",
    stack: ["Rust", "WebAssembly", "Leptos", "SVG chart", "localStorage", "Unit-tested maths"],
    image: {
      src: "/images/projects/retirement-calculator.webp",
      alt: "Screenshot of the retirement calculator",
      width: 1200,
      height: 750,
    },
  },
  {
    name: "Expense tracker",
    description:
      "Track spending per month against a budget for each category, with a breakdown chart, search and CSV or JSON export. Everything stays in your browser.",
    href: "/apps/expenses/",
    stack: ["C#", ".NET 10", "Blazor WebAssembly", "SVG chart", "localStorage", "xUnit"],
    image: {
      src: "/images/projects/expense-tracker.webp",
      alt: "Screenshot of the expense tracker",
      width: 1200,
      height: 750,
    },
  },
  {
    name: "Holiday home booking",
    description:
      "A demo booking site for imaginary South African holiday homes: search and filter, an availability calendar, a price breakdown with VAT and your bookings. All artwork is drawn in code.",
    href: "/apps/stays/",
    stack: ["TypeScript", "React", "Vite", "Zod", "React Hook Form", "Vitest"],
    image: {
      src: "/images/projects/holiday-booking.webp",
      alt: "Screenshot of the holiday home booking",
      width: 1200,
      height: 750,
    },
  },
  {
    name: "Beauty salon booking",
    description:
      "A demo booking site for Honeycomb, an imaginary beauty studio in Durban North: a price list, a therapist and a free time from the diary, a price breakdown with VAT and your appointments. All artwork is drawn in code.",
    href: "/apps/salon/",
    stack: ["TypeScript", "React", "Vite", "Zod", "React Hook Form", "Vitest", "Playwright"],
    image: {
      src: "/images/projects/beauty-salon.webp",
      alt: "Screenshot of the Honeycomb beauty salon booking",
      width: 1200,
      height: 750,
    },
  },
];
