import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  id?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered,
  className,
  id,
}: SectionHeadingProps) => {
  return (
    <div
      id={id}
      className={cn("space-y-2 mb-8", centered && "text-center", className)}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
