"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <Badge variant="outline" className="px-4 py-2 text-sm">
            Available for Freelance Work
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60">
            Lasith Dissanayake
          </h1>

          <div className="flex flex-wrap justify-center gap-3 text-xl md:text-2xl text-muted-foreground">
            <span>Materials Scientist</span>
            <span className="text-primary">•</span>
            <span>ML Engineer</span>
            <span className="text-primary">•</span>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Specializing in computational materials science, machine learning
          applications, and building innovative solutions at the intersection of
          science and technology.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="gap-2"
          >
            View My Work
            <FiArrowDown className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-8">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:scale-110 transition-transform"
          >
            <FiGithub className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:scale-110 transition-transform"
          >
            <FiLinkedin className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:scale-110 transition-transform"
          >
            <FiMail className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <FiArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
