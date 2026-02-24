import { motion } from "motion/react";
import { Target, Sparkles, Users } from "lucide-react";

const visionPoints = [
  {
    icon: Target,
    title: "Vision",
    description: "Genesis 12:3  y serán benditas en ti todas las familias de la tierra."
  },
  {
    icon: Sparkles,
    title: "Enfoque",
    description: "Formar discipulos con un corazon sano, comprometidos con la Palabra y la adoracion."
  },
  {
    icon: Users,
    title: "Familia",
    description: "Servir juntos con excelencia, amor y unidad para transformar nuestra comunidad."
  }
];

export function AboutVisionSection() {
  return (
    <section id="about" className="py-24 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full mb-4">
            About Us
          </span>
          <h2 className="mb-6 text-gray-900">¿Qué es CFN?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CFN es mi casa, donde Cristo edifica a mi familia, somos formados como siervos, adoramos al Cordero de Dios
            y hombro a hombro establecemos su reino.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(90deg, #1F6FD8, #0E3465)" }}
                >
                  <point.icon className="text-white" size={26} />
                </div>
                <h4 className="mb-3 text-gray-900">{point.title}</h4>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
