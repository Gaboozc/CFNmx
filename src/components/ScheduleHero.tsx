import { motion } from "motion/react";
import { Clock, Calendar, MapPin } from "lucide-react";

// const schedule = [
//   { day: "Martes", time: "06:00 - 07:00 - Oración de Varones (Rosh)" },
//   { day: "Martes", time: "21:00 - 22:00 - Sanidades y Milagros" },
//   { day: "Miércoles", time: "19:00 - 20:30 - Reunión General" },
//   { day: "Jueves", time: "10:00 - 11:00 - Mujeres en Unidad" },
//   { day: "Jueves", time: "19:00 - 20:30 - Grupos Familiares (Células)" },
//   { day: "Viernes", time: "19:00 - 20:30 - Reunión de Oración" },
//   { day: "Sábado", time: "07:00 - 14:00 - EDEA" },
//   { day: "Sábado", time: "16:00 - 17:00 - Reunión 'Generación de Cambio' (Edad: 18–26 años)" },
//   { day: "Sábado", time: "17:00 - 18:00 - Reunión 'Valientes' (Edad: 15–18 años)" },
//   { day: "Sábado", time: "17:00 - 18:30 - Mujeres con Propósito (Cada 15 días)" },
//   { day: "Sábado", time: "18:00 - 19:30 - Reunión 'Jóvenes con Visión' (Edad: 27+ o Profesionistas)" },
//   { day: "Sábado", time: "18:00 - 19:30 - Reunión de Matrimonios (Cada 15 días)" },
//   { day: "Domingo", time: "08:00 - 09:30 - Reunión General" },
//   { day: "Domingo", time: "10:00 - 12:00 - Reunión General" },
//   { day: "Domingo", time: "12:30 - 14:30 - Reunión General" }
// ];

const schedule = [
  { day: "Martes", time: "06:00 - 07:00 - Oración Rosh (Presencial)" },

  { day: "Miércoles", time: "19:00 - 20:30 - Reunión General" },

  { day: "Jueves", time: "10:00 - 11:00 - Reunión de Mujeres en Unidad" },
  { day: "Jueves", time: "Por la tarde - Grupos Familiares" },

  { day: "Viernes", time: "19:00 - 20:30 - Reunión de Oración" },

  { day: "Sábado", time: "17:00 - 18:00 - Reunión de Jóvenes" },
  { day: "Sábado", time: "19:00 - 20:30 - Reunión de Matrimonios (Cada 15 días)" },

  { day: "Domingo", time: "08:00 - 09:30 - Reunión General" },
  { day: "Domingo", time: "10:00 - 12:00 - Reunión General" },
  { day: "Domingo", time: "12:30 - 14:00 - Reunión General" }
];

// Agrupar horarios por día
const groupedSchedule = schedule.reduce((acc, item) => {
  if (!acc[item.day]) {
    acc[item.day] = [];
  }
  acc[item.day].push(item.time);
  return acc;
}, {} as Record<string, string[]>);

export function ScheduleHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #1F6FD8, #0E3465, #2d5a7b)' }}></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="text-white" size={40} />
            <h2 className="text-white">Horarios de Servicio</h2>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Te esperamos en nuestras reuniones semanales. Ven y sé parte de nuestra familia.
          </p>
        </motion.div>

        {/* Schedule Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedSchedule).map(([day, times], index) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/20">
                  <Calendar className="text-white group-hover:scale-110 transition-transform" size={24} />
                  <h4 className="text-white text-xl">{day}</h4>
                </div>
                <div className="space-y-3">
                  {times.map((time, idx) => (
                    <div key={idx} className="text-white/90 text-sm leading-relaxed">
                      {time}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <MapPin className="mx-auto mb-3 text-white" size={32} />
            <h4 className="text-white mb-2">Ubicación</h4>
            <p className="text-white/80 text-sm">
              20 de Noviembre 50, Coacalco, 55718 <br />
              San Francisco Coacalco, Méx
            </p>
          </div>

          {/*<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <Clock className="mx-auto mb-3 text-white" size={32} />
            <h4 className="text-white mb-2">Servicio Principal</h4>
            <p className="text-white/80 text-sm">
              Domingos<br />
              08:00 AM<br /> 10:00 AM<br /> 12:30 PM
            </p>
          </div> */}

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <Calendar className="mx-auto mb-3 text-white" size={32} />
            <h4 className="text-white mb-2">Primera Visita</h4>
            <p className="text-white/80 text-sm">
              ¡Esperamos verte pronto!<br />
              No se requiere registro previo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
