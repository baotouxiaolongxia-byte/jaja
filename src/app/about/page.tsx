import Button from "@/components/Button";
import ExhibitionGallery from "@/components/ExhibitionGallery";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-8">
                About the Artist
              </h1>
              <div className="space-y-6 text-charcoal-700 leading-relaxed">
                <p className="text-lg">
                  Jada Han is a Chinese oil painter with a Master&apos;s degree in oil
                  painting. Her artistic practice focuses on landscape oil paintings,
                  modern paintings, and decorative artworks for contemporary interiors.
                </p>
                <p className="text-lg">
                  Through layered color, texture, and atmosphere, Jada creates paintings
                  that balance emotional depth with visual elegance. Her landscape works
                  often explore the quiet relationship between nature, memory, and inner
                  experience, while her modern and decorative paintings bring a refined
                  artistic presence into living spaces.
                </p>
                <p className="text-lg">
                  Her works have been collected by galleries, art spaces, and private
                  collectors. In addition to original paintings, Jada also creates
                  selected works for residential interiors, hospitality spaces, and
                  private collections.
                </p>
              </div>
            </div>

            <div className="aspect-[4/5] bg-cream-300 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/artist.jpg"
                alt="Jada Han - Chinese Oil Painter"
                width={320}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-charcoal-900 mb-8 text-center">Education</h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-charcoal-700">
                Master&apos;s Degree in Oil Painting
              </p>
              <p className="text-charcoal-700">
                Specialized in fine art oil painting techniques, color theory,
                and contemporary artistic practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-charcoal-900 mb-8 text-center">Artistic Practice</h2>
            <div className="space-y-6 text-charcoal-700 leading-relaxed">
              <p className="text-lg text-center">
                My work explores the intersection of nature, memory, and emotion through
                the medium of oil paint. Each piece is a meditation on light, atmosphere,
                and the quiet moments that connect us to place and feeling.
              </p>
              <p className="text-lg text-center">
                I work primarily in oil on canvas, building layers of color and texture
                to create depth and luminosity. My process is both intuitive and deliberate,
                allowing the painting to evolve while maintaining a clear artistic vision.
              </p>
              <p className="text-lg text-center">
                Whether creating contemplative landscapes, modern abstractions, or
                decorative works for interior spaces, I seek to bring a sense of
                refinement and emotional resonance to every canvas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-charcoal-900 mb-8 text-center">
              Collections & Recognition
            </h2>
            <div className="space-y-6 text-charcoal-700 leading-relaxed">
              <p className="text-lg text-center">
                Jada Han&apos;s works have been collected by galleries, art spaces, and
                private collectors across China and internationally.
              </p>
              <p className="text-lg text-center">
                Her paintings are held in residential interiors, hospitality spaces,
                and private collections, bringing artistic presence and emotional depth
                to diverse environments.
              </p>
              <div className="mt-12 text-center">
                <div className="inline-block">
                  <h3 className="text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-4">
                    Collection Types
                  </h3>
                  <ul className="space-y-2 text-charcoal-700">
                    <li>Gallery Collections</li>
                    <li>Art Space Collections</li>
                    <li>Private Collections</li>
                    <li>Residential Interiors</li>
                    <li>Hospitality Spaces</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-charcoal-900 mb-8 text-center">Exhibition Photos & Certificates</h2>
            <ExhibitionGallery />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-charcoal-900 mb-8 text-center">Exhibitions & Awards</h2>
            <div className="space-y-4">
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">October 2024</span>
                <span className="text-charcoal-700">《向阳而生》Selected for the 2nd Hong Kong Youth Art Award</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">October 2024</span>
                <span className="text-charcoal-700">《青城印记一》Selected for "Civilization with Me - Painting Qingcheng" Art Exhibition</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">October 2024</span>
                <span className="text-charcoal-700">《静谧的时光》Selected for "Landscape of Sketching - Autumn Sketching Exhibition by Teachers and Students of Inner Mongolia Arts University"</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">December 2024</span>
                <span className="text-charcoal-700">《物语》Selected for "2024·Changsha First Mixed Media Painting Exhibition"</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">April 2025</span>
                <span className="text-charcoal-700">《窗边谧语》Selected for "Meet Hainan Free Trade Port - Enjoy Hainan Expo" 2nd Haikou Excellent Art Exhibition</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">May 2025</span>
                <span className="text-charcoal-700">《窗边谧语》Selected for Baotou 2nd Youth Art Exhibition</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">May 2025</span>
                <span className="text-charcoal-700">《窗畔静境》Selected for Baotou 2nd Youth Art Exhibition</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">2025</span>
                <span className="text-charcoal-700">《窗边谧语》Selected for the 10th "That Mountain, That Water, That Cloud" Art Exhibition Bayannur Invitational Exhibition</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">2025</span>
                <span className="text-charcoal-700">《青毡绘梦》Selected for the 11th "Night at the Art Museum" and 2025 National Art Masters Sketching Bayannur Exhibition</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">2025</span>
                <span className="text-charcoal-700">《缪斯的啜饮》Participated in "The Beauty of Ancient Greece - Exhibition of Cultural Relics from the National Archaeological Museum of Naples" at the Inner Mongolia Museum, awarded "Outstanding Contribution Award for Artistic Creation"</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">2025</span>
                <span className="text-charcoal-700">《窗畔静境》Selected for 2025 "Spring Scenery Painting - Themed Oil Painting (Online) Exhibition"</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">2025</span>
                <span className="text-charcoal-700">《窗边谧语》Selected for 2025 "Spring Scenery Painting - Themed Oil Painting (Online) Exhibition"</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-charcoal-200">
                <span className="text-sm text-charcoal-500 min-w-[160px]">2025</span>
                <span className="text-charcoal-700">《窗畔静境》Selected for "New Images Symbiosis - Brilliant Northern Border" First Inner Mongolia New Literary and Art Groups Art Exhibition</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm text-charcoal-500 min-w-[160px]">2025</span>
                <span className="text-charcoal-700">《窗边谧语》Selected for "New Images Symbiosis - Brilliant Northern Border" First Inner Mongolia New Literary and Art Groups Art Exhibition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-charcoal-900 mb-8 text-center">Artist Statement</h2>
            <div className="space-y-6 text-charcoal-700 leading-relaxed">
              <p className="text-lg text-center italic">
                &quot;Painting is my way of understanding the world—its light, its spaces,
                its quiet moments. Each work begins with an experience, a memory, or a
                feeling, and through the process of painting, I seek to transform that
                initial impulse into something tangible and lasting.&quot;
              </p>
              <p className="text-lg text-center italic">
                &quot;I believe that art should bring beauty and meaning into everyday life.
                Whether a landscape that evokes a sense of place, a modern composition that
                challenges perception, or a decorative piece that enhances a living space,
                my goal is to create work that resonates on both emotional and aesthetic
                levels.&quot;
              </p>
              <p className="text-lg text-center italic">
                &quot;My hope is that those who encounter my work find in it a moment of
                stillness, a connection to something deeper, and a sense of the beauty
                that exists in both the natural world and the spaces we create for
                ourselves.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-charcoal-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-cream-100 mb-6">View Portfolio</h2>
          <p className="text-cream-200 text-lg max-w-2xl mx-auto mb-12">
            Explore the complete collection of landscape, modern, and decorative paintings.
          </p>
          <Button href="/portfolio" variant="secondary" size="lg">
            View Portfolio
          </Button>
        </div>
      </section>
    </div>
  );
}