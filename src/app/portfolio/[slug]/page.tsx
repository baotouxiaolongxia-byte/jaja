import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import ArtworkImageGallery from "./ArtworkImageGallery";
import { getArtworkBySlug, artworks } from "@/data/artworks";

interface ArtworkDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export default function ArtworkDetailPage({ params }: ArtworkDetailPageProps) {
  const artwork = getArtworkBySlug(params.slug);

  if (!artwork) {
    notFound();
  }

  return (
    <div>
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-block mb-8 text-sm font-sans tracking-wider text-charcoal-700 hover:text-charcoal-900 uppercase transition-colors duration-200"
          >
            ← Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ArtworkImageGallery images={artwork.images} title={artwork.title} />

            <div className="lg:pt-8">
              <h1 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-6">
                {artwork.title}
              </h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-sm font-sans tracking-wider text-charcoal-500 uppercase w-24">
                    Year
                  </span>
                  <span className="text-charcoal-900">{artwork.year}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-sans tracking-wider text-charcoal-500 uppercase w-24">
                    Medium
                  </span>
                  <span className="text-charcoal-900">{artwork.medium}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-sans tracking-wider text-charcoal-500 uppercase w-24">
                    Size
                  </span>
                  <span className="text-charcoal-900">{artwork.size}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-sans tracking-wider text-charcoal-500 uppercase w-24">
                    Category
                  </span>
                  <span className="text-charcoal-900">{artwork.category}</span>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-4">
                  Description
                </h2>
                <p className="text-charcoal-700 leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              <div className="space-y-4">
                <Button href="/contact" variant="primary" size="lg">
                  Inquire About This Work
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Request More Information
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-charcoal-900 mb-6">Related Works</h2>
            <p className="text-charcoal-700 mb-8">
              Explore more paintings in the {artwork.category} collection.
            </p>
            <Button
              href={`/portfolio/${artwork.category.toLowerCase()}`}
              variant="secondary"
            >
              View {artwork.category} Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}