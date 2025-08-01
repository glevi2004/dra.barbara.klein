import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Bárbara Klein - Dermatologia Clínica e Estética",
  description:
    "Especialista em dermatologia clínica e estética. Mestre em Engenharia Biomédica, oferecendo tratamentos avançados para cuidados com a pele e harmonização facial.",
  keywords:
    "dermatologia, dermatologista, harmonização facial, estética, skincare, tratamento de pele",
  authors: [{ name: "Dra. Bárbara Klein" }],
  openGraph: {
    title: "Dra. Bárbara Klein - Dermatologia Clínica e Estética",
    description:
      "Especialista em dermatologia clínica e estética com abordagem científica e cuidado personalizado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
