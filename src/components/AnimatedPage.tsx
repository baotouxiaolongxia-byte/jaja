"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface AnimatedPageProps {
  children: React.ReactNode;
}

export default function AnimatedPage({ children }: AnimatedPageProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.1 }
        }}
      >
        <motion.div
          initial={{ 
            opacity: 0,
            scale: 0.8,
            rotate: -15,
            x: -100,
            y: 50,
            filter: "blur(20px)"
          }}
          animate={{ 
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0,
            filter: "blur(0px)"
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.08,
            delayChildren: 0.1
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function AnimatedSection({ children, delay = 0, index = 0 }: { children: React.ReactNode; delay?: number; index?: number }) {
  const randomDelay = delay + (index * 0.08) + (Math.random() - 0.5) * 0.25;
  const randomRotate = (Math.random() - 0.5) * 360;
  const randomX = (Math.random() - 0.5) * 500;
  const randomY = (Math.random() - 0.5) * 500;
  const randomScale = 0.2 + Math.random() * 0.4;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: randomY, 
        x: randomX,
        rotate: randomRotate,
        scale: randomScale,
        filter: "blur(15px)"
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)"
      }}
      transition={{ 
        duration: 1,
        delay: randomDelay,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 80
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedText({ children, delay = 0, index = 0 }: { children: React.ReactNode; delay?: number; index?: number }) {
  const randomDelay = delay + (index * 0.03) + (Math.random() - 0.5) * 0.15;
  const randomX = (Math.random() - 0.5) * 300;
  const randomY = (Math.random() - 0.5) * 300;
  const randomRotate = (Math.random() - 0.5) * 180;
  
  return (
    <motion.span
      initial={{ 
        opacity: 0, 
        y: randomY,
        x: randomX,
        rotate: randomRotate,
        scale: 0.3,
        skewX: (Math.random() - 0.5) * 30,
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        skewX: 0,
      }}
      transition={{ 
        duration: 0.7,
        delay: randomDelay,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 100
      }}
    >
      {children}
    </motion.span>
  );
}

export function AnimatedImage({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const randomRotate = (Math.random() - 0.5) * 720;
  const randomScale = 0.1 + Math.random() * 0.3;
  const randomX = (Math.random() - 0.5) * 600;
  const randomY = (Math.random() - 0.5) * 600;
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: randomScale, 
        rotate: randomRotate,
        x: randomX,
        y: randomY,
        filter: "blur(20px)"
      }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        x: 0,
        y: 0,
        filter: "blur(0px)"
      }}
      transition={{ 
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 60
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedButton({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.button
      initial={{ 
        opacity: 0, 
        y: 30,
        scale: 0.8,
        rotate: -5
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotate: 0
      }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
        type: "spring"
      }}
      whileHover={{ 
        scale: 1.02,
        y: -2
      }}
      whileTap={{ 
        scale: 0.98
      }}
    >
      {children}
    </motion.button>
  );
}