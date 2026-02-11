import { motion } from "motion/react";
import { Heart, Target, Users, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  {
    icon: Heart,
    title: "Misión",
    description: "CFN es mi casa, dónde Cristo edifica mi familia, somos formados como siervos, adoramos al cordero de Dios, y hombro a hombro establecemos su Reino."
  },
  {
    icon: Target,
    title: "Visión",
    description: "Bendecir a todas las familias de la tierra. -- ' y serán benditas en ti todas las familias de la tierra. Gen 12:3' -- "
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Un lugar donde cada persona encuentra su propósito, crece en fe y es equipada para servir con excelencia dentro y fuera de la iglesia."
  },
  {
    icon: Sparkles,
    title: "Valores",
    description: "Vivimos con integridad, excelencia y compasión, restaurando familias y promoviendo valores que transforman nuestra comunidad conforme a las enseñanzas de la Biblia."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            Quiénes Somos
          </span>
          <h2 className="mb-6 text-gray-900">Una Familia con Propósito</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una iglesia evangélica cristiana donde cada persona es valorada y bienvenida. EnCFN Coacalco vivimos en amor, respeto y adoración genuina, honrando al Padre, al Hijo y al Espíritu Santo. Enseñamos sana doctrina, reconocemos los dones del Espíritu y preparamos a quienes desean servir a Dios. Aquí encontrarás un hogar espiritual, un lugar de bendición y crecimiento. ¡Te invitamos a conocernos y ser parte de esta gran familia!
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          <div className="md:col-span-2 h-80 rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="img/quienes_somos/2.jpg"
              alt="FamiliasCFN"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="img/quienes_somos/1.jpg"
              alt="Oración comunitaria"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-primary-200">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h4 className="mb-3 text-gray-900">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}