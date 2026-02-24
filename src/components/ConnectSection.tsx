import { motion } from "motion/react";
import { Instagram, Video, MessageCircle, MapPin, Facebook } from "lucide-react";

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

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(90deg, #1877f2, #145dc2)" }}
              >
                <Facebook className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-gray-900">Facebook</h3>
                <p className="text-sm text-gray-600">Comunidad y avisos importantes</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-[420px]"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcfnac%2F&tabs=timeline&width=500&height=420&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                title="Facebook CFN Coacalco"
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
            {/* WhatsApp */}
            <a
              href="https://wa.me/525648283983"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 text-white rounded-xl transition-all bg-green-600 hover:bg-green-700"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>

            {/* Instagram DM */}
            <a
              href="https://www.instagram.com/direct/new/?username=cfn_coacalco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 text-white rounded-xl transition-all bg-[#d62976] hover:bg-[#b81f63]"
            >
              <Instagram size={20} />
              <span>Instagram DM</span>
            </a>

            {/* Facebook DM - Special Design */}
            <a
              href="https://m.me/cfnac?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-zinc-200 flex gap-2 items-center justify-center bg-blue-600 px-4 py-3 rounded-xl font-medium text-sm hover:bg-blue-700 transition-all ease-in duration-200"
            >
              <svg className="w-6 fill-zinc-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
              </svg>
              <span>Mensaje a Facebook</span>
            </a>

            {/* Ubicacion */}
            <a
              href="https://maps.app.goo.gl/EtK8ZqyT7ofsQC7m6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 text-white rounded-xl transition-all bg-[#9d4d5f] hover:bg-[#7d3d4c]"
            >
              <MapPin size={20} />
              <span>Ubicacion</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
