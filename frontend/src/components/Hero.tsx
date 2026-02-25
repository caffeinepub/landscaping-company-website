import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-forest-900/65" />

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forest-900/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-400/20 border border-forest-400/40 text-forest-200 text-sm font-sans font-medium mb-8 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-forest-300 animate-pulse" />
          Serving Marshall, Longview, Jefferson &amp; Surrounding Areas, Texas
        </div>

        {/* Headline */}
        <h1 className="font-serif font-bold text-cream-100 text-5xl sm:text-6xl md:text-7xl leading-tight mb-6">
          Your Yard,{' '}
          <span className="text-forest-300 italic">Transformed.</span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-cream-300 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Professional landscaping services with a personal touch. From lush lawns to
          stunning garden beds — I take pride in every blade of grass.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleScroll('#contact')}
            className="w-full sm:w-auto px-8 py-4 bg-soil-400 hover:bg-soil-300 text-cream-50 font-sans font-semibold text-lg rounded transition-all duration-200 shadow-earthy-lg hover:shadow-earthy hover:-translate-y-0.5"
          >
            Get a Free Quote
          </button>
          <button
            onClick={() => handleScroll('#services')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-cream-300/60 hover:border-cream-100 text-cream-200 hover:text-cream-100 font-sans font-semibold text-lg rounded transition-all duration-200"
          >
            View Services
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-cream-400 font-sans text-sm">
          <div className="flex items-center gap-2">
            <span className="text-forest-300 font-bold text-2xl font-serif">10+</span>
            <span>Years Experience</span>
          </div>
          <div className="w-px h-8 bg-cream-400/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-forest-300 font-bold text-2xl font-serif">200+</span>
            <span>Happy Clients</span>
          </div>
          <div className="w-px h-8 bg-cream-400/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-forest-300 font-bold text-2xl font-serif">100%</span>
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-400/60 hover:text-cream-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
