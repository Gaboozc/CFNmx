import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { WelcomeSection } from "../components/WelcomeSection";
import { AboutVisionSection } from "../components/AboutVisionSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-16 md:space-y-20">
        <HeroSection />
        <WelcomeSection />
        <AboutVisionSection />
      </main>
      <Footer />
    </div>
  );
}
