"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FiBriefcase, FiAward, FiBookOpen } from "react-icons/fi";

const experiences = [
  {
    role: "Senior AI/ML Engineer & Full-Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    type: "Freelance",
    description:
      "Building custom AI/ML solutions and scalable web applications for clients worldwide. Specializing in predictive analytics, computer vision, NLP, and modern web platforms with React/Next.js.",
    achievements: [
      "Developed 20+ production ML models with 90%+ accuracy rates",
      "Built 15+ full-stack applications serving 100K+ users",
      "Achieved 98% client satisfaction with consistent 5-star ratings",
      "Reduced client operational costs by average of 35% through automation",
    ],
    tags: ["Machine Learning", "Full-Stack", "Python", "React", "Next.js"],
  },
  {
    role: "AI Engineer",
    company: "Tech Solutions Inc.",
    period: "2021 - 2023",
    type: "Full-time",
    description:
      "Led development of ML pipelines and intelligent applications for enterprise clients. Built recommendation systems, fraud detection models, and automated data processing workflows.",
    achievements: [
      "Designed ML infrastructure processing 5M+ daily predictions",
      "Improved model accuracy by 25% through advanced feature engineering",
      "Reduced inference latency by 60% with model optimization",
      "Mentored 3 junior ML engineers",
    ],
    tags: ["Deep Learning", "MLOps", "Python", "TensorFlow", "AWS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Startup Ventures",
    period: "2019 - 2021",
    type: "Full-time",
    description:
      "Built and scaled web applications from concept to production. Developed RESTful APIs, responsive frontends, and managed cloud infrastructure for multiple SaaS products.",
    achievements: [
      "Architected microservices serving 50K+ active users",
      "Improved API response times by 70% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
      "Led frontend redesign increasing user engagement by 45%",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Leading Tech University",
    period: "2021 - 2023",
    focus: "Machine Learning & Artificial Intelligence",
    achievements: [
      "GPA: 3.95/4.0",
      "Dean's List",
      "Research Publication in ML Conference",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Tech University",
    period: "2017 - 2021",
    focus: "Software Engineering & Data Science",
    achievements: [
      "Summa Cum Laude",
      "Outstanding Senior Project Award",
      "Presidential Scholar",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
  },
  { name: "TensorFlow Developer Certificate", issuer: "Google" },
  { name: "Deep Learning Specialization", issuer: "DeepLearning.AI" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <Badge className="px-6 py-2 bg-blue-600/20 text-blue-300 border-blue-500/30 mb-4">
            Background
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering high-impact AI/ML solutions and scalable applications
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-2xl font-semibold">
            <FiBriefcase className="w-6 h-6 text-primary" />
            <h3>Professional Experience</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <Card
                key={idx}
                className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl text-foreground">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground">
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </div>
                    <Badge className="w-fit bg-purple-600/20 text-purple-300 border-purple-500/30">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-foreground">
                      Key Achievements:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-white/5 border-white/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        {/* Education Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-2xl font-semibold">
            <FiBookOpen className="w-6 h-6 text-primary" />
            <h3>Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <Card
                key={idx}
                className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {edu.institution} • {edu.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">
                      Focus:
                    </p>
                    <p className="text-foreground">{edu.focus}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <Badge
                        key={i}
                        className="gap-1 bg-blue-600/20 text-blue-300 border-blue-500/30"
                      >
                        <FiAward className="w-3 h-3" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-2xl font-semibold">
            <FiAward className="w-6 h-6 text-primary" />
            <h3>Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <Card
                key={idx}
                className="glass-card border-white/10 hover:border-purple-500/30 transition-all hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
