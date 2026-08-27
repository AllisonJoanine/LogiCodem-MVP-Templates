import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Dr Pet Clínica Veterinária | Sorocaba",
  description:
    "Consultas, vacinas, exames e cirurgias veterinárias na Vila Haro, em Sorocaba. Fale com a equipe da Dr Pet pelo WhatsApp.",
  keywords: [
    "clínica veterinária em Sorocaba",
    "veterinário Vila Haro",
    "vacina para pets Sorocaba",
    "Dr Pet Sorocaba",
  ],
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
