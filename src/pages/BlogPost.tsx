import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

import heroImage from "@/assets/hero-island.jpg";
import myIslandCover from "@/assets/my-island-cover.jpg";

const blogPostsContent: Record<string, {
  title: string;
  date: string;
  gameTag?: string;
  image?: string;
  content: string;
}> = {
  "my-island-fishing-system": {
    title: "My Island Development Update #3: Fishing System Deep Dive",
    date: "December 15, 2024",
    gameTag: "My Island",
    image: heroImage,
    content: `
We're excited to share a deep dive into one of My Island's core relaxation activities: fishing!

## The Vision

When designing the fishing system, we wanted to create something that was both relaxing and rewarding. You shouldn't feel stressed about missing a catch, but there should be enough depth to keep things interesting.

## How It Works

Players can fish at various spots around the island, each with different fish populations. Time of day and weather affect what you might catch. We've implemented a simple rhythm-based catching system that's forgiving but still feels engaging.

## Rare Catches

There are over 50 different fish species to discover, including rare legendary fish that only appear under specific conditions. Completing your fish collection unlocks special rewards and achievements.

## What's Next

We're currently working on:
- Fishing tournaments with villagers
- Customizable fishing rods
- Aquarium display for your home

Stay tuned for more updates, and join our Discord to share your feedback!
    `,
  },
  "introducing-cloudrise": {
    title: "Introducing Cloudrise: Our Vision for Cozy Games",
    date: "December 10, 2024",
    gameTag: "Studio News",
    image: myIslandCover,
    content: `
Hello, and welcome to Cloudrise!

## Who We Are

We're a small indie studio with a big dream: to create cozy, stylized games that feel like coming home. Our team is passionate about worldbuilding, character design, and creating experiences that let players relax and escape.

## Our Philosophy

We believe games don't always need to be challenging or competitive. Sometimes, you just want to tend a garden, chat with friendly villagers, or watch the sunset over a peaceful island. That's the kind of experience we're building.

## What We're Working On

Our flagship project, My Island, is a life simulation game where you build and customize your own island paradise. We're also exploring other cozy game concepts that we can't wait to share with you.

## Join Us

Follow us on social media and join our Discord to be part of this journey. We'd love to have you in our community!

Thank you for believing in cozy games. Let's build something beautiful together.
    `,
  },
  "character-design-philosophy": {
    title: "Building Characters with Heart: Our Design Philosophy",
    date: "December 5, 2024",
    gameTag: "My Island",
    content: `
Characters are the heart of any cozy game. Here's how we approach designing the villagers of My Island.

## Personality First

Before we draw a single sketch, we write. Each villager has a backstory, quirks, likes, dislikes, and dreams. This foundation informs every design decision that follows.

## Visual Storytelling

A character's appearance should tell you something about who they are. Is this villager tidy or messy? Adventurous or homebody? These traits show up in their clothing, accessories, and even their posture.

## Memorable but Relatable

We want villagers that feel like friends you'd actually want to hang out with. Not stereotypes, not caricatures—real (if stylized) personalities you can connect with.

## Room to Grow

As you befriend villagers, you learn more about them. Their dialogue evolves, they share secrets, and your relationship deepens. This investment makes the connections feel real.

We can't wait for you to meet the residents of your island!
    `,
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? blogPostsContent[slug] : null;

  if (!post) {
    return (
      <Layout>
        <section className="pt-32 pb-24">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
              <Link to="/blog" className="text-primary hover:underline">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      {post.image && (
        <div className="relative h-[40vh] min-h-[300px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      )}

      <article className={post.image ? "-mt-24 relative z-10" : "pt-32"}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-large">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {post.gameTag && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    <Tag className="w-3.5 h-3.5" />
                    {post.gameTag}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                {post.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold text-foreground mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.trim() === '') return null;
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-muted-foreground ml-4">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="py-24" />
    </Layout>
  );
}
