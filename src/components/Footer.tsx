import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    /* iglesia: [
      { name: "Quiénes Somos", href: "#about" },
      { name: "Nuestra Historia", href: "#history" },
      { name: "Liderazgo", href: "#leadership" },
      { name: "Declaración de Fe", href: "#declaration" },
    ],
    ministerios: [
      { name: "Niños", href: "#ministries-" },
      { name: "Jóvenes", href: "#ministries" },
      { name: "Familias", href: "#ministries" },
      { name: "Alabanza", href: "#ministries" },
    ],
    recursos: [
      { name: "Predicaciones", href: "#sermons" },
      { name: "Eventos", href: "#events" },
      { name: "Blog", href: "#" },
      { name: "Podcast", href: "#" },
    ], */
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div
                className="w-44 h-14 rounded-xl flex items-center justify-center overflow-hidden gap-1 p-2" // Añadido overflow-hidden, p-1 y gap-1 para espacio y orden
                style={{
                  background:
                    "linear-gradient(90deg, #1F6FD8, #0E3465)",
                }}
              >
                {/* Primera Imagen: Ocupa la mitad izquierda */}
                <img
                  src="img/logo.webp"
                  alt="SímboloCFN"
                  className="w-full h-full object-contain" // w-6 para que quepa la segunda
                />
                {/* Segunda Imagen: Ocupa la mitad derecha */}
                <img
                  src="img/logo-b.webp"
                  alt="IdentificadorCFN"
                  className="w-full h-full object-contain" // w-6 para que quepa la primera
                />
              </div>
              <div>
                <div className="leading-tight">
                  Centro Familiar
                </div>
                <div className="text-sm opacity-80">
                  para las Naciones
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Una familia con propósito, transformando vidas y
              edificando comunidad a través del amor de Cristo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/cfnac"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/cfn_coacalco/#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@CfnOrgMxcoacalco/streams"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://wa.me/525648283983"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links - Iglesia */}
          {/* <div>
            <h4 className="mb-4 text-lg">Iglesia</h4>
            <ul className="space-y-2.5">
              {footerLinks.iglesia.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#1F6FD8] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Links - Ministerios */}
          {/* <div>
            <h4 className="mb-4 text-lg">Ministerios</h4>
            <ul className="space-y-2.5">
              {footerLinks.ministerios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#1F6FD8] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Links - Recursos */}
          {/* <div>
            <h4 className="mb-4 text-lg">Recursos</h4>
            <ul className="space-y-2.5">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#1F6FD8] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-white/10 mb-8">
          <div className="flex items-start gap-3">
            <MapPin
              size={20}
              className="text-[#1F6FD8] mt-1 flex-shrink-0"
            />
            <div>
              <div className="text-sm text-gray-400">
                20 de Noviembre 50, Coacalco, 55718
              </div>
              <div className="text-sm text-gray-400">
                San Francisco Coacalco, Méx.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone
              size={20}
              className="text-[#1F6FD8] mt-1 flex-shrink-0"
            />
            <div>
              <a
                href="tel:+525648283983"
                className="text-sm text-gray-400 hover:text-[#1F6FD8] transition-colors"
              >
                +52 56 4828 3983
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail
              size={20}
              className="text-[#1F6FD8] mt-1 flex-shrink-0"
            />
            <div>
              <a
                href="mailto:contacto@cfn.org.mx"
                className="text-sm text-gray-400 hover:text-[#1F6FD8] transition-colors"
              >
                contacto@cfn.org.mx
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {currentYear} Centro Familiar para las Naciones
              Coacalco. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <Link
                to="/aviso-privacidad"
                className="hover:text-[#1F6FD8] transition-colors"
              >
                Privacidad
              </Link>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-[#1F6FD8] italic text-lg">
            "Y haré de ti una nación grande, y te bendeciré, y
            engrandeceré tu nombre, y serás bendición. Bendeciré
            a los que te bendijeren, y a los que te maldijeren
            maldeciré; y serán benditas en ti todas las familias
            de la tierra. Gen 12:2-3"
          </p>
        </div>
      </div>
    </footer>
  );
}