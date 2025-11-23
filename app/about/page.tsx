"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiCode, FiTrendingUp, FiHeart, FiTarget } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    icon: FiCode,
    title: "Continuous Learning",
    description:
      "Staying at the forefront of AI/ML and web development technologies through constant experimentation and learning.",
    color: "text-blue-500",
  },
  {
    icon: FiTrendingUp,
    title: "Innovation First",
    description:
      "Building solutions that push boundaries and solve real-world problems with cutting-edge technology.",
    color: "text-purple-500",
  },
  {
    icon: FiHeart,
    title: "User-Centered Design",
    description:
      "Creating intuitive, accessible experiences that users love and that deliver measurable business value.",
    color: "text-red-500",
  },
  {
    icon: FiTarget,
    title: "Results Driven",
    description:
      "Focusing on outcomes and delivering high-quality, scalable solutions that exceed expectations.",
    color: "text-green-500",
  },
];

const journey = [
  {
    year: "2023 - Present",
    title: "AI/ML & Full-Stack Development",
    description:
      "Building intelligent applications and scalable web platforms for clients worldwide. Specializing in machine learning pipelines, data-driven solutions, and modern web technologies.",
  },
  {
    year: "2021 - 2023",
    title: "Deep Dive into Machine Learning",
    description:
      "Focused on mastering deep learning, neural networks, and advanced ML algorithms. Built numerous models for computer vision, NLP, and predictive analytics.",
  },
  {
    year: "2019 - 2021",
    title: "Full-Stack Foundation",
    description:
      "Started journey in web development, learning React, Node.js, and modern development practices. Built first production applications and discovered passion for creating seamless user experiences.",
  },
  {
    year: "2017 - 2019",
    title: "Programming Foundations",
    description:
      "Began learning to code with Python, discovered the power of programming to solve complex problems, and fell in love with technology.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="px-4 py-2">
                  About Me
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                  Building the Future with AI & Code
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I&apos;m Lasith Dissanayake, an AI/ML engineer and full-stack
                  developer passionate about creating intelligent, scalable
                  solutions that make a real impact.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>AI/ML Expert</Badge>
                  <Badge>Full-Stack Developer</Badge>
                  <Badge>Problem Solver</Badge>
                  <Badge>Continuous Learner</Badge>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-border p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-primary">5+</div>
                    <div className="text-xl text-muted-foreground">
                      Years of Experience
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="space-y-1">
                        <div className="text-3xl font-bold">50+</div>
                        <div className="text-sm text-muted-foreground">
                          Projects
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold">30+</div>
                        <div className="text-sm text-muted-foreground">
                          Happy Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">My Journey</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From curious beginner to professional developer and ML engineer
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-12">
                {journey.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative grid md:grid-cols-2 gap-8 ${
                      idx % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {idx % 2 === 0 ? (
                      <>
                        <div className="md:text-right space-y-2">
                          <div className="text-sm font-semibold text-primary">
                            {item.year}
                          </div>
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-0 md:left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[9px] md:-translate-x-1/2" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative order-2 md:order-1">
                          <div className="absolute left-0 md:right-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[9px] md:translate-x-1/2" />
                        </div>
                        <div className="space-y-2 order-1 md:order-2">
                          <div className="text-sm font-semibold text-primary">
                            {item.year}
                          </div>
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide my work and decision-making
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={idx}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-4">
                        <div
                          className={`p-4 rounded-lg bg-muted group-hover:scale-110 transition-transform ${value.color}`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-2xl">{value.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground">
              I&apos;m always excited to work on new projects and collaborate
              with passionate people.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a href="/projects" className="inline-block">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform font-semibold">
                  View My Work
                </button>
              </a>
              <a href="/#contact" className="inline-block">
                <button className="px-8 py-4 bg-background border border-border rounded-lg hover:scale-105 transition-transform font-semibold">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
