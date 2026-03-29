import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-100 shadow-earthy-lg"
          : "bg-cream-50/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-forest-600 flex items-center justify-center group-hover:bg-forest-500 transition-colors">
              <Leaf className="w-5 h-5 text-cream-50" />
            </div>
            <div className="text-left">
              <span className="block font-serif font-bold text-forest-900 text-lg leading-tight">
                Green Root
              </span>
              <span className="block text-forest-600 text-xs tracking-widest uppercase leading-tight">
                Lawn Care
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-forest-700 hover:text-forest-900 font-sans text-sm font-medium tracking-wide transition-colors hover:bg-forest-100/60 rounded"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="ml-4 px-5 py-2 bg-soil-400 hover:bg-soil-300 text-forest-900 font-sans text-sm font-semibold rounded transition-colors shadow-xs"
            >
              Get a Free Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-forest-700 hover:text-forest-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream-50 border-t border-forest-200">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-forest-800 hover:text-forest-900 hover:bg-forest-100/60 font-sans text-base font-medium rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="mt-2 px-4 py-3 bg-soil-400 hover:bg-soil-300 text-forest-900 font-sans text-base font-semibold rounded transition-colors text-center"
            >
              Get a Free Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
