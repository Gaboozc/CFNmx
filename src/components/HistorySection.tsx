import { motion } from "motion/react";
import { Calendar, Heart, Users, Church, Sparkles, CheckCircle, X, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const fullTimeline = [
  {
    year: "2025",
    title: "Presente y Futuro",
    description: "Hoy somos una familia de más de 500 personas comprometidas con transformar Coacalco y las naciones. Continuamos creciendo con nuevos proyectos, instalaciones renovadas y una visión clara de impacto.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2025.jpg"
  },
  {
    year: "2019",
    title: "Vigésimo Segundo Aniversario – Impacto de Amor",
    description: "Un año marcado por el 'Impacto de Amor', viendo cómo Dios profundizó los corazones en gracia y en Su amor paternal.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2019.jpg"
  },
  {
    year: "2018",
    title: "Vigésimo Primer Aniversario – Sinergia",
    description: "En septiembre del 2018 se vivió una profunda unidad bajo el lema 'Sinergia', uniendo corazones como iglesia.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2018.jpg"
  },
  {
    year: "2017",
    title: "Vigésimo Aniversario – Transición Pastoral",
    description: "Durante el aniversario número 20 ocurrió la transición pastoral: el pastor y su esposa entregaron el liderazgo a Jonás y Zenia. Fue una transición hermosa y en unidad.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2017.jpg"
  },
  {
    year: "2016",
    title: "Décimo Noveno Aniversario",
    description: "La iglesia recibió un reconocimiento especial durante la celebración del aniversario número 19.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2016.jpg"
  },
  {
    year: "2015",
    title: "Décimo Octavo Aniversario",
    description: "Un aniversario lleno de alegría. Se menciona al grupo de alabanza y una fotografía característica del pastor sonriendo con 'dientes afilados'.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2015.jpg"
  },
  {
    year: "2014",
    title: "Décimo Séptimo Aniversario",
    description: "Celebrado en septiembre de 2014, con una visión más amplia y un enfoque renovado para la iglesia.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2014.jpg"
  },
  {
    year: "2013",
    title: "Décimo Sexto Aniversario",
    description: "La iglesia seguía creciendo constantemente durante su décimo sexto aniversario, agradeciendo la fidelidad de Dios.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2013.jpg"
  },
  {
    year: "2012",
    title: "Décimo Quinto Aniversario",
    description: "Se contó con un coro significativo y un tiempo de alabanza fuerte. La iglesia continuaba creciendo notablemente.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2012.jpg"
  },
  {
    year: "2011",
    title: "Décimo Cuarto Aniversario",
    description: "Un año de consolidación y crecimiento espiritual, celebrando el décimo cuarto aniversario en la nueva sede.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2011.jpg"
  },
  {
    year: "2010",
    title: "Décimo Tercer Aniversario",
    description: "El primer aniversario celebrado en el nuevo lugar, marcando el inicio de una nueva temporada. Se cumplen 10 años en ese sitio.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2010.jpg"
  },
  {
    year: "2009",
    title: "Décimo Segundo Aniversario",
    description: "Este fue el último aniversario celebrado en la antigua ubicación. Muchos de los presentes servían en danza o en alabanza.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2009.jpg"
  },
  {
    year: "2008",
    title: "Décimo Primer Aniversario",
    description: "Para este aniversario la congregación ya había adquirido el terreno de San Pablo, avanzando hacia una nueva etapa.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2008.jpg"
  },
  {
    year: "2007",
    title: "Décimo Aniversario",
    description: "El décimo aniversario marcó un tiempo de decisiones importantes. Dios instruyó que debían moverse de lugar para poder crecer más.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2007.jpg"
  },
  {
    year: "2006",
    title: "Noveno Aniversario",
    description: "El grupo de alabanza destacaba con gran fuerza. El pastor incluso bromea sobre aún tener cabello negro en aquella época.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2006.jpg"
  },
  {
    year: "2005",
    title: "Octavo Aniversario",
    description: "Durante el octavo aniversario, varios jóvenes del grupo de alabanza ya estaban casados y algunos se habían convertido en pastores.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2005.jpg"
  },
  {
    year: "2004",
    title: "Séptimo Aniversario",
    description: "La celebración del séptimo aniversario reunió entre 250 y 300 personas en la calle Morelos, reflejando un notable crecimiento.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2004.jpg"
  },
  {
    year: "2003",
    title: "Sexto Aniversario",
    description: "El sexto aniversario se celebró nuevamente en la ubicación de Morelos, donde la iglesia seguía creciendo.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2003.jpg"
  },
  {
    year: "2002",
    title: "Quinto Aniversario",
    description: "Para el quinto aniversario, la congregación ya se reunía en la calle Morelos, detrás de la clínica del Seguro Social.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2002.jpg"
  },
  {
    year: "2001",
    title: "Cuarto Aniversario",
    description: "La iglesia celebró su cuarto aniversario marcando un nuevo año de avance y fidelidad de Dios.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2001.jpg"
  },
  {
    year: "2000",
    title: "Tercer Aniversario",
    description: "El tercer aniversario tuvo lugar en el Salón Monte Carlo, consolidando el crecimiento de la congregación.",
    icon: CheckCircle,
    image: "img/nuestra_historia_2000.jpg"
  },
  {
    year: "1999",
    title: "Segundo Aniversario",
    description: "El segundo aniversario se celebró nuevamente en un salón. En la fotografía destacaba Jonás a la derecha del pastor.",
    icon: CheckCircle,
    image: "img/nuestra_historia_1999.jpg"
  },
  {
    year: "1998",
    title: "Primer Aniversario",
    description: "La celebración del primer aniversario se realizó en un restaurante bar llamado 'El Igualas Ranas', un lugar que se alquiló especialmente para la ocasión.",
    icon: CheckCircle,
    image: "img/nuestra_historia_1998.jpg"
  },
  {
    year: "1997",
    title: "La Primera Reunión",
    description: "La primera reunión se llevó a cabo en el Salón de las Rosas, el domingo 7 de septiembre de 1997, marcando el inicio oficial de la congregación.",
    icon: CheckCircle,
    image: "img/nuestra_historia_1997.jpg"
  },
  {
    year: "2025",
    title: "Presente y Futuro",
    description: "Hoy somos una familia de más de 500 personas comprometidas con transformar Coacalco y las naciones. Continuamos creciendo con nuevos proyectos, instalaciones renovadas y una visión clara de impacto.",
    icon: CheckCircle,
    image: "img/nuestra_historia/3.jpg"
  }
];


export function HistorySection() {
  const [showModal, setShowModal] = useState(false);
  const currentYear = fullTimeline[fullTimeline.length - 1];

  return (
    <section id="history" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#1F6FD8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#0E3465] rounded-full blur-3xl"></div>
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
            Nuestra Historia
          </span>
          <h2 className="mb-6 text-gray-900">Un historia de fe a lo largo de los años.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde 1997 hasta hoy, Dios ha escrito una historia increíble
            de fe, crecimiento y compromiso con las familias en Coacalco y las naciones.
          </p>
        </motion.div>

        {/* Current Year Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            {/* Image */}
            <div className="relative h-96">
              <ImageWithFallback
                src={currentYear.image}
                alt={currentYear.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}
                  >
                    <currentYear.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-4xl text-white mb-1">{currentYear.year}</div>
                    <h3 className="text-white">{currentYear.title}</h3>
                  </div>
                </div>
                <p className="text-white/95 text-lg leading-relaxed max-w-3xl">
                  {currentYear.description}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white text-center">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}
              >
                <span>Conoce Más</span>
                <ChevronDown size={20} />
              </button>
              <p className="text-gray-600 mt-4">Descubre nuestra historia completa desde 1997</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal with Full Timeline */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-gray-900 mb-1">Nuestra Historia Completa</h2>
                  <p className="text-gray-600">1997 - 2025 | 28 años de testimonio</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Modal Content - Timeline */}
            <div className="p-6 md:p-8">
              <div className="space-y-8">
                {fullTimeline.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image */}
                      <div className="md:w-1/3">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 group">
                          <ImageWithFallback
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-4 mb-3">
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}
                          >
                            <event.icon className="text-white" size={24} />
                          </div>
                          <div>
                            <div className="text-2xl text-[#1F6FD8]">{event.year}</div>
                            <h4 className="text-gray-900">{event.title}</h4>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < fullTimeline.length - 1 && (
                      <div className="hidden md:block absolute left-6 top-full w-0.5 h-8 bg-gradient-to-b from-[#1F6FD8] to-gray-200 ml-6"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent p-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 italic">
                  "Y haré de ti una nación grande, y te bendeciré..." - Génesis 12:2
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}