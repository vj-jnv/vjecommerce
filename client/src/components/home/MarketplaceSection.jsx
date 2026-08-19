import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

import amazonLogo from "../../assets/marketplaces/amazon.svg";
import amazonDarkLogo from "../../assets/marketplaces/amazon-dark.svg";

import flipkartLogo from "../../assets/marketplaces/flipkart.svg";
import flipkartDarkLogo from "../../assets/marketplaces/flipkart.svg";

import meeshoLogo from "../../assets/marketplaces/meesho.svg";
import meeshoDarkLogo from "../../assets/marketplaces/meesho-dark.svg";

const marketplaces = [
  {
    name: "Amazon",
    description:
      "Manage your Amazon presence, listings and marketplace operations.",
    lightLogo: amazonLogo,
    darkLogo: amazonDarkLogo,
  },
  {
    name: "Flipkart",
    description:
      "Streamline your Flipkart operations and build a stronger marketplace presence.",
    lightLogo: flipkartLogo,
    darkLogo: flipkartDarkLogo,
  },
  {
    name: "Meesho",
    description:
      "Manage your Meesho business and focus on reaching more customers.",
    lightLogo: meeshoLogo,
    darkLogo: meeshoDarkLogo,
  },
];

function MarketplaceSection() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Marketplace Expertise
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
            Sell across leading marketplaces
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Manage your e-commerce presence across multiple marketplaces with
            one trusted growth partner.
          </p>
        </div>

        {/* Marketplace Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {marketplaces.map((marketplace) => (
            <article
              key={marketplace.name}
              className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-xl hover:shadow-slate-900/5"
            >
              {/* Brand Logo */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                <img
                  src={isDark ? marketplace.darkLogo : marketplace.lightLogo}
                  alt={`${marketplace.name} logo`}
                  className="h-10 w-auto max-w-[56px] object-contain"
                />
              </div>

              {/* Marketplace Name */}
              <h3 className="mt-6 text-2xl font-bold text-[var(--color-foreground)]">
                {marketplace.name}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[var(--color-muted)]">
                {marketplace.description}
              </p>

              {/* Service */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                <CheckCircle2 size={17} />
                Account Management
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[var(--color-cta-border)] bg-[var(--color-cta-background)] px-6 py-7 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <p className="text-lg font-bold text-[var(--color-cta-foreground)]">
              One partner. Multiple marketplaces.
            </p>

            <p className="mt-1 text-sm text-[var(--color-cta-muted)]">
              We handle the operations while you focus on growing your
              business.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-primary-foreground)] transition-all hover:bg-[var(--color-primary-hover)]"
          >
            Get Started
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MarketplaceSection;