import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/img/principal/p.MOV"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/70 via-blue-600/60 to-blue-700/80"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto">
            Centro Familiar para las Naciones
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Coacalco
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('sermons')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass border-white/30 text-white rounded-full flex items-center gap-2 hover:bg-white/20 transition-all"
            >
              <Play size={20} fill="white" />
              Ver en vivo
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-2 bg-white/70 rounded-full"></div>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
