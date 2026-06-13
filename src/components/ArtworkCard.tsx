"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Artwork } from "@/data/artworks";

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
}

export default function ArtworkCard({ artwork, index = 0 }: ArtworkCardProps) {
  const randomDelay = index * 0.08 + (Math.random() - 0.5) * 0.15;
  const randomRotate = (Math.random() - 0.5) * 20;
  const randomX = (Math.random() - 0.5) * 50;
  const randomY = (Math.random() - 0.5) * 50;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.6, 
        rotate: randomRotate,
        x: randomX,
        y: randomY
      }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        x: 0,
        y: 0
      }}
      transition={{ 
        duration: 0.7,
        delay: randomDelay,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 80
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <Link href={`/portfolio/${artwork.slug}`} className="group block">
        <div className="aspect-[4/5] bg-cream-300 overflow-hidden mb-4">
          <Image
            src={artwork.images[0]}
            alt={artwork.title}
            width={800}
            height={1000}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            priority={artwork.featured}
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-serif text-charcoal-900 group-hover:text-accent-gold transition-colors duration-300">
            {artwork.title}
          </h3>
          <p className="text-sm text-charcoal-700">{artwork.year}</p>
          <p className="text-sm text-charcoal-700">{artwork.medium}</p>
          <p className="text-sm text-charcoal-700">{artwork.size}</p>
          <p className="text-xs text-charcoal-500 tracking-wider uppercase mt-2">
            {artwork.category}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}