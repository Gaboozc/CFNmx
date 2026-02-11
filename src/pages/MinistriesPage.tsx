import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MinistriesOrgSection } from "../components/MinistriesOrgSection";

export function MinistriesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 space-y-16 md:space-y-20">
        <MinistriesOrgSection />
      </main>
      <Footer />
    </div>
  );
}
