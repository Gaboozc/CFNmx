import { motion } from "motion/react";
import { useState } from "react";
import {
  Music,
  Users,
  BookOpen,
  Zap,
  Heart
} from "lucide-react";
import { MinistryForm } from "./MinistryForm";

interface MinistryCard {
  icon: any;
  title: string;
  description: string;
  gradient: string;
}

const ministryCards: MinistryCard[] = [
  {
    icon: Music,
    title: "Adoración",
    description: "Celebración que conecta corazones con el cielo",
    gradient: "linear-gradient(135deg, #1D4ED8, #06B6D4)"
  },
  {
    icon: Users,
    title: "Comunión",
    description: "Crece en comunidad con otros creyentes",
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)"
  },
  {
    icon: Heart,
    title: "Servicio",
    description: "Sirve con tus dones y talentos",
    gradient: "linear-gradient(135deg, #DC2626, #F97316)"
  },
  {
    icon: Zap,
    title: "Evangelismo",
    description: "Comparte el mensaje de salvación",
    gradient: "linear-gradient(135deg, #EAB308, #F59E0B)"
  },
  {
    icon: BookOpen,
    title: "Discipulado",
    description: "Formación bíblica que transforma",
    gradient: "linear-gradient(135deg, #16A34A, #10B981)"
  }
];

export function MinistriesOrgSection() {
  const [selectedMinistry, setSelectedMinistry] = useState<string | null>(null);

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
            Organización
          </span>
          <h2 className="mb-6 text-gray-900">Pilares de Nuestra Iglesia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada persona aporta su talento, pasión y llamado para servir en los diferentes ministerios que forman el cuerpo de Cristo. Juntos, edificamos una iglesia unida y comprometida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ministryCards.map((ministry, index) => (
            <motion.button
              key={ministry.title}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMinistry(ministry.title)}
              className="rounded-2xl p-6 shadow-lg text-white h-full hover:shadow-xl transition-all transform hover:scale-105"
              style={{ background: ministry.gradient }}
            >
              <ministry.icon size={32} className="mb-4" />
              <h3 className="text-lg font-bold mb-2">{ministry.title}</h3>
              <p className="text-sm text-white/90">{ministry.description}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedMinistry && (
        <MinistryForm
          ministryName={selectedMinistry}
          onClose={() => setSelectedMinistry(null)}
          areas={["Alabanza", "Enseñanza", "Evangelismo", "Jóvenes", "Niños", "Servicio General", "Hosptalidad"]}
        />
      )}
    </section>
  );
}
