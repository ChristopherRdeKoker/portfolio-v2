export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionIdType = (typeof navItems)[number]["id"];
