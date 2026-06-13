import Button from "@/components/Button";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import CategoryPreview from "@/components/CategoryPreview";
import { AnimatedSection, AnimatedText, AnimatedImage } from "@/components/AnimatedPage";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[85vh] flex items-center justify-center bg-cream-100">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-cream-100" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center py-20 lg:py-32">
          <AnimatedSection index={0}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal-900 tracking-tight mb-6">
              <AnimatedText index={0}>J</AnimatedText>
              <AnimatedText index={1}>a</AnimatedText>
              <AnimatedText index={2}>d</AnimatedText>
              <AnimatedText index={3}>a</AnimatedText>
              <AnimatedText index={4}> </AnimatedText>
              <AnimatedText index={5}>H</AnimatedText>
              <AnimatedText index={6}>a</AnimatedText>
              <AnimatedText index={7}>n</AnimatedText>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection index={1}>
            <p className="text-xl md:text-2xl text-charcoal-700 font-sans tracking-wider uppercase mb-4">
              Chinese Oil Painter
            </p>
          </AnimatedSection>
          
          <AnimatedSection index={2}>
            <p className="text-lg text-charcoal-700 max-w-2xl mx-auto mb-12">
              Landscape, Modern, and Decorative Paintings
            </p>
          </AnimatedSection>
          
          <AnimatedSection index={3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/portfolio" variant="primary" size="lg">
                View Portfolio
              </Button>
              <Button href="/about" variant="outline" size="lg">
                About the Artist
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection index={4} delay={0.2}>
        <section className="py-20 lg:py-28 bg-cream-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-charcoal-900 mb-8">About the Artist</h2>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-8">
                Jada Han is a Chinese oil painter with a Master&apos;s degree in oil painting.
                Her artistic practice focuses on landscape oil paintings, modern paintings,
                and decorative artworks for contemporary interiors.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-8">
                Through layered color, texture, and atmosphere, Jada creates paintings that
                balance emotional depth with visual elegance. Her works have been collected
                by galleries, art spaces, and private collectors.
              </p>
              <Button href="/about" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection index={5} delay={0.3}>
        <FeaturedArtworks />
      </AnimatedSection>

      <AnimatedSection index={6} delay={0.4}>
        <CategoryPreview />
      </AnimatedSection>

      <AnimatedSection index={7} delay={0.5}>
        <section className="py-20 lg:py-28 bg-cream-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-charcoal-900 mb-8">Artist Statement</h2>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-8">
                My work explores the intersection of nature, memory, and emotion through
                the medium of oil paint. Each piece is a meditation on light, atmosphere,
                and the quiet moments that connect us to place and feeling.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Whether creating contemplative landscapes, modern abstractions, or
                decorative works for interior spaces, I seek to bring a sense of
                refinement and emotional resonance to every canvas.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection index={8} delay={0.6}>
        <section className="py-20 lg:py-28 bg-cream-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-charcoal-900 mb-8">Collections</h2>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-8">
                Jada Han&apos;s works have been collected by galleries, art spaces, and
                private collectors. Her paintings are held in residential interiors,
                hospitality spaces, and private collections across China and internationally.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                For inquiries about available works, commissions, or gallery collaborations,
                please get in touch.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection index={9} delay={0.7}>
        <section className="py-20 lg:py-28 bg-charcoal-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-cream-100 mb-6">Get in Touch</h2>
            <p className="text-cream-200 text-lg max-w-2xl mx-auto mb-12">
              For artwork inquiries, gallery collaborations, commissions, and interior projects,
              please contact the studio.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Contact
            </Button>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}