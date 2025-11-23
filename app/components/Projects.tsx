"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Content Generator",
    description: "Advanced NLP system generating human-like content",
    image: "/project-1.jpg",
    gradient: "from-purple-600 via-pink-600 to-red-600",
    tags: ["GPT-4", "Next.js", "FastAPI"],
    metrics: { users: "10K+", accuracy: "95%" },
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Computer Vision Platform",
    description: "Real-time object detection and tracking system",
    image: "/project-2.jpg",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    tags: ["YOLOv8", "OpenCV", "React"],
    metrics: { fps: "60", accuracy: "92%" },
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "ML Model Deployment Platform",
    description: "Scalable infrastructure for ML model deployment",
    image: "/project-3.jpg",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    tags: ["Docker", "Kubernetes", "TensorFlow"],
    metrics: { models: "50+", uptime: "99.9%" },
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            scale: 0.9,
            opacity: 0,
            y: 80,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
          });
        }
      });
    },
    { scope: projectsRef }
  );

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="px-6 py-2 bg-pink-600/20 text-pink-300 border-pink-500/30 mb-4">
            Portfolio
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into intelligent solutions
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Visual - Large project preview */}
              <div
                className={`relative group ${
                  idx % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden">
                  {/* Gradient background as placeholder */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                  />

                  {/* Glass overlay */}
                  <div className="absolute inset-0 glass-card border-2 border-white/10 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="text-white/60 text-lg">
                        Project Preview
                      </div>
                      <div className="flex gap-4 justify-center">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-3xl font-bold text-white">
                              {value}
                            </div>
                            <div className="text-sm text-white/60 uppercase">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Decorative glow */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl -z-10 group-hover:opacity-40 transition-opacity`}
                />
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${
                  idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      className={`px-4 py-2 text-sm bg-gradient-to-r ${project.gradient} bg-opacity-20 border-white/20`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass border-white/20 hover:bg-white/10 gap-2 px-6 rounded-xl"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <FiGithub className="w-5 h-5" />
                    Code
                  </Button>
                  <Button
                    size="lg"
                    className={`gap-2 px-6 rounded-xl bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-lg`}
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    Live Demo
                    <FiExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-20">
          <Button
            size="lg"
            variant="outline"
            className="glass border-white/20 hover:bg-white/10 gap-2 px-8 py-6 text-lg rounded-xl group"
          >
            View All Projects
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
