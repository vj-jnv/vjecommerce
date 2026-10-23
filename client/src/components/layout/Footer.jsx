import {
    MapPin,
    Phone,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const getHref = (hash) => {
        return isHome ? hash : `/${hash}`;
    };

    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">

                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center text-2xl font-extrabold tracking-tight"
                        >
                            <span className="text-[var(--color-foreground)]">
                                V
                            </span>

                            <span className="text-[var(--color-primary)]">
                                J
                            </span>

                            <span className="ml-1 text-[var(--color-foreground)]">
                                ECOMMERCE
                            </span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--color-muted)]">
                            Your trusted e-commerce growth partner for marketplace
                            management, operations and business scaling.
                        </p>

                        <p className="mt-5 text-sm font-semibold text-[var(--color-primary)]">
                            We Handle. You Grow.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                            Quick Links
                        </h3>

                        <div className="mt-4 space-y-3">
                            <a
                                href={getHref("#home")}
                                className="block text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                            >
                                Home
                            </a>

                            <a
                                href={getHref("#why-us")}
                                className="block text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                            >
                                Why Us
                            </a>

                            <a
                                href={getHref("#services")}
                                className="block text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                            >
                                Services
                            </a>

                            <a
                                href={getHref("#team")}
                                className="block text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                            >
                                Team
                            </a>

                            <a
                                href={getHref("#contact")}
                                className="block text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                            >
                                Contact
                            </a>

                            <a
                                href={getHref("#testimonials")}
                                className="block text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                            >
                                Testimonials
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                            Contact
                        </h3>

                        <div className="mt-4 space-y-4">

                            {/* Primary Phone */}
                            <a
                                href="tel:+919897310047"
                                className="flex items-start gap-3 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                            >
                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    9897310047
                                </span>
                            </a>

                            {/* Secondary Phone */}
                            <a
                                href="tel:+919568590653"
                                className="flex items-start gap-3 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                            >
                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    9568590653
                                </span>
                            </a>

                            {/* Location */}
                            <a
                                href="https://maps.app.goo.gl/jecpZoCRD562u1Ay7"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-start gap-3 text-sm leading-5 text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                            >
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    Kushwaha Nagar,
                                    <br />
                                    Kotla Road,
                                    <br />
                                    Firozabad - 283203
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row">

                    <p className="text-xs text-[var(--color-muted)]">
                        © {new Date().getFullYear()} VJ E-Commerce. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/vj.ecommerce"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="VJ E-Commerce on Instagram"
                            className="text-[var(--color-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--color-primary)]"
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
                            className="text-[var(--color-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--color-primary)]"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-[18px] w-[18px]"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v5h4v-5h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
