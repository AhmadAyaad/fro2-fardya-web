export type Locale = "ar" | "en";

export interface Translations {
  nav: {
    home: string;
    services: string;
    speechTherapy: string;
    speechTherapyDesc: string;
    learningDifficulties: string;
    learningDifficultiesDesc: string;
    skillsDevelopment: string;
    skillsDevelopmentDesc: string;
    about: string;
    articles: string;
    faq: string;
    contact: string;
    bookAssessment: string;
    skipToContent: string;
    menuOpen: string;
    menuClose: string;
    centerSubtitle: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    ghostCta: string;
    whatsappPrompt: string;
    whatsappLink: string;
  };
  approach: {
    tag: string;
    title: string;
    description: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  servicesSection: {
    tag: string;
    title: string;
    description: string;
    learnMore: string;
    viewAllServices: string;
  };
  process: {
    tag: string;
    title: string;
    description: string;
    step1Num: string;
    step1Title: string;
    step1Desc: string;
    step2Num: string;
    step2Title: string;
    step2Desc: string;
    step3Num: string;
    step3Title: string;
    step3Desc: string;
    step4Num: string;
    step4Title: string;
    step4Desc: string;
  };
  whyUs: {
    tag: string;
    title: string;
    description: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    item4Title: string;
    item4Desc: string;
  };
  articlesSection: {
    tag: string;
    title: string;
    viewAll: string;
    readArticle: string;
  };
  faqSection: {
    tag: string;
    title: string;
    description: string;
    whatsappButton: string;
    moreQuestions: string;
  };
  ctaBand: {
    title: string;
    subtitle: string;
    bookButton: string;
    whatsappButton: string;
    disclaimer: string;
  };
  form: {
    title: string;
    subtitle: string;
    parentNameLabel: string;
    parentNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    childAgeLabel: string;
    childAgePlaceholder: string;
    ageOption1: string;
    ageOption2: string;
    ageOption3: string;
    ageOption4: string;
    ageOption5: string;
    serviceLabel: string;
    servicePlaceholder: string;
    serviceSpeech: string;
    serviceLearning: string;
    serviceSkills: string;
    serviceFoundation: string;
    serviceParenting: string;
    serviceUnsure: string;
    notesLabel: string;
    notesPlaceholder: string;
    consentText: string;
    submitButton: string;
    directContactTitle: string;
    directContactDesc: string;
    errors: {
      parentName: string;
      phone: string;
      phoneLength: string;
      childAge: string;
      consent: string;
    };
    whatsappMessagePrefix: string;
    whatsappMessageAssessment: string;
    whatsappParentName: string;
    whatsappPhone: string;
    whatsappAge: string;
    whatsappService: string;
    whatsappNotes: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    quickLinksTitle: string;
    allServicesLink: string;
    contactTitle: string;
    workingHours: string;
    address: string;
    whatsappAction: string;
    copyright: string;
    disclaimer: string;
    language: string;
  };
  common: {
    home: string;
    services: string;
    articles: string;
    about: string;
    faq: string;
    contact: string;
    privacy: string;
    callUs: string;
    whatsappUs: string;
    bookNow: string;
    backToHome: string;
    pageNotFound: string;
    pageNotFoundDesc: string;
    forAges2Plus: string;
    educationalNotice: string;
  };
  senses: {
    sight: string;
    hearing: string;
    smell: string;
    taste: string;
    touch: string;
    center: string;
    alt: string;
  };
}

export const translations: Record<Locale, Translations> = {
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      speechTherapy: "التخاطب",
      speechTherapyDesc: "اللغة والنطق والتواصل",
      learningDifficulties: "صعوبات التعلم",
      learningDifficultiesDesc: "القراءة والكتابة والحساب",
      skillsDevelopment: "تنمية المهارات",
      skillsDevelopmentDesc: "الانتباه والمهارات اليومية",
      about: "من نحن",
      articles: "المقالات والمراجع",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      bookAssessment: "احجز تقييم لطفلك",
      skipToContent: "الانتقال إلى المحتوى الرئيسي",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
      centerSubtitle: "مركز تأهيل وتنمية مهارات الطفل",
    },
    hero: {
      badge: "للأطفال من عمر سنتين فأكثر",
      titlePart1: "لأن كل طفل مختلف، نبدأ بفهم ",
      titleHighlight: "طفلك",
      description:
        "في فروق فردية نتعرّف على احتياجات طفلك بهدوء، ونضع له خطة تناسب أسلوبه وقدراته، ونمشي معكم خطوة بخطوة في التخاطب وصعوبات التعلم وتنمية المهارات.",
      primaryCta: "احجز تقييم لطفلك",
      ghostCta: "اكتشف خدماتنا",
      whatsappPrompt: "تفضّلون الكلام مباشرة؟",
      whatsappLink: "راسلونا على واتساب",
    },
    approach: {
      tag: "منهجنا",
      title: "نبدأ من طفلك، لا من برنامج جاهز",
      description:
        "لا يوجد طفلان متشابهان تمامًا. لذلك نتعرّف أولًا على طفلك وطريقة تعلّمه وتواصله، ثم نبني معكم خطة تناسبه هو، وتتغيّر معه كلما تغيّرت احتياجاته.",
      pillar1Title: "نلاحظ ونستمع",
      pillar1Desc:
        "نتعرّف بهدوء على اهتمامات طفلك ونقاط قوته، ونستمع بعناية إلى كل ما تلاحظونه في البيت والمدرسة لنرى الصورة الكاملة.",
      pillar2Title: "خطة تناسب طفلك",
      pillar2Desc:
        "نصمم برنامجًا فرديًا يتدرج في المهارات بالسرعة التي تريح طفلكم، مع أهداف واقعية واضحة ومحددة تناسب قدراته الحالية.",
      pillar3Title: "الأسرة شريك أساسي",
      pillar3Desc:
        "نشارككم تفاصيل كل مرحلة أولاً بأول، ونعطيكم خطوات بسيطة وممتعة تطبقونها مع طفلكم في البيت دون توتر أو ضغط.",
    },
    servicesSection: {
      tag: "خدماتنا",
      title: "خدماتنا المتخصصة لدعم نمو طفلك",
      description:
        "نحدّد معكم ما يحتاجه طفلك بعد التقييم، فقد تكفيه خدمة واحدة وقد يستفيد من أكثر من خدمة متكاملة.",
      learnMore: "اعرف المزيد عن الخدمة",
      viewAllServices: "استعراض جميع الخدمات وشرح اختيار الخدمة الأنسب ←",
    },
    process: {
      tag: "كيف نعمل",
      title: "أربع خطوات واضحة، ومعكم في كل واحدة",
      description:
        "رحلة واضحة المعالم، تبدأ بالاستماع وتنتهي بتمكين طفلكم وأسرتكم من التقدم المستمر.",
      step1Num: "١",
      step1Title: "التقييم المبدئي",
      step1Desc:
        "جلسة هادئة يتعرّف فيها المختص على طفلك واحتياجاته، ويستمع إلى ملاحظاتكم وما ترونه في البيت والمدرسة.",
      step2Num: "٢",
      step2Title: "أهداف فردية",
      step2Desc:
        "نحدد معكم أهدافًا بسيطة ومحددة وقابلة للقياس تناسب عمر طفلك وقدراته الحالية دون مقارنة مع غيره.",
      step3Num: "٣",
      step3Title: "الجلسات والتدخّل",
      step3Desc:
        "جلسات تفاعلية ممتعة تعتمد على اللعب الهادف والتكرار الإيجابي لترسيخ المهارات وإسعاد الطفل.",
      step4Num: "٤",
      step4Title: "المتابعة مع الأسرة",
      step4Desc:
        "نراجع التطور معكم باستمرار ونشارككم نصائح عملية لتعزيز وتثبيت المهارات في البيت برفق.",
    },
    whyUs: {
      tag: "لماذا فروق فردية؟",
      title: "لأن طفلك يستحق اهتمامًا يخصّه هو",
      description:
        "نلتزم بأن يكون كل ما نقدّمه واضحًا ومفهومًا لكم، وأن تعرفوا في أي وقت أين وصلنا وما الخطوة التالية في رحلة طفلكم.",
      item1Title: "اهتمام فردي",
      item1Desc:
        "لكل طفل خطته الخاصة وإيقاعه التنموي، ولا نطبّق قوالب جاهزة أو برامج عامة على الجميع.",
      item2Title: "تواصل واضح مع الأسرة",
      item2Desc:
        "نوضح لكم كل خطوة بلغة بسيطة وشفافة، ونجيب عن كافة تساؤلاتكم دون مصطلحات معقدة.",
      item3Title: "متابعة بالأهداف",
      item3Desc:
        "نقيس التقدم بناءً على أهداف محددة وملموسة اتفقنا عليها معكم مسبقًا وتُراجَع دوريًا.",
      item4Title: "بيئة مهنية وداعمة",
      item4Desc:
        "مساحة هادئة وآمنة ومحفزة يشعر فيها طفلكم بالدفء والتقبل والاحترام منذ اليوم الأول.",
    },
    articlesSection: {
      tag: "للأسرة",
      title: "مقالات وإرشادات بسيطة تفيدكم في البيت",
      viewAll: "كل المقالات والمراجع",
      readArticle: "قراءة المقال",
    },
    faqSection: {
      tag: "أسئلة تهمّكم",
      title: "الأسئلة الشائعة",
      description:
        "جمعنا لكم أكثر الأسئلة التي يطرحها الآباء والأمهات قبل الحجز. إن لم تجدوا إجابة سؤالكم هنا، اكتبوا لنا وسنردّ عليكم بكل سرور.",
      whatsappButton: "اسألونا مباشرة على واتساب",
      moreQuestions: "المزيد من الأسئلة ←",
    },
    ctaBand: {
      title: "الخطوة الأولى بسيطة: تحدّثوا معنا",
      subtitle:
        "اكتبوا لنا عن طفلكم، وسنردّ عليكم بكل اهتمام لنرتّب معًا موعد التقييم الأنسب.",
      bookButton: "احجز تقييم لطفلك",
      whatsappButton: "محادثة واتساب",
      disclaimer: "المحتوى للتوعية العامة فقط ولا يغني عن التقييم الفردي لدى المختص.",
    },
    form: {
      title: "طلب حجز تقييم مبدئي",
      subtitle:
        "اكتبوا لنا بيانات بسيطة، وسيتم فتح محادثة واتساب فورًا للتنسيق مع مسؤولي الحجز بالمركز مباشرة دون تخزين بياناتكم.",
      parentNameLabel: "اسم ولي الأمر",
      parentNamePlaceholder: "مثل: أ. أحمد / أم سارة",
      phoneLabel: "رقم الهاتف / الواتساب",
      phonePlaceholder: "01554778990",
      childAgeLabel: "عمر الطفل",
      childAgePlaceholder: "اختر الفئة العمرية",
      ageOption1: "سنتين إلى ٣ سنوات",
      ageOption2: "٣ إلى ٥ سنوات (ما قبل المدرسة)",
      ageOption3: "٦ إلى ٨ سنوات (المرحلة الابتدائية الأولى)",
      ageOption4: "٩ إلى ١٢ سنة",
      ageOption5: "أكبر من ١٢ سنة",
      serviceLabel: "الخدمة المبدئية التي تستفسرون عنها (اختياري)",
      servicePlaceholder: "اختر الخدمة أو حدد أنك غير متأكد",
      serviceSpeech: "التخاطب (النطق واللغة والتواصل)",
      serviceLearning: "صعوبات التعلم (القراءة والكتابة والحساب)",
      serviceSkills: "تنمية المهارات (الانتباه والتركيز والإدراك)",
      serviceFoundation: "التأسيس (التهيئة الأكاديمية والمهارات المدرسية الأولى)",
      serviceParenting: "إرشاد ودعم أولياء الأمور (الاستشارات الأسرية وتعديل السلوك)",
      serviceUnsure: "لست متأكدًا — أرغب في مشورة المختص بعد التقييم",
      notesLabel: "ملاحظات بسيطة تودون مشاركتها (اختياري)",
      notesPlaceholder: "مثل: ما الذي تلاحظونه على كلام الطفل أو دراسته أو تركيزه؟",
      consentText: "أوافق على التواصل معي عبر واتساب لترتيب موعد التقييم المبدئي.",
      submitButton: "إرسال وتأكيد الحجز عبر واتساب",
      directContactTitle: "محادثة فورية عبر واتساب",
      directContactDesc:
        "تفضّلون المراسلة السريعة؟ راسلوا فريق استقبال الحالات مباشرة عبر رقم الواتساب الرسمي.",
      errors: {
        parentName: "من فضلك اكتب اسم ولي الأمر",
        phone: "من فضلك اكتب رقم الهاتف أو الواتساب",
        phoneLength: "رقم الهاتف غير مكتمل",
        childAge: "من فضلك اختر عمر الطفل",
        consent: "يرجى الموافقة على التواصل لتحديد الموعد",
      },
      whatsappMessagePrefix: "مرحبًا مركز فروق فردية،",
      whatsappMessageAssessment: "أود ترتيب موعد تقييم مبدئي لطفلي:",
      whatsappParentName: "اسم ولي الأمر",
      whatsappPhone: "رقم التواصل",
      whatsappAge: "عمر الطفل",
      whatsappService: "الخدمة المطلوبة",
      whatsappNotes: "ملاحظات مبدئية",
    },
    footer: {
      tagline:
        "مركز لدعم الأطفال والأسرة في التخاطب وصعوبات التعلم وتنمية المهارات والتأسيس وإرشاد أولياء الأمور. نؤمن بأن كل طفل حالة فريدة تستحق فهمًا خاصًا وخطة تناسب قدراته وإيقاعه.",
      servicesTitle: "الخدمات",
      quickLinksTitle: "روابط سريعة",
      allServicesLink: "جميع الخدمات ومقارنتها",
      contactTitle: "التواصل والمواعيد",
      workingHours: "السبت إلى الخميس — من ١٢:٠٠ ظهرًا حتى ٩:٠٠ مساءً",
      address: "مدينة ٦ أكتوبر — الحي الرابع",
      whatsappAction: "تواصل سريع عبر واتساب",
      copyright: "© ٢٠٢٦ فروق فردية. جميع الحقوق محفوظة.",
      disclaimer: "المحتوى للتوعية العامة فقط ولا يغني عن التقييم الفردي لدى المختص.",
      language: "اللغة: العربية",
    },
    common: {
      home: "الرئيسية",
      services: "الخدمات",
      articles: "المقالات والمراجع",
      about: "من نحن",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      privacy: "سياسة الخصوصية",
      callUs: "اتصل بنا",
      whatsappUs: "راسلنا عبر واتساب",
      bookNow: "احجز الآن",
      backToHome: "العودة للصفحة الرئيسية",
      pageNotFound: "الصفحة غير موجودة",
      pageNotFoundDesc:
        "عذرًا، يبدو أن الصفحة التي تبحثون عنها قد تم نقلها أو أن الرابط غير صحيح. يسعدنا مساعدتكم للوصول إلى الوجهة المناسبة.",
      forAges2Plus: "للأطفال من عمر سنتين فأكثر",
      educationalNotice:
        "المقالات المنشورة في هذه الصفحة مخصصة للتوعية العامة والإرشاد الأسري، ولا تغني عن استشارة المختص أو إجراء التقييم الفردي للطفل.",
    },
    senses: {
      sight: "البصر",
      hearing: "السمع",
      smell: "الشم",
      taste: "التذوق",
      touch: "اللمس",
      center: "فروق فردية",
      alt: "رسم تعبيري لشعار فروق فردية: الحواس الخمس (البصر، السمع، الشم، التذوق، اللمس) تحيط بالقدرات الفردية للطفل",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      speechTherapy: "Speech Therapy",
      speechTherapyDesc: "Language, Speech & Communication",
      learningDifficulties: "Learning Difficulties",
      learningDifficultiesDesc: "Reading, Writing & Mathematics",
      skillsDevelopment: "Skills Development",
      skillsDevelopmentDesc: "Attention, Focus & Daily Life Skills",
      about: "About Us",
      articles: "Articles & Resources",
      faq: "FAQ",
      contact: "Contact Us",
      bookAssessment: "Book an Assessment",
      skipToContent: "Skip to main content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      centerSubtitle: "Child Rehabilitation & Skills Development Center",
    },
    hero: {
      badge: "For children aged 2 years and above",
      titlePart1: "Because every child is unique, we begin by understanding ",
      titleHighlight: "your child",
      description:
        "At Forooq Fardya, we calmly identify your child's needs, design an individualized plan suited to their learning style and abilities, and walk with your family step-by-step in speech therapy, learning difficulties, and skills development.",
      primaryCta: "Book an Assessment",
      ghostCta: "Explore Our Services",
      whatsappPrompt: "Prefer talking directly?",
      whatsappLink: "Chat with us on WhatsApp",
    },
    approach: {
      tag: "Our Approach",
      title: "We start with your child, not a pre-made template",
      description:
        "No two children are ever the same. That is why we first discover your child's individual strengths, learning style, and communication mode—then build a flexible plan that grows alongside them.",
      pillar1Title: "We Observe & Listen",
      pillar1Desc:
        "We gently discover your child's interests and natural strengths, listening attentively to your observations at home and school to see the complete picture.",
      pillar2Title: "Tailored to Your Child",
      pillar2Desc:
        "We design an individualized program that progresses at a pace your child is comfortable with, establishing clear, realistic goals matching their current abilities.",
      pillar3Title: "Parents as Core Partners",
      pillar3Desc:
        "We share every stage with you transparently, giving you simple, enjoyable activities to practice with your child at home without stress or pressure.",
    },
    servicesSection: {
      tag: "Our Services",
      title: "Dedicated services supporting your child's growth",
      description:
        "Following the initial assessment, we determine together what best serves your child—whether a single focused service or an integrated multi-disciplinary path.",
      learnMore: "Learn more about this service",
      viewAllServices: "Browse all services and guidance on selecting the right path →",
    },
    process: {
      tag: "How We Work",
      title: "Four clear steps, with you every step of the way",
      description:
        "A clear, transparent journey that begins with attentive listening and culminates in continuous, confident progress for your child and family.",
      step1Num: "1",
      step1Title: "Initial Assessment",
      step1Desc:
        "A gentle session where the specialist connects with your child and learns about their needs while listening to your family observations.",
      step2Num: "2",
      step2Title: "Individualized Goals",
      step2Desc:
        "We establish simple, measurable goals tailored to your child's developmental age and current skills—free from comparisons with peers.",
      step3Num: "3",
      step3Title: "Sessions & Intervention",
      step3Desc:
        "Engaging, interactive sessions built around meaningful play and positive reinforcement to solidify skills while keeping your child happy.",
      step4Num: "4",
      step4Title: "Ongoing Family Guidance",
      step4Desc:
        "We review progress regularly with you and provide practical, reassuring strategies to naturally sustain and practice milestones at home.",
    },
    whyUs: {
      tag: "Why Forooq Fardya?",
      title: "Because your child deserves individualized care",
      description:
        "We are committed to making everything we do transparent and clear, ensuring you always know where your child stands and what the next milestone is.",
      item1Title: "Individualized Focus",
      item1Desc:
        "Every child follows their own developmental pace. We never enforce rigid molds or generic programs on anyone.",
      item2Title: "Transparent Communication",
      item2Desc:
        "We explain every step in plain, empathetic language, answering all parental questions without confusing clinical jargon.",
      item3Title: "Milestone-Driven Tracking",
      item3Desc:
        "We gauge progress through concrete, agreed-upon targets established with you beforehand and reviewed on a scheduled basis.",
      item4Title: "Supportive Environment",
      item4Desc:
        "A calm, warm, and secure setting where your child experiences acceptance, respect, and encouragement from day one.",
    },
    articlesSection: {
      tag: "For Families",
      title: "Practical articles and gentle tips for the home",
      viewAll: "All Articles & Resources",
      readArticle: "Read Article",
    },
    faqSection: {
      tag: "Parent Inquiries",
      title: "Frequently Asked Questions",
      description:
        "We compiled the most common questions families ask prior to booking. If your question is not listed here, send us a message and we will gladly assist you.",
      whatsappButton: "Ask us directly on WhatsApp",
      moreQuestions: "More Questions →",
    },
    ctaBand: {
      title: "The first step is simple: Let's talk",
      subtitle:
        "Share a few notes about your child, and our team will get in touch promptly to arrange the most convenient assessment time.",
      bookButton: "Book an Assessment",
      whatsappButton: "WhatsApp Chat",
      disclaimer:
        "All content is for general educational awareness and does not replace a professional clinical evaluation.",
    },
    form: {
      title: "Request an Initial Assessment",
      subtitle:
        "Fill out a few brief details to open a direct WhatsApp chat with our admissions team. Your data is never stored on servers.",
      parentNameLabel: "Parent / Guardian Name",
      parentNamePlaceholder: "e.g., Ahmed M. / Sarah's Mother",
      phoneLabel: "Phone Number / WhatsApp",
      phonePlaceholder: "01554778990",
      childAgeLabel: "Child's Age",
      childAgePlaceholder: "Select age category",
      ageOption1: "2 to 3 years old",
      ageOption2: "3 to 5 years old (Preschool)",
      ageOption3: "6 to 8 years old (Early Elementary)",
      ageOption4: "9 to 12 years old",
      ageOption5: "Older than 12 years",
      serviceLabel: "Service of Interest (Optional)",
      servicePlaceholder: "Select a service or indicate you are unsure",
      serviceSpeech: "Speech Therapy (Language, Articulation & Communication)",
      serviceLearning: "Learning Difficulties (Reading, Writing & Math)",
      serviceSkills: "Skills Development (Attention, Focus & Cognition)",
      serviceFoundation: "Academic Foundation (Early Readiness & School Preparation)",
      serviceParenting: "Parental Guidance (Family Counseling & Home Strategies)",
      serviceUnsure: "Not sure — seeking specialist recommendation upon assessment",
      notesLabel: "Initial Observations (Optional)",
      notesPlaceholder: "e.g., What have you observed regarding your child's speech, schoolwork, or focus?",
      consentText: "I agree to be contacted via WhatsApp to schedule the initial assessment.",
      submitButton: "Send & Confirm Booking via WhatsApp",
      directContactTitle: "Instant WhatsApp Chat",
      directContactDesc:
        "Prefer quick messaging? Reach our patient coordinator directly via our official WhatsApp line.",
      errors: {
        parentName: "Please enter the parent or guardian's name",
        phone: "Please enter a valid phone or WhatsApp number",
        phoneLength: "Phone number appears incomplete",
        childAge: "Please select the child's age group",
        consent: "Please consent to communication to schedule your appointment",
      },
      whatsappMessagePrefix: "Hello Forooq Fardya Center,",
      whatsappMessageAssessment: "I would like to schedule an initial assessment for my child:",
      whatsappParentName: "Parent Name",
      whatsappPhone: "Contact Number",
      whatsappAge: "Child Age",
      whatsappService: "Service Needed",
      whatsappNotes: "Initial Notes",
    },
    footer: {
      tagline:
        "A dedicated center supporting children and families in Speech Therapy, Learning Difficulties, Skills Development, Foundation, and Parental Guidance. We believe every child is a unique individual worthy of personalized understanding and tailored support.",
      servicesTitle: "Services",
      quickLinksTitle: "Quick Links",
      allServicesLink: "All Services & Comparisons",
      contactTitle: "Contact & Hours",
      workingHours: "Saturday to Thursday — 12:00 PM to 9:00 PM",
      address: "6th of October City — 4th District",
      whatsappAction: "Quick WhatsApp Contact",
      copyright: "© 2026 Forooq Fardya. All rights reserved.",
      disclaimer:
        "All content is for general awareness and does not substitute for an individual clinical assessment.",
      language: "Language: English",
    },
    common: {
      home: "Home",
      services: "Services",
      articles: "Articles & Resources",
      about: "About Us",
      faq: "FAQ",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      callUs: "Call Us",
      whatsappUs: "Chat on WhatsApp",
      bookNow: "Book Now",
      backToHome: "Return to Homepage",
      pageNotFound: "Page Not Found",
      pageNotFoundDesc:
        "Sorry, the page you are looking for has been moved or does not exist. We are here to help guide you back.",
      forAges2Plus: "For children aged 2 years and above",
      educationalNotice:
        "The articles published here are for family guidance and general education only, and do not substitute for a clinical evaluation by a certified specialist.",
    },
    senses: {
      sight: "Sight",
      hearing: "Hearing",
      smell: "Smell",
      taste: "Taste",
      touch: "Touch",
      center: "Forooq Fardya",
      alt: "Illustration of Forooq Fardya logo: The five senses (Sight, Hearing, Smell, Taste, Touch) surrounding the child's individual abilities",
    },
  },
};
