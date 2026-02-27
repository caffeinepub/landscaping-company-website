import { Leaf, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream-100 text-forest-700 border-t border-forest-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-forest-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-cream-50" />
              </div>
              <div>
                <span className="block font-serif font-bold text-forest-900 text-lg leading-tight">
                  Green Roots
                </span>
                <span className="block text-forest-600 text-xs tracking-widest uppercase leading-tight">
                  Landscaping
                </span>
              </div>
            </div>
            <p className="font-sans text-forest-700 text-sm leading-relaxed max-w-xs">
              Professional, personal landscaping services for homeowners who take pride in
              their outdoor spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-forest-900 text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-sans text-forest-700 hover:text-forest-900 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-forest-900 text-base mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-sans text-forest-700 text-sm">
                <Phone className="w-4 h-4 text-forest-600 shrink-0" />
                940-735-8008
              </li>
              <li className="flex items-start gap-3 font-sans text-forest-700 text-sm">
                <MapPin className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                <span>
                  Marshall, Longview, Jefferson &amp; Surrounding Areas<br />
                  <span className="text-forest-600">East Texas, TX</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-200 py-6 flex items-center justify-center text-xs font-sans text-forest-600">
          <p>&copy; {year} Green Roots Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
