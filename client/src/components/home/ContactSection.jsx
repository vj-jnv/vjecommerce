import {
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const contactDetails = [
  {
    title: "Call Us",
    value: "9897310047",
    description: "Talk to our team",
    icon: Phone,
    href: "tel:+919897310047",
  },
  {
    title: "WhatsApp",
    value: "Chat with us",
    description: "Get a quick response",
    icon: MessageCircle,
    href: "https://wa.me/919897310047",
  },
  {
    title: "Visit Us",
    value: "Firozabad",
    description: "Kushwaha Nagar, Kotla Road",
    icon: MapPin,
    href: "https://maps.app.goo.gl/S1esJCaHktWHwMKf8",
  },
];

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-cta-background)] px-6 py-16 text-center sm:px-10 lg:px-16">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[var(--color-primary)]/20" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[var(--color-primary)]/10" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Let's Grow Together
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--color-cta-foreground)] sm:text-5xl">
              Ready to grow your
              <span className="text-[var(--color-primary)]">
                {" "}
                e-commerce business?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-cta-muted)] sm:text-lg">
              Let VJ E-Commerce handle the marketplace operations while you
              focus on building and growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/919897310047"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3.5 font-semibold text-[var(--color-primary-foreground)] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

              <a
                href="tel:+919897310047"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-cta-border)] bg-transparent px-6 py-3.5 font-semibold text-[var(--color-cta-foreground)] transition-all hover:bg-[var(--color-cta-foreground)]/10"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {contactDetails.map((contact) => {
            const Icon = contact.icon;
            const isExternalLink = contact.href.startsWith("http");

            return (
              <a
                key={contact.title}
                href={contact.href}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noreferrer" : undefined}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-primary-foreground)]">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-muted)]">
                      {contact.title}
                    </p>

                    <p className="mt-1 truncate text-base font-bold text-[var(--color-foreground)]">
                      {contact.value}
                    </p>

                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {contact.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
          <div>
            <p className="text-sm font-semibold text-[var(--color-foreground)]">
              Follow VJ E-Commerce
            </p>

            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Stay connected with us on social media.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com/vj.ecommerce"
              target="_blank"
              rel="noreferrer"
              aria-label="VJ E-Commerce on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.75"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/19Upxu5Urz"
              target="_blank"
              rel="noreferrer"
              aria-label="VJ E-Commerce on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <span className="text-sm font-bold">
                f
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;