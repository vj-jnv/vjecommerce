import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
  Store,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Testimonial Images
import t1 from "../../assets/testimonials/testimonial-1.jpeg";
import t2 from "../../assets/testimonials/testimonial-2.jpeg";
import t3 from "../../assets/testimonials/testimonial-3.jpeg";
import t4 from "../../assets/testimonials/testimonial-4.jpeg";
import t5 from "../../assets/testimonials/testimonial-5.jpeg";
import t6 from "../../assets/testimonials/testimonial-6.jpeg";
import t7 from "../../assets/testimonials/testimonial-7.jpeg";
import t8 from "../../assets/testimonials/testimonial-8.jpeg";

const testimonials = [
  {
    name: "AKhil",
    // role: "Founde",
    image: t1,
    marketplace: "Amazon & Flipkart",
    result: "+280% Sales Growth",
    rating: 5,
    quote:
      "VJ E-Commerce transformed our traditional glassware manufacturing business into a thriving online brand. They handled complete cataloging, brand registry, and PPC campaigns seamlessly. Monthly orders grew from 200 to over 3,500 within 6 months!",
  },
  {
    name: "Arpit jain",
    // role: "Director, Royal Ethnic & Glass Crafts",
    image: t2,
    marketplace: "Flipkart & Meesho",
    result: "4.5x Order Volume",
    rating: 5,
    quote:
      "Managing multiple marketplaces was overwhelming until we partnered with Vijay and his team. From catalog optimization to inventory planning and lightning deal approvals, their operations support has been outstanding. Truly dependable!",
  },
  {
    name: "Aryan kumar",
    // role: "Co-Founder, Kushwaha Handlooms & Decor",
    image: t3,
    marketplace: "Amazon India",
    result: "ACoS cut from 38% to 14%",
    rating: 5,
    quote:
      "Their advertising strategy is top-notch. Our ad spend was bleeding money before VJ E-Commerce took over our Sponsored Ads. They optimized keywords, eliminated wasted spend, and doubled our net profit margin. Best investment for our business.",
  },
  {
    name: "Atul Kushwaha",
    // role: "Managing Director, Zenith Footwear",
    image: t4,
    marketplace: "Flipkart Super Seller",
    result: "3.8x ROI on Campaigns",
    rating: 5,
    quote:
      "They don't just manage accounts; they treat your brand like their own. Dedicated account managers, weekly review calls, and lightning-fast support. Highly recommended for any serious e-commerce seller.",
  },
  {
    name: "Kanchan",
    // role: "Founder, Trendify Home & Kitchen",
    image: t5,
    marketplace: "Multi-Channel Seller",
    result: "₹18L+ Monthly GMV",
    rating: 5,
    quote:
      "From scratch to a top-ranked seller badge! Their daily reporting, transparent communication, and proactive inventory forecasting helped us avoid stockouts during major festival sales like Big Billion Days.",
  },
  {
    name: "Laxmikhant yadav",
    // role: "Owner, Crystal Art Firozabad",
    image: t6,
    marketplace: "Amazon India & Global",
    result: "100% Account Health",
    rating: 5,
    quote:
      "The legal and compliance guidance solved all our GST filing and marketplace policy headaches. Whenever there's an account health alert or dispatch query, their team resolves it immediately with zero downtime.",
  },
  {
    name: "Nitin jha",
    // role: "Proprietor, Agarwal B2B Apparels",
    image: t7,
    marketplace: "Meesho Top Supplier",
    result: "60% Lower Return (RTO)",
    rating: 5,
    quote:
      "Returns on Meesho were destroying our profits. VJ E-Commerce restructured our product sizes, packaging guidelines, and listings, which drastically reduced our RTO rate and boosted profit margins.",
  },
  {
    name: "Nitin kushwaha",
    // role: "CEO, Modern Living Essentials",
    image: t8,
    marketplace: "Amazon FBA Specialist",
    result: "₹35L+ Annual Revenue",
    rating: 5,
    quote:
      "Their team took our local manufacturing catalog and launched it across India with high-converting A+ content. We are now in Amazon's top 10 sellers in our home decor category!",
  },
];

const highlights = [
  { value: "150+", label: "Brands Scaled" },
  { value: "₹25Cr+", label: "Marketplace GMV" },
  { value: "98.4%", label: "Client Retention" },
  { value: "4.9 / 5", label: "Average Seller Rating" },
];

function TestimonialsSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to update arrows
  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Slide left or right
  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollAmount = container.clientWidth * 0.85;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-18 border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top Header with Heading & Slider Arrow Controls */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Client Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
              Trusted by sellers who want to{" "}
              <span className="text-[var(--color-primary)]">grow faster</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              Explore how local manufacturers, brand owners, and marketplace
              sellers scaled their business with VJ E-Commerce.
            </p>
          </div>

          {/* Left and Right Navigation Arrows */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous testimonials"
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] shadow-sm transition-all duration-200 ${
                canScrollLeft
                  ? "hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:shadow-md cursor-pointer active:scale-95"
                  : "opacity-40 cursor-not-allowed"
              }`}
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next testimonials"
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] shadow-sm transition-all duration-200 ${
                canScrollRight
                  ? "hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:shadow-md cursor-pointer active:scale-95"
                  : "opacity-40 cursor-not-allowed"
              }`}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm sm:grid-cols-4 sm:p-8">
          {highlights.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-[var(--color-primary)] sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Single-Line Horizontal Carousel */}
        <div className="relative mt-12">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          >
            {testimonials.map((item, index) => (
              <article
                key={index}
                className="group relative flex w-[310px] shrink-0 flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-xl sm:w-[360px] snap-start"
              >
                {/* Card Top Image with overlay badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 sm:h-64">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for photo contrast */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Result Badge */}
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white shadow-md">
                    <TrendingUp size={13} />
                    {item.result}
                  </div>

                  {/* Marketplace Tag */}
                  <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {item.marketplace}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Stars & Quote Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                          />
                        ))}
                      </div>

                      <Quote
                        size={22}
                        className="text-[var(--color-primary)]/30"
                      />
                    </div>

                    {/* Testimonial Quote */}
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-foreground)] line-clamp-4">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Client Info Footer */}
                  <div className="mt-6 border-t border-[var(--color-border)] pt-4">
                    <div className="flex items-center gap-1.5">
                      <h3 className="truncate font-bold text-[var(--color-foreground)]">
                        {item.name}
                      </h3>
                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-[var(--color-primary)]"
                      />
                    </div>

                    <div className="mt-1 flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
                      <Store size={13} className="shrink-0" />
                      <span className="truncate">{item.role}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Swipe Guidance Hint */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-[var(--color-muted)] sm:hidden">
            <span>Swipe horizontally to view more testimonials</span>
            <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
