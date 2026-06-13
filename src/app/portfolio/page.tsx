"use client";

import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import { artworks, categories } from "@/data/artworks";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === selectedCategory);

  return (
    <div>
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-charcoal-900 mb-6">Portfolio</h1>
            <p className="text-lg text-charcoal-700 max-w-2xl mx-auto">
              A collection of oil paintings exploring landscape, modern abstraction,
              and decorative art for contemporary spaces. Each work is created with
              attention to color, texture, and emotional resonance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-sans tracking-wider uppercase transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-charcoal-900 text-cream-100"
                    : "bg-cream-200 text-charcoal-700 hover:bg-cream-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-charcoal-900 mb-6">About the Collection</h2>
            <p className="text-lg text-charcoal-700 leading-relaxed">
              Jada Han&apos;s portfolio spans three distinct categories: landscape oil
              paintings that capture the atmosphere of nature, modern paintings that
              explore contemporary forms and visual rhythm, and decorative artworks
              designed for refined interior spaces. Each piece is hand-painted with
              oil on canvas, creating depth, texture, and lasting beauty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}