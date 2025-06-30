import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Zap, Brain, TrendingUp, Bot } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI-Powered Market Watcher App",
      description: "Real-time stock data analysis with sentiment analysis and intelligent chatbot for investment insights",
      tech: ["Python", "Flask", "ML", "NLP", "React", "Chart.js"],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Smart IoT Automation System",
      description: "Arduino-based home automation with AI-driven energy optimization and mobile app control",
      tech: ["Arduino", "IoT", "Python", "Firebase", "React Native"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive web application for visualizing and understanding neural network architectures",
      tech: ["JavaScript", "D3.js", "TensorFlow.js", "React"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Intelligent Chatbot Platform",
      description: "Multi-domain chatbot with natural language processing and sentiment analysis capabilities",
      tech: ["Python", "NLP", "Streamlit", "Transformers"],
      icon: <Bot className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions combining AI, ML, and modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-500 h-full">
                {/* Project Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {project.icon}
                </motion.div>

                {/* Project Content */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:opacity-90 transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.a>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github size={20} />
            <span>View All Projects</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;