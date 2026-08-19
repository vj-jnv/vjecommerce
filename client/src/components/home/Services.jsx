import {
  BarChart3,
  BookOpenCheck,
  Megaphone,
  Package,
  RotateCcw,
  ShoppingBag,
  Store,
  TrendingUp,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Amazon Account Management",
    description:
      "Professional management of your Amazon marketplace operations, helping you stay organized and focused on growth.",
    icon: ShoppingBag,
  },
  {
    title: "Flipkart Account Management",
    description:
      "Manage your Flipkart seller operations, product presence and marketplace activities with expert support.",
    icon: Store,
  },
  {
    title: "Meesho Account Management",
    description:
      "Build and manage your Meesho presence with streamlined operations and growth-focused marketplace support.",
    icon: Package,
  },
  {
    title: "Listing & Catalog Management",
    description:
      "Create, optimize and maintain product listings and catalogs for a better customer experience and marketplace visibility.",
    icon: BookOpenCheck,
  },
  {
    title: "Advertisement Management",
    description:
      "Manage marketplace advertising campaigns with a focus on visibility, performance and sustainable business growth.",
    icon: Megaphone,
  },
  {
    title: "Claims Management",
    description:
      "Get assistance with marketplace claims and operational issues so you can spend more time growing your business.",
    icon: RotateCcw,
  },

];

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-18 bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            One trusted partner for managing your marketplace operations,
            improving your presence and growing your e-commerce business.
          </p>
        </div>

        {/* Service grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              featured={service.featured}
            />
          ))}
        </div>

        {/* Supporting statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
              <BarChart3 size={24} />
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-foreground)]">
                Ready to grow your marketplace business?
              </h3>

              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Let our team handle the operations while you focus on growth.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-primary-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;