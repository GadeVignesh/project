import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere] = useMemo(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingCube() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#ff6b6b" wireframe />
    </mesh>
  );
}

const TypewriterText = () => {
  const roles = ['AI Engineer', 'Gen AI Specialist', 'Python Developer', 'Web Developer'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
      {`${roles[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </p>
  );
};

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars />
          <FloatingCube />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Gade Vignesh
          </motion.h1>

          <TypewriterText />

          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Innovating with Intelligence
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <SocialLink href="https://github.com" icon={<Github size={24} />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} />
          <SocialLink href="mailto:vigneshgade769@gmail.com" icon={<Mail size={24} />} />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore My Work
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

export default Hero;
