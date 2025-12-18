import { cn } from "@/lib/utils";
interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}
export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className
}: SectionHeaderProps) {
  return <div className={cn("mb-12", align === "center" && "text-center", className)}>
      {label && <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
          {label}
        </span>}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && <p className="">
          {description}
        </p>}
    </div>;
}