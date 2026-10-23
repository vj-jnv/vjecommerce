import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const complianceServices = [
  {
    title: "GST Filing",
    description: "Support for managing your GST filing requirements.",
    icon: ReceiptText,
    slug: "gst-filing",
  },
  {
    title: "ITR Filing",
    description: "Assistance with your income tax return filing needs.",
    icon: FileCheck2,
    slug: "itr-filing",
  },
  {
    title: "Compliance Support",
    description: "Stay organized and on top of important compliance tasks.",
    icon: ShieldCheck,
    slug: "gst-filing",
  },
];

function ComplianceSection() {
  return (
    <section className="bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="grid items-center lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-bold text-[var(--color-primary)]">
                <ShieldCheck size={17} />
                Business Compliance
              </div>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
                GST & ITR
                <br />
                <span className="text-[var(--color-primary)]">
                  Filing Services
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                Stay compliant and focus on your business while we help you
                manage essential GST and income tax filing requirements.
              </p>

              {/* Services */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {complianceServices.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.title}
                      to={`/services/${service.slug}`}
                      className="group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-transform group-hover:scale-110">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-4 text-sm font-bold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary)]">
                        {service.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                        {service.description}
                      </p>
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-[var(--color-primary-foreground)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
              >
                Get Compliance Support
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Right Visual */}
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[var(--color-cta-background)] p-8">
              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[var(--color-primary)]/20" />

              <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-[var(--color-primary)]/10" />

              {/* Main Compliance Card */}
              <div className="relative w-full max-w-sm rounded-3xl border border-[var(--color-cta-border)] bg-[var(--color-background)] p-7 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                      Compliance
                    </p>

                    <p className="mt-1 text-2xl font-black text-[var(--color-foreground)]">
                      Stay Worry-Free
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                    <CheckCircle2 size={26} />
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  <Link
                    to="/services/gst-filing"
                    className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-[var(--color-primary)]/40 hover:shadow-md"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <ReceiptText size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[var(--color-foreground)]">
                        GST
                      </p>

                      <p className="text-xs text-[var(--color-muted)]">
                        Filing Support
                      </p>
                    </div>

                    <CheckCircle2
                      size={18}
                      className="ml-auto text-[var(--color-primary)]"
                    />
                  </Link>

                  <Link
                    to="/services/itr-filing"
                    className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-[var(--color-primary)]/40 hover:shadow-md"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <FileCheck2 size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[var(--color-foreground)]">
                        ITR
                      </p>

                      <p className="text-xs text-[var(--color-muted)]">
                        Filing Support
                      </p>
                    </div>

                    <CheckCircle2
                      size={18}
                      className="ml-auto text-[var(--color-primary)]"
                    />
                  </Link>
                </div>

                <div className="mt-6 rounded-xl bg-[var(--color-primary)]/10 px-4 py-3 text-center">
                  <p className="text-sm font-bold text-[var(--color-primary)]">
                    Stay Compliant. Stay Worry-Free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplianceSection;
