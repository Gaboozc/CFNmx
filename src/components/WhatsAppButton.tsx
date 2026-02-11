import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/525648283983"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-4 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            style={{ backgroundColor: '#25D366' }}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />
        </motion.a>
    );
}
