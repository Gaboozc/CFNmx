import { motion } from "motion/react";
import { Heart, Building2, Copy, Check } from "lucide-react";
import { useState } from "react";

export function DonationSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bankDetails = {
    bank: "BBVA Bancomer",
    clabe: "012 180 00123431649 3",
    account: "012 343 1649",
    client: "Iglesia Cristiana Evangélica Centro Familiar para las Naciones",
    concept: "Diezmo u Ofrenda"
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Glassmorphism */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1F6FD8, #0E3465, #9d4d5f)' }}></div>
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 text-white"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={40} fill="white" className="text-white" />
            </div>
            <h2 className="mb-6">Ofrenda en el Reino</h2>
            <p className="text-xl opacity-95 max-w-3xl mx-auto">
              Tu generosidad permite que más vidas sean transformadas,
              familias restauradas y comunidades impactadas con el amor de Cristo.
            </p>
          </motion.div>

          {/* Main Donation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-dark rounded-3xl p-8 md:p-12 mb-12"
          >
            <div className="grid md:grid-cols-1 gap-8 items-center">
              <div className="text-white text-center">
                <h3 className="mb-4">Haz la diferencia hoy</h3>
                <p className="opacity-90 mb-6 max-w-2xl mx-auto">
                  Cada ofrenda, sin importar el monto, ayuda a expandir el Reino
                  y transformar vidas en nuestra comunidad y más allá.
                </p>
                <ul className="space-y-3 opacity-90 inline-block text-left">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#1F6FD8] text-xs">✓</span>
                    </div>
                    <span>Sostenimiento del ministerio y sus programas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#1F6FD8] text-xs">✓</span>
                    </div>
                    <span>Apoyo a familias y comunidad local</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#1F6FD8] text-xs">✓</span>
                    </div>
                    <span>Misiones y alcance evangelístico</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Bank Transfer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-dark rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-white mb-2">Transferencia Bancaria</h3>
              <p className="text-white/80">Datos para realizar tu ofrenda</p>
            </div>

            <div className="grid gap-6 max-w-2xl mx-auto">
              {/* Bank Name */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-sm text-white mb-1">Banco</p>
                <p className="text-xl font-semibold text-white">{bankDetails.bank}</p>
              </div>

              {/* Client Name */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-sm text-white mb-1">Cliente / Beneficiario</p>
                <p className="text-lg font-medium text-white leading-snug">{bankDetails.client}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* CLABE */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 relative group">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-white mb-1">Cuenta CLABE</p>
                      <p className="text-lg font-mono text-white tracking-wide">{bankDetails.clabe}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankDetails.clabe, 'clabe')}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
                      title="Copiar CLABE"
                    >
                      {copiedField === 'clabe' ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                {/* Account Number */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 relative group">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-white mb-1">Número de Cuenta</p>
                      <p className="text-lg font-mono text-white tracking-wide">{bankDetails.account}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankDetails.account, 'account')}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
                      title="Copiar Cuenta"
                    >
                      {copiedField === 'account' ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Concept */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-sm text-white mb-1">Concepto</p>
                <p className="text-lg font-medium text-white">{bankDetails.concept}</p>
              </div>
            </div>

            {/* Trust Message */}
            <div className="text-center mt-10 text-white text-sm">
              <p>Somos una organización registrada sin fines de lucro.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}