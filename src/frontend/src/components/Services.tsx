import { Leaf, Ruler, Scissors, Wind } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Scissors className="w-7 h-7" />,
    title: "Lawn Mowing",
    description:
      "Clean, even cuts every visit to keep your lawn healthy, tidy, and looking its best throughout the season.",
  },
  {
    icon: <Wind className="w-7 h-7" />,
    title: "Weed Eating",
    description:
      "Precise string trimming around fences, trees, flower beds, and hard-to-reach spots your mower can't get to.",
  },
  {
    icon: <Ruler className="w-7 h-7" />,
    title: "Edging",
    description:
      "Sharp, defined edges along driveways, sidewalks, and curbs for that crisp, professional finished look.",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Leaf Blowing",
    description:
      "After every job I blow away all the clippings and mess with a leaf blower, leaving your property spotless and clean.",
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
            Simple, reliable lawn care done right. I focus on the essentials so
            your yard always looks sharp.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg p-8 shadow-xs hover:shadow-earthy transition-all duration-300 hover:-translate-y-1 border border-border text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center mb-5 mx-auto group-hover:bg-forest-600 group-hover:text-cream-100 transition-colors duration-300 border-0">
                {service.icon}
              </div>
              <h3 className="font-serif font-semibold text-forest-800 text-xl mb-3 leading-snug">
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
            Ready for a cleaner yard?
          </h3>
          <p className="font-sans text-forest-700 text-base mb-6 max-w-lg mx-auto">
            I&apos;ll come out and take a look at your property for free. No
            pressure, no obligation.
          </p>
          <button
            type="button"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
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
