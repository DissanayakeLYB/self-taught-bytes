"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  FiCode,
  FiDatabase,
  FiCpu,
  FiLayers,
  FiGlobe,
  FiBox,
} from "react-icons/fi";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: "AI & Machine Learning",
    icon: FiCpu,
    gradient: "from-purple-500 to-pink-500",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "Hugging Face"],
  },
  {
    category: "Full-Stack Development",
    icon: FiCode,
    gradient: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    icon: FiDatabase,
    gradient: "from-green-500 to-emerald-500",
    skills: ["Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    icon: FiGlobe,
    gradient: "from-orange-500 to-red-500",
    skills: ["Docker", "AWS", "GCP", "CI/CD", "Kubernetes"],
  },
  {
    category: "Data Engineering",
    icon: FiLayers,
    gradient: "from-violet-500 to-purple-500",
    skills: ["Pandas", "Apache Spark", "ETL", "Data Pipelines", "SQL"],
  },
  {
    category: "Tools & Frameworks",
    icon: FiBox,
    gradient: "from-pink-500 to-rose-500",
    skills: ["Git", "VS Code", "Jupyter", "Postman", "Figma"],
  },
];

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
          });
        }
      });
    },
    { scope: skillsRef }
  );

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="px-6 py-2 bg-purple-600/20 text-purple-300 border-purple-500/30 mb-4">
            Technical Arsenal
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combining cutting-edge AI with modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
            >
              <Card className="glass-card border-white/10 p-8 h-full hover:scale-105 transition-transform duration-300 group">
                <div className="space-y-6">
                  {/* Icon with gradient */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} p-0.5 group-hover:scale-110 transition-transform`}
                  >
                    <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Category title */}
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.category}
                  </h3>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge
                        key={skillIdx}
                        variant="outline"
                        className="px-3 py-1.5 bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Visual indicator bar */}
                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full animate-shimmer`}
                      style={{
                        width: `${85 + idx * 2}%`,
                        animationDelay: `${idx * 0.2}s`,
                      }}
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
