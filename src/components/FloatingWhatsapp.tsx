import React from "react";
import { MessageCircle } from "lucide-react";
import WhatsAppUnitButton from "./WhatsAppUnitButton";

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Dynamic pulsing glow ring */}
      <span className="absolute w-16 h-16 rounded-full bg-emerald-500/35 animate-ping opacity-75 pointer-events-none" />
      <span className="absolute w-20 h-20 rounded-full bg-emerald-500/15 animate-pulse pointer-events-none" />

      {/* Main floating button */}
      <WhatsAppUnitButton
        message="Olá! Gostaria de solicitar um orçamento para minha empresa."
        className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 border border-emerald-400/20 cursor-pointer"
        id="floating-whatsapp-btn"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </WhatsAppUnitButton>
    </div>
  );
}
