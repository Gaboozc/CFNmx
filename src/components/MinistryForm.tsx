import { motion } from "motion/react";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";

interface MinistryFormData {
  name: string;
  lastName: string;
  phone: string;
  communicationMethod: "call" | "message" | "whatsapp";
  isMember: boolean | null;
  membershipDuration: string;
  isDiscipled: boolean | null;
  isCurrentlyServing: boolean | null;
  servingDuration: string;
  servingArea: string;
}

interface MinistryFormProps {
  ministryName: string;
  onClose: () => void;
  areas?: string[];
}

export function MinistryForm({
  ministryName,
  onClose,
  areas = ["Alabanza", "Ensenanza", "Evangelismo", "Jóvenes", "Niños", "Servicio General"]
}: MinistryFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<MinistryFormData>({
    name: "",
    lastName: "",
    phone: "",
    communicationMethod: "whatsapp",
    isMember: null,
    membershipDuration: "",
    isDiscipled: null,
    isCurrentlyServing: null,
    servingDuration: "",
    servingArea: ""
  });

  const sendToWhatsApp = (additionalMessage: string = "") => {
    const formSummary = `
*Formulario de ${ministryName}*

Nombre: ${formData.name} ${formData.lastName}
Teléfono: ${formData.phone}
Preferencia de contacto: ${formData.communicationMethod}
${formData.isMember !== null ? `¿Miembro de la iglesia?: ${formData.isMember ? "Sí" : "No"}` : ""}
${formData.membershipDuration ? `Tiempo en la iglesia: ${formData.membershipDuration}` : ""}
${formData.isDiscipled !== null ? `¿Discipulado?: ${formData.isDiscipled ? "Sí" : "No"}` : ""}
${formData.isCurrentlyServing !== null ? `¿Sirviendo actualmente?: ${formData.isCurrentlyServing ? "Sí" : "No"}` : ""}
${formData.servingDuration ? `Tiempo sirviendo: ${formData.servingDuration}` : ""}
${formData.servingArea ? `Área de servicio: ${formData.servingArea}` : ""}
${additionalMessage}
    `.trim();

    const whatsappLink = `https://wa.me/525648283983?text=${encodeURIComponent(formSummary)}`;
    window.open(whatsappLink, "_blank");
    onClose();
  };

  const handleNext = () => {
    if (step === 1) {
      if (formData.isMember === false) {
        sendToWhatsApp("*Visitante interesado en el ministerio*");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (formData.isDiscipled === false) {
        sendToWhatsApp("*Usuario no discipulado - enviar para consolidación*");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (formData.isCurrentlyServing === false) {
        const leaders = {
          "Comunión": "Coordinador de Comunión",
          "Adoración": "Director de Adoración",
          "Servicio": "Coordinador de Servicio",
          "Evangelismo": "Líder de Evangelismo",
          "Discipulado": "Director de Discipulado"
        };
        sendToWhatsApp(`*Referir a ${leaders[ministryName as keyof typeof leaders] || "responsables de servicio"}*`);
        return;
      }
      setStep(4);
    } else if (step === 4) {
      sendToWhatsApp("*Formulario completado - usuario interesado en continuar sirviendo*");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {ministryName}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 mx-1 rounded-full ${
                  s <= step ? "bg-wine-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-2">Paso {step} de 4</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="space-y-4"
        >
          {/* Step 1: Basic Info + Member Status */}
          {step === 1 && (
            <>
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
                  Mejor manera de comunicarse *
                </label>
                <select
                  required
                  value={formData.communicationMethod}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      communicationMethod: e.target.value as "call" | "message" | "whatsapp"
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-500"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="call">Llamada</option>
                  <option value="message">Mensaje</option>
                </select>
              </div>

              <div className="pt-4">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  ¿Eres miembro de la iglesia? *
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isMember: true })}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                      formData.isMember === true
                        ? "bg-wine-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isMember: false })}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                      formData.isMember === false
                        ? "bg-wine-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Step 2: Membership Duration + Discipleship */}
          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Cuánto tiempo llevas en la iglesia? *
                </label>
                <select
                  required
                  value={formData.membershipDuration}
                  onChange={(e) =>
                    setFormData({ ...formData, membershipDuration: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-500"
                >
                  <option value="">Selecciona un período</option>
                  <option value="Menos de 6 meses">Menos de 6 meses</option>
                  <option value="6 meses - 1 año">6 meses - 1 año</option>
                  <option value="1 - 2 años">1 - 2 años</option>
                  <option value="2 - 5 años">2 - 5 años</option>
                  <option value="Más de 5 años">Más de 5 años</option>
                </select>
              </div>

              <div className="pt-4">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  ¿Estás discipulado? *
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isDiscipled: true })}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                      formData.isDiscipled === true
                        ? "bg-wine-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isDiscipled: false })}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                      formData.isDiscipled === false
                        ? "bg-wine-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Step 3: Currently Serving */}
          {step === 3 && (
            <>
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  Información recopilada: {formData.name} {formData.lastName}
                </p>
              </div>

              <div className="pt-4">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  ¿Actualmente estás sirviendo? *
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isCurrentlyServing: true })}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                      formData.isCurrentlyServing === true
                        ? "bg-wine-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isCurrentlyServing: false })}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                      formData.isCurrentlyServing === false
                        ? "bg-wine-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Step 4: Serving Duration and Area */}
          {step === 4 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Cuánto tiempo llevas sirviendo? *
                </label>
                <select
                  required
                  value={formData.servingDuration}
                  onChange={(e) =>
                    setFormData({ ...formData, servingDuration: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-500"
                >
                  <option value="">Selecciona un período</option>
                  <option value="Menos de 6 meses">Menos de 6 meses</option>
                  <option value="6 meses - 1 año">6 meses - 1 año</option>
                  <option value="1 - 2 años">1 - 2 años</option>
                  <option value="2 - 5 años">2 - 5 años</option>
                  <option value="Más de 5 años">Más de 5 años</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿En qué área estás sirviendo? *
                </label>
                <select
                  required
                  value={formData.servingArea}
                  onChange={(e) =>
                    setFormData({ ...formData, servingArea: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine-500"
                >
                  <option value="">Selecciona un área</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-wine-500 to-wine-700 hover:from-wine-600 hover:to-wine-800 text-white font-bold py-3 rounded-lg transition-all duration-300 mt-6 flex items-center justify-center gap-2"
          >
            {step === 4 ? "Enviar por WhatsApp" : "Continuar"}
            <ChevronRight size={20} />
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
