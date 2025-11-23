"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      className="min-h-screen py-24 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <Badge className="px-6 py-2 bg-purple-600/20 text-purple-300 border-purple-500/30 mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Let&apos;s Work Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <Card
                key={idx}
                className="glass-card border-white/10 hover:border-purple-500/30 group transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => window.open(method.link, "_blank")}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-4 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:scale-110 transition-transform ${method.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {method.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-3xl mx-auto glass-card border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <FiMessageSquare className="w-6 h-6 text-purple-400" />
              Ready to Start a Project?
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              I&apos;m currently available for freelance work and exciting
              collaborations
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/50 rounded-xl"
            >
              <FiMail className="w-4 h-4" />
              Send Me an Email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-white/20 hover:bg-white/10 rounded-xl"
            >
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
                  className="rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all w-12 h-12"
                  onClick={() => window.open(method.link, "_blank")}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Lasith Dissanayake. Crafted with passion
          </p>
        </div>
      </div>
    </section>
  );
}
