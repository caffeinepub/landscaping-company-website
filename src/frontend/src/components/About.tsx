import { CheckCircle2, Heart, Settings } from "lucide-react";

const StrongArmIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    {/* Forearm */}
    <path d="M3 17 Q5 14 8 13 L14 11" />
    {/* Upper arm bicep curve */}
    <path d="M14 11 Q18 9 19 6 Q20 3 17 3 Q14 3 13 6" />
    {/* Bicep peak */}
    <path d="M13 6 Q12 4 14 3" />
    {/* Fist / hand */}
    <rect x="8" y="13" width="6" height="4" rx="1.5" />
    <path d="M8 14 L5 14 Q3.5 14 3.5 15.5 Q3.5 17 5 17 L8 17" />
  </svg>
);

const highlights = [
  {
    icon: <StrongArmIcon />,
    text: "Reliable",
    extra: <Settings className="w-4 h-4 ml-1" />,
  },
  {
    icon: <Heart className="w-5 h-5" />,
    text: "Locally Owned & Operated",
    extra: null,
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    text: "Satisfaction Guaranteed",
    extra: null,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            {/* Decorative background block */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-forest-100 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-soil-200 rounded-lg -z-10" />

            <div className="relative rounded-lg overflow-hidden shadow-earthy-lg">
              <img
                src="/assets/PXL_20260225_034238671.jpg"
                alt="Matthew Britt, Owner of Green Roots Lawn Care"
                className="w-full object-cover object-center aspect-[4/5]"
              />
              {/* Name card overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                }}
              >
                <p
                  className="font-serif font-bold text-xl"
                  style={{ color: "#ffffff" }}
                >
                  Matthew Britt
                </p>
                <p
                  className="font-sans text-sm mt-1"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Owner of Green Roots Lawn Care
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-soil-400 text-forest-900 rounded-lg px-5 py-4 shadow-earthy-lg text-center">
              <p className="font-serif font-bold text-3xl leading-none">5+</p>
              <p className="font-sans text-xs font-medium mt-1 leading-tight">
                Years of
                <br />
                Experience
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:pl-4">
            <span className="inline-block text-forest-600 font-sans text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </span>
            <h2 className="font-serif font-bold text-forest-800 text-4xl sm:text-5xl mb-4 leading-tight">
              A Passion for the{" "}
              <span className="text-forest-500 italic">Outdoors</span>
            </h2>
            <div className="w-16 h-1 bg-soil-400 mb-6 rounded-full" />

            <div className="space-y-4 font-sans text-foreground/80 text-base leading-relaxed mb-8">
              <p>
                Hi, I&apos;m Matthew, the sole owner of Green Roots Lawn Care. I
                started this business with a simple belief: every yard deserves
                to look its best, and every client deserves honest, dependable
                service.
              </p>
              <p>
                I handle every job personally, which means you&apos;ll always
                know who&apos;s showing up at your door. No subcontractors, no
                surprises. Just me, my tools, and a genuine commitment to making
                your outdoor space something you&apos;re proud of.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 bg-forest-50 border border-forest-100 rounded-lg px-4 py-3"
                >
                  <span className="text-forest-600 shrink-0">{item.icon}</span>
                  <span className="font-sans text-forest-800 text-sm font-medium">
                    {item.text}
                  </span>
                  {item.extra && (
                    <span className="text-forest-600 shrink-0">
                      {item.extra}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
