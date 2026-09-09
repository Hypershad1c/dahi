import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.benslimane-province.ma"),
  title: "Benslimane | Investissement, développement territorial et Coupe du Monde 2026",
  description:
    "Benslimane, investissement, développement territorial, Hamad El Dhehi, Coupe du Monde 2026, opportunités économiques et sportives au Maroc.",
  keywords: [
    "Benslimane",
    "Hamad El Dhehi",
    "حمد الدهي",
    "développement territorial",
    "investissement Maroc",
    "attractivité économique",
    "province de Benslimane",
    "bureaux d'études",
    "Coupe du Monde 2026",
    "World Cup 2026",
    "benslimane 2026",
    "sport Maroc",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Benslimane | Investissement, développement territorial et Coupe du Monde 2026",
    description:
      "Benslimane, investissement, développement territorial, Hamad El Dhehi et la dynamique de la Coupe du Monde 2026.",
    url: "https://www.benslimane-province.ma",
    siteName: "Benslimane — Développement & Investissement",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benslimane | Investissement, développement territorial et Coupe du Monde 2026",
    description:
      "Benslimane, investissement, développement territorial, Hamad El Dhehi et la dynamique de la Coupe du Monde 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F7F5F0] text-[#17212B]">{children}</body>
    </html>
  );
}
