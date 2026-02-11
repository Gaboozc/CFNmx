import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Clock, X, CalendarPlus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  image: string;
  featured: boolean;
  description?: string;
}

const events: Event[] = [
  {
    title: "Conferencia Familiar 2024",
    date: "15-17 Noviembre",
    time: "6:00 PM - 9:00 PM",
    location: "Auditorio PrincipalCFN",
    attendees: "500+ registrados",
    image: "https://images.unsplash.com/photo-1596510914965-9ae08acae566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZmFtaWxpZXMlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjI2NjE3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
    description: "Únete a nosotros para un fin de semana transformador enfocado en fortalecer los lazos familiares. Tendremos conferencistas invitados, talleres prácticos y tiempos de adoración."
  },
  {
    "title": "Reunión de Jóvenes",
    "date": "Todos los Sábados",
    "time": "5:00 PM",
    "location": "CFN Coacalco",
    "attendees": "Jóvenes",
    "image": "img/eventos/jovenesh.jpg",
    "featured": true,
    "description": "Un encuentro semanal para la juventud. Conéctate, comparte y crece en comunidad."
  },
  {
    "title": "Oración Rosh",
    "date": "Martes",
    "time": "6:00 AM",
    "location": "CFN Coacalco",
    "attendees": "Abierto a todos",
    "image": "img/eventos/roshh.jpg",
    "featured": true,
    "description": "Comienza tu mañana con un tiempo de oración matutina 'Rosh'. Una hora para buscar a Dios."
  },
  {
    "title": "Reunión de Oración",
    "date": "Viernes",
    "time": "7:00 PM",
    "location": "En línea y/o presencial (se puede ver por Facebook o YouTube)",
    "attendees": "Abierto a todos",
    "image": "img/eventos/viernesoracionh.jpg",
    "featured": false,
    "description": "Una reunión enfocada en la oración corporativa. Únete en el templo o en línea a través de Facebook o YouTube (CFN Comunicaciones)."
  },
  {
    "title": "Grupos Familiares",
    "date": "Jueves",
    "time": "7:00 PM",
    "location": "CFN Coacalco (lugares de reunión no especificados)",
    "attendees": "Familias y miembros",
    "image": "img/eventos/gfamiliaresh.jpg",
    "featured": false,
    "description": "Reuniones en casas o grupos pequeños para compartir, estudiar y convivir. Contacta a Samuel Mendoza o Angie Zendejas si necesitas unirte a un grupo."
  },
  {
    "title": "Reunión Miércoles",
    "date": "Miércoles",
    "time": "7:00 PM",
    "location": "En línea y/o presencial (se puede ver por Facebook o YouTube)",
    "attendees": "Abierto a todos",
    "image": "img/eventos/miercolesh.jpg",
    "featured": false,
    "description": "Reunión de mitad de semana para edificación. Transmitida también por Facebook y YouTube (CFN Comunicaciones)."
  },
  {
    "title": "Reunión de Matrimonios",
    "date": "Sábados cada 15 días",
    "time": "7:00 PM",
    "location": "CFN Coacalco",
    "attendees": "Parejas casadas",
    "image": "img/eventos/matrimoniosh.jpg",
    "featured": false,
    "description": "Un tiempo dedicado a fortalecer la vida matrimonial. Para más información, contacta a Jesús Méndez o Lupita Fierros."
  },
  {
    "title": "Mujeres en Unidad",
    "date": "Jueves",
    "time": "10:00 AM",
    "location": "CFN Coacalco",
    "attendees": "Mujeres",
    "image": "img/eventos/damash.jpg",
    "featured": true,
    "description": "Un encuentro matutino para que las mujeres compartan y crezcan juntas. También transmitido por Facebook y YouTube (CFN Comunicaciones)."
  },
  {
    "title": "Reuniones Dominicales",
    "date": "Domingo",
    "time": "8:00 AM | 10:00 AM | 12:30 AM",
    "location": "TemploCFN Coacalco (asumiendo ubicación principal)",
    "attendees": "Abierto a todos",
    "image": "img/eventos/reuniondomingoh.jpg",
    "featured": true,
    "description": "Servicios principales del día. La 2ª Reunión se transmite en vivo por Facebook y YouTube (CFN Comunicaciones)."
  }
];

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const addToCalendar = (event: Event) => {
    const text = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description || `Evento: ${event.title}`);
    const location = encodeURIComponent(event.location);
    // Note: For a real implementation, we would need to parse the date string to a proper ISO format.
    // This is a simplified example.
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full mb-4">
            Próximos Eventos
          </span>
          <h2 className="mb-6 text-gray-900">Únete a Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eventos diseñados para fortalecer tu fe, conectar con otros creyentes
            y crecer en comunidad.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.slice(1).map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                  <button className="mt-auto w-full py-2.5 border-2 border-[#1F6FD8] text-[#1F6FD8] rounded-full hover:bg-[#1F6FD8] hover:text-white transition-all duration-300">
                    Más información
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
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
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1F6FD8]">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Fecha</p>
                        <p className="font-medium">{selectedEvent.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1F6FD8]">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Hora</p>
                        <p className="font-medium">{selectedEvent.time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1F6FD8]">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Ubicación</p>
                        <p className="font-medium">{selectedEvent.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sobre este evento</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedEvent.description || "Acompáñanos en este evento especial diseñado para bendecir tu vida y la de tu familia."}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => addToCalendar(selectedEvent)}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#1F6FD8] text-white rounded-xl hover:bg-[#1657b0] transition-colors shadow-lg shadow-blue-200"
                  >
                    <CalendarPlus size={20} />
                    Guardar en Calendario
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}