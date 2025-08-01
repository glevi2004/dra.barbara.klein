"use client";

import { Button } from "@/components/ui/button";
import {
  openWhatsApp,
  whatsappMessages,
  WhatsAppMessageType,
} from "@/lib/whatsapp";
import { ReactNode } from "react";

interface WhatsAppButtonProps {
  children: ReactNode;
  messageType?: WhatsAppMessageType;
  customMessage?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

export default function WhatsAppButton({
  children,
  messageType = "consultation",
  customMessage,
  variant = "default",
  className = "",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const message = customMessage || whatsappMessages[messageType];
    openWhatsApp(message);
  };

  return (
    <Button onClick={handleClick} variant={variant} className={className}>
      {children}
    </Button>
  );
}
