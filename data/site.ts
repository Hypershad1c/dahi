export const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "La Province", href: "#province" },
  { label: "Investir", href: "#investir" },
  { label: "Études & Données", href: "#donnees" },
  { label: "Projets", href: "#projets" },
  { label: "Blog", href: "#blog" },
  { label: "Partenariats", href: "#partenariats" },
  { label: "Vision", href: "#vision" },
  { label: "Recrutement", href: "#recrutement" },
  { label: "Contact", href: "#contact" },
] as const;

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export const statistics: readonly Stat[] = [
  { label: "Population", value: 250, suffix: "K", description: "عدد السكان" },
  { label: "Superficie", value: 55, suffix: "Kha", description: "المساحة الإجمالية" },
  { label: "Communes", value: 16, description: "عدد الجماعات المحلية" },
  { label: "Zones d'activité", value: 8, description: "مناطق النشاط" },
  { label: "Projets structurants", value: 12, description: "المشاريع الرئيسية" },
  { label: "Potentiel agricole", value: 75, suffix: "%", description: "الإمكانات الزراعية" },
] as const;

export const investmentCards = [
  {
    title: "Agriculture",
    titleAr: "الزراعة",
    description: "Valorisation des filières agricoles et agro-industrielles autour de l'innovation, de la logistique et de la transformation locale.",
    descriptionAr: "تطوير القطاع الزراعي والصناعات الغذائية من خلال الابتكار والخدمات اللوجستية والمعالجة المحلية.",
    note: "Opportunité prioritaire",
    noteAr: "فرصة أولوية",
    icon: "Leaf",
  },
  {
    title: "Tourisme",
    titleAr: "السياحة",
    description: "Développement d'un tourisme durable et de proximité, entre patrimoine, nature, circuit culturel et accueil de qualité.",
    descriptionAr: "تطوير السياحة المستدامة والمحلية من خلال التراث الثقافي والطبيعة والخدمات السياحية عالية الجودة.",
    note: "Attractivité territoriale",
    noteAr: "جاذبية إقليمية",
    icon: "MountainSnow",
  },
  {
    title: "Industrie",
    titleAr: "الصناعة",
    description: "Installation d'activités industrielles en lien avec la proximité des grands pôles économiques et la disponibilité foncière.",
    descriptionAr: "إنشاء الأنشطة الصناعية بالقرب من المراكز الاقتصادية الكبرى والأراضي المتاحة.",
    note: "Croissance productive",
    noteAr: "نمو إنتاجي",
    icon: "Factory",
  },
  {
    title: "Logistique",
    titleAr: "اللوجستيات",
    description: "Renforcement du positionnement stratégique de Benslimane à l'intersection des flux nationaux et régionaux.",
    descriptionAr: "تعزيز الموقع الاستراتيجي لبن سليمان عند التقاطع بين الممرات الوطنية والإقليمية.",
    note: "Positionnement stratégique",
    noteAr: "موقع استراتيجي",
    icon: "Truck",
  },
  {
    title: "Immobilier",
    titleAr: "العقارات",
    description: "Développement résidentiel, d'affaires et de services, en cohérence avec la dynamique urbaine et les besoins de logement.",
    descriptionAr: "تطوير المشاريع السكنية والتجارية والخدمات بما يتسق مع الديناميكية الحضرية.",
    note: "Urbanisation durable",
    noteAr: "تحضر مستدام",
    icon: "Building2",
  },
  {
    title: "Énergie renouvelable",
    titleAr: "الطاقة المتجددة",
    description: "Déploiement des énergies solaires et des usages durables pour accompagner la transition énergétique du territoire.",
    descriptionAr: "نشر الطاقة الشمسية والاستخدام المستدام لدعم الانتقال الطاقي للإقليم.",
    note: "Transition énergétique",
    noteAr: "انتقال طاقي",
    icon: "SunMedium",
  },
  {
    title: "Sport & Loisirs",
    titleAr: "الرياضة والترفيه",
    description: "Équipements sportifs, animation locale, tourisme actif et services associés à une ambition de qualité de vie.",
    descriptionAr: "المنشآت الرياضية والأنشطة المحلية والسياحة النشطة لتحسين جودة الحياة.",
    note: "Qualité de vie",
    noteAr: "جودة الحياة",
    icon: "Trophy",
  },
  {
    title: "Services",
    titleAr: "الخدمات",
    description: "Services aux entreprises, innovation, conseil et accompagnement des structures de croissance locale.",
    descriptionAr: "خدمات الأعمال والابتكار والاستشارة وتطوير المشاريع المحلية.",
    note: "Services & innovation",
    noteAr: "خدمات وابتكار",
    icon: "BriefcaseBusiness",
  },
] as const;

export const sectors = [
  { number: "01", title: "Agriculture & Agro-industrie", titleAr: "الزراعة والصناعات الغذائية", description: "Valorisation des ressources rurales et des chaînes de valeur locales.", descriptionAr: "تطوير الموارد الريفية وسلاسل القيمة المحلية." },
  { number: "02", title: "Tourisme & Écotourisme", titleAr: "السياحة والسياحة البيئية", description: "Patrimoine, nature et accueil de qualité pour une attractivité durable.", descriptionAr: "التراث والطبيعة والضيافة عالية الجودة للجاذبية المستدامة." },
  { number: "03", title: "Industrie", titleAr: "الصناعة", description: "Production, logistique et développement de bassins d'activités.", descriptionAr: "الإنتاج واللوجستيات وتطوير المناطق الصناعية." },
  { number: "04", title: "Logistique", titleAr: "النقل واللوجستيات", description: "Flux, infrastructures et mobilité pour les entreprises.", descriptionAr: "التدفقات والبنية التحتية والحركة للشركات." },
  { number: "05", title: "Énergies renouvelables", titleAr: "الطاقات المتجددة", description: "Solaire, efficacité énergétique et transition territoriale.", descriptionAr: "الطاقة الشمسية والكفاءة الطاقية والانتقال الإقليمي." },
  { number: "06", title: "Immobilier & Urbanisme", titleAr: "العقارات والتخطيط الحضري", description: "Habitat, aménagement et services pour une ville plus attractive.", descriptionAr: "السكن والعمران والخدمات لمدينة أكثر جاذبية." },
  { number: "07", title: "Sport", titleAr: "الرياضة", description: "Équipements, sport de haut niveau et qualité de vie locale.", descriptionAr: "المنشآت والرياضة الاحترافية وجودة الحياة المحلية." },
  { number: "08", title: "Innovation & Services", titleAr: "الابتكار والخدمات", description: "Conseil, données, accompagnement et nouvelles activités créatrices.", descriptionAr: "الاستشارة والبيانات والدعم والأنشطة الإبداعية الجديدة." },
] as const;

export const dashboardSeries = [
  { name: "2020", population: 32, emploi: 24, investissement: 18 },
  { name: "2021", population: 35, emploi: 28, investissement: 22 },
  { name: "2022", population: 38, emploi: 31, investissement: 28 },
  { name: "2023", population: 42, emploi: 36, investissement: 34 },
  { name: "2024", population: 46, emploi: 41, investissement: 39 },
  { name: "2025", population: 52, emploi: 48, investissement: 46 },
] as const;

export const sectorDistribution = [
  { name: "Agriculture", value: 27 },
  { name: "Industrie", value: 24 },
  { name: "Services", value: 21 },
  { name: "Tourisme", value: 16 },
  { name: "Logistique", value: 12 },
] as const;

export const projectCards = [
  {
    title: "Zone d'activité économique",
    titleAr: "منطقة نشاط اقتصادي",
    category: "Industrie & logistique",
    categoryAr: "الصناعة واللوجستيات",
    location: "Province de Benslimane",
    locationAr: "إقليم بن سليمان",
    status: "Étude de faisabilité",
    statusAr: "دراسة الجدوى",
    impact: "Démultiplication de l'emploi et des activités économiques",
    impactAr: "تضاعف فرص التوظيف والأنشطة الاقتصادية",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Programme de valorisation agricole",
    titleAr: "برنامج تحسين القطاع الزراعي",
    category: "Agriculture & agro-industrie",
    categoryAr: "الزراعة والصناعات الغذائية",
    location: "Territoires ruraux",
    locationAr: "المناطق الريفية",
    status: "Plan de mise en œuvre",
    statusAr: "خطة التنفيذ",
    impact: "Modernisation des filières et création de valeur locale",
    impactAr: "تحديث القطاعات وخلق القيمة المحلية",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Écotourisme et patrimoine naturel",
    titleAr: "السياحة البيئية والتراث الطبيعي",
    category: "Tourisme & environnement",
    categoryAr: "السياحة والبيئة",
    location: "Sites de proximité",
    locationAr: "المواقع القريبة",
    status: "Programmation",
    statusAr: "مرحلة التخطيط",
    impact: "Attractivité, accueil et développement durable",
    impactAr: "الجاذبية والضيافة والتنمية المستدامة",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mobilité et infrastructures",
    titleAr: "الحركة والبنية التحتية",
    category: "Infrastructures",
    categoryAr: "البنية التحتية",
    location: "Axes de desserte",
    locationAr: "محاور الخدمة",
    status: "Diagnostic territorial",
    statusAr: "التشخيص الإقليمي",
    impact: "Amélioration de la connectivité et de la fluidité des échanges",
    impactAr: "تحسين الاتصالية وتسهيل التبادلات",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const articleCards = [
  {
    category: "Études",
    date: "14 août 2026",
    title: "Quels leviers pour accélérer l'attractivité économique de Benslimane ?",
    description: "Une lecture territoriale des opportunités, des contraintes et des priorités d'action pour le développement local.",
  },
  {
    category: "Investissement",
    date: "02 juillet 2026",
    title: "Investir dans les territoires : enjeux, modèles et séquences de mise en œuvre",
    description: "Une analyse des conditions qui favorisent la décision d'investissement sur des territoires à fort potentiel.",
  },
  {
    category: "Développement territorial",
    date: "18 juin 2026",
    title: "Benslimane au carrefour des dynamiques économiques régionales",
    description: "Un regard sur la position stratégique, les infrastructures et les axes de développement à prioriser.",
  },
  {
    category: "Actualités économiques",
    date: "09 mai 2026",
    title: "Territoires, innovation et attractivité : les nouvelles logiques de croissance",
    description: "Des éléments de contexte pour repenser les trajectoires de développement durable et inclusif.",
  },
] as const;

export const bureauServices = [
  { fr: "Analyse territoriale", ar: "التحليل الإقليمي" },
  { fr: "Études économiques", ar: "الدراسات الاقتصادية" },
  { fr: "Études d'impact", ar: "دراسات الأثر" },
  { fr: "Accompagnement des investisseurs", ar: "دعم المستثمرين" },
  { fr: "Data & intelligence territoriale", ar: "البيانات والذكاء الإقليمي" },
  { fr: "Stratégie de développement", ar: "استراتيجية التنمية" },
  { fr: "Veille économique", ar: "المراقبة الاقتصادية" },
] as const;

export const processSteps = [
  { number: "01", title: "Analyser", titleAr: "التحليل", description: "Comprendre les logiques du territoire, ses atouts et ses contraintes.", descriptionAr: "فهم منطق الإقليم ومزاياه وتحدياته." },
  { number: "02", title: "Identifier", titleAr: "التحديد", description: "Repérer les leviers, les opportunités et les priorités d'action.", descriptionAr: "تحديد الروافع والفرص والأولويات." },
  { number: "03", title: "Structurer", titleAr: "التنظيم", description: "Mettre en cohérence les projets, les acteurs et les ressources.", descriptionAr: "مواءمة المشاريع والجهات الفاعلة والموارد." },
  { number: "04", title: "Accompagner", titleAr: "المساندة", description: "Assurer le suivi, la mise en relation et la concrétisation des projets.", descriptionAr: "ضمان المتابعة والتعاون وتحقيق المشاريع." },
] as const;

export const publicFigure = {
  name: "Hamad El Dhehi / حمد الدهي",
  role: "Acteur territorial et candidat aux institutions",
  intro:
    "Hamad El Dhehi incarne une vision de proximité, de développement territorial et de représentation du terrain au service de Benslimane et de ses habitants.",
  background:
    "Son engagement s'inscrit dans un projet de développement structurant : mieux représenter les citoyens, encourager les opportunités d'investissement, impulser des projets d'infrastructure et faire de Benslimane un territoire plus attractif à l'horizon de la Coupe du Monde 2026 et au-delà.",

};

export const footerLinks = {
  navigation: [
    { label: "Accueil", href: "#accueil" },
    { label: "La Province", href: "#province" },
    { label: "Investir", href: "#investir" },
    { label: "Études", href: "#donnees" },
    { label: "Contact", href: "#contact" },
  ],
  investment: [
    { label: "Agriculture", href: "#investir" },
    { label: "Industrie", href: "#investir" },
    { label: "Logistique", href: "#investir" },
    { label: "Tourisme", href: "#investir" },
  ],
};

export const pageMeta = {
  title: "Benslimane | Investissement, développement territorial et Coupe du Monde 2026",
  description:
    "Découvrez Benslimane, ses opportunités d'investissement, la vision de Hamad El Dhehi et la dynamique territoriale à l'horizon de la Coupe du Monde 2026.",
};

// Blog Articles
export const blogArticles = [
  {
    id: 1,
    title: "Grand Stade Hassan II : L'avancée des travaux et l'impact économique",
    excerpt: "Découvrez les dernières actualités sur la construction du plus grand stade de football au monde.",
    date: "15 septembre 2026",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1531415407113-9b95eaac05a4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Ville intelligente : Benslimane se transforme",
    excerpt: "Comment Benslimane se positionne comme centre de développement urbain durable et innovant.",
    date: "10 septembre 2026",
    category: "Développement urbain",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Opportunités immobilières : Partenariat avec Domify",
    excerpt: "Explorez les nouvelles opportunités d'investissement immobilier adaptées à la demande internationale.",
    date: "05 septembre 2026",
    category: "Immobilier",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Gare TGV : Connecter Benslimane au reste du Maroc",
    excerpt: "La modernisation de la gare et l'arrivée du TGV positionneront Benslimane comme carrefour stratégique.",
    date: "01 septembre 2026",
    category: "Transport",
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b1?auto=format&fit=crop&w=600&q=80",
  },
];

// Partnerships
export const partnerships = [
  {
    name: "Domify",
    sector: "Immobilier & Développement urbain",
    description: "Partenaire stratégique pour le développement du secteur immobilier et l'adaptation aux standards internationaux.",
    logo: "🏢",
    status: "Actif",
  },
  {
    name: "Fédération Internationale de Football",
    sector: "Sport & Événements",
    description: "Collaboration pour l'organisation et l'accueil de la Coupe du Monde 2030.",
    logo: "⚽",
    status: "En cours de négociation",
  },
  {
    name: "Agence Mondiale du Tourisme",
    sector: "Tourisme",
    description: "Développement du tourisme durable et promotion de Benslimane comme destination.",
    logo: "🌍",
    status: "Actif",
  },
  {
    name: "Réseau des Villes Intelligentes",
    sector: "Innovation & Technologie",
    description: "Partage de bonnes pratiques et accompagnement dans la transformation numérique.",
    logo: "💡",
    status: "Actif",
  },
];

// Recruitment & Contact
export const recruitmentPositions = [
  {
    id: 1,
    title: "Responsable Développement Immobilier",
    department: "Immobilier",
    location: "Benslimane",
    type: "CDI",
    description: "Pilotage des projets immobiliers et partenariats avec Domify.",
  },
  {
    id: 2,
    title: "Chef de Projet Stade Hassan II",
    department: "Infrastructures",
    location: "Benslimane",
    type: "CDI",
    description: "Suivi et coordination des travaux du Grand Stade Hassan II.",
  },
  {
    id: 3,
    title: "Responsable Tourisme & Marketing",
    department: "Tourisme",
    location: "Benslimane",
    type: "CDI",
    description: "Promotion et développement de l'offre touristique locale.",
  },
  {
    id: 4,
    title: "Développeur Full Stack",
    department: "Technologie",
    location: "Benslimane",
    type: "CDI",
    description: "Développement de solutions pour la ville intelligente.",
  },
];

export const contactInfo = {
  phone: "+212 (0) 5XX XXX XXX",
  email: "contact@benslimane2030.ma",
  address: "Benslimane, Province de Benslimane, Maroc",
  socialMedia: [
    { platform: "Facebook", url: "#" },
    { platform: "Instagram", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "Twitter", url: "#" },
  ],
};
