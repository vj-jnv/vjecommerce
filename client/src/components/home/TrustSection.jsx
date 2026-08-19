import {
  Headphones,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

const trustPoints = [
  {
    title: "Expert Team",
    description:
      "Experienced professionals dedicated to managing your e-commerce operations.",
    icon: Target,
  },
  {
    title: "Maximum Growth",
    description:
      "Focused strategies designed to improve visibility, sales and business growth.",
    icon: TrendingUp,
  },
  {
    title: "Reliable & Transparent",
    description:
      "Clear communication, honest reporting and dependable marketplace support.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Support",
    description:
      "Get the assistance you need when you need it, with a team that stays involved.",
    icon: Headphones,
  },
];

function TrustSection() {
  return (
    <section
      id="why-us"
      className="scroll-mt-18 border-y border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
            A partner focused on your growth
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            We combine marketplace expertise, reliable support and
            growth-focused strategies to help your business move forward.
          </p>
        </div>

        {/* Trust cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-primary-foreground)]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[var(--color-foreground)]">
                  {point.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;