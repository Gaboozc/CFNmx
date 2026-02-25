import { motion } from "motion/react";
import { Instagram, Video, MapPin, Facebook } from "lucide-react";

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

        <div className="grid lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
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
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square min-h-[800px]">
              <iframe
                className="w-full h-full"
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
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square min-h-[800px]">
              <iframe
                className="w-full h-full"
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
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square min-h-[800px]">
              <iframe
                className="w-full h-full"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcfnac%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
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
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Contáctanos</h3>
            <p className="text-lg text-gray-600">Elige tu canal preferido para comunicarte con nosotros.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/525648283983"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-green-500 hover:bg-green-600 text-white shadow-xl transition-all duration-300"
            >
              <svg viewBox="0 0 16 16" className="w-16 h-16 mb-4" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <span className="text-xl font-bold text-center">WhatsApp</span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/direct/new/?username=cfn_coacalco"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl text-white shadow-xl transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
              }}
            >
              <svg fill="white" viewBox="0 0 448 512" className="w-16 h-16 mb-4 relative z-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <span className="text-xl font-bold text-center relative z-10">Instagram</span>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://m.me/cfnac?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl text-white shadow-xl transition-all duration-300 group relative overflow-hidden"
              style={{
                backgroundColor: '#0165e1'
              }}
            >
              <svg viewBox="0 0 24 24" className="w-16 h-16 mb-4 relative z-10" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
              </svg>
              <span className="text-xl font-bold text-center relative z-10">Facebook</span>
            </motion.a>

            {/* Ubicación */}
            <motion.a
              href="https://maps.app.goo.gl/EtK8ZqyT7ofsQC7m6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-red-500 hover:bg-red-600 text-white shadow-xl transition-all duration-300"
            >
              <MapPin className="w-16 h-16 mb-4" />
              <span className="text-xl font-bold text-center">Ubicación</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
