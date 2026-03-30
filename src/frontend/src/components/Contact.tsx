import { Clock, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

function usePhoneHoursStatus() {
  const getStatus = () => {
    const hour = new Date().getHours();
    // Open: 10pm (22) to 4pm (16) — i.e., 22,23,0..15 are open; 16..21 are closed
    return hour >= 16 && hour < 22 ? "closed" : "open";
  };

  const [status, setStatus] = useState(getStatus);

  // biome-ignore lint/correctness/useExhaustiveDependencies: getStatus is stable
  useEffect(() => {
    const interval = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}

export default function Contact() {
  const phoneStatus = usePhoneHoursStatus();

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
              {/* Phone Card */}
              <div className="bg-cream-100 border border-forest-200 rounded-lg p-5 hover:bg-cream-50 transition-colors shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-sans text-forest-500 text-xs font-semibold tracking-widest uppercase mb-0.5">
                      Phone
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-sans text-forest-900 text-sm font-medium leading-snug">
                        940-735-8008
                      </p>
                      <span
                        className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${
                          phoneStatus === "open"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        Phone hours: {phoneStatus}
                      </span>
                    </div>
                    <p className="font-sans text-forest-600 text-xs mt-0.5">
                      call during phone hours, text anytime.
                    </p>
                    <p
                      className={`font-sans text-xs mt-1 ${
                        phoneStatus === "open"
                          ? "text-green-700"
                          : "text-red-600"
                      }`}
                    >
                      I work an evening job from 4pm to 10pm and am unable to
                      accept phone calls during that time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area Card */}
              <div className="bg-cream-100 border border-forest-200 rounded-lg p-5 hover:bg-cream-50 transition-colors shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-sans text-forest-500 text-xs font-semibold tracking-widest uppercase mb-0.5">
                      Service Area
                    </p>
                    <p className="font-sans text-forest-900 text-sm font-medium leading-snug">
                      Marshall, Jefferson & Surrounding Areas
                    </p>
                    <p className="font-sans text-forest-600 text-xs mt-0.5">
                      East Texas, TX
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-cream-100 border border-forest-200 rounded-lg p-5 hover:bg-cream-50 transition-colors shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-sans text-forest-500 text-xs font-semibold tracking-widest uppercase mb-0.5">
                      Hours
                    </p>
                    <p className="font-sans text-forest-900 text-sm font-medium leading-snug">
                      Every Day: 7:00 AM – 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
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
