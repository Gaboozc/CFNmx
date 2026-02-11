import { motion } from "motion/react";
import { Youtube, Music } from "lucide-react";

const youtubeEmbed = `https://www.youtube.com/embed/live_stream?channel=${import.meta.env.VITE_YOUTUBE_CHANNEL_ID || ""}`;
const spotifyEmbed = "https://open.spotify.com/embed/artist/2mg5Jr8NzNirotZZH2B4lz";

export function ResourcesSection() {
  return (
    <section className="py-24 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full mb-4">
            Recursos
          </span>
          <h2 className="mb-6 text-gray-900">Contenido para tu Semana</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accede a predicaciones, musica y contenidos que fortalecen tu fe en cualquier momento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(90deg, #1F6FD8, #0E3465)" }}
              >
                <Youtube className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-gray-900">YouTube</h3>
                <p className="text-sm text-gray-600">Transmisiones y predicaciones recientes</p>
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={youtubeEmbed}
                title="YouTube CFN Coacalco"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(90deg, #1F6FD8, #0E3465)" }}
              >
                <Music className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-gray-900">Spotify</h3>
                <p className="text-sm text-gray-600">Playlist recomendada para tu tiempo devocional</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-[420px]"
                src={spotifyEmbed}
                title="Spotify CFN Coacalco"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
