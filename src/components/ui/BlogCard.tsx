import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  gameTag?: string;
  slug: string;
  image?: string;
}

export function BlogCard({ title, excerpt, date, gameTag, slug, image }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${slug}`}
      className="group block rounded-2xl overflow-hidden bg-card border border-border hover-lift"
    >
      {image && (
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {gameTag && (
            <span className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
              {gameTag}
            </span>
          )}
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
