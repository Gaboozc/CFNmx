import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

interface FormData {
  name: string;
  lastName: string;
  phone: string;
  communicationMethod: "whatsapp" | "phone" | "message";
}

export function DondeTeCuentrasSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    phone: "",
    communicationMethod: "whatsapp"
  });

  const pillars = [
    {
      title: "Conversión",
      description: "Inicia tu caminar con Jesús",
      icon: "🙏",
      gradient: "linear-gradient(135deg, #1D4ED8, #06B6D4)"
    },
    {
      title: "Comunión",
      description: "Crece en comunidad con otros creyentes",
      icon: "👥",
      gradient: "linear-gradient(135deg, #7C3AED, #EC4899)"
    },
    {
      title: "Bautismo",
      description: "Sella tu compromiso con Cristo",
      icon: "💧",
      gradient: "linear-gradient(135deg, #16A34A, #10B981)"
    },
    {
      title: "Servicio",
      description: "Sirve con tus dones y talentos",
      icon: "❤️",
      gradient: "linear-gradient(135deg, #DC2626, #F97316)"
    },
    {
      title: "Ministerios",
      description: "Múltiples formas de impactar",
      icon: "✨",
      gradient: "linear-gradient(135deg, #EAB308, #F59E0B)"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola, mi nombre es ${formData.name} ${formData.lastName}. Me gustaría información sobre cómo integrarme a la comunidad. Mi teléfono es: ${formData.phone}. Preferencia de contacto: ${formData.communicationMethod}`;
    const whatsappLink = `https://wa.me/525648283983?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink, "_blank");
    setShowForm(false);
    setFormData({
      name: "",
      lastName: "",
      phone: "",
      communicationMethod: "whatsapp"
    });
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
          <span className="inline-block px-4 py-1.5 bg-wine-100 text-wine-700 rounded-full mb-4">
            Tu Camino
          </span>
          <h2 className="mb-6 text-gray-900">¿Dónde Te Encuentras?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada etapa del caminar cristiano es importante. Descubre dónde estás y cómo podemos acompañarte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-6 shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300 text-white"
              style={{ background: pillar.gradient }}
              onClick={() => setShowForm(true)}
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-white/90">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Quiero que me llamen
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-500"
                    placeholder="Tu apellido"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-500"
                    placeholder="Tu teléfono"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mejor manera de comunicarse
                  </label>
                  <select
                    value={formData.communicationMethod}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        communicationMethod: e.target.value as "whatsapp" | "phone" | "message"
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-500"
                  >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="phone">Llamada telefónica</option>
                    <option value="message">Mensaje de texto</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-wine-500 to-wine-700 hover:from-wine-600 hover:to-wine-800 text-white font-bold py-3 rounded-lg transition-all duration-300 mt-6"
                >
                  Enviar por WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
