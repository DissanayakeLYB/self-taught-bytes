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
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = {
  all: [
    {
      title: "Neural Network Materials Predictor",
      description:
        "Deep learning model for predicting material properties using quantum mechanical simulations. Achieved 95% accuracy in band gap predictions.",
      tags: ["Python", "TensorFlow", "PyTorch", "Materials Science"],
      category: "ml",
      github: "#",
      demo: "#",
    },
    {
      title: "Molecular Dynamics Simulator",
      description:
        "High-performance MD simulation toolkit with GPU acceleration for studying atomic-scale phenomena in novel materials.",
      tags: ["C++", "CUDA", "Python", "OpenMP"],
      category: "research",
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      category: "web",
      github: "#",
      demo: "#",
    },
    {
      title: "Crystal Structure Visualizer",
      description:
        "Interactive 3D visualization tool for exploring crystal structures and their properties with real-time manipulation.",
      tags: ["Three.js", "React", "WebGL", "Python"],
      category: "research",
      github: "#",
      demo: "#",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Business intelligence platform with ML-driven insights, predictive analytics, and automated reporting capabilities.",
      tags: ["React", "FastAPI", "PostgreSQL", "Scikit-learn"],
      category: "ml",
      github: "#",
      demo: "#",
    },
    {
      title: "Real-Time Collaboration Tool",
      description:
        "WebSocket-based collaborative workspace for teams with live editing, video chat, and project management features.",
      tags: ["Next.js", "Socket.io", "MongoDB", "WebRTC"],
      category: "web",
      github: "#",
      demo: "#",
    },
  ],
};

export default function Projects() {
  const filterProjects = (category: string) => {
    if (category === "all") return projects.all;
    return projects.all.filter((p) => p.category === category);
  };

  const ProjectCard = ({ project }: { project: (typeof projects.all)[0] }) => (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-muted">
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-2">
          <span className="group-hover:text-primary transition-colors">
            {project.title}
          </span>
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="gap-2">
          <FiGithub className="w-4 h-4" />
          Code
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <FiExternalLink className="w-4 h-4" />
          Live Demo
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my work spanning materials science research, machine
            learning, and full-stack development
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="ml">ML/AI</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="web">Web Dev</TabsTrigger>
          </TabsList>

          {["all", "ml", "research", "web"].map((category) => (
            <TabsContent key={category} value={category} className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterProjects(category).map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
