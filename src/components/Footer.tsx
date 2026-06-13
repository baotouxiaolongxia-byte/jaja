import Link from "next/link";

const footerLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Landscape", href: "/portfolio/landscape" },
  { name: "Modern", href: "/portfolio/modern" },
  { name: "Decorative", href: "/portfolio/decorative" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cream-200 border-t border-cream-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-serif tracking-wide text-charcoal-900">
              Jada Han
            </Link>
            <p className="mt-2 text-sm text-charcoal-700 tracking-wider uppercase">
              Chinese Oil Painter
            </p>
            <p className="mt-4 text-sm text-charcoal-700 leading-relaxed">
              Landscape, Modern, and Decorative Paintings
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
              <div>
                <h3 className="text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-4">
                  Portfolio
                </h3>
                <ul className="space-y-3">
                  {footerLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-charcoal-700 hover:text-charcoal-900 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-4">
                  Information
                </h3>
                <ul className="space-y-3">
                  {footerLinks.slice(4).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-charcoal-700 hover:text-charcoal-900 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-4">
                  Contact
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  For artwork inquiries, gallery collaborations, and commissions.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-3 text-sm text-accent-gold hover:text-accent-brown transition-colors duration-200"
                >
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-300">
          <p className="text-xs text-charcoal-700 text-center">
            © {new Date().getFullYear()} Jada Han. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}