import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShoppingCart,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

import logo from "../../assets/logo.png";

const benefits = [
  "Marketplace Account Management",
  "Product Listing & Catalog Management",
  "Advertising & Business Growth",
];

function Hero() {
  return (
    <section
      id="home"
      className=" scroll-mt-18 relative overflow-hidden bg-[var(--color-background)]"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* Left Content */}
        <div className="max-w-2xl">
          {/* Since */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />

            <span className="text-sm font-semibold tracking-wide text-[var(--color-foreground)]">
              Trusted E-Commerce Partner Since 2023
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-[var(--color-foreground)] sm:text-6xl lg:text-7xl">
            We Handle.
            <br />
            <span className="text-[var(--color-primary)]">You Grow.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
            Your trusted partner for managing, growing and scaling your
            e-commerce business across leading marketplaces.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 text-sm font-medium text-[var(--color-foreground)] sm:text-base"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-[var(--color-primary)]"
                />

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3.5 font-semibold text-[var(--color-primary-foreground)] shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-xl"
            >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/919897310047"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3.5 font-semibold text-[var(--color-foreground)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-surface-hover)]"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex items-center justify-center">
          {/* Main visual container */}
          <div className="relative w-full max-w-lg">
            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-2xl shadow-slate-900/10 sm:p-10">
              {/* Brand */}
              <div className="flex justify-center">
                <img
                  src={logo}
                  alt="VJ E-Commerce"
                  className="h-auto max-h-52 w-full object-contain"
                />
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-[var(--color-border)]" />

              {/* Visual Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-center">
                  <ShoppingCart
                    size={24}
                    className="mx-auto text-[var(--color-primary)]"
                  />

                  <p className="mt-2 text-xs font-semibold text-[var(--color-muted)]">
                    MARKETPLACES
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-center">
                  <TrendingUp
                    size={24}
                    className="mx-auto text-[var(--color-primary)]"
                  />

                  <p className="mt-2 text-xs font-semibold text-[var(--color-muted)]">
                    GROWTH
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-center">
                  <ShieldCheck
                    size={24}
                    className="mx-auto text-[var(--color-primary)]"
                  />

                  <p className="mt-2 text-xs font-semibold text-[var(--color-muted)]">
                    TRUST
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            {/* <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-4 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                  <TrendingUp
                    size={20}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <p className="text-xs text-[var(--color-muted)]">
                    Focus on
                  </p>

                  <p className="text-sm font-bold text-[var(--color-foreground)]">
                    Business Growth
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;