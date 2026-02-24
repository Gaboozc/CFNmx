import { motion } from "motion/react";
import { useState } from "react";
import {
  Baby,
  Users,
  Music,
  BookOpen,
  Handshake,
  Globe,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Ministry {
  icon: any;
  title: string;
  description: string;
  color: string;
  fullDescription: string;
  headerImage: string;
  galleryImages: string[];
}

interface MinistryGroup {
  title: string;
  description: string;
  ministries: string[];
}

const ministryDetails: Record<string, Ministry> = {
  "Alabanza y Adoracion": {
    icon: Music,
    title: "Alabanza y Adoracion",
    description: "Celebracion que conecta corazones con el cielo",
    color: "linear-gradient(90deg, #1F6FD8, #0E3465)",
    fullDescription:
      "Nuestro equipo de alabanza integra musicos, cantantes y tecnicos comprometidos con crear un ambiente de adoracion profundo. Trabajamos con excelencia, unidad y sensibilidad al Espiritu Santo para servir a la iglesia en cada reunion.",
    headerImage: "img/ministerios/alabanza/cabecera.webp",
    galleryImages: [
      "img/ministerios/alabanza/1.webp",
      "img/ministerios/alabanza/2.webp",
      "img/ministerios/alabanza/3.webp"
    ]
  },
  "Jovenes": {
    icon: Users,
    title: "Jovenes",
    description: "Lideres jovenes con proposito y pasion",
    color: "linear-gradient(90deg, #b97685, #9d4d5f)",
    fullDescription:
      "El ministerio de jovenes acompana a adolescentes y adultos jovenes en su crecimiento espiritual. Nos reunimos para estudiar la Biblia, adorar y servir, formando una comunidad sana y activa.",
    headerImage: "img/ministerios/jovenes/cabecera.webp",
    galleryImages: [
      "img/ministerios/jovenes/1.webp",
      "img/ministerios/jovenes/2.webp",
      "img/ministerios/jovenes/3.webp"
    ]
  },
  "Ensenanza": {
    icon: BookOpen,
    title: "Ensenanza",
    description: "Formacion biblica que transforma",
    color: "linear-gradient(90deg, #4a7fa1, #2d5a7b)",
    fullDescription:
      "Equipamos a la iglesia con fundamentos solidos en la Palabra de Dios. Ofrecemos clases, discipulados y recursos que ayudan a vivir una fe madura y relevante.",
    headerImage: "img/ministerios/ensenanza/cabecera.webp",
    galleryImages: [
      "img/ministerios/ensenanza/1.webp",
      "img/ministerios/ensenanza/2.webp",
      "img/ministerios/ensenanza/3.webp"
    ]
  },
  "Hospitalidad": {
    icon: Handshake,
    title: "Hospitalidad",
    description: "Recibimos con alegria a cada familia",
    color: "linear-gradient(90deg, #1a5fba, #0E3465)",
    fullDescription:
      "Este equipo se enfoca en la bienvenida, apoyo logisitico y atencion durante las reuniones. Servimos con calidez para que cada persona se sienta en casa desde su primera visita.",
    headerImage: "img/eventos/reuniondomingoh.jpg",
    galleryImages: [
      "img/eventos/reuniondomingoh.jpg",
      "img/quienes_somos/1.jpg",
      "img/quienes_somos/2.jpg"
    ]
  },
  "Ninos": {
    icon: Baby,
    title: "Ninos",
    description: "Formando la proxima generacion",
    color: "linear-gradient(90deg, #1F6FD8, #0E3465)",
    fullDescription:
      "Creamos un ambiente seguro y divertido donde los ninos aprenden del amor de Dios con ensenanza biblica, dinamicas y adoracion.",
    headerImage: "img/ministerios/ninos/cabecera.webp",
    galleryImages: [
      "img/ministerios/ninos/1.webp",
      "img/ministerios/ninos/2.webp",
      "img/ministerios/ninos/3.webp"
    ]
  },
  "Evangelismo": {
    icon: Globe,
    title: "Evangelismo",
    description: "Compartimos las buenas nuevas",
    color: "linear-gradient(90deg, #e67e22, #d35400)",
    fullDescription:
      "Salimos a la comunidad para compartir el mensaje de salvacion. Entrenamos y enviamos a personas apasionadas por alcanzar vidas.",
    headerImage: "img/ministerios/evangelismo/cabecera.webp",
    galleryImages: [
      "img/ministerios/evangelismo/1.webp",
      "img/ministerios/evangelismo/2.webp",
      "img/ministerios/evangelismo/3.webp"
    ]
  }
};

const ministryGroups: MinistryGroup[] = [
  {
    title: "Comunion",
    description: "Llamado y respuesta al evangelio",
    ministries: ["Evangelismo"]
  },
  {
    title: "Adoracion",
    description: "Adoracion y vida en comunidad",
    ministries: ["Alabanza y Adoracion"]
  },
  {
    title: "Servicio",
    description: "Acompanamiento y bienvenida",
    ministries: ["Hospitalidad"]
  },
  {
    title: "Evangelismo",
    description: "Formacion y discipulado activo",
    ministries: ["Ensenanza"]
  },
  {
    title: "Discipulado",
    description: "Crecimiento generacional y vocacional",
    ministries: ["Ninos", "Jovenes"]
  }
];

export function MinistriesOrgSection() {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<MinistryGroup | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedMinistry) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedMinistry.galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedMinistry) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + selectedMinistry.galleryImages.length) % selectedMinistry.galleryImages.length
      );
    }
  };

  return (
    <section className="py-24 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1F6FD8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0E3465] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
          <h2 className="mb-6 text-gray-900">Pilares de nuestra Iglesia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada persona aporta su talento, pasion y llamado para servir en los diferentes ministerios que forman el cuerpo de Cristo en CFN. Juntos, edificamos una iglesia unida y comprometida para establecer el reino de Dios en la tierra.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ministryGroups.map((group, index) => (
            <motion.button
              key={group.title}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full text-left hover:shadow-xl transition-all"
              onClick={() => {
                setSelectedGroup(group);
                setSelectedMinistry(ministryDetails[group.ministries[0]]);
                setCurrentImageIndex(0);
              }}
            >
              <div className="mb-6">
                <h3 className="text-gray-900 mb-2">{group.title}</h3>
                <p className="text-sm text-gray-600">{group.description}</p>
              </div>
              <div className="text-sm text-gray-600">
                {group.ministries.map((ministryName, ministryIndex) => (
                  <div key={ministryName}>
                    {ministryName}{ministryIndex < group.ministries.length - 1 ? "," : ""}
                  </div>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedMinistry && selectedGroup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => {
            setSelectedMinistry(null);
            setSelectedGroup(null);
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-64 md:h-80 rounded-t-3xl overflow-hidden">
              <ImageWithFallback
                src={selectedMinistry.headerImage}
                alt={selectedMinistry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              <button
                onClick={() => {
                  setSelectedMinistry(null);
                  setSelectedGroup(null);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <X className="text-white" size={24} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: selectedMinistry.color }}
                  >
                    <selectedMinistry.icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-white">{selectedMinistry.title}</h2>
                </div>
                <p className="text-white/90 text-lg">{selectedMinistry.description}</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedGroup.ministries.map((ministryName) => {
                  const ministry = ministryDetails[ministryName];
                  const isActive = selectedMinistry.title === ministry.title;
                  return (
                    <button
                      key={ministry.title}
                      type="button"
                      onClick={() => {
                        setSelectedMinistry(ministry);
                        setCurrentImageIndex(0);
                      }}
                      className={`px-4 py-2 rounded-full border transition-all text-sm ${
                        isActive
                          ? "border-transparent text-white"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                      style={isActive ? { background: ministry.color } : undefined}
                    >
                      {ministry.title}
                    </button>
                  );
                })}
              </div>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">{selectedMinistry.fullDescription}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-gray-900 mb-6">Galeria</h3>
                <div className="relative">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={selectedMinistry.galleryImages[currentImageIndex]}
                      alt={`${selectedMinistry.title} - Imagen ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />

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

                  {selectedMinistry.galleryImages.length > 1 && (
                    <div className="flex gap-3 mt-4 justify-center">
                      {selectedMinistry.galleryImages.map((image, index) => (
                        <button
                          key={image}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? "border-[#1F6FD8] scale-110"
                              : "border-gray-200 hover:border-gray-300"
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

              <div className="mt-8 flex justify-center">
                <button
                  className="px-8 py-4 rounded-xl text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                  style={{ background: selectedMinistry.color }}
                >
                  Unete a {selectedMinistry.title}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
