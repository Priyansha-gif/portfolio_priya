// components/HomePage.jsx
import React from 'react';
import { FaRocket, FaPlay, FaSearch, FaProjectDiagram, FaDesktop, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaExternalLinkAlt, FaBriefcase, FaCalendar, FaTools, FaPalette, FaLightbulb, FaCode, FaMobile, FaCloud } from 'react-icons/fa';

const HomePage = () => {
  // Sample projects data matching your screenshot
  const projects = [
    {
      id: 1,
      title: "Rabid Ahmed",
      subtitle: "A Software Engineer who has developed countless innovative solutions.",
      description: "Revolutionize Your Intent Creation 💬️ Proct",
      type: "Portfolio",
      tags: []
    },
    {
      id: 2,
      title: "Revo",
      subtitle: "Free Framer Template",
      description: "",
      type: "Template",
      tags: []
    },
    {
      id: 3,
      title: "NajmAl",
      subtitle: "SaaS Framer Template",
      description: "",
      type: "Template",
      tags: []
    },
    {
      id: 4,
      title: "Nashra",
      subtitle: "SaaS Framer Template",
      description: "",
      type: "Template",
      tags: []
    }
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      company: "Krishna Software Solutions",
      position: "Software Engineer",
      period: "2025 - Present",
      description: "Leading frontend development team building scalable React applications. Implemented micro-frontend architecture that improved performance by 40%.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"],
      type: "Full-time"
    },
    // {
    //   id: 2,
    //   company: "Digital Solutions LLC",
    //   position: "Full Stack Developer",
    //   period: "2020 - 2022",
    //   description: "Developed and maintained multiple client projects using modern web technologies. Improved application load time by 60% through optimization.",
    //   technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
    //   type: "Full-time"
    // },
    {
      id: 3,
      company: "Ayodhya Webosoft",
      position: "Frontend Developer",
      period: "2019 - 2020",
      description: "Built responsive web applications from scratch. Collaborated with design team to implement pixel-perfect UI components.",
      technologies: ["React", "Redux", "SASS", "Firebase"],
      type: "Full-time"
    }
  ];

  // Premium Tools data
  const premiumTools = [
    {
      id: 1,
      name: "Figma Pro",
      category: "Design",
      icon: <FaPalette className="w-6 h-6" />,
      description: "Advanced prototyping and design system management",
      status: "Active"
    },
    {
      id: 2,
      name: "Framer Pro",
      category: "Development",
      icon: <FaCode className="w-6 h-6" />,
      description: "Interactive prototyping with code components",
      status: "Active"
    },
    {
      id: 3,
      name: "Adobe Creative Suite",
      category: "Design",
      icon: <FaMobile className="w-6 h-6" />,
      description: "Complete design and video editing toolkit",
      status: "Active"
    },
    {
      id: 4,
      name: "GitHub Copilot",
      category: "Development",
      icon: <FaCloud className="w-6 h-6" />,
      description: "AI-powered code completion and assistance",
      status: "Active"
    },
    {
      id: 5,
      name: "Webflow",
      category: "Development",
      icon: <FaTools className="w-6 h-6" />,
      description: "No-code responsive website builder",
      status: "Active"
    },
    {
      id: 6,
      name: "Principle",
      category: "Animation",
      icon: <FaLightbulb className="w-6 h-6" />,
      description: "Advanced animation and interaction design",
      status: "Active"
    }
  ];

  // Design Thoughts data
  const designThoughts = [
    {
      id: 1,
      title: "User-Centered Design",
      description: "Every design decision should start and end with the user. Understanding user needs, behaviors, and pain points is fundamental to creating meaningful experiences.",
      icon: "👥"
    },
    {
      id: 2,
      title: "Simplicity & Clarity",
      description: "The best designs are invisible. They guide users effortlessly to their goals without unnecessary complexity or cognitive load.",
      icon: "✨"
    },
    {
      id: 3,
      title: "Consistency Matters",
      description: "Consistent design patterns create familiarity and trust. They reduce learning curves and make interfaces more predictable and easier to use.",
      icon: "🔄"
    },
    {
      id: 4,
      title: "Accessibility First",
      description: "Designing for accessibility isn't an afterthought—it's a fundamental requirement. Inclusive design benefits everyone and creates better products.",
      icon: "♿"
    },
    {
      id: 5,
      title: "Performance as Feature",
      description: "Fast, responsive interfaces are not just technical requirements—they are essential components of good user experience and design.",
      icon: "⚡"
    },
    {
      id: 6,
      title: "Iterative Improvement",
      description: "Great design is never finished. It evolves through continuous testing, feedback, and refinement based on real user interactions.",
      icon: "🔄"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar - Profile */}
          <div className="lg:col-span-4">
            <div className="bg-gray-800/20 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-xl sticky top-28 shadow-2xl">
              
              {/* Profile Image - Rectangular with src tag */}
              <div className="flex justify-center mb-6">
                <div className="w-full max-w-xs h-80 bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 rounded-2xl flex items-center justify-center border-2 border-gray-600/30 shadow-2xl overflow-hidden">
                  <img 
                    src="/image.jpg" 
                    alt="John Doe - Software Engineer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback content if image doesn't load */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex-col items-center justify-center text-white p-4 text-center">
                    <span className="text-4xl font-bold mb-2">JD</span>
                    <span className="text-lg font-semibold">Priyansha Tiwari</span>
                    <span className="text-sm opacity-90">Software Engineer</span>
                  </div>
                </div>
              </div>
              
              {/* Name */}
              <h2 className="text-3xl font-bold text-white text-center mb-2">
               Priyansha Tiwari
              </h2>
              
              {/* Title */}
              <p className="text-gray-300 text-center mb-6 font-light">
                Frontend Developer
              </p>
              
              {/* About Me */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  About Me
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Passionate frontend developer with 4 months of experience 
                  creating scalable web applications. Love working with modern 
                  technologies and solving complex problems.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Contact
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>priyansha.tiwari191@gamil.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>+91 72240-07518</span>
                    <span>+91 76920-07518</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg- green-400 rounded-full"></div>
                    <span>Chhatisghar, India</span>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: <FaGithub className="w-5 h-5" />, label: 'GitHub', color: 'hover:text-purple-400' },
                    { icon: <FaLinkedin className="w-5 h-5" />, label: 'LinkedIn', color: 'hover:text-blue-400' },
                    { icon: <FaTwitter className="w-5 h-5" />, label: 'Twitter', color: 'hover:text-sky-400' },
                    { icon: <FaEnvelope className="w-5 h-5" />, label: 'Email', color: 'hover:text-red-400' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`p-3 bg-gray-700/30 rounded-xl text-gray-400 ${social.color} hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/30 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Preview */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'UI/UX', 'Framer', 'Figma'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-700/30 text-gray-300 rounded-lg text-xs border border-gray-600/50 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Main Content */}
          <div className="lg:col-span-8">
            <div className="space-y-16">
              
              {/* Main Heading - Two Lines with White and Gray */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
                  <span className="text-white">FRONT-END</span>
                  <br />
                  <span className="text-gray-400">DEVELOPER</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  Transforming <span className="text-blue-400 font-semibold">ideas</span> into 
                  <span className="text-purple-400 font-semibold"> digital experiences</span> through 
                  code and design.
                </p>
              </div>

              {/* Stats Section - With Box */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/20 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">+12</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Years Experience</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">+46</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Projects Completed</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:text-green-400 transition-colors duration-300">+20</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Worldwide Clients</div>
                  </div>
                </div>
              </div>

              {/* Dynamic Section with Orange and Green - With Boxes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Orange Section */}
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-3xl p-6 border border-orange-500/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <h3 className="text-white text-lg font-semibold">
                      DYNAMIC ANIMATION
                    </h3>
                  </div>
                  <p className="text-orange-200 text-sm leading-relaxed mb-4">
                    Creating engaging motion designs and smooth animations that bring interfaces to life.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['GSAP', 'Three.js', 'Framer Motion', 'Lottie'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs border border-orange-500/30 hover:bg-orange-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Green Section */}
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-3xl p-6 border border-green-500/30 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="text-white text-lg font-semibold">
                      DEVELOPMENT & DESIGN
                    </h3>
                  </div>
                  <p className="text-green-200 text-sm leading-relaxed mb-4">
                    Building responsive websites and applications with modern tools and frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Framer', 'Figma', 'WordPress', 'ReactJS', 'Next.js', 'Tailwind'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30 hover:bg-green-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RECENT PROJECTS Section - With Box */}
              <div className="space-y-8">
                {/* Section Header - Two Line Heading */}
                <div>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                    <span className="text-white">RECENT</span>
                    <br />
                    <span className="text-gray-400">PROJECTS</span>
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"></div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/20 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm shadow-xl">
                  {/* Projects List */}
                  <div className="space-y-6">
                    {projects.map((project) => (
                      <div 
                        key={project.id}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer hover:shadow-xl hover:scale-[1.02]"
                      >
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          {/* Project Image/Icon */}
                          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {project.title.charAt(0)}
                          </div>
                          
                          {/* Project Content */}
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                            
                            <p className="text-gray-300 text-sm mb-2">
                              {project.subtitle}
                            </p>
                            
                            {project.description && (
                              <p className="text-gray-400 text-sm mb-3">
                                {project.description}
                              </p>
                            )}
                            
                            {/* Project Type Badge */}
                            <div className="inline-flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                project.type === 'Portfolio' 
                                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                  : 'bg-green-500/20 text-green-300 border border-green-500/30'
                              }`}>
                                {project.type}
                              </span>
                              {project.type === 'Template' && (
                                <span className="text-gray-500 text-xs">Free</span>
                              )}
                            </div>
                          </div>
                          
                          {/* Action Button */}
                          <button className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg">
                            View Project
                            <FaExternalLinkAlt className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View All Projects Button */}
                  <div className="text-center mt-8">
                    <button className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 border border-gray-600/50 hover:border-gray-500">
                      View All Projects
                    </button>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE Section */}
              <div className="space-y-8">
                {/* Section Header - Two Line Heading */}
                <div>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                    <span className="text-white">4 MONTHS OF</span>
                    <br />
                    <span className="text-gray-400">EXPERIENCE</span>
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4"></div>
                </div>

                {/* Experience Timeline - Individual Boxes */}
                <div className="space-y-6">
                  {experiences.map((experience) => (
                    <div 
                      key={experience.id}
                      className="bg-gradient-to-br from-gray-800/40 to-gray-900/20 rounded-3xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group hover:shadow-xl"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Timeline Indicator */}
                        <div className="flex-shrink-0 flex items-start">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            <FaBriefcase className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Experience Content */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                              {experience.position}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-400 mt-1 md:mt-0">
                              <FaCalendar className="w-4 h-4" />
                              <span className="text-sm">{experience.period}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg font-semibold text-blue-400">
                              {experience.company}
                            </span>
                            <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600">
                              {experience.type}
                            </span>
                          </div>

                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {experience.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 bg-gray-700/30 text-gray-300 rounded-lg text-xs border border-gray-600 hover:bg-gray-600/50 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PREMIUM TOOLS Section */}
              <div className="space-y-8">
                {/* Section Header - Two Line Heading */}
                <div>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                    <span className="text-white">PREMIUM</span>
                    <br />
                    <span className="text-gray-400">TOOLS</span>
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4"></div>
                </div>

                {/* Tools Grid - Individual Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {premiumTools.map((tool) => (
                    <div 
                      key={tool.id}
                      className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-3xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group hover:shadow-xl hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                          {tool.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                            {tool.name}
                          </h3>
                          <span className="text-green-300 text-sm">{tool.category}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {tool.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30">
                          {tool.status}
                        </span>
                        <span className="text-gray-400 text-sm">Pro License</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESIGN THOUGHTS Section */}
              <div className="space-y-8">
                {/* Section Header - Two Line Heading */}
                <div>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                    <span className="text-white">DESIGN</span>
                    <br />
                    <span className="text-gray-400">THOUGHTS</span>
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-4"></div>
                </div>

                {/* Design Thoughts Grid - Individual Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {designThoughts.map((thought) => (
                    <div 
                      key={thought.id}
                      className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-3xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group hover:shadow-xl hover:scale-[1.02]"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-3xl transform group-hover:scale-110 transition-transform">{thought.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                            {thought.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {thought.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* LET'S WORK TOGETHER Section - With Box */}
              <div className="space-y-8">
                {/* Section Header - Two Line Heading */}
                <div>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                    <span className="text-white">LET'S WORK</span>
                    <br />
                    <span className="text-gray-400">TOGETHER</span>
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4"></div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/20 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm shadow-xl">
                  <div className="text-center mb-8">
                    <p className="text-gray-400 text-lg">
                      Ready to create something amazing together?
                    </p>
                  </div>

                  {/* Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                    {[
                      { number: '1', label: 'Project Discussion', sublabel: 'Start', icon: <FaRocket className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500' },
                      { number: '2', label: 'Planning & Design', sublabel: 'Plan', icon: <FaPlay className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
                      { number: '3', label: 'Development Phase', sublabel: 'Build', icon: <FaSearch className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' },
                      { number: '4', label: 'Testing & Review', sublabel: 'Test', icon: <FaProjectDiagram className="w-4 h-4" />, color: 'from-yellow-500 to-orange-500' },
                      { number: '5', label: 'Launch & Support', sublabel: 'Launch', icon: <FaDesktop className="w-4 h-4" />, color: 'from-red-500 to-pink-500' }
                    ].map((step) => (
                      <div 
                        key={step.number}
                        className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/50 hover:border-gray-500 transition-all duration-300 cursor-pointer group hover:shadow-lg"
                      >
                        <div className={`flex items-center justify-center w-8 h-8 bg-gradient-to-r ${step.color} rounded-lg text-white font-bold text-sm shadow-md`}>
                          {step.number}
                        </div>
                        <div className="flex items-center gap-3 flex-1">
                          {step.icon}
                          <div>
                            <div className="text-gray-300 text-sm group-hover:text-white transition-colors font-medium">
                              {step.label}
                            </div>
                            <div className="text-gray-500 text-xs">
                              {step.sublabel}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Download Button */}
                  <div className="text-center">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-12 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 mx-auto hover:shadow-2xl hover:scale-105">
                      <FaDownload className="w-5 h-5" />
                      Download Resume
                    </button>
                    <p className="text-gray-400 text-sm mt-3">Available for new opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;