"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      scale: 0.9,
    })
      .from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        visualRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          rotate: -5,
        },
        "-=0.8"
      );

    // Floating animation for visual element
    gsap.to(visualRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Content */}
        <div className="space-y-8">
          <div ref={titleRef}>
            <Badge
              variant="outline"
              className="px-6 py-2.5 text-sm mb-6 glass border-primary/30"
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for Work
              </span>
            </Badge>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                Lasith
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                Dissanayake
              </span>
            </h1>
          </div>

          <div ref={subtitleRef} className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl">
              Crafting intelligent AI solutions and scalable web applications
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge className="px-4 py-2 bg-purple-600/20 text-purple-300 border-purple-500/30">
                AI/ML Engineer
              </Badge>
              <Badge className="px-4 py-2 bg-pink-600/20 text-pink-300 border-pink-500/30">
                Full-Stack Developer
              </Badge>
            </div>
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/50"
            >
              View My Work
              <FiArrowDown className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="glass border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            {[
              { icon: FiGithub, href: "https://github.com" },
              { icon: FiLinkedin, href: "https://linkedin.com" },
              { icon: FiMail, href: "mailto:lasith@example.com" },
            ].map((social, idx) => (
              <Button
                key={idx}
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all w-12 h-12"
                onClick={() => window.open(social.href, "_blank")}
              >
                <social.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div ref={visualRef} className="relative hidden lg:block">
          <div className="relative w-full aspect-square">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-purple-600/30 rounded-3xl rotate-6 blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl -rotate-6 blur-2xl" />

            {/* Main visual container */}
            <div className="relative glass-card rounded-3xl p-12 border-2 border-white/10 shadow-2xl">
              <div className="space-y-6">
                {/* Code blocks visualization */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-white/5"
                    style={{
                      animation: `shimmer ${3 + i}s infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div
                        className="h-2 bg-gradient-to-r from-purple-500/50 to-transparent rounded"
                        style={{ width: `${60 + i * 10}%` }}
                      />
                      <div
                        className="h-2 bg-gradient-to-r from-pink-500/50 to-transparent rounded"
                        style={{ width: `${50 + i * 15}%` }}
                      />
                    </div>
                  </div>
                ))}

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {[
                    { label: "Projects", value: "50+" },
                    { label: "Clients", value: "30+" },
                    { label: "Experience", value: "5+ Yrs" },
                    { label: "Success Rate", value: "98%" },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="text-center p-4 rounded-xl glass-card border border-white/5"
                    >
                      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <FiArrowDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  );
}
