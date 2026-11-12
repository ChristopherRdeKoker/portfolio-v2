import { pageContainerClasses } from "@/components/ui/classes";
import { person } from "@/content/person";
import { cn } from "@/lib/cn";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        pageContainerClasses,
        "border-line text-ink-muted border-t py-8 text-center text-sm",
      )}
    >
      © {year} {person.name} · Built with Next.js, TypeScript and Tailwind CSS
    </footer>
  );
}
