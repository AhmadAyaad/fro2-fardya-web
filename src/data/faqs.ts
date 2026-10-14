export interface FAQItem {
  id: string;
  q: string;
  a: string;
  category?: string;
}

export const generalFaqsAr: FAQItem[] = [
  {
    id: "faq-1",
    q: "ما هو التقييم المبدئي؟",
    a: "جلسة هادئة يتعرّف فيها المختص على طفلك واحتياجاته، ويستمع إلى ملاحظاتكم وما ترونه في البيت. بعدها نوضّح لكم الخطوة المناسبة وما إذا كان الطفل يستفيد من خدمة واحدة أو أكثر. تُحدَّد مدة الجلسة بدقة عند ترتيب الموعد.",
    category: "التقييم",
  },
  {
    id: "faq-2",
    q: "من أي عمر يمكن أن يبدأ الطفل؟",
    a: "نستقبل الأطفال من عمر سنتين فأكثر في خدمات التخاطب وتنمية المهارات، ومن سن ما قبل المدرسة في صعوبات التعلم. وإن لم تكونوا متأكدين من مناسبة الخدمة لعمر طفلكم، يمكنكم مراسلتنا وسنوضّح لكم بدقة.",
    category: "عام",
  },
  {
    id: "faq-3",
    q: "هل أحضر مع طفلي في الجلسات؟",
    a: "وجودكم مهم ومرحّب به دائمًا، فهو يساعدكم على فهم طبيعة الأنشطة وكيفية تكرارها مع الطفل في البيت برفق وتلقائية. ويوضّح المختص ما يناسب طبيعة واستجابة طفلكم في كل مرحلة.",
    category: "الجلسات",
  },
  {
    id: "faq-4",
    q: "كيف أحجز موعدًا للتقييم؟",
    a: "الخطوة بسيطة جدًا: اضغطوا على زر «احجز تقييم لطفلك» في الموقع أو راسلونا مباشرة على واتساب. سنطلب منكم معلومات بسيطة عن عمر الطفل وما تلاحظونه، ثم نتفق معكم على الموعد الأنسب لكم ولطفلكم.",
    category: "الحجز",
  },
  {
    id: "faq-5",
    q: "هل ما في الموقع يغني عن التقييم المتخصص؟",
    a: "لا إطلاقًا. المقالات والمعلومات المنشورة في الموقع هي للتوعية العامة والإرشاد الأسري فقط، والتقييم الفردي المباشر لدى المختص هو الأساس الوحيد لتحديد احتياجات طفلكم الفعلية ووضع خطته المناسبة.",
    category: "عام",
  },
  {
    id: "faq-6",
    q: "كم عدد الجلسات التي يحتاجها طفلي؟",
    a: "لا نؤمن في فروق فردية بالباقات الثابتة أو القوالب الجاهزة. كل طفل يختلف عن غيره، ويتم تحديد عدد الجلسات ومعدلها الأسبوعي بناءً على نتائج التقييم المبدئي والأهداف الموضوعة له.",
    category: "الجلسات",
  },
  {
    id: "faq-7",
    q: "كيف نجهّز الطفل لجلسة التقييم الأولى؟",
    a: "ننصح الأهل بعدم إشعار الطفل بالخوف أو الامتحان. يمكنكم إخباره ببساطة أننا سنذهب للعب مع أصدقاء جدد في مكان هادئ وجميل، مع الحرص على أن يكون قد نال قسطًا كافيًا من النوم والراحة.",
    category: "التقييم",
  },
];

export const generalFaqsEn: FAQItem[] = [
  {
    id: "faq-1",
    q: "What is an initial assessment?",
    a: "A calm, gentle session where the specialist connects with your child, evaluates their strengths and needs, and listens attentively to your family's observations at home. Afterwards, we clearly explain the recommended next step and whether your child would benefit from one or more multidisciplinary services. Session duration is specified when scheduling.",
    category: "Assessment",
  },
  {
    id: "faq-2",
    q: "At what age can my child begin?",
    a: "We welcome children from age 2 and up for speech therapy and skills development, and from preschool age onwards for learning difficulties. If you are uncertain whether a service is appropriate for your child's age, feel free to contact us and we will guide you clearly.",
    category: "General",
  },
  {
    id: "faq-3",
    q: "May I attend sessions with my child?",
    a: "Your presence is always welcomed and encouraged. It helps you understand the nature of our interactive exercises and how to easily reproduce them with your child at home in a relaxed, natural way. The specialist will advise on what best suits your child's temperament at each phase.",
    category: "Sessions",
  },
  {
    id: "faq-4",
    q: "How do I schedule an evaluation appointment?",
    a: "The process is effortless: click 'Book an Assessment' on the website or message us directly on WhatsApp. We will ask for a few simple notes about your child's age and what you have noticed, then agree together on the most convenient time for your family.",
    category: "Booking",
  },
  {
    id: "faq-5",
    q: "Does website content replace professional clinical evaluation?",
    a: "Not at all. Articles and information on this site are intended solely for general awareness and parental guidance. An in-person clinical assessment by a certified specialist remains the sole foundation for identifying your child's true needs and tailoring an effective plan.",
    category: "General",
  },
  {
    id: "faq-6",
    q: "How many sessions will my child need?",
    a: "At Forooq Fardya, we do not believe in rigid packages or pre-determined molds. Every child is entirely unique. The recommended number and weekly cadence of sessions are decided following the initial assessment based on specific, individualized milestones.",
    category: "Sessions",
  },
  {
    id: "faq-7",
    q: "How should we prepare our child for the first session?",
    a: "We advise families to keep the atmosphere relaxed, avoiding words like 'test' or 'exam.' Simply let your child know you are going to play with friendly mentors in a fun, welcoming space, making sure they arrive well-rested.",
    category: "Assessment",
  },
];

export function getFaqs(locale: "ar" | "en" = "ar"): FAQItem[] {
  return locale === "en" ? generalFaqsEn : generalFaqsAr;
}

// Backward compatibility export
export const generalFaqs = generalFaqsAr;
