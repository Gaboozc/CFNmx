import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScheduleHero } from "../components/ScheduleHero";
import { SpecialEventsSection } from "../components/SpecialEventsSection";

export function EventsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 space-y-16 md:space-y-20">
        <ScheduleHero />
        <SpecialEventsSection />
      </main>
      <Footer />
    </div>
  );
}
