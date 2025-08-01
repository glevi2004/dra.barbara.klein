export interface WhatsAppConfig {
  phoneNumber: string;
  defaultMessage: string;
}

export const whatsappConfig: WhatsAppConfig = {
  phoneNumber: "55000000000",
  defaultMessage:
    "Olá! Gostaria de agendar uma consulta com a Dra. Bárbara Klein.",
};

export function createWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || whatsappConfig.defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
}

export function openWhatsApp(customMessage?: string): void {
  const url = createWhatsAppUrl(customMessage);
  window.open(url, "_blank");
}

// Predefined messages for different contexts
export const whatsappMessages = {
  consultation:
    "Olá! Gostaria de agendar uma consulta com a Dra. Bárbara Klein.",
  info: "Olá! Gostaria de saber mais informações sobre os serviços da Dra. Bárbara Klein.",
  emergency: "Olá! Preciso de atendimento urgente com a Dra. Bárbara Klein.",
  followup: "Olá! Gostaria de agendar um retorno com a Dra. Bárbara Klein.",
  service:
    "Olá! Gostaria de saber mais sobre este serviço da Dra. Bárbara Klein.",
  location:
    "Olá! Gostaria de saber sobre a localização do consultório da Dra. Bárbara Klein.",
};

export type WhatsAppMessageType = keyof typeof whatsappMessages;
