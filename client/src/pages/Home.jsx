import Hero from "../components/home/Hero";
import TrustSection from "../components/home/TrustSection";
import Services from "../components/home/Services";
import MarketplaceSection from "../components/home/MarketplaceSection";
import TeamSection from "../components/home/TeamSection";
import ContactSection from "../components/home/ContactSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FeedbackSection from "../components/home/FeedbackSection";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <Services />
      <MarketplaceSection />
      <TeamSection />
      <ContactSection />
      <TestimonialsSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}

export default Home;
