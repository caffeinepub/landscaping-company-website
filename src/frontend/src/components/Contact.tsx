import { Clock, MapPin, Phone } from "lucide-react";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  note?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "940-735-8008",
    sub: "Call or text anytime",
    note: "I work an evening job from 4pm to 10pm and I am unable to answer the phone around that time. Text is the best way to reach me.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Service Area",
    value: "Marshall, Jefferson & Surrounding Areas",
    sub: "East Texas, TX",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Hours",
    value: "Every Day: 7:00 AM – 3:00 PM",
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
              Ready for a{" "}
              <span className="text-forest-600 italic">Beautiful Yard?</span>
            </h2>
            <div className="w-16 h-1 bg-soil-400 mb-6 rounded-full" />
            <p className="font-sans text-forest-800 text-lg leading-relaxed mb-10">
              Reach out today for a free, no-obligation quote. I&apos;ll come
              take a look at your property and put together a plan that fits
              your needs and budget.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
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
                        <p className="font-sans text-forest-600 text-xs mt-0.5">
                          {item.sub}
                        </p>
                      )}
                      {item.note && (
                        <p className="font-sans text-forest-500 text-xs mt-1.5 leading-snug italic">
                          {item.note}
                        </p>
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
              Fill out the form below and I&apos;ll get back to you. Fields
              marked with <span className="text-red-500 font-semibold">*</span>{" "}
              are required.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="quote-first-name"
                    className="block font-sans text-forest-700 text-sm font-medium mb-1.5"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-first-name"
                    type="text"
                    placeholder=""
                    required
                    data-ocid="quote.first_name.input"
                    className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quote-last-name"
                    className="block font-sans text-forest-700 text-sm font-medium mb-1.5"
                  >
                    Last Name{" "}
                    <span className="text-forest-500 font-normal text-xs">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="quote-last-name"
                    type="text"
                    placeholder=""
                    data-ocid="quote.last_name.input"
                    className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="quote-phone"
                  className="block font-sans text-forest-700 text-sm font-medium mb-1.5"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  placeholder=""
                  required
                  data-ocid="quote.phone.input"
                  className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-email"
                  className="block font-sans text-forest-700 text-sm font-medium mb-1.5"
                >
                  Email Address{" "}
                  <span className="text-forest-500 font-normal text-xs">
                    (optional)
                  </span>
                </label>
                <input
                  id="quote-email"
                  type="email"
                  placeholder=""
                  data-ocid="quote.email.input"
                  className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-message"
                  className="block font-sans text-forest-700 text-sm font-medium mb-1.5"
                >
                  Message{" "}
                  <span className="text-forest-500 font-normal text-xs">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="quote-message"
                  rows={3}
                  placeholder="Tell me a bit about your yard and what you're looking for..."
                  data-ocid="quote.message.textarea"
                  className="w-full px-4 py-2.5 bg-card border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                data-ocid="quote.submit_button"
                className="w-full py-3.5 bg-forest-600 hover:bg-forest-500 text-white font-sans font-semibold text-base rounded transition-colors shadow-xs"
              >
                Send My Request
              </button>

              <p className="font-sans text-muted-foreground text-xs text-center">
                No spam, ever. I&apos;ll only use your info to respond to your
                request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
