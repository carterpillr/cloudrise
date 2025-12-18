import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  status: "Live" | "In Development" | "Concept";
  href: string;
  featured?: boolean;
}

const statusStyles = {
  "Live": "bg-green-100 text-green-700",
  "In Development": "bg-secondary text-secondary-foreground",
  "Concept": "bg-muted text-muted-foreground",
};

export function GameCard({ title, description, image, status, href, featured }: GameCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group block rounded-2xl overflow-hidden bg-card border border-border hover-lift",
        featured && "md:col-span-2"
      )}
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-medium",
            statusStyles[status]
          )}>
            {status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
