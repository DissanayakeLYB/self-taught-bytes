"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiZap,
  FiTool,
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiCpu,
    title: "Machine Learning & AI",
    color: "text-blue-500",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Neural Networks",
      "Deep Learning",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    icon: FiCode,
    title: "Programming Languages",
    color: "text-green-500",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "SQL",
      "MATLAB",
      "Julia",
    ],
  },
  {
    icon: FiLayers,
    title: "Web Development",
    color: "text-purple-500",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "FastAPI",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    icon: FiDatabase,
    title: "Data & Databases",
    color: "text-orange-500",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Visualization",
    ],
  },
  {
    icon: FiZap,
    title: "Materials Science",
    color: "text-red-500",
    skills: [
      "Computational Materials",
      "MD Simulations",
      "DFT",
      "VASP",
      "LAMMPS",
      "Materials Informatics",
    ],
  },
  {
    icon: FiTool,
    title: "Tools & DevOps",
    color: "text-cyan-500",
    skills: ["Git", "Docker", "Linux", "AWS", "CI/CD", "Testing", "Agile"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning scientific computing, AI/ML, and modern
            web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform ${category.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xl">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
