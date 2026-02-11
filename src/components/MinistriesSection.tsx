import { motion } from "motion/react";
import { Baby, Users, Music, BookOpen, Handshake, X, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface Ministry {
  icon: any;
  title: string;
  description: string;
  color: string;
  fullDescription: string;
  headerImage: string;
  galleryImages: string[];
}

const ministries: Ministry[] = [
  {
    icon: Music,
    title: "Alabanza y Adoración",
    description: "Adoración que conecta corazones con el cielo",
    color: "linear-gradient(90deg, #1F6FD8, #0E3465)",
    fullDescription: "Nuestro equipo de alabanza está integrado por músicos, cantantes y técnicos comprometidos con crear una atmósfera de adoración genuina y profunda. Cada integrante aporta su talento y sensibilidad para que, a través de la música, la congregación pueda conectar con Dios de manera significativa. Este ministerio no se centra únicamente en ejecutar canciones, sino en vivir la adoración como un estilo de vida, reflejando honra, excelencia y devoción dentro y fuera de la plataforma. El equipo trabaja de forma coordinada mediante ensayos semanales, preparación espiritual y capacitación técnica continua, buscando siempre crecer en calidad musical, unidad y sensibilidad al corazón de Dios. Además de la parte musical, el área técnica juega un papel fundamental al garantizar que el sonido, la mezcla, la iluminación y el apoyo visual contribuyan a una experiencia de adoración clara y sin distracciones. Con profesionalismo y dedicación, cada elemento se cuida para que el enfoque permanezca en Cristo y en la vivencia comunitaria de la alabanza.",
    headerImage: "img/ministerios/alabanza/cabecera.webp",
    galleryImages: [
      "img/ministerios/alabanza/1.webp",
      "img/ministerios/alabanza/2.webp",
      "img/ministerios/alabanza/3.webp"
    ]
  },
  {
    icon: Users,
    title: "Jóvenes",
    description: "Empoderar líderes jóvenes con propósito y pasión",
    color: "linear-gradient(90deg, #b97685, #9d4d5f)",
    fullDescription: "El ministerio de jóvenes está diseñado para adolescentes y jóvenes adultos que buscan crecer en su fe mientras navegan las complejidades de la vida moderna. A través de estudios bíblicos profundos, adoración contemporánea, actividades de servicio comunitario y eventos sociales, creamos una comunidad donde los jóvenes pueden ser auténticos, hacer preguntas difíciles y descubrir el propósito que Dios tiene para sus vidas. Nos reunimos semanalmente para adoración, enseñanza y compañerismo.",
    headerImage: "img/ministerios/jovenes/cabecera.webp",
    galleryImages: [
      "img/ministerios/jovenes/1.webp",
      "img/ministerios/jovenes/2.webp",
      "img/ministerios/jovenes/3.webp"
    ]
  },
  {
    icon: BookOpen,
    title: "Enseñanza",
    description: "Palabra profunda que transforma vidas",
    color: "linear-gradient(90deg, #4a7fa1, #2d5a7b)",
    fullDescription: "En el ministerio de enseñanza, nos dedicamos a equipar a la congregación con un fundamento sólido en la Palabra de Dios. Ofrecemos clases de estudio bíblico, escuela dominical, grupos de discipulado y seminarios especiales que profundizan en temas doctrinales, teológicos y prácticos. Nuestro objetivo es formar creyentes maduros que puedan aplicar las Escrituras en su vida diaria y compartir su fe con confianza. Si amas aprender y estudiar la Biblia, este es tu lugar.",
    headerImage: "img/ministerios/ensenanza/cabecera.webp",
    galleryImages: [
      "img/ministerios/ensenanza/1.webp",
      "img/ministerios/ensenanza/2.webp",
      "img/ministerios/ensenanza/3.webp"
    ]
  },
  {
    icon: Handshake,
    title: "Servicio",
    description: "Impactando nuestra comunidad con amor práctico",
    color: "linear-gradient(90deg, #1a5fba, #0E3465)",
    fullDescription: "El ministerio de servicio está enfocado en llevar el amor de Cristo más allá de las paredes de la iglesia. A través de proyectos comunitarios, ayuda a necesitados, campañas de donación y trabajo voluntario, buscamos ser las manos y pies de Jesús en nuestra comunidad. Ya sea sirviendo comida, visitando enfermos, apoyando a personas en crisis o participando en proyectos de construcción, este ministerio ofrece múltiples oportunidades para hacer una diferencia tangible en la vida de otros.",
    headerImage: "img/ministerios/servicio/cabecera.webp",
    galleryImages: [
      "img/ministerios/servicio/1.webp",
      "img/ministerios/servicio/2.webp",
      "img/ministerios/servicio/3.webp"
    ]
  },
  {
    icon: Baby,
    title: "Niños",
    description: "Formando la próxima generación con valores y amor",
    color: "linear-gradient(90deg, #1F6FD8, #0E3465)",
    fullDescription: "En nuestro ministerio de niños, creamos un ambiente seguro y divertido donde los más pequeños pueden aprender sobre el amor de Dios a través de enseñanzas bíblicas dinámicas, juegos, música y actividades creativas. Nuestro equipo de maestros está comprometido a sembrar valores eternos en cada niño, ayudándoles a desarrollar una relación personal con Jesús desde temprana edad. Cada domingo ofrecemos clases adaptadas por edades, desde niños pequeños hasta preadolescentes.",
    headerImage: "img/ministerios/ninos/cabecera.webp",
    galleryImages: [
      "img/ministerios/ninos/1.webp",
      "img/ministerios/ninos/2.webp",
      "img/ministerios/ninos/3.webp"
    ]
  },
  {
    icon: Globe,
    title: "Evangelismo",
    description: "Llevando las buenas nuevas a toda criatura",
    color: "linear-gradient(90deg, #e67e22, #d35400)",
    fullDescription: "El ministerio de evangelismo tiene la misión de compartir el mensaje de salvación con nuestra comunidad y el mundo. Organizamos salidas evangelísticas, eventos al aire libre y campañas especiales para alcanzar a aquellos que aún no conocen a Jesús. Creemos que cada creyente está llamado a ser un testigo, y proporcionamos entrenamiento y herramientas para compartir la fe de manera efectiva y amorosa.",
    headerImage: "img/ministerios/evangelismo/cabecera.webp",
    galleryImages: [
      "img/ministerios/evangelismo/1.webp",
      "img/ministerios/evangelismo/2.webp",
      "img/ministerios/evangelismo/3.webp"
    ]
  }
];

export function MinistriesSection() {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedMinistry) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedMinistry.galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedMinistry) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedMinistry.galleryImages.length) % selectedMinistry.galleryImages.length);
    }
  };

  return (
    <section id="ministries" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1F6FD8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0E3465] rounded-full blur-3xl"></div>
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
          <span className="inline-block px-4 py-1.5 bg-wine-100 text-wine-700 rounded-full mb-4">
            Ministerios
          </span>
          <h2 className="mb-6 text-gray-900">Encuentra tu Lugar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada persona tiene un lugar especial en nuestra familia.
            Descubre dónde puedes servir, crecer y hacer la diferencia.
          </p>
        </motion.div>

        {/* Featured Ministry Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <div className="relative h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759860708866-fd6464a7788f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHdvcnNoaXAlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjI2NjE3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="MinisteriosCFN"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="mb-2">Unidos en Comunidad</h3>
                <p className="text-lg opacity-90">
                  Juntos somos más fuertes. Cada ministerio trabaja en armonía para edificar el Reino.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ministries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedMinistry(ministry);
                setCurrentImageIndex(0);
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`} style={{ background: ministry.color }}>
                  <ministry.icon className="text-white" size={32} />
                </div>
                <h4 className="mb-3 text-gray-900">{ministry.title}</h4>
                <p className="text-gray-600">{ministry.description}</p>
                <div className="mt-6 flex items-center text-[#1F6FD8] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Más información</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMinistry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedMinistry(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-64 md:h-80 rounded-t-3xl overflow-hidden">
              <ImageWithFallback
                src={selectedMinistry.headerImage}
                alt={selectedMinistry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedMinistry(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <X className="text-white" size={24} />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: selectedMinistry.color }}>
                    <selectedMinistry.icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-white">{selectedMinistry.title}</h2>
                </div>
                <p className="text-white/90 text-lg">{selectedMinistry.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">{selectedMinistry.fullDescription}</p>
              </div>

              {/* Gallery Carousel */}
              <div className="mt-8">
                <h3 className="text-gray-900 mb-6">Galería</h3>
                <div className="relative">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={selectedMinistry.galleryImages[currentImageIndex]}
                      alt={`${selectedMinistry.title} - Imagen ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Navigation Buttons */}
                    {selectedMinistry.galleryImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {selectedMinistry.galleryImages.length > 1 && (
                    <div className="flex gap-3 mt-4 justify-center">
                      {selectedMinistry.galleryImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                            ? 'border-[#1F6FD8] scale-110'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                          <ImageWithFallback
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 flex justify-center">
                <button
                  className="px-8 py-4 rounded-xl text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                  style={{ background: selectedMinistry.color }}
                >
                  Únete a {selectedMinistry.title}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}