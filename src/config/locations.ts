export interface WhatsAppUnit {
  id: string;
  name: string;
  city: string;
  state: string;
  phone: string;
  displayPhone: string;
}

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
