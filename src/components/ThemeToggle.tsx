"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { focusRingClasses } from "@/components/ui/classes";
import { cn } from "@/lib/cn";
import { applyTheme, ThemeEnum } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function readIsDark() {
  const isDark = document.documentElement.classList.contains("dark");

  return isDark;
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, readIsDark, () => true);

  function handleToggleTheme() {
    applyTheme(isDark ? ThemeEnum.Light : ThemeEnum.Dark);
  }

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "text-ink-muted hover:text-accent grid size-12 place-items-center rounded-full transition",
        focusRingClasses,
      )}
    >
      {isDark ? <Sun className="size-5" aria-hidden /> : <Moon className="size-5" aria-hidden />}
    </button>
  );
}
