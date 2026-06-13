"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef } from "react";

interface LayoutAnimationProps {
  children: React.ReactNode;
}

export default function LayoutAnimation({ children }: LayoutAnimationProps) {
  const pathname = usePathname();
  const randomRef = useRef({
    x: (Math.random() - 0.5) * 400,
    y: (Math.random() - 0.5) * 400,
    rotate: (Math.random() - 0.5) * 720,
    scale: 0.3 + Math.random() * 0.4,
  });

  const resetRandom = () => {
    randomRef.current = {
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      rotate: (Math.random() - 0.5) * 720,
      scale: 0.3 + Math.random() * 0.4,
    };
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={resetRandom}>
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
            scale: randomRef.current.scale,
            rotate: randomRef.current.rotate,
            x: randomRef.current.x,
            y: randomRef.current.y,
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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.06,
            delayChildren: 0.05
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}