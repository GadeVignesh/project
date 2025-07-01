import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Bot, CarFront, Languages, Brain } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Used Car Price Prediction",
      description: "ML-based web app that predicts resale value of cars based on input like brand, model, year, fuel type, and mileage.",
      tech: ["Python", "Flask", "Pandas", "HTML", "CSS", "ML"],
      icon: <CarFront className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      github: "https://github.com/vigneshgade/used-car-price-prediction",
      demo: "https://usedcarpredictor.streamlit.app"
    },
    {
      title: "Multimodal Generative AI Converter",
      description: "Converts user input into AI-generated images and audio using Stable Diffusion and TTS models with full-stack pipeline.",
      tech: ["Stable Diffusion", "MoviePy", "TTS", "Flask", "Python"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/vigneshgade/multimodal-genai-converter",
      demo: "https://multimodalgenai.streamlit.app"
    },
    {
      title: "Sign Language Recognition System",
      description: "Real-time system to interpret sign language using MediaPipe and OpenCV with high accuracy and gesture visualization.",
      tech: ["Python", "OpenCV", "MediaPipe", "Tkinter"],
      icon: <Languages className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/vigneshgade/sign-language-recognition",
      demo: "https://youtu.be/sign-language-demo" // Replace with real link if available
    },
    {
      title: "AI-Powered FAQ Chatbot",
      description: "A chatbot built using Streamlit that handles customer FAQs with NLP, chat history, voice input/output, and export features.",
      tech: ["Python", "Streamlit", "NLP", "TTS", "SpeechRecognition"],
      icon: <Bot className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      github: "https://github.com/vigneshgade/faq-chatbot",
      demo: "https://faqchatbot.streamlit.app"
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
            AI-driven solutions built with modern tools and real-world applications
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
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {project.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

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

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
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
            onClick={() => window.open('https://github.com/vigneshgade', '_blank')}
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
