import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Megaphone,
  Radio,
  TrendingUp,
  Mic,
  Users,
  Volume2,
  Calendar,
  Trophy,
  Tv,
  MapPin,
  BarChart3
} from "lucide-react";
import { ENABLE_SMART_PROPOSAL_SIMULATOR } from "../config/features";
import ServiceAreas from "../components/ServiceAreas";

interface HomeViewProps {
  onNavigate: (page: string, subServiceId?: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  // Counters for the stats
  const stats = [
    {
      value: "15+ Anos",
      label: "Experiência no Mercado",
      desc: "Atuação em Goiás, Brasília/DF e Sergipe",
      icon: Calendar,
      color: "text-brand-yellow"
    },
    {
      value: "500+ Ações",
      label: "Eventos Realizados",
      desc: "Sucessos marcantes e campanhas",
      icon: Trophy,
      color: "text-white"
    },
    {
      value: "98%",
      label: "Fidelidade de Clientes",
      desc: "Parcerias sólidas de longo prazo",
      icon: Users,
      color: "text-brand-yellow"
    }
  ];

  // Quick overview of core services to display on Home
  const featuredServices = [
    {
      id: "carro-som",
      title: "Carros de Som & Mini-Trios",
      desc: "Frotas acústicas preparadas para campanhas em Goiás, Brasília/DF e Sergipe, com som cristalino e sem distorção.",
      icon: Megaphone,
      badge: "Campanhas Diárias"
    },
    {
      id: "radio-interna",
      title: "Rádio Interna Corporativa",
      desc: "Sua própria rádio no supermercado ou magazine para divulgar ofertas e reter clientes no ponto de venda.",
      icon: Radio,
      badge: "Aumento de Vendas"
    },
    {
      id: "tv-indoor",
      title: "TV Indoor & Mídia no PDV",
      desc: "Conteúdo visual estratégico em telas de lojas, clínicas e ambientes de alto fluxo para influenciar a decisão de compra.",
      icon: Tv,
      badge: "Mídia no PDV"
    },
    {
      id: "trafego-pago",
      title: "Instagram para Comércio",
      desc: "Criamos artes profissionais, conteúdos estratégicos e anúncios locais para atrair clientes direto para o WhatsApp.",
      icon: TrendingUp,
      badge: "Artes + Vendas"
    },
    {
      id: "locucao-spot",
      title: "Gravação de Spots & Locutores",
      desc: "Produção rápida em estúdio com locutores profissionais e vozes vendedoras para rádio, TV e frentes de loja.",
      icon: Mic,
      badge: "Estúdio de Elite"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center pt-36 pb-20 px-6 overflow-hidden bg-midnight-carbon"
      >
        {/* Glow orbs background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-brand-yellow/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-brand-yellow/3 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-white/3 rounded-full blur-[80px] pointer-events-none" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-20 items-center">
          {/* Conversion message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
            id="hero-badge"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-7 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nosso foco é resultado imediato.</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.02] mb-7 font-display"
              id="hero-title"
            >
              Sua marca nas ruas, onde o seu cliente está.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-9 font-light"
              id="hero-subtitle"
            >
              Propaganda volante, ativações comerciais e mídia no ponto de venda em Goiás, Brasília/DF e Sergipe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              id="hero-actions"
            >
              <motion.button
                type="button"
                onClick={() => onNavigate(ENABLE_SMART_PROPOSAL_SIMULATOR ? "orcamento" : "contato")}
                whileHover={shouldAnimate ? { scale: 1.04 } : undefined}
                whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-brand-yellow hover:bg-[#ffd633] text-black text-sm font-extrabold tracking-wide shadow-xl shadow-brand-yellow/10 hover:shadow-brand-yellow/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Solicitar orçamento
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => document.getElementById("areas-atendidas")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={shouldAnimate ? { scale: 1.04 } : undefined}
                whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-transparent border border-white/20 text-white text-sm font-semibold tracking-wide backdrop-blur-md hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Ver áreas atendidas
                <MapPin className="w-4 h-4 text-brand-yellow" />
              </motion.button>
            </motion.div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />15+ anos de experiência</span>
              <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />500+ campanhas</span>
              <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />3 regiões de atuação</span>
            </div>
          </motion.div>

          {/* Animated advertising campaign visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative min-h-[390px] sm:min-h-[460px] flex items-center justify-center"
            role="img"
            aria-label="Animação de campanha publicitária com megafone, mídia digital, rádio, ponto de venda e propaganda volante"
          >
            <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:36px_36px]" />
              <div className="absolute -top-24 -right-16 w-64 h-64 rounded-full bg-brand-yellow/10 blur-[70px]" />
              <div className="absolute -bottom-28 -left-16 w-64 h-64 rounded-full bg-brand-yellow/10 blur-[80px]" />

              <div className="relative z-10 flex items-center justify-between p-5 sm:p-7">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.22em] text-brand-yellow">CENTRAL DE CAMPANHA</span>
                  <p className="text-white text-sm font-bold mt-1">A mensagem certa. No lugar certo.</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-emerald-300 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> CAMPANHA NO AR
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 500" fill="none" aria-hidden="true">
                <path d="M300 245C240 185 180 150 105 135" stroke="rgba(255,255,255,0.16)" strokeWidth="2" strokeDasharray="6 10" />
                <path d="M300 245C365 190 432 148 505 135" stroke="rgba(255,255,255,0.16)" strokeWidth="2" strokeDasharray="6 10" />
                <path d="M300 245C220 290 165 325 105 355" stroke="rgba(255,255,255,0.16)" strokeWidth="2" strokeDasharray="6 10" />
                <path d="M300 245C380 295 440 330 505 355" stroke="rgba(255,255,255,0.16)" strokeWidth="2" strokeDasharray="6 10" />
                {["M300 245C240 185 180 150 105 135", "M300 245C365 190 432 148 505 135", "M300 245C220 290 165 325 105 355", "M300 245C380 295 440 330 505 355"].map((path, index) => (
                  <motion.path
                    key={index}
                    d={path}
                    stroke="#FFD21F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={shouldAnimate ? { pathLength: 1, opacity: [0.2, 0.85, 0.2] } : { pathLength: 1, opacity: 0.7 }}
                    transition={shouldAnimate ? { duration: 2.2, delay: index * 0.25, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" } : { duration: 0 }}
                  />
                ))}
              </svg>

              <motion.div
                animate={shouldAnimate ? { rotate: 360 } : undefined}
                transition={shouldAnimate ? { duration: 18, repeat: Infinity, ease: "linear" } : undefined}
                className="absolute left-1/2 top-[47%] z-10 w-36 h-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-yellow/20 border-dashed"
              />

              <motion.div
                animate={shouldAnimate ? { y: [0, -8, 0], rotate: [-4, 2, -4] } : undefined}
                transition={shouldAnimate ? { duration: 4.2, repeat: Infinity, ease: "easeInOut" } : undefined}
                className="absolute left-1/2 top-[47%] z-20 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-brand-yellow text-black flex flex-col items-center justify-center shadow-[0_0_55px_rgba(255,210,31,0.32)]"
              >
                <Megaphone className="w-8 h-8" strokeWidth={1.8} />
                <span className="text-[8px] font-black uppercase tracking-[0.16em] mt-1">No ar</span>
                <motion.span
                  animate={shouldAnimate ? { scale: [1, 1.35, 1], opacity: [0.55, 0, 0.55] } : undefined}
                  transition={shouldAnimate ? { duration: 2.2, repeat: Infinity, ease: "easeOut" } : undefined}
                  className="absolute inset-0 rounded-2xl border-2 border-brand-yellow"
                />
              </motion.div>

              {[
                { label: "Mídia digital", sub: "Alcance", position: "left-[7%] top-[23%]", icon: TrendingUp },
                { label: "Rádio corporativa", sub: "Atenção", position: "right-[7%] top-[23%]", icon: Radio },
                { label: "PDV & TV indoor", sub: "Conversão", position: "left-[7%] top-[66%]", icon: Tv },
                { label: "Propaganda volante", sub: "Presença", position: "right-[7%] top-[66%]", icon: Volume2 }
              ].map((channel, index) => {
                const ChannelIcon = channel.icon;
                return (
                  <motion.div
                    key={channel.label}
                    animate={shouldAnimate ? { y: [0, index % 2 === 0 ? -5 : 5, 0] } : undefined}
                    transition={shouldAnimate ? { duration: 3.2 + index * 0.25, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 } : undefined}
                    className={`absolute ${channel.position} z-20 flex items-center gap-2 ${index % 2 === 1 ? "flex-row-reverse text-right" : ""}`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#161619] border border-brand-yellow/50 flex items-center justify-center text-brand-yellow shadow-lg shadow-black/20">
                      <ChannelIcon className="w-4 h-4" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[11px] text-white font-bold whitespace-nowrap">{channel.label}</p>
                      <p className="text-[9px] text-slate-500 uppercase tracking-wider">{channel.sub}</p>
                    </div>
                  </motion.div>
                );
              })}

              <motion.div
                animate={shouldAnimate ? { y: [0, -4, 0] } : undefined}
                transition={shouldAnimate ? { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 } : undefined}
                className="absolute bottom-5 left-5 right-5 z-20 rounded-xl border border-white/10 bg-[#0B0B0E]/80 backdrop-blur-md px-4 py-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-brand-yellow"><BarChart3 className="w-4 h-4" /></div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Resultado em movimento</p>
                    <p className="text-xs text-white font-semibold">Mais presença. Mais atenção. Mais vendas.</p>
                  </div>
                </div>
                <TrendingUp className="w-4 h-4 text-brand-yellow" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW SECTION */}
      <section className="relative py-16 px-6 bg-[#0B0B0E] border-t border-b border-white/5 overflow-hidden">
        {/* Glow behind stats */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-yellow/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="flex flex-col items-center text-center p-6 md:px-8"
                >
                  <div className="mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 font-display">
                    {stat.value}
                  </h3>
                  <div className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</div>
                  <p className="text-xs text-slate-500 max-w-xs">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SERVICE AREAS */}
      <ServiceAreas onNavigate={onNavigate} />

      {/* 4. FEATURED SERVICES HUBS */}
      <section className="py-24 px-6 relative bg-midnight-carbon border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              MÍDIA OFF-LINE + DIGITAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
              Soluções Integradas 360°
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light text-base sm:text-lg">
              Conectamos o impacto sonoro das ruas com a inteligência dos anúncios na internet, gerando máxima audiência e fechamento de vendas para o seu comércio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6" id="home-featured-grid">
            {featuredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between border border-white/5 hover:border-brand-yellow/30 transition-all duration-300"
                >
                  <div>
                    {/* Badge */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20 text-brand-yellow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-brand-yellow bg-brand-yellow/10 px-2 py-0.5 rounded border border-brand-yellow/10 uppercase tracking-wider font-semibold">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate("servicos", service.id)}
                    className="text-xs font-bold text-white hover:text-brand-yellow flex items-center gap-1 group/btn cursor-pointer transition-colors pt-4 border-t border-white/5 w-full mt-auto"
                  >
                    Ver detalhes do serviço
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECCION DESTAQUE RÁDIO INTERNA */}
      <section className="py-24 px-6 bg-[#0B0B0E] relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Col Info */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
                <Volume2 className="w-3.5 h-3.5" />
                RÁDIO AÇÃO CORPORATIVA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-display leading-tight">
                Já pensou em ter a sua própria rádio tocando no seu supermercado?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                A Rádio Ação é uma solução corporativa para redes varejistas de Goiás, Brasília/DF e Sergipe. Fornecemos músicas selecionadas no estilo do seu público, vinhetas profissionais gravadas com locutores de rádio de elite e inserção automática de suas ofertas.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                Diminua a percepção do tempo de espera nas filas, entretenha seus clientes e aumente o ticket médio do seu comércio em até 18% anunciando suas ofertas internamente enquanto eles fazem compras!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate("demos")}
                  className="px-6 py-3.5 rounded-xl bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/10"
                >
                  <Volume2 className="w-4 h-4 text-black stroke-[3]" />
                  Ouvir Demonstração Ao Vivo
                </button>
                <button
                  onClick={() => onNavigate("servicos", "radio-interna")}
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-1"
                >
                  Como Funciona?
                </button>
              </div>
            </div>

            {/* Right Col Custom Layout Frame */}
            <div className="relative">
              {/* Graphic container mockup representing sound wave streaming */}
              <div className="glass-card rounded-3xl p-8 border border-white/10 overflow-hidden relative bg-black/40 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center text-black">
                      <Radio className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Rádio Ação Digital</h4>
                      <span className="text-[10px] text-slate-500 font-mono">Status: Transmitindo</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/20 px-2 py-0.5 rounded font-mono font-bold animate-pulse">
                    ONLINE • 128KBPS
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Spot Comercial Recente</span>
                    <span className="font-mono text-brand-yellow">Tocando Agora</span>
                  </div>
                  
                  {/* Mock track list player */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-ping shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-white leading-none">Oferta da Semana: Alcatra Friboi kg</p>
                      <span className="text-[10px] text-slate-500 mt-1 block">Supermercado Modelo • Goiás / Brasília-DF / Sergipe</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono font-semibold">1:24</span>
                  </div>

                  <div className="bg-white/[0.01] rounded-xl p-3 border border-white/5 flex items-center gap-3 opacity-60">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-400 leading-none">Música: Sertanejo Mix (Acústico)</p>
                      <span className="text-[10px] text-slate-600 mt-0.5 block">Programação Comercial Automatizada</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">3:15</span>
                  </div>
                </div>

                {/* Simulated equalizer visual representation */}
                <div className="flex justify-between items-end h-12 gap-1.5 px-4 bg-black/50 rounded-xl p-2 border border-white/5">
                  {[20, 50, 85, 45, 95, 60, 30, 80, 55, 75, 40, 90, 70, 35, 65, 25, 45].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-brand-yellow/80 rounded-full"
                      style={{
                        height: `${h}%`,
                        animation: `pulse ${0.8 + (i % 4) * 0.2}s infinite alternate ease-in-out`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SELECTION SIMULADOR CTA BANNER */}
      {ENABLE_SMART_PROPOSAL_SIMULATOR && <section className="py-20 px-6 bg-midnight-carbon relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative glass-card rounded-3xl border border-white/10 p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand-yellow/5 to-transparent pointer-events-none" />
            
            <span className="text-xs font-mono font-bold text-brand-yellow tracking-widest uppercase mb-4 inline-block">
              Simulador Inteligente Grátis
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
              Monte seu Plano e Estime os Custos Agora!
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Desenvolvemos um simulador de orçamento exclusivo onde você pode selecionar suas necessidades (carros de som, quantidade de horas, gravação de vinhetas, rádio corporativa ou marketing digital) e obter uma estimativa de custos personalizada para fechar no WhatsApp.
            </p>

            <button
              onClick={() => onNavigate("orcamento")}
              className="px-8 py-4 bg-brand-yellow hover:bg-[#ffd633] text-black text-sm font-extrabold uppercase tracking-widest rounded-full shadow-lg shadow-brand-yellow/10 hover:shadow-brand-yellow/20 transition-all duration-300 cursor-pointer flex items-center gap-2 mx-auto"
            >
              Iniciar Simulação de Orçamento
              <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
            </button>
          </div>
        </div>
      </section>}
    </div>
  );
}
