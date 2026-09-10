import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique relative aux cookies | Benslimane",
  description: "Politique relative aux cookies du site Benslimane — Développement & Investissement.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#ECE8E5] px-6 py-16 text-[#1D2733] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[#357B5F]">← Retour à l’accueil</Link>
        <h1 className="mt-8 text-4xl font-semibold text-[#285C47]">Politique relative aux cookies</h1>
        <p className="mt-3 text-sm text-[#66727D]">Dernière mise à jour : 10 septembre 2026</p>
        <div className="mt-10 space-y-8 rounded-3xl bg-white p-7 leading-8 shadow-sm sm:p-10">
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Situation actuelle</h2><p className="mt-3">Le site n’utilise actuellement aucun outil d’analyse d’audience, aucune publicité personnalisée et aucun cookie non essentiel. Si des outils d’analyse sont ajoutés, cette page sera mise à jour et un mécanisme de consentement sera proposé lorsque nécessaire.</p></section>
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Cookies nécessaires</h2><p className="mt-3">Des données techniques strictement nécessaires au fonctionnement du site peuvent être traitées par l’hébergement et le navigateur. Elles ne servent pas à suivre votre activité à des fins publicitaires.</p></section>
          <section><h2 className="text-2xl font-semibold text-[#357B5F]">Contact</h2><p className="mt-3">Pour toute question concernant les cookies et la confidentialité, écrivez à contact@benslimane-province.ma.</p></section>
          <hr className="border-[#ECE8E5]" />
          <section dir="rtl" lang="ar"><h2 className="text-2xl font-semibold text-[#357B5F]">سياسة ملفات تعريف الارتباط</h2><p className="mt-3">لا يستخدم الموقع حالياً أدوات تحليل الجمهور أو الإعلانات المخصصة أو ملفات تعريف الارتباط غير الأساسية. قد تتم معالجة بعض البيانات التقنية الضرورية لتشغيل الموقع من طرف الاستضافة والمتصفح، ولا تُستخدم لتتبع نشاطكم لأغراض إعلانية. للاستفسار، تواصلوا عبر contact@benslimane-province.ma.</p></section>
        </div>
      </div>
    </main>
  );
}
