import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ConnectSection } from "../components/ConnectSection";

export function ConnectPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 space-y-16 md:space-y-20">
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
}
