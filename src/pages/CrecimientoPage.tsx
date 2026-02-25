import { Navbar } from "../components/Navbar";
import { DondeTeCuentrasSection } from "../components/DondeTeCuentrasSection";
import { MinistriesOrgSection } from "../components/MinistriesOrgSection";
import { Footer } from "../components/Footer";

export function CrecimientoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-16 md:space-y-20">
        <div className="pt-24">
          <DondeTeCuentrasSection />
        </div>
        <MinistriesOrgSection />
      </main>
      <Footer />
    </div>
  );
}
