import Hero from "../components/home/Hero";
import TrustSection from "../components/home/TrustSection";
import Services from "../components/home/Services";
import MarketplaceSection from "../components/home/MarketplaceSection";
import ComplianceSection from "../components/home/ComplianceSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/layout/Footer";
import TeamSection from "../components/home/TeamSection";

function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <Services />
      <MarketplaceSection />
      <ComplianceSection/>
      <TeamSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}

export default Home;