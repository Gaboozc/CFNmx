import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, MapPin, Users, ArrowLeft, Bell, ChevronRight, ChevronLeft, CalendarPlus, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Announcement {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: "Evento" | "Servicio" | "Actividad" | "Importante";
  image?: string;
  urgent?: boolean;
}

interface StorySlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta?: string;
}

// --- Datos (Stories y Announcements) se mantienen igual ---

const stories: StorySlide[] = [
  {
    "id": 1,
    "image": "img/eventos/roshv.jpg",
    "title": "Oración Rosh",
    "subtitle": "Cada Martes | 6:00 AM |CFN Coacalco"
  },
  {
    "id": 2,
    "image": "img/eventos/miercolesv.jpg",
    "title": "Reunión de Mitad de Semana",
    "subtitle": "Cada Miércoles | 7:00 PM"
  },
  {
    "id": 3,
    "image": "img/eventos/damasv.jpg",
    "title": "Mujeres en Unidad",
    "subtitle": "Cada Jueves | 10:00 AM |CFN Coacalco"
  },
  {
    "id": 4,
    "image": "img/eventos/gfamiliaresv.jpg",
    "title": "Grupos Familiares",
    "subtitle": "Cada Jueves | 7:00 PM"
  },
  {
    "id": 5,
    "image": "img/eventos/viernesoracionv.jpg",
    "title": "Reunión de Oración",
    "subtitle": "Cada Viernes | 7:00 PM"
  },
  {
    "id": 6,
    "image": "img/eventos/jovenesv.jpg",
    "title": "Reunión de Jóvenes",
    "subtitle": "Todos los Sábados | 5:00 PM"
  },
  {
    "id": 7,
    "image": "img/eventos/matrimoniosv.jpg",
    "title": "Reunión de Matrimonios",
    "subtitle": "Sábados cada 15 días | 7:00 PM"
  },
  {
    "id": 8,
    "image": "img/eventos/reuniondomingov.jpg",
    "title": "Reuniones Dominicales",
    "subtitle": "Domingo | 8:00 AM, 10:00 AM y 12:30 PM"
  }
];

const announcements: Announcement[] = [

  {
    id: 3,
    title: "Presentación de Niños",
    date: "11 de Enero, 2026",
    time: "2do Culto",
    location: "CFN Coacalco",
    description: "Ceremonia donde los padres presentan a sus bebés delante de Dios, comprometiéndose a guiarlos en Sus caminos con amor y responsabilidad espiritual.",
    category: "Presentación de Niños",
    urgent: false,
    image: "img/eventos/presentacion_ninos.jpg"
  },
  {
    id: 4,
    title: "Pregón profético",
    date: "11 de Enero, 2026",
    time: "6:00 PM",
    location: "CFN Coacalco",
    description: "Un tiempo especial de búsqueda profunda en adoración, oración y ministración, dedicado completamente a la presencia de Dios.",
    category: "Profético",
    urgent: false,
    image: "img/eventos/altar_adoracion.jpg"
  },
  {
    id: 5,
    title: "Ayuno Congregacional (21 días)",
    date: "1 de Marzo, 2026",
    time: "Todo el día",
    location: "CFN Coacalco",
    description: "Inicio del ayuno congregacional de 21 días, un tiempo de consagración, búsqueda espiritual y renovación para toda la iglesia.",
    category: "Ayuno",
    urgent: false,
    image: "img/eventos/ayuno_marzo.jpg"
  },
  {
    id: 6,
    title: "Campaña de Sanidades y Milagros",
    date: "19, 20 y 21 de Marzo, 2026",
    time: "Hora por definir",
    location: "CFN Coacalco",
    description: "Tres días donde veremos el mover sobrenatural de Dios con sanidades, milagros y palabra fresca. Evento abierto para toda la comunidad.",
    category: "Campaña",
    urgent: false,
    image: "img/eventos/campana_marzo.jpg"
  },
  {
    id: 7,
    title: "Ayuno Congregacional (21 días)",
    date: "5 de Julio, 2026",
    time: "Todo el día",
    location: "CFN Coacalco",
    description: "Tiempo de ayuno y oración donde como iglesia buscamos dirección, fortaleza y crecimiento espiritual.",
    category: "Ayuno",
    urgent: false,
    image: "img/eventos/ayuno_julio.jpg"
  },
  {
    id: 8,
    title: "Campaña de Sanidades y Milagros",
    date: "23, 24 y 25 de Julio, 2026",
    time: "Hora por definir",
    location: "CFN Coacalco",
    description: "Tres días enfocados en experimentar el poder de Dios mediante milagros, sanidades y ministración espiritual.",
    category: "Campaña",
    urgent: false,
    image: "img/eventos/campana_julio.jpg"
  },
  {
    id: 9,
    title: "Congreso de Adoradores",
    date: "6, 7 y 8 de Agosto, 2026",
    time: "Todo el día",
    location: "CFN Coacalco",
    description: "Congreso de tres días con talleres, conferencias y tiempos intensos de adoración para equipar y fortalecer a adoradores e intercesores.",
    category: "Congreso",
    urgent: false,
    image: "img/eventos/congreso_adoradores.jpg"
  },
  {
    id: 10,
    title: "Ayuno Congregacional (21 días)",
    date: "1 de Noviembre, 2026",
    time: "Todo el día",
    location: "CFN Coacalco",
    description: "Comienzo del último ayuno congregacional del año, un tiempo de consagración para preparar el cierre espiritual del año.",
    category: "Ayuno",
    urgent: false,
    image: "img/eventos/ayuno_noviembre.jpg"
  },
  {
    id: 11,
    title: "Campaña de Sanidades y Milagros",
    date: "19, 20 y 21 de Noviembre, 2026",
    time: "Hora por definir",
    location: "CFN Coacalco",
    description: "Tres días de ministración, fe y milagros, buscando el toque transformador de Dios en cada vida.",
    category: "Campaña",
    urgent: false,
    image: "img/eventos/campana_noviembre.jpg"
  }

];

const categoryColors = {
  "Culto General": "bg-blue-500",
  "Servicio": "bg-purple-500",
  "Actividad": "bg-green-500",
  "Importante": "bg-red-500"
};

interface AnnouncementsPageProps {
  onBack: () => void;
}

// Componente Modal de Anuncio
interface AnnouncementModalProps {
  announcement: Announcement;
  onClose: () => void;
}

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ announcement, onClose }) => {
  // Función de ejemplo para manejar el "Guardar en Calendario"
  const addToCalendar = (announcement: Announcement) => {
    const text = encodeURIComponent(announcement.title);
    const details = encodeURIComponent(announcement.description);
    const location = encodeURIComponent(announcement.location);
    // En una implementación real se requiere una fecha y hora más precisa, pero
    // para el ejemplo de la URL de Google Calendar, usamos lo disponible.
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 rounded-t-3xl overflow-hidden">
          <ImageWithFallback
            src={announcement.image || "img/placeholder-anuncio.jpg"} // Usa una imagen de fallback si no hay
            alt={announcement.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all text-white"
          >
            <X size={24} />
          </button>
          {/* Category Label */}
          <span className={`${categoryColors[announcement.category]} absolute bottom-4 left-4 text-white px-4 py-1.5 rounded-full text-sm font-semibold`}>
            {announcement.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{announcement.title}</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1F6FD8] shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Fecha</p>
                  <p className="font-medium">{announcement.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1F6FD8] shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Hora</p>
                  <p className="font-medium">{announcement.time}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1F6FD8] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Ubicación</p>
                  <p className="font-medium">{announcement.location}</p>
                </div>
              </div>
              {announcement.urgent && (
                <div className="flex items-start gap-3 text-red-700">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                    <Bell size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-red-500 uppercase font-semibold">Estatus</p>
                    <p className="font-medium">¡Anuncio Urgente!</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 border-t pt-6">Detalles del Anuncio</h3>
            <p className="text-gray-600 leading-relaxed">
              {announcement.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex pt-6 border-t border-gray-100">
            <button
              onClick={() => addToCalendar(announcement)}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#1F6FD8] text-white rounded-xl hover:bg-[#1657b0] transition-colors shadow-lg shadow-blue-200"
            >
              <CalendarPlus size={20} />
              Guardar en Calendario
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


export function AnnouncementsPage({ onBack }: AnnouncementsPageProps) {
  const [currentStory, setCurrentStory] = useState(0);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section (Se mantiene igual) */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #1F6FD8, #0E3465)' }}></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onBack}
            className="flex items-center gap-2 text-white mb-8 hover:gap-3 transition-all duration-300 group"
          >
            <ArrowLeft size={24} className="group-hover:scale-110 transition-transform" />
            <span>Volver al inicio</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Bell className="text-white" size={48} />
              <h1 className="text-white">Anuncios y Actividades</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Mantente informado de todos los eventos, actividades y servicios especiales de nuestra iglesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories Carousel Section (Se mantiene igual) */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-gray-900 text-center mb-4">Destacados</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Desktop: Horizontal Stories */}
            <div className="hidden md:flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {stories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex-shrink-0 w-64 snap-center group cursor-pointer"
                  onClick={() => setCurrentStory(index)}
                >
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="mb-2 text-white">{story.title}</h4>
                      <p className="text-sm text-white/90 mb-3">{story.subtitle}</p>
                      {story.cta && (
                        <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm hover:bg-white/30 transition-all border border-white/30">
                          {story.cta}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile: Vertical Story Carousel */}
            <div className="md:hidden relative">
              <div className="relative mx-auto max-w-sm">
                {/* Story Card */}
                <motion.div
                  key={currentStory}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl"
                >
                  <ImageWithFallback
                    src={stories[currentStory].image}
                    alt={stories[currentStory].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Progress Bars */}
                  <div className="absolute top-4 left-4 right-4 flex gap-1">
                    {stories.map((_, index) => (
                      <div
                        key={index}
                        className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                      >
                        <div
                          className={`h-full bg-white transition-all duration-300 ${index === currentStory ? 'w-full' : index < currentStory ? 'w-full' : 'w-0'
                            }`}
                        ></div>
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="mb-3 text-white">{stories[currentStory].title}</h3>
                    <p className="text-white/90 mb-4">{stories[currentStory].subtitle}</p>
                    {stories[currentStory].cta && (
                      <button className="w-full py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all border border-white/30">
                        {stories[currentStory].cta}
                      </button>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevStory}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextStory}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </motion.div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentStory
                        ? 'bg-[#1F6FD8] w-8'
                        : 'bg-gray-300'
                        }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Urgent Announcements */}
            {announcements.some(a => a.urgent) && (
              <div className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <Bell className="text-red-500" size={24} />
                  <h2 className="text-gray-900">Anuncios Urgentes</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {announcements.filter(a => a.urgent).map((announcement, index) => (
                    <motion.div
                      key={announcement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                      onClick={() => setSelectedAnnouncement(announcement)} // ABRIR MODAL
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className={`${categoryColors[announcement.category]} text-white px-4 py-1.5 rounded-full text-sm`}>
                          {announcement.category}
                        </span>
                        <Bell className="text-red-500 animate-pulse" size={24} />
                      </div>

                      <h3 className="text-gray-900 mb-4 group-hover:text-[#1F6FD8] transition-colors">
                        {announcement.title}
                      </h3>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Calendar size={18} className="text-[#1F6FD8]" />
                          <span>{announcement.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Clock size={18} className="text-[#1F6FD8]" />
                          <span>{announcement.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <MapPin size={18} className="text-[#1F6FD8]" />
                          <span>{announcement.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {announcement.description}
                      </p>

                      <button className="w-full py-3 bg-gradient-to-r from-[#1F6FD8] to-[#0E3465] text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                        Más información
                        <ChevronRight size={20} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Announcements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-gray-900">Próximas Actividades</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements.filter(a => !a.urgent).map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedAnnouncement(announcement)} // ABRIR MODAL
                >
                  <span className={`${categoryColors[announcement.category]} text-white px-3 py-1 rounded-full text-sm inline-block mb-4`}>
                    {announcement.category}
                  </span>

                  <h4 className="text-gray-900 mb-4 group-hover:text-[#1F6FD8] transition-colors">
                    {announcement.title}
                  </h4>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar size={16} className="text-[#1F6FD8]" />
                      <span>{announcement.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock size={16} className="text-[#1F6FD8]" />
                      <span>{announcement.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin size={16} className="text-[#1F6FD8]" />
                      <span className="line-clamp-1">{announcement.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {announcement.description}
                  </p>

                  <button className="w-full py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-[#1F6FD8] hover:to-[#0E3465] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    Ver detalles
                    <ChevronRight size={18} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Se mantiene igual) */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <Users className="mx-auto mb-6 text-[#1F6FD8]" size={48} />
              <h3 className="text-gray-900 mb-4">
                ¿Quieres recibir notificaciones?
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Únete a nuestro grupo de WhatsApp o suscríbete a nuestro boletín para estar al tanto de todas las actividades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/525512345678"
                  className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Bell size={20} />
                  Únete por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal para Anuncios */}
      <AnimatePresence>
        {selectedAnnouncement && (
          <AnnouncementModal
            announcement={selectedAnnouncement}
            onClose={() => setSelectedAnnouncement(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}