import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Benslimane",
  description: "Mentions légales et conditions d’utilisation du site Benslimane — Développement & Investissement.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#ECE8E5] px-6 py-16 text-[#1D2733] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[#357B5F]">← Retour à l’accueil</Link>
        <h1 className="mt-8 text-4xl font-semibold text-[#285C47]">Mentions légales et conditions d’utilisation</h1>
        <p className="mt-3 text-sm text-[#66727D]">Dernière mise à jour : 10 septembre 2026</p>
        <div className="mt-10 space-y-8 rounded-3xl bg-white p-7 leading-8 shadow-sm sm:p-10">
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Éditeur</h2><p className="mt-3">Ce site présente les activités, projets et informations liés au développement territorial et à l’investissement dans la Province de Benslimane. Contact : contact@benslimane-province.ma.</p></section>
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Contenu</h2><p className="mt-3">Les contenus sont fournis à titre informatif. Les chiffres, projets, calendriers et informations relatives aux infrastructures doivent être vérifiés auprès des sources officielles avant toute décision.</p></section>
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Propriété intellectuelle</h2><p className="mt-3">Sauf indication contraire, la structure, les textes, les éléments graphiques et le code du site ne peuvent être reproduits ou réutilisés sans autorisation préalable. Les images tierces restent soumises aux droits de leurs propriétaires.</p></section>
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Responsabilité</h2><p className="mt-3">L’éditeur s’efforce de maintenir des informations exactes et à jour, sans garantir l’exhaustivité ni la disponibilité permanente du site.</p></section>
          <hr className="border-[#ECE8E5]" />
          <section dir="rtl" lang="ar"><h2 className="text-2xl font-semibold text-[#357B5F]">الإشعارات القانونية وشروط الاستخدام</h2><p className="mt-3">يقدم هذا الموقع معلومات حول التنمية الترابية والاستثمار في إقليم بن سليمان. تُقدم المعطيات لأغراض إعلامية، ويجب التحقق من الأرقام والمشاريع والمواعيد لدى المصادر الرسمية قبل اتخاذ أي قرار. لا يجوز إعادة استعمال محتوى الموقع أو بنيته دون إذن مسبق. للاستفسار: contact@benslimane-province.ma.</p></section>
        </div>
      </div>
    </main>
  );
}
