import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, ExternalLink, Star } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2024",
      level: "Advanced",
      description: "Comprehensive course covering supervised and unsupervised learning, neural networks, and practical ML applications",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Meta (Coursera)",
      date: "2023",
      level: "Professional",
      description: "Complete full-stack development program covering frontend and backend technologies",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM (Coursera)",
      date: "2023",
      level: "Intermediate",
      description: "Comprehensive Python programming for data analysis and visualization",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      level: "Foundation",
      description: "Cloud computing fundamentals and AWS services overview",
      skills: ["AWS", "Cloud Computing", "EC2", "S3"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    { title: "Dean's List", description: "Academic Excellence Award", year: "2023-2024" },
    { title: "Hackathon Winner", description: "AI Innovation Challenge", year: "2024" },
    { title: "Research Publication", description: "ML Conference Proceedings", year: "2024" }
  ];

  return (
    <section id="certifications" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center"
          >
            <Award className="w-8 h-8 mr-3 text-cyan-400" />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Award size={24} />
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 rounded-full text-sm border border-cyan-400/30">
                      {cert.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <span>{cert.date}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-700 dark:text-gray-300 rounded text-xs border border-gray-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Certificate */}
                <motion.button
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">View Certificate</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <Star className="w-8 h-8 mr-3 text-purple-400" />
            Notable Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + 0.1 * index }}
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-2xl p-6 text-center hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {achievement.description}
                </p>
                <span className="text-sm text-purple-400 font-medium">
                  {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;