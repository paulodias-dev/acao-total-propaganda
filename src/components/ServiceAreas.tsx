import React from "react";
import { ArrowRight, Building2, MapPin, Radio } from "lucide-react";
import { motion } from "motion/react";
import { SERVICE_REGIONS } from "../config/locations";

interface ServiceAreasProps {
  onNavigate: (page: string) => void;
}

const regionIcons = {
  goias: Building2,
  brasilia: MapPin,
  sergipe: Radio
};

export default function ServiceAreas({ onNavigate }: ServiceAreasProps) {
  return (
    <section id="areas-atendidas" className="relative py-24 px-6 bg-[#0B0B0E] border-b border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[260px] bg-brand-yellow/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <MapPin className="w-3.5 h-3.5" />
            ÁREAS DE ATUAÇÃO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
            Presença local para campanhas regionais
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg leading-relaxed">
            Atuamos em Goiás, Brasília/DF e Sergipe com estrutura para planejar, executar e acompanhar sua campanha de ponta a ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICE_REGIONS.map((region, index) => {
            const Icon = regionIcons[region.id];

            return (
              <motion.article
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-brand-yellow/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    {region.id === "goias" ? "Base principal" : region.id === "sergipe" ? "Base Nordeste" : "Expansão regional"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-display">{region.name}</h3>
                <p className="text-xs text-brand-yellow font-semibold mb-3">{region.operationalNote}</p>
                <p className="text-sm text-slate-400 leading-relaxed min-h-[66px]">{region.description}</p>

                <button
                  type="button"
                  onClick={() => onNavigate("contato")}
                  className="mt-6 pt-4 border-t border-white/10 w-full flex items-center gap-1.5 text-xs font-bold text-white hover:text-brand-yellow transition-colors cursor-pointer"
                >
                  Solicitar atendimento
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.article>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-slate-500 mt-8">
          A disponibilidade de frota e o formato da operação são confirmados conforme a cidade, o período e o objetivo da campanha.
        </p>
      </div>
    </section>
  );
}
