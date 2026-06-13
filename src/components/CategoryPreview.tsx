import Link from "next/link";
import { categoryDescriptions } from "@/data/artworks";

const categories = [
  {
    name: "Landscape",
    href: "/portfolio/landscape",
    image: "/images/category-landscape.jpg",
    description: categoryDescriptions.Landscape,
  },
  {
    name: "Modern",
    href: "/portfolio/modern",
    image: "/images/category-modern.jpg",
    description: categoryDescriptions.Modern,
  },
  {
    name: "Decorative",
    href: "/portfolio/decorative",
    image: "/images/category-decorative.jpg",
    description: categoryDescriptions.Decorative,
  },
];

export default function CategoryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-cream-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-charcoal-900">Portfolio Categories</h2>
          <p className="mt-4 text-charcoal-700 max-w-2xl mx-auto">
            Explore three distinct collections of oil paintings, each with its own
            character and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group block"
            >
              <div className="aspect-[4/3] bg-cream-300 overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-cream-200 to-cream-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-charcoal-400 text-sm tracking-wider uppercase">
                    {category.name}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-serif text-charcoal-900 mb-3 group-hover:text-accent-gold transition-colors duration-300">
                {category.name} Oil Paintings
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed mb-4 line-clamp-3">
                {category.description}
              </p>
              <span className="text-sm text-accent-gold group-hover:text-accent-brown transition-colors duration-200 tracking-wider uppercase">
                View Collection →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}