import { motion } from "motion/react";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "20 de Noviembre 50, Coacalco, 55718 San Francisco Coacalco, Méx.",
    link: "https://maps.app.goo.gl/EtK8ZqyT7ofsQC7m6"
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+52 56 4828 3983",
    link: "tel:+525648283983"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contacto@cfn.org.mx",
    link: "mailto:contacto@cfn.org.mx"
  }
];

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/cfnac", color: "hover:bg-blue-600" },
  { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/cfn_coacalco/#", color: "hover:bg-pink-600" },
  { icon: Youtube, name: "YouTube", url: "https://www.youtube.com/@CfnOrgMxcoacalco/streams", color: "hover:bg-red-600" },
  { icon: MessageCircle, name: "WhatsApp", url: "https://wa.me/525648283983", color: "hover:bg-green-600" }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-wine-100 text-wine-700 rounded-full mb-4">
            Contáctanos
          </span>
          <h2 className="mb-6 text-gray-900">Nos Encantaría Conocerte</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas? ¿Quieres visitarnos? Estamos aquí para ti.
            <br />Ponte en contacto y sé parte de nuestra familia.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="mb-6 text-gray-900">Envíanos un mensaje</h3>
                <form
                  action="https://formsubmit.co/juan.coronapa@gmail.com"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_subject" value="Nuevo mensaje de contacto -CFN Coacalco" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F6FD8] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Apellido</label>
                      <input
                        type="text"
                        name="apellido"
                        placeholder="Tu apellido"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F6FD8] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F6FD8] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="+52 55 1234 5678"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F6FD8] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Mensaje</label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      placeholder="¿Cómo podemos ayudarte?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F6FD8] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="mb-1 text-gray-900 text-lg">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h4 className="mb-6 text-gray-900">Síguenos en Redes</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white group`}
                    >
                      <social.icon size={24} className="text-gray-600 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}