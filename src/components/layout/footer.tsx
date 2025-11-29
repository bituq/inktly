import Link from "next/link";
import { PenLine } from "lucide-react";

const footerLinks = {
  producten: [
    { name: "Kaarten", href: "#kaarten" },
    { name: "Handschriften", href: "#handschriften" },
    { name: "Prijzen", href: "#prijzen" },
    { name: "Zakelijk", href: "#zakelijk" },
  ],
  bedrijf: [
    { name: "Over ons", href: "#over-ons" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
    { name: "Werken bij", href: "#werken-bij" },
  ],
  support: [
    { name: "FAQ", href: "#faq" },
    { name: "Verzending", href: "#verzending" },
    { name: "Retourneren", href: "#retourneren" },
    { name: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-rich-brown text-warm-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <PenLine className="h-8 w-8 text-terracotta-light" />
              <span className="font-heading text-2xl">Inktly</span>
            </Link>
            <p className="text-parchment max-w-sm">
              Verstuur persoonlijke handgeschreven kaarten zonder zelf te
              schrijven. Onze robots maken het persoonlijk.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Producten</h3>
            <ul className="space-y-2">
              {footerLinks.producten.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-parchment hover:text-terracotta-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-parchment hover:text-terracotta-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-parchment hover:text-terracotta-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-brown mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-parchment text-sm">
            &copy; {new Date().getFullYear()} Inktly. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-parchment hover:text-terracotta-light transition-colors"
            >
              Privacybeleid
            </Link>
            <Link
              href="#"
              className="text-parchment hover:text-terracotta-light transition-colors"
            >
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
