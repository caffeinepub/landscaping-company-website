import { Scissors, Sprout, Leaf, Trash2, TreePine, Droplets, Sun, Shovel } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Scissors className="w-7 h-7" />,
    title: 'Lawn Mowing & Edging',
    description:
      'Regular mowing, crisp edging, and trimming to keep your lawn looking neat and well-maintained all season long.',
  },
  {
    icon: <Sprout className="w-7 h-7" />,
    title: 'Planting & Garden Beds',
    description:
      'Seasonal planting, flower bed design, and mulching to add color and life to your outdoor spaces.',
  },
  {
    icon: <TreePine className="w-7 h-7" />,
    title: 'Tree & Shrub Trimming',
    description:
      'Expert pruning and shaping of trees, hedges, and shrubs to promote healthy growth and curb appeal.',
  },
  {
    icon: <Trash2 className="w-7 h-7" />,
    title: 'Yard Cleanup',
    description:
      'Spring and fall cleanups including leaf removal, debris hauling, and general yard tidying.',
  },
  {
    icon: <Shovel className="w-7 h-7" />,
    title: 'Landscape Design',
    description:
      'Custom landscape planning and installation to transform your outdoor space into something truly special.',
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: 'Irrigation & Watering',
    description:
      'Sprinkler system setup, maintenance, and seasonal adjustments to keep your lawn healthy and green.',
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: 'Fertilization & Weed Control',
    description:
      'Targeted treatments to nourish your lawn and eliminate weeds for a thick, lush, green carpet.',
  },
  {
    icon: <Sun className="w-7 h-7" />,
    title: 'Seasonal Maintenance',
    description:
      "Year-round care packages tailored to your property's needs through every season.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream-200 texture-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-forest-600 font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            What I Offer
          </span>
          <h2 className="font-serif font-bold text-forest-800 text-4xl sm:text-5xl mb-4">
            Services
          </h2>
          <div className="w-16 h-1 bg-soil-400 mx-auto mb-6 rounded-full" />
          <p className="font-sans text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            From routine maintenance to full landscape transformations, I handle every
            job with care and craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-6 shadow-xs hover:shadow-earthy transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center mb-4 group-hover:bg-forest-600 group-hover:text-cream-100 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif font-semibold text-forest-800 text-lg mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-cream-100 border border-forest-200 rounded-lg p-8 sm:p-10 text-center shadow-earthy-lg">
          <h3 className="font-serif font-bold text-forest-900 text-2xl sm:text-3xl mb-3">
            Not sure what you need?
          </h3>
          <p className="font-sans text-forest-700 text-base mb-6 max-w-lg mx-auto">
            I&apos;ll come out and assess your property for free. No pressure, no obligation.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 bg-soil-400 hover:bg-soil-300 text-forest-900 font-sans font-semibold rounded transition-colors shadow-xs"
          >
            Schedule a Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
