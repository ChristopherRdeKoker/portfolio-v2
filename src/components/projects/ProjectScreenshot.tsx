import Image from "next/image";
import type { ProjectImageType } from "@/content/projects";
import { cn } from "@/lib/cn";

type ProjectScreenshotProps = {
  image: ProjectImageType;
  className: string;
  imageClassName: string;
};

export function ProjectScreenshot({ image, className, imageClassName }: ProjectScreenshotProps) {
  return (
    <div className={cn("aspect-[16/10] overflow-hidden", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={cn("size-full object-cover", imageClassName)}
      />
    </div>
  );
}
