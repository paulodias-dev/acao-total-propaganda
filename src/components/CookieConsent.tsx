import React, { useState } from "react";
import { Cookie, Settings2, ShieldCheck, X } from "lucide-react";
import type { AnalyticsConsent } from "../lib/analytics";

interface CookieConsentProps {
  consent: AnalyticsConsent | null;
  onChange: (consent: AnalyticsConsent) => void;
}

export default function CookieConsent({ consent, onChange }: CookieConsentProps) {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const closeDialogs = () => {
    setIsPreferencesOpen(false);
    setIsPolicyOpen(false);
  };

  const chooseConsent = (value: AnalyticsConsent) => {
    onChange(value);
    closeDialogs();
  };

  const showPolicy = isPolicyOpen || isPreferencesOpen;

  return (
    <>
      {consent === null ? (
        <section
          role="region"
          aria-label="Consentimento de cookies"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#111116]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow">
                <Cookie className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Sua privacidade importa</h2>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-400">
                  Usamos armazenamento essencial para lembrar sua preferência e, com autorização, cookies analíticos do Google Analytics 4 para entender a navegação e melhorar sua experiência. Os cookies analíticos só serão ativados com a sua autorização.
                </p>
                <button
                  type="button"
                  onClick={() => setIsPolicyOpen(true)}
                  className="mt-2 text-xs font-bold text-brand-yellow underline underline-offset-4 hover:text-white"
                >
                  Ler política de cookies
                </button>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:min-w-44">
              <button
                type="button"
                onClick={() => chooseConsent("accepted")}
                className="rounded-xl bg-brand-yellow px-4 py-2.5 text-sm font-extrabold text-black transition-colors hover:bg-[#ffd633]"
              >
                Aceitar cookies analíticos
              </button>
              <button
                type="button"
                onClick={() => chooseConsent("rejected")}
                className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-brand-yellow/50 hover:text-white"
              >
                Recusar analíticos
              </button>
            </div>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsPreferencesOpen(true)}
          className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111116]/90 px-3.5 py-2 text-xs font-bold text-slate-300 shadow-xl shadow-black/30 backdrop-blur-md transition-colors hover:border-brand-yellow/50 hover:text-white"
          aria-label="Abrir preferências de cookies"
        >
          <Settings2 className="h-3.5 w-3.5 text-brand-yellow" />
          Cookies
        </button>
      )}

      {showPolicy && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-policy-title"
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#111116] p-6 shadow-2xl shadow-black/50"
          >
            <button
              type="button"
              onClick={closeDialogs}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Fechar política de cookies"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 pr-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 id="cookie-policy-title" className="text-xl font-extrabold text-white">
                Política de cookies
              </h2>
            </div>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                A Ação Total Propaganda utiliza armazenamento essencial para manter o site funcionando e cookies analíticos para compreender como as páginas são utilizadas.
              </p>
              <div>
                <h3 className="font-bold text-white">Tecnologias essenciais</h3>
                <p className="mt-1">São necessárias para recursos básicos, como navegação e armazenamento da sua preferência de consentimento. Não dependem do aceite de cookies analíticos.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">Cookies analíticos</h3>
                <p className="mt-1">Usamos o Google Analytics 4 somente após o aceite. Os eventos registrados incluem páginas acessadas, origem da navegação e interações com o menu, sem coletar dados enviados em formulários.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">Como alterar sua escolha</h3>
                <p className="mt-1">Você pode abrir novamente as preferências pelo botão “Cookies” no canto inferior esquerdo e aceitar ou recusar os cookies analíticos a qualquer momento.</p>
              </div>
              <p className="text-xs text-slate-500">Esta implementação descreve o funcionamento técnico atual do site. O texto jurídico definitivo deve ser revisado e aprovado pelo responsável pela privacidade da empresa.</p>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => chooseConsent("rejected")}
                className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-brand-yellow/50 hover:text-white"
              >
                Recusar analíticos
              </button>
              <button
                type="button"
                onClick={() => chooseConsent("accepted")}
                className="rounded-xl bg-brand-yellow px-4 py-2.5 text-sm font-extrabold text-black transition-colors hover:bg-[#ffd633]"
              >
                Aceitar cookies analíticos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
