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
  title: "Benslimane | Investissement, développement territorial et Coupe du Monde 2030",
  description:
    "Benslimane, investissement, développement territorial, Hamad El Dhehi, Coupe du Monde 2030, opportunités économiques et sportives au Maroc, pour toutes les générations et la GEN Z.",
  keywords: [
    "Benslimane",
    "Hamad El Dhehi",
    "حمد الدهي",
    "développement territorial",
    "investissement Maroc",
    "attractivité économique",
    "province de Benslimane",
    "bureaux d'études",
    "Coupe du Monde 2030",
    "World Cup 2030",
    "benslimane 2030",
    "sport Maroc",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "fr-MA": "/?lang=fr",
      "ar-MA": "/?lang=ar",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Benslimane | Investissement, développement territorial et Coupe du Monde 2030",
    description:
      "Benslimane, investissement, développement territorial, Hamad El Dhehi et la dynamique de la Coupe du Monde 2030.",
    url: "https://www.benslimane-province.ma",
    siteName: "Benslimane — Développement & Investissement",
    locale: "fr_MA",
    type: "website",
    images: [{
      url: "/stadiums/hassan-ii.jpg",
      width: 1216,
      height: 684,
      alt: "Grand Stade Hassan II de Benslimane",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benslimane | Investissement, développement territorial et Coupe du Monde 2030",
    description:
      "Benslimane, investissement, développement territorial, Hamad El Dhehi et la dynamique de la Coupe du Monde 2030.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.benslimane-province.ma/#organization",
      name: "Benslimane — Développement & Investissement",
      alternateName: "بن سليمان — التنمية والاستثمار",
      url: "https://www.benslimane-province.ma",
      logo: "https://www.benslimane-province.ma/icon.svg",
      email: "contact@benslimane2030.ma",
      areaServed: { "@type": "AdministrativeArea", name: "Province de Benslimane" },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.benslimane-province.ma/#website",
      url: "https://www.benslimane-province.ma",
      name: "Benslimane — Développement & Investissement",
      inLanguage: ["fr-MA", "ar-MA"],
      publisher: { "@id": "https://www.benslimane-province.ma/#organization" },
    },
    {
      "@type": "SportsEvent",
      name: "Coupe du Monde 2030 au Maroc",
      alternateName: "كأس العالم 2030 في المغرب",
      description: "Les infrastructures marocaines et le développement territorial de Benslimane à l’horizon 2030.",
      sport: "Football",
      location: { "@type": "Country", name: "Maroc" },
      organizer: { "@id": "https://www.benslimane-province.ma/#organization" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" dir="ltr" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#DCDCDC] text-[#1D2733]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
