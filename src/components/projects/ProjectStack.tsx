import { ChipList, type ChipSizeEnum } from "@/components/ui/ChipList";

type ProjectStackProps = {
  stack: string[];
  size: ChipSizeEnum;
  className: string;
};

export function ProjectStack({ stack, size, className }: ProjectStackProps) {
  return <ChipList items={stack} size={size} label="Built with" className={className} />;
}
