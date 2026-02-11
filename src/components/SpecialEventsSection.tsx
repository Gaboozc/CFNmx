import { motion } from "motion/react";
import { Calendar, Clock, MapPin, CalendarPlus } from "lucide-react";

interface SpecialEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const specialEvents: SpecialEvent[] = [
  {
    title: "Campana de Sanidades y Milagros",
    date: "19, 20 y 21 de Marzo, 2026",
    time: "Hora por definir",
    location: "CFN Coacalco",
    description: "Tres dias enfocados en el mover de Dios con palabra, adoracion y ministracion.",
    image: "img/eventos/campana_marzo.jpg"
  },
  {
    title: "Congreso de Adoradores",
    date: "6, 7 y 8 de Agosto, 2026",
    time: "Todo el dia",
    location: "CFN Coacalco",
    description: "Conferencias y talleres para equipar adoradores e intercesores.",
    image: "img/eventos/congreso_adoradores.jpg"
  },
  {
    title: "Ayuno Congregacional",
    date: "1 de Noviembre, 2026",
    time: "Todo el dia",
    location: "CFN Coacalco",
    description: "Tiempo de consagracion y busqueda espiritual como iglesia.",
    image: "img/eventos/ayuno_noviembre.jpg"
  }
];

export function SpecialEventsSection() {
  const addToCalendar = (event: SpecialEvent) => {
    const text = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.location);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full mb-4">
            Actividades Especiales
          </span>
          <h2 className="mb-6 text-gray-900">Calendario de Eventos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Marca estas fechas en tu agenda y participa en las actividades que fortalecen nuestra fe y unidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {specialEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h4 className="mb-4 text-gray-900">{event.title}</h4>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-[#1F6FD8]" size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-[#1F6FD8]" size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-[#1F6FD8]" size={16} />
                      <span className="text-xs">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-6">{event.description}</p>
                  <button
                    onClick={() => addToCalendar(event)}
                    className="mt-auto w-full py-2.5 border-2 border-[#1F6FD8] text-[#1F6FD8] rounded-full hover:bg-[#1F6FD8] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <CalendarPlus size={16} />
                    Guardar en Calendario
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
