import { motion } from "motion/react";
import { Calendar, Heart, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const leaders = [
  {
    name: "Pastor Jonas Fernandez",
    role: "Pastor Principal",
    description: "Líder visionario con más de 20 años de experiencia ministerial. Apasionado por enseñar la Palabra y edificar familias fuertes en Cristo.",
    image: "img/liderazgo/pjf.jpg",
    color: "linear-gradient(90deg, #1F6FD8, #0E3465)",
    details: {
      birthdate: "30 de Agosto",
      hobbies: ["Lectura", "Conocer lugares nuevos", "Tomar un buen café", "Ir al cine"],
      favoriteVerse: "Josué 1:9"
    }
  },
  {
    name: "Pastora Xenia Duarte",
    role: "Pastora Principal",
    description: "Comprometida con el cuidado pastoral de las familias. Lidera el ministerio de mujeres y consejería con amor y sabiduría.",
    image: "img/liderazgo/pxd.jpg",
    color: "linear-gradient(90deg, #9d4d5f, #7d3d4c)",
    details: {
      birthdate: "20 de Diciembre",
      hobbies: ["Jardinería", "Cocina", "Caminatas al aire libre"],
      favoriteVerse: "Proverbios 31:25"
    }
  }
];

export function LeadersSection() {
  return (
    <section id="leaders" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#1F6FD8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0E3465] rounded-full blur-3xl"></div>
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
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#1F6FD8] rounded-full mb-4">
            Liderazgo
          </span>
          <h2 className="mb-6 text-gray-900">Nuestros Pastores</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo de siervos apasionados, comprometidos con guiar a nuestra comunidad
            hacia el propósito de Dios con integridad, amor y excelencia.
          </p>
        </motion.div>

        {/* Featured Leaders (First Two) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {leaders.slice(0, 2).map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-96 overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-white/90 font-medium">{leader.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  <p className="text-gray-600 leading-relaxed mb-8">{leader.description}</p>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Conóceme más</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Calendar size={18} className="text-[#1F6FD8]" />
                        <span className="font-medium">Cumpleaños:</span>
                        <span>{leader.details.birthdate}</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-gray-600">
                        <Heart size={18} className="text-[#1F6FD8] mt-0.5" />
                        <span className="font-medium">Hobbies:</span>
                        <span>{leader.details.hobbies.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <BookOpen size={18} className="text-[#1F6FD8]" />
                        <span className="font-medium">Versículo Favorito:</span>
                        <span className="italic">"{leader.details.favoriteVerse}"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}