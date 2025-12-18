import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GameCard } from "@/components/ui/GameCard";

import myIslandCover from "@/assets/my-island-cover.jpg";
import forestCover from "@/assets/forest-game-cover.jpg";
import bakeryCover from "@/assets/bakery-game-cover.jpg";

const games = [
  {
    title: "My Island",
    description: "Build your dream island, befriend villagers, and discover secrets in this cozy life simulation game. Fish, mine, dig, and watch your island thrive even while you're away.",
    image: myIslandCover,
    status: "In Development" as const,
    href: "/games/my-island",
    featured: true,
  },
];

export default function GamesPage() {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-hero-gradient texture-noise">
        <div className="container relative z-10">
          <SectionHeader
            label="Our Portfolio"
            title="Games We're Building"
            description="Each project is a world of its own, crafted with care and designed to give you a place to relax, explore, and belong."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <div
                key={game.title}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <GameCard {...game} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Stay Tuned
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              More Adventures Coming Soon
            </h2>
            <p className="text-muted-foreground text-lg">
              We're always dreaming up new worlds to explore. Follow us on social media or join our Discord to be the first to know about new projects.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
