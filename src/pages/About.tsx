import { Link } from "react-router-dom";
import { Heart, Sparkles, Users, Palette, MessageCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-island.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Craft",
    description: "Every pixel, every line of code, every piece of music is made with love. We don't ship until we're proud of what we've built.",
  },
  {
    icon: Sparkles,
    title: "Joy in Details",
    description: "The magic is in the small moments — a villager's wave, the perfect fishing spot, the way light filters through trees.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Our players aren't just customers; they're collaborators. We listen, learn, and build together.",
  },
  {
    icon: Palette,
    title: "Unique Aesthetics",
    description: "We believe every game should have its own visual identity. No generic assets, no cookie-cutter designs.",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    description: "Dreamer-in-chief who believes every game should feel like a warm hug.",
  },
  {
    name: "Jordan Riley",
    role: "Lead Developer",
    description: "Makes the magic happen behind the scenes with elegant code.",
  },
  {
    name: "Sam Martinez",
    role: "Art Director",
    description: "Brings worlds to life one carefully crafted pixel at a time.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We Make Games That Feel Like Home
            </h1>
            <p className="text-xl text-muted-foreground">
              Cloudrise is an indie game studio focused on cozy, stylized games with strong worldbuilding and personality. We believe in crafting experiences that let players relax, explore, and find joy.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Cloudrise studio vision"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Born from a Love of Cozy Games
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cloudrise started with a simple question: why aren't there more games that feel like a warm blanket on a rainy day? Games where you can just... be. No pressure, no timers, no competition—just peaceful exploration and friendly faces.
                </p>
                <p>
                  We're a small team of developers, artists, and dreamers who grew up on games like Animal Crossing, Stardew Valley, and Harvest Moon. Those games taught us that sometimes the best adventures are the quiet ones.
                </p>
                <p>
                  Now we're building the games we always wanted to play. Games with heart, charm, and worlds you'll want to return to again and again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Believe In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border hover-lift opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Dreamers Behind Cloudrise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're a small but passionate team united by our love of cozy games.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl bg-card border border-border text-center hover-lift opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-20 h-20 rounded-full bg-pink-gradient mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero-gradient texture-noise">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're always looking for passionate people to join our team. Check out our open positions or just say hello!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/careers">
                  View Careers
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Join Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
