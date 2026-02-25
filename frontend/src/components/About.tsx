import { CheckCircle2, Award, Clock, Heart } from 'lucide-react';

const highlights = [
  { icon: <Award className="w-5 h-5" />, text: 'Licensed & Insured' },
  { icon: <Clock className="w-5 h-5" />, text: 'Reliable & On-Time' },
  { icon: <Heart className="w-5 h-5" />, text: 'Locally Owned & Operated' },
  { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Satisfaction Guaranteed' },
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
                src="/assets/generated/owner-portrait.dim_400x400.png"
                alt="Marcus Green, owner of Green Roots Landscaping"
                className="w-full object-cover aspect-square"
              />
              {/* Name card overlay — light background with dark text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cream-100/95 to-transparent p-6">
                <p className="font-serif font-bold text-forest-900 text-xl">Marcus Green</p>
                <p className="font-sans text-forest-700 text-sm">Owner &amp; Head Landscaper</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-soil-400 text-forest-900 rounded-lg px-5 py-4 shadow-earthy-lg text-center">
              <p className="font-serif font-bold text-3xl leading-none">10+</p>
              <p className="font-sans text-xs font-medium mt-1 leading-tight">Years of<br />Experience</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:pl-4">
            <span className="inline-block text-forest-600 font-sans text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </span>
            <h2 className="font-serif font-bold text-forest-800 text-4xl sm:text-5xl mb-4 leading-tight">
              A Passion for the{' '}
              <span className="text-forest-500 italic">Outdoors</span>
            </h2>
            <div className="w-16 h-1 bg-soil-400 mb-6 rounded-full" />

            <div className="space-y-4 font-sans text-foreground/80 text-base leading-relaxed mb-8">
              <p>
                Hi, I&apos;m Marcus &mdash; a lifelong outdoorsman and the sole owner of Green Roots
                Landscaping. I started this business over a decade ago with a simple belief:
                every yard deserves to look its best, and every client deserves honest,
                dependable service.
              </p>
              <p>
                I handle every job personally, which means you&apos;ll always know who&apos;s showing
                up at your door. No subcontractors, no surprises. Just me, my tools, and a
                genuine commitment to making your outdoor space something you&apos;re proud of.
              </p>
              <p>
                Whether it&apos;s a quick weekly mow or a full landscape overhaul, I bring the
                same level of care and attention to every property I work on.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-forest-50 border border-forest-100 rounded-lg px-4 py-3"
                >
                  <span className="text-forest-600 shrink-0">{item.icon}</span>
                  <span className="font-sans text-forest-800 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
