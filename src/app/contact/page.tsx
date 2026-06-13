import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div>
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h1 className="text-charcoal-900 mb-8">Contact</h1>
              <div className="space-y-6 text-charcoal-700 leading-relaxed">
                <p className="text-lg">
                  For artwork inquiries, gallery collaborations, commissions, and
                  interior projects, please contact the studio.
                </p>
                <p>
                  Whether you are interested in acquiring an existing work,
                  discussing a commission for a specific space, or exploring
                  gallery collaboration opportunities, we welcome your inquiry.
                </p>
                <p>
                  Please include details about your interest, and we will respond
                  within 2-3 business days.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                <div>
                  <h3 className="text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-3">
                    Inquiry Types
                  </h3>
                  <ul className="space-y-2 text-charcoal-700">
                    <li>Artwork Inquiry</li>
                    <li>Gallery Collaboration</li>
                    <li>Interior Project</li>
                    <li>Commission Request</li>
                    <li>Press / Media</li>
                    <li>Other</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-3">
                    Response Time
                  </h3>
                  <p className="text-charcoal-700">
                    We respond to all inquiries within 2-3 business days.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-cream-200 p-8 lg:p-12">
                <h2 className="text-xl font-serif text-charcoal-900 mb-6">
                  Send an Inquiry
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-charcoal-900 mb-6">Working with Collectors</h2>
            <p className="text-lg text-charcoal-700 leading-relaxed mb-8">
              Jada Han&apos;s works are available for acquisition by galleries, art
              spaces, interior designers, and private collectors. Each painting
              is created with attention to quality, authenticity, and lasting beauty.
            </p>
            <p className="text-lg text-charcoal-700 leading-relaxed">
              For interior projects and commissions, Jada works closely with clients
              to create works that complement specific spaces, considering scale,
              color harmony, and the overall atmosphere of the environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}