"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ExhibitionGallery() {
  const [images, setImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageFiles = [
      "/images/exhibition/微信图片_20260614002656_7367_27.jpg",
      "/images/exhibition/微信图片_20260614002701_7368_27.jpg",
      "/images/exhibition/微信图片_20260614002715_7369_27.jpg",
      "/images/exhibition/微信图片_20260614002728_7370_27.jpg",
      "/images/exhibition/微信图片_20260614002745_7371_27.jpg",
      "/images/exhibition/微信图片_20260614002804_7372_27.jpg",
      "/images/exhibition/微信图片_20260614002819_7373_27.jpg",
      "/images/exhibition/微信图片_20260614002900_7374_27.jpg",
      "/images/exhibition/微信图片_20260614002906_7375_27.jpg",
      "/images/exhibition/微信图片_20260614003157_7378_27.jpg",
      "/images/exhibition/微信图片_20260614003158_7379_27.jpg",
      "/images/exhibition/微信图片_20260614003159_7380_27.jpg",
      "/images/exhibition/微信图片_20260614003200_7381_27.jpg",
      "/images/exhibition/微信图片_20260614003201_7382_27.jpg",
      "/images/exhibition/微信图片_20260614003202_7383_27.jpg",
      "/images/exhibition/微信图片_20260614003203_7384_27.jpg",
      "/images/exhibition/微信图片_20260614003204_7385_27.jpg",
      "/images/exhibition/微信图片_20260614003204_7386_27.jpg",
      "/images/exhibition/微信图片_20260614003205_7387_27.jpg",
      "/images/exhibition/微信图片_20260614003206_7388_27.jpg",
    ];
    setImages(imageFiles);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-4 mb-8">
        <button
          onClick={() => scroll("left")}
          className="group relative w-12 h-12 rounded-full border border-charcoal-300 flex items-center justify-center hover:border-accent-gold hover:bg-accent-gold/10 transition-all duration-300"
          aria-label="Scroll left"
        >
          <svg
            className="w-5 h-5 text-charcoal-600 group-hover:text-accent-gold transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: dot * 320,
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                dot === activeIndex
                  ? "w-8 bg-accent-gold"
                  : "bg-charcoal-300 hover:bg-charcoal-500"
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="group relative w-12 h-12 rounded-full border border-charcoal-300 flex items-center justify-center hover:border-accent-gold hover:bg-accent-gold/10 transition-all duration-300"
          aria-label="Scroll right"
        >
          <svg
            className="w-5 h-5 text-charcoal-600 group-hover:text-accent-gold transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-4 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={(e) => {
          const target = e.target as HTMLDivElement;
          const newIndex = Math.round(target.scrollLeft / 320);
          setActiveIndex(Math.min(Math.max(newIndex, 0), 3));
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 snap-center"
          >
            <div className="group relative bg-cream-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt={`Exhibition photo ${index + 1}`}
                  width={288}
                  height={360}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cream-100 text-sm font-medium">
                  Exhibition {index + 1}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-charcoal-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-cream-100 text-sm font-serif">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-charcoal-500 mt-8">
        Scroll horizontally or use navigation buttons to view all exhibition photos
      </p>
    </div>
  );
}