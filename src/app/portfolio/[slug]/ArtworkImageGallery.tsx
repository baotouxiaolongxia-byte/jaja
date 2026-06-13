"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface ArtworkImageGalleryProps {
  images: string[];
  title: string;
}

export default function ArtworkImageGallery({ images, title }: ArtworkImageGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setPreviewPos({ x, y });
  }, []);

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const originalWidth = 800;
  const originalHeight = 1000;
  const MAGNIFICATION = 4;
  const scaledWidth = originalWidth * MAGNIFICATION;
  const scaledHeight = originalHeight * MAGNIFICATION;
  const previewSize = 384;
  const halfPreview = previewSize / 2;
  
  const bgX = -(previewPos.x / 100 * scaledWidth - halfPreview);
  const bgY = -(previewPos.y / 100 * scaledHeight - halfPreview);

  const thumbnailCrops = [
    { bgPos: "35% 35%" },
    { bgPos: "65% 40%" },
    { bgPos: "50% 70%" },
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <div
          ref={imageRef}
          className="relative aspect-[4/5] bg-cream-300 overflow-hidden shadow-lg cursor-crosshair"
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
          onMouseMove={handleMouseMove}
        >
          <Image
            src={images[activeImageIndex]}
            alt={title}
            width={originalWidth}
            height={originalHeight}
            className="w-full h-full object-cover"
          />
          
          {showPreview && (
            <div
              className="absolute w-24 h-24 border-2 border-charcoal-900 bg-charcoal-100/30 pointer-events-none"
              style={{
                left: `calc(${previewPos.x}% - 48px)`,
                top: `calc(${previewPos.y}% - 48px)`,
              }}
            />
          )}
        </div>
        
        {showPreview && (
          <div className="absolute top-0 left-full ml-4 w-[384px] h-[384px] bg-cream-100 border border-charcoal-300 shadow-xl overflow-hidden z-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${images[activeImageIndex]})`,
                backgroundSize: `${scaledWidth}px ${scaledHeight}px`,
                backgroundPosition: `${bgX}px ${bgY}px`,
              }}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[0, 1, 2].map((index) => {
          const crop = thumbnailCrops[index];
          return (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative aspect-[4/5] overflow-hidden cursor-pointer transition-all duration-300 ${
                activeImageIndex === index
                  ? "ring-2 ring-charcoal-900 shadow-md"
                  : "ring-1 ring-charcoal-300 hover:ring-charcoal-500"
              }`}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${images[0]})`,
                  backgroundSize: "250%",
                  backgroundPosition: crop.bgPos,
                }}
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-charcoal-900 rounded-full flex items-center justify-center">
                <span className="text-cream-100 text-xs">
                  {index + 1}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}