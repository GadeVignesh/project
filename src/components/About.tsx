import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Brain, Code } from 'lucide-react';

function RotatingCube() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#00f5ff" wireframe />
    </mesh>
  );
}

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about leveraging artificial intelligence and machine learning to solve real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-96 relative"
          >
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <RotatingCube />
            </Canvas>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <AboutCard
              icon={<GraduationCap className="w-8 h-8 text-cyan-400" />}
              title="Education"
              description="B.Tech in Computer Science and Engineering (AI & ML)"
              subtitle="Malla Reddy University, Hyderabad"
            />

            <AboutCard
              icon={<Brain className="w-8 h-8 text-purple-400" />}
              title="Interests"
              description="AI, Machine Learning, Full Stack Development"
              subtitle="Automation, Data Analytics, IoT Solutions"
            />

            <AboutCard
              icon={<Code className="w-8 h-8 text-cyan-400" />}
              title="Focus Areas"
              description="Building intelligent systems and web applications"
              subtitle="Exploring the intersection of AI and practical solutions"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  subtitle: string;
}> = ({ icon, title, description, subtitle }) => (
  <motion.div
    className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300"
    whileHover={{ scale: 1.02, y: -5 }}
  >
    <div className="flex items-start space-x-4">
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-3 rounded-xl">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-1">{description}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
      </div>
    </div>
  </motion.div>
);

export default About;
