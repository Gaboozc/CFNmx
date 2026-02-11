import { motion } from "motion/react";
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";

interface PrivacyPageProps {
  onBack: () => void;
}

const sections = [
  {
    id: 1,
    icon: Shield,
    title: "Identidad y Domicilio del Responsable",
    content: `La identidad del Responsable es la Iglesia Cristiana Evangélica Centro Familiar para las Naciones, Asociación Religiosa, con domicilio en calle 20 de Noviembre #50, esquina Melchor Ocampo, colonia San Francisco Coacalco, municipio de Coacalco de Berriozábal, Estado de México, código postal 55718.`
  },
  {
    id: 2,
    icon: FileText,
    title: "Datos Personales que serán sometidos a Tratamiento",
    content: `El Responsable sólo recibirá del Titular, de manera directa, los datos de identificación que se enlistan a continuación:
    
    • Nombre completo
    • Correo electrónico
    • Teléfono de contacto, ya sea de línea fija o número celular
    • Fecha de nacimiento
    • Profesión y/o Ocupación
    • Edad
    • Estado Civil`,
    list: true
  },
  {
    id: 3,
    icon: Lock,
    title: "Datos Personales Sensibles",
    content: `De acuerdo a lo estipulado en la fracción VI del artículo 3 de la Ley, un dato personal sensible es aquel que revele aspectos de creencias religiosas y al ser el Responsable una Asociación Religiosa y los Titulares son congregantes de ésta, todos los datos que se proporcionen serán considerados como sensibles, por lo cual necesitamos con su consentimiento expreso, el cual será requerido al momento de recabar dichos datos.
    
    Por lo cual, el Responsable protegerá de cualquier mal uso, pérdida de información, daño, alteración, destrucción, acceso indebido o tratamiento no autorizado con medidas de seguridad administrativas, técnicas y físicas.`
  },
  {
    id: 4,
    icon: Eye,
    title: "Finalidad del Tratamiento de los Datos Personales",
    content: `Los datos proporcionados por los Titulares sólo serán utilizados para dar avisos como los que se enlistan a continuación:
    
    • Establecer contacto con congregantes
    • Promocionar talleres, conferencias, cursos, congresos, dentro y fuera del domicilio deCFN
    • Consolidación
    • Consejerías
    • Actividades filantrópicas
    • Solicitar apoyo para viajes misioneros
    • Bautismos
    • Estudios bíblicos
    • Campamentos
    
    Los avisos se podrán realizar mediante correo electrónico, llamada convencional y/o mensaje de texto por la aplicación conocida como whatsapp.`
  },
  {
    id: 5,
    icon: Shield,
    title: "Medios para limitar el uso o divulgación de datos",
    content: `El Titular puede limitar el uso y divulgación de sus datos personales, así como la recepción de los comunicados señalados en el punto anterior, en cualquier momento con la simple manifestación por escrito al cual deberá manifestar el Titular lo siguiente:
    
    • Nombre, domicilio o algún otro medio de contacto para notificar la respuesta a su solicitud
    • Documento mediante el cual acredite ser el Titular y/o Representante Legal del Titular
    • La manifestación clara y precisa respecto de los datos que solicita limitar su uso u difusión
    
    Los medios por los que podrá realizar dicha solicitud serán por mensaje de texto por la aplicación conocida como whatsapp al número de contacto 55 4948 9384, o con una llamada a la línea fija número (0155) 1542 0105, o bien mediante correo electrónico a la dirección cefamc1@hotmail.com, o si lo prefiere se deberá de presentar de manera física en el domicilio del Responsable en el Área de Membresía.`
  },
  {
    id: 6,
    icon: FileText,
    title: "Derechos ARCO",
    content: `El Titular tiene en todo momento la facultad de ejercer el derecho de Acceder, Rectificar, Cancelar y Oponerse sobre sus datos personales.
    
    Los Derechos ARCO consisten en lo siguiente:
    • Acceso: Implica conocer en todo momento los datos que posee el Responsable, así como el Aviso de privacidad correspondiente.
    • Rectificación: Es el derecho del Titular de modificar alguno de sus datos personales en caso de que sea inexacto o incompleto.
    • Cancelación: Es la facultad del Titular de requerir, cuando así lo considere, la cancelación de sus datos, por lo cual sus datos personales entrarán en un periodo de bloqueo para posteriormente ser eliminados de la base de datos del Responsable.
    • Oposición: En todo momento podrá objetar el tratamiento de los datos personales.
    
    El procedimiento para ejercer los Derechos ARCO será mediante escrito en el cual deberá manifestar el Titular lo siguiente:
    • Nombre, domicilio o algún otro medio de contacto para notificar la respuesta a su solicitud
    • Documento mediante el cual acredite ser el Titular y/o Representante Legal del Titular
    • La manifestación clara y precisa respecto del Derecho ARCO que desea ejercer y los datos personales que serán objeto de dicha solicitud.
    
    Los medios por los que podrá realizar dicha solicitud serán por mensaje de texto por la aplicación conocida como whatsapp al número de contacto 55 4948 9384, o con una llamada a la línea fija número (0155) 1542 0105, o bien mediante correo electrónico a la dirección contactocfnc@gmail.com, o si lo prefiere se deberá de presentar de manera física en el domicilio del Responsable en el Área de Membresía.`
  },
  {
    id: 7,
    icon: Lock,
    title: "Transferencia de Datos",
    content: `Se hace del conocimiento del Titular que sus datos personales podrán ser transferidos al Centro Familiar para las Naciones, A.C., la cual es controlada por la Iglesia Cristiana Evangélica Centro Familiar para las Naciones, Asociación Religiosa, la cual opera bajo los mismos niveles de confidencialidad y responsabilidad del Responsable.
    
    El Responsable no transfiere sus datos personales a ningún tercero para el cumplimiento de sus actividades.`
  },
  {
    id: 8,
    icon: Eye,
    title: "Uso de Cookies",
    content: `En cumplimiento de lo establecido por el artículo 14, último párrafo del Reglamento de la Ley, el Responsable puede utilizar “Cookies” para facilitar la personalización de la visita a nuestra web por el usuario. Una “Cookie” es un pequeño archivo que se almacena en el ordenador del usuario y nos permite reconocerle. El conjunto de “Cookies” nos ayuda a mejorar la calidad de nuestra web, permitiéndonos controlar qué páginas encuentran nuestros usuarios útiles y cuáles no.
    
    El Titular podrá aceptar o rechazar las “Cookies”. La mayor parte de los exploradores web aceptan automáticamente las cookies. No obstante lo anterior, el usuario puede modificar el explorador para rechazarlas.`
  },
  {
    id: 9,
    icon: Shield,
    title: "Medidas de Seguridad",
    content: `El Responsable en todo momento resguarda los datos personales otorgados con medidas de seguridad administrativas, técnicas y físicas suficientes para brindar la seguridad e inviolabilidad de los datos personales.
    
    El Responsable cuenta con personal capacitado, de amplios valores morales y comprometido con la protección de los datos personales otorgados por los Titulares.
    
    En el remoto caso de que exista alguna situación de riesgo sobre los datos personales, el Responsable aplicará de forma inmediata el procedimiento adecuado para su solución y de igual forma notificará dicha situación a los Titulares.`
  }
];

export function PrivacyPage({ onBack }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #1F6FD8, #0E3465)' }}></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onBack}
            className="flex items-center gap-2 text-white mb-8 hover:gap-3 transition-all duration-300 group"
          >
            {/* <ArrowLeft size={24} className="group-hover:scale-110 transition-transform" />
            <span>Volver al inicio</span> */}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="text-white" size={48} />
              <h1 className="text-white">Aviso de Privacidad</h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Iglesia Cristiana Evangélica Centro Familiar para las Naciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gray-600">
              En atención a lo estipulado en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
                    <section.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-4">{section.title}</h3>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Grabaciones Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
                  <Eye className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-4">Grabaciones y Transmisiones</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hacemos de su conocimiento queCFN realiza grabaciones de audio, video y toma de fotografías, así como transmisiones en vivo de las reuniones dominicales y son transmitidas vía:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-blue-600">
                    <li><a href="https://www.facebook.com/cfnac" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook:CFNac</a></li>
                    <li><a href="https://www.instagram.com/cfn_coacalco" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram:CFN_coacalco</a></li>
                    <li><a href="https://www.youtube.com/@CfnOrgMxcoacalco/streams" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube: @CfnOrgMxcoacalco</a></li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Por lo cual, al ingresar al domicilio deCFN usted podrá ser captado en algún medio de grabación manifestado, en caso de no manifestar su oposición, acepta de manera tácita queCFN podrá ocupar dicho material.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Changes Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
                  <FileText className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-4">Cambios al Aviso de Privacidad</h3>
                  <p className="text-gray-600 leading-relaxed">
                    El Responsable podrá realizar modificaciones al Aviso y será comunicado a los Titulares a través de la página de internet https://cfn.org.mx y/o mediante la cuenta de Facebook deCFN y/o mediante aviso general en alguna de las reuniones celebradas enCFN.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <Shield className="mx-auto mb-4 text-[#1F6FD8]" size={48} />
                <h3 className="text-gray-900 mb-3">
                  ¿Tienes Dudas sobre tus Datos?
                </h3>
                <p className="text-gray-600 text-lg">
                  Si tienes preguntas sobre este aviso de privacidad o deseas ejercer tus derechos ARCO, contáctanos:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="mailto:contacto@cfn.org.mx"
                  className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">contacto@cfn.org.mx</p>
                  </div>
                </a>

                <a
                  href="tel:+525648283983"
                  className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600 text-sm">+52 56 4828 3983</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
