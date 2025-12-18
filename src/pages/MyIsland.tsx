import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Twitter, Star, Fish, Pickaxe, Users, Moon } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

import myIslandCover from "@/assets/my-island-cover.jpg";
import heroImage from "@/assets/hero-island.jpg";

const features = [
  {
    icon: Users,
    title: "Cozy Villager System",
    description: "Meet unique villagers with their own personalities, stories, and daily routines. Build friendships and unlock special interactions.",
  },
  {
    icon: Star,
    title: "Island Customization",
    description: "Design your perfect island paradise. Place buildings, decorate, terraform, and make it truly yours.",
  },
  {
    icon: Fish,
    title: "Fishing & Mining",
    description: "Cast your line in peaceful waters or dig deep for rare gems. Both activities are relaxing yet rewarding.",
  },
  {
    icon: Pickaxe,
    title: "Resource Gathering",
    description: "Collect wood, stone, flowers, and more. Craft items, build structures, and expand your island.",
  },
  {
    icon: Moon,
    title: "Offline Progression",
    description: "Your island keeps growing even when you're away. Return to find new surprises and progress.",
  },
];

const screenshots = [
  heroImage,
  myIslandCover,
];

export default function MyIslandPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="My Island game world"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container relative z-10 pb-16">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Games
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              In Development
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Alpha Phase
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            My Island
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Build your dream island, befriend quirky villagers, and discover secrets in this heartfelt life simulation game.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
                Follow Development
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Game Overview */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                About the Game
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Cozy Island Awaits
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My Island is a cozy life simulation game where you inherit a small, forgotten island and transform it into a thriving paradise. Meet charming villagers, each with unique personalities and stories to uncover.
                </p>
                <p>
                  Spend your days fishing by the shore, mining for precious gems, tending to crops, and decorating your dream home. As your island grows, so do the adventures waiting to be discovered.
                </p>
                <p>
                  Whether you have five minutes or five hours, My Island welcomes you with open arms and a warm cup of virtual cocoa.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-large">
              <img
                src={myIslandCover}
                alt="My Island gameplay"
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes It Special
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border hover-lift opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Peek Into the World
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-medium hover-scale"
              >
                <img
                  src={src}
                  alt={`My Island screenshot ${index + 1}`}
                  className="w-full aspect-video object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-24 bg-hero-gradient texture-noise">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Development Status
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Currently in Alpha
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              My Island is actively in development. We're working hard on core gameplay systems, villager AI, and the island customization tools. Join our community to follow along, provide feedback, and help shape the game!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Join the Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
