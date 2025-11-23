"use client";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiHeart,
} from "react-icons/fi";
import Link from "next/link";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com", icon: FiGithub },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
    { name: "Twitter", href: "https://twitter.com", icon: FiTwitter },
    { name: "Email", href: "mailto:lasith@example.com", icon: FiMail },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-black/50" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Lasith Dissanayake
            </h3>
            <p className="text-muted-foreground">
              AI/ML Engineer & Full-Stack Developer building intelligent,
              scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass hover:bg-purple-600/20 transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lasith Dissanayake. All rights
            reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with{" "}
            <FiHeart className="w-4 h-4 text-red-500 animate-pulse" /> using
            Next.js & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
