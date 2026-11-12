export interface WhatsAppUnit {
  id: string;
  name: string;
  city: string;
  state: string;
  phone: string;
  displayPhone: string;
}

export interface ServiceRegion {
  id: "goias" | "brasilia" | "sergipe";
  name: string;
  shortName: string;
  description: string;
  operationalNote: string;
  unitId?: WhatsAppUnit["id"];
}

export const SERVICE_REGIONS: ServiceRegion[] = [
  {
    id: "goias",
    name: "Goiás (GO)",
    shortName: "Goiás",
    description: "Matriz em Anápolis com cobertura urbana, comercial e regional.",
    operationalNote: "Matriz em Anápolis-GO",
    unitId: "anapolis"
  },
  {
    id: "brasilia",
    name: "Brasília (DF)",
    shortName: "Brasília",
    description: "Campanhas e ativações planejadas para Brasília e região do Entorno.",
    operationalNote: "Atendimento comercial sob consulta"
  },
  {
    id: "sergipe",
    name: "Sergipe (SE)",
    shortName: "Sergipe",
    description: "Filial em Aracaju para campanhas na capital e região metropolitana.",
    operationalNote: "Filial em Aracaju-SE",
    unitId: "aracaju"
  }
];

// Add future branches here. The phone must contain country and area code, digits only.
export const WHATSAPP_UNITS: WhatsAppUnit[] = [
  {
    id: "anapolis",
    name: "Ação Total Anápolis",
    city: "Anápolis",
    state: "GO",
    phone: "5562991962033",
    displayPhone: "+55 62 99196-2033"
  },
  {
    id: "aracaju",
    name: "Ação Total Aracaju",
    city: "Aracaju",
    state: "SE",
    phone: "5579981425786",
    displayPhone: "+55 79 98142-5786"
  }
];
