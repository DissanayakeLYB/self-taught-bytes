"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiMessageSquare,
} from "react-icons/fi";

const contactMethods = [
  {
    icon: FiMail,
    title: "Email",
    description: "lasith@example.com",
    link: "mailto:lasith@example.com",
    color: "text-red-500",
  },
  {
    icon: FiLinkedin,
    title: "LinkedIn",
    description: "Connect with me",
    link: "https://linkedin.com",
    color: "text-blue-600",
  },
  {
    icon: FiGithub,
    title: "GitHub",
    description: "Check out my code",
    link: "https://github.com",
    color: "text-purple-500",
  },
  {
    icon: FiTwitter,
    title: "Twitter",
    description: "Follow for updates",
    link: "https://twitter.com",
    color: "text-sky-500",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Looking for ML expertise or web development
            services? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <Card
                key={idx}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => window.open(method.link, "_blank")}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-4 rounded-lg bg-muted group-hover:scale-110 transition-transform ${method.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle>{method.title}</CardTitle>
                      <CardDescription className="text-base">
                        {method.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <FiMessageSquare className="w-6 h-6 text-primary" />
              Ready to Start a Project?
            </CardTitle>
            <CardDescription className="text-base">
              I&apos;m currently available for freelance work and exciting
              collaborations
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <FiMail className="w-4 h-4" />
              Send Me an Email
            </Button>
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </CardContent>
        </Card>

        <div className="text-center space-y-4 pt-12">
          <div className="flex justify-center gap-4">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <Button
                  key={idx}
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:scale-110 transition-transform"
                  onClick={() => window.open(method.link, "_blank")}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Lasith Dissanayake. Built with Next.js & ShadCN UI
          </p>
        </div>
      </div>
    </section>
  );
}
