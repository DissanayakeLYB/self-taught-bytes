import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Lasith Dissanayake | AI/ML Engineer & Full-Stack Developer",
  description:
    "AI/ML Engineer and Full-Stack Developer specializing in building intelligent applications, machine learning solutions, and scalable web platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
