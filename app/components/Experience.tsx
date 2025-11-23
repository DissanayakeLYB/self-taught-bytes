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
    role: "Freelance ML Engineer & Full-Stack Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    type: "Freelance",
    description:
      "Building custom AI/ML solutions and web applications for clients across various industries. Specialized in materials informatics, predictive modeling, and scalable web platforms.",
    achievements: [
      "Developed 15+ successful ML models for clients",
      "Built 10+ production-ready web applications",
      "Maintained 98% client satisfaction rate",
    ],
    tags: ["Machine Learning", "Web Development", "Consulting"],
  },
  {
    role: "Materials Science Researcher",
    company: "University Research Lab",
    period: "2021 - 2023",
    type: "Research",
    description:
      "Conducted cutting-edge research in computational materials science, focusing on high-throughput screening and ML-driven materials discovery.",
    achievements: [
      "Published 3 peer-reviewed papers",
      "Developed novel ML algorithms for property prediction",
      "Collaborated on international research projects",
    ],
    tags: ["Research", "Materials Science", "Machine Learning"],
  },
  {
    role: "Software Development Intern",
    company: "Tech Startup",
    period: "2020 - 2021",
    type: "Industry",
    description:
      "Contributed to the development of data analytics platform, implementing ML features and optimizing backend performance.",
    achievements: [
      "Improved API response time by 40%",
      "Implemented real-time data processing pipeline",
      "Mentored junior developers",
    ],
    tags: ["Full-Stack", "Python", "React"],
  },
];

const education = [
  {
    degree: "M.S. Materials Science and Engineering",
    institution: "Leading University",
    period: "2021 - 2023",
    focus: "Computational Materials Science & Machine Learning",
    achievements: ["GPA: 3.9/4.0", "Outstanding Graduate Researcher Award"],
  },
  {
    degree: "B.S. Materials Science and Engineering",
    institution: "Leading University",
    period: "2017 - 2021",
    focus: "Materials Characterization & Processing",
    achievements: ["Summa Cum Laude", "Dean's List (8 semesters)"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through research, development, and continuous learning
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
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{exp.role}</CardTitle>
                      <CardDescription className="text-lg">
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Key Achievements:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
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
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription>
                    {edu.institution} • {edu.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">
                      Focus:
                    </p>
                    <p>{edu.focus}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="gap-1">
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
      </div>
    </section>
  );
}
