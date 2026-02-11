import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ResourcesSection } from "../components/ResourcesSection";

export function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 space-y-16 md:space-y-20">
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
}
