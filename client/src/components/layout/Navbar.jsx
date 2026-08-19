import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "../common/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="flex items-center gap-2"
        >
          <div className="flex items-center text-2xl font-extrabold tracking-tight">
            <span className="text-[var(--color-foreground)]">V</span>
            <span className="text-[var(--color-primary)]">J</span>
            <span className="ml-1 text-[var(--color-foreground)]">
              ECOMMERCE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm select-none font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary)]"
            >
              {link.name}
            </a>
          ))}

          <ThemeToggle />

          <a
            href="tel:+919897310047"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary-foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-md"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface-hover)] md:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-background)] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-[var(--color-border)] py-4 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary)]"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-[var(--color-muted)]">
                Appearance
              </span>

              <ThemeToggle />
            </div>

            <a
              href="tel:+919897310047"
              onClick={handleLinkClick}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 font-semibold text-[var(--color-primary-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <Phone size={17} />
              Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;