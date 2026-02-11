import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AnnouncementsPage } from "../components/AnnouncementsPage";

export function AnnouncementsRoute() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <AnnouncementsPage onBack={() => navigate("/")} />
      </main>
      <Footer />
    </div>
  );
}
