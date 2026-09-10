"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  Compass,
  Factory,
  Leaf,
  MapPinned,
  Menu,
  MountainSnow,
  ShieldCheck,
  SunMedium,
  Trophy,
  Truck,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  articleCards,
  blogArticles,
  bureauServices,
  contactInfo,
  dashboardSeries,
  footerLinks,
  investmentCards,
  partnerships,
  processSteps,
  projectCards,
  publicFigure,
  recruitmentPositions,
  sectorDistribution,
  sectors,
  statistics,
} from "@/data/site";

const chartColors = ["#357B5F", "#285C47", "#357B5F", "#A8B2BE", "#D8C67D"];

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
};

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  MountainSnow,
  Factory,
  Truck,
  Building2,
  SunMedium,
  Trophy,
  BriefcaseBusiness,
};

function SectionLabel({ text }: { text: string }) {
  return <span className="eyebrow">{text}</span>;
}

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let animationFrame = 0;
    const duration = 1400;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

type Language = "fr" | "ar";

const copy = {
  fr: {
    nav: [
      { label: "Accueil", href: "#accueil" },
      { label: "La Province", href: "#province" },
      { label: "Investir", href: "#investir" },
      { label: "Études & Données", href: "#donnees" },
      { label: "Projets", href: "#projets" },
      { label: "Stades 2030", href: "#stades-2030" },
      { label: "GEN Z", href: "#genz" },
      { label: "FAQ & Carte", href: "#faq-carte" },
      { label: "Vision", href: "#vision" },
      { label: "Contact", href: "#contact" },
    ],
    brandShort: "BENS LIMANE",
    brandLong: "DÉVELOPPEMENT & INVESTISSEMENT",
    heroBadge: "PROVINCE DE BENSLIMANE · MAROC",
    heroTitle: ["Un territoire.", "Des opportunités.", "Une vision."],
    heroText:
      "Comprendre le potentiel de Benslimane, accompagner l’investissement et construire les territoires de demain.",
    heroPrimary: "Découvrir Benslimane",
    heroSecondary: "Explorer les opportunités",
    heroPills: ["Territoire stratégique pour investir", "Investissement durable", "Réseaux économiques", "Attractivité locale"],
    provinceLabel: "Pourquoi Benslimane",
    provinceTitle: "Comprendre le territoire pour mieux construire son avenir.",
    provinceText1: "Le bureau d’études accompagne les décideurs publics, les investisseurs et les acteurs du développement dans la compréhension fine du territoire.",
    provinceText2: "Son rôle est d'identifier les potentielités économiques, d'analyser les infrastructures, d'évaluer les opportunités d'investissement et de structurer des projets durables, cohérents avec les réalités locales.",
    statsTitle: "Benslimane en chiffres",
    statsNote: "Données vérifiées et à jour du territoire de Benslimane.",
    positionLabel: "Positionnement",
    positionTitle: "Un territoire stratégique pour investir",
    positionText: "Benslimane s'inscrit à la croisée des grands axes économiques et urbains, entre les pôles majeurs du Maroc.",
    investLabel: "Opportunités",
    investTitle: "Investir à Benslimane",
    investDiscover: "Découvrir",
    sectorsLabel: "Secteurs stratégiques",
    sectorsTitle: "Les leviers d’une croissance territoriale durable",
    dataLabel: "Analyse & données",
    dataTitle: "Décider avec les données.",
    dataText: "Les données présentées sont issues de sources officielles et d'études territoriales.",
    projectsLabel: "Projets",
    projectsTitle: "Projets structurants",
    visionLabel: "Vision",
    visionTitle: "Faire de Benslimane un territoire d'opportunités.",
    bureauLabel: "Le bureau d'études",
    bureauTitle: "Une expertise au service du territoire.",
    publicLabel: "Vision publique",
    publicTitle: "Une vision pour le territoire",
    analysisLabel: "Analyses & actualités",
    analysisTitle: "Analyses & actualités",
    viewAll: "Voir toutes les analyses",
    contactLabel: "Contact",
    contactTitle: "Construisons les opportunités de demain.",
    contactText: "Vous souhaitez investir, comprendre le territoire ou contribuer à son développement ?",
    contactPrimary: "Parler avec nous",
    contactSecondary: "Explorer les opportunités",
    footerBrand: "BENS LIMANE",
    footerTagline: "DÉVELOPPEMENT & INVESTISSEMENT",
    footerText: "Bureau d'études spécialisé dans le développement territorial, l’investissement et l’attractivité économique de la Province de Benslimane.",
    footerNav: "Navigation",
    footerInvest: "Investissement",
    footerContact: "Contact",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    candidateLabel: "Candidat / Candidate",
    candidateName: "Ahmed Dehy / أحمد الدهي",
    candidateRole: "Acteur territorial et candidat aux institutions",
    candidateIntro: "Ahmed Dehy incarne une vision de proximité, de développement territorial et de représentation du terrain au service de Benslimane et de ses habitants.",
    candidateBackground: "Son engagement s'inscrit dans un projet de développement structurant : mieux représenter les citoyens, encourager les opportunités d'investissement, impulser des projets d'infrastructure et faire de Benslimane un territoire plus attractif à l'horizon de la Coupe du Monde 2030 et au-delà.",
    wcTitle: "Une dynamique territoriale qui va au-delà du sport.",
    wcIntro: "À l'horizon de la Coupe du Monde 2030, Benslimane se positionne comme un territoire stratégique pour le sport, l'accueil, l'infrastructure et la promotion de l'image du Maroc.",
    wcText: "Dans ce contexte, l'enjeu n'est pas seulement de recevoir des événements, mais de transformer cette visibilité en opportunité de développement économique, de modernisation urbaine et de rayonnement territorial.",
    wcQuote: "Benslimane mérite une représentation forte, ancrée dans le terrain et tournée vers l'avenir. Notre ambition est de faire de cette province un espace de projets, d'opportunités et de développement durable, bien au-delà de l'événement sportif.",
    langToggle: "AR",
  },
  ar: {
    nav: [
      { label: "الرئيسية", href: "#accueil" },
      { label: "الإقليم", href: "#province" },
      { label: "الاستثمار", href: "#investir" },
      { label: "الدراسات والبيانات", href: "#donnees" },
      { label: "المشاريع", href: "#projets" },
      { label: "ملاعب 2030", href: "#stades-2030" },
      { label: "جيل زد", href: "#genz" },
      { label: "الأسئلة والخريطة", href: "#faq-carte" },
      { label: "الرؤية", href: "#vision" },
      { label: "تواصل", href: "#contact" },
    ],
    brandShort: "بن سليمان",
    brandLong: "التنمية والاستثمار",
    heroBadge: "إقليم بن سليمان · المغرب",
    heroTitle: ["إقليم", "فرص", "رؤية"],
    heroText: "فهم إمكانات بن سليمان ومرافقة الاستثمار وبناء مجتمعات المستقبل في هذا الإقليم.",
    heroPrimary: "اكتشف بن سليمان",
    heroSecondary: "استكشف الفرص",
    heroPills: ["إقليم استراتيجي للاستثمار", "استثمار مستدام", "شبكات اقتصادية", "جاذبية محلية"],
    provinceLabel: "لماذا بن سليمان",
    provinceTitle: "فهم الإقليم لبناء مستقبل أفضل.",
    provinceText1: "يعمل المكتب الاستشاري مع صناع القرار، المستثمرين والفاعلين التنمويين لفهم هذا الإقليم بشكل دقيق.",
    provinceText2: "ويتمثل دوره في تحديد الإمكانات الاقتصادية وتحليل البنية التحتية وتقييم فرص الاستثمار وتطوير مشاريع مستدامة ومتماشية مع واقع الإقليم.",
    statsTitle: "بن سليمان بالأرقام",
    statsNote: "بيانات موثوقة وحديثة عن إقليم بن سليمان.",
    positionLabel: "الموضع",
    positionTitle: "إقليم استراتيجي للاستثمار",
    positionText: "تقع بن سليمان عند تقاطع المحاور الاقتصادية الحضرية الكبرى بين المراكز الرئيسية في المغرب.",
    investLabel: "الفرص",
    investTitle: "الاستثمار في بن سليمان",
    investDiscover: "اكتشف",
    sectorsLabel: "القطاعات الاستراتيجية",
    sectorsTitle: "محركات النمو التنموي المستدام",
    dataLabel: "التحليل والبيانات",
    dataTitle: "اتخاذ القرار بالبيانات.",
    dataText: "البيانات المعروضة مستمدة من مصادر رسمية ودراسات إقليمية.",
    projectsLabel: "المشاريع",
    projectsTitle: "مشاريع بنيوية",
    visionLabel: "الرؤية",
    visionTitle: "جعل بن سليمان إقليماً للفرص.",
    bureauLabel: "المكتب الاستشاري",
    bureauTitle: "خبرة تخدم الإقليم.",
    publicLabel: "رؤية عامة",
    publicTitle: "رؤية من أجل الإقليم",
    analysisLabel: "التحليل والأخبار",
    analysisTitle: "التحليل والأخبار",
    viewAll: "عرض جميع التحليلات",
    contactLabel: "تواصل",
    contactTitle: "لنبني فرص الغد معاً.",
    contactText: "هل ترغب في الاستثمار أو فهم الإقليم أو المشاركة في تنميته؟",
    contactPrimary: "تحدث معنا",
    contactSecondary: "استكشف الفرص",
    footerBrand: "بن سليمان",
    footerTagline: "التنمية والاستثمار",
    footerText: "مكتب دراسات متخصص في التنمية الإقليمية والاستثمار وجاذبية الاقتصاد في إقليم بن سليمان.",
    footerNav: "التنقل",
    footerInvest: "الاستثمار",
    footerContact: "تواصل",
    legal: "إشعارات قانونية",
    privacy: "سياسة الخصوصية",
    candidateLabel: "مرشح / مرشحة",
    candidateName: "أحمد الدهي / Ahmed Dehy",
    candidateRole: "فاعل محلي ومرشح للهيئات المنتخبة",
    candidateIntro: "يمثل أحمد الدهي رؤية قريبة من المواطنين وتطويرية ترتكز على أرض الواقع لخدمة بن سليمان وسكانها.",
    candidateBackground: "يأتي هذا التزامه في إطار مشروع تنموي بنّاء: تمثيل أفضل للمواطنين، تشجيع الاستثمارات، وتطوير مشاريع البنية التحتية لجعل بن سليمان أكثر جاذبية في أفق كأس العالم 2030 وما بعدها.",
    wcTitle: "ديناميكية إقليمية تتجاوز الرياضة.",
    wcIntro: "في أفق كأس العالم 2030، تتبوأ بن سليمان موقعاً استراتيجياً في مجالات الرياضة، الاستقبال، البنية التحتية وتعزيز صورة المغرب.",
    wcText: "في هذا السياق، لا يقتصر التحدي على استضافة الفعاليات فقط، بل على تحويل هذه الواجهة إلى فرصة لتنمية اقتصادية، تحديث حضري وتوسع في الظهور الإقليمي.",
    wcQuote: "تستحق بن سليمان تمثيلاً قوياً ومتماسكا مع الأرض وموجهاً نحو المستقبل. هدفنا هو جعل هذه المحافظة مساحة للمشاريع والفرص والتنمية المستدامة، بعيداً عن الحدث الرياضي فقط.",
    langToggle: "FR",
  },
} as const;

const navLabels = {
  fr: [
    { label: "Accueil", href: "#accueil" },
    { label: "La Province", href: "#province" },
    { label: "Investir", href: "#investir" },
    { label: "Études & Données", href: "#donnees" },
    { label: "Projets", href: "#projets" },
    { label: "Stades 2030", href: "#stades-2030" },
    { label: "GEN Z", href: "#genz" },
    { label: "Vision", href: "#vision" },
    { label: "Contact", href: "#contact" },
  ],
  ar: [
    { label: "الرئيسية", href: "#accueil" },
    { label: "الإقليم", href: "#province" },
    { label: "الاستثمار", href: "#investir" },
    { label: "الدراسات والبيانات", href: "#donnees" },
    { label: "المشاريع", href: "#projets" },
    { label: "ملاعب 2030", href: "#stades-2030" },
    { label: "جيل زد", href: "#genz" },
    { label: "الرؤية", href: "#vision" },
    { label: "تواصل", href: "#contact" },
  ],
} as const;

function useTextDirection(language: Language) {
  return language === "ar" ? "rtl" : "ltr";
}


const moroccoStadiums = [
  { name: "Grand Stade Hassan II", nameAr: "الملعب الكبير الحسن الثاني", city: "Benslimane", cityAr: "بن سليمان", capacity: "115 000", status: "En chantier", statusAr: "قيد الإنجاز", image: "/stadiums/hassan-ii-venue.jpg", detail: "Le chantier phare : une enceinte conçue pour devenir l’un des grands symboles de 2030.", detailAr: "المشروع الأبرز: منشأة مرشحة لتصبح أحد رموز مونديال 2030.", tag: "Projet majeur", tagAr: "مشروع كبير" },
  { name: "Complexe sportif Prince Moulay Abdellah", nameAr: "المجمع الرياضي الأمير مولاي عبد الله", city: "Rabat", cityAr: "الرباط", capacity: "68 700", status: "Opérationnel", statusAr: "جاهز", image: "/stadiums/moulay-abdellah-venue.jpg", detail: "Une enceinte entièrement reconstruite et opérationnelle depuis septembre 2025.", detailAr: "منشأة أعيد بناؤها بالكامل ودخلت الخدمة منذ شتنبر 2025.", tag: "Capitale", tagAr: "العاصمة" },
  { name: "Grand Stade de Tanger", nameAr: "الملعب الكبير لطنجة", city: "Tanger", cityAr: "طنجة", capacity: "75 000", status: "Opérationnel", statusAr: "جاهز", image: "/stadiums/tanger-venue.jpg", detail: "Une enceinte transformée, couverte et prête pour les grandes échéances internationales.", detailAr: "منشأة تم تحديثها وتغطيتها وأصبحت جاهزة للاستحقاقات الدولية الكبرى.", tag: "Nord du Maroc", tagAr: "شمال المغرب" },
  { name: "Grand Stade de Marrakech", nameAr: "الملعب الكبير لمراكش", city: "Marrakech", cityAr: "مراكش", capacity: "46 000", status: "Phase 2 des travaux", statusAr: "المرحلة الثانية من الأشغال", image: "/stadiums/marrakech-venue.jpg", detail: "Une transformation profonde : nouvelle configuration, tribunes couvertes et pelouse abaissée.", detailAr: "تحول عميق: تصميم جديد ومدرجات مغطاة وخفض مستوى أرضية الملعب.", tag: "Tourisme & sport", tagAr: "السياحة والرياضة" },
  { name: "Stade Adrar", nameAr: "ملعب أدرار", city: "Agadir", cityAr: "أكادير", capacity: "46 000", status: "Phase 2 des travaux", statusAr: "المرحلة الثانية من الأشغال", image: "/stadiums/agadir-venue.jpg", detail: "La piste d’athlétisme disparaît pour rapprocher les nouvelles tribunes de la pelouse.", detailAr: "إزالة مضمار ألعاب القوى لتقريب المدرجات الجديدة من أرضية الملعب.", tag: "Façade atlantique", tagAr: "الواجهة الأطلسية" },
  { name: "Stade de Fès", nameAr: "ملعب فاس", city: "Fès", cityAr: "فاس", capacity: "55 800", status: "Transformation programmée", statusAr: "تحول مبرمج", image: "/stadiums/fes-venue.webp", detail: "Une deuxième transformation estimée à 2,816 milliards de dirhams pour atteindre les standards FIFA.", detailAr: "مرحلة ثانية من التحول بتكلفة تقدر بـ 2.816 مليار درهم للوصول إلى معايير الفيفا.", tag: "Patrimoine & sport", tagAr: "التراث والرياضة" },
] as const;

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [language, setLanguage] = useState<Language>("fr");
  const isArabic = language === "ar";
  const direction = useTextDirection(language);
  const currentCopy = copy[language];
  const navigation = navLabels[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [direction, language]);

  return (
    <div dir={direction} className="min-h-screen bg-[#ECE8E5] text-[#1D2733]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-[#e2e8f0] bg-[#ECE8E5]/90 shadow-[0_10px_30px_rgba(10,19,28,0.08)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#accueil" className="flex items-center gap-3 text-left">
            <Image src="/dehy-logo.jpg" alt="DEHY Real Estate Development & Investment, Benslimane Morocco" width={176} height={96} priority className="h-12 w-28 rounded-md object-contain sm:h-14 sm:w-32" />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-all duration-300 ${
                  item.href === "#accueil"
                    ? isScrolled
                      ? "text-[#357B5F]"
                      : "text-[#357B5F]"
                    : isScrolled
                      ? "text-[#46515C] hover:text-[#357B5F]"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md">
              {(["fr", "ar"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  className={`rounded-full px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] transition ${
                    language === option
                      ? "bg-[#357B5F] text-white shadow-sm"
                      : isScrolled
                        ? "text-[#357B5F]/70 hover:text-[#357B5F]"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {option === "fr" ? "FR" : "AR"}
                </button>
              ))}
            </div>
            <button className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition ${isScrolled ? "border-[#357B5F]/20 bg-[#357B5F] text-white hover:bg-[#285C47]" : "border-white/20 bg-white/6 text-white hover:border-[#357B5F]/50 hover:bg-white/10"}`}>
              {currentCopy.heroPrimary}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md">
              {(["fr", "ar"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  className={`rounded-full px-2 py-1 text-[0.58rem] font-semibold uppercase ${
                    language === option ? "bg-[#357B5F] text-white" : isScrolled ? "text-[#357B5F]/70" : "text-white/70"
                  }`}
                >
                  {option === "fr" ? "FR" : "AR"}
                </button>
              ))}
            </div>
            <button
              aria-label={isArabic ? "فتح القائمة" : "Ouvrir le menu"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${isScrolled ? "border-[#357B5F]/10 bg-white text-[#357B5F]" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="border-t border-white/10 bg-[#357B5F]/90 px-4 py-4 backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80 transition hover:border-[#357B5F]/60 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#357B5F] px-4 py-3 text-sm font-medium text-white">
                  {currentCopy.heroPrimary}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main>
        <section id="accueil" className="relative isolate overflow-hidden">
          <div
            className="hero-media absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="bg-hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.18),_transparent_40%)]" />

          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
            <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/6 px-4 py-2 text-[0.68rem] font-medium tracking-[0.22em] text-white/80 backdrop-blur-md">
                  {currentCopy.heroBadge}
                </div>

                <h1 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-6xl lg:text-[6rem]">
                  {currentCopy.heroTitle.map((line, index) => (
                    <span key={line + index} className="block">{line}</span>
                  ))}
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200/90 md:text-xl">
                  {currentCopy.heroText}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#province"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#357B5F] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_30px_rgba(201,162,39,0.35)] transition hover:-translate-y-0.5"
                  >
                    {currentCopy.heroPrimary}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#investir"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
                  >
                    {currentCopy.heroSecondary}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className="hidden lg:block"
              >
                <div className="premium-card rounded-[32px] p-6 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <span className="section-kicker">Attractivité 2030</span>
                    <span className="rounded-full border border-[#357B5F]/30 bg-[#357B5F]/10 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#ECE8E5]">
                      +18.4%
                    </span>
                  </div>

                  <div className="mt-8">
                    <div className="text-[0.62rem] uppercase tracking-[0.18em] text-slate-300">Potentiel de développement</div>
                    <div className="mt-4 flex items-end gap-3">
                      <span className="text-5xl font-semibold tracking-[-0.06em] text-white">72%</span>
                      <span className="pb-2 text-sm text-[#ECE8E5]">d&apos;attractivité</span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      { label: "Vocation agricole", value: "87%" },
                      { label: "Industrie & logistique", value: "63%" },
                      { label: "Tourisme durable", value: "58%" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                        <span className="text-sm text-slate-200">{item.label}</span>
                        <span className="text-base font-semibold text-[#ECE8E5]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 flex flex-wrap gap-6 text-sm text-slate-200/85">
              {currentCopy.heroPills.map((item) => (
                <div key={item} className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#357B5F] gold-pulse" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="province" className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div>
                <SectionLabel text={currentCopy.provinceLabel} />
                <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">{currentCopy.provinceTitle}</h2>
                <div className="gold-divider mt-8" />
              </div>

              <div className="space-y-6 text-lg leading-8 text-[#46515C]">
                <p>{currentCopy.provinceText1}</p>
                <p>{currentCopy.provinceText2}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#ECE8E5] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 flex items-end justify-between gap-4">
              <div>
                <SectionLabel text={isArabic ? "الإقليم" : "Territoire"} />
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-4xl">{currentCopy.statsTitle}</h2>
              </div>
              <p className="hidden max-w-md text-sm text-[#66727D] md:block">{currentCopy.statsNote}</p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {statistics.map((stat, index) => (
                <motion.div key={stat.label} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }} className="moroccan-card group rounded-[28px] p-6 transition duration-300 hover:-translate-y-1">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ECE8E5] text-[#357B5F]">
                    <CircleDollarSign className="h-5 w-5 text-[#357B5F]" />
                  </div>
                  <div className="mb-3 text-sm uppercase tracking-[0.18em] text-[#66727D]">{stat.label}</div>
                  <div className="flex items-end gap-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix ?? ""} />
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-[0.14em] text-[#66727D]">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 max-w-3xl">
              <SectionLabel text={currentCopy.positionLabel} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">{currentCopy.positionTitle}</h2>
              <p className="mt-5 text-lg text-[#66727D]">{currentCopy.positionText}</p>
            </motion.div>

            <motion.div {...reveal} className="moroccan-card overflow-hidden rounded-[28px] p-3 md:p-6">
              <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top,_#285C47,_#357B5F_60%,_#285C47_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(201,162,39,0.22),transparent_26%)]" />
                <svg viewBox="0 0 800 420" className="absolute inset-0 h-full w-full">
                  <path d="M110 250 C 200 210, 247 145, 310 120 S 470 84, 575 145 S 710 210, 740 250" fill="none" stroke="rgba(201,162,39,0.6)" strokeWidth="3" strokeDasharray="10 12" />
                  <path d="M180 88 L 240 190 L 280 330 L 360 285 L 470 205 L 605 222" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" strokeDasharray="6 8" />
                  <path d="M220 130 L 510 60 L 640 100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                </svg>

                <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[38%] top-[43%] flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#357B5F] shadow-[0_0_0_12px_rgba(201,162,39,0.22)]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </motion.div>

                <div className="absolute left-[32%] top-[18%] rounded-full border border-[#357B5F]/60 bg-[#357B5F]/80 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/85">Benslimane</div>
                <div className="absolute left-[18%] top-[62%] rounded-full border border-white/10 bg-[#357B5F]/70 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/70">Bouznika</div>
                <div className="absolute left-[52%] top-[18%] rounded-full border border-white/10 bg-[#357B5F]/70 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/70">Mohammedia</div>
                <div className="absolute left-[67%] top-[32%] rounded-full border border-white/10 bg-[#357B5F]/70 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/70">Casablanca</div>
                <div className="absolute left-[66%] top-[72%] rounded-full border border-white/10 bg-[#357B5F]/70 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/70">Rabat</div>

                <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#285C47]/60 p-5 backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#357B5F]">{isArabic ? "الموضع الاستراتيجي" : "Positionnement stratégique"}</p>
                  <p className="mt-2 max-w-2xl text-base text-slate-200 md:text-lg">{isArabic ? "تتمتع بن سليمان بقرب استراتيجي من المحاور الاقتصادية الكبرى في المملكة والممرات اللوجستية ومناطق التنمية عالية الديناميكية." : "Benslimane bénéficie d'une proximité avantageuse avec les grands centres économiques du Royaume, des corridors logistiques et des zones de développement à forte dynamique."}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="investir" className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-14 max-w-3xl">
              <SectionLabel text={currentCopy.investLabel} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">{currentCopy.investTitle}</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {investmentCards.map((card, index) => {
                const Icon = iconMap[card.icon];
                return (
                  <motion.div key={card.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.04 }} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[28px] border border-[#357B5F]/8 bg-white p-6 shadow-[0_16px_40px_rgba(10,19,28,0.05)] transition-all duration-300">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#357B5F] via-[#357B5F]/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECE8E5] text-[#357B5F] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5 text-[#357B5F]" />
                    </div>
                    <div className="text-[0.62rem] uppercase tracking-[0.2em] text-[#66727D]">{isArabic ? card.noteAr : card.note}</div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-[#357B5F]">{isArabic ? card.titleAr : card.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#46515C]">{isArabic ? card.descriptionAr : card.description}</p>
                    <div className="mt-8 flex items-center justify-between border-t border-[#357B5F]/8 pt-4">
                      <span className="text-sm text-[#66727D]">{currentCopy.investDiscover}</span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#357B5F] text-white transition group-hover:bg-[#ECE8E5] group-hover:text-[#357B5F]">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#ECE8E5] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12">
              <SectionLabel text={currentCopy.sectorsLabel} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">{currentCopy.sectorsTitle}</h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {sectors.map((sector, index) => (
                <motion.div key={sector.number} {...reveal} transition={{ ...reveal.transition, delay: index * 0.04 }} whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-[26px] border border-[#357B5F]/8 bg-white p-6 shadow-[0_16px_36px_rgba(10,19,28,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.08),_transparent_58%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-lg font-semibold tracking-[-0.05em] text-[#357B5F] transition group-hover:text-[#357B5F]">{sector.number}</div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em] text-[#357B5F]">{isArabic ? sector.titleAr : sector.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#46515C]">{isArabic ? sector.descriptionAr : sector.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="donnees" className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 max-w-3xl">
              <SectionLabel text={currentCopy.dataLabel} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">{currentCopy.dataTitle}</h2>
              <p className="mt-5 text-lg text-[#66727D]">{currentCopy.dataText}</p>
            </motion.div>
            <div className="grid gap-6 xl:grid-cols-2">
              <motion.div {...reveal} className="moroccan-card rounded-[28px] p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[0.6rem] uppercase tracking-[0.18em] text-[#66727D]">{isArabic ? "تطور الإقليم" : "Évolution territoriale"}</div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#357B5F]">{isArabic ? "الديناميكية السكانية" : "Dynamique démographique"}</h3>
                  </div>
                  <BarChart3 className="h-6 w-6 text-[#357B5F]" />
                </div>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dashboardSeries}>
                      <defs>
                        <linearGradient id="areaMain" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#357B5F" stopOpacity={0.5} />
                          <stop offset="100%" stopColor="#357B5F" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="#dfe5ea" vertical={false} />
                      <XAxis dataKey="name" stroke="#66727D" tickLine={false} axisLine={false} />
                      <YAxis stroke="#66727D" tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Area type="monotone" dataKey="population" stroke="#357B5F" fill="url(#areaMain)" strokeWidth={3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div {...reveal} className="moroccan-card rounded-[28px] p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[0.6rem] uppercase tracking-[0.18em] text-[#66727D]">{isArabic ? "الهيكل الاقتصادي" : "Structure économique"}</div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#357B5F]">{isArabic ? "التوزيع القطاعي" : "Répartition sectorielle"}</h3>
                  </div>
                  <Compass className="h-6 w-6 text-[#357B5F]" />
                </div>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={sectorDistribution} dataKey="value" nameKey="name" innerRadius={58} outerRadius={90} paddingAngle={3}>
                        {sectorDistribution.map((entry, index) => (
                          <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value ?? 0}%`, isArabic ? "النسبة" : "Part"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div {...reveal} className="moroccan-card rounded-[28px] p-5 md:p-6 xl:col-span-2">
                <div className="mb-4 flex items-center gap-4">
                  <div>
                    <div className="text-[0.6rem] uppercase tracking-[0.18em] text-[#66727D]">{isArabic ? "الاتجاهات" : "Tendances"}</div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#357B5F]">{isArabic ? "الاستثمار وفرص الشغل" : "Capacité d’investissement et d’emploi"}</h3>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-[#357B5F]" />
                </div>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dashboardSeries}>
                      <CartesianGrid stroke="#dfe5ea" vertical={false} />
                      <XAxis dataKey="name" stroke="#66727D" tickLine={false} axisLine={false} />
                      <YAxis stroke="#66727D" tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Bar dataKey="emploi" fill="#357B5F" radius={[6, 6, 0, 0]} />
                      <Bar dataKey="investissement" fill="#357B5F" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projets" className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 max-w-3xl">
              <SectionLabel text={isArabic ? "المشاريع" : "Projets"} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
                {isArabic ? "مشاريع بنيوية" : "Projets structurants"}
              </h2>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projectCards.map((project, index) => (
                <motion.div
                  key={project.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[30px] shadow-[0_24px_60px_rgba(11,31,51,0.12)]"
                >
                  <div className="relative h-[420px] overflow-hidden">
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" loading={index === 0 ? "eager" : "lazy"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#285C47]/90 via-[#285C47]/25 to-transparent" />
                  </div>

                  <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/12 bg-[#357B5F]/70 p-5 backdrop-blur-lg transition duration-300 group-hover:-translate-y-1">
                    <div className="text-[0.6rem] uppercase tracking-[0.18em] text-white/75">{isArabic ? project.categoryAr : project.category}</div>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{isArabic ? project.titleAr : project.title}</h3>
                      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 text-[0.58rem] uppercase tracking-[0.12em] text-white/80">
                        {isArabic ? project.statusAr : project.status}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-200/80">
                      <MapPinned className="h-4 w-4 text-[#357B5F]" />
                      {isArabic ? project.locationAr : project.location}
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-200/80">{isArabic ? project.impactAr : project.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="stades-2030" className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 max-w-3xl">
              <SectionLabel text={isArabic ? "كأس العالم 2030" : "Coupe du Monde 2030"} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
                {isArabic ? "ملاعب المغرب في أفق 2030" : "Les stades du Maroc à l’horizon 2030"}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#46515C]">
                {isArabic ? "تستعد المملكة لاستقبال العالم عبر شبكة من المنشآت الرياضية الكبرى في مختلف المدن المغربية." : "Le Maroc prépare une expérience mondiale à travers un réseau d’enceintes sportives majeures dans plusieurs villes du Royaume."}
              </p>
            </motion.div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {moroccoStadiums.map((stadium, index) => (
                <motion.article key={stadium.name} {...reveal} transition={{ ...reveal.transition, delay: index * 0.05 }} className="group overflow-hidden rounded-[28px] border border-[#357B5F]/12 bg-white shadow-[0_16px_40px_rgba(1,71,173,0.08)] transition duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#285C47]">
                    <Image src={stadium.image} alt={isArabic ? stadium.nameAr : stadium.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" loading={index < 2 ? "eager" : "lazy"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#285C47]/90 via-[#285C47]/10 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
                      <div><div className="text-[0.62rem] uppercase tracking-[0.16em] text-white/75">{isArabic ? stadium.cityAr : stadium.city}</div><h3 className="mt-1 text-xl font-semibold tracking-[-0.04em]">{isArabic ? stadium.nameAr : stadium.name}</h3></div>
                      <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.1em] backdrop-blur-md">{isArabic ? stadium.statusAr : stadium.status}</span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3 text-sm"><span className="font-semibold text-[#357B5F]">{stadium.capacity} {isArabic ? "مقعد" : "places"}</span><span className="rounded-full bg-[#ECE8E5] px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[#357B5F]">{isArabic ? stadium.tagAr : stadium.tag}</span></div>
                    <p className="mt-4 text-sm leading-6 text-[#46515C]">{isArabic ? stadium.detailAr : stadium.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
            <p className="mt-8 text-xs leading-6 text-[#46515C]">{isArabic ? "قائمة تعريفية بالملاعب ضمن تحضيرات المغرب لكأس العالم 2030؛ الصور ومعطيات التقدم: Le360 Sport، 2 شتنبر 2026." : "Sélection indicative des enceintes mobilisées dans les préparatifs du Maroc pour 2030 ; images et état d’avancement : Le360 Sport, 2 septembre 2026."}</p>
          </div>
        </section>

        <section id="genz" className="relative overflow-hidden bg-[#357B5F] py-20 text-white sm:py-24">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #ECE8E5 0 1px, transparent 1px), radial-gradient(circle at 80% 60%, #ECE8E5 0 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div><SectionLabel text={isArabic ? "جيل زد" : "GEN Z"} /><h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">{isArabic ? "جيل جديد، ملعب جديد، مستقبل جديد." : "GEN Z ne regarde pas le futur. GEN Z le construit."}</h2></div>
              <div><p className="max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">{isArabic ? "شباب المغرب ليسوا جمهور الغد فقط؛ إنهم صناع التجربة الرقمية، الرياضية والاقتصادية التي سترافق مونديال 2030." : "La GEN Z marocaine n’est pas seulement le public de demain : elle imagine l’expérience digitale, sportive et entrepreneuriale qui accompagnera 2030."}</p><div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold"><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">Digital first</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">Créativité</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">Impact local</span></div></div>
            </motion.div>
          </div>
        </section>

        <section id="vision" className="relative overflow-hidden bg-[#285C47] py-24 text-white">
          <div className="grid-surface absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,162,39,0.16),_transparent_40%)]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="max-w-3xl">
              <SectionLabel text={isArabic ? "الرؤية" : "Vision"} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
                {isArabic ? "جعل بن سليمان إقليماً للفرص." : "Faire de Benslimane un territoire d'opportunités."}
              </h2>
            </motion.div>

            <div className="relative mt-12 grid gap-8 md:grid-cols-3">
              <div className="absolute left-1/2 top-6 hidden h-24 w-px -translate-x-1/2 bg-gradient-to-b from-[#357B5F] to-transparent md:block" />
              {[
                {
                  title: isArabic ? "الجاذبية" : "Attractivité",
                  text: isArabic ? "خلق ظروف الاستقبال، وجودة الحياة وصورة العلامة الإقليمية التي تعزز الثقة والرغبة في الاستثمار." : "Créer les conditions d'un accueil, d'un cadre de vie et d'une image de marque territoriale qui renforcent la confiance et l'envie d'investir.",
                },
                {
                  title: isArabic ? "التنافسية" : "Compétitivité",
                  text: isArabic ? "تجعل بن سليمان مكاناً لتوسيع فرص النشاط والابتكار والتنمية الاقتصادية المستدامة." : "Positionner Benslimane comme un lieu où se déploient les opportunités d'activité, l'innovation et le développement économique durable.",
                },
                {
                  title: isArabic ? "الاستدامة" : "Durabilité",
                  text: isArabic ? "مواءمة النمو مع حماية الموارد الطبيعية وجودة الحياة والتنمية على المدى الطويل للأجيال القادمة." : "Concilier croissance, protection des ressources naturelles, qualité de vie et long terme pour les générations futures.",
                },
              ].map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.06 }}
                  className="relative rounded-[28px] border border-white/10 bg-white/4 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#357B5F]/12 text-[#357B5F]">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{pillar.title}</h3>
                  <div className="my-5 h-px w-12 bg-gradient-to-r from-[#357B5F] to-transparent" />
                  <p className="text-base leading-7 text-slate-200">{pillar.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 max-w-3xl">
              <SectionLabel text={isArabic ? "المكتب الاستشاري" : "Le bureau d'études"} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
                {isArabic ? "خبرة تخدم الإقليم." : "Une expertise au service du territoire."}
              </h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div {...reveal} className="moroccan-card rounded-[30px] p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {bureauServices.map((service) => (
                    <div key={service.fr} className="flex items-start gap-3 rounded-2xl border border-[#357B5F]/8 bg-[#E8E8E8] p-4">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ECE8E5] text-[#357B5F]">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-base font-medium text-[#1D2733]">{isArabic ? service.ar : service.fr}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...reveal} className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.number} className="moroccan-card rounded-[24px] p-5">
                    <div className="flex items-center gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#357B5F] text-lg font-semibold text-white">
                        {step.number}
                      </div>
                      <div>
                        <div className="text-xl font-semibold tracking-[-0.05em] text-[#357B5F]">{isArabic ? step.titleAr : step.title}</div>
                        <p className="mt-1 text-base leading-7 text-[#46515C]">{isArabic ? step.descriptionAr : step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-[30px] border border-[#357B5F]/8 bg-white shadow-[0_20px_50px_rgba(11,31,51,0.08)]">
                <div className="relative h-[520px] overflow-hidden">
                  <Image src="/ahmed-dehy.jpeg" alt="Ahmed Dehy" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#285C47]/55 via-transparent to-transparent" />

                </div>
              </div>

              <div>
                <SectionLabel text={isArabic ? "رؤية عامة" : "Vision publique"} />
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
                  {isArabic ? "رؤية من أجل الإقليم" : "Une vision pour le territoire"}
                </h2>
                <div className="mt-8 rounded-[26px] border border-[#357B5F]/8 bg-white p-6 shadow-[0_20px_50px_rgba(11,31,51,0.04)]">
                  <div className="text-[0.62rem] uppercase tracking-[0.2em] text-[#66727D]">{currentCopy.candidateLabel}</div>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#357B5F]">{publicFigure.name}</h3>
                  <p className="mt-2 text-[#285C47]">{isArabic ? (publicFigure.roleAr ?? publicFigure.role) : publicFigure.role}</p>
                  <p className="mt-6 text-lg leading-8 text-[#46515C]">{isArabic ? (publicFigure.introAr ?? publicFigure.intro) : publicFigure.intro}</p>
                  <p className="mt-5 text-base leading-7 text-[#46515C]">{isArabic ? (publicFigure.backgroundAr ?? publicFigure.background) : publicFigure.background}</p>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 flex items-end justify-between gap-4">
              <div>
                <SectionLabel text={isArabic ? "التحليل والأخبار" : "Analyses & actualités"} />
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
                  {isArabic ? "التحليل والأخبار" : "Analyses & actualités"}
                </h2>
              </div>
              <a href="#contact" className="hidden items-center gap-2 text-sm font-semibold text-[#357B5F] md:inline-flex">
                {isArabic ? "عرض جميع التحليلات" : "Voir toutes les analyses"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {articleCards.map((article, index) => (
                <motion.article
                  key={article.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.05 }}
                  className="group overflow-hidden rounded-[28px] border border-[#357B5F]/8 bg-white shadow-[0_18px_42px_rgba(11,31,51,0.04)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4 text-[0.6rem] uppercase tracking-[0.18em] text-[#66727D]">
                      <span>{isArabic ? article.categoryAr : article.category}</span>
                      <span>{isArabic ? article.dateAr : article.date}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-[#357B5F]">{isArabic ? article.titleAr : article.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#46515C]">{isArabic ? article.descriptionAr : article.description}</p>
                    <div className="mt-7 flex items-center justify-between border-t border-[#357B5F]/8 pt-4">
                      <span className="text-sm font-medium text-[#357B5F]">{isArabic ? "اقرأ المقال" : "Lire l'article"}</span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ECE8E5] text-[#357B5F] transition group-hover:bg-[#357B5F] group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12">
              <SectionLabel text={isArabic ? "المدونة" : "Blog"} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
                {isArabic ? "آخر الأخبار والمقالات" : "Actualités et analyses"}
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {blogArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.04 }}
                  className="group overflow-hidden rounded-[28px] border border-[#357B5F]/8 bg-white shadow-[0_18px_42px_rgba(11,31,51,0.04)] transition duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-[200px] overflow-hidden bg-gradient-to-br from-[#357B5F]/10 to-[#357B5F]/5">
                    <Image src={article.image} alt={isArabic ? article.titleAr : article.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#357B5F]/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.16em]">
                      <span className="text-[#357B5F]">{isArabic ? article.categoryAr : article.category}</span>
                      <span className="text-[#66727D]">{isArabic ? article.dateAr : article.date}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-[-0.04em] text-[#357B5F] line-clamp-2">
                      {isArabic ? article.titleAr : article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#46515C] line-clamp-2">{isArabic ? article.excerptAr : article.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-[#357B5F]/8 pt-4">
                      <span className="text-sm font-medium text-[#357B5F]">
                        {isArabic ? "اقرأ المقال" : "Lire"}
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ECE8E5] text-[#357B5F] transition group-hover:bg-[#357B5F] group-hover:text-white">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="partenariats" className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 max-w-3xl">
              <SectionLabel text={isArabic ? "الشراكات" : "Partenariats"} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
                {isArabic ? "شركاء استراتيجيون" : "Nos partenaires stratégiques"}
              </h2>
              <p className="mt-5 text-lg text-[#66727D]">
                {isArabic ? "متعاونون دوليون لتطوير بن سليمان" : "Collaborations internationales pour le développement de Benslimane"}
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {partnerships.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[28px] border border-[#357B5F]/8 bg-white p-6 shadow-[0_16px_40px_rgba(11,31,51,0.05)] transition-all duration-300"
                >
                  <div className="mb-4 text-5xl">{partner.logo}</div>
                  <div className="text-[0.6rem] uppercase tracking-[0.16em] text-[#357B5F]">{isArabic ? partner.statusAr : partner.status}</div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#357B5F]">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#66727D]">{isArabic ? partner.sectorAr : partner.sector}</p>
                  <p className="mt-4 text-base leading-7 text-[#46515C]">{isArabic ? partner.descriptionAr : partner.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ECE8E5] px-3 py-1.5 text-sm font-medium text-[#357B5F]">
                    {isArabic ? "تعرف أكثر" : "En savoir plus"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="recrutement" className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 max-w-3xl">
              <SectionLabel text={isArabic ? "الوظائف" : "Recrutement"} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
                {isArabic ? "انضم إلى فريقنا" : "Rejoignez notre équipe"}
              </h2>
              <p className="mt-5 text-lg text-[#66727D]">
                {isArabic ? "فرص وظيفية في مجالات التطوير والابتكار" : "Opportunités de carrière dans le développement territorial"}
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {recruitmentPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-[28px] border border-[#357B5F]/8 bg-white p-7 shadow-[0_16px_40px_rgba(11,31,51,0.05)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[0.6rem] uppercase tracking-[0.16em] text-[#357B5F]">{isArabic ? position.departmentAr : position.department}</div>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#357B5F]">
                        {isArabic ? position.titleAr : position.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#357B5F]/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#357B5F]">
                      {isArabic ? position.typeAr : position.type}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-[#66727D]">
                    <MapPinned className="h-4 w-4" />
                    {isArabic ? position.locationAr : position.location}
                  </div>

                  <p className="mt-4 text-base leading-7 text-[#46515C]">{isArabic ? position.descriptionAr : position.description}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={`#contact?position=${position.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#357B5F] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#285C47]"
                    >
                      {isArabic ? "تقدم الآن" : "Candidater"}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq-carte" className="section-shell bg-[#ECE8E5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="mb-12 max-w-3xl">
              <SectionLabel text={isArabic ? "الأسئلة والموقع" : "FAQ & localisation"} />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#357B5F] md:text-5xl">
                {isArabic ? "إجابات سريعة وموقع بن سليمان" : "Réponses rapides et localisation de Benslimane"}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#46515C]">
                {isArabic ? "معلومات أساسية حول الإقليم وفرصه وموقعه الجغرافي." : "Les réponses essentielles sur le territoire, ses opportunités et sa localisation."}
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
              <motion.div {...reveal} className="space-y-3">
                {(isArabic ? [
                  ["من هو أحمد الدهي؟", "أحمد الدهي فاعل ترابي ومرشح للمؤسسات المنتخبة، يدافع عن رؤية قريبة من المواطنين وعن تنمية بن سليمان."],
                  ["لماذا الاستثمار في بن سليمان؟", "تتموقع بن سليمان بين الدار البيضاء والرباط، وتجمع بين الإمكانات الفلاحية والصناعية والسياحية واللوجستية."],
                  ["ما هي القطاعات ذات الأولوية؟", "تشمل القطاعات ذات الأولوية الفلاحة والسياحة والصناعة واللوجستيات والعقارات والطاقة المتجددة والرياضة."],
                  ["ما هي المشاريع المهيكلة قيد التحضير؟", "تشمل المشاريع المهيكلة البنية التحتية والتهيئة الترابية والمنشآت الرياضية والفرص المرتبطة بأفق 2030."],
                  ["كيف يمكن التواصل مع الفريق؟", "يمكنكم التواصل عبر البريد الإلكتروني contact@benslimane2030.ma أو استخدام نموذج التواصل في أسفل الصفحة."],
                ] : [
                  ["Qui est Ahmed Dehy ?", "Ahmed Dehy est un acteur territorial et candidat aux institutions, porteur d’une vision de proximité pour le développement de Benslimane."],
                  ["Pourquoi investir à Benslimane ?", "Benslimane se situe entre Casablanca et Rabat et réunit des potentiels agricoles, industriels, touristiques et logistiques."],
                  ["Quels sont les secteurs prioritaires ?", "Les secteurs prioritaires comprennent l’agriculture, le tourisme, l’industrie, la logistique, l’immobilier, les énergies renouvelables et le sport."],
                  ["Quels projets structurants sont en préparation ?", "Les projets structurants concernent les infrastructures, l’aménagement territorial, les équipements sportifs et les opportunités liées à l’horizon 2030."],
                  ["Comment contacter l’équipe ?", "Vous pouvez écrire à contact@benslimane2030.ma ou utiliser le formulaire de contact situé en bas de la page."],
                ]).map(([question, answer]) => (
                  <details key={question} className="group rounded-2xl border border-[#357B5F]/12 bg-white px-5 py-4 shadow-[0_10px_24px_rgba(40,92,71,0.05)]">
                    <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-[#285C47] marker:hidden">{question}</summary>
                    <p className="mt-3 text-sm leading-7 text-[#46515C]">{answer}</p>
                  </details>
                ))}
              </motion.div>

              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="overflow-hidden rounded-[28px] border border-[#357B5F]/12 bg-white shadow-[0_16px_40px_rgba(40,92,71,0.08)]">
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <MapPinned className="h-5 w-5 text-[#357B5F]" />
                    <h3 className="text-xl font-semibold text-[#285C47]">{isArabic ? "موقع بن سليمان" : "Benslimane sur la carte"}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#66727D]">{isArabic ? "المغرب · جهة الدار البيضاء سطات" : "Maroc · Région Casablanca-Settat"}</p>
                </div>
                <iframe
                  title={isArabic ? "خريطة بن سليمان" : "Carte de Benslimane"}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-7.28%2C33.50%2C-6.98%2C33.72&layer=mapnik&marker=33.6186%2C-7.13"
                  className="h-[300px] w-full border-0 sm:h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-5 sm:p-6">
                  <a href="https://www.openstreetmap.org/?mlat=33.6186&mlon=-7.13#map=12/33.6186/-7.13" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#357B5F] underline-offset-4 hover:underline">{isArabic ? "فتح الخريطة بشكل أكبر" : "Ouvrir la carte en grand"}</a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-[#357B5F] py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,162,39,0.18),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div {...reveal} className="flex flex-col justify-between">
                <div>
                  <SectionLabel text={isArabic ? "تواصل" : "Contact"} />
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
                    {isArabic ? "ابقَ على تواصل معنا" : "Restons en contact"}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-slate-200">
                    {isArabic ? "لأي استفسار أو طلب معلومات، تواصل معنا مباشرة" : "Pour toute question ou demande d'information, contactez-nous directement"}
                  </p>
                </div>

                <div className="mt-8 space-y-4 md:mt-12">
                  <div className="rounded-[20px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="text-[0.6rem] uppercase tracking-[0.16em] text-[#ECE8E5]">
                      {isArabic ? "البريد الإلكتروني" : "Email"}
                    </div>
                    <a href={`mailto:${contactInfo.email}`} className="mt-2 text-lg font-semibold text-white hover:text-[#ECE8E5] transition">
                      {contactInfo.email}
                    </a>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="text-[0.6rem] uppercase tracking-[0.16em] text-[#ECE8E5]">
                      {isArabic ? "الهاتف" : "Téléphone"}
                    </div>
                    <a href={`tel:${contactInfo.phone}`} className="mt-2 text-lg font-semibold text-white hover:text-[#ECE8E5] transition">
                      {contactInfo.phone}
                    </a>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="text-[0.6rem] uppercase tracking-[0.16em] text-[#ECE8E5]">
                      {isArabic ? "العنوان" : "Adresse"}
                    </div>
                    <p className="mt-2 text-base text-slate-200">{isArabic ? (contactInfo.addressAr ?? contactInfo.address) : contactInfo.address}</p>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="text-[0.6rem] uppercase tracking-[0.16em] text-[#ECE8E5] mb-4">
                      {isArabic ? "تابعنا على وسائل التواصل" : "Suivez nous"}
                    </div>
                    <div className="flex gap-3">
                      {contactInfo.socialMedia.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-medium text-white transition hover:bg-[#ECE8E5] hover:text-[#357B5F] hover:border-[#357B5F]"
                        >
                          {social.platform[0]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white mb-6">
                  {isArabic ? "أرسل لنا رسالة" : "Nous écrire"}
                </h3>

                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      {isArabic ? "الاسم الكامل" : "Nom complet"}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[16px] border border-white/15 bg-white/8 px-4 py-3 text-white placeholder-slate-400 transition duration-300 focus:border-[#357B5F] focus:outline-none focus:bg-white/12"
                      placeholder={isArabic ? "أدخل اسمك الكامل" : "Votre nom"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      {isArabic ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-[16px] border border-white/15 bg-white/8 px-4 py-3 text-white placeholder-slate-400 transition duration-300 focus:border-[#357B5F] focus:outline-none focus:bg-white/12"
                      placeholder={isArabic ? "بريدك الإلكتروني" : "votre@email.com"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      {isArabic ? "الموضوع" : "Sujet"}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[16px] border border-white/15 bg-white/8 px-4 py-3 text-white placeholder-slate-400 transition duration-300 focus:border-[#357B5F] focus:outline-none focus:bg-white/12"
                      placeholder={isArabic ? "موضوع الرسالة" : "Sujet du message"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      {isArabic ? "الرسالة" : "Message"}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-[16px] border border-white/15 bg-white/8 px-4 py-3 text-white placeholder-slate-400 transition duration-300 focus:border-[#357B5F] focus:outline-none focus:bg-white/12 resize-none"
                      placeholder={isArabic ? "اكتب رسالتك هنا..." : "Votre message..."}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#ECE8E5] px-6 py-3.5 text-sm font-semibold text-[#357B5F] transition hover:bg-white hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    {isArabic ? "إرسال الرسالة" : "Envoyer"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#285C47] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <Image src="/dehy-logo.jpg" alt="DEHY Real Estate Development & Investment, Benslimane Morocco" width={220} height={120} className="h-auto w-44 rounded-md object-contain" />
              <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
                {isArabic ? "مكتب دراسات متخصص في التنمية الإقليمية والاستثمار وجاذبية الاقتصاد في إقليم بن سليمان." : "Bureau d’études spécialisé dans le développement territorial, l’investissement et l’attractivité économique de la Province de Benslimane."}
              </p>
            </div>

            <div>
              <div className="text-[0.62rem] uppercase tracking-[0.18em] text-[#357B5F]">{isArabic ? "التنقل" : "Navigation"}</div>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition hover:text-white">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[0.62rem] uppercase tracking-[0.18em] text-[#357B5F]">{isArabic ? "الاستثمار" : "Investissement"}</div>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {footerLinks.investment.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition hover:text-white">{isArabic ? item.labelAr : item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[0.62rem] uppercase tracking-[0.18em] text-[#357B5F]">{isArabic ? "تواصل" : "Contact"}</div>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>contact@benslimane-province.ma</li>
                <li>{isArabic ? "إقليم بن سليمان" : "Province de Benslimane"}</li>
                <li>{isArabic ? "المملكة المغربية" : "Royaume du Maroc"}</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p>{isArabic ? "إقليم بن سليمان · المملكة المغربية" : "Province de Benslimane · Royaume du Maroc"}</p>
              <p>© 2026 {isArabic ? "بن سليمان — التنمية والاستثمار" : "Benslimane — Développement & Investissement"} · {isArabic ? "آخر تحديث: 10 شتنبر 2026" : "Dernière mise à jour : 10 septembre 2026"}</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="/legal" className="transition hover:text-white">{isArabic ? "الإشعارات القانونية" : "Mentions légales"}</a>
              <a href="/privacy" className="transition hover:text-white">{isArabic ? "سياسة الخصوصية" : "Politique de confidentialité"}</a>
              <a href="/cookies" className="transition hover:text-white">{isArabic ? "سياسة ملفات الارتباط" : "Politique relative aux cookies"}</a>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#357B5F] text-white shadow-[0_10px_30px_rgba(11,31,51,0.25)] transition hover:bg-[#285C47]"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
