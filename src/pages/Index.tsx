import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Compass, Gamepad2, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GameCard } from "@/components/ui/GameCard";
import { BlogCard } from "@/components/ui/BlogCard";
import heroImage from "@/assets/hero-island.jpg";
import myIslandCover from "@/assets/my-island-cover.jpg";
import forestCover from "@/assets/forest-game-cover.jpg";
import bakeryCover from "@/assets/bakery-game-cover.jpg";

const featuredGames = [{
  title: "My Island",
  description: "Build your dream island, befriend villagers, and discover secrets in this cozy life simulation game. Fish, mine, dig, and watch your island thrive even while you're away.",
  image: myIslandCover,
  status: "In Development" as const,
  href: "/games/my-island",
  featured: true
}];

const latestPosts = [{
  title: "My Island Development Update #3: Fishing System Deep Dive",
  excerpt: "Take a look at how we're creating a relaxing yet engaging fishing experience for players.",
  date: "Dec 15, 2024",
  gameTag: "My Island",
  slug: "my-island-fishing-system"
}, {
  title: "Introducing Cloudrise: Our Vision for Cozy Games",
  excerpt: "Learn about our studio's mission and what we hope to bring to the gaming community.",
  date: "Dec 10, 2024",
  slug: "introducing-cloudrise"
}, {
  title: "Building Characters with Heart: Our Design Philosophy",
  excerpt: "How we approach character design to create memorable villagers you'll love.",
  date: "Dec 5, 2024",
  gameTag: "My Island",
  slug: "character-design-philosophy"
}];
const values = [{
  icon: Sparkles,
  title: "Creativity First",
  description: "Every game we make is a labor of love, filled with unique ideas and charming details."
}, {
  icon: Users,
  title: "Community Driven",
  description: "We build with our players, incorporating feedback and creating together."
}, {
  icon: Compass,
  title: "Worlds to Explore",
  description: "Rich worldbuilding and cozy atmospheres that players want to return to again and again."
}];
export default function Index() {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Cozy island world" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-secondary-foreground text-sm font-medium mb-6 opacity-0 animate-fade-in bg-purple-100">
              <Gamepad2 className="w-4 h-4" />
              <span>Indie Game Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in animation-delay-100">Cloudrise</h1>
            
            <p className="text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in animation-delay-200">Where imagination takes flight.</p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animation-delay-300">
              <Button asChild variant="hero" size="xl">
                <Link to="/games">
                  View Our Games
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-muted-foreground/30 animate-pulse-soft" />
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-24 bg-hero-gradient texture-noise">
        <div className="container relative z-10">
          <SectionHeader label="Our Games" title="Our Games" description="Unique experiences on Roblox." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredGames.map((game, index) => <div key={game.title} className="opacity-0 animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "forwards"
          }}>
                <GameCard {...game} />
              </div>)}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/games">
                View All Games
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="About Cloudrise" title="Cozy Games, Made with Heart" description="We believe games should be a place to unwind, explore, and feel at home. Every pixel, every character, every story is designed to create moments of joy." align="left" />
              
              <div className="space-y-6 mb-8">
                {values.map((value, index) => <div key={value.title} className="flex gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-200">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>)}
              </div>

              <Button asChild variant="default" size="lg">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-large">
                <img src={myIslandCover} alt="My Island game preview" className="w-full aspect-square object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-pink-gradient p-4 shadow-medium hidden md:block">
                <div className="w-full h-full rounded-xl bg-background/90 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-primary">3</span>
                  <span className="text-xs text-muted-foreground">Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <SectionHeader label="Blog" title="Latest Updates" description="Follow along with our development journey and get behind-the-scenes looks at our games." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post, index) => <div key={post.slug} className="opacity-0 animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "forwards"
          }}>
                <BlogCard {...post} />
              </div>)}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                Read All Posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="relative rounded-3xl bg-primary overflow-hidden p-12 md:p-16 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-background blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-background blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Join Our Community
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Be the first to hear about updates, get early access to our games, and connect with fellow cozy game lovers.
              </p>
              <Button variant="secondary" size="xl" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Join Our Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}
