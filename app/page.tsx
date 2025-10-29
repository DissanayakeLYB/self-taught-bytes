'use client';

import { useState } from 'react';
import Image from 'next/image';
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white border-b border-gray-100 z-50">
        <div className="section-container">
          <div className="flex justify-between items-center py-5">
            <a href="#home" className="text-xl font-bold text-purple-700">
              Lasith Dissanayake
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">About</a>
              <a href="#skills" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">Skills</a>
              <a href="#experience" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-gray-100 pt-4">
              <a href="#home" className="block text-gray-700 hover:text-purple-700 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className="block text-gray-700 hover:text-purple-700 transition-colors font-medium" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#skills" className="block text-gray-700 hover:text-purple-700 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#experience" className="block text-gray-700 hover:text-purple-700 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#projects" className="block text-gray-700 hover:text-purple-700 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" className="block text-gray-700 hover:text-purple-700 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <Image 
            src="/profile.jpg" 
            alt="Lasith Dissanayake" 
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 py-20 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              {/* Greeting Badge */}
              <div className="mb-4 sm:mb-6 animate-fade-in">
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200 text-xs sm:text-sm font-medium">
                  👋 Hello, I&apos;m
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                Lasith Dissanayake
              </h1>
              
              {/* Subtitle with Role */}
              <div className="mb-4 sm:mb-6">
                <p className="text-xl sm:text-2xl md:text-3xl text-purple-200 font-semibold mb-2">
                  Materials Science X Machine Learning
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light">
                  Materials Science & Engineering Graduate
                </p>
              </div>
              
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <span>Explore My Work</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/80 text-white rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all text-sm sm:text-base"
                >
                  <span>Let&apos;s Connect</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
            <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">
            About <span className="text-purple-700">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-base text-gray-700 leading-relaxed">
                I&apos;m a <span className="font-semibold text-purple-700">Materials Science & Engineering Graduate</span> from
                the University of Moratuwa, passionate about revolutionizing materials research through computational methods
                and machine learning.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                My expertise lies at the intersection of traditional materials characterization and modern data science.
                I leverage <span className="font-semibold">machine learning algorithms</span>, <span className="font-semibold">molecular simulations</span>,
                and <span className="font-semibold">computational modeling</span> to accelerate materials discovery and optimize material properties.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                With hands-on experience in advanced characterization techniques (XRD, SEM, TEM, DSC, TGA) and programming
                skills in Python and MATLAB, I&apos;m dedicated to developing innovative solutions for next-generation materials,
                particularly in <span className="font-semibold text-purple-700">photovoltaics</span> and
                <span className="font-semibold text-purple-700"> sustainable energy materials</span>.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Facts</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-purple-700 mr-3 text-xl">🎓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Education</div>
                    <div className="text-gray-600 text-sm">B.Sc. MSE, University of Moratuwa</div>
                    <div className="text-sm text-gray-500">GPA: 3.55/4.0 | Dean&apos;s List</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-700 mr-3 text-xl">🔬</span>
                  <div>
                    <div className="font-semibold text-gray-900">Specialization</div>
                    <div className="text-gray-600 text-sm">Nanomaterials & Photovoltaics</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-700 mr-3 text-xl">💻</span>
                  <div>
                    <div className="font-semibold text-gray-900">Focus Area</div>
                    <div className="text-gray-600 text-sm">ML + Simulations + Materials Science</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-700 mr-3 text-xl">🏢</span>
                  <div>
                    <div className="font-semibold text-gray-900">Experience</div>
                    <div className="text-gray-600 text-sm">R&D Intern at Michelin Lanka</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">
            Technical <span className="text-purple-700">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Materials Characterization */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Materials Characterization</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• X-Ray Diffraction (XRD)</li>
                <li>• Scanning Electron Microscopy (SEM)</li>
                <li>• Transmission Electron Microscopy (TEM)</li>
                <li>• DSC, TGA, DTA Analysis</li>
                <li>• Mechanical Testing</li>
                <li>• Sample Preparation & QC</li>
              </ul>
            </div>

            {/* Computational & ML */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Computational & ML</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Python (NumPy, Pandas, Scikit-learn)</li>
                <li>• MATLAB Programming</li>
                <li>• Machine Learning Algorithms</li>
                <li>• Molecular Dynamics Simulations</li>
                <li>• Computational Materials Modeling</li>
                <li>• Data Analysis & Visualization</li>
              </ul>
            </div>

            {/* Software & Tools */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Software & Tools</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Origin Pro</li>
                <li>• AutoCAD</li>
                <li>• Materials Studio</li>
                <li>• LAMMPS (MD Simulations)</li>
                <li>• Version Control (Git)</li>
                <li>• Technical Documentation</li>
              </ul>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mt-12 bg-purple-700 p-8 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-6 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/20 rounded-md text-sm">Materials Informatics</span>
              <span className="px-4 py-2 bg-white/20 rounded-md text-sm">Data-Driven Materials Discovery</span>
              <span className="px-4 py-2 bg-white/20 rounded-md text-sm">Computational Modeling</span>
              <span className="px-4 py-2 bg-white/20 rounded-md text-sm">Phase Diagram Analysis</span>
              <span className="px-4 py-2 bg-white/20 rounded-md text-sm">Property Prediction</span>
              <span className="px-4 py-2 bg-white/20 rounded-md text-sm">Process Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">
            Professional <span className="text-purple-700">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border-l-4 border-purple-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">R&D Intern</h3>
                  <p className="text-lg text-purple-700 font-semibold">Michelin Lanka (Pvt) Ltd.</p>
                  <p className="text-gray-600">Casting Product Division</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">December 2023 - May 2024</span>
              </div>

              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-700 mr-2 font-bold">▹</span>
                  <span>Conducted comprehensive materials characterization using XRD, SEM, and thermal analysis techniques (DSC, TGA, DTA) to evaluate rubber compound properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-700 mr-2 font-bold">▹</span>
                  <span>Analyzed rubber compound formulations and processing parameters to optimize material performance and manufacturing efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-700 mr-2 font-bold">▹</span>
                  <span>Collaborated with cross-functional teams on product development initiatives, contributing to data-driven decision making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-700 mr-2 font-bold">▹</span>
                  <span>Developed analytical protocols and documentation for quality control and materials testing procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">
            Featured <span className="text-purple-700">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-purple-300 transition-colors">
              <div className="h-40 bg-purple-50 flex items-center justify-center border-b border-gray-200">
                <span className="text-5xl">⚡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Perovskite Solar Cell Development</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Research on novel perovskite materials for next-generation solar cells with improved efficiency and stability
                  using computational screening and ML-guided optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">Photovoltaics</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">Nanomaterials</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">ML</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-purple-300 transition-colors">
              <div className="h-40 bg-purple-50 flex items-center justify-center border-b border-gray-200">
                <span className="text-5xl">🧪</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Rubber Compound Analysis</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Comprehensive characterization study of industrial rubber compounds using advanced analytical techniques.
                  Developed predictive models for material performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">Polymers</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">XRD</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">SEM</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-purple-300 transition-colors">
              <div className="h-40 bg-purple-50 flex items-center justify-center border-b border-gray-200">
                <span className="text-5xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Materials Data Analysis</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Development of computational tools for materials property prediction and phase diagram analysis using
                  machine learning and statistical methods.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">MATLAB</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">Python</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">Data Science</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Research Interests */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Research Interests</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-base mb-2 text-purple-700">Machine Learning in Materials</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Applying ML algorithms for materials property prediction, structure-property relationships, and accelerated materials discovery
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-base mb-2 text-purple-700">Molecular Dynamics Simulations</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Computational modeling of material behavior at atomic scale to understand fundamental mechanisms and predict performance
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-base mb-2 text-purple-700">Sustainable Energy Materials</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Development of next-generation photovoltaic materials and energy storage systems for renewable energy applications
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-base mb-2 text-purple-700">Materials Informatics</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Integration of materials databases, data mining, and computational tools for data-driven materials engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">
            Education & <span className="text-purple-700">Achievements</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🎓</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">B.Sc. Materials Science & Engineering</h3>
                  <p className="text-base font-semibold text-purple-700 mb-2">University of Moratuwa, Sri Lanka</p>
                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-3">
                    <span>📅 2021 - 2025</span>
                    <span>📊 GPA: 3.55/4.0</span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm">
                    🏆 Honors: Dean&apos;s List (Semesters 5, 6, 7, 8)
                  </p>
                </div>
              </div>
            </div>

            {/* GCE A/L */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📚</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">GCE Advanced Level</h3>
                  <p className="text-base font-semibold text-gray-700 mb-2">Kingwood College Kandy</p>
                  <p className="text-gray-600 text-sm mb-3">📅 2018 | Physical Science Stream</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-md font-semibold text-sm border border-purple-200">Chemistry - A</span>
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-md font-semibold text-sm border border-purple-200">Combined Mathematics - A</span>
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-md font-semibold text-sm border border-purple-200">Physics - B</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">🏅</div>
                <h4 className="font-bold text-base mb-2 text-gray-900">Dean&apos;s List</h4>
                <p className="text-gray-600 text-sm">Consistent academic excellence with 3.5+ GPA</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">🔬</div>
                <h4 className="font-bold text-base mb-2 text-gray-900">R&D Experience</h4>
                <p className="text-gray-600 text-sm">6-month industrial internship at Michelin</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-bold text-base mb-2 text-gray-900">Innovation Focus</h4>
                <p className="text-gray-600 text-sm">Bridging MSE with AI & Computational Methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">
            Get In <span className="text-purple-700">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-base text-gray-600 mb-12">
              Interested in collaboration, research opportunities, or just want to connect? I&apos;d love to hear from you!
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Contact Information</h3>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                    <a href="mailto:lasith@example.com" className="text-purple-700 hover:underline text-sm">
                      lasith.dissanayake@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/lasith-dissanayake/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline text-sm">
                      linkedin.com/in/lasith-dissanayake
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">University</h4>
                    <p className="text-gray-600 text-sm">University of Moratuwa, Sri Lanka</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-purple-700 text-white rounded-md font-semibold hover:bg-purple-800 transition-colors text-sm"
                  >
                    📄 Download CV
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none text-sm"
                      placeholder="What&apos;s this about?"
                    />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none resize-none text-sm"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-700 text-white rounded-md font-semibold hover:bg-purple-800 transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lasith Dissanayake | All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#home" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">Home</a>
              <a href="#about" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">About</a>
              <a href="#projects" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
