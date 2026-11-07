import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_UNITS } from "../config/locations";

interface WhatsAppUnitButtonProps {
  message: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  id?: string;
}

export default function WhatsAppUnitButton({
  message,
  children,
  className = "",
  ariaLabel = "Escolher unidade para falar no WhatsApp",
  id
}: WhatsAppUnitButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (phone: string) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" id={id} onClick={() => setIsOpen(true)} className={className} aria-label={ariaLabel}>
        {children}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-labelledby="whatsapp-unit-title">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#161619] p-6 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 id="whatsapp-unit-title" className="text-xl font-bold text-white">Qual unidade deseja contatar?</h2>
                <p className="mt-1 text-sm text-slate-400">Escolha a unidade para iniciar a conversa no WhatsApp.</p>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Fechar seleção de unidade">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              {WHATSAPP_UNITS.map((unit) => (
                <button
                  type="button"
                  key={unit.id}
                  onClick={() => openWhatsApp(unit.phone)}
                  className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-colors hover:border-brand-yellow/50 hover:bg-brand-yellow/10"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span>
                    <span className="block font-bold text-white">{unit.name}</span>
                    <span className="block text-sm text-slate-400">{unit.displayPhone}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
