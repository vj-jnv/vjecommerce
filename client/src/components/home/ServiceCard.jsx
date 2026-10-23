import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceCard({
  icon: Icon,
  title,
  description,
  slug,
  featured = false,
}) {
  return (
    <Link
      to={`/services/${slug}`}
      className={`group relative block overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        featured
          ? "border-[var(--color-primary)]/30 bg-[var(--color-primary)]"
          : "border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-primary)]/60"
      }`}
    >
      {/* Decorative circle */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full transition-transform duration-500 group-hover:scale-150 ${
          featured ? "bg-white/10" : "bg-[var(--color-primary)]/5"
        }`}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
            featured
              ? "bg-white/15 text-white"
              : "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
          }`}
        >
          <Icon size={24} />
        </div>

        {/* Content */}
        <h3
          className={`mt-6 text-xl font-bold transition-colors group-hover:text-[var(--color-primary)] ${
            featured ? "text-white group-hover:text-white" : "text-[var(--color-foreground)]"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-3 text-sm leading-6 ${
            featured ? "text-white/80" : "text-[var(--color-muted)]"
          }`}
        >
          {description}
        </p>

        {/* Read more indicator */}
        <div
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all ${
            featured
              ? "text-white group-hover:gap-3"
              : "text-[var(--color-primary)] group-hover:gap-3"
          }`}
        >
          <span>Read Details</span>
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
