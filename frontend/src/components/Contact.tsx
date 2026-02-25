import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '(555) 234-5678',
    sub: 'Call or text anytime',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'marcus@greenrootslandscaping.com',
    sub: 'I reply within 24 hours',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Service Area',
    value: 'Marshall, Longview, Jefferson & Surrounding Areas',
    sub: 'East Texas, TX',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: 'Hours',
    value: 'Mon – Sat: 7am – 6pm',
    sub: 'Sunday by appointment',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream-200 texture-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-forest-600 font-sans text-sm font-semibold tracking-widest uppercase mb-3">
              Get in Touch
            </span>
            <h2 className="font-serif font-bold text-forest-900 text-4xl sm:text-5xl mb-4 leading-tight">
              Ready for a{' '}
              <span className="text-forest-600 italic">Beautiful Yard?</span>
            </h2>
            <div className="w-16 h-1 bg-soil-400 mb-6 rounded-full" />
            <p className="font-sans text-forest-800 text-lg leading-relaxed mb-10">
              Reach out today for a free, no-obligation quote. I&apos;ll come take a look at
              your property and put together a plan that fits your needs and budget.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-cream-100 border border-forest-200 rounded-lg p-5 hover:bg-cream-50 transition-colors shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-sans text-forest-500 text-xs font-semibold tracking-widest uppercase mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-sans text-forest-900 text-sm font-medium leading-snug">
                        {item.value}
                      </p>
                      {item.sub && (
                        <p className="font-sans text-forest-600 text-xs mt-0.5">{item.sub}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote Card */}
          <div className="bg-cream-100 rounded-lg p-8 sm:p-10 shadow-earthy-lg border border-forest-200">
            <h3 className="font-serif font-bold text-forest-800 text-2xl mb-2">
              Request a Free Quote
            </h3>
            <p className="font-sans text-muted-foreground text-sm mb-6">
              Fill out the form below and I&apos;ll get back to you within one business day.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-forest-700 text-sm font-medium mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-forest-700 text-sm font-medium mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-forest-700 text-sm font-medium mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-forest-700 text-sm font-medium mb-1.5">
                  Service Needed
                </label>
                <select className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors">
                  <option value="">Select a service...</option>
                  <option>Lawn Mowing &amp; Edging</option>
                  <option>Planting &amp; Garden Beds</option>
                  <option>Tree &amp; Shrub Trimming</option>
                  <option>Yard Cleanup</option>
                  <option>Landscape Design</option>
                  <option>Irrigation &amp; Watering</option>
                  <option>Fertilization &amp; Weed Control</option>
                  <option>Seasonal Maintenance</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-forest-700 text-sm font-medium mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me a bit about your yard and what you're looking for..."
                  className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-forest-600 hover:bg-forest-500 text-forest-900 font-sans font-semibold text-base rounded transition-colors shadow-xs"
              >
                Send My Request
              </button>

              <p className="font-sans text-muted-foreground text-xs text-center">
                No spam, ever. I&apos;ll only use your info to respond to your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
