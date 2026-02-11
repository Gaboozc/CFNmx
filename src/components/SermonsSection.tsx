import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Calendar, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { fetchLiveStream, fetchRecentVideos, formatDate, Video } from "../services/youtube";

export function SermonsSection() {
  const [liveVideo, setLiveVideo] = useState<Video | null>(null);
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const [featuredVideo, setFeaturedVideo] = useState<Video | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      const live = await fetchLiveStream();
      setLiveVideo(live);

      // Fetch 7 videos to ensure we have enough for the grid (1 featured + 6 grid)
      const recent = await fetchRecentVideos(7);
      setRecentVideos(recent);

      // If no live video, use the first recent video as featured
      if (!live && recent.length > 0) {
        setFeaturedVideo(recent[0]);
      }
    };

    loadVideos();
  }, []);

  const mainVideo = liveVideo || featuredVideo;
  const gridVideos = liveVideo ? recentVideos.slice(0, 6) : recentVideos.slice(1, 7);

  return (
    <section id="sermons" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full mb-4">
            Predicaciones
          </span>
          <h2 className="mb-6 text-gray-900">Palabra que Transforma</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mensajes que edifican, inspiran y desafían. Encuentra enseñanza bíblica
            relevante para tu vida diaria.
          </p>
        </motion.div>

        {/* Main Banner (Live or Featured) */}
        {mainVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer"
          >
            <a
              href={`https://www.youtube.com/watch?v=${mainVideo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-[500px]"
            >
              <ImageWithFallback
                src={mainVideo.thumbnail}
                alt={mainVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Live Badge */}
              {mainVideo.isLive && (
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-red-600 text-white rounded-full flex items-center gap-2 animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    En Vivo Ahora
                  </span>
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors cursor-pointer"
                >
                  <Play size={40} fill="white" className="text-white ml-1" />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
                    {mainVideo.isLive ? 'Transmitiendo' : 'Destacado'}
                  </span>
                  {!mainVideo.isLive && (
                    <span className="flex items-center gap-2 text-sm">
                      <TrendingUp size={16} />
                      Más reciente
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-2xl md:text-4xl font-bold">{mainVideo.title}</h3>
                <p className="text-gray-200 mb-4 line-clamp-1">{mainVideo.description}</p>
                <div className="flex flex-wrap gap-4 text-sm opacity-90">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {formatDate(mainVideo.publishedAt)}
                  </span>
                  <span>{mainVideo.channelTitle}</span>
                </div>
              </div>
            </a>
          </motion.div>
        )}

        {/* Sermons Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {gridVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={24} fill="white" className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-gray-900 font-bold line-clamp-2">{video.title}</h4>
                  <p className="text-sm text-[#1F6FD8] mb-3">{video.channelTitle}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(video.publishedAt)}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={`https://www.youtube.com/channel/${import.meta.env.VITE_YOUTUBE_CHANNEL_ID || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-[#1F6FD8] text-[#1F6FD8] rounded-full hover:bg-[#1F6FD8] hover:text-white transition-all duration-300"
          >
            Ver todas las predicaciones
          </a>
        </motion.div>
      </div>
    </section>
  );
}