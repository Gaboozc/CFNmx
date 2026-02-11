import { motion } from "motion/react";
import { Instagram, Video, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const contactButtons = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/525648283983",
    style: "bg-green-600 hover:bg-green-700"
  },
  {
    icon: Phone,
    label: "Llamar",
    href: "tel:+525648283983",
    style: "bg-[#1F6FD8] hover:bg-[#1657b0]"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:contacto@cfn.org.mx",
    style: "bg-[#0E3465] hover:bg-[#0a2549]"
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    href: "https://maps.app.goo.gl/EtK8ZqyT7ofsQC7m6",
    style: "bg-[#9d4d5f] hover:bg-[#7d3d4c]"
  }
];

export function ConnectSection() {
  return (
    <section className="py-24 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-wine-100 text-wine-700 rounded-full mb-4">
            Conecta
          </span>
          <h2 className="mb-6 text-gray-900">Hub Social</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sigue nuestras redes y mantente al tanto de cada actividad. Estamos cerca para escucharte y ayudarte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(90deg, #1F6FD8, #0E3465)" }}
              >
                <Instagram className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-gray-900">Instagram</h3>
                <p className="text-sm text-gray-600">Historias y contenido de la comunidad</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-[420px]"
                src="https://www.instagram.com/cfn_coacalco/embed"
                title="Instagram CFN Coacalco"
                loading="lazy"
                allow="encrypted-media"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(90deg, #1F6FD8, #0E3465)" }}
              >
                <Video className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-gray-900">TikTok</h3>
                <p className="text-sm text-gray-600">Clips y momentos destacados</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-[420px]"
                src="https://www.tiktok.com/embed/@cfn_coacalco"
                title="TikTok CFN Coacalco"
                loading="lazy"
                allow="encrypted-media"
              ></iframe>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
        >
          <h3 className="text-gray-900 mb-6 text-center">Botones de Contacto</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={`flex items-center justify-center gap-2 px-4 py-3 text-white rounded-xl transition-all ${button.style}`}
              >
                <button.icon size={20} />
                <span>{button.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
