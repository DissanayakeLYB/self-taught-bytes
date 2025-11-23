"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    title: "AI-Powered Customer Analytics Platform",
    description:
      "Enterprise-grade analytics platform with ML-driven customer insights, churn prediction, and automated reporting. Processes 1M+ events daily with real-time dashboards.",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    category: "ml",
    github: "#",
    demo: "#",
    featured: true,
    stats: { accuracy: "94%", users: "10K+", uptime: "99.9%" },
  },
  {
    title: "Real-Time E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with Stripe integration, real-time inventory, AI product recommendations, and admin dashboard. Handles 50K+ daily transactions.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "Redis"],
    category: "web",
    github: "#",
    demo: "#",
    featured: true,
    stats: { transactions: "50K/day", uptime: "99.99%", revenue: "$2M+" },
  },
  {
    title: "Computer Vision Object Detection API",
    description:
      "High-performance REST API for real-time object detection and classification. Custom-trained YOLO model optimized for edge deployment with 60+ FPS processing.",
    tags: ["Python", "PyTorch", "FastAPI", "Docker", "CUDA"],
    category: "ml",
    github: "#",
    demo: "#",
    featured: true,
    stats: { fps: "60+", accuracy: "92%", latency: "<50ms" },
  },
  {
    title: "NLP Sentiment Analysis Dashboard",
    description:
      "Real-time social media sentiment analyzer using transformer models. Processes multiple data sources with topic modeling and trend detection.",
    tags: ["Python", "Hugging Face", "React", "MongoDB", "Kafka"],
    category: "ml",
    github: "#",
    demo: "#",
    featured: false,
    stats: { processed: "1M+ posts", accuracy: "89%", languages: "12" },
  },
  {
    title: "SaaS Project Management Tool",
    description:
      "Collaborative project management platform with real-time updates, team chat, Gantt charts, and time tracking. Built for remote teams.",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "TailwindCSS"],
    category: "web",
    github: "#",
    demo: "#",
    featured: false,
    stats: { teams: "500+", projects: "5K+", active: "2K users" },
  },
  {
    title: "Predictive Maintenance ML Model",
    description:
      "Time-series forecasting model for industrial equipment failure prediction. Reduced downtime by 40% for manufacturing clients.",
    tags: ["Python", "Scikit-learn", "LSTM", "FastAPI", "Grafana"],
    category: "ml",
    github: "#",
    demo: "#",
    featured: false,
    stats: { downtime: "-40%", savings: "$500K", accuracy: "87%" },
  },
  {
    title: "Headless CMS with AI Content",
    description:
      "Modern headless CMS with AI-powered content generation, SEO optimization, and multi-language support. REST and GraphQL APIs.",
    tags: ["Node.js", "GraphQL", "React", "MongoDB", "OpenAI"],
    category: "web",
    github: "#",
    demo: "#",
    featured: false,
    stats: { sites: "200+", requests: "10M/mo", uptime: "99.95%" },
  },
  {
    title: "Recommendation Engine",
    description:
      "Collaborative filtering and content-based recommendation system. Personalized suggestions with A/B testing framework.",
    tags: ["Python", "TensorFlow", "Redis", "PostgreSQL", "FastAPI"],
    category: "ml",
    github: "#",
    demo: "#",
    featured: false,
    stats: { ctr: "+35%", engagement: "+28%", latency: "<100ms" },
  },
  {
    title: "Mobile-First Progressive Web App",
    description:
      "PWA for delivery service with offline support, push notifications, geolocation tracking, and real-time order updates.",
    tags: ["React", "Service Workers", "Firebase", "Maps API", "Stripe"],
    category: "web",
    github: "#",
    demo: "#",
    featured: false,
    stats: { downloads: "15K+", rating: "4.8/5", orders: "30K+" },
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterProjects = (category: string) => {
    if (category === "all") return projects;
    if (category === "featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.category === category);
  };

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-muted h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="flex items-start gap-2 group-hover:text-primary transition-colors">
            {project.title}
            {project.featured && (
              <FiStar className="w-4 h-4 text-yellow-500 fill-yellow-500 shrink-0 mt-1" />
            )}
          </CardTitle>
        </div>
        <CardDescription className="text-base leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {project.stats && (
          <div className="grid grid-cols-3 gap-2 pt-2 text-center">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <div className="text-sm font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground capitalize">
                  {key}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="gap-2 flex-1">
          <FiGithub className="w-4 h-4" />
          Code
        </Button>
        <Button variant="outline" size="sm" className="gap-2 flex-1">
          <FiExternalLink className="w-4 h-4" />
          Demo
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-7xl mx-auto space-y-6 text-center">
            <Badge variant="outline" className="px-4 py-2">
              Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of AI/ML solutions and full-stack applications
              I&apos;ve built for clients and personal projects. Each project
              demonstrates technical excellence and real-world impact.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-7xl mx-auto space-y-12">
            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={setSelectedCategory}
            >
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="ml">AI/ML</TabsTrigger>
                <TabsTrigger value="web">Web Dev</TabsTrigger>
              </TabsList>

              {["all", "featured", "ml", "web"].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterProjects(category).map((project, idx) => (
                      <ProjectCard key={idx} project={project} />
                    ))}
                  </div>

                  {filterProjects(category).length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                      No projects found in this category.
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-muted-foreground">
              I&apos;m always looking for exciting projects to work on.
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a href="/#contact">
                <Button size="lg" className="gap-2">
                  Start a Conversation
                </Button>
              </a>
              <a href="/about">
                <Button size="lg" variant="outline">
                  Learn More About Me
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
