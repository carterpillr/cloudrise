import { MessageCircle, Code, Palette, Gamepad2, Users, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const positions = [
  {
    icon: Code,
    title: "Game Developer",
    type: "Contract / Commission",
    description: "Build engaging gameplay systems and features for our cozy games. Experience with Roblox Luau or similar game engines preferred.",
    skills: ["Luau/Lua", "Game Systems", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "3D Artist",
    type: "Contract / Commission",
    description: "Create stylized, low-poly 3D assets that bring our cozy worlds to life. A portfolio showcasing your style is essential.",
    skills: ["Blender", "Low-Poly Style", "Texturing"],
  },
  {
    icon: Gamepad2,
    title: "UI/UX Designer",
    type: "Contract / Commission",
    description: "Design intuitive, beautiful interfaces that feel at home in our cozy games. Focus on accessibility and player experience.",
    skills: ["UI Design", "Figma", "UX Research"],
  },
  {
    icon: Users,
    title: "Community Manager",
    type: "Part-Time",
    description: "Help grow and nurture our community across Discord and social media. Be the bridge between players and our team.",
    skills: ["Community Building", "Social Media", "Communication"],
  },
];

const benefits = [
  "Work remotely from anywhere",
  "Flexible hours that fit your schedule",
  "Creative freedom and input on projects",
  "Commission-based or hourly pay",
  "Be part of a small, supportive team",
  "Help build games people will love",
];

export default function CareersPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-hero-gradient texture-noise">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Help Us Build Cozy Worlds
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're looking for passionate creators who share our vision. Whether you code, design, or build communities, there might be a place for you at Cloudrise.
            </p>
            <Button asChild variant="hero" size="xl">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Apply via Discord
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work primarily on a commission or contract basis, offering flexibility for both of us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {positions.map((position, index) => (
              <div
                key={position.title}
                className="p-6 rounded-2xl bg-card border border-border hover-lift opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <position.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {position.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {position.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {position.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {position.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-lg bg-secondary/50 text-secondary-foreground text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                Why Join Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Work That Feels Good
              </h2>
              <p className="text-muted-foreground mb-8">
                We believe in building a studio where creativity thrives. No crunch, no corporate nonsense—just passionate people making games they love.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-3xl bg-primary p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-background blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-background blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Apply?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Send us a message on Discord with your portfolio or resume. We'd love to hear from you!
              </p>
              <Button variant="secondary" size="xl" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Apply via Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
