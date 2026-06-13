import ArtworkCard from "./ArtworkCard";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { getFeaturedArtworks } from "@/data/artworks";

export default function FeaturedArtworks() {
  const featuredArtworks = getFeaturedArtworks();

  return (
    <section className="py-20 lg:py-28 bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Featured Works"
          subtitle="A selection of recent paintings exploring landscape, modern abstraction, and decorative art for contemporary spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredArtworks.slice(0, 3).map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <Button href="/portfolio" variant="outline">
            View All Works
          </Button>
        </div>
      </div>
    </section>
  );
}