import { Leaf, Ruler, Wheat } from "lucide-react";

// Improved riding mower icon with roll bar
function RidingMowerIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Riding mower"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Roll bar ROPS — left post */}
      <rect
        x="22"
        y="7"
        width="3.5"
        height="18"
        rx="1.75"
        fill="currentColor"
      />
      {/* Roll bar top horizontal */}
      <rect
        x="22"
        y="7"
        width="16"
        height="3.5"
        rx="1.75"
        fill="currentColor"
      />
      {/* Roll bar — right post */}
      <rect
        x="34.5"
        y="7"
        width="3.5"
        height="13"
        rx="1.75"
        fill="currentColor"
      />

      {/* Seat back */}
      <rect
        x="23"
        y="22"
        width="9"
        height="5"
        rx="2"
        fill="currentColor"
        opacity="0.65"
      />
      {/* Seat cushion */}
      <rect
        x="21"
        y="26"
        width="13"
        height="4"
        rx="2"
        fill="currentColor"
        opacity="0.85"
      />

      {/* Steering column */}
      <rect
        x="31"
        y="24"
        width="2.5"
        height="6"
        rx="1.25"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Steering wheel ring */}
      <circle
        cx="32"
        cy="23"
        r="4"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Steering wheel spokes */}
      <line
        x1="32"
        y1="19"
        x2="32"
        y2="27"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="28"
        y1="23"
        x2="36"
        y2="23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Main body / hood */}
      <path
        d="M12 32 L14 28 Q15 26 18 26 L46 26 Q50 26 51 30 L52 36 Q52 38 50 38 L14 38 Q12 38 12 36 Z"
        fill="currentColor"
      />

      {/* Mower deck (cutting housing) */}
      <rect
        x="9"
        y="38"
        width="36"
        height="6"
        rx="3"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Discharge chute */}
      <rect
        x="44"
        y="40"
        width="5"
        height="3"
        rx="1"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Rear large drive wheel */}
      <circle
        cx="47"
        cy="45"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="47" cy="45" r="3" fill="currentColor" />
      {/* Tread lines rear */}
      <line
        x1="47"
        y1="36"
        x2="47"
        y2="54"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <line
        x1="38"
        y1="45"
        x2="56"
        y2="45"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Front small caster wheel */}
      <circle
        cx="16"
        cy="47"
        r="6"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="16" cy="47" r="2" fill="currentColor" />
      {/* Tread lines front */}
      <line
        x1="16"
        y1="41"
        x2="16"
        y2="53"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <line
        x1="10"
        y1="47"
        x2="22"
        y2="47"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Exhaust pipe */}
      <rect
        x="39"
        y="27"
        width="3"
        height="7"
        rx="1.5"
        fill="currentColor"
        opacity="0.6"
      />
      <ellipse
        cx="40.5"
        cy="27"
        rx="2"
        ry="1"
        fill="currentColor"
        opacity="0.6"
      />
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
    icon: <RidingMowerIcon className="w-7 h-7" />,
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
