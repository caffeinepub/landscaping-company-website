import { Leaf, Ruler, Wheat } from "lucide-react";

// Push mower icon — tall and slender
function PushMowerIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Push mower"
      viewBox="0 0 40 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Handle left post */}
      <line
        x1="14"
        y1="44"
        x2="8"
        y2="6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Handle right post */}
      <line
        x1="20"
        y1="44"
        x2="14"
        y2="6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Handle crossbar */}
      <line
        x1="8"
        y1="6"
        x2="14"
        y2="6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Engine top cap */}
      <rect
        x="14"
        y="28"
        width="10"
        height="4"
        rx="2"
        fill="currentColor"
        opacity="0.6"
      />
      {/* Engine block */}
      <rect
        x="12"
        y="32"
        width="14"
        height="6"
        rx="2"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Mower deck body */}
      <path
        d="M4 40 Q4 37 7 37 L33 37 Q36 37 36 40 L36 46 Q36 49 33 49 L7 49 Q4 49 4 46 Z"
        fill="currentColor"
      />

      {/* Discharge chute right */}
      <rect
        x="34"
        y="42"
        width="4"
        height="3"
        rx="1"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Rear wheel */}
      <circle
        cx="28"
        cy="55"
        r="6"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="28" cy="55" r="2" fill="currentColor" />

      {/* Front wheel */}
      <circle
        cx="12"
        cy="55"
        r="6"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="12" cy="55" r="2" fill="currentColor" />
    </svg>
  );
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <PushMowerIcon className="w-7 h-7" />,
    title: "Lawn Mowing",
    description:
      "Clean, even cuts every visit to keep your lawn healthy, tidy, and looking its best throughout the season.",
  },
  {
    icon: <Wheat className="w-7 h-7" />,
    title: "Weed Eating",
    description:
      "Precise string trimming around fences, trees, flower beds, and hard-to-reach spots a mower can't get to.",
  },
  {
    icon: <Ruler className="w-7 h-7" />,
    title: "Edging",
    description:
      "Sharp, defined edges along driveways, sidewalks, and curbs for that crisp, professional finished look.",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Blow Off / Air Clean",
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
            className="inline-block px-8 py-3 bg-forest-600 hover:bg-forest-500 text-white font-sans font-semibold rounded transition-colors shadow-xs"
          >
            Schedule a Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
