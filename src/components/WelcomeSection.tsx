import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function WelcomeSection() {
  return (
    <section className="py-24 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <div className="aspect-video bg-gray-100">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                poster="img/liderazgo/pjf.jpg"
              >
                <source src="img/principal/pastores.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full mb-4">
              Mensaje de Bienvenida
            </span>
            <h2 className="mb-6 text-gray-900">Bienvenido a CFN Coacalco</h2>
            <p className="text-xl text-gray-600 mb-6">
              Somos una comunidad de fe que ama a Dios y a las personas. Queremos que te sientas en casa,
              encuentres apoyo espiritual y vivas una experiencia de adoracion genuina junto a tu familia.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Este es un lugar para crecer, servir y caminar en unidad. Estamos aqui para acompanarte en cada etapa
              de tu vida y abrirte las puertas con alegria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/conecta"
                className="px-8 py-3 text-white rounded-full hover:shadow-lg transition-all duration-300 text-center"
                style={{ background: "linear-gradient(90deg, #1F6FD8, #0E3465)" }}
              >
                Conecta con nosotros
              </Link>
              <Link
                to="/eventos"
                className="px-8 py-3 border-2 border-[#1F6FD8] text-[#1F6FD8] rounded-full hover:bg-[#1F6FD8] hover:text-white transition-all duration-300 text-center"
              >
                Ver horarios
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
