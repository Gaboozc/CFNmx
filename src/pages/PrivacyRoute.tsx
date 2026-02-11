import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PrivacyPage } from "../components/PrivacyPage";

export function PrivacyRoute() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <PrivacyPage onBack={() => navigate("/")} />
      </main>
      <Footer />
    </div>
  );
}
