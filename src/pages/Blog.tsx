import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import heroImage from "@/assets/hero-island.jpg";
import myIslandCover from "@/assets/my-island-cover.jpg";

const gameFilters = ["All Games", "My Island", "Studio News"];

const blogPosts = [
  {
    title: "My Island Development Update #3: Fishing System Deep Dive",
    excerpt: "Take a look at how we're creating a relaxing yet engaging fishing experience for players. We dive into the mechanics, rare catches, and secret fishing spots.",
    date: "Dec 15, 2024",
    gameTag: "My Island",
    slug: "my-island-fishing-system",
    image: heroImage,
  },
  {
    title: "Introducing Cloudrise: Our Vision for Cozy Games",
    excerpt: "Learn about our studio's mission, our values, and what we hope to bring to the gaming community through our unique approach to game development.",
    date: "Dec 10, 2024",
    gameTag: "Studio News",
    slug: "introducing-cloudrise",
    image: myIslandCover,
  },
  {
    title: "Building Characters with Heart: Our Design Philosophy",
    excerpt: "How we approach character design to create memorable villagers you'll love. From personality systems to visual design, every detail matters.",
    date: "Dec 5, 2024",
    gameTag: "My Island",
    slug: "character-design-philosophy",
  },
  {
    title: "My Island Development Update #2: Island Customization Preview",
    excerpt: "A sneak peek at the terraforming and decoration systems that will let you create your perfect island paradise.",
    date: "Nov 28, 2024",
    gameTag: "My Island",
    slug: "island-customization-preview",
  },
  {
    title: "Community Spotlight: Your Dream Island Ideas",
    excerpt: "We asked our Discord community what features they want most in My Island. Here's what you told us and how we're responding.",
    date: "Nov 20, 2024",
    gameTag: "My Island",
    slug: "community-spotlight-dream-islands",
  },
  {
    title: "Why We're Building Cozy Games",
    excerpt: "In a world of competitive multiplayer and intense action games, we believe there's a need for games that let you simply... breathe.",
    date: "Nov 15, 2024",
    gameTag: "Studio News",
    slug: "why-cozy-games",
  },
];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All Games");

  const filteredPosts = activeFilter === "All Games"
    ? blogPosts
    : blogPosts.filter(post => post.gameTag === activeFilter);

  return (
    <Layout>
      <section className="pt-32 pb-8">
        <div className="container">
          <SectionHeader
            label="Blog"
            title="News & Updates"
            description="Development logs, behind-the-scenes looks, and studio announcements. Follow our journey."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {gameFilters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  activeFilter === filter && "shadow-soft"
                )}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <div
                key={post.slug}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found for this filter.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
