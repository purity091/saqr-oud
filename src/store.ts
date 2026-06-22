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

// 1. OUD RIYADH - B2C RETAIL PLAN
const oudRiyadhB2cPlan: MarketingPlan = {
  id: 'oud-riyadh-b2c-plan',
  title: 'خطة قصر العود - قطاع التجزئة بالرياض B2C',
  location: 'الرياض، المملكة العربية السعودية',
  sizeLabel: 'تجزئة إلكترونية (عود، بخور، عطور فاخرة)',
  mapTitle: 'خريطة التوصيل والاستهداف الجغرافي بالرياض',
  mapDesc: 'تغطية مناطق الرياض وتوزيع مسارات التوصيل السريع (خلال 3 ساعات).',
  kpisSummaryText: 'الوصول إلى 5,000 عميل نشط خلال السنة الأولى بمتوسط سلة مشتريات 350 ريال عبر منصة سلة، وبناء ولاء لـ 30% من العملاء عبر التغليف الفاخر وسرعة التوصيل بالرياض.',
  stats: [
    { value: '8.5M+', label: 'سكان مدينة الرياض', icon: 'Users' },
    { value: '350 SAR', label: 'متوسط قيمة السلة الشرائية', icon: 'DollarSign' },
    { value: '3 ساعات', label: 'مدة التوصيل داخل الرياض', icon: 'Truck' },
    { value: 'B2C', label: 'قطاع التجزئة المباشر', icon: 'ShoppingBag' }
  ],
  marketIntro: 'خطة تسويق رقمية متكاملة لقطاع التجزئة لمتجر قصر العود في الرياض لعام 2026.',
  marketContext1Label: 'القاعدة الاستهلاكية المستهدفة',
  marketContext1Value: '8.5M+ نسمة',
  marketContext1Desc: 'سكان مدينة الرياض والباحثين عن العود الفاخر والبخور اليومي.',
  marketContext1Icon: 'Users',
  marketContext2Label: 'متوسط سلة المشتريات بالرياض',
  marketContext2Value: '350+ SAR',
  marketContext2Desc: 'متوسط قيمة الطلب الفردي للعود ودهن العود النقي في منصة سلة.',
  marketContext2Icon: 'DollarSign',
  marketContext3Label: 'نمو التجارة الإلكترونية بالرياض',
  marketContext3Value: '+24%',
  marketContext3Desc: 'ارتفاع وتيرة التسوق الإلكتروني واعتماد المستهلكين على منصات الدفع السريع والآمن كمدى وأبل باي.',
  marketContext3Icon: 'TrendingUp',
  marketShareTitle: 'أهداف المبيعات والحصة السوقية لقصر العود',
  marketShareDesc: 'حجم الطلبات والنمو المستهدف عبر متجر سلة',
  marketShareSegmentLabel: 'قطاع الهدايا الخاصة والاستخدام اليومي للعود في الرياض',
  marketShareSegmentPercent: '~100%',
  marketShareSegmentPercentNum: 100,
  marketShareSegmentDesc: 'التركيز التام على جودة المنتج والتغليف الفاخر لزيادة ولاء العملاء للاستخدام الشخصي والإهداء.',
  marketShareTargetYear1Label: 'هدف السنة الأولى',
  marketShareTargetYear1Val: '6,000+ طلب',
  marketShareTargetYear1Desc: 'الوصول إلى 500 طلب شهري بمتوسط 350 ريال للطلب الواحد.',
  marketShareTargetYear3Label: 'هدف السنة الثالثة',
  marketShareTargetYear3Val: '20,000+ طلب',
  marketShareTargetYear3Desc: 'ترسيخ مكانة قصر العود كوجهة أولى للإهداء العطري الفاخر في الرياض.',
  marketShareSummary: 'خلاصة التحليل: التركيز على خدمة "الإهداء بلمسة زر" عبر سلة سيضاعف الإيرادات ويضمن تميز قصر العود عن المنافسين التقليديين من خلال التغليف الفخم والتوصيل السريع.',
  mapConfig: {
    center: [24.7136, 46.6753],
    zoom: 11,
    markerTitle: 'قصر العود - مركز التوزيع بالرياض',
    markerDesc: 'نقطة الانطلاق للتوصيل فائق السريع في كافة أحياء الرياض.',
    targets: [
      {
        name: "مدينة الرياض (الاستهداف الرئيسي للتوصيل السريع)",
        coords: [24.7136, 46.6753],
        radius: 15000,
        color: "#7C3AED"
      },
      {
        name: "المحيط الجغرافي والضواحي (التوصيل خلال 24 ساعة)",
        coords: [24.7136, 46.6753],
        radius: 30000,
        color: "#0071E3"
      }
    ]
  },
  problem: {
    description: 'يواجه المستهلك في الرياض صعوبة في إيجاد عود طبيعي أصلي بأسعار معقولة وسرعة في التوصيل عند الرغبة في إهداء شخصي مفاجئ أو عند نفاد البخور المنزلي. الخيارات المتاحة غالباً ما تكون مبالغ في أسعارها أو من متاجر غير موثوقة في جودة العود.',
    impact: 'تأخر استلام الهدايا الفاخرة، والوقوع في فخ العود الصناعي الرديء، وإضاعة الوقت في زيارة الأسواق المزدحمة.'
  },
  customerProblems: {
    title: 'المشاكل التي يواجهها عملاء التجزئة في الرياض',
    problems: [
      {
        icon: 'Package',
        title: 'الغش في جودة العود',
        description: 'انتشار البخور الصناعي والمحسن بشكل سيء والذي يباع بأسعار العود الطبيعي، مما يسبب عدم ثقة العميل.'
      },
      {
        icon: 'Clock',
        title: 'تأخر التوصيل والخدمات اللوجستية',
        description: 'بعض المتاجر تستغرق أياماً لتوصيل الطلب داخل الرياض مما يفقد العميل فرصة الإهداء الفوري في المناسبات.'
      },
      {
        icon: 'DollarSign',
        title: 'الأسعار المبالغ فيها للماركات',
        description: 'دفع مبالغ طائلة للمتاجر الكبرى فقط لاسم العلامة التجارية وليس لجودة العود نفسه.'
      },
      {
        icon: 'ShieldOff',
        title: 'تغليف الهدايا السيء',
        description: 'استلام العود في علب عادية غير مناسبة للإهداء المباشر، مما يضطر العميل لتغليفها على نفقته الخاصة.'
      }
    ]
  },
  ownerProblems: {
    title: 'التحديات الاستراتيجية لمتجر قصر العود في الرياض',
    problems: [
      {
        icon: 'Lock',
        title: 'المنافسة الشرسة في سوق العود',
        description: 'وجود علامات تجارية قديمة ومترسخة تتطلب منا التميز بالتجربة الرقمية وخدمة العملاء السريعة لاختراق السوق.'
      },
      {
        icon: 'Shuffle',
        title: 'الاعتماد الكلي على شركات الشحن',
        description: 'تأخر شركات الشحن التقليدية يؤثر على تجربة العميل، ولذلك نحتاج لبناء أسطول مناديب محلي للتوصيل الفوري بالرياض.'
      },
      {
        icon: 'Users',
        title: 'بناء الثقة (العود يعتمد على الرائحة)',
        description: 'العود منتج حسي يصعب بيعه عبر الإنترنت بدون كسب ثقة العميل في الجودة وتوفير سياسة استرجاع ذهبية مرنة.'
      }
    ]
  },
  noMarketingProblems: {
    title: 'مخاطر غياب التسويق الرقمي الفعال لمتجر العود',
    problems: [
      {
        icon: 'TrendingDown',
        title: 'ضعف المبيعات وانخفاض الإيرادات',
        description: 'الاعتماد فقط على منصة سلة بدون إعلانات Snapchat و TikTok سيبقي المتجر مجهولاً وسط آلاف المتاجر الأخرى.'
      },
      {
        icon: 'EyeOff',
        title: 'خسارة مواسم الأعياد ورمضان',
        description: 'أكثر من 60% من مبيعات العود تتم في رمضان والأعياد، غياب التواجد في هذه الفترات يعني خسارة مالية ضخمة.'
      },
      {
        icon: 'CalendarOff',
        title: 'تكدس المخزون وربط رأس المال',
        description: 'بدون تسويق واستقطاب عملاء محددين بالرياض، سيتراكم دهن العود والبخور في المستودع بدون حركة.'
      }
    ]
  },
  valueProposition: {
    statement: 'قصر العود ليس مجرد متجر بخور، بل هو تجربة إهداء متكاملة في الرياض. نقدم أرقى أنواع العود الطبيعي والمحسن الفاخر، بتغليف ملكي فخم يبيض الوجه، مع خدمة "الإهداء بلمسة زر" وتوصيل فوري خلال 3 ساعات لأي حي بالرياض.',
    keyBenefits: [
      'جودة عود ودهن عود مفحوصة ومضمونة ومستوردة من أفضل المصادر العالمية (كمبودي، مروكي، هندي).',
      'خدمة التوصيل السوبر سريع خلال 3 ساعات لجميع أحياء الرياض المأهولة.',
      'باقة "أرسلها كهدية": تغليف قماشي فخم، كتابة كرت شخصي، وتوصيلها مباشرة للمهدى إليه بدون فاتورة.',
      'سياسة الاسترجاع الذهبية: جرب كسرة مجانية من العود الخارجي، وإن لم يعجبك يمكنك استرجاع الباقي فوراً.',
      'تجربة شراء رقمية سلسة جداً عبر متجر سلة مع خيارات الدفع بأبل باي ومدى وتابي.',
      'خدمة "بخور الجمعة" باشتراك شهري يوصل لك عودك الأسبوعي بشكل تلقائي لمنزلك.'
    ]
  },
  audienceDetails: {
    title: 'شرائح العملاء المستهدفين بالرياض (B2C)',
    subtitle: 'تحليل الشرائح الاستهلاكية لاختيار المحتوى الإعلاني الأنسب لكل فئة',
    personas: [
      {
        name: 'فيصل - موظف بنك مهتم بالأناقة والهدايا',
        role: 'مهتم بالهدايا والمناسبات الاجتماعية',
        age: '28-40 سنة',
        icon: 'Gift',
        description: 'شاب يسكن شمال الرياض، يحب إهداء والديه وأصدقائه في مناسباتهم وترقياتهم، ويهتم جداً بشكل التغليف وسرعة وصول الهدية لأنه يكون مشغولاً في عمله.',
        goals: [
          'البحث عن هدايا فخمة "تبيض الوجه" وجاهزة للإهداء المباشر.',
          'الرغبة في متجر موثوق يتكفل بالتغليف والتوصيل لمنزل المهدى إليه دون تدخله.'
        ],
        challenges: [
          'عدم وجود وقت كافٍ لزيارة أسواق المعيقلية وأسواق العود التقليدية.',
          'الخوف من شراء عود غير أصلي يُحرجه أمام أصدقائه ووالديه.'
        ],
        shoppingHabits: [
          'يستخدم Apple Pay دائماً ويفضل الشراء عبر الجوال من متاجر سلة.',
          'يتخذ قرارات شراء سريعة إذا كان الإعلان يوضح التغليف الفاخر للهدية.'
        ],
        quote: 'أبغى هدية فخمة لوالدي تغليفها ملكي وتوصل له اليوم العصر مباشرة للبيت.. مستعد أدفع أكثر مقابل الراحة والترتيب.'
      },
      {
        name: 'نورة - ربة منزل عاشقة لتبخير البيت والضيوف',
        role: 'باحثة عن جودة البخور للاستخدام اليومي والضيوف',
        age: '35-50 سنة',
        icon: 'Home',
        description: 'تهتم برائحة منزلها اليومية خاصة بعد الطبخ، وتبحث عن عود مروكي محسن جودته ممتازة وسعره معقول للاستخدام اليومي، وعود آخر طبيعي لضيوفها.',
        goals: [
          'توفير بخور يومي بسعر اقتصادي وكمية ممتازة (أوقية فما فوق).',
          'الحصول على ثبات في رائحة العود بالمجالس وغرف الاستقبال.'
        ],
        challenges: [
          'تجارب سابقة سيئة مع بخور صناعي يسبب كتمة ورائحة حرق خشب.',
          'تفاوت الجودة بين طلب وآخر من نفس المتجر.'
        ],
        shoppingHabits: [
          'تتأثر جداً بإعلانات مشاهير السناب شات ومراجعاتهم للمنتجات.',
          'تبحث عن العروض الترويجية والباقات الاقتصادية (اشتر أوقية واحصل على نصف أوقية مجاناً).'
        ],
        quote: 'البخور الزين يعكس نظافة البيت وترتيبه.. أبغى عود ريحته تمسك في الكنب والمجالس وما يسبب كتمة للعيال.'
      }
    ]
  },
  valuePropositionDetails: {
    title: 'ركائز القيمة والتميز لمتجر قصر العود بالرياض',
    subtitle: 'كيف نضمن ريادتنا ونحقق تجربة تسوق إلكترونية لا تنسى لعملائنا',
    pillars: [
      {
        title: 'جودة فاخرة وسياسة استرجاع ذهبية',
        icon: 'Award',
        description: 'نستورد العود النقي من غابات إندونيسيا وكمبوديا وماليزيا بأنفسنا. ولأننا نثق بمنتجنا، نوفر "كسرة تجربة مجانية" خارج العلبة الأساسية.',
        examples: ['توفير شهادات جودة وفحص مخبري لدهن العود النقي 100%', 'إمكانية الاسترجاع الفوري إذا لم تعجبك ريحة العود وتغطية تكاليف الشحن من طرفنا'],
        impact: 'القضاء التام على حاجز الخوف من الشراء الإلكتروني ورفع معدل التحويل.'
      },
      {
        title: 'التوصيل فائق السرعة بالرياض (خلال 3 ساعات)',
        icon: 'Truck',
        description: 'لا حاجة للانتظار لأيام. أسطول قصر العود الخاص يضمن لك وصول العود لمنزلك في نفس اليوم بأقصى سرعة.',
        examples: ['ربط لوجستي ذكي مع منصة سلة لإشعار المندوب فور اكتمال الطلب', 'سيارات مبردة لضمان عدم تأثر دهن العود بدرجات الحرارة العالية بالصيف'],
        impact: 'التفوق الكاسح على المنافسين التقليديين وتلبية طلبات الهدايا المستعجلة.'
      },
      {
        title: 'تغليف ملكي وإهداء بلمسة زر',
        icon: 'Gift',
        description: 'كل علبة تخرج من قصر العود هي تحفة فنية بحد ذاتها، مغلفة بقماش مخملي فاخر وعلب خشبية محفورة بالليزر.',
        examples: ['إضافة كروت إهداء مجانية مع إمكانية طباعة العبارات التي يكتبها العميل في سلة', 'شحن الطلب كهدية للمستلم مباشرة بدون إرفاق فاتورة سعرية معه'],
        impact: 'زيادة نسبة العملاء الذين يطلبون لغرض الإهداء لتمثل 50% من إجمالي مبيعات المتجر.'
      }
    ]
  },
  channelsDetails: {
    title: 'القنوات التسويقية B2C لاستقطاب عملاء التجزئة بالرياض',
    subtitle: 'استراتيجية دمج منصات التواصل الاجتماعي وتطبيقات الخرائط لاصطياد العميل الرقمي',
    onlineChannels: [
      {
        name: 'إعلانات Snapchat Ads (الاستهداف المكثف لمناطق الرياض)',
        budget: '2,000 ريال شهرياً',
        reach: '200,000+ مشاهدة مستهدفة في الرياض',
        frequency: 'حملات يومية مع تكثيفها في أوقات الرواتب وعطلة نهاية الأسبوع',
        examples: ['فيديوهات UGC (User Generated Content) من تصوير جوال طبيعي تظهر لحظة فتح صندوق الهدية الفاخر', 'إعلانات ديناميكية تعرض باقات الشتاء والعود اليومي بروابط مباشرة لمتجر سلة'],
        kpis: 'تحقيق ROAS لا يقل عن 4.0 وتكلفة استحواذ على العميل (CAC) أقل من 35 ريال.'
      },
      {
        name: 'حملات المشاهير وصناع المحتوى المصغّر (Micro-Influencers)',
        budget: '1,500 ريال شهرياً (كنظام هدايا أو مدفوع جزئياً)',
        reach: '50,000 مشاهدة نوعية ومتفاعلة جداً',
        frequency: 'تفعيل 2 مؤثرين شهرياً في الرياض لعمل Unboxing',
        examples: ['التعاون مع مؤثرين في مجال نمط الحياة والقهوة لتبخير مجالسهم بعود قصر العود', 'إعطاء المؤثر كود خصم خاص 10% لتتبع حجم المبيعات الناتجة عن إعلانه'],
        kpis: 'استرجاع قيمة الإعلان خلال 48 ساعة من تغطية السناب شات وكسب 200 متابع جديد للإنستغرام.'
      }
    ],
    offlineChannels: [
      {
        name: 'المشاركة في المعارض الموسمية ومعارض العطور بالرياض (واجهة الرياض)',
        budget: 'حسب توفر المعرض والميزانية التسويقية الربع سنوية',
        reach: '10,000 زائر خلال فترة المعرض',
        kpis: 'تغطية تكاليف الجناح وبناء قاعدة بيانات أرقام لـ 1000 عميل زائر لتفعيلهم لاحقاً برسائل الواتساب',
        locations: ['واجهة الرياض (Riyadh Front)', 'مركز الرياض الدولي للمؤتمرات والمعارض']
      }
    ]
  },
  strategyDetails: {
    title: 'استراتيجية قمع المبيعات B2C لقصر العود',
    subtitle: 'رحلة العميل من أول إعلان شاهده في السناب شات وحتى إتمام عملية الشراء عبر متجر سلة',
    funnel: [
      {
        stage: '1. مرحلة الوعي والانتباه (Awareness)',
        goal: 'لفت انتباه مستخدمي السوشيال ميديا بالرياض لجودة وفخامة قصر العود وتغليفه.',
        budget: '1,200 ريال شهرياً',
        tactics: [
          {
            name: 'نشر فيديوهات ريلز وتيك توك تبرز شكل كسر العود وتغليفها الملكي',
            description: 'التركيز البصري الكامل على فخامة المنتج ولحظة احتراق العود على الجمر الكثيف.',
            examples: ['تصوير مقاطع بأسلوب ASMR لصوت طقطقة جمر العود وانبعاث الدخان الكثيف']
          }
        ],
        kpis: 'الوصول لأكثر من 100 ألف مشاهدة شهرياً.'
      },
      {
        stage: '2. مرحلة الرغبة والاهتمام (Consideration)',
        goal: 'إقناع العميل بزيارة متجر سلة ورؤية التقييمات الإيجابية وباقات العروض.',
        budget: '800 ريال شهرياً',
        tactics: [
          {
            name: 'إبراز التقييمات الإيجابية وآراء العملاء في المتجر وإعلانات إعادة الاستهداف',
            description: 'استخدام التقييمات ذات الـ 5 نجوم من متجر سلة وتصميمها كإعلانات ستوري لإثبات الجودة.',
            examples: ['حملات إعادة استهداف (Retargeting) لمن زار المتجر ولم يشتري بعرض خصم 10% أو شحن مجاني بالرياض']
          }
        ],
        kpis: 'رفع نسبة النقر إلى الظهور (CTR) لروابط متجر سلة لتتجاوز 3%.'
      },
      {
        stage: '3. مرحلة إتمام الشراء (Conversion)',
        goal: 'تسهيل عملية إتمام الطلب وتقليل السلات المتروكة بأكبر قدر ممكن.',
        budget: 'بدون تكلفة إضافية (أدوات منصة سلة)',
        tactics: [
          {
            name: 'تفعيل خيارات الدفع تابي/تمارا واستخدام أبل باي',
            description: 'التكامل التام مع تمارا لتسهيل قرار الشراء لدهن العود والباقات الفاخرة التي قد تتجاوز 500 ريال.',
            examples: ['تفعيل رسائل السلات المتروكة التلقائية عبر واتساب المتجر بعرض الشحن السريع المجاني لحثهم على الإكمال']
          }
        ],
        kpis: 'تحقيق معدل تحويل (Conversion Rate) في متجر سلة يصل إلى 4.5%.'
      },
      {
        stage: '4. مرحلة الولاء والعودة (Retention)',
        goal: 'جعل العميل يعود للشراء مرة أخرى ويوصي بقصر العود لأصدقائه وعائلته.',
        budget: 'خصومات وكوبونات',
        tactics: [
          {
            name: 'تفعيل كوبونات الولاء وعروض المناسبات الخاصة',
            description: 'إرسال رسائل واتساب للعملاء السابقين قبل رواتب الشهر ورمضان والأعياد.',
            examples: ['إرفاق كود خصم خاص بكرت أنيق مع كل طلبية ليصل للعميل لاستخدامه في طلبيته القادمة']
          }
        ],
        kpis: 'رفع نسبة العملاء العائدين (Returning Customers) لتشكل 30% من إجمالي المبيعات.'
      }
    ]
  },
  budgetDetails: {
    title: 'الميزانية التسويقية لمتجر قصر العود التجزئة (B2C)',
    subtitle: 'توزيع الاستثمار التسويقي الشهري لضمان أعلى انتشار رقمي مبيعات مستمرة',
    monthlyBudget: '3,500 ريال سعودي شهرياً',
    breakdown: [
      {
        category: 'إعلانات سناب شات وإنستغرام (تيك توك اختياري)',
        percentage: 55,
        amount: '2,000 ريال',
        items: [
          { name: 'حملات استقطاب الزوار الجدد لموقع سلة', amount: '1,400 ريال', details: 'استهداف سكان الرياض والمهتمين بالعطور والهدايا' },
          { name: 'حملات إعادة استهداف السلات المتروكة', amount: '600 ريال', details: 'تذكير من زار المتجر ولم يتمم الشراء لرفع التحويل' }
        ]
      },
      {
        category: 'التسويق عبر المؤثرين (Micro-Influencers)',
        percentage: 30,
        amount: '1,000 ريال',
        items: [
          { name: 'تعاون مع مشاهير نمط الحياة والمنازل بالرياض', amount: '1,000 ريال', details: 'إرسال بكجات هدايا فاخرة لهم مقابل تغطية ستوري وتصوير Unboxing' }
        ]
      },
      {
        category: 'المنصات والأدوات الرقمية (سلة، واتساب)',
        percentage: 15,
        amount: '500 ريال',
        items: [
          { name: 'اشتراك باقة سلة برو وأدوات التحليلات', amount: '300 ريال', details: 'رسوم المنصة والرسائل التلقائية لتأكيد الطلب والسلات المتروكة' },
          { name: 'تصميم محتوى وإبداعات فنية (جرافيكس وفيديو)', amount: '200 ريال', details: 'إنتاج تصاميم العروض الأسبوعية لتطبيق سناب شات' }
        ]
      }
    ],
    roi: {
      expectedRevenue: '14,000 ريال سعودي شهرياً كهدف أولي',
      marketingSpend: '3,500 ريال سعودي',
      roi: '4x عائد على الإنفاق الإعلاني (ROAS)',
      paybackPeriod: 'فوري، من الأسبوع الثاني للحملات بعد تحسين الخوارزميات'
    }
  },
  kpisDetails: {
    title: 'مؤشرات الأداء الرئيسية لقصر العود (KPIs)',
    subtitle: 'كيف نقيس نجاح المتجر شهرياً وأسبوعياً',
    salesKpis: [
      { name: 'إجمالي المبيعات الشهرية (GMV)', target: '14,000+ ريال', tracking: 'تقارير مبيعات منصة سلة', frequency: 'أسبوعي', action: 'تكثيف الإعلانات عند انخفاض المبيعات عن المعدل' },
      { name: 'متوسط قيمة الطلب (AOV)', target: '350 ريال', tracking: 'إحصائيات سلة المشتريات', frequency: 'شهري', action: 'تفعيل عروض التوصيل المجاني للطلبات فوق 399 ريال لرفع المتوسط' },
      { name: 'معدل التحويل (Conversion Rate)', target: '4.5%', tracking: 'Google Analytics وإحصائيات سلة', frequency: 'أسبوعي', action: 'تحسين سرعة الموقع وصور المنتجات وتفعيل تابي' }
    ],
    customerKpis: [
      { name: 'نسبة الإرجاع والمطالبات', target: 'أقل من 2%', tracking: 'طلبات استرجاع متجر سلة', frequency: 'شهري', action: 'مراجعة جودة العود مع الموردين إذا زادت نسبة المرتجعات' },
      { name: 'نسبة العملاء العائدين', target: '30% فما فوق', tracking: 'تقارير سلة للعملاء', frequency: 'ربع سنوي', action: 'إطلاق حملات واتساب بعروض خاصة للعملاء السابقين' }
    ],
    marketingKpis: [
      { name: 'العائد على الإنفاق الإعلاني (ROAS)', target: '400% (كل 1 ريال إعلان يجلب 4 مبيعات)', tracking: 'مدير إعلانات السناب شات وميتا', frequency: 'أسبوعي', action: 'إيقاف الحملات الخاسرة فوراً وتوجيه الميزانية للحملات الرابحة' },
      { name: 'تكلفة الاستحواذ على العميل (CAC)', target: 'أقل من 35 ريال', tracking: 'المصروفات الإعلانية تقسيم عدد الطلبات الجديدة', frequency: 'شهري', action: 'تغيير فيديو الإعلان الممول إذا ارتفعت التكلفة' }
    ]
  },
  products: [
    {
      id: 'oud-b2c-prod-1',
      name: 'أوقية عود مروكي آصقون محسن فاخر (استخدام يومي)',
      category: 'بخور ومجالس',
      price: '180 ريال سعودي',
      description: 'كسر مروكي محسن برائحة سويتية باردة وثبات عالي، مثالي للاستخدام اليومي وتبخير المنزل والمكاتب بدون كتمة.',
      features: ['رائحة بخورية بحتة خالية من رائحة الاحتراق المزعجة', 'حجم الكسر (ميني) مناسب جداً للمباخر العادية والكهربائية', 'كمية وفيرة (أوقية 30 جرام) تكفي للاستخدام اليومي طوال الشهر', 'تغليف قماشي أنيق داخل العلبة الكرتونية يحافظ على نكهة العود'],
      targetAudience: 'المنازل، المكاتب، الاستخدام الشخصي اليومي للملابس',
      stockLevel: 'متوفر بكميات كبيرة'
    },
    {
      id: 'oud-b2c-prod-2',
      name: 'باقة الإهداء الملكية: ربع تولة دهن عود مروكي + أوقية عود طبيعي',
      category: 'باقات الهدايا',
      price: '450 ريال سعودي',
      description: 'الهدية المثالية التي تبيض الوجه، صندوق جلدي فاخر يحتوي على كسرات مختارة من العود الطبيعي السوبر مع ربع تولة من دهن العود الكمبودي المعتق.',
      features: ['صندوق إهداء خشبي مغلف بالجلد الأسود الفاخر', 'تغليف داخلي بالمخمل مع مكان مخصص لكرت الإهداء', 'شحن وتوصيل فوري كهدية مباشرة للمستلم وتأمين سرية المرسل إذا رغب', 'ضمان استرجاع ذهبي مع كسرة تجربة خارجية'],
      targetAudience: 'هدايا الزواجات، الترقيات، هدايا الوالدين، المناسبات الخاصة',
      stockLevel: 'متبقي 15 صندوق جاهز للإهداء السريع'
    },
    {
      id: 'oud-b2c-prod-3',
      name: 'مبخرة قصر العود الذكية (أعواد المروكي)',
      category: 'المباخر الذكية',
      price: '120 ريال سعودي',
      description: 'مبخرة ذكية خشبية أنيقة تأتي مع أعواد مروكية طبيعية 100%، توفر تبخيراً هادئاً وآمناً للسيارة والمكتب دون الحاجة لجمر.',
      features: ['تحتوي على 30 عود بخور طبيعي سميك يدوم العود الواحد لـ 45 دقيقة', 'درج سفلي مبطن لحفظ الأعواد بشكل آمن', 'تصميم خشبي مزخرف يضيف لمسة ديكور رائعة للمكتب', 'آمنة تماماً للاستخدام في السيارة ولا تسبب حروق الفرش'],
      targetAudience: 'أصحاب السيارات، موظفي المكاتب، كهدية بسيطة وأنيقة للشباب',
      stockLevel: 'متوفر'
    }
  ],
  roadmap: [
    {
      number: 1,
      name: 'تأسيس متجر سلة وإطلاق الهوية البصرية',
      quarter: 1,
      focus: 'بناء الواجهة الرقمية ورفع المنتجات والتكامل اللوجستي',
      objectives: [
        'تصميم واجهة متجر سلة بشكل احترافي وألوان ملكية تعكس فخامة قصر العود.',
        'إضافة المنتجات بصور احترافية وكتابة أوصاف تسويقية جاذبة تركز على الجودة.',
        'ربط شركات الشحن الفوري (مندوبين الرياض) وتفعيل بوابات الدفع تابي وتمارا.'
      ],
      actions: [
        'إجراء جلسة تصوير احترافية للباقات والهدايا بخلفيات داكنة فخمة.',
        'إعداد وصياغة سياسة الاسترجاع الذهبية ووضعها في بنر بارز بأعلى المتجر.',
        'تجربة أول طلب وهمي للتأكد من سلاسة الدفع والتوصيل ورسائل التأكيد.'
      ],
      progress: 'متجر سلة جاهز 100% لاستقبال الطلبات الفورية بالرياض.'
    },
    {
      number: 2,
      name: 'إطلاق حملات سناب شات وإنستغرام للاستقطاب',
      quarter: 1,
      focus: 'جمع الزيارات وتحقيق المبيعات الأولى لبناء الخوارزمية',
      objectives: [
        'إطلاق 3 حملات إعلانية مختلفة (UGC، إعلان عرض خاص، إعلان باقة هدايا).',
        'الحصول على أول 100 طلب من الإعلانات الممولة للرياض.',
        'جمع تقييمات موثقة من أول 50 مشتري ورفعها بمتجر سلة لإثبات المصداقية.'
      ],
      actions: [
        'تصميم فيديوهات UGC تعرض جودة الكسر وكثافة الدخان بشكل مغري.',
        'إطلاق حملة إعادة استهداف (Retargeting) مخصصة لتذكير زوار سلة غير المشترين.',
        'إرسال باقات هدايا لـ 3 مؤثرين محليين بالرياض لتغطيتها ستوري بشكل عفوي.'
      ],
      progress: 'تدفق الزيارات للمتجر وبداية استقرار مبيعات التجزئة بالرياض.'
    },
    {
      number: 3,
      name: 'تفعيل وتوسيع خدمة "الإهداء السريع"',
      quarter: 2,
      focus: 'تعزيز مبيعات الهدايا الفاخرة والاستحواذ على مناسبات الرياض',
      objectives: [
        'زيادة نسبة سلات الطلبات المخصصة "كهدية" لتصل إلى 40% من إجمالي الطلبات.',
        'تقليص مدة تجهيز طلبات الرياض إلى ساعة واحدة ليتم توصيلها خلال 3 ساعات بالكامل.',
        'إطلاق كروت الإهداء الرقمية والمطبوعة المخصصة بحسب المناسبة.'
      ],
      actions: [
        'إضافة خيار (تغليف كهدية وكتابة كرت) في خيارات صفحة المنتج بمتجر سلة.',
        'التعاقد مع شركة مناديب مختصة بالهدايا (يتصلون بالمستلم لتنسيق المفاجأة بلباقة).',
        'عمل حملات إعلانية بعنوان "نسيت الهدية؟ قصر العود يبيض وجهك في 3 ساعات".'
      ],
      progress: 'قصر العود يصبح الخيار الأول للهدايا المستعجلة والفاخرة بالرياض.'
    },
    {
      number: 4,
      name: 'مبيعات الموسم الكبير (رمضان والأعياد)',
      quarter: 3,
      focus: 'مضاعفة الإيرادات 3 أضعاف خلال موسم الذروة لقطاع العود',
      objectives: [
        'تحقيق مبيعات تتجاوز 45,000 ريال خلال شهر رمضان وموسم العيد.',
        'بيع كافة باقات الإهداء الرمضانية المعدة مسبقاً قبل دخول العشر الأواخر.',
        'الحفاظ على سرعة التوصيل رغم ضغط الطلبات الكثيف في الرياض.'
      ],
      actions: [
        'تصميم باقات عود رمضانية اقتصادية للاستخدام المكثف في المساجد والمنازل.',
        'إطلاق إعلانات رمضان قبل دخول الشهر بـ 10 أيام للتحضير المسبق.',
        'تجهيز المستودع وتعليب 500 صندوق جاهز للشحن الفوري لتفادي التأخير.'
      ],
      progress: 'أرباح قياسية واكتساب شريحة عملاء ولاء هائلة من تجربة الأعياد.'
    }
  ],
  market: {
    size: '1.8+ مليار دولار أمريكي سنوياً لسوق العود والعطور في السعودية',
    trends: 'نمو التجارة الإلكترونية، تفضيل متزايد للعود الطبيعي والمحسن الفاخر، زيادة الإقبال على التغليف المميز',
    competitors: 'العلامات التجارية الكبرى التقليدية (أسعار عالية)، والمتاجر الإلكترونية المنافسة'
  },
  audience: {
    personaName: 'سكان مدينة الرياض الباحثين عن العود اليومي وهدايا المناسبات',
    age: '25-55 سنة',
    interests: 'العود، العطور، البخور المستورد، الفخامة، التجارة الإلكترونية السريعة',
    painPoints: 'الأسعار المبالغ فيها للماركات، الغش التجاري، تأخر التوصيل وتغليف الهدايا الرديء',
    buyingBehavior: 'يتخذون قرارات شراء عبر الجوال سريعاً خاصة عند توفر تابي وتمارا وتوصيل نفس اليوم'
  },
  channels: {
    primary: ['إعلانات سناب شات وإنستغرام', 'المؤثرون (Micro-Influencers) في الرياض', 'متجر سلة (SEO & Retargeting)'],
    secondary: ['المعارض والمؤتمرات الموسمية بالرياض', 'واتساب للعملاء الحاليين', 'رسائل SMS للعروض']
  },
  strategy: {
    awareness: 'إعلانات السوشيال ميديا بفيديوهات عالية الدقة تُبرز فخامة العود والدخان الكثيف',
    consideration: 'إظهار التقيمات وتقييمات المؤثرين في صفحات متجر سلة',
    conversion: 'توفير تمارا/تابي، شحن مجاني للطلبات الكبرى، وسياسة الاسترجاع الذهبية',
    retention: 'رسائل عروض في المواسم، كروت خصم للطلبات القادمة مع كل هدية مبيعة'
  },
  budget: {
    total: '3,500 ريال سعودي شهرياً',
    allocation: '55% إعلانات منصات (سناب، إنستغرام)، 30% مؤثرين، 15% رسوم وتصميمات متجر سلة'
  },
  kpis: {
    primary: ['إجمالي المبيعات (GMV)', 'متوسط قيمة الطلب (AOV)', 'تكلفة الاستحواذ على العميل (CAC)'],
    secondary: ['معدل التحويل في متجر سلة', 'نسبة العملاء العائدين', 'نسبة استرجاع البضائع (المرتجعات)']
  }
};

// 2. OUD RIYADH - B2B CORPORATE PLAN
const oudRiyadhB2bPlan: MarketingPlan = {
  id: 'oud-riyadh-b2b-plan',
  title: 'خطة قصر العود - قطاع الشركات والمناسبات B2B',
  location: 'مدينة الرياض - قطاع الأعمال والشركات',
  sizeLabel: 'توزيع وتجهيز هدايا VIP بكميات الجملة',
  mapTitle: 'خريطة انتشار وتوزيع مقرات الشركات بالرياض',
  mapDesc: 'تحديد كبار الشركات والجهات الحكومية المستهدفة في المركز المالي والعليا',
  kpisSummaryText: 'الوصول إلى 50 شركة وجهة راعية، وتأمين 10 عقود لتوريد هدايا المناسبات (كاليوم الوطني ويوم التأسيس)، وتجهيز 1,000+ صندوق إهداء ملكي.',
  stats: [
    { value: '240+', label: 'مقر إقليمي لشركات عالمية بالرياض', icon: 'Building2' },
    { value: '50 صندوق', label: 'الحد الأدنى لطلبيات الـ Private Label', icon: 'Package' },
    { value: '10 أيام', label: 'مدة التجهيز وحفر الليزر الخاص', icon: 'Clock' },
    { value: 'B2B Only', label: 'توريد للدوائر الحكومية والشركات', icon: 'ShieldCheck' }
  ],
  marketIntro: 'خطة مبيعات وحلول هدايا للشركات والمناسبات الكبرى لمتجر قصر العود بالرياض لعام 2026.',
  marketContext1Label: 'قطاع المقرات الإقليمية بالرياض',
  marketContext1Value: '240+ شركة',
  marketContext1Desc: 'الشركات العالمية التي افتتحت مقراتها بالرياض وتحتاج باقات إهداء فاخرة لضيوفها.',
  marketContext1Icon: 'Building2',
  marketContext2Label: 'حجم قطاع الفعاليات بالرياض',
  marketContext2Value: '3.2B+ SAR',
  marketContext2Desc: 'الميزانيات الضخمة المرصودة للمعارض والمؤتمرات الكبرى والضيافة المرافقة.',
  marketContext2Icon: 'Briefcase',
  marketContext3Label: 'الطلب على التخصيص (Private Label)',
  marketContext3Value: '100%',
  marketContext3Desc: 'تفضيل الجهات للصناديق الخشبية والجلدية المحفورة بشعاراتها الخاصة.',
  marketContext3Icon: 'TrendingUp',
  marketShareTitle: 'الحصة السوقية المستهدفة لقصر العود (شركات)',
  marketShareDesc: 'استهداف ميزانيات العلاقات العامة والهدايا',
  marketShareSegmentLabel: 'قطاع العلاقات العامة والموارد البشرية في شركات الرياض',
  marketShareSegmentPercent: '~15%',
  marketShareSegmentPercentNum: 15,
  marketShareSegmentDesc: 'يشمل الهدايا السنوية للموظفين، وهدايا ضيوف الإدارة العليا (VIP).',
  marketShareTargetYear1Label: 'هدف السنة الأولى',
  marketShareTargetYear1Val: '10+ عقود',
  marketShareTargetYear1Desc: 'بناء شراكة وتوريد سنوي لـ 10 جهات وشركات رئيسية بالرياض.',
  marketShareTargetYear3Label: 'هدف السنة الثالثة',
  marketShareTargetYear3Val: '50+ عقد',
  marketShareTargetYear3Desc: 'اعتماد قصر العود كمورد رسمي لهدايا العلاقات العامة في 50 جهة.',
  marketShareSummary: 'خلاصة التحليل: تتيح جودة منتجاتنا ومرونة الحفر بالليزر والتخصيص الكامل للشركات فرصة ضخمة للحصول على عقود مستمرة وهوامش ربح عالية، بعيداً عن تقلبات السوق الفردي.',
  mapConfig: {
    center: [24.7600, 46.6350], // KAFD Area approximate
    zoom: 12,
    markerTitle: 'مركز الملك عبدالله المالي (KAFD)',
    markerDesc: 'مركز تركز الشركات والمقرات الإقليمية المستهدفة لعقود الـ B2B.',
    targets: [
      {
        name: "مركز الملك عبدالله المالي (أعلى كثافة مستهدفة)",
        coords: [24.7600, 46.6350],
        radius: 3000,
        color: "#0071E3"
      },
      {
        name: "منطقة العليا والعصب التجاري",
        coords: [24.6955, 46.6853],
        radius: 5000,
        color: "#A855F7"
      }
    ]
  },
  problem: {
    description: 'تجد إدارات العلاقات العامة والموارد البشرية في الشركات صعوبة في إيجاد هدايا فاخرة ومخصصة بشعاراتها للمسؤولين والضيوف تعكس الهوية السعودية، مع ضمان توفر الجودة والكميات في وقت قصير.',
    impact: 'اللجوء لهدايا تقليدية مستهلكة (دروع، أقلام) أو استيراد هدايا من الخارج مكلفة ولا تحمل الطابع الثقافي العميق الذي يقدمه العود الفاخر.'
  },
  customerProblems: {
    title: 'المشاكل التي تواجهها الشركات في تجهيز الهدايا بالرياض',
    problems: [
      {
        icon: 'Package',
        title: 'غياب خيارات التخصيص السريع (Customization)',
        description: 'صعوبة العثور على مورد يطبع شعار الشركة على علب العود الخشبية أو زجاجات دهن العود بمرونة للكميات المتوسطة (50-100 صندوق).'
      },
      {
        icon: 'Clock',
        title: 'تأخر التوريد قبل المناسبات الكبرى',
        description: 'بعض الموردين لا يستطيعون توفير 200 صندوق إهداء جاهز قبل اليوم الوطني بأسبوع واحد، مما يربك أقسام العلاقات العامة.'
      },
      {
        icon: 'DollarSign',
        title: 'عدم التزام الموردين بالجودة الموحدة',
        description: 'يحدث أن تكون بعض الصناديق فاخرة وأخرى رديئة في نفس الطلبية مما يسبب إحراجاً كبيراً للشركة أمام ضيوفها.'
      },
      {
        icon: 'ShieldOff',
        title: 'افتقار الهدايا للطابع التراثي الملكي',
        description: 'حاجة الدوائر الحكومية والشركات العالمية لتقديم هدايا تعكس الكرم السعودي الفاخر للضيوف والمستثمرين الأجانب.'
      }
    ]
  },
  ownerProblems: {
    title: 'التحديات الاستراتيجية لقصر العود في قطاع B2B',
    problems: [
      {
        icon: 'Lock',
        title: 'الوصول لصناع القرار',
        description: 'تجاوز حراس البوابات والوصول المباشر لمدراء العلاقات العامة والموارد البشرية في المقرات الكبرى لتقديم العينات.'
      },
      {
        icon: 'Shuffle',
        title: 'تأمين المخزون للطلبيات المفاجئة',
        description: 'ضمان وجود مخزون دائم من الصناديق الخشبية والمباخر الجاهزة للحفر والتخصيص السريع خلال أيام.'
      },
      {
        icon: 'Users',
        title: 'شروط السداد الآجل للمؤسسات',
        description: 'التعامل مع السياسات المالية للشركات الحكومية والخاصة التي تتطلب السداد بعد 30 أو 60 يوماً من تسليم بضائع العود.'
      }
    ]
  },
  noMarketingProblems: {
    title: 'مخاطر تجاهل قطاع الشركات والاعتماد على الأفراد فقط',
    problems: [
      {
        icon: 'TrendingDown',
        title: 'خسارة هوامش الربح الضخمة',
        description: 'الطلبية الواحدة من جهة حكومية قد تعادل مبيعات التجزئة لمتجر سلة خلال أسبوعين كاملين.'
      },
      {
        icon: 'EyeOff',
        title: 'عدم الاستفادة من المناسبات الوطنية',
        description: 'اليوم الوطني ويوم التأسيس يشهدان أعلى إنفاق حكومي وخاص على الهدايا، تجاهل B2B يعني خسارة هذه الميزانيات.'
      },
      {
        icon: 'CalendarOff',
        title: 'تذبذب التدفق النقدي',
        description: 'قطاع التجزئة يتذبذب يومياً، بينما عقود التوريد للشركات تضمن تدفقاً نقدياً عالياً ومخططاً له مسبقاً طوال العام.'
      }
    ]
  },
  valueProposition: {
    statement: 'نحن الشريك العطري الموثوق لكبرى الشركات والدوائر الحكومية بالرياض. نصمم ونصنع صناديق إهداء ملكية من العود والمباخر، وننقش عليها شعار جهتك بكل فخر، مع التزام تام بالجودة الموحدة والتسليم في الموعد المحدد.',
    keyBenefits: [
      'هدايا فاخرة تعكس الثقافة السعودية، ممتازة للوفود الأجنبية والمستثمرين وكبار الضيوف VIP.',
      'تخصيص كامل 100%: حفر شعار شركتك بالليزر أو الضغط الحراري على الجلد والخشب وزجاجات دهن العود.',
      'باقات مرنة تبدأ من 50 صندوقاً وحتى 1000+ صندوق للمؤتمرات والمعارض الضخمة.',
      'تقديم "صندوق عينة مجاني" لمدير العلاقات العامة للمعاينة قبل اعتماد طلبية الشركة.',
      'تجهيز وطباعة كروت تهنئة رسمية بأسماء المهدى إليهم داخل كل صندوق.',
      'موثوقية وفواتير ضريبية معتمدة وتسهيلات في السداد للجهات الحكومية والشركات الكبرى.'
    ]
  },
  audienceDetails: {
    title: 'شرائح الشركات والجهات المستهدفة بالرياض (B2B)',
    subtitle: 'تحليل أصحاب القرار داخل الشركات والمؤسسات لتقديم العرض المناسب لهم',
    personas: [
      {
        name: 'أحمد - مدير العلاقات العامة والاتصال المؤسسي',
        role: 'مسؤول الهدايا والفعاليات في جهة حكومية/شركة كبرى',
        age: '35-50 سنة',
        icon: 'Briefcase',
        description: 'يعمل في مركز الملك عبدالله المالي، يبحث دائماً عن هدايا فخمة جداً وغير مكررة لتقديمها لضيوف الإدارة التنفيذية والوزراء والوفود القادمة من خارج المملكة.',
        goals: [
          'تأمين هدايا ترفع الرأس وتبرز الهوية الثقافية السعودية بصورة عصرية فخمة.',
          'الاعتماد على مورد ينجز العمل بسرعة ودقة عالية دون الحاجة للمتابعة اليومية.'
        ],
        challenges: [
          'إحراج الإدارة العليا إذا كانت جودة الهدايا سيئة أو التغليف غير متقن.',
          'ضيق الوقت دائماً لتجهيز الهدايا قبل الزيارات الرسمية المفاجئة.'
        ],
        shoppingHabits: [
          'يبحث عن الموردين عبر العلاقات الشخصية أو من خلال البحث في لينكد إن وتويتر.',
          'يطلب عينة ملموسة لمشاهدتها وعرضها على الإدارة قبل تعميد الطلب المالي.'
        ],
        quote: 'يهمني الشغل النظيف وتوحيد الجودة في كل العلب، أبغى صندوق عود يخلي الضيف يتذكر كرمنا وشركتنا كل ما تبخر.'
      },
      {
        name: 'مريم - مديرة الموارد البشرية (HR)',
        role: 'مسؤولة ولاء الموظفين وهدايا الأعياد والمواسم',
        age: '30-45 سنة',
        icon: 'Users',
        description: 'تبحث عن هدايا لموظفي الشركة في الأعياد ورمضان واليوم الوطني، وتريد خيارات ميزانيتها متوسطة ولكن شكلها النهائي فخم ويدخل السرور على الموظفين.',
        goals: [
          'الحصول على عدد كبير من الهدايا (100-500 هدية) بسعر جملة ممتاز ليتناسب مع ميزانية الإدارة.',
          'أن تكون كل هدية مغلفة وجاهزة للتوزيع مباشرة في مكاتب الموظفين لتوفير الجهد.'
        ],
        challenges: [
          'صعوبة إيجاد خيارات هدايا مبتكرة لا تتجاوز 150-200 ريال للموظف الواحد وتكون قيمة.',
          'تأخير الموردين في تسليم الطلبيات الضخمة قبل بدء إجازات الأعياد.'
        ],
        shoppingHabits: [
          'تقارن بين عروض الأسعار من 3 إلى 4 موردين مختلفين.',
          'تفضل الباقات التي تشمل التغليف والطباعة والمنتج في فاتورة واحدة.'
        ],
        quote: 'أبغى بوكس صغير فيه ربع تولة ومسك وحبة عود مروكي، سعره مناسب ونوزعه للموظفين كمعايدة باسم الشركة.'
      }
    ]
  },
  valuePropositionDetails: {
    title: 'ركائز القيمة في قطاع الشركات (B2B)',
    subtitle: 'لماذا تختار الجهات الحكومية والشركات قصر العود لتوريد هداياها؟',
    pillars: [
      {
        title: 'القدرة الاستيعابية للإنتاج الضخم',
        icon: 'Layers',
        description: 'مهما كان حجم فعاليتك، نملك ورش عمل وتوريد تضمن تجهيز مئات وآلاف صناديق العود المغلفة بدقة خلال أسابيع قصيرة.',
        examples: ['تجهيز 500 صندوق خشبي محفور لوفود أحد المؤتمرات الكبرى خلال 15 يوماً فقط'],
        impact: 'الاعتماد الكلي من قبل شركات تنظيم المعارض الكبرى.'
      },
      {
        title: 'التخصيص الكامل (White Labeling)',
        icon: 'PenTool',
        description: 'الهوية البصرية لشركتك ستكون البطل. نحفر الشعار على الخشب، نطبعه على الكريستال والجلد، ونصمم الكروت الداخلية.',
        examples: ['حفر ليزر دقيق جداً لشعار الجهة الحكومية على المباخر وزجاجات دهن العود', 'تغليف خارجي بألوان الهوية البصرية للشركة (مثل الأخضر أو الأزرق المؤسسي)'],
        impact: 'تعزيز المكانة المؤسسية للعميل في نظر ضيوفه وموظفيه.'
      },
      {
        title: 'موثوقية المورد المسجل',
        icon: 'FileCheck',
        description: 'نحن كيان تجاري معتمد ومسجل في أنظمة المشتريات الحكومية ومنصة اعتماد، مما يسهل عملية التعميد المالي.',
        examples: ['إصدار فواتير ضريبية B2B رسمية متوافقة مع متطلبات هيئة الزكاة', 'تسهيلات في الدفع للمؤسسات المعتمدة (بعد التوريد بأيام محددة)'],
        impact: 'تسهيل عمل إدارات المشتريات والمحاسبة في الجهات الكبرى وتسريع التعاقد.'
      }
    ]
  },
  channelsDetails: {
    title: 'القنوات التسويقية B2B لاستقطاب قطاع الأعمال',
    subtitle: 'استراتيجيات التواصل المهني المباشر لبناء شبكة علاقات مع كبار الشركات بالرياض',
    onlineChannels: [
      {
        name: 'إعلانات LinkedIn الموجهة لمدراء العلاقات العامة والموارد البشرية',
        budget: '1,500 ريال شهرياً',
        reach: 'استهداف 10,000 مدير وصانع قرار في الرياض',
        frequency: 'حملات دائمة طوال العام مع التركيز المكثف قبل المناسبات الوطنية بـ 45 يوماً',
        examples: ['إعلان InMail مباشر برسالة: "تجهيز هدايا ضيوفكم للربع القادم؟ تواصل معنا لتصميم باقة الإهداء الخاصة بشركتكم."', 'فيديو احترافي يوثق مراحل حفر ليزر لشعار شركة كبرى على صندوق عود ملكي'],
        kpis: 'تحصيل 15 استفسار (Lead) مؤهل من شركات كبرى شهرياً.'
      },
      {
        name: 'كتالوج رقمي مخصص للشركات (B2B Profile) وتواصل عبر واتساب الأعمال',
        budget: 'مجاني (أدوات داخلية)',
        reach: 'إرسال مباشر للجهات المهتمة',
        frequency: 'تحديث الكتالوج كل ربع سنة بموديلات الصناديق الجديدة',
        examples: ['ملف PDF تفاعلي يحتوي على باقات تبدأ من الباقات الاقتصادية للموظفين وحتى صناديق الـ VIP المطعمة بالذهب', 'إدراج صفحة خاصة بنماذج أعمال سابقة لشركات كبرى لزيادة الموثوقية'],
        kpis: 'معدل تحميل الكتالوج وتحويل 20% من قراء الكتالوج لطلب عينات ملموسة.'
      }
    ],
    offlineChannels: [
      {
        name: 'إرسال "صندوق العينة المجاني" الفاخر لمكاتب صناع القرار (Direct Mail)',
        budget: '1,000 ريال شهرياً (تكلفة الصناديق والتوصيل)',
        reach: 'إرسال 10 صناديق شهرياً لـ 10 مدراء علاقات عامة مستهدفين بالرياض',
        kpis: 'رد إيجابي وتحديد موعد اجتماع من 3 إلى 4 شركات من أصل 10 تم إرسال العينات لهم.',
        locations: ['المركز المالي، أبراج العليا، مقار الوزارات الكبرى']
      }
    ]
  },
  strategyDetails: {
    title: 'استراتيجية قمع المبيعات لقطاع الشركات (B2B)',
    subtitle: 'من لفت الانتباه عبر لينكد إن وحتى توقيع عقد توريد هدايا ضخم',
    funnel: [
      {
        stage: '1. الوعي والاستهداف المهني (Awareness)',
        goal: 'لفت انتباه مدراء العلاقات العامة والموارد البشرية في الرياض لخدمات قصر العود التخصيصية.',
        budget: '1,500 ريال شهرياً (LinkedIn Ads)',
        tactics: [
          {
            name: 'إطلاق حملات Lead Generation على LinkedIn',
            description: 'استهداف المسميات الوظيفية (PR Manager, HR Manager, Event Organizer) في نطاق الرياض الإقليمي.',
            examples: ['إعلان يعرض تصميمات مبهرة للصناديق المخصصة مع زر "اطلب كتالوج الشركات الآن"']
          }
        ],
        kpis: 'جمع 20+ بيانات تواصل لشركات (Leads) شهرياً.'
      },
      {
        stage: '2. بناء الثقة وإثبات الجودة (Consideration)',
        goal: 'إقناع الشركة بأننا الخيار الأمثل من خلال العينات המلموسة والموثوقية.',
        budget: 'تكلفة إرسال العينات',
        tactics: [
          {
            name: 'المبادرة بتقديم عينة ملموسة مجانية للشركة (Free Sample Box)',
            description: 'الطلب من الإدارة إرسال شعارهم، ثم حفر الشعار على مبخرة صغيرة وإرسالها كهدية مجانية لمدير العلاقات العامة بالمقر.',
            examples: ['إرسال صندوق يحتوي على كسرة عود مروكي وربع تولة مسك ومبخرة محفورة باسمهم الفعلي']
          }
        ],
        kpis: 'تحويل 40% من العملاء المهتمين إلى مرحلة "طلب عرض سعر رسمي" بعد رؤية العينة.'
      },
      {
        stage: '3. الإغلاق وتوقيع العقود (Conversion)',
        goal: 'الاتفاق على السعر، توقيع أمر الشراء (PO)، والبدء بالإنتاج.',
        budget: 'جهد المبيعات',
        tactics: [
          {
            name: 'تقديم عروض أسعار متدرجة ومرنة وتسهيلات سداد',
            description: 'توفير 3 باقات تسعير (اقتصادية للموظفين، متوسطة للعملاء، فاخرة VIP للمدراء والضيوف).',
            examples: ['المرونة في قبول شروط السداد للجهات الحكومية لضمان إرساء العقد علينا']
          }
        ],
        kpis: 'إغلاق 3 إلى 5 صفقات شركات ناجحة شهرياً بقيمة متوسطة 15,000 ريال للصفقة.'
      },
      {
        stage: '4. العقود السنوية وتوريد المؤتمرات الدائم (Retention)',
        goal: 'تحويل الشركة إلى عميل دائم يعتمد علينا في كل فعالياته القادمة بانتظام.',
        budget: 'هدايا ولاء للعميل',
        tactics: [
          {
            name: 'توقيع اتفاقيات التوريد السنوية المخفضة للفعاليات والمكاتب',
            description: 'توفير كميات أسبوعية من البخور لمكاتب الإدارة العليا للمؤسسة على مدار العام بخصم خاص.',
            examples: ['تذكير العميل قبل الأعياد بشهرين لتأكيد طلبية هدايا العيد الخاصة بموظفيه مبكراً بخصم مبكر']
          }
        ],
        kpis: 'تحقيق معدل تكرار طلب للشركات بنسبة 50% وتوقيع عقدي توريد سنوي.'
      }
    ]
  },
  budgetDetails: {
    title: 'الميزانية التسويقية لقطاع الشركات (B2B)',
    subtitle: 'استثمار دقيق يستهدف صناع القرار بعائد مبيعات مضاعف',
    monthlyBudget: '2,500 ريال سعودي شهرياً',
    breakdown: [
      {
        category: 'إعلانات لينكد إن المهنية واستقطاب البيانات',
        percentage: 60,
        amount: '1,500 ريال',
        items: [
          { name: 'حملات InMail و Sponsored Content للمدراء', amount: '1,500 ريال', details: 'استهداف وظائف محددة في منطقة الرياض (HR, PR, Management)' }
        ]
      },
      {
        category: 'صناديق العينات للشركات الكبرى (التسويق المباشر)',
        percentage: 40,
        amount: '1,000 ريال',
        items: [
          { name: 'تكلفة وتوصيل 10 صناديق عينات محفورة ليزر', amount: '1,000 ريال', details: 'استثمار مباشر لجلب عقود كبرى من خلال جودة ملموسة' }
        ]
      }
    ],
    roi: {
      expectedRevenue: '45,000 ريال سعودي كمتوسط متوقع لـ 3 صفقات B2B شهرياً',
      marketingSpend: '2,500 ريال سعودي',
      roi: '18x عائد مرتفع جداً بسبب طبيعة الجملة للشركات',
      paybackPeriod: 'من إغلاق أول صفقة شركات في الشهر'
    }
  },
  kpisDetails: {
    title: 'مؤشرات الأداء الرئيسية لقطاع الشركات (B2B KPIs)',
    subtitle: 'مقاييس النجاح في اختراق قطاع الأعمال بالرياض',
    salesKpis: [
      { name: 'عدد عقود الشركات المغلقة شهرياً', target: '3-5 صفقات', tracking: 'سجل المبيعات وأوامر الشراء (POs)', frequency: 'شهري', action: 'تكثيف إرسال العينات للشركات الجديدة إذا قل العدد' },
      { name: 'إجمالي حجم المبيعات B2B', target: '45,000+ ريال شهرياً', tracking: 'فواتير الشركات', frequency: 'شهري', action: 'زيادة عروض الباقات الـ VIP لرفع القيمة الإجمالية للطلب' },
      { name: 'متوسط قيمة العقد الواحد', target: '10,000 - 15,000 ريال', tracking: 'قيمة الصفقات', frequency: 'ربع سنوي', action: 'طرح صناديق أكبر وأكثر فخامة للشركات الكبرى' }
    ],
    customerKpis: [
      { name: 'نسبة تحويل "العميل المستهدف" بعد إرسال العينة المجانية', target: '30%', tracking: 'متابعة الصناديق المجانية المرسلة', frequency: 'شهري', action: 'تحسين جودة الصندوق المجاني وطريقة العرض إذا كانت النسبة ضعيفة' },
      { name: 'نسبة تكرار الطلب من الشركات (الولاء)', target: '50% سنوياً', tracking: 'عقود السنة السابقة', frequency: 'سنوي', action: 'إرسال هدايا شخصية لمدراء الموارد البشرية لضمان استمرار التعاقد' }
    ],
    marketingKpis: [
      { name: 'عدد بيانات الاتصال الجديدة المؤهلة (Leads)', target: '20+ مدير شهرياً', tracking: 'حملات LinkedIn Ads', frequency: 'أسبوعي', action: 'تغيير الاستهداف والنطاق الوظيفي في إعدادات الحملة' },
      { name: 'تكلفة جهة الاتصال لقطاع الشركات (CPL)', target: 'أقل من 75 ريال', tracking: 'تقارير لينكد إن', frequency: 'أسبوعي', action: 'تحسين التصاميم الإعلانية والرسائل لزيادة معدل النقر' }
    ]
  },
  products: [
    {
      id: 'oud-b2b-prod-1',
      name: 'صندوق الإهداء التنفيذي VIP (صندوق خشبي محفور ليزر)',
      category: 'هدايا الإدارة العليا والوفود',
      price: '850 ريال سعودي / للصندوق (للكميات)',
      description: 'أرقى درجات الإهداء للضيوف الكبار. صندوق خشبي ضخم من خشب الساج مبطن بالمخمل الفاخر، يتم حفر شعار شركتكم عليه بالليزر، ويحتوي على أفخر أنواع العود ودهن العود النقي.',
      features: ['يحتوي على: مبخرة كريستال، 50 جرام عود طبيعي سوبر، نصف تولة دهن عود سيوفي معتق', 'تخصيص كامل: حفر الشعار على الصندوق الخارجي والمبخرة والميل الزجاجي لدهن العود', 'إرفاق كرت معدني فاخر محفور عليه عبارة الإهداء واسم المهدى إليه واسم الجهة', 'تغليف خارجي فاخر بألوان الهوية البصرية للشركة'],
      targetAudience: 'الوزراء، كبار التنفيذيين (CEOs)، الوفود الأجنبية، كبار المستثمرين',
      stockLevel: 'يتطلب تعميد مسبق بـ 15 يوم عمل لتجهيز الليزر والتصنيع'
    },
    {
      id: 'oud-b2b-prod-2',
      name: 'باقة هدايا الموظفين والأعياد (صندوق جلدي متوسط)',
      category: 'هدايا الموظفين والمناسبات العامة',
      price: '160 ريال سعودي / للصندوق (للكميات فوق 100)',
      description: 'الخيار المفضل لإدارات الموارد البشرية لمعايدة موظفيهم في رمضان وعيد الفطر أو اليوم الوطني. صندوق جلدي أنيق مطبوع عليه شعار الشركة بحجم مثالي.',
      features: ['يحتوي على: 30 جرام عود مروكي محسن ممتاز، ربع تولة مسك أبيض فاخر', 'طباعة شعار الشركة الحراري على غطاء الصندوق الجلدي باللون الذهبي أو الفضي', 'إرفاق بطاقة تهنئة أنيقة مطبوعة (مثال: كل عام وأنتم بخير - إدارتكم)', 'تجهيز سريع وإمكانية إنتاج كميات ضخمة (500+ صندوق) خلال أسبوعين'],
      targetAudience: 'الموظفون، شركاء النجاح العاديين، توزيعات المؤتمرات الكبرى',
      stockLevel: 'المواد الأولية متوفرة، التجهيز والطباعة خلال 10 أيام عمل'
    },
    {
      id: 'oud-b2b-prod-3',
      name: 'عقد توريد بخور الضيافة المكتبي للدوائر والمقرات',
      category: 'عقود التوريد المستمرة للمكاتب',
      price: 'اشتراك شهري (يبدأ من 2,500 ريال)',
      description: 'باقة مخصصة لمكاتب الإدارات العليا وصالات استقبال الضيوف. نورد كميات ثابتة أسبوعياً من العود المروكي الفاخر لتبخير المكاتب بشكل مستمر وبأسعار مخفضة جداً.',
      features: ['توريد ربع كيلو عود مروكي مقسم أسبوعياً لضمان توفره الدائم في مكاتب المدراء', 'توفير فحم سريع الاشتعال وجميع مستلزمات البخور الأساسية ضمن الباقة', 'صيانة واستبدال المباخر الذكية الموجودة في المكاتب مجاناً في حال التلف', 'فواتير ضريبية دورية شهرية تسهل عمل الإدارة المالية للشركة'],
      targetAudience: 'مكاتب مدراء العموم، غرف الاجتماعات الكبرى، صالات استقبال الضيوف (VIP Lounges)',
      stockLevel: 'توريد دوري منتظم أسبوعياً'
    }
  ],
  roadmap: [
    {
      number: 1,
      name: 'إعداد كتالوج الشركات وبناء قائمة الاستهداف',
      quarter: 1,
      focus: 'التجهيز الرقمي وإنشاء العروض الخاصة وتحديد الشركات المستهدفة بالرياض',
      objectives: [
        'تصميم ملف (Company Profile) احترافي PDF يحتوي على الباقات، إمكانيات التخصيص والأسعار.',
        'إعداد قائمة بأكبر 100 شركة وجهة حكومية متواجدة في المركز المالي والعليا.',
        'تجهيز أول 20 "صندوق عينة مجاني" مخصصة بأسماء وأول دفعة من الشركات ليتم إرسالها.'
      ],
      actions: [
        'التعاقد مع مصنع محلي لتجهيز صناديق خشبية وجلدية سريعة قابلة لحفر الليزر عليها في الرياض.',
        'تجهيز صفحة هبوط (Landing Page) خاصة بالشركات على المتجر لجمع طلبات تسعير الهدايا.',
        'شحن أول دفعة من العينات لمدراء العلاقات العامة المستهدفين ومتابعتهم هاتفياً.'
      ],
      progress: 'أدوات البيع B2B جاهزة تماماً وبدء التواصل الفعلي مع صناع القرار.'
    },
    {
      number: 2,
      name: 'حملات لينكد إن واستقطاب عقود رمضان والأعياد',
      quarter: 1,
      focus: 'استغلال اقتراب موسم رمضان لإبرام عقود توزيعات هدايا للموظفين',
      objectives: [
        'إطلاق حملة LinkedIn تستهدف الـ HR Managers لحجز طلبات هدايا رمضان للموظفين.',
        'إغلاق 5 صفقات هدايا موظفين لشركات متوسطة الحجم (إجمالي 1000 صندوق).',
        'ضمان تجهيز الطلبيات وتسليمها قبل دخول شهر رمضان بـ 5 أيام.'
      ],
      actions: [
        'عمل عرض "خصم الحجز المبكر": اطلب قبل 1 شعبان واحصل على حفر ليزر مجاني.',
        'زيارة مقرات الشركات التي طلبت عروض أسعار لمعاينة العينات بأنفسهم وعقد الصفقات.',
        'توظيف فريق تعبئة مؤقت لتسريع تجهيز الصناديق والكراتين في المستودع بالرياض.'
      ],
      progress: 'تحقيق عوائد ممتازة وبناء سابقة أعمال (Portfolio) بأسماء جهات معروفة.'
    },
    {
      number: 3,
      name: 'التركيز على المؤتمرات وعقود التوريد المكتبي',
      quarter: 2,
      focus: 'البحث عن إيرادات مستدامة من خلال عقود المكاتب وصالات كبار الزوار',
      objectives: [
        'توقيع 3 عقود توريد بخور شهري ثابتة للإدارات العليا.',
        'تجهيز هدايا ضيوف لـ 2 من المعارض أو المؤتمرات الضخمة المقامة في الرياض.',
        'إدراج قصر العود كمورد معتمد رسمياً في منصة "اعتماد" الحكومية للوصول لمناقصات الوزارات.'
      ],
      actions: [
        'التواصل مع شركات تنظيم الفعاليات والمعارض (Event Management) وتوقيع اتفاقيات شراكة لتوريد الهدايا.',
        'إرسال عروض باقات الضيافة المكتبية للبنوك والشركات الاستثمارية الكبرى.',
        'الانتهاء من جميع المتطلبات الضريبية والتنظيمية للتسجيل في منصات المشتريات.'
      ],
      progress: 'استقرار الدخل الشهري لقصر العود بفضل عقود التوريد المستمرة.'
    },
    {
      number: 4,
      name: 'اليوم الوطني وموسم الشتاء المؤسسي',
      quarter: 3,
      focus: 'السيطرة على ميزانيات اليوم الوطني الأضخم في السعودية',
      objectives: [
        'تحقيق مبيعات ضخمة من باقات هدايا اليوم الوطني المخصصة والمزينة باللون الأخضر.',
        'إغلاق صفقات توريد بقيمة تتجاوز 150,000 ريال خلال هذا الربع فقط.',
        'الحفاظ على وتيرة تسليم دقيقة بدون أي تأخيرات.'
      ],
      actions: [
        'تصميم باقة عود خاصة باليوم الوطني السعودي وتصويرها بشكل احترافي مع السيف والنخلة والألوان الخضراء.',
        'البدء في التسويق والتواصل مع الشركات قبل اليوم الوطني بـ 60 يوماً لضمان التعميد المالي المبكر.',
        'استئجار مستودع إضافي مؤقت لاستيعاب مخزون اليوم الوطني الهائل.'
      ],
      progress: 'قصر العود كعلامة تجارية كبرى في قطاع الأعمال وأرقام إيرادات غير مسبوقة للشركة.'
    }
  ],
  market: {
    size: '3.2+ مليار ريال سعودي حجم سوق الفعاليات والهدايا المؤسسية في الرياض',
    trends: 'العودة القوية للهدايا التي تعكس الهوية السعودية، تخصيص الهدايا بالأسماء والشعارات (Personalization)',
    competitors: 'شركات الهدايا الدعائية التقليدية (منتجات صينية)، وبعض براندات العطور الكبرى'
  },
  audience: {
    personaName: 'مدراء العلاقات العامة والموارد البشرية بالشركات الحكومية والخاصة بالرياض',
    age: '30-55 سنة',
    interests: 'الجودة العالية، التنفيذ السريع، التميز، الموثوقية العالية في التعامل المالي',
    painPoints: 'تأخر الموردين، صعوبة الحفر والتخصيص بكميات متوسطة، عدم وجود عينات مقنعة، الجودة الرديئة المفاجئة',
    buyingBehavior: 'يبنون قرارهم على العينات الملموسة، يطلبون عروض أسعار رسمية (Quotations) وموثوقية في الدفع'
  },
  channels: {
    primary: ['لينكد إن (LinkedIn Ads & InMail)', 'التسويق المباشر عبر العينات المجانية (Direct Mail)', 'المشاركة في معارض تنظيم الفعاليات'],
    secondary: ['حملات البريد الإلكتروني للمسؤولين', 'شبكة العلاقات الشخصية للمؤسسين', 'الواتساب للشركات المستهدفة']
  },
  strategy: {
    awareness: 'التواجد الاحترافي في لينكد إن باستهداف مدراء الفعاليات والعلاقات العامة',
    consideration: 'إرسال باقة عينة فاخرة لمدير العلاقات العامة باسمه وشعار شركته لكسر الجليد',
    conversion: 'توفير باقات أسعار مرنة تلائم ميزانية الموظفين وميزانية ה- VIP مع فواتير ضريبية نظامية',
    retention: 'عقود التوريد الدورية المريحة وعروض الخصم للشركات التي تكرر طلبها السنوي'
  },
  budget: {
    total: '2,500 ريال سعودي شهرياً',
    allocation: '60% لينكد إن وتسويق رقمي B2B، 40% تصنيع وإرسال عينات فاخرة لمقرات الشركات'
  },
  kpis: {
    primary: ['عدد أوامر الشراء المغلقة (POs)', 'إجمالي الإيرادات B2B', 'متوسط قيمة عقد الشراكة'],
    secondary: ['نسبة الموافقة بعد إرسال العينة', 'عدد الـ Leads الواردة من لينكد إن', 'نسبة تجديد عقود التوريد المكتبي']
  }
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
      plans: [oudRiyadhB2cPlan, oudRiyadhB2bPlan],
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
      version: 12, // Incremented store version to invalidate old local storage cache and load the full-year Seham plans
    }
  )
);
