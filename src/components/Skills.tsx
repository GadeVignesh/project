import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Wrench, Cpu } from 'lucide-react';

function SkillSphere({ position, color, skill }: { position: [number, number, number]; color: string; skill: string }) {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
      <Text
        position={[position[0], position[1] - 0.4, position[2]]}
        fontSize={0.1}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
}

function SkillsVisualization() {
  const skills = useMemo(() => [
    { name: 'Python', position: [-2, 1, 0] as [number, number, number], color: '#3776ab' },
    { name: 'Java', position: [2, 1, 0] as [number, number, number], color: '#f89820' },
    { name: 'React', position: [-1, 0, 1] as [number, number, number], color: '#61dafb' },
    { name: 'ML', position: [1, 0, 1] as [number, number, number], color: '#ff6b6b' },
    { name: 'Node.js', position: [0, -1, 0] as [number, number, number], color: '#339933' },
    { name: 'MySQL', position: [-1.5, -0.5, -1] as [number, number, number], color: '#4479a1' },
    { name: 'Flask', position: [1.5, -0.5, -1] as [number, number, number], color: '#000000' },
    { name: 'Git', position: [0, 1.5, -0.5] as [number, number, number], color: '#f05032' },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {skills.map((skill, index) => (
        <SkillSphere
          key={index}
          position={skill.position}
          color={skill.color}
          skill={skill.name}
        />
      ))}
    </>
  );
}

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Frameworks & Libraries",
      skills: ["React", "Angular", "Flask", "Streamlit", "Express.js"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Technologies",
      skills: ["MySQL", "Git", "VS Code", "Arduino", "IoT"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & ML",
      skills: ["Machine Learning", "Data Analytics", "Neural Networks", "Computer Vision"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-96 relative"
          >
            <Canvas camera={{ position: [0, 0, 4] }}>
              <SkillsVisualization />
            </Canvas>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`bg-gradient-to-r ${category.color} p-2 rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-cyan-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;