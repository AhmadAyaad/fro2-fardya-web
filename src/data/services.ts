export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  themeColor: "cyan" | "purple" | "green";
  colors: {
    fill: string;
    border: string;
    soft: string;
    badgeText: string;
  };
  iconName: "speech" | "book" | "sprout";
  summary: string;
  purpose: string;
  indicationsNotice: string;
  indications: string[];
  howItWorks: string[];
  expectations: string[];
  faqs: ServiceFAQ[];
}

export const servicesAr: Service[] = [
  {
    slug: "speech-therapy",
    title: "التخاطب",
    tagline: "اللغة والنطق والتواصل",
    themeColor: "cyan",
    colors: {
      fill: "#83DDE6",
      border: "#327790",
      soft: "#E4F8FA",
      badgeText: "#2C384D",
    },
    iconName: "speech",
    summary: "دعم لغة الطفل ونطقه وقدرته على التعبير عن نفسه والتواصل مع من حوله.",
    purpose:
      "مساعدة الطفل على فهم ما يُقال له، والتعبير عن حاجاته وأفكاره بوضوح، وتحسين نطقه بما يناسب عمره، ليتفاعل بثقة مع أسرته ومجتمعه.",
    indicationsNotice:
      "هذه القائمة للتوعية العامة فقط، ولا تعني بالضرورة وجود مشكلة دائمة. التقييم الفردي لدى المختص هو الخطوة التي توضّح الصورة بدقة.",
    indications: [
      "تأخّر في ظهور الكلمات الأولى أو قلة الحصيلة اللغوية مقارنة بأقرانه في نفس العمر",
      "صعوبة في نطق بعض الحروف والأصوات مما يجعل كلامه غير مفهوم للأهل أو الغرباء",
      "صعوبة في فهم التعليمات الموجهة إليه أو في ربط الكلمات لتكوين جمل مفيدة",
      "تلعثم أو تكرار في مقاطع الكلمات يسبب للطفل ترددًا أو انزعاجًا أثناء التعبير",
      "قلة المبادرة بالتواصل البصري أو الكلامي مع الآخرين خلال المواقف اليومية",
    ],
    howItWorks: [
      "جلسة تقييم هادئة ولطيفة نتعرّف فيها على مخارج الحروف وفهم الطفل وقدرته التعبيرية.",
      "تحديد أهداف واضحة ومحددة تناسب عمر الطفل واحتياجاته دون تحميله ما لا يطيق.",
      "جلسات تدريبية فردية تعتمد على الأنشطة التفاعلية واللعب الهادف لتعزيز اللغة.",
      "إرشاد عملي مستمر لولي الأمر لمتابعة نفس الأسلوب في البيت برفق وتلقائية.",
    ],
    expectations: [
      "بيئة آمنة وداعمة يشعر فيها الطفل بالارتياح والتقبل.",
      "خطة تدريبية متدرجة تُحدَّث دوريًا بناءً على استجابة طفلك الفعلية.",
      "تواصل شفاف بعد كل جلسة لمعرفة ما تم إنجازه والخطوة القادمة.",
    ],
    faqs: [
      {
        q: "متى يحتاج طفلي إلى جلسات تخاطب؟",
        a: "إذا لاحظتم تأخرًا في اكتساب الكلمات بعد عمر سنتين، أو صعوبة مستمرة في فهم كلامه بعد عمر ٣ سنوات، فالتقييم المبدئي يساعدكم على الاطمئنان ومعرفة ما إذا كان يحتاج إلى دعم.",
      },
      {
        q: "كم تستغرق مدة الجلسة؟",
        a: "تُحدَّد مدة وعدد الجلسات بدقة بعد التقييم المبدئي بما يتناسب مع عمر الطفل وقدرته على الانتباه دون إرهاق.",
      },
      {
        q: "هل يجب حضور ولي الأمر في جلسة التخاطب؟",
        a: "نعم، وجودكم مرحب به ومهم جدًا، حيث يساعدكم على ملاحظة استراتيجيات المختص وتطبيقها بسهولة في روتين اليوم بالبيت.",
      },
    ],
  },
  {
    slug: "learning-difficulties",
    title: "صعوبات التعلم",
    tagline: "القراءة والكتابة والحساب",
    themeColor: "purple",
    colors: {
      fill: "#AF89F6",
      border: "#5E378F",
      soft: "#EFE7FD",
      badgeText: "#4A2B75",
    },
    iconName: "book",
    summary:
      "استراتيجيات فردية تناسب أسلوب تعلّم الطفل في القراءة والكتابة والحساب ومهارات المذاكرة.",
    purpose:
      "فهم الطريقة الخاصة التي يستوعب بها طفلك المعلومات، وبناء خطة تدريبية تساعده على تجاوز التحديات الأكاديمية وبناء ثقته بنفسه دون ضغط عصبي.",
    indicationsNotice:
      "الصعوبات الأكاديمية لا تعني قلة الذكاء، بل تعني أن الطفل يحتاج إلى طريقة تعليمية مختلفة تناسب قدراته ونمطه الذهني.",
    indications: [
      "صعوبة مستمرة في تذكّر الحروف أو أصواتها أو التهجئة رغم المحاولات المتكررة",
      "بطء شديد وغير معتاد في القراءة أو تكرار الأخطاء في الكلمات المألوفة",
      "صعوبة في تمييز الأرقام المتشابهة أو العمليات الحسابية البسيطة والعد التنازلي",
      "تشتت سريع وإحباط ملحوظ ومقاومة شديدة عند وقت أداء الواجبات المدرسية",
      "صعوبة في تنظيم المهام المدرسية أو نقل المعلومات من السبورة إلى الدفتر",
    ],
    howItWorks: [
      "تقييم دقيق يحدد نمط التعلم المفضل لدى الطفل (بصري، سمعي، حركي) ونقاط قوته وصعوباته.",
      "تفكيك المهارات المعقدة إلى خطوات صغيرة قابلة للهضم والتحقيق بنجاح.",
      "استخدام أدوات حسية ومحسوسات وبطاقات بصرية تثبت المفاهيم بطريقة ممتعة.",
      "التنسيق المستمر مع الأسرة لتوحيد أسلوب المذاكرة في البيت وتقليل التوتر الأسري.",
    ],
    expectations: [
      "تخفيف الضغط النفسي المرتبط بالدراسة واستعادة شغف الطفل بالتعلم.",
      "اكتساب مهارات واستراتيجيات ذاتية يستفيد منها الطفل طوال رحلته الدراسية.",
      "متابعة دورية تقيس التقدم الفعلي الملموس في المهارات المستهدفة.",
    ],
    faqs: [
      {
        q: "ما الفرق بين صعوبات التعلم والتأخر الدراسي العادي؟",
        a: "صعوبات التعلم ترتبط بطريقة معالجة الدماغ للمعلومات في مهارة محددة كالقراءة أو الحساب رغم تمتع الطفل بذكاء طبيعي، بينما التأخر الدراسي قد ينتج عن ظروف بيئية أو انقطاع أو قلة دافعية.",
      },
      {
        q: "هل يمكن لطفلي أن يتحسن ويواكب زملاءه؟",
        a: "نعم بالتأكيد؛ التدخل المبكر واستخدام الاستراتيجيات التعويضية المناسبة يمكنان الطفل من تحقيق تقدم حقيقي ملحوظ.",
      },
      {
        q: "كيف نساعد طفلنا في البيت دون شجار يومي؟",
        a: "نساعدكم في المركز على وضع جدول مذاكرة قصير ومقسم على فترات راحة، مع تحويل المفاهيم إلى أنشطة تطبيقية تقلل من المقاومة.",
      },
    ],
  },
  {
    slug: "skills-development",
    title: "تنمية المهارات",
    tagline: "الانتباه والمهارات اليومية والتفاعل",
    themeColor: "green",
    colors: {
      fill: "#B1DD30",
      border: "#517B11",
      soft: "#F2F9DF",
      badgeText: "#3C5A0C",
    },
    iconName: "sprout",
    summary:
      "تطوير الانتباه والتركيز، والتواصل والتفاعل، والمهارات الحركية والاستقلالية اليومية.",
    purpose:
      "مساعدة الطفل على زيادة قدرته على الانتباه، وتنظيم حركته وسلوكه، وتنمية مهارات التفاعل مع الآخرين والاعتماد على نفسه في شؤونه اليومية.",
    indicationsNotice:
      "كل طفل ينمو بإيقاعه الخاص. التقييم يساعدنا على فهم المرحلة الحالية للطفل وتوفير الدعم الملائم لنموه المتوازن.",
    indications: [
      "قصر فترة الانتباه وصعوبة إكمال مهمة أو لعبة واحدة حتى النهاية",
      "اندفاعية مفرطة أو صعوبة في ضبط الذات والانتظار واتباع القواعد البسيطة",
      "صعوبة في التفاعل واللعب المشترك مع الأطفال أو مشاركة الألعاب",
      "تحديات في التناسق الحركي الدقيق مثل استخدام المقص أو القلم أو الأزرار",
      "صعوبة في الاعتماد على النفس في ارتداء الملابس أو تناول الطعام واستخدام الأدوات",
    ],
    howItWorks: [
      "ملاحظة وتقييم مهارات الطفل الحركية والإدراكية والتفاعلية في بيئة لعب آمنة.",
      "وضع برنامج أنشطة موجهة تركز على تنمية التركيز والذاكرة والتآزر الحركي البصري.",
      "التدريب على مهارات التواصل الاجتماعي وتبادل الأدوار والتعبير عن المشاعر بهدوء.",
      "إرشاد الأسرة بأنشطة وألعاب منزلية بسيطة تدعم استقلالية الطفل وثقته في قدراته.",
    ],
    expectations: [
      "زيادة ملحوظة في مدة التركيز والقدرة على متابعة الأنشطة والتعليمات.",
      "تحسن في المهارات الحركية الدقيقة والاعتماد على النفس في الروتين اليومي.",
      "تفاعل اجتماعي أكثر إيجابية ومرونة في المواقف المختلفة.",
    ],
    faqs: [
      {
        q: "من أي عمر تناسب خدمة تنمية المهارات؟",
        a: "نستقبل الأطفال من عمر سنتين فأكثر، حيث تُصمم الأنشطة لكل فئة عمرية بما يلائم مراحل نموها الطبيعية.",
      },
      {
        q: "هل تنمية المهارات تركز على الجانب الذهني فقط؟",
        a: "البرنامج متكامل ويشمل المهارات الذهنية (الانتباه والذاكرة)، والمهارات الحركية الدقيقة، والمهارات الاجتماعية والاستقلالية.",
      },
      {
        q: "كيف أعرف إن كان طفلي يستفيد من الخدمة؟",
        a: "نضع في البداية أهدافًا محددة وقابلة للقياس، ونراجعها معكم دوريًا لنلاحظ التغير في سلوك الطفل اليومي وتركيزه.",
      },
    ],
  },
];

export const servicesEn: Service[] = [
  {
    slug: "speech-therapy",
    title: "Speech Therapy",
    tagline: "Language, Speech & Communication",
    themeColor: "cyan",
    colors: {
      fill: "#83DDE6",
      border: "#327790",
      soft: "#E4F8FA",
      badgeText: "#2C384D",
    },
    iconName: "speech",
    summary:
      "Supporting your child's speech clarity, language comprehension, and confident self-expression.",
    purpose:
      "Helping your child understand what they hear, express their thoughts and needs with clarity, and refine age-appropriate articulation so they can connect naturally with family and peers.",
    indicationsNotice:
      "This checklist is for general awareness and does not indicate a permanent challenge. A personalized clinical evaluation is the step that provides clarity.",
    indications: [
      "Delay in first words or a noticeably limited vocabulary compared to age-matched peers",
      "Persistent difficulty pronouncing specific speech sounds, making speech unclear to family or outsiders",
      "Difficulty following multi-step directions or connecting words into coherent sentences",
      "Stuttering or repeating word segments that causes hesitation or visible distress when speaking",
      "Infrequent initiation of eye contact or vocal communication during regular everyday moments",
    ],
    howItWorks: [
      "A calm, engaging assessment exploring speech mechanics, language comprehension, and expressive ability.",
      "Establishment of realistic, measurable goals tailored to your child's pace without overwhelming them.",
      "One-on-one sessions grounded in structured play, visual prompts, and joyful language stimulation.",
      "Continuous parental guidance with gentle, practical home routines to naturally reinforce milestones.",
    ],
    expectations: [
      "A warm, secure environment where your child feels accepted and unjudged.",
      "A progressive developmental plan continuously adapted to your child's actual responses.",
      "Clear, transparent feedback after each session regarding accomplishments and upcoming steps.",
    ],
    faqs: [
      {
        q: "When does my child need a speech assessment?",
        a: "If you notice speech delay past age 2, or ongoing difficulty understanding their speech past age 3, an initial assessment offers reassurance and identifies if targeted support is beneficial.",
      },
      {
        q: "How long does a session last?",
        a: "Session length and weekly frequency are determined following the initial evaluation, matched to your child's developmental age and attention span.",
      },
      {
        q: "Are parents encouraged to attend speech sessions?",
        a: "Yes, parent presence is always welcome and valuable. It enables you to observe specialist strategies and comfortably reproduce them at home.",
      },
    ],
  },
  {
    slug: "learning-difficulties",
    title: "Learning Difficulties",
    tagline: "Reading, Writing & Mathematics",
    themeColor: "purple",
    colors: {
      fill: "#AF89F6",
      border: "#5E378F",
      soft: "#EFE7FD",
      badgeText: "#4A2B75",
    },
    iconName: "book",
    summary:
      "Individualized cognitive and educational strategies tailored to how your child naturally reads, writes, and computes.",
    purpose:
      "Understanding the unique way your child processes information, and creating a tailored intervention that overcomes academic hurdles while restoring their self-confidence.",
    indicationsNotice:
      "Academic learning challenges are never a reflection of low intelligence; they simply mean the child thrives under a different, multi-sensory teaching style.",
    indications: [
      "Persistent difficulty recalling letter names, phonetic sounds, or spelling rules despite repeated practice",
      "Unusually slow, strained reading pace or frequent errors with common words",
      "Struggles distinguishing similar numbers, grasping basic math operations, or counting backwards",
      "Rapid mental fatigue, frustration, and daily resistance during homework and study sessions",
      "Trouble organizing school supplies or copying information accurately from the board to notebooks",
    ],
    howItWorks: [
      "A comprehensive assessment diagnosing your child's dominant learning modality (visual, auditory, kinesthetic) and key cognitive strengths.",
      "Breaking complex academic concepts into small, attainable milestones achieved step-by-step.",
      "Utilizing tactile tools, manipulatives, and color-coded visual charts that make abstract concepts concrete.",
      "Ongoing alignment with parents to establish peaceful, structured home study routines that dissolve daily friction.",
    ],
    expectations: [
      "Relief of homework-related stress and revitalized curiosity toward learning.",
      "Self-directed learning strategies and organizational skills that support the child across future school years.",
      "Regular milestone evaluations measuring actual tangible progress in target skills.",
    ],
    faqs: [
      {
        q: "What is the difference between learning difficulties and general academic delay?",
        a: "Learning difficulties stem from neurodevelopmental differences in how the brain processes information in specific domains like reading or arithmetic despite typical intelligence. General delays often stem from missed schooling or external factors.",
      },
      {
        q: "Can my child improve and keep pace with classmates?",
        a: "Absolutely. Early targeted support using multi-sensory compensatory strategies enables children to make remarkable, lasting academic strides.",
      },
      {
        q: "How can we help at home without daily arguments?",
        a: "We collaborate with you to create manageable study intervals broken by active 5-minute pauses, replacing rote drills with engaging practical exercises.",
      },
    ],
  },
  {
    slug: "skills-development",
    title: "Skills Development",
    tagline: "Attention, Focus & Daily Life Skills",
    themeColor: "green",
    colors: {
      fill: "#B1DD30",
      border: "#517B11",
      soft: "#F2F9DF",
      badgeText: "#3C5A0C",
    },
    iconName: "sprout",
    summary:
      "Enhancing sustained attention, social interaction, sensory-motor coordination, and everyday independence.",
    purpose:
      "Helping your child expand their attention span, self-regulate behavior and sensory input, develop positive peer interaction skills, and build self-reliance in daily routines.",
    indicationsNotice:
      "Every child grows along their own timeline. An evaluation clarifies your child's current baseline and provides balanced, purposeful support.",
    indications: [
      "Short attention span with difficulty seeing a single activity or structured game through to completion",
      "Marked impulsivity, restlessness, or difficulty waiting for turns and following simple rules",
      "Challenges initiating or sustaining cooperative play with peers and sharing toys comfortably",
      "Difficulties with fine motor tasks such as holding a pencil, using safety scissors, or buttoning clothing",
      "Reluctance or difficulty managing self-care routines like eating independently or organizing belongings",
    ],
    howItWorks: [
      "Observation and assessment of motor, cognitive, and social-emotional skills in a reassuring play setting.",
      "A structured developmental plan focusing on focus expansion, working memory, and visual-motor coordination.",
      "Guidance in social communication, collaborative turn-taking, and identifying emotions calmly.",
      "Empowering parents with accessible everyday home activities that reinforce independence and positive self-worth.",
    ],
    expectations: [
      "Notable increase in sustained focus and capability to follow multi-step instructions.",
      "Refined fine motor control and higher confidence in everyday self-care routines.",
      "Smoother, more flexible social reactions and positive interactions across different settings.",
    ],
    faqs: [
      {
        q: "From what age is skills development suitable?",
        a: "We welcome children starting at age 2. Activities are individually scaled to match their natural developmental developmental window.",
      },
      {
        q: "Does skills development solely focus on cognitive abilities?",
        a: "Our program is holistic: it addresses cognitive skills (focus, working memory), fine motor coordination, social-emotional awareness, and daily functional autonomy.",
      },
      {
        q: "How will I know my child is making progress?",
        a: "We begin by setting clear, observable targets and hold regular progress reviews to monitor improvements in everyday behavior and focus.",
      },
    ],
  },
];

export function getServices(locale: "ar" | "en" = "ar"): Service[] {
  return locale === "en" ? servicesEn : servicesAr;
}

export function getServiceBySlug(
  slug: string,
  locale: "ar" | "en" = "ar"
): Service | undefined {
  const list = getServices(locale);
  return list.find((s) => s.slug === slug);
}

// Backward-compatible export
export const services = servicesAr;
