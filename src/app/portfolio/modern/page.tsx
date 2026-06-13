import ArtworkCard from "@/components/ArtworkCard";
import { getArtworksByCategory, categoryDescriptions } from "@/data/artworks";

export default function ModernPage() {
  const modernArtworks = getArtworksByCategory("Modern");

  return (
    <div>
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-charcoal-900 mb-6">Modern Paintings</h1>
            <p className="text-lg text-charcoal-700 max-w-3xl mx-auto leading-relaxed">
              {categoryDescriptions.Modern}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {modernArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}