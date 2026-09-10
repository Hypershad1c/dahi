import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Benslimane",
  description: "Politique de confidentialité du site Benslimane — Développement & Investissement.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#ECE8E5] px-6 py-16 text-[#1D2733] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[#357B5F]">← Retour à l’accueil</Link>
        <h1 className="mt-8 text-4xl font-semibold text-[#285C47]">Politique de confidentialité</h1>
        <p className="mt-3 text-sm text-[#66727D]">Dernière mise à jour : 10 septembre 2026</p>
        <div className="mt-10 space-y-8 rounded-3xl bg-white p-7 leading-8 shadow-sm sm:p-10">
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Données collectées</h2><p className="mt-3">Le site peut recevoir les informations que vous transmettez volontairement via le formulaire de contact, notamment votre nom, votre adresse électronique, l’objet et le contenu de votre message.</p></section>
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Utilisation</h2><p className="mt-3">Ces informations sont utilisées uniquement pour répondre aux demandes reçues, assurer le suivi des échanges et améliorer les services proposés.</p></section>
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Conservation et partage</h2><p className="mt-3">Les données sont conservées pendant la durée nécessaire au traitement de votre demande. Elles ne sont pas vendues ni partagées à des fins publicitaires.</p></section>
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Vos droits</h2><p className="mt-3">Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à contact@benslimane-province.ma.</p></section>
          <hr className="border-[#ECE8E5]" />
          <section dir="rtl" lang="ar"><h2 className="text-2xl font-semibold text-[#357B5F]">سياسة الخصوصية</h2><p className="mt-3">قد يتلقى الموقع المعلومات التي تقدمونها طوعاً عبر نموذج التواصل، مثل الاسم والبريد الإلكتروني وموضوع الرسالة ومحتواها. تُستخدم هذه المعلومات فقط للرد على طلباتكم وتتبع المراسلات وتحسين الخدمات. لا تُباع البيانات ولا تُشارك لأغراض إعلانية. يمكنكم طلب الاطلاع على بياناتكم أو تصحيحها أو حذفها عبر البريد الإلكتروني contact@benslimane-province.ma.</p></section>
        </div>
      </div>
    </main>
  );
}
