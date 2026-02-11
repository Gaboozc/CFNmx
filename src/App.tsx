import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { MinistriesPage } from "./pages/MinistriesPage";
import { EventsPage } from "./pages/EventsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ConnectPage } from "./pages/ConnectPage";
import { AnnouncementsRoute } from "./pages/AnnouncementsRoute";
import { PrivacyRoute } from "./pages/PrivacyRoute";
import { WhatsAppButton } from "./components/WhatsAppButton";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ministerios" element={<MinistriesPage />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/recursos" element={<ResourcesPage />} />
        <Route path="/conecta" element={<ConnectPage />} />
        <Route path="/anuncios" element={<AnnouncementsRoute />} />
        <Route path="/aviso-privacidad" element={<PrivacyRoute />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}