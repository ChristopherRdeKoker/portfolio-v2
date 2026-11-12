import type { ComponentProps } from "react";
import { focusRingClasses } from "@/components/ui/classes";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { cn } from "@/lib/cn";

export enum LinkButtonVariantEnum {
  Primary = 1,
  Secondary = 2,
}

const variantClasses: Record<LinkButtonVariantEnum, string> = {
  [LinkButtonVariantEnum.Primary]: "bg-accent text-white shadow hover:brightness-110",
  [LinkButtonVariantEnum.Secondary]:
    "border border-line bg-surface-raised hover:border-accent hover:text-accent",
};

type LinkButtonProps = ComponentProps<"a"> & {
  variant: LinkButtonVariantEnum;
  isExternal?: boolean;
};

export function LinkButton({ variant, isExternal, className, ...props }: LinkButtonProps) {
  const LinkElement = isExternal ? ExternalLink : "a";

  return (
    <LinkElement
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium transition focus-visible:outline-offset-2",
        focusRingClasses,
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
