import { useSyncExternalStore } from "react";
import { navItems, type SectionIdType } from "@/content/navigation";

const FIRST_SECTION_ID: SectionIdType = navItems[0].id;

let activeSectionId: SectionIdType = FIRST_SECTION_ID;

function subscribe(onChange: () => void) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      const visibleNavItem = navItems.find((navItem) => navItem.id === visibleEntry?.target.id);
      if (visibleNavItem) {
        activeSectionId = visibleNavItem.id;
        onChange();
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  for (const { id } of navItems) {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  }

  return () => observer.disconnect();
}

function readActiveSectionId() {
  return activeSectionId;
}

function readFirstSectionId() {
  return FIRST_SECTION_ID;
}

export function useActiveSectionId() {
  const result = useSyncExternalStore(subscribe, readActiveSectionId, readFirstSectionId);

  return result;
}
