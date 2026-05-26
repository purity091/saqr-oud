import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  targetAudience: string;
  stockLevel: string;
}

export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProblemSection {
  title: string;
  problems: ProblemItem[];
}

export interface MarketingPackage {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  icon: string;
}

export interface MarketingPackagesSection {
  title: string;
  subtitle: string;
  packages: MarketingPackage[];
}

export interface MarketDetail {
  label: string;
  value: string;
  description: string;
}

export interface MarketTrend {
  name: string;
  description: string;
  growth: string;
  icon: string;
}

export interface Competitor {
  name: string;
  strength: string;
  weakness: string;
}

export interface MarketSize {
  title: string;
  icon: string;
  mainStat: string;
  mainStatLabel: string;
  details: MarketDetail[];
  insights: string[];
}

export interface MarketTrendsSection {
  title: string;
  icon: string;
  trends: MarketTrend[];
}

export interface CompetitorsAnalysis {
  title: string;
  icon: string;
  directCompetitors: Competitor[];
  ourAdvantage: string[];
}

export interface SWOTAnalysis {
  title: string;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface MarketAnalysisSection {
  title: string;
  subtitle: string;
  marketSize: MarketSize;
  trends: MarketTrendsSection;
  competitors: CompetitorsAnalysis;
  swot: SWOTAnalysis;
}

export interface PersonaGoal {
  name: string;
  role: string;
  age: string;
  icon: string;
  description: string;
  goals: string[];
  challenges: string[];
  shoppingHabits: string[];
  quote: string;
}

export interface AudienceDetailsSection {
  title: string;
  subtitle: string;
  personas: PersonaGoal[];
}

export interface ValuePillar {
  title: string;
  icon: string;
  description: string;
  examples: string[];
  impact: string;
}

export interface ValuePropositionDetails {
  title: string;
  subtitle: string;
  pillars: ValuePillar[];
}

export interface MarketingTactic {
  name: string;
  description: string;
  channels?: string[];
  frequency?: string;
  duration?: string;
  expectedReach?: string;
  examples?: string[];
  expectedSales?: string;
  expectedUsage?: string;
  expectedMembers?: string;
  redemption?: string;
  minPurchase?: string;
  prizes?: string[];
  discount?: string;
  validity?: string;
  expectedRedemption?: string;
  expectedSatisfaction?: string;
  optIn?: string;
  expectedOpenRate?: string;
  occasions?: string[];
}

export interface FunnelStage {
  stage: string;
  goal: string;
  budget: string;
  tactics: MarketingTactic[];
  kpis: string;
}

export interface StrategyDetails {
  title: string;
  subtitle: string;
  funnel: FunnelStage[];
}

export interface BudgetItem {
  name: string;
  amount: string;
  details: string;
}

export interface BudgetCategory {
  category: string;
  percentage: number;
  amount: string;
  items: BudgetItem[];
}

export interface BudgetROI {
  expectedRevenue: string;
  marketingSpend: string;
  roi: string;
  paybackPeriod: string;
}

export interface BudgetDetails {
  title: string;
  subtitle: string;
  monthlyBudget: string;
  breakdown: BudgetCategory[];
  roi: BudgetROI;
}

export interface KPIDetail {
  name: string;
  target: string;
  tracking: string;
  frequency: string;
  action: string;
}

export interface KPIsDetails {
  title: string;
  subtitle: string;
  salesKpis: KPIDetail[];
  customerKpis: KPIDetail[];
  marketingKpis: KPIDetail[];
}

export interface ChannelDetail {
  name: string;
  budget: string;
  reach: string;
  frequency: string;
  examples: string[];
  kpis: string;
}

export interface OfflineChannelDetail {
  name: string;
  budget: string;
  locations?: string[];
  distribution?: string[];
  reach: string;
  kpis: string;
  stations?: string[];
}

export interface ChannelsDetails {
  title: string;
  subtitle: string;
  onlineChannels: ChannelDetail[];
  offlineChannels: OfflineChannelDetail[];
}

export interface RoadmapMonth {
  number: number;
  name: string;
  quarter: number;
  focus: string;
  objectives: string[];
  actions: string[];
  progress: string;
}

export interface MarketingPlan {
  id: string;
  title: string;
  problem: { description: string; impact: string };
  customerProblems?: ProblemSection;
  ownerProblems?: ProblemSection;
  noMarketingProblems?: ProblemSection;
  marketingPackages?: MarketingPackagesSection;
  marketAnalysis?: MarketAnalysisSection;
  audienceDetails?: AudienceDetailsSection;
  valuePropositionDetails?: ValuePropositionDetails;
  channelsDetails?: ChannelsDetails;
  strategyDetails?: StrategyDetails;
  budgetDetails?: BudgetDetails;
  kpisDetails?: KPIsDetails;
  market: { size: string; trends: string; competitors: string };
  audience: { personaName: string; age: string; interests: string; painPoints: string; buyingBehavior: string };
  valueProposition: { statement: string; keyBenefits: string[] };
  channels: { primary: string[]; secondary: string[] };
  strategy: { awareness: string; consideration: string; conversion: string; retention: string };
  budget: { total: string; allocation: string };
  kpis: { primary: string[]; secondary: string[] };
  products?: Product[];
  roadmap?: RoadmapMonth[];

  // Custom Dynamic Fields
  location?: string;
  sizeLabel?: string;
  mapTitle?: string;
  mapDesc?: string;
  kpisSummaryText?: string;
  stats?: { value: string; label: string; icon: string }[];
  marketIntro?: string;
  marketContext1Label?: string;
  marketContext1Value?: string;
  marketContext1Desc?: string;
  marketContext1Icon?: string;
  marketContext2Label?: string;
  marketContext2Value?: string;
  marketContext2Desc?: string;
  marketContext2Icon?: string;
  marketContext3Label?: string;
  marketContext3Value?: string;
  marketContext3Desc?: string;
  marketContext3Icon?: string;
  marketShareTitle?: string;
  marketShareDesc?: string;
  marketShareSegmentLabel?: string;
  marketShareSegmentPercent?: string;
  marketShareSegmentPercentNum?: number;
  marketShareSegmentDesc?: string;
  marketShareTargetYear1Label?: string;
  marketShareTargetYear1Val?: string;
  marketShareTargetYear1Desc?: string;
  marketShareTargetYear3Label?: string;
  marketShareTargetYear3Val?: string;
  marketShareTargetYear3Desc?: string;
  marketShareSummary?: string;
  mapConfig?: {
    center: [number, number];
    zoom: number;
    markerTitle: string;
    markerDesc: string;
    targets: { name: string; coords: [number, number]; radius: number; color: string }[];
  };
  projectLinks?: {
    websiteUrl: string;
    websiteLabel: string;
    controlUrl: string;
    controlLabel: string;
    controlIcon?: string;
    productsSheetUrl?: string;
    productsSheetLabel?: string;
  };
}

export const defaultPlan: Omit<MarketingPlan, 'id' | 'title'> = {
  problem: { description: '', impact: '' },
  customerProblems: { title: '', problems: [] },
  ownerProblems: { title: '', problems: [] },
  noMarketingProblems: { title: '', problems: [] },
  marketingPackages: { title: '', subtitle: '', packages: [] },
  marketAnalysis: {
    title: '',
    subtitle: '',
    marketSize: { title: '', icon: '', mainStat: '', mainStatLabel: '', details: [], insights: [] },
    trends: { title: '', icon: '', trends: [] },
    competitors: { title: '', icon: '', directCompetitors: [], ourAdvantage: [] },
    swot: { title: '', strengths: [], weaknesses: [], opportunities: [], threats: [] }
  },
  audienceDetails: {
    title: '',
    subtitle: '',
    personas: []
  },
  valuePropositionDetails: {
    title: '',
    subtitle: '',
    pillars: []
  },
  channelsDetails: {
    title: '',
    subtitle: '',
    onlineChannels: [],
    offlineChannels: []
  },
  strategyDetails: {
    title: '',
    subtitle: '',
    funnel: []
  },
  budgetDetails: {
    title: '',
    subtitle: '',
    monthlyBudget: '',
    breakdown: [],
    roi: { expectedRevenue: '', marketingSpend: '', roi: '', paybackPeriod: '' }
  },
  kpisDetails: {
    title: '',
    subtitle: '',
    salesKpis: [],
    customerKpis: [],
    marketingKpis: []
  },
  market: { size: '', trends: '', competitors: '' },
  audience: { personaName: '', age: '', interests: '', painPoints: '', buyingBehavior: '' },
  valueProposition: { statement: '', keyBenefits: [''] },
  channels: { primary: [''], secondary: [''] },
  strategy: { awareness: '', consideration: '', conversion: '', retention: '' },
  budget: { total: '', allocation: '' },
  kpis: { primary: [''], secondary: [''] },
  products: [],
  roadmap: [],
};

// 1. PURITY CLEANING SERVICES PLAN (DUBAI)
const purityPlan: MarketingPlan = {
  id: 'purity-cleaning-plan',
  title: 'شركة بيوريتي لخدمات التنظيف - دبي',
  projectLinks: {
    websiteUrl: 'https://purity-services.com/',
    websiteLabel: 'موقع شركة بيوريتي لخدمات التنظيف بدبي',
    controlUrl: 'https://ads.google.com/',
    controlLabel: 'أداة الإشراف والمراقبة (Google Ads لبيوريتي)',
    controlIcon: 'Megaphone'
  },
  location: 'دبي - الإمارات العربية المتحدة',
  sizeLabel: 'خدمات تنظيف احترافية',
  mapTitle: 'خريطة الاستهداف الجغرافي لشركة بيوريتي',
  mapDesc: 'تحديد النطاق الجغرافي للخدمة ومناطق الطلب المرتفع في دبي',
  kpisSummaryText: 'خلال 3 أشهر: 150+ مشتركاً في الباقات الشهرية المجدولة، 800+ زيارة تنظيف منجزة شهرياً، مع الحفاظ على رضا العملاء بنسبة 98% وتقييم 4.8+ نجوم على خرائط جوجل.',
  stats: [
    { value: '3.5M+', label: 'نسمة في دبي', icon: 'UsersRound' },
    { value: '1.2B+', label: 'درهم حجم سوق دبي سنوياً', icon: 'DollarSign' },
    { value: '4.8%', label: 'نمو عقاري سنوي', icon: 'TrendingUp' },
    { value: '#1', label: 'في الجودة والأمان', icon: 'Award' }
  ],
  marketIntro: 'من سوق خدمات تنظيف منزلي وتجاري عملاق في دبي يقدر بأكثر من 1.2 مليار درهم، كم يمكننا تحقيقه فعلياً؟',
  marketContext1Label: 'إجمالي السكان',
  marketContext1Value: '3.5+ مليون',
  marketContext1Desc: 'نسمة في دبي ووافدون بنسبة 85%',
  marketContext1Icon: 'UsersRound',
  marketContext2Label: 'النمو العقاري',
  marketContext2Value: 'نشط للغاية',
  marketContext2Desc: 'تسليم آلاف الوحدات السكنية الجديدة شهرياً',
  marketContext2Icon: 'Building2',
  marketContext3Label: 'حجم السوق بدبي',
  marketContext3Value: '1.2 مليار',
  marketContext3Desc: 'درهم إماراتي سنوياً لخدمات النظافة والتعقيم',
  marketContext3Icon: 'DollarSign',
  marketShareTitle: 'الحصة الممكنة لشركة بيوريتي',
  marketShareDesc: 'من سوق دبي المتاح إلى حصتنا المستهدفة',
  marketShareSegmentLabel: 'قطاع النظافة السكنية والعميقة (الطلب المباشر)',
  marketShareSegmentPercent: '~45%',
  marketShareSegmentPercentNum: 45,
  marketShareSegmentDesc: 'يشمل الطلب على التنظيف الساعي، التنظيف العميق، وتعقيم الكنب والمفروشات بالبخار',
  marketShareTargetYear1Label: 'هدف السنة الأولى',
  marketShareTargetYear1Val: '1.5-2.5%',
  marketShareTargetYear1Desc: 'مرسى دبي، الخليج التجاري، والمجمعات المحيطة',
  marketShareTargetYear3Label: 'هدف السنة الثالثة',
  marketShareTargetYear3Val: '6-9%',
  marketShareTargetYear3Desc: 'التوسع لتغطية كامل إمارة دبي مع إطلاق تطبيق خاص',
  marketShareSummary: 'خلاصة التحليل: بحجم سوق خدمات تنظيف يقدر بأكثر من مليار درهم في دبي، فإن الاستحواذ على حصة متواضعة (2%) يمثل فرصة استثمارية هائلة وعوائد ربحية ممتازة وقاعدة تشغيلية راسخة.',
  mapConfig: {
    center: [25.076, 55.154], // Dubai Marina center
    zoom: 11,
    markerTitle: 'مقر شركة بيوريتي لخدمات التنظيف - دبي',
    markerDesc: 'من هنا تنطلق سيارات الخدمة المجهزة بالكامل لتغطية كافة أرجاء دبي.',
    targets: [
      {
        name: "نطاق الاستهداف المباشر الأول (مرسى دبي، النخلة، الخليج التجاري، وسط دبي)",
        coords: [25.076, 55.154],
        radius: 6000,
        color: "#0071E3"
      },
      {
        name: "مناطق التوسع والطلب المتزايد (المرابع العربية، دبي لاند، البرشاء، ديرة والمحيط)",
        coords: [25.197, 55.274], // Downtown Dubai area coords
        radius: 14000,
        color: "#A855F7"
      }
    ]
  },
  problem: {
    description: 'يعاني الأفراد والعائلات وكذلك أصحاب الشركات والمكاتب في دبي من صعوبة العثور على خدمات تنظيف موثوقة، دقيقة، وبأسعار معقولة وواضحة. الغالبية يواجهون عمالة غير مدربة، عدم الالتزام بالمواعيد، ومستوى تنظيف متدني، بالإضافة لمخاطر الأمان والسرقة وغياب الضمان الحقيقي في حال حدوث تلفيات.',
    impact: 'هدر الأموال على شركات غير محترفة، ضياع الوقت الثمين في مراقبة العمالة، تلف بعض قطع الأثاث والرخام الفاخرة بسبب استخدام مواد كيميائية خاطئة، والإحباط من عدم الحصول على النظافة المطلوبة.'
  },
  customerProblems: {
    title: 'مشاكل العملاء اليومية بدبي',
    problems: [
      {
        icon: 'Clock',
        title: 'عدم الالتزام بالمواعيد والـتأخير',
        description: 'تتأخر شركات التنظيف التقليدية عن المواعيد المحددة لساعات، مما يربك جدول العميل اليومي المزدحم في مدينة سريعة الإيقاع مثل دبي.'
      },
      {
        icon: 'ShieldOff',
        title: 'عمالة غير مدربة ومخاطر الأمان',
        description: 'الخوف الدائم من سرقة الممتلكات الشخصية أو تلف الأثاث الفاخر بسبب تشغيل عمالة غير مرخصة أو غير مدربة بشكل كافٍ على المعايير الفندقية.'
      },
      {
        icon: 'Wallet',
        title: 'أسعار مبالغ فيها مع تكاليف مخفية',
        description: 'العديد من الشركات تفاجئ العملاء برسوم إضافية لمواد التنظيف، المعدات، أو رسوم النقل عند الفاتورة النهائية، مما يدمر مصداقيتها.'
      },
      {
        icon: 'Zap',
        title: 'استخدام مواد تنظيف رديئة وكيماويات ضارة',
        description: 'استخدام منظفات كيميائية رخيصة وقوية تترك روائح مزعجة تسبب ضيق التنفس والحساسية للأطفال والحيوانات الأليفة، وتتلف المفروشات.'
      },
      {
        icon: 'UserX',
        title: 'صعوبة الحجز والتواصل وخدمة عملاء سيئة',
        description: 'عمليات حجز معقدة تتطلب ملء نماذج طويلة أو مكالمات هاتفية متكررة، مع غياب كامل للدعم السريع أو التجاوب الفوري عبر الواتساب.'
      }
    ]
  },
  ownerProblems: {
    title: 'تحديات إدارة شركة بيوريتي',
    problems: [
      {
        icon: 'Users',
        title: 'صعوبة استقطاب عمالة ماهرة وموثوقة',
        description: 'المنافسة الشديدة في دبي على استقطاب وتدريب العمالة المنزلية والمشرفين المحترفين وتكلفة الحصول على تأشيرات وإقامات رسمية لهم.'
      },
      {
        icon: 'TrendingDown',
        title: 'حرب الأسعار مع الشركات غير المرخصة',
        description: 'وجود مئات الشركات العشوائية التي تعمل بدون ترخيص رسمي وتوظف عمالة مخالفة، وتقدم أسعاراً متدنية للغاية تضر بهامش ربح الشركات النظامية.'
      },
      {
        icon: 'PackageSearch',
        title: 'إدارة وتأمين الخدمات اللوجستية والنقل',
        description: 'توزيع فرق العمل والسيارات والمعدات وتوصيلهم في جميع أنحاء دبي المترامية الأطراف مع مراعاة الاختناقات المرورية وأوقات الذروة.'
      },
      {
        icon: 'Megaphone',
        title: 'ارتفاع تكلفة الاستحواذ على العميل الجديد',
        description: 'سوق دبي من أكثر الأسواق تنافسية في الإعلانات الرقمية، مما يؤدي لارتفاع جنوني في سعر النقرة على إعلانات جوجل لخدمات التنظيف.'
      }
    ]
  },
  noMarketingProblems: {
    title: 'مخاطر غياب الاستراتيجية التسويقية لبيوريتي',
    problems: [
      {
        icon: 'TrendingDown',
        title: 'شح الحجوزات وركود السيارات والعمالة',
        description: 'في حال غياب التسويق المستمر، ينخفض الطلب وتظل فرق العمل والسيارات معطلة، بينما تستمر تكاليف الرواتب والإقامات في استنزاف الشركة.'
      },
      {
        icon: 'EyeOff',
        title: 'الخروج التام من منافسة سوق دبي الشرس',
        description: 'تتحكم محركات البحث والسوشيال ميديا بسوق الخدمات في دبي. غياب الإعلانات الرقمية يعني أن الشركة تصبح غير مرئية للعملاء تماماً.'
      },
      {
        icon: 'ShoppingCart',
        title: 'الاعتماد الكلي على التوصيات الشفهية المحدودة',
        description: 'رغم أهمية التوصيات الشفهية، إلا أنها بطيئة جداً ولا تدعم نمو الشركة بشكل حيوي، ولا تكفي لتغطية التكاليف التشغيلية الكبيرة للشركة.'
      }
    ]
  },
  marketingPackages: {
    title: 'باقات وعروض خدمات تنظيف بيوريتي',
    subtitle: 'اختر الخدمة المناسبة لمنزلك أو مكتبك بأسعار شفافة وبدون تكاليف خفية',
    packages: [
      {
        name: 'باقة التنظيف الساعي',
        price: '35 درهم',
        period: 'ساعة',
        description: 'تنظيف دوري سريع للمنازل والشقق الصغيرة (حد أدنى 3 ساعات)',
        features: [
          'تنظيف الأرضيات والأسطح ودورات المياه بالكامل',
          'ترتيب الغرف والأسرة وتلميع الأثاث الخارجي',
          'عمالة فلبينية مدربة وموثوقة 100%',
          'إمكانية اختيار عاملة محددة للزيارات القادمة',
          'حجز مرن وخدمة سريعة عبر الواتساب',
          'لا تشمل مواد التنظيف (يمكن توفيرها بطلب خاص مقابل 10 درهم/ساعة)'
        ],
        highlight: false,
        icon: 'Clock'
      },
      {
        name: 'باقة التنظيف العميق (Deep Cleaning)',
        price: '299 درهم',
        period: 'زيارة',
        description: 'الأكثر مبيعاً - تنظيف شامل ودقيق للشقق والفلل قبل الانتقال أو بعد الصيانة',
        features: [
          'إزالة الأتربة الصعبة والدهون المتراكمة في المطابخ بالكامل',
          'تعقيم وتطهير دورات المياه والمطابخ بأحدث المواد',
          'تنظيف كامل للنوافذ والأبواب وإطاراتها الداخلية والخارجية',
          'استخدام أجهزة ومواد تنظيف احترافية متطورة',
          'شامل جميع المواد والمعدات الفنية والسيارات والنقل',
          'فريق عمل متكامل بإشراف مشرف فني لضمان الجودة'
        ],
        highlight: true,
        icon: 'Award'
      },
      {
        name: 'باقة الاشتراك الشهري للمنازل والشركات',
        price: '799 درهم',
        period: 'شهرياً',
        description: 'راحة بال كاملة مع زيارات مجدولة أسبوعياً لتنظيف مستمر واحترافي',
        features: [
          'زيارة واحدة أسبوعياً (4 ساعات كاملة في كل زيارة)',
          'عاملة تنظيف فلبينية ثابتة لضمان الاستمرارية وفهم تفاصيل البيت',
          'مواد تنظيف وتطهير فائقة الجودة مجانية بالكامل مع كل زيارة',
          'تغطية تأمينية كاملة ضد الحوادث أو التلفيات المفاجئة',
          'دعم عملاء مميز وأولوية قصوى في الحجز والطلبات الطارئة',
          'خصم خاص 15% على خدمات تنظيف السجاد والكنب بالبخار'
        ],
        highlight: false,
        icon: 'Crown'
      }
    ]
  },
  market: {
    size: 'يقدر حجم سوق خدمات التنظيف المنزلي والتجاري في دبي بأكثر من 1.2 مليار درهم سنوياً، مدفوعاً بزيادة عدد السكان السريعة، نمو القطاع العقاري، والطلب المرتفع من العائلات الوافدة والشركات التي تفضل الاستعانة بمصادر خارجية لنظافة مقراتها.',
    trends: 'التوجه المتزايد نحو استخدام مواد تنظيف صديقة للبيئة (Green Cleaning)، تزايد الطلب على الحجز الرقمي الفوري عبر تطبيقات الويب والواتساب، والطلب الهائل على خدمات التعقيم والتنظيف العميق للفلل والشقق الفاخرة.',
    competitors: 'يتميز سوق دبي بتنافسية عالية جداً بوجود منصات تجميع خدمات كبرى مثل Justlife وHelpbit، بالإضافة إلى مئات الشركات الصغيرة والمتوسطة. الفجوة الحالية تكمن في الجودة الفائقة للخدمة مع ضمان الأمان والمصداقية.'
  },
  marketAnalysis: {
    title: 'تحليل سوق الخدمات في دبي',
    subtitle: 'دراسة شاملة للفرص والنمو في قطاع التنظيف بدبي',
    marketSize: {
      title: 'حجم السوق بدبي',
      icon: 'TrendingUp',
      mainStat: '3.5+ مليون',
      mainStatLabel: 'نسمة في دبي',
      details: [
        { label: 'النمو العقاري السنوي', value: '4.8%', description: 'نمو في تسليم الوحدات السكنية الجديدة' },
        { label: 'الطلب على التعقيم', value: 'مرتفع جداً', description: 'زيادة الوعي الصحي بعد جائحة كورونا' },
        { label: 'حجم السوق المتاح', value: '1.2B', description: 'درهم إماراتي سنوياً' },
        { label: 'نسبة الاعتماد', value: '75%', description: 'من عائلات دبي تعتمد على شركات التنظيف' }
      ],
      insights: [
        'سوق دبي يتميز بارتفاع معدلات الدخل وتواجد جالية وافدة كبيرة لا تملك الوقت للتنظيف المنزلي.',
        'حركة عقارية نشطة وتسجيل آلاف المعاملات الإيجارية شهرياً، مما يعني طلباً هائلاً على خدمات التنظيف قبل الانتقال (Move-in Cleaning).',
        'زيادة الاهتمام بنظافة بيئة العمل في المكاتب والشركات بدبي لتعزيز إنتاجية الموظفين وحمايتهم.',
        'العميل في دبي مستعد لدفع سعر أعلى مقابل الحصول على خدمة آمنة، مضمونة، وبجودة ممتازة خالية من المتاعب.'
      ]
    },
    trends: {
      title: 'الاتجاهات السوقية الحديثة',
      icon: 'Activity',
      trends: [
        {
          name: 'التنظيف الأخضر والبيئي',
          description: 'تفضيل متزايد للمواد العضوية والصديقة للبيئة والصحة لتجنب الحساسية والأضرار الكيميائية.',
          growth: '+55%',
          icon: 'Shield'
        },
        {
          name: 'الحجز الرقمي السريع',
          description: 'العميل يفضل الحجز والدفع الفوري عبر موقع الشركة أو محادثة واتساب سريعة دون تعقيد.',
          growth: '+70%',
          icon: 'Smartphone'
        },
        {
          name: 'تنظيف السجاد بالبخار',
          description: 'طلب مرتفع على خدمات التعقيم والتنظيف بالبخار عالي الضغط للكنب والسجاد للتخلص من البكتيريا.',
          growth: '+45%',
          icon: 'Flame'
        },
        {
          name: 'عقود التنظيف السنوية للمكاتب',
          description: 'ميل الشركات الصغيرة والمتوسطة لإبرام عقود تنظيف شهرية أو سنوية بدل توظيف عمالة ثابتة.',
          growth: '+35%',
          icon: 'Building2'
        }
      ]
    },
    competitors: {
      title: 'تحليل المنافسين في دبي',
      icon: 'Target',
      directCompetitors: [
        { name: 'منصات تجميع الخدمات (Justlife)', strength: 'تطبيقات ذكية سريعة وميزانيات تسويق ضخمة', weakness: 'جودة متذبذبة لأن العمالة من شركات خارجية، غياب اللمسة الشخصية' },
        { name: 'الشركات الفردية غير المرخصة', strength: 'أسعار رخيصة للغاية', weakness: 'مخاطر قانونية عالية، عمالة غير مضمونة، غياب التأمين والضمان' },
        { name: 'الشركات التقليدية القديمة', strength: 'عقود حكومية وتجارية كبيرة وسابقة أعمال', weakness: 'بطء في تقديم الخدمة، صعوبة الحجز للأفراد، عدم مواكبة التكنولوجيا والسوشيال ميديا' }
      ],
      ourAdvantage: [
        'عمالة فلبينية وإفريقية مدربة تدريباً احترافياً عالي المستوى ومحسنة السلوك.',
        'ضمان أمان كامل وتغطية تأمينية ضد التلفيات أو الحوادث المفاجئة في موقع العميل.',
        'أسعار واضحة وباقات مرنة بدون أي تكاليف أو رسوم خفية.',
        'مواد تنظيف صديقة للبيئة ومعدات ألمانية حديثة لنتائج مثالية.',
        'خدمة عملاء فائقة السرعة على مدار الساعة لحل المشكلات وتسهيل الحجز الفوري.'
      ]
    },
    swot: {
      title: 'تحليل SWOT لشركة بيوريتي',
      strengths: [
        'علامة تجارية أنيقة تدل على النقاء والجودة',
        'طاقم عمل مدرب بشكل ممتاز وخاضع للرقابة الفنية',
        'خدمة حجز سهلة وفورية عبر الواتساب والموقع',
        'تغطية تأمينية ممتازة ضد التلفيات'
      ],
      weaknesses: [
        'تكاليف تشغيل مرتفعة في بداية التأسيس (سيارات، تراخيص، سكن عمال)',
        'الحاجة المستمرة لتدريب وتوظيف كوادر جديدة لمواجهة زيادة الطلب',
        'الاعتماد المرتفع على التسويق المدفوع للاستحواذ'
      ],
      opportunities: [
        'توسيع نطاق الخدمات ليشمل مكافحة الحشرات وجلي الرخام وتنظيف حمامات السباحة',
        'عقد شراكات استراتيجية مع شركات العقارات وإدارة الممتلكات في دبي',
        'تطوير تطبيق جوال خاص بالشركة لتسهيل الحجوزات ونقاط الولاء'
      ],
      threats: [
        'دخول منافسين جدد باستمرار لسوق دبي الجاذب للاستثمار',
        'تغير القوانين والتشريعات الخاصة بتأشيرات وتراخيص العمالة المنزلية',
        'تقلبات أسعار الوقود وتكلفة النقل اليومية داخل دبي'
      ]
    }
  },
  audience: {
    personaName: 'العائلات الوافدة المزدحمة / المهنيون المستقلون / مديرو المكاتب والشركات في دبي',
    age: '25 - 55 سنة',
    interests: 'شقة نظيفة ومنعشة، خدمات تعقيم آمنة للأطفال، تنظيف الكنب والسجاد بالبخار، باقات تنظيف دورية بأسعار معقولة، حجز سهل وسريع.',
    painPoints: 'عمالة غير محترفة تتأخر عن المواعيد، تلف بعض الممتلكات الفاخرة، استخدام روائح قوية ومواد ضارة بالصحة، أسعار غير واضحة ورسوم خفية، صعوبة إلغاء أو تغيير الموعد.',
    buyingBehavior: 'يفضلون الحجز السريع عبر الواتساب أو الموقع الإلكتروني، يبحثون عن تقييمات جوجل ومراجعات العملاء السابقين قبل اتخاذ القرار، ويفضلون الدفع عبر الإنترنت أو بطاقة الائتمان.'
  },
  audienceDetails: {
    title: 'الجمهور المستهدف بالتفصيل',
    subtitle: 'فهم احتياجات عملائنا لتقديم أفضل تجربة تنظيف ممكنة',
    personas: [
      {
        name: 'سارة - أم وعاملة',
        role: 'مديرة تسويق وأم لطفلين',
        age: '32-45 سنة',
        icon: 'UsersRound',
        description: 'سيدة عاملة تقيم في فيلا بالمرابع العربية، وقتها مزدحم جداً وتبحث عن شركة تنظيف موثوقة تماماً للاهتمام بمنزلها وتعقيم غرف أطفالها بشكل دوري.',
        goals: [
          'منزل نظيف وصحي 100% بدون أي جهد منها',
          'عاملة تنظيف أمينة ومحترفة تعرف تفاصيل العمل دون توجيه مستمر',
          'مواد تنظيف آمنة وصديقة للبيئة لا تسبب الحساسية لأطفالها',
          'زيارات مجدولة بانتظام للحفاظ على نظافة الفيلا'
        ],
        challenges: [
          'ضيق الوقت وصعوبة التوفيق بين عملها ورعاية عائلتها ونظافة المنزل',
          'تجارب سابقة سيئة مع شركات تسببت في خدش أرضيات الرخام الفاخرة',
          'عدم التزام بعض العاملات بالوقت المحدد، مما يخرب جدولها اليومي'
        ],
        shoppingHabits: [
          'تبحث عن الجودة أولاً ومستعدة لدفع سعر ممتاز للشركة المضمونة',
          'تقرأ تقييمات جوجل بدقة وتطلب توصيات من صديقاتها في المجمع السكني',
          'تفضل الاشتراك الشهري المجدول لراحة البال التامة',
          'تدفع ببطاقة الائتمان عبر رابط دفع آمن'
        ],
        quote: 'أهم شي عندي الأمانة ونظافة التفاصيل، وما بدي مواد تضر صحة أطفالي.'
      },
      {
        name: 'جون - مهني وافد',
        role: 'مهندس برمجيات مستقل',
        age: '26-35 سنة',
        icon: 'UserX',
        description: 'شاب عازب يقيم في شقة عصرية بمرسى دبي (Dubai Marina)، يعمل لساعات طويلة ويحب النظافة والترتيب ولكن ليس لديه وقت أو رغبة في القيام بذلك بنفسه.',
        goals: [
          'حجز سريع وسهل لشخص ينظف شقته مرتين شهرياً',
          'سرعة الإنجاز بدون الحاجة لوجوده في الشقة أثناء التنظيف',
          'ترتيب الملابس وغسيل الأواني بدقة وعناية',
          'سعر واضح ومناسب لميزانيته الشخصية'
        ],
        challenges: [
          'صعوبة التواصل مع شركات تتطلب مكالمات هاتفية طويلة للحجز',
          'عدم مرونة المواعيد لتناسب أوقات إجازته القصيرة',
          'الخوف على أجهزته الإلكترونية الثمينة أثناء عملية التنظيف'
        ],
        shoppingHabits: [
          'يحجز بالكامل عبر الإنترنت من خلال الموبايل في دقيقة واحدة',
          'يتأثر بالإعلانات الجذابة على إنستغرام وتيك توك',
          'يفضل الدفع الإلكتروني السريع Apple Pay',
          'يهتم بتوفر خدمات إضافية مثل تنظيف السجاد بالبخار بطلب واحد'
        ],
        quote: 'بدي كبسة زر لحجز عاملة محترفة ترتب الشقة بسرعة وأنا في الشغل.'
      },
      {
        name: 'أحمد - مدير مكتب',
        role: 'مدير عمليات بشركة استشارات',
        age: '35-50 سنة',
        icon: 'Building2',
        description: 'يدير مكتباً للشركة في منطقة الخليج التجاري (Business Bay) يضم 30 موظفاً، يحتاج لتنظيف وتعقيم يومي للمكتب لضمان بيئة عمل ممتازة وصحية.',
        goals: [
          'مكتب نظيف ولامع يومياً قبل وصول الموظفين والعملاء',
          'عقد شهري مرن يشمل خدمات التنظيف اليومي وتعقيم الأسطح',
          'توفير مستلزمات دورات المياه والضيافة بشكل دوري',
          'فواتير رسمية ودعم فني مخصص لحالات الطوارئ'
        ],
        challenges: [
          'عدم رضا الموظفين عن نظافة الحمامات أو المطبخ المشترك مع الشركات التقليدية',
          'ارتفاع تكلفة توظيف عامل نظافة ثابت ودفع إقامته وتأمينه الصحي',
          'انقطاع الخدمة المفاجئ في حال مرض أو غياب عامل النظافة التقليدي'
        ],
        shoppingHabits: [
          'يطلب عروض أسعار من 3 شركات رسمية ويقارن بينها',
          'يركز على المصداقية والترخيص الرسمي والتأمين الشامل',
          'يفضل التحويل البنكي الشهري بناء على فواتير ضريبية معتمدة',
          'يتوقع مشرفاً فنياً يزور المكتب أسبوعياً للتأكد من الجودة'
        ],
        quote: 'نظافة مكتبنا هي واجهة شركتنا أمام عملائنا، ولا نقبل بأقل من الاحترافية.'
      }
    ]
  },
  valueProposition: {
    statement: 'نحن في "بيوريتي لخدمات التنظيف دبي" نقدم تجربة نظافة فائقة تجمع بين الأمان المطلق، والالتزام الصارم بالمواعيد، والعمالة الفلبينية المدربة تدريباً احترافياً، مع استخدام مواد صديقة للبيئة 100% وعملية حجز رقمية سريعة بلمسة زر.',
    keyBenefits: [
      'عمالة تنظيف محترفة وأمينة خاضعة للتدقيق الأمني والتطوير المهني المستمر',
      'استخدام مواد تنظيف طبيعية وصديقة للبيئة معتمدة وآمنة تماماً للأطفال والبيئة',
      'التزام تام وبدون تأخير بالوقت المحدد مع ضمان تعويض في حال التأخير عن الموعد',
      'تغطية تأمينية شاملة ضد أي تلفيات أو حوادث مفاجئة أثناء تقديم الخدمة',
      'حجز فوري ومرن خلال دقيقة واحدة عبر الواتساب أو الموقع الإلكتروني',
      'باقات أسعار شفافة ومنافسة بدون أي رسوم إضافية أو تكاليف خفية'
    ]
  },
  valuePropositionDetails: {
    title: 'قيمنا الجوهرية والخدمية',
    subtitle: 'ما يجعل شركة بيوريتي الخيار الأول والأكثر ثقة لخدمات التنظيف في دبي',
    pillars: [
      {
        title: 'العمالة المدربة والأمان المطلق',
        icon: 'Shield',
        description: 'جميع العاملات والمشرفين خاضعون لتدقيق أمني صارم ولديهم إقامات رسمية وتدريب مكثف على أعلى معايير الفندقة والأمان.',
        examples: [
          'تدريب فندقي شامل على تنظيف جميع أنواع الأسطح الفاخرة',
          'فحص طبي دوري وتأمين صحي شامل لكل موظفينا',
          'زي موحد أنيق يعكس احترافية الشركة ورقابة مستمرة',
          'أمانة وموثوقية عالية مع كفالة تامة من الشركة'
        ],
        impact: 'أمان وراحة بال تامة للعميل أثناء تواجد العاملات بالمنزل أو المكتب'
      },
      {
        title: 'المواد والمعدات الصديقة للبيئة',
        icon: 'Leaf',
        description: 'نحافظ على صحة عائلتك وعلى البيئة باستخدام منظفات طبيعية 100% ومعدات حديثة تضمن إزالة الميكروبات بدون روائح كيميائية خانقة.',
        examples: [
          'منظفات عضوية معتمدة خالية من الكلور والمواد المسببة للحساسية',
          'أجهزة تنظيف بالبخار عالي الضغط لتعقيم الكنب والسجاد',
          'فلاتر HEPA في المكانس لضمان تنقية الهواء من الأتربة الدقيقة',
          'عطور طبيعية منعشة ولطيفة تدوم طويلاً بعد انتهاء العمل'
        ],
        impact: 'بيئة منزلية صحية وخالية من الجراثيم وآمنة تماماً للأطفال والحيوانات الأليفة'
      },
      {
        title: 'سهولة الحجز الرقمي الفوري',
        icon: 'Smartphone',
        description: 'وفرنا لعملائنا في دبي تجربة حجز رقمية متكاملة وسلسة عبر الواتساب والموقع الإلكتروني دون الحاجة لمكالمات هاتفية طويلة.',
        examples: [
          'حجز فوري وااختيار الباقة المناسبة في أقل من 60 ثانية',
          'دعم فني سريع جداً لحل المشكلات والرد على الاستفسارات عبر الواتساب',
          'إمكانية تعديل أو إلغاء الحجز بمرونة وسهولة كبيرة',
          'رابط دفع آمن وخيارات متعددة تشمل بطاقات الائتمان و Apple Pay'
        ],
        impact: 'توفير الوقت والجهد وتجنب تعقيدات الحجز التقليدي'
      },
      {
        title: 'الالتزام الصارم بالوقت والمواعيد',
        icon: 'Clock',
        description: 'نحن نقدر قيمة وقت عملائنا في دبي، لذلك نلتزم بالوصول في الموعد المحدد بدقة متناهية وإنجاز العمل في الوقت المطلوب.',
        examples: [
          'تتبع حي لسيارات الخدمة لضمان الالتزام بالمواعيد الجغرافية',
          'تعويض مالي أو خصم تلقائي للعميل في حال تأخر الفريق لأكثر من 15 دقيقة',
          'تنسيق ذكي لتوزيع الفرق وتجنب أوقات الزحام المروري بدبي',
          'تنفيذ الخدمة بكفاءة عالية وبدون هدر وقت العميل'
        ],
        impact: 'احترام وقت العميل ودقة التخطيط اليومي لجدوله المزدحم'
      }
    ]
  },
  channels: {
    primary: [
      'إعلانات جوجل المستهدفة للبحث عن خدمات التنظيف في دبي (SEO & Google Search Ads)',
      'حملات إعلانية مرئية وجذابة على منصات السوشيال ميديا (إنستغرام وفيسبوك وتيك توك)',
      'تحسين محركات البحث المحلية والتواجد القوي على Google Maps (جوجل ماب دبي)',
      'التسويق عبر الواتساب للأعمال وقوائم رسائل التذكير بالعروض الدورية'
    ],
    secondary: [
      'شراكات تسويقية مع مجمعات سكنية وإدارات المباني لتوزيع بروشورات خاصة',
      'برنامج الإحالة والمكافآت (أوصي بصديق واحصل على ساعة تنظيف مجانية)',
      'التعاون مع مؤثرات السوشيال ميديا المهتمات بالتنظيم والديكور والترتيب المنزلي بدبي',
      'المشاركة في المعارض والفعاليات المحلية للمجتمعات السكنية الفاخرة'
    ]
  },
  strategy: {
    awareness: 'إطلاق حملات فيديو قصيرة وممتعة على إنستغرام وتيك توك تستعرض "قبل وبعد التنظيف العميق"، وإعلانات بحث جوجل لاستهداف الكلمات الدلالية مثل "شركة تنظيف في دبي"، مع التواجد الجغرافي القوي على خرائط جوجل.',
    consideration: 'نشر محتوى تعليمي مفيد (طرق العناية بالأثاث الفاخر، كيف تتخلص من بكتيريا السجاد؟)، وعرض تقييمات وتجارب حقيقية لعملاء مشاهير وعائلات راضية عن خدمتنا، ومقارنة باقاتنا بالخدمات العشوائية.',
    conversion: 'تقديم عرض مميز للزيارة الأولى (خصم 20% على خدمة التنظيف العميق)، وتسهيل الحجز الفوري والدفع الآمن بلمسة زر عبر محادثة واتساب آلية ذكية، مع تقديم ضمان الرضا الفائق (إعادة التنظيف مجاناً في حال عدم الرضا).',
    retention: 'إطلاق برنامج "بيوريتي بلس" للولاء حيث يحصل العميل على نقاط تستبدل بزيارات مجانية، وإرسال رسائل تذكير لطيفة مجدولة أسبوعياً أو شهرياً لحجز الزيارات الدورية مع تقديم عروض خاصة في المناسبات والأعياد.'
  },
  budget: {
    total: '30,000 درهم إماراتي شهرياً (لأول 3 أشهر)',
    allocation: '40% إعلانات بحث جوجل (Google Ads) لمحركات البحث، 25% إعلانات إنستغرام وفيسبوك المرئية، 15% التعاون مع المؤثرين وصناعة المحتوى، 10% مطبوعات وهدايا ترويجية للمجمعات السكنية، 10% تطوير الموقع ونظام الحجز الذكي'
  },
  kpis: {
    primary: [
      'عدد المشتركين في الباقات الشهرية المجدولة (الهدف: 150 مشترك في 3 أشهر)',
      'إجمالي الحجوزات الشهرية المنجزة (الهدف: 800 زيارة/شهر)',
      'متوسط العائد لكل زيارة (الهدف: 180 درهم)',
      'معدل رضا العملاء وتقييمات الخدمة (الهدف: 98% رضا)، تقييم جوجل ماب (4.8+ نجوم)',
      'نسبة الاحتفاظ بالعملاء (الهدف: 65% إعادة حجز)'
    ],
    secondary: [
      'تكلفة الاستحواذ على العميل الجديد (الهدف: أقل من 60 درهم)',
      'حجم زيارات الموقع الإلكتروني ومعدل التحويل للحجز (الهدف: 5% تحويل)',
      'نسبة تكرار العملاء وإعادة الحجز (الهدف: 65% إعادة حجز)',
      'عدد الاستفسارات اليومية عبر الواتساب (الهدف: 80 استفسار/يوم)',
      'تفاعل السوشال ميديا (10,000 متابع حقيقي في 6 أشهر)'
    ]
  },
  products: [
    {
      id: 'pur-prod-1',
      name: 'خدمة تنظيف منزلي ساعي (عاملة واحدة)',
      category: 'تنظيف منزلي',
      price: '35 د.إ / ساعة',
      description: 'خدمة تنظيف يومي أو دوري للمنازل والشقق عالي الجودة والترتيب.',
      features: ['عمالة فلبينية أمينة ومحترفة', 'حد أدنى 3 ساعات', 'تنظيف غرف، صالة، مطبخ وحمامات', 'ترتيب وتلميع أثاث خارجي'],
      targetAudience: 'عائلات، أفراد، وافدون',
      stockLevel: 'متوفر يومياً'
    },
    {
      id: 'pur-prod-2',
      name: 'باقة التنظيف العميق للشقق (Deep Cleaning)',
      category: 'تنظيف عميق',
      price: '299 د.إ / زيارة',
      description: 'تنظيف شامل للدهون والأتربة الصعبة في المطابخ والحمامات والنوافذ.',
      features: ['شامل جميع المواد والمعدات', 'مشرف فني للرقابة', 'تلميع سيراميك وتعقيم حمامات', 'مثالي قبل الانتقال لشقة جديدة'],
      targetAudience: 'أصحاب العقارات، عائلات وافدة، مستأجرون جدد',
      stockLevel: 'يتطلب حجز مسبق بـ 24 ساعة'
    },
    {
      id: 'pur-prod-3',
      name: 'تنظيف وتعقيم الكنب بالبخار (Sofa Steam Cleaning)',
      category: 'تنظيف بالبخار',
      price: '50 د.إ / مقعد',
      description: 'إزالة البقع والأتربة والروائح الكريهة من الكنب باستخدام البخار عالي الضغط.',
      features: ['تجفيف سريع في أقل من ساعة', 'تعقيم 99.9% من البكتيريا', 'مواد آمنة للألوان والأقمشة', 'إزالة الروائح وحشرات الفراش'],
      targetAudience: 'عائلات تملك أطفالاً أو حيوانات أليفة',
      stockLevel: 'متوفر حسب الطلب'
    },
    {
      id: 'pur-prod-4',
      name: 'تنظيف المكاتب والشركات (Office Cleaning)',
      category: 'تنظيف تجاري',
      price: '999 د.إ / شهرياً',
      description: 'عقود تنظيف دورية مخصصة للمكاتب والشركات لبيئة عمل صحية ولامعة.',
      features: ['زيارات يومية أو مجدولة', 'تنظيف مكاتب وحمامات ومطابخ', 'فواتير رسمية للشركات', 'توفير مستلزمات الضيافة والنظافة'],
      targetAudience: 'الشركات الناشئة، المكاتب، العيادات والمراكز التجارية',
      stockLevel: 'متاح للتعاقد الفوري'
    }
  ],
  roadmap: [
    {
      number: 1,
      name: 'التجهيز والانطلاق الهادئ (Soft Launch)',
      quarter: 1,
      focus: 'إطلاق الهوية وتدريب الدفعة الأولى من العمالة وموقع الحجز السريع',
      objectives: [
        'تدريب 20 عاملة فلبينية على المعايير الفندقية الاحترافية بدبي',
        'تفعيل موقع الحجز الرقمي ومحادثة واتساب الأعمال المبرمجة',
        'تجهيز 5 سيارات نقل وتوزيع مجهزة بالكامل للفرق بمناطق مرسى دبي'
      ],
      actions: [
        'إعداد وتأكيد سلامة نظام الحجز والمدفوعات الإلكترونية',
        'إطلاق حملات فيديو ترويجية وتوعوية على إنستغرام وفيسبوك',
        'تحسين محركات البحث المحلية والتسجيل الفوري بخرائط جوجل للأعمال'
      ],
      progress: 'جاهزية تشغيلية 100% وإنجاز أول 30 حجز منوع تجريبي بالمنطقة'
    },
    {
      number: 2,
      name: 'الاستحواذ المباشر في مرسى دبي',
      quarter: 1,
      focus: 'استهداف التجمعات السكنية الكبرى وإعلانات محركات البحث المباشرة',
      objectives: [
        'إنجاز 150 حجز تنظيف فردي ناجح بنهاية الشهر',
        'تجميع أول 30 تقييم 5 نجوم حقيقي على جوجل ماب دبي',
        'توقيع أول عقدين تجاريين لتنظيف مقرات شركات بالخليج التجاري'
      ],
      actions: [
        'تفعيل إعلانات بحث جوجل (Google Search Ads) على عبارة "Home Cleaning Dubai"',
        'توزيع منشورات ورقية أنيقة وصديقة للبيئة في تجمعات Marina & JLT أبراج',
        'تقديم عرض ترحيبي بخصم 20% للزيارات الأولى للعملاء الجدد'
      ],
      progress: 'معدل إشغال العمالة يصل لـ 65%، وتدفق حجز يومي مستقر'
    },
    {
      number: 3,
      name: 'تحسين العمليات وإطلاق نظام الاشتراكات',
      quarter: 1,
      focus: 'تحويل العملاء الأفراد لعملاء دائمين بنظام الاشتراكات الشهرية المجدولة',
      objectives: [
        'تسجيل أول 40 مشتركاً شهرياً دائمين (باقة الاشتراك المجدول أسبوعياً)',
        'الحفاظ على معدل رضا ومراجعات العملاء فوق 95%',
        'توظيف الدفعة الثانية من عمال التنظيف (10 عاملات إضافيات)'
      ],
      actions: [
        'إطلاق حملات إعادة استهداف (Retargeting) مخصصة للعملاء السابقين للاشتراك الدائم',
        'تطبيق نظام مراقبة الجودة والاتصال الهاتفي لتقييم الزيارات فوراً',
        'تفعيل برنامج الإحالة (أوصي بصديق واحصل على ساعة مجانية لكما)'
      ],
      progress: 'نمو الإيرادات بنسبة 40% واستقرار التدفق النقدي من الاشتراكات'
    },
    {
      number: 4,
      name: 'التوسع لمناطق وسط دبي',
      quarter: 2,
      focus: 'استهداف وسط مدينة دبي والخليج التجاري سكنياً وتجارياً بسيارات مخصصة',
      objectives: [
        'رفع إجمالي الحجوزات الفردية لـ 350 حجز شهرياً',
        'الوصول لـ 70 مشترك شهري ثابت يضمن عوائد مستقرة',
        'زيادة متوسط قيمة الفاتورة بنسبة 10% عبر الترويج للخدمات بالبخار'
      ],
      actions: [
        'إطلاق حملات إعلانية جغرافية ممولة لمنطقتي Downtown & Business Bay',
        'عقد شراكات مع إدارات الأبراج السكنية لتقديم خدمات بأسعار حصرية للسكان',
        'إظهار خيار إضافة تنظيف الكنب والسجاد بالبخار بنقرة واحدة أثناء الحجز'
      ],
      progress: 'ارتفاع حجم المبيعات بنسبة 25% وتأسيس قاعدة تشغيل جديدة'
    },
    {
      number: 5,
      name: 'التسويق بالمحتوى والتعاون مع المؤثرين',
      quarter: 2,
      focus: 'بناء مصداقية عالية وصناعة محتوى مرئي وتفاعلي جذاب مع مؤثرات دبي',
      objectives: [
        'حصد 300,000 مشاهدة على الأقل للفيديوهات الترويجية والتعاونية',
        'زيادة عدد متابعي إنستغرام بـ 5,000 متابع حقيقي مقيم بدبي',
        'تحقيق 450 حجز تنظيف إجمالي منوع خلال الشهر'
      ],
      actions: [
        'التعاون مع 3 مؤثرات أمهات وصانعات محتوى ترتيب منزل وتصميم داخلي بدبي',
        'إطلاق مسابقات وسحوبات على حساب السوشيال ميديا لربح زيارات تنظيف عميق مجانية',
        'نشر فيديوهات إرشادية وتجميلية سريعة قبل وبعد التنظيف لزيادة التفاعل التلقائي'
      ],
      progress: 'زيادة الحجوزات القادمة من السوشيال ميديا والبحث الطبيعي بـ 50%'
    },
    {
      number: 6,
      name: 'إطلاق باقة الصيف والمكاتب',
      quarter: 2,
      focus: 'استهداف عقود تنظيف الشركات الصيفية وإطلاق باقات السفر المنزلية',
      objectives: [
        'توقيع 10 عقود تنظيف مكاتب تجارية وشركات سنوية جديدة',
        'إطلاق باقة "السفر والعودة" للمنازل (تنظيف عميق وتعقيم قبل عودة العائلات من الإجازة)',
        'تجهيز 5 سيارات نقل إضافية وتوظيف طاقم عمل جديد (15 عاملة)'
      ],
      actions: [
        'إرسال عروض وحملات بريد إلكتروني موجهة لمديري العمليات والمكاتب بالخليج التجاري',
        'إعلانات مستهدفة بدقة للعائلات الوافدة المسافرة في إجازة الصيف للحجز المسبق',
        'تقديم خيارات سداد مرنة وفواتير ضريبية معتمدة للشركات المتعاقدة'
      ],
      progress: 'العقود التجارية تضمن تغطية 30% من التكاليف التشغيلية الثابتة للشركة'
    },
    {
      number: 7,
      name: 'تطوير تطبيق بيوريتي للجوال',
      quarter: 3,
      focus: 'التحول البرمجي والتكنولوجي الكامل وتوسيع النطاق السكني للمجمعات',
      objectives: [
        'بدء مرحلة برمجة وتصميم تطبيق الجوال بيوريتي الحصري (iOS & Android)',
        'توسيع التغطية الجغرافية لتشمل مناطق دبي لاند، المرابع العربية، ومحيط الفلل',
        'الوصول لمعدل تشغيل يبلغ 600 حجز إجمالي منجز شهرياً'
      ],
      actions: [
        'التعاقد مع وكالة برمجية محترفة لتنفيذ واجهات حجز سريعة وسلسة بـ 3 نقرات فقط',
        'إعلانات مستهدفة لسكان مجمعات الفلل المغلقة لخدمات تنظيف الحدائق الخارجية والواجهات',
        'تحسين تجربة وسرعة خوادم موقع الويب الحالي ونظام حجز الواتساب الآلي'
      ],
      progress: 'اكتمال 50% من تطبيق الجوال وإطلاق باقات تنظيف المساحات الخارجية'
    },
    {
      number: 8,
      name: 'التركيز على النظافة البيئية والصحية',
      quarter: 3,
      focus: 'الترويج للريادة في خدمات التنظيف العضوي والصديق للبيئة والصحة',
      objectives: [
        'الحصول على شهادة رسمية بدبي للمواد العضوية والصديقة لصحة الأطفال',
        'رفع المشتركين الدائمين بنظام الباقات الشهرية المجدولة لـ 120 مشترك',
        'الحفاظ على تقييم عام للمشرفين والخدمة لا يقل عن 4.9/5 نجوم'
      ],
      actions: [
        'حملة إعلانية ممولة بعنوان "منزل بيئي صحي لأطفالك" تستهدف العائلات الوافدة الميسورة',
        'استيراد منظفات عضوية وطبيعية معتمدة وجعلها الخيار التلقائي المجاني لجميع العملاء',
        'توفير معطرات طبيعية منعشة ومضادة للحساسية للغرف والمفروشات مجاناً'
      ],
      progress: 'زيادة هامش الأرباح التشغيلية بنسبة 35% وزيادة ولاء وتوصيات المشتركين'
    },
    {
      number: 9,
      name: 'إطلاق تطبيق الجوال والعروض الحصرية',
      quarter: 3,
      focus: 'إطلاق تطبيق الجوال ونظام الحجز الفوري ونظام نقاط الولاء الرقمي',
      objectives: [
        'تحقيق 2,000 تحميل لتطبيق الجوال في أول 30 يوم من إطلاقه',
        'توجيه 40% من الحجوزات اليومية لتتم بالكامل من خلال التطبيق الحصري',
        'تحقيق رقم قياسي جديد يبلغ 750 حجز تنظيف إجمالي شهري'
      ],
      actions: [
        'حملة إعلانات تحميل التطبيقات (احصل على 50 درهم رصيد فوري عند أول حجز عبر التطبيق)',
        'إرسال إشعارات وتنبيهات مخصصة وسريعة (Push Notifications) للمستخدمين بالعروض الأسبوعية',
        'تفعيل نظام الولاء الرقمي الذكي وتجميع النقاط التلقائي واستبدالها بزيارات مجانية'
      ],
      progress: 'أكثر من 500 حجز منجز عبر التطبيق في شهره الأول، وتقليص تكلفة الاستحواذ بنسبة 20%'
    },
    {
      number: 10,
      name: 'شراكات المطورين والوكلاء العقاريين',
      quarter: 4,
      focus: 'إبرام اتفاقيات استراتيجية مع قطاع العقارات وإدارة العقارات بدبي',
      objectives: [
        'توقيع 3 اتفاقيات حصرية مع شركات عقارية كبرى لتسويق باقة "نظافة الانتقال"',
        'تجاوز حاجز 150 مشتركاً شهرياً ثابتاً ومستقراً بالباقات',
        'تحقيق 850 حجز تنظيف إجمالي منوع بنهاية الشهر'
      ],
      actions: [
        'منح عمولات مجزية ومحفزة أو باقات صيانة مجانية للوكلاء العقاريين عند إحالة العملاء الجدد',
        'تصميم كروت ترحيبية أنيقة توزع مع مفاتيح الشقق والفلل الجديدة تمنح خصماً ترحيبياً لبيوريتي',
        'تخصيص فرق عمل سريعة الاستجابة لتنظيف وتجهيز الشقق السكنية المعروضة للبيع أو الإيجار'
      ],
      progress: 'تدفق حجوزات "التنظيف قبل الانتقال" يصبح رافداً أساسياً ومستداماً للإيرادات'
    },
    {
      number: 11,
      name: 'موسم الأعياد والطقس الشتوي بدبي',
      quarter: 4,
      focus: 'استغلال الذروة الموسمية للأعياد وتحسن الطقس بدبي لمضاعفة التشغيل',
      objectives: [
        'الوصول لأقصى طاقة تشغيلية بمعدل إشغال فرق وسيارات 95%',
        'تسجيل 1,000 حجز منجز شهرياً وهو الرقم الأكبر في مسيرة الشركة',
        'زيادة الإيرادات بنسبة 50% على أساس ربع سنوي بفضل خدمات الشتاء'
      ],
      actions: [
        'طرح باقة "تجهيز المجالس والفلل للأعياد والمناسبات والاحتفالات العائلية"',
        'إطلاق باقة تنظيف النوافذ والمناطق والحدائق الخارجية للاستمتاع بالأجواء الشتوية الجلابة بدبي',
        'مضاعفة إعلانات جوجل Ads والسوشيال ميديا لاستهداف الكلمات الدلالية الموسمية بدقة'
      ],
      progress: 'جدول الحجوزات يمتلئ بالكامل قبل 10 أيام من بداية الشهر وحجز كافة الأطقم'
    },
    {
      number: 12,
      name: 'التقييم السنوي والتحضير للانتشار الجغرافي',
      quarter: 4,
      focus: 'مراجعة الأداء السنوي وتكريم الكوادر والتخطيط لغزو أبوظبي والشارقة',
      objectives: [
        'تجاوز المستهدفات المالية والأرباح لعام كامل بنسبة 15%',
        'الحفاظ على تقييم عام للمتجر والخدمة 4.9 نجوم على خرائط جوجل من أصل 500 تقييم',
        'وضع خطة العمل والجدول اللوجستي للتوسع في الشارقة وأبوظبي للسنة الثانية'
      ],
      actions: [
        'إقامة حفل سنوي لتكريم طاقم العاملات والمشرفين الأكثر تميزاً وتوزيع مكافآت سنوية مجزية',
        'إرسال استبيانات تقييم وإرسال هدايا شكر وكوبونات خصم مميزة لجميع العملاء والمشتركين الدائمين',
        'إطلاق حملة تسويقية لاستعراض مسيرة وإنجازات بيوريتي خلال عام كامل لترسيخ الثقة والريادة'
      ],
      progress: 'علامة تجارية رائدة وذات مصداقية عالية بدبي، وجاهزية كاملة للتوسع الإقليمي الناجح'
    }
  ]
};

// 2. PERVOST COMPRESSORS PLAN (AMAZON E-COMMERCE)
const pervostPlan: MarketingPlan = {
  id: 'pervost-compressors-plan',
  title: 'متجر بيرفوست للضواغط الهوائية على أمازون',
  projectLinks: {
    websiteUrl: 'https://www.amazon.ae/s?k=Pervost+Air+Compressor',
    websiteLabel: 'صفحة متجر ضواغط بيرفوست على أمازون',
    controlUrl: 'https://sellercentral.amazon.ae/',
    controlLabel: 'أداة المراقبة والتحكم (Amazon Seller Central للمتجر)',
    controlIcon: 'ShoppingCart',
    productsSheetUrl: 'https://docs.google.com/spreadsheets/d/1PYaNiUCZtJQk56ND8xtPyJsaamk_MuKe4f_N1xdsJ6k/edit?gid=0#gid=0',
    productsSheetLabel: 'سجل المنتجات والمخزون في دبي (غوغل شيت)'
  },
  location: 'أمازون الإمارات والسعودية (Amazon UAE & KSA)',
  sizeLabel: 'أجهزة ومعدات هوائية صناعية',
  mapTitle: 'خريطة مراكز شحن وتوزيع بيرفوست (FBA)',
  mapDesc: 'مستودعات أمازون FBA ومناطق التغطية الجغرافية والتوصيل السريع بالخليج',
  kpisSummaryText: 'خلال 3 أشهر: بيع 300+ ضاغط هواء شهرياً، مع تصدر المنتج في الكلمات المفتاحية الرئيسية على أمازون، والحفاظ على تقييم 4.6+ نجوم من مئات المراجعات الحقيقية.',
  stats: [
    { value: '450M+', label: 'درهم سوق المعدات بالخليج', icon: 'ShoppingBag' },
    { value: '65M+', label: 'درهم مبيعات الضواغط سنوياً', icon: 'DollarSign' },
    { value: '12%', label: 'نمو مبيعات أمازون السنوية', icon: 'TrendingUp' },
    { value: '4.7★', label: 'تقييم رضا المشترين', icon: 'Star' }
  ],
  marketIntro: 'من سوق معدات وأدوات صناعية ضخم عبر الإنترنت بالخليج يقدر بـ 450 مليون درهم، كم يمكن لمتجر بيرفوست تحقيقه على أمازون؟',
  marketContext1Label: 'سوق المعدات بالإنترنت',
  marketContext1Value: '450+ مليون',
  marketContext1Desc: 'درهم حجم سوق الأدوات والمعدات عبر المنصات بالخليج',
  marketContext1Icon: 'ShoppingBag',
  marketContext2Label: 'الشحن السريع Prime',
  marketContext2Value: 'مفتاح المبيعات',
  marketContext2Desc: 'المشترون يفضلون التوصيل المجاني السريع خلال 24 ساعة',
  marketContext2Icon: 'Truck',
  marketContext3Label: 'مبيعات ضواغط الهواء',
  marketContext3Value: '65 مليون',
  marketContext3Desc: 'درهم إماراتي سنوياً للمبيعات الإلكترونية لضواغط الهواء',
  marketContext3Icon: 'DollarSign',
  marketShareTitle: 'الحصة الممكنة لمتجر بيرفوست',
  marketShareDesc: 'من سوق أمازون للمعدات إلى حصتنا المستهدفة',
  marketShareSegmentLabel: 'ضواغط الهواء الصامتة والخالية من الزيت (الطلب الإلكتروني المباشر)',
  marketShareSegmentPercent: '~35%',
  marketShareSegmentPercentNum: 35,
  marketShareSegmentDesc: 'يشمل الطلب على الضواغط الصامتة للمنازل، الورش، والطلاء الفني عبر الإنترنت',
  marketShareTargetYear1Label: 'هدف السنة الأولى',
  marketShareTargetYear1Val: '4-7%',
  marketShareTargetYear1Desc: 'الاستحواذ على الكلمات المفتاحية الرئيسية في الإمارات والسعودية',
  marketShareTargetYear3Label: 'هدف السنة الثالثة',
  marketShareTargetYear3Val: '15-22%',
  marketShareTargetYear3Desc: 'التوسع كعلامة رائدة وتوفير تشكيلة كاملة من الأدوات الهوائية المتوافقة',
  marketShareSummary: 'خلاصة التحليل: سوق الضواغط الهوائية الإلكتروني يشهد طلباً متزايداً على البدائل الصامتة. تموضع بيرفوست الذكي كعلامة تجارية ألمانية بجودة ممتازة وسعر منافس يمنحها إمكانية الاستحواذ السريع على حصة سوقية واعدة جداً.',
  mapConfig: {
    center: [25.076, 55.154], // Center on Dubai, targets will cover Riyadh too
    zoom: 5, // Wide zoom to show GCC region
    markerTitle: 'مركز التوزيع الرئيسي لبيرفوست (FBA Dubai)',
    markerDesc: 'مستودع أمازون FBA الرئيسي لتوزيع وشحن السلع لجميع أنحاء الإمارات في نفس اليوم.',
    targets: [
      {
        name: "نطاق التغطية والشحن السريع للإمارات (مستودعات أمازون دبي وجبل علي والمحيط)",
        coords: [25.076, 55.154],
        radius: 120000, // Covers entire UAE
        color: "#0071E3"
      },
      {
        name: "نطاق التغطية والشحن السريع للسعودية (مستودع أمازون الرياض والسلي والمحيط)",
        coords: [24.68, 46.82], // Riyadh coords
        radius: 250000, // Covers Riyadh region and surrounding cities
        color: "#A855F7"
      }
    ]
  },
  problem: {
    description: 'يواجه الحرفيون، أصحاب الورش، والميكانيكيون، ومحبو الأعمال اليدوية (DIY) في الإمارات والسعودية صعوبة بالغة في العثور على ضواغط هوائية (Air Compressors) عالية الجودة وبأداء موثوق على منصات التجارة الإلكترونية. السوق غارق بالمنتجات الصينية الرديئة والمجهولة التي تتعطل سريعاً، تفتقر لقطع الغيار والإكسسوارات، وتصدر ضجيجاً صاخباً وحرارة مرتفعة تسبب الإزعاج والصداع.',
    impact: 'تعطل أعمال الورش وتأخير المشاريع بسبب الأعطال المفاجئة، هدر الأموال على منتجات غير معمرة، صعوبة الحصول على صيانة أو ضمان حقيقي، وخطر الحوادث بسبب ضعف معايير الأمان في خزانات الضغط الرديئة.'
  },
  customerProblems: {
    title: 'مشاكل المشترين على أمازون',
    problems: [
      {
        icon: 'AlertTriangle',
        title: 'ضعف جودة وأمان ضواغط الهواء الرخيصة',
        description: 'الخوف الدائم من انفجار خزانات الضغط أو تسريب الهواء والزيت بسبب رداءة التصنيع وغياب معايير الجودة والسلامة المعتمدة عالمياً.'
      },
      {
        icon: 'Thermometer',
        title: 'الضجيج الصاخب والحرارة المرتفعة جداً',
        description: 'الضواغط التقليدية تصدر صوتاً صاخباً جداً (أكثر من 90 ديسيبل) يسبب الإزعاج والصداع في الورش الصغيرة والمنازل، وتسخن بسرعة فائقة.'
      },
      {
        icon: 'ShieldOff',
        title: 'غياب الضمان الحقيقي وخدمة ما بعد البيع',
        description: 'صعوبة إرجاع المنتج أو الحصول على صيانة أو قطع غيار للضواغط المشتراة عبر الإنترنت، حيث يكون البائع مجهولاً أو غير متجاوب مع الرسائل.'
      },
      {
        icon: 'PackageSearch',
        title: 'عدم توفر قطع الغيار والإكسسوارات الملحقة',
        description: 'يعاني المشتري للعثور على خراطيم، مسدسات رش، أو فلاتر متوافقة مع الضاغط الذي اشتراه، مما يجعله بلا فائدة عند حدوث تلف بسيط.'
      }
    ]
  },
  ownerProblems: {
    title: 'تحديات متجر بيرفوست على أمازون',
    problems: [
      {
        icon: 'TrendingDown',
        title: 'المنافسة السعرية الشرسة والمنتجات المقلدة',
        description: 'إغراق منصات أمازون بضواغط رخيصة جداً من بائعين صينيين مباشرة، مما يجعل إقناع العميل بدفع سعر أعلى مقابل الجودة المضمونة تحدياً مستمراً.'
      },
      {
        icon: 'Users',
        title: 'صعوبة الحصول على تقييمات إيجابية (Reviews)',
        description: 'صعوبة تشجيع المشترين على ترك مراجعات إيجابية للمنتج على أمازون، والتقييم السلبي الواحد يمكن أن يضر بترتيب المنتج ويهبط بالمبيعات بنسبة 50%.'
      },
      {
        icon: 'Truck',
        title: 'تكاليف الشحن المرتفعة ورسوم التخزين FBA',
        description: 'بسبب الوزن الثقيل للضواغط، تقتطع أمازون رسوم شحن وتخزين ضخمة (FBA fees)، مما يضغط بشدة على هوامش الربح الصافية للمتجر.'
      },
      {
        icon: 'Megaphone',
        title: 'ارتفاع تكلفة إعلانات أمازون (Amazon PPC)',
        description: 'الزيادة الكبيرة في تكلفة النقرة على كلمات البحث الرئيسية مثل "Air Compressor" بسبب تنافس بائعين متعددين على الصدارة.'
      }
    ]
  },
  noMarketingProblems: {
    title: 'مخاطر غياب التسويق الإلكتروني لبيرفوست',
    problems: [
      {
        icon: 'EyeOff',
        title: 'تراجع المنتج للصفحات الخلفية الميتة',
        description: 'خوارزمية أمازون (A9) تعاقب المنتجات التي لا تملك حركة مرور أو مبيعات مستمرة، فتهبط للمرتبة 50 أو 100 حيث لا يدخل أي متسوق تقريباً.'
      },
      {
        icon: 'TrendingDown',
        title: 'تراكم المخزون في مستودعات أمازون ودفع رسوم تخزين فائض',
        description: 'تراكم الضواغط الثقيلة في مخازن أمازون دون بيع يعني فرض رسوم تخزين فائض عالية جداً تستنزف رأس المال تدريجياً وتحوله لخسارة صافية.'
      },
      {
        icon: 'ShoppingCart',
        title: 'فشل إطلاق المنتجات الجديدة تماماً للجمهور',
        description: 'إطلاق أي ضاغط هواء جديد بدون حملة تسويقية وإعلانية قوية يعني بقاء المنتج بدون مبيعات وبدون تقييمات، مما يجعله طي النسيان للأبد.'
      }
    ]
  },
  marketingPackages: {
    title: 'تشكيلة ضواغط بيرفوست المتميزة على أمازون',
    subtitle: 'اختر الضاغط الهوائي المناسب لاحتياجاتك مع شحن مجاني وضمان حقيقي لمدة سنتين',
    packages: [
      {
        name: 'ضاغط بيرفوست الصامت المنزلي Pervost Silent 24L',
        price: '599 درهم',
        period: 'جهاز',
        description: 'مثالي للأعمال المنزلية، النفخ، التنظيف والورش الفنية الصغيرة والرسامين',
        features: [
          'خزان سعة 24 لتر عالي التحمل والأمان التام',
          'محرك صامت تماماً (أقل من 60 ديسيبل) يمنحك راحة وهدوء',
          'خالي من الزيت (100% Oil-Free) لعمر أطول وبدون حاجة لصيانة',
          'شحن مجاني وسريع FBA بالكامل لجميع المشتركين',
          'ضمان حقيقي لمدة سنتين مع استبدال فوري للجهاز المعيب',
          'شامل خرطوم ومسدس نفخ هواء مجانيين مرفقين بالعلبة'
        ],
        highlight: false,
        icon: 'Zap'
      },
      {
        name: 'ضاغط بيرفوست الاحترافي Pervost Pro 50L',
        price: '999 dr',
        period: 'جهاز',
        description: 'الأكثر مبيعاً - الخيار المثالي لورش السيارات، الطلاء وتثبيت المسامير والأثاث',
        features: [
          'خزان سعة 50 لتر للعمل المتواصل والضغط العالي والثابت',
          'قوة محرك 2.5 حصان بأداء جبار وتبريد ذكي للمحرك',
          'مقياس ضغط مزدوج وصمام أمان معتمد عالمياً لسلامتك',
          'مقاوم للصدأ والرطوبة والظروف الجوية القاسية بالخليج',
          'شحن FBA سريع مع توفر جميع قطع الغيار والإكسسوارات',
          'ضمان شامل لسنتين مع صيانة مجانية في مراكزنا'
        ],
        highlight: true,
        icon: 'Award'
      },
      {
        name: 'ضاغط بيرفوست الصناعي Pervost Industrial 100L',
        price: '1899 dr',
        period: 'جهاز',
        description: 'للاستخدامات الشاقة في المصانع، الورش الكبرى وأعمال البناء والمقاولات',
        features: [
          'خزان عملاق سعة 100 لتر مصنع وفقاً لأعلى معايير السلامة الأوروبية',
          'محرك ثلاثي الأطوار بأقصى كفاءة تشغيلية وقدرة تحمل جبارة',
          'نظام تزييت متطور وفريد لتقليل الاحتكاك والحرارة الزائدة',
          'عجلات متينة وسهلة الحركة للنقل المرن في موقع العمل المزدحم',
          'أولوية الدعم الفني وتوصيل مجاني وسريع للباب مباشرة',
          'خصم خاص 15% عند شراء قطعتين أو أكثر للشركات والورش'
        ],
        highlight: false,
        icon: 'Crown'
      }
    ]
  },
  market: {
    size: 'يقدر حجم سوق المعدات والأدوات الصناعية الخفيفة عبر الإنترنت في الخليج بأكثر من 450 مليون درهم سنوياً، وتستحوذ ضواغط الهواء على نسبة 15% من هذا الطلب نظراً لاستخداماتها المتعددة في الورش والمنازل ومغاسل السيارات والطلاء الفني.',
    trends: 'التوجه الكبير نحو الضواغط الصامتة والخالية من الزيت (Silent & Oil-Free Compressors) لتجنب الإزعاج والروائح وصعوبات الصيانة، وزيادة الاعتماد على منصات التجارة الإلكترونية مثل أمازون لشراء السلع الثقيلة بدلاً من الذهاب للأسواق التقليدية.',
    competitors: 'وجود علامات تجارية تقليدية عالمية مثل Stanley وMakita بأسعار مرتفعة جداً، ومئات الماركات الصينية المجهولة والرديئة بأسعار رخيصة جداً. يتموضع متجر بيرفوست في المنتصف بتقديم جودة ألمانية ممتازة وسعر منافس جداً مع ضمان وقطع غيار متوفرة.'
  },
  marketAnalysis: {
    title: 'تحليل سوق الضواغط على أمازون',
    subtitle: 'دراسة شاملة لفرص البيع الإلكتروني لعلامة بيرفوست',
    marketSize: {
      title: 'سوق التجارة الإلكترونية',
      icon: 'TrendingUp',
      mainStat: '450M+',
      mainStatLabel: 'درهم حجم سوق المعدات',
      details: [
        { label: 'نمو مبيعات أمازون السنوية', value: '12%', description: 'نمو في قطاع الأدوات والمعدات بالمنصة' },
        { label: 'الطلب على الصامت', value: 'مرتفع جداً', description: 'الضواغط الخالية من الزيت وصامتة الصوت' },
        { label: 'مبيعات الضواغط بالإنترنت', value: '65M', description: 'درهم إماراتي سنوياً بالخليج' },
        { label: 'معدل إرجاع السلع', value: 'أقل من 3%', description: 'للماركات ذات الجودة العالية والضمان' }
      ],
      insights: [
        'المتسوقون على أمازون في الخليج يبحثون بشكل متزايد عن الجودة والضمان الحقيقي، ويفضلون المنتجات المشحونة بواسطة أمازون (FBA) لتجنب المشاكل.',
        'مراجعات وتقييمات المنتجات هي العامل الأساسي والمحرك الأول للمبيعات وتحديد التترتيب على منصة أمازون.',
        'هناك نقص كبير في بائعي الضواغط الهوائية الذين يقدمون خدمة عملاء حقيقية ويوفرون إكسسوارات وقطع غيار سهلة المنال بنقرة زر.',
        'استهداف الكلمات المفتاحية الذكية والترويج الخارجي يمنح المتجر تفوقاً هائلاً على البائعين التقليديين في الأسواق الإنشائية.'
      ]
    },
    trends: {
      title: 'الاتجاهات السوقية لضواغط الهواء',
      icon: 'Activity',
      trends: [
        {
          name: 'ضواغط صامتة وخالية من الزيت',
          description: 'طلب متسارع جداً على الضواغط الصامتة لتقليل التلوث السمعي وسهولة استخدامها في المنازل والمكاتب.',
          growth: '+65%',
          icon: 'Zap'
        },
        {
          name: 'الشراء عبر خدمة Amazon Prime',
          description: 'المشترون يفضلون المنتجات ذات الشعار الأزرق Prime للشحن المجاني السريع والتوصيل خلال 24 ساعة.',
          growth: '+80%',
          icon: 'Truck'
        },
        {
          name: 'تكامل الأدوات الهوائية بالعلبة',
          description: 'المشترون يفضلون شراء "باقات متكاملة" تشمل الضاغط مع مسدسات الرش، النفخ، ومفكات الصدم الهوائية في طلب واحد.',
          growth: '+50%',
          icon: 'Package'
        },
        {
          name: 'الفيديوهات التوضيحية للمنتج',
          description: 'تأثير كبير لـفيديوهات استعراض أداء المنتج وقوته وصوته الصامت في صفحة عرض المنتج على أمازون لإقناع العميل.',
          growth: '+45%',
          icon: 'Eye'
        }
      ]
    },
    competitors: {
      title: 'تحليل المنافسين على أمازون',
      icon: 'Target',
      directCompetitors: [
        { name: 'الماركات العالمية (Stanley, Makita)', strength: 'ثقة عالية جداً بالاسم التجاري والجودة العريقة', weakness: 'أسعار مرتفعة جداً (ضعف السعر)، وتواجد غير مخصص على أمازون المحلي' },
        { name: 'البائعون الصينيون المباشرون', strength: 'أسعار رخيصة للغاية ومغرية في البداية للمشترين', weakness: 'جودة رديئة، تفتقر لمعايير الأمان، لا يوجد ضمان أو خدمة عملاء محليين، شحن بطيء' },
        { name: 'الموزعون التقليديون المحليون', strength: 'علاقات قوية مع محلات التجزئة التقليدية وسيطرة على الأسواق', weakness: 'ضعف شديد في التسويق الإلكتروني، صفحات منتجات رديئة وبدون تقييمات على أمازون' }
      ],
      ourAdvantage: [
        'أداء جبار وهندسة متطورة تجمع بين القوة والهدوء التام (صامتة الصوت بالكامل).',
        'تموضع سعر عبقري يقدم قيمة فائقة وجودة ممتازة بنصف سعر الماركات الكبرى وبضمان حقيقي لسنتين.',
        'تخزين وشحن بالكامل عبر مستودعات أمازون (FBA) لتوصيل مجاني وسريع جداً خلال يوم واحد لباب بيتك.',
        'صفحة منتج احترافية للغاية (A+ Content) تحتوي فيديوهات عالية الدقة وصور تشريحية ورسومات واضحة.',
        'توفير علبة إكسسوارات كاملة وقطع غيار متوافقة بنقرة زر واحدة على نفس المتجر لتسهيل العمل.'
      ]
    },
    swot: {
      title: 'تحليل SWOT لمتجر بيرفوست',
      strengths: [
        'تكنولوجيا الضواغط الصامتة والخالية من الزيت الفريدة',
        'ضمان سنتين حقيقي وخدمة عملاء محلية سريعة بدبي والرياض',
        'شحن مجاني فوري عبر نظام FBA المضمون',
        'مراجعات إيجابية عالية وتقييم 4.7+ نجوم من المشترين'
      ],
      weaknesses: [
        'الاعتماد الكامل على قوانين وسياسات عملاق التجارة أمازون وتقلباتها',
        'ارتفاع تكاليف التخزين والشحن للمنتجات الثقيلة الوزن',
        'حداثة العلامة التجارية في السوق مقارنة بالعمالقة التقليديين'
      ],
      opportunities: [
        'توسيع البيع ليشمل منصات أخرى مثل نون (Noon) وموقع الشركة المستقل',
        'التعاقد المباشر مع ورش صيانة السيارات ومغاسل السيارات في الإمارات والسعودية',
        'توفير أدوات هوائية متكاملة ومعدات طلاء تحمل نفس العلامة التجارية بيرفوست'
      ],
      threats: [
        'حظر الحساب أو المنتج بسبب سياسات أمازون الصارمة أو شكاوى المنافسين الكيدية',
        'حرب أسعار تشنها ماركات صينية جديدة تهبط بهوامش الربح بشكل مؤقت',
        'ارتفاع تكلفة الإعلانات المدفوعة PPC على أمازون بشكل مستمر وتنافسي'
      ]
    }
  },
  audience: {
    personaName: 'الحرفيون المحترفون / أصحاب الورش والمغاسل / محبو الأعمال اليدوية وصيانة السيارات المنزلية (DIY)',
    age: '22 - 60 سنة',
    interests: 'ضاغط هواء صامت ومريح، أداء قوي وضغط ثابت للطلاء والنفخ، أجهزة خالية من الزيت لا تتطلب صيانة معقدة، شحن سريع للباب، ضمان معتمد.',
    painPoints: 'الضجيج الهائل للضواغط القديمة الذي يسبب الصداع، تعطل الجهاز المفاجئ وتسريب الهواء والزيت، تلف المحرك لعدم المعرفة بالصيانة، غياب قطع الغيار والإكسسوارات الملحقة، الخوف من مخاطر الأمان.',
    buyingBehavior: 'يبحثون بكلمات مفتاحية محددة على أمازون، يقرؤون مراجعات وتقييمات المشترين بالتفصيل، يقارنون بين قوة المحرك (HP) وسعة الخزان (Litre) والسعر، ويفضلون المنتجات الحاصلة على شارة Prime.'
  },
  audienceDetails: {
    title: 'شرائح متسوقي بيرفوست بالتفصيل',
    subtitle: 'فهم سلوك وااحتياجات مشتري المعدات الصناعية عبر الإنترنت بالخليج',
    personas: [
      {
        name: 'خالد - هاوي الأعمال اليدوية',
        role: 'مهندس ومحب لأعمال الصيانة المنزلية والسيارات',
        age: '28-40 سنة',
        icon: 'UsersRound',
        description: 'يقيم في فيلا بالرياض، يعشق العمل بيده في عطلة نهاية الأسبوع لتنظيف سيارته، طلاء بعض الأثاث الخشبي، ونفخ الإطارات والمعدات الرياضية لأولاده.',
        goals: [
          'ضاغط هواء صامت تماماً لا يزعج جيرانه أو عائلته أثناء عمله في كراج الفيلا',
          'جهاز خالي من الزيت وسهل الاستخدام والتشغيل بدون أي تعقيدات صيانة أو تشغيل',
          'تصميم مدمج وسهل التخزين والحركة في الكراج بمرونة',
          'إكسسوارات متكاملة وخراطيم مرفقة مع الجهاز لسهولة البدء الفوري'
        ],
        challenges: [
          'الضواغط التجارية صاخبة جداً وتصدر صوتاً مرعباً يمنع العمل براحة',
          'عدم معرفته بكيفية تغيير وصيانة زيت المحرك في الأجهزة التقليدية',
          'الخوف من شراء جهاز رخيص يخرب سريعاً ولا يجد له تصليحاً أو قطع غيار'
        ],
        shoppingHabits: [
          'يبحث بنشاط على أمازون ويقارن التقييمات بدقة بالغة قبل قرار الشراء',
          'يشاهد فيديوهات يوتيوب لمقارنة أداء الأجهزة العملي قبل الشراء',
          'يفضل الشراء الفوري عبر Amazon Prime لتوفير تكلفة التوصيل الثقيل وضمان الشحن',
          'يترك تقييماً مفصلاً بالصور بعد تجربة المنتج والتأكد منه'
        ],
        quote: 'بدي ضاغط هواء صامت وقوي لكراج بيتي، وما بدي مشاكل صيانة وزيوت وزعل مع الجيران.'
      },
      {
        name: 'معلم سعيد - صاحب ورشة',
        role: 'مدير فني لورشة صيانة سيارات وتنجيد',
        age: '35-55 سنة',
        icon: 'Building2',
        description: 'يدير ورشة صيانة صغيرة في منطقة القوز بدبي، يعتمد على الهواء المضغوط لتشغيل مفكات البراغي، مسدسات الطلاء، ومعدات الرفع والنظافة.',
        goals: [
          'ضاغط جبار بسعة 50 أو 100 لتر يتحمل العمل المتواصل طوال اليوم بدون إجهاد',
          'أقصى معايير الأمان والسلامة لحماية العمال من أي مخاطر انفجار أو تسريب',
          'سرعة الحصول على قطع غيار وخراطيم وإكسسوارات لمنع توقف العمل اليومي بالورشة',
          'ضمان حقيقي يضمن له استبدال أو صيانة فورية في حال حدوث عطل طارئ'
        ],
        challenges: [
          'توقف الورشة وخسارة آلاف الدراهم يومياً في حال تعطل ضاغط الهواء الرئيسي للعمل',
          'تلف صمامات الأجهزة الرخيصة بسبب الرطوبة والحرارة العالية بدبي وتراكم المياه بالخزان',
          'صعوبة نقل الأجهزة الثقيلة وتكلفته العالية للصيانة في الأسواق التقليدية'
        ],
        shoppingHabits: [
          'يشتري باسم شركته على أمازون للحصول على فاتورة ضريبية مستردة القيمة وسهلة الجرد',
          'يبحث عن البائعين الرسميين المعتمدين الذين يقدمون ضماناً محلياً حقيقياً وسريعاً',
          'مستعد لدفع سعر أعلى مقابل الجودة الممتازة وخدمة ما بعد البيع والدعم الفني السريع',
          'يفضل الضواغط المزودة بعجلات متينة لسهولة تحريكها وتوجيهها بالورشة بمرونة'
        ],
        quote: 'الضاغط هو قلب الورشة، لو وقف شغلي كله بيوقف. بدي جهاز حديد معتمد وراسي مرتاح.'
      },
      {
        name: 'طارق - رسام وفنان طلاء',
        role: 'رسام ومصمم ديكور جدران وفنون تعبيرية بالرش',
        age: '24-35 سنة',
        icon: 'UserX',
        description: 'يعمل في مرسمه الخاص وفي مواقع العملاء لطلاء الجدران واللوحات ورش الأثاث الفني باستخدام مسدس الرش الهوائي (Airbrush & Spray Gun) بدقة فائقة.',
        goals: [
          'ضغط هواء نقي 100% وخالي تماماً من شوائب الزيت لضمان طلاء مثالي بدون أي عيوب',
          'تحكم دقيق ومزدوج في ضغط الهواء الخارج للحصول على رش متناسق ومتساوي للألوان',
          'جهاز خفيف الوزن نسبياً وسهل النقل معه لمواقع العمل المختلفة لدى العملاء بسهولة',
          'هدوء تام في المرسم للتركيز على أدق تفاصيل العمل الفني دون تشتيت'
        ],
        challenges: [
          'اختلاط قطرات الزيت بالهواء في الضواغط التقليدية يفسد الطلاء ويشوه اللوحات الفنية الثمينة',
          'الوزن الزائد لبعض الأجهزة يجعل نقلها في سيارته الصغيرة كابوساً يومياً متعباً',
          'تذبذب ضغط الهواء يسبب عدم تناسق الألوان وسيلان الطلاء على الجدران وإفساد العمل'
        ],
        shoppingHabits: [
          'يهتم بالتفاصيل الدقيقة جداً والمواصفات الفنية المكتوبة في صفحة المنتج على أمازون',
          'يشتري إكسسوارات عالية الجودة متوافقة مع الضاغط (فلاتر رطوبة، خراطيم مرنة، مسدسات رش)',
          'يتابع توصيات الرسامين ومصممي الديكور الآخرين على منصات التواصل الاجتماعي',
          'يفضل الدفع الإلكتروني السريع واستلام المنتج مغلفاً بشكل ممتاز يحميه من الصدمات'
        ],
        quote: 'نقاء الهواء المضغوط هو سر الطلاء الاحترافي الفاخر. بدي ضاغط صامت وخالي من الزيت ووزنه مناسب.'
      }
    ]
  },
  valueProposition: {
    statement: 'نحن في "بيرفوست للضواغط الهوائية" نقدم الجيل الجديد من الضواغط الألمانية الصامتة والخالية تماماً من الزيت على منصة أمازون، والتي تمنحك الأداء الجبار والأمان المطلق مع هدوء تام لا يتجاوز 60 ديسيبل، مدعومة بشحن مجاني سريع FBA وضمان حقيقي محلي لمدة سنتين مع توافر كامل لجميع قطع الغيار.',
    keyBenefits: [
      'تقنية ألمانية صامتة تماماً (أقل من 60 ديسيبل) للعمل بهدوء وراحة في أي مكان وبدون صداع',
      'محرك خالي من الزيت (100% Oil-Free) يقدم هواء نقياً بدون روائح ولا يتطلب صيانة معقدة',
      'أعلى معايير الأمان والسلامة العالمية مع خزانات ضغط مختبرة وصمامات أمان معتمدة أوروبياً',
      'شحن سريع ومجاني بالكامل بواسطة أمازون (FBA) لتسليم موثوق وباب البيت خلال يوم واحد',
      'ضمان محلي حقيقي لمدة سنتين مع استبدال فوري وخدمة صيانة متميزة بدبي والرياض وجدة',
      'توفر دائم لكافة قطع الغيار وخراطيم ومسدسات الرش والنفخ ومصائد الرطوبة على متجرنا'
    ]
  },
  valuePropositionDetails: {
    title: 'لماذا تختار ضواغط بيرفوست الألمانية؟',
    subtitle: 'الهندسة المتطورة تلبي متطلبات القوة والأمان والهدوء على أمازون بالخليج',
    pillars: [
      {
        title: 'تكنولوجيا المحرك الصامت الصديق للبيئة',
        icon: 'Zap',
        description: 'بفضل التصميم الهندسي المبتكر، تعمل ضواغط بيرفوست بصوت هادئ جداً (صامت) وبدون الحاجة لإضافة زيت المحرك، مما يوفر بيئة عمل مريحة ونظيفة تماماً.',
        examples: [
          'مستوى ضجيج منخفض جداً (58-60 ديسيبل) مقارنة بـ 90 ديسيبل في الضواغط التقليدية',
          'تصميم Oil-Free يضمن عدم وجود أبخرة زيتية أو روائح كريهة في الهواء الخارج تماماً',
          'توفير كامل في تكاليف شراء وتغيير الزيت وصيانة المحرك الدورية والجهد الضائع',
          'تشغيل سهل وسلس في درجات الحرارة المنخفضة أو المرتفعة بالخليج بفضل المبرد الذكي'
        ],
        impact: 'هدوء وتركيز تام في ورشتك أو كراج منزلك دون التسبب في إزعاج عائلتك أو جيرانك'
      },
      {
        title: 'أعلى معايير السلامة والأمان الفنية',
        icon: 'Shield',
        description: 'سلامتك هي أولويتنا القصوى. جميع خزانات وصمامات بيرفوست مصنعة وفقاً لأشد معايير السلامة والأمان الأوروبية والعالمية لمقاومة الضغط العالي والظروف الصعبة.',
        examples: [
          'خزانات فولاذية معالجة ومقاومة للصدأ والترسبات الداخلية لعمر تشغيلي أطول',
          'صمامات أمان متطورة تفتح تلقائياً في حال تجاوز الضغط للحد المسموح به لحمايتك',
          'مقياس ضغط مزدوج فائق الدقة لمراقبة ضغط الخزان وضغط الهواء الخارج بوضوح',
          'حماية حرارية ذكية تفصل المحرك تلقائياً في حال ارتفاع حرارته لحمايته من التلف'
        ],
        impact: 'حماية كاملة لك ولعائلتك وعمالك وراحة بال مطلقة أثناء استخدام الجهاز تحت أقصى الظروف'
      },
      {
        title: 'الشحن واللوجستيات الفائقة (FBA)',
        icon: 'Truck',
        description: 'بالتعاون مع مستودعات أمازون، نقوم بشحن وتخزين منتجاتنا لنضمن لك توصيلاً فائق السرعة ومجاني بالكامل لباب بيتك أو ورشتك دون عناء.',
        examples: [
          'شحن مجاني بالكامل لجميع مشتركي Amazon Prime بالدول المستهدفة (الإمارات والسعودية)',
          'توصيل سريع جداً خلال 24 إلى 48 ساعة كحد أقصى لباب العميل مباشرة',
          'تغليف سميك ومحمي خصيصاً للمنتجات الثقيلة لمنع أي أضرار أو خدوش أثناء النقل',
          'سهولة تتبع الشحنة وإمكانية الإرجاع والاستبدال المرن وفق سياسات أمازون الميسرة'
        ],
        impact: 'الحصول على معداتك الثقيلة بأسرع وقت ودون تكبد تكاليف شحن مرتفعة أو عناء نقل'
      },
      {
        title: 'الضمان الحقيقي والدعم المحلي المتميز',
        icon: 'Award',
        description: 'لا داعي للقلق بشأن الصيانة أو قطع الغيار بعد الشراء. نحن نقدم كفالة محلية حقيقية ودعماً ممتازاً لضمان استمرارية عملك بكفاءة ودون توقف.',
        examples: [
          'ضمان شامل ومكتوب لمدة سنتين كاملتين يشمل قطع الغيار والمحرك والخزان',
          'مراكز صيانة وخدمة عملاء محلية معتمدة في دبي، الرياض، وجدة لتسهيل الدعم والخدمة',
          'استبدال فوري وسريع للجهاز في حال وجود عيوب مصنعية خلال فترة الضمان الفنية',
          'توفر دائم لكافة الإكسسوارات متوافقة بنسبة 100% على نفس المتجر بنقرة زر واحدة'
        ],
        impact: 'استثمار آمن ومضمون طويل الأمد لورشك وأعمالك ودعم فني محلي موثوق بجانبك دائماً'
      }
    ]
  },
  channels: {
    primary: [
      'إعلانات أمازون المدفوعة للبحث والمنتجات المستهدفة (Amazon PPC Ads - Search & Sponsored Products)',
      'تحسين محركات البحث داخل منصة أمازون (Amazon SEO - Product Listing & A+ Content Optimization)',
      'حملات إعلانية مرئية وتوضيحية على فيسبوك وإنستغرام توجه مباشرة لصفحة الشراء بأمازون المحتلي',
      'التسويق عبر محتوى الفيديو القصير (تيك توك وإنستغرام Reels) لاستعراض قوة وصوت الجهاز الصامت'
    ],
    secondary: [
      'شراكات مع قنوات اليوتيوب العربية المتخصصة في مراجعة الأجهزة والمعدات اليدوية والورش',
      'البريد الإلكتروني وقسائم الخصم الحصرية لعملاء أمازون السابقين لإعادة استهدافهم لشراء الإكسسوارات',
      'المشاركة في مجموعات ومنصات عشاق السيارات والأعمال اليدوية وصيانة الكراجات بالخليج',
      'عروض وتخفيضات حصرية في مواسم التخفيضات الكبرى (Amazon White Friday / Prime Day)'
    ]
  },
  strategy: {
    awareness: 'إنشاء فيديوهات مقارنة مذهلة وقصيرة تستعرض الفارق الرهيب بين صوت ضاغط بيرفوست الصامت والضواغط الصاخبة الأخرى ونشرها على تيك توك وإنستغرام، واستهداف الكلمات المفتاحية الأكثر بحثاً على أمازون مثل "Silent Air Compressor" أو "Oil-free Compressor".',
    consideration: 'تصميم صفحة عرض المنتج على أمازون بأعلى جودة بوجود صور تشريحية ورسومات توضيحية ومحتوى A+ تفصيلي، واستعراض شهادات وتقييمات العملاء الإيجابية، بالإضافة لنشر مراجعات تفصيلية من خبراء يوتيوب للمعدات في الخليج لتعزيز الثقة.',
    conversion: 'المشاركة الفعالة في صفقات البرق (Lightning Deals) وكوبونات الخصم على أمازون (خصم 50 درهم فوري لفترة محدودة)، وتوفير شحن مجاني وسريع Prime، مع استعراض ميزة الضمان الذهبي لسنتين والاستبدال الفوري لإلغاء أي تردد لدى المشتري.',
    retention: 'التواصل المهذب بعد الشراء عبر نظام أمازون للاطمئنان على تجربة العميل وتشجيعه على ترك تقييم إيجابي، وتقديم خصومات خاصة وحصرية بنسبة 15% للعملاء السابقين عند رغبتهم في شراء الإكسسوارات كخراطيم الهواء أو مسدسات الرش.'
  },
  budget: {
    total: '15,000 درهم إماراتي شهرياً (لالتسويق والإعلانات على أمازون ومنصات السوشيال ميديا)',
    allocation: '50% إعلانات أمازون الممولة (Amazon PPC) لضمان الصدارة في البحث، 25% إعلانات فيسبوك وإنستغرام المرئية لجلب حركة مرور خارجية، 15% صناعة محتوى فيديو وعينات مجانية للمراجعين على يوتيوب، 10% أدوات تتبع الكلمات المفتاحية وتحسين متجر أمازون'
  },
  kpis: {
    primary: [
      'عدد الوحدات المباعة شهرياً (الهدف: 300 ضاغط شهرياً في 3 أشهر)',
      'الترتيب العضوي للمنتج في كلمات البحث الرئيسية بأمازون (Best Sellers Rank - BSR)',
      'معدل تقييم المنتج على أمازون (الهدف: الحفاظ على 4.6+ نجوم من 100+ تقييم)',
      'العائد على الإنفاق الإعلاني (ROAS) على أمازون (الهدف: أكثر من 4x)',
      'تكلفة الاستحواذ الإعلاني (ACoS) على أمازون (الهدف: أقل من 20%)'
    ],
    secondary: [
      'نسبة النقر إلى الظهور (CTR) للإعلانات الممولة (الهدف: أكثر من 2%)',
      'معدل التحويل للبيع (Conversion Rate) في صفحة المنتج (الهدف: أكثر من 15%)',
      'نسبة المشترين الذين يقومون بشراء إكسسوارات إضافية من المتجر (الهدف: 25%)',
      'نسبة إرجاع المنتجات المباعة (الهدف: أقل من 2.5%)',
      'عدد الزيارات اليومية لصفحة المنتج (الهدف: 1500 زيارة/يوم)'
    ]
  },
  products: [
    {
      id: 'per-prod-1',
      name: 'ضاغط هواء بيرفوست صامت 24 لتر (Pervost Silent 24L)',
      category: 'ضواغط صامتة',
      price: '599 د.إ',
      description: 'ضاغط هواء صامت تماماً وخالي من الزيت، مثالي للمنازل، النفخ، والورش الصغيرة.',
      features: ['صوت هادئ جداً (أقل من 60 ديسيبل)', 'خزان 24 لتر فولاذي معزز', 'خالي تماماً من الزيت (Oil-Free)', 'شامل خرطوم ومسدس هواء مجاناً'],
      targetAudience: 'هواة الأعمال اليدوية، رسامون، ميكانيكا منزلي',
      stockLevel: '120 وحدة بمستودع FBA'
    },
    {
      id: 'per-prod-2',
      name: 'ضاغط هواء بيرفوست الاحترافي 50 لتر (Pervost Pro 50L)',
      category: 'ضواغط احترافية',
      price: '999 د.إ',
      description: 'ضاغط هواء قوي ومثالي لورش السيارات، الدهان، وأعمال التشييد.',
      features: ['محرك قوي 2.5 حصان', 'خزان 50 لتر للعمل الشاق المستمر', 'مقياس ضغط مزدوج وصمام أمان معتمد', 'تبريد ذكي للمحرك لمنع السخونة'],
      targetAudience: 'ورش السيارات، فنيو الطلاء والدهان، المقاولون',
      stockLevel: '85 وحدة بمستودع FBA'
    },
    {
      id: 'per-prod-3',
      name: 'مسدس رش الطلاء الاحترافي بيرفوست (Pervost Spray Gun Pro)',
      category: 'أدوات هوائية',
      price: '189 د.إ',
      description: 'مسدس رش طلاء هوائي عالي الدقة يعطي نتائج متجانسة وخالية من العيوب.',
      features: ['فوهة من الستانلس ستيل 1.4 مم', 'تحكم مرن بتوزيع الدهان وضغط الهواء', 'خفيف الوزن ومقاوم للتآكل', 'متوافق بنسبة 100% مع جميع ضواغطنا'],
      targetAudience: 'فنيو الطلاء والدهان، هواة الديكور المنزلي',
      stockLevel: '350 وحدة بمستودع FBA'
    },
    {
      id: 'per-prod-4',
      name: 'خرطوم هواء مضغوط مرن 15 متر (Pervost Air Hose 15m)',
      category: 'إكسسوارات',
      price: '79 د.إ',
      description: 'خرطوم هواء مضغوط عالي التحمل ومقاوم للالتواء والضغط العالي.',
      features: ['طول 15 متر', 'يتحمل ضغط حتى 300 PSI', 'وصلات سريعة من النحاس المقاوم للصدأ', 'مرونة كاملة في درجات الحرارة المرتفعة'],
      targetAudience: 'جميع مستخدمي ضواغط الهواء',
      stockLevel: '500 وحدة بمستودع FBA'
    }
  ],
  roadmap: [
    {
      number: 1,
      name: 'تهيئة المتجر والمخزون FBA',
      quarter: 1,
      focus: 'تسجيل المتجر، شحن أول دفعة FBA، وتهيئة صفحة المنتج باحترافية وسحر بصري',
      objectives: [
        'شحن وإيداع أول دفعة من ضواغط بيرفوست بمستودعات أمازون بدبي والرياض (FBA)',
        'إنشاء وتصميم صفحة عرض المنتجات بتنسيق A+ Content وصور عالية الدقة',
        'الحصول على أول 10 مبيعات طبيعية وتأكيد شارة التوصيل السريع Prime'
      ],
      actions: [
        'تصوير الضواغط في ورشة عمل واقعية لإبراز التصميم والمحرك الصامت الخالي من الزيت',
        'كتابة عناوين وأوصاف غنية بالكلمات المفتاحية الأكثر بحثاً مثل "Silent Compressor"',
        'إدراج المنتجات في نظام الشحن المضمون FBA لضمان توصيل خلال 24 ساعة للعملاء'
      ],
      progress: 'المنتجات حية ونشطة على متجر أمازون الخليج وبجاهزية كاملة للشراء والتوصيل الفوري'
    },
    {
      number: 2,
      name: 'إطلاق إعلانات أمازون وحملات البحث',
      quarter: 1,
      focus: 'الاستحواذ المباشر على الصفحات الأولى عبر حملات إعلانات أمازون PPC الممولة',
      objectives: [
        'تحقيق 50 مبيعة ضواغط منجزة بنجاح خلال الشهر بالمنصة',
        'الحصول على أول 15 تقييم إيجابي (4.7+ نجوم) لتعزيز موثوقية البائع',
        'الحفاظ على تكلفة الإعلان للمبيعات ACoS تحت 35% لضمان الربحية'
      ],
      actions: [
        'إطلاق حملات إعلانية ممولة (Sponsored Products & Sponsored Brands Ads) على كلمات البحث الحيوية',
        'تفعيل برنامج Amazon Vine للحصول على تقييمات موثوقة وسريعة من المراجعين المعتمدين لأمازون',
        'برمجة نظام مراسلة آلي ومهذب للعملاء بعد تسلمهم السلعة للاطمئنان وحثهم على كتابة مراجعة'
      ],
      progress: 'المنتج يتصدر في الصفحة الأولى لـ 3 كلمات بحث رئيسية بنهاية الشهر'
    },
    {
      number: 3,
      name: 'تحسين التموضع السعري وعروض الربط',
      quarter: 1,
      focus: 'تعزيز معدل تحويل المشترين لصفحة المنتج وتفعيل عروض الملحقات',
      objectives: [
        'رفع معدل استقرار المبيعات لـ 100 ضاغط هواء منجز شهرياً',
        'الوصول بمعدل تحويل الزيارات لمبيعات (Conversion Rate) لـ 12% في المتجر',
        'طرح عروض الربط التلقائي للإكسسوارات (Frequently Bought Together)'
      ],
      actions: [
        'تفعيل كوبون خصم مباشر 50 درهم/ريال يظهر للمتسوقين مباشرة على صفحة المنتج بأمازون',
        'إنشاء صفحات عرض ملحقة لإكسسوارات بيرفوست كخراطيم الهواء ومسدسات الرش بالربط المباشر',
        'مراقبة عروض الأسعار للمنافسين بشكل دوري لضمان بقائنا في صدارة صندوق الشراء Buy Box'
      ],
      progress: 'زيادة هوامش الربح الإجمالية للمتجر واستقرار الترتيب العضوي BSR للضواغط'
    },
    {
      number: 4,
      name: 'برنامج مراجعات الفيديو والتثبيت',
      quarter: 2,
      focus: 'بناء الثقة القصوى عبر مراجعات الفيديو الحية وتوضيح صمت صوت المحرك',
      objectives: [
        'جمع 50 مراجعة وتقييم موثق بالصور والفيديو الحقيقي على المتجر',
        'تخطي حجم مبيعات يبلغ 150 وحدة ضواغط هواء شهرياً',
        'إدراج فيديو استعراضي فائق الدقة يوضح هدوء صوت ضاغط بيرفوست بصفحة العرض'
      ],
      actions: [
        'التعاون مع هواة أعمال يدوية DIY بدبي والرياض لصناعة مراجعات فيديو حقيقية أثناء العمل بالضاغط',
        'تصميم وإدراج كرت ضمان ذهبي لمدة سنتين داخل الكرتون يسهل التواصل مع الدعم الفني المباشر للشركة',
        'تثبيت مراجعات الفيديو الإيجابية والواقعية في صدارة المراجعات بالصفحة الأولى للمنتج'
      ],
      progress: 'ارتفاع حاد في ثقة المتسوقين وتراجع نسبة استرجاع السلع لأقل من 2%'
    },
    {
      number: 5,
      name: 'توجيه الزوار الخارجيين للمتجر',
      quarter: 2,
      focus: 'استقطاب حركة مرور خارجية عالية الجودة من السوشيال ميديا لصفحة أمازون',
      objectives: [
        'جلب 10,000 زائر خارجي مستهدف لروابط الشراء الخاصة ببيرفوست على أمازون',
        'زيادة حجم مبيعات المتجر ليتخطى 200 ضاغط شهرياً',
        'الحصول على مكافأة الإحالة للعلامات التجارية (Brand Referral Bonus) من أمازون'
      ],
      actions: [
        'إطلاق فيديوهات جذابة ومقارنات صوتية صامتة لضواغط بيرفوست على تيك توك وإنستغرام Reels',
        'التعاقد مع مؤثرين ومراجعي معدات وورش ذوي شعبية كبيرة بالخليج على يوتيوب لتجربة الجهاز عملياً',
        'توفير روابط شراء مباشرة ومختصرة مع كود خصم إضافي لجمهور شبكات التواصل الاجتماعي'
      ],
      progress: 'خوارزمية أمازون A9 تمنح المنتج قفزة ترتيب عضوية ضخمة بسبب الزيارات الخارجية النشطة'
    },
    {
      number: 6,
      name: 'عروض الصيف ومهرجان Prime Day',
      quarter: 2,
      focus: 'استغلال مهرجانات التسوق الكبرى وتخفيضات Prime Day لتحطيم أرقام المبيعات',
      objectives: [
        'بيع 350 ضاغط هواء في أسبوع مهرجان تخفيضات الصيف كحد أدنى',
        'تصدر الفئة والحصول على وسم البائع الأفضل (Best Seller) بالمنصة',
        'الوصول للترتيب العضوي رقم 1 بقسم ضواغط الهواء على أمازون الخليج'
      ],
      actions: [
        'المشاركة الفعالة في صفقات البرق (Lightning Deals) وكوبونات الخصم الحصرية لأعضاء Prime',
        'مضاعفة ميزانيات حملات PPC قبل انطلاق المهرجان بـ 3 أيام للسيطرة على محركات البحث',
        'تأمين كميات ضخمة وشحنها لمستودعات أمازون (FBA) لتجنب نفاد المخزون أثناء الطلب الكثيف'
      ],
      progress: 'نفاد 95% من المخزون المخصص وتحقيق قفزة مبيعات تاريخية وعوائد مالية سريعة'
    },
    {
      number: 7,
      name: 'توسيع باقة الإكسسوارات والأدوات',
      quarter: 3,
      focus: 'إطلاق خط إنتاج متكامل من الإكسسوارات والأدوات الهوائية لزيادة قيمة سلة المشتري',
      objectives: [
        'إطلاق 3 منتجات ملحقة (مسدس دهان احترافي، مفك صدم لعجلات السيارات، ومصيدة رطوبة مائية)',
        'الحفاظ على وتيرة مبيعات ضواغط طبيعية تبلغ 250 وحدة شهرياً',
        'زيادة متوسط قيمة الطلب للعميل الواحد (Average Order Value) بنسبة 20%'
      ],
      actions: [
        'تقديم عروض خصم 10% تلقائية عند شراء الضاغط مع مسدس الدهان والخراطيم معاً كباقة واحدة',
        'تصميم صفحات المنتجات الجديدة بنفس الهوية البصرية والجمالية الفاخرة لعلامة بيرفوست الألمانية',
        'إعادة استهداف عملاء الضواغط السابقين عبر إعلانات مخصصة لشراء الأدوات الهوائية الجديدة المتوافقة'
      ],
      progress: 'مبيعات الإكسسوارات والأدوات الهوائية تمثل 25% من إجمالي مبيعات متجر بيرفوست بالخليج'
    },
    {
      number: 8,
      name: 'السيو المتقدم واستهداف الورش B2B',
      quarter: 3,
      focus: 'تحسين محركات البحث طويل المدى والتكامل في برنامج أمازون للأعمال B2B',
      objectives: [
        'تصدر الكلمات المفتاحية ذات الذيل الطويل (Long-tail keywords) في محركات البحث بأمازون',
        'تسجيل المتجر في برنامج (Amazon Business) المعتمد لخدمة الشركات والمصانع والورش',
        'إنجاز أول 10 مبيعات B2B بطلبات تجارية لكميات من الضواغط'
      ],
      actions: [
        'تحسين كلمات البحث الخلفية (Backend Search Terms) لتشمل اللهجات والمصطلحات المحلية للورش بالخليج',
        'طرح خصومات جذابة للكميات (Business Pricing) المخصصة للشركات والورش والمقاولين',
        'كتابة مقالات مقارنة واستعراضات فنية متكاملة بموقع الشركة يوجه روابطها للشراء بأمازون'
      ],
      progress: 'اختراق سوق الورش التجارية والصناعات الخفيفة بكفاءة وبناء سمعة ممتازة للماركة'
    },
    {
      number: 9,
      name: 'الانتشار والاستحواذ بالسوق السعودي',
      quarter: 3,
      focus: 'التركيز اللوجستي والتسويقي الكامل على المملكة العربية السعودية كأكبر سوق إقليمي',
      objectives: [
        'زيادة مبيعات السوق السعودي لتستحوذ على 60% من إجمالي حجم أعمال بيرفوست',
        'الدخول في قائمة أفضل 3 بائعين لضواغط الهواء بالكامل على أمازون السعودية',
        'تحقيق 350 مبيعة ضواغط هواء شهرية مستقرة بالمنطقتين'
      ],
      actions: [
        'تأمين شحنات FBA ضخمة ومجدولة لمستودعات أمازون بالرياض وجدة لضمان الشحن السريع في نفس اليوم',
        'إطلاق حملات إعلانية ممولة مخصصة للجمهور السعودي مستهدفة الكشتات، الرحلات، والورش الكبيرة بالرياض',
        'التعاون مع مؤثرين سعوديين بمجال تعديل وتجديد السيارات والمعدات لإبراز قوة وهدوء بيرفوست'
      ],
      progress: 'مبيعات السعودية تتضاعف بمعدل 3 مرات وتأمين حصة سوقية راسخة ومستدامة'
    },
    {
      number: 10,
      name: 'إطلاق موقع الويب ونظام الضمان الرقمي',
      quarter: 4,
      focus: 'بناء الهوية الرقمية المستقلة ونظام الضمان والتواصل المباشر مع العملاء',
      objectives: [
        'إطلاق موقع الويب الرسمي لبيرفوست (pervost-compressors) لدعم الضمان المعتمد والمبيعات',
        'تفعيل تسجيل الضمان الرقمي عبر مسح باركود الـ QR المطبوع على الأجهزة',
        'جمع بيانات العملاء بدقة لبناء قاعدة بيانات مخصصة للتسويق المباشر خارج أمازون'
      ],
      actions: [
        'تصميم كروت الضمان بباركود QR ذكي داخل الصندوق يوجه العميل لتسجيل بياناته للحصول على ضمان سنتين',
        'توفير قطع الغيار النادرة وحجوزات الصيانة السريعة من خلال الموقع بشكل مبسط ودون وسيط للعملاء',
        'نشر فيديوهات إرشادية وتوضيحية بكيفية صيانة الضواغط الصامتة وتشغيل الأدوات المختلفة بكفاءة'
      ],
      progress: 'تأسيس قاعدة بيانات تضم أكثر من 1500 عميل وتخفيف ضغط دعم العملاء على أمازون بنسبة 30%'
    },
    {
      number: 11,
      name: 'الجمعة البيضاء ومبيعات نهاية السنة',
      quarter: 4,
      focus: 'الاستغلال الأقصى لموسم الجمعة البيضاء لتسجيل مبيعات قياسية وعوائد مالية سريعة',
      objectives: [
        'بيع 600 ضاغط هواء و1000 قطعة إكسسوار على الأقل خلال أسبوع الجمعة البيضاء',
        'الحفاظ على التقييم العام 4.7 نجوم تحت ضغط الشحن والطلبات الهائل بالمنصة',
        'تحقيق أعلى هامش ربح وإيرادات شهرية في مسيرة العلامة التجارية التاريخية'
      ],
      actions: [
        'المشاركة في صفقات الجمعة البيضاء الرسمية لأمازون بخصومات مغرية وقصيرة الأمد لحسم المترددين',
        'التواصل مع قاعدة بيانات العملاء السابقين المسجلين عبر الإيميل والواتساب لشراء الإكسسوارات بخصم الموسم',
        'زيادة ميزانية إعلانات PPC للسيطرة التامة على كلمات البحث لضمان عدم ظهور المنافسين في القمة'
      ],
      progress: 'مبيعات قياسية غير مسبوقة ونفاد كامل المخزون المتوفر في غضون أيام قلائل'
    },
    {
      number: 12,
      name: 'التقييم السنوي والتحضير للتوسع متعدد القنوات',
      quarter: 4,
      focus: 'تقييم الأداء المالي والتحضير لغزو منصات إلكترونية ومحلات تجزئة كبرى',
      objectives: [
        'تثبيت مكانة بيرفوست كالعلامة الأكثر موثوقية للضواغط الصامتة عبر الإنترنت بالخليج',
        'تقليص نسبة إرجاع السلع لأقل من 1.5% نتيجة تحسن الجودة والدعم الفني',
        'صياغة خطة العمل للدخول في منصة نون (Noon UAE & KSA) ومحلات العدد الكبرى'
      ],
      actions: [
        'تحليل القوائم المالية وحساب العائد الإعلاني واستخلاص الكلمات المفتاحية الأكثر ربحية وجودة',
        'تجهيز المستندات الفنية وإرسال عينات الضواغط للتسجيل في مستودعات منصة نون السريعة',
        'إرسال كوبونات خصم شكر حصرية لجميع العملاء المسجلين في نظام الضمان لبداية عام جديد مميز'
      ],
      progress: 'علامة تجارية راسخة وناجحة جداً بمبيعات ممتازة وقاعدة عملاء مخلصين وجاهزية تامة للتوسع متعدد القنوات'
    }
  ]
};

interface StoreState {
  plans: MarketingPlan[];
  currentPlanId: string | null;
  setCurrentPlanId: (id: string | null) => void;
  createPlan: (title: string) => string;
  updatePlan: (id: string, updates: Partial<MarketingPlan>) => void;
  deletePlan: (id: string) => void;
  duplicatePlan: (id: string) => string;
  isDeveloperMode: boolean;
  setDeveloperMode: (enabled: boolean) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      plans: [purityPlan, pervostPlan],
      currentPlanId: null,
      isDeveloperMode: false,
      setCurrentPlanId: (id) => set({ currentPlanId: id }),
      setDeveloperMode: (enabled) => set({ isDeveloperMode: enabled }),
      createPlan: (title) => {
        const id = crypto.randomUUID();
        const newPlan: MarketingPlan = { id, title, ...defaultPlan };
        set((state) => ({ plans: [...state.plans, newPlan], currentPlanId: id }));
        return id;
      },
      updatePlan: (id, updates) => {
        set((state) => ({
          plans: state.plans.map((plan) => (plan.id === id ? { ...plan, ...updates } : plan)),
        }));
      },
      deletePlan: (id) => {
        set((state) => ({
          plans: state.plans.filter((plan) => plan.id !== id),
          currentPlanId: state.currentPlanId === id ? null : state.currentPlanId,
        }));
      },
      duplicatePlan: (id) => {
        const state = get();
        const planToDuplicate = state.plans.find((p) => p.id === id);
        if (!planToDuplicate) return '';

        const newId = crypto.randomUUID();
        const newPlan = { ...planToDuplicate, id: newId, title: `${planToDuplicate.title} (نسخة)` };
        set((state) => ({ plans: [...state.plans, newPlan] }));
        return newId;
      },
    }),
    {
      name: 'marketing-plans-storage',
      version: 5,
    }
  )
);
