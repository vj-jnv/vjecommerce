import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  HelpCircle,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import Footer from "../components/layout/Footer";

function ServiceDetail() {
  const { slug } = useParams();

  const service = servicesData.find((item) => item.slug === slug);

  // If service not found, show clean fallback
  if (!service) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-4xl font-extrabold text-[var(--color-foreground)]">
          Service Not Found
        </h1>
        <p className="mt-3 text-base text-[var(--color-muted)]">
          The requested service article could not be found or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--color-primary-hover)]"
        >
          <ArrowLeft size={18} />
          Return to Home
        </Link>
      </div>
    );
  }

  // Related other services
  const otherServices = servicesData.filter((item) => item.slug !== slug);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Article Header & Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)] py-14 sm:py-20">
        {/* Decorative background glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[var(--color-primary)]/5 blur-2xl" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-all hover:-translate-x-1"
            >
              <ArrowLeft size={16} />
              Back to All Services
            </Link>

            <div className="flex items-center gap-3 text-xs font-medium text-[var(--color-muted)]">
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {service.readTime}
              </span>
              <span>•</span>
              <span>{service.lastUpdated}</span>
            </div>
          </div>

          {/* Badge & Title */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
              <Sparkles size={14} />
              {service.badge}
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-5xl">
              {service.title}
            </h1>

            <p className="mt-5 text-lg font-medium leading-relaxed text-[var(--color-muted)] sm:text-xl">
              {service.tagline}
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 shadow-sm transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="mt-3 text-sm font-bold text-[var(--color-foreground)]">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Article Content & Consultation Sidebar */}
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          {/* Main Article Column */}
          <article className="space-y-12">
            {/* Overview Section */}
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                Service Overview
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {service.overview}
              </p>
            </div>

            {/* In-depth Article Sections */}
            <div className="space-y-10">
              {service.articleSections.map((sec, idx) => (
                <section
                  key={idx}
                  className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-7 sm:p-8"
                >
                  <h3 className="text-xl font-bold text-[var(--color-foreground)]">
                    {sec.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    {sec.content}
                  </p>
                </section>
              ))}
            </div>

            {/* Deliverables Checklist */}
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                  <BarChart3 size={20} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-foreground)]">
                  What You Get Every Month
                </h3>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-3.5"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                    />
                    <span className="text-sm font-medium text-[var(--color-foreground)]">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <HelpCircle size={24} className="text-[var(--color-primary)]" />
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)]">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="mt-6 space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                    >
                      <h4 className="font-bold text-[var(--color-foreground)]">
                        {faq.question}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sticky Consultation & Contact Card */}
          <aside className="space-y-6">
            <div className="sticky top-28 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-cta-background)] p-6 shadow-lg sm:p-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <Store size={16} />
                <span>Talk to Consultant</span>
              </div>

              <h3 className="mt-3 text-xl font-extrabold text-[var(--color-cta-foreground)]">
                Ready to scale on {service.platform.split(" ")[0]}?
              </h3>

              <p className="mt-2 text-xs leading-5 text-[var(--color-cta-muted)]">
                Get a free account analysis from our marketplace operations team
                in Firozabad. No obligation, 100% actionable guidance.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={`https://wa.me/919897310047?text=Hi%20VJ%20Ecommerce%20team,%20I%20am%20interested%20in%20${encodeURIComponent(
                    service.title
                  )}.%20Please%20guide%20me.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#20ba59]"
                >
                  <MessageSquare size={17} />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+919897310047"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[var(--color-primary-hover)]"
                >
                  <Phone size={17} />
                  Call: +91-9897310047
                </a>
              </div>

              {/* Office Details */}
              <div className="mt-6 border-t border-[var(--color-cta-border)] pt-4 text-xs text-[var(--color-cta-muted)]">
                <p className="font-semibold text-[var(--color-cta-foreground)]">
                  VJ E-Commerce Headquarters
                </p>
                <p className="mt-1">
                  Kushwaha Nagar, Kotla Road, Firozabad (UP) - 283203
                </p>
                <p className="mt-2 text-[var(--color-primary)] font-medium">
                  Mon – Sat: 9:30 AM to 7:00 PM
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Explore Other Services Section */}
        <div className="mt-20 border-t border-[var(--color-border)] pt-14">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                More Services
              </p>
              <h3 className="mt-1 text-2xl font-extrabold text-[var(--color-foreground)]">
                Explore Other Marketplace Services
              </h3>
            </div>
            <Link
              to="/#services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    {item.badge}
                  </span>
                  <h4 className="mt-2 text-lg font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[var(--color-muted)] line-clamp-2">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[var(--color-primary)]">
                  <span>Read Article</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ServiceDetail;
