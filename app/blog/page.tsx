"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiClock, FiArrowRight, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogPosts = [
  {
    title: "Building Scalable ML Pipelines with Python and Kubernetes",
    excerpt:
      "Learn how to deploy and scale machine learning models in production using containerization and orchestration tools.",
    category: "Machine Learning",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    slug: "ml-pipelines-kubernetes",
    tags: ["Python", "Kubernetes", "MLOps", "Docker"],
  },
  {
    title: "Next.js 15: Server Actions and Progressive Enhancement",
    excerpt:
      "Exploring the latest features in Next.js 15, including enhanced server actions, improved caching, and better performance.",
    category: "Web Development",
    date: "Nov 10, 2024",
    readTime: "6 min read",
    slug: "nextjs-15-server-actions",
    tags: ["Next.js", "React", "TypeScript", "Web Development"],
  },
  {
    title: "Fine-Tuning Large Language Models for Domain-Specific Tasks",
    excerpt:
      "A practical guide to fine-tuning LLMs like GPT and LLaMA for specialized use cases with limited computational resources.",
    category: "AI/ML",
    date: "Nov 5, 2024",
    readTime: "12 min read",
    slug: "fine-tuning-llms",
    tags: ["LLMs", "NLP", "AI", "Fine-tuning"],
  },
  {
    title: "Real-Time Data Processing with Apache Kafka and Python",
    excerpt:
      "Design patterns and best practices for building real-time data pipelines using Kafka, handling millions of events per day.",
    category: "Data Engineering",
    date: "Oct 28, 2024",
    readTime: "10 min read",
    slug: "kafka-real-time-processing",
    tags: ["Kafka", "Python", "Data Engineering", "Streaming"],
  },
  {
    title: "Building Type-Safe APIs with TypeScript and tRPC",
    excerpt:
      "How to create end-to-end type-safe APIs without code generation, improving developer experience and catching errors early.",
    category: "Web Development",
    date: "Oct 20, 2024",
    readTime: "7 min read",
    slug: "typescript-trpc-apis",
    tags: ["TypeScript", "tRPC", "API", "Full-Stack"],
  },
  {
    title: "Computer Vision: From Traditional Methods to Deep Learning",
    excerpt:
      "A comprehensive comparison of classical computer vision techniques and modern deep learning approaches for image processing.",
    category: "Computer Vision",
    date: "Oct 12, 2024",
    readTime: "15 min read",
    slug: "computer-vision-evolution",
    tags: ["Computer Vision", "Deep Learning", "OpenCV", "PyTorch"],
  },
  {
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Deep dive into React performance optimization including memoization, code splitting, lazy loading, and profiling.",
    category: "Web Development",
    date: "Oct 5, 2024",
    readTime: "9 min read",
    slug: "react-performance-optimization",
    tags: ["React", "Performance", "JavaScript", "Optimization"],
  },
  {
    title: "Introduction to Reinforcement Learning for Beginners",
    excerpt:
      "Getting started with RL: understanding Q-learning, policy gradients, and building your first RL agent from scratch.",
    category: "Machine Learning",
    date: "Sep 28, 2024",
    readTime: "11 min read",
    slug: "intro-reinforcement-learning",
    tags: ["Reinforcement Learning", "AI", "Python", "Machine Learning"],
  },
];

const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <Badge variant="outline" className="px-4 py-2">
              Blog & Insights
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Technical Articles & Tutorials
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sharing knowledge about AI/ML, full-stack development, and
              software engineering best practices.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <FiTrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Featured Article</h2>
            </div>

            <Card className="hover:shadow-2xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">{blogPosts[0].category}</Badge>
                  <Badge variant="outline" className="gap-1">
                    <FiClock className="w-3 h-3" />
                    {blogPosts[0].readTime}
                  </Badge>
                </div>
                <CardTitle className="text-3xl md:text-4xl hover:text-primary transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </CardTitle>
                <CardDescription className="text-lg leading-relaxed pt-2">
                  {blogPosts[0].excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {blogPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {blogPosts[0].date}
                    </span>
                    <Button className="gap-2">
                      Read Article
                      <FiArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">All Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.slice(1).map((post, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <Badge variant="outline" className="gap-1 text-xs">
                        <FiClock className="w-3 h-3" />
                        {post.readTime}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 group-hover:gap-3 transition-all"
                      >
                        Read More
                        <FiArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Stay Updated</h2>
            <p className="text-xl text-muted-foreground">
              Get the latest articles and tutorials delivered to your inbox. No
              spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-2">
              Join 500+ developers receiving weekly insights
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
