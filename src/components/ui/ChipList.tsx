import { cn } from "@/lib/cn";

export enum ChipSizeEnum {
  Small = 1,
  Medium = 2,
}

const listClasses: Record<ChipSizeEnum, string> = {
  [ChipSizeEnum.Small]: "gap-1.5",
  [ChipSizeEnum.Medium]: "gap-2",
};

const chipClasses: Record<ChipSizeEnum, string> = {
  [ChipSizeEnum.Small]: "px-2.5 py-0.5 text-xs",
  [ChipSizeEnum.Medium]: "px-3 py-1 text-sm",
};

type ChipListProps = {
  items: readonly string[];
  size: ChipSizeEnum;
  label?: string;
  className?: string;
};

export function ChipList({ items, size, label, className }: ChipListProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap", listClasses[size], className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn("bg-accent-soft min-w-0 rounded-full break-words", chipClasses[size])}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
