export interface Article {
  slug: string;
  title: string;
  category: string;
  categorySlug: "speech-therapy" | "learning-difficulties" | "skills-development";
  readTime: string;
  date: string;
  excerpt: string;
  themeColor: "cyan" | "purple" | "green";
  content: {
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
      listItems?: string[];
    }[];
    conclusion: string;
  };
}

export const articlesAr: Article[] = [
  {
    slug: "how-to-know-if-child-needs-speech-therapy",
    title: "كيف أعرف أن طفلي يحتاج إلى تقييم تخاطب؟",
    category: "التخاطب",
    categorySlug: "speech-therapy",
    readTime: "٥ دقائق قراءة",
    date: "٢٠٢٦",
    excerpt:
      "ملاحظات هادئة ومؤشرات واضحة تساعد الأسرة على معرفة التوقيت المناسب لطلب استشارة التخاطب دون قلق مفرط أو انتظار طويل.",
    themeColor: "cyan",
    content: {
      lead: "يشعر كثير من الآباء والأمهات بالحيرة عندما يقارنون كلام طفلهم بأقرانه أو إخوته. والسؤال الأكثر تكرارًا هو: «هل ننتظر أم نستشير مختصًا؟». الهدف من هذا المقال هو تقديم علامات واضحة تساعدكم على اتخاذ قرار هادئ ومدروس.",
      sections: [
        {
          heading: "١ · ما هو النمو اللغوي المتوقع؟",
          paragraphs: [
            "يمر الأطفال بمحطات نمو لغوي متدرجة، ورغم وجود فروق فردية طبيعية في التوقيت، إلا أن هناك معالم أساسية تستحق الانتباه:",
          ],
          listItems: [
            "عند عمر سنتين: من المتوقع أن ينطق الطفل نحو ٥٠ كلمة مفردة، وأن يبدأ في تركيب جملة من كلمتين (مثل: «بابا جه»، «أشرب ماء»).",
            "عند عمر ٣ سنوات: تتسع الحصيلة لتشمل جملًا من ٣ كلمات، ويكون كلام الطفل مفهومًا لأفراد الأسرة المقربين بنسبة ٧٥٪ على الأقل.",
            "عند عمر ٤ سنوات: يستطيع الطفل سرد قصة بسيطة واستخدام الضمائر والتعبير عن رغباته بجمل واضحة للغرباء أيضًا.",
          ],
        },
        {
          heading: "٢ · مؤشرات تستدعي طلب التقييم المبدئي",
          paragraphs: [
            "إذا لاحظتم واحدًا أو أكثر من المؤشرات التالية بشكل مستمر، فالأفضل طلب تقييم مبدئي للاطمئنان ومعرفة إن كان التدخل مفيدًا:",
          ],
          listItems: [
            "الطفل لا يستجيب للنداء باسمه أو لا يلتفت لمصدر الأصوات المألوفة.",
            "قلة التواصل البصري والاعتماد الكلي على الإشارة أو البكاء بدل المحاولة اللفظية بعد سن السنتين.",
            "صعوبة واضحة في نطق الحروف تجعل كلام الطفل غير مفهوم لمن هم خارج المنزل بعد سن ٣ سنوات.",
            "تكرار مقاطع الكلمات أو التوقف المفاجئ المصحوب بتوتر أو انزعاج ملحوظ عند محاولة الكلام.",
            "فقدان كلمات أو مهارات لغوية كان يتقنها في السابق.",
          ],
        },
        {
          heading: "٣ · لماذا نفضل التقييم المبكر؟",
          paragraphs: [
            "التقييم المبكر لا يعني وصم الطفل أو إلزامه بجلسات طويلة، بل هو مجرد جلسة تعرّف هادئة توضح للأسرة ما إذا كان التأخر طبيعيًا يحتاج لبيئة محفزة فقط، أم يحتاج لتدخل موجه. كلما كان الدعم في وقت مبكر، كانت الاستجابة أسرع والجهد أقل على الطفل والأسرة.",
          ],
        },
      ],
      conclusion:
        "تذكّروا دائمًا أن حدس الوالدين يستحق الاحترام. إذا كنتم تشعرون بالقلق، فإن استشارة مختص تخاطب تمنحكم الطمأنينة وخارطة طريق واضحة لطفلكم.",
    },
  },
  {
    slug: "how-to-help-child-study-without-pressure",
    title: "كيف أساعد طفلي في المذاكرة دون ضغط؟",
    category: "صعوبات التعلم",
    categorySlug: "learning-difficulties",
    readTime: "٦ دقائق قراءة",
    date: "٢٠٢٦",
    excerpt:
      "خطوات واقعية لتحويل وقت المذاكرة من معركة يومية إلى تجربة مريحة، وفهم النمط الخاص الذي يستوعب به طفلك المعلومات.",
    themeColor: "purple",
    content: {
      lead: "يتحول وقت الواجبات المدرسية في كثير من البيوت إلى ساحة للتوتر والشجار المتكرر. والسبب غالبًا ليس عناد الطفل أو تقصير الوالدين، بل اختلاف الطريقة التي يستقبل بها الطفل المعلومات عن الطريقة المتبعة في التدريس.",
      sections: [
        {
          heading: "١ · لماذا يقاوم الطفل المذاكرة؟",
          paragraphs: [
            "حين يشعر الطفل بصعوبة حقيقية في قراءة سطر أو تذكر مسألة حسابية، يكون رد فعله الدفاعي الطبيعي هو التشتت أو البكاء أو الرفض. تجنب المذاكرة غالبًا ما يكون تعبيرًا عن شعور داخلي بالعجز أو الإحباط المتكرر.",
          ],
        },
        {
          heading: "٢ · استراتيجيات عملية لمذاكرة هادئة",
          paragraphs: [
            "يمكن لخطوات بسيطة في البيئة المنزلية أن تحدث فارقًا جوهريًا في استجابة الطفل:",
          ],
          listItems: [
            "تجزئة الوقت: قسّموا المذاكرة إلى فترات قصيرة (١٥–٢٠ دقيقة) تليها استراحة نشطة لمدة ٥ دقائق، بدل الجلسات الطويلة المتواصلة.",
            "تفكيك المهام: بدلاً من القول «اكتب هذا الدرس كاملاً»، حددوا هدفًا صغيرًا: «سنقرأ ثلاث جمل فقط ثم نتوقف لنلخصها».",
            "استخدام الوسائل البصرية والمحسوسة: استخدام الألوان، والبطاقات المصورة، وأدوات العد الحقيقية يحول المفاهيم المجردة إلى صور واضحة وسهلة التذكر.",
            "التركيز على الجهد لا على النتيجة: امتدحوا محاولة الطفل وصبره: «أعجبني تركيزك في هذه الفقرة»، بدلاً من التركيز على الدرجة فقط.",
          ],
        },
        {
          heading: "٣ · متى نحتاج إلى تقييم صعوبات التعلم؟",
          paragraphs: [
            "إذا كان الطفل يبذل مجهودًا كبيرًا وتوفرون له الدعم الكافي، ومع ذلك تلاحظون صعوبة مستمرة في تمييز الحروف أو حفظ جدول الضرب أو الربط بين الأفكار، فالتقييم الأكاديمي المتخصص يحدد بدقة النمط المعرفي للطفل ويوفر استراتيجيات مخصصة تسهل عليه التعلم.",
          ],
        },
      ],
      conclusion:
        "علاقتكم بطفلكم وثقته بنفسه أهم بكثير من إنجاز واجب مدرسي بسرعة. خففوا التوقعات واعتمدوا التدرج، وستلاحظون كيف تتغير نظرته للدراسة.",
    },
  },
  {
    slug: "daily-activities-for-attention-and-focus",
    title: "أنشطة يومية بسيطة لتنمية الانتباه والتركيز",
    category: "تنمية المهارات",
    categorySlug: "skills-development",
    readTime: "٤ دقائق قراءة",
    date: "٢٠٢٦",
    excerpt:
      "أفكار وألعاب منزلية غير معقدة تدعم تركيز طفلك وتساعده على تنظيم انتباهه ومهاراته الحركية والإدراكية خلال روتينه اليومي.",
    themeColor: "green",
    content: {
      lead: "الانتباه والتركيز عضلة تنمو بالتدريب والتكرار المناسب لعمر الطفل. ولا يتطلب تنمية هذا الجانب أدوات باهظة أو برامج معقدة، بل يمكن لألعاب وتفاعلات يومية بسيطة داخل المنزل أن تبني مهارات التركيز خطوة بخطوة.",
      sections: [
        {
          heading: "١ · ألعاب الانتباه البصري والسمعي",
          paragraphs: [
            "الأنشطة التي تتطلب متابعة تسلسل أو البحث عن تفاصيل محددة تقوي الدوائر العصبية المسؤولة عن التركيز:",
          ],
          listItems: [
            "لعبة «ابحث عن الفروق»: سواء في كتب الصور أو بترتيب عدة أغراض على الطاولة وتغيير مكان غرض واحد بينما يغمض الطفل عينيه.",
            "ألعاب التصنيف: فرز حبوب المكرونة الملونة، أو ترتيب الجوارب حسب الألوان، أو تصنيف ألعاب السيارات حسب الحجم.",
            "اتباع التعليمات المتسلسلة: البدء بتعليمين متتابعين (مثل: «ضع الحذاء في الخزانة ثم احضر الكتاب الأزرق») وزيادتها تدريجيًا.",
            "ألعاب الإيقاع السمعي: التصفيق بنمط معين والطلب من الطفل تقليده بدقة.",
          ],
        },
        {
          heading: "٢ · دور الحركة والروتين في تحسين التركيز",
          paragraphs: [
            "يحتاج الأطفال إلى تفريغ طاقتهم الحركية قبل الجلوس لأداء مهام تتطلب هدوءًا. توفير أوقات لعب حر، والمشي، وتقليل وقت الشاشات والأجهزة الإلكترونية (خاصة قبل النوم أو المذاكرة) ينعكس فورًا على صفاء الذهن واستقرار الانتباه.",
          ],
        },
        {
          heading: "٣ · الصبر والتدرج في تدريب الانتباه",
          paragraphs: [
            "فترة انتباه الطفل الطبيعية تتراوح عادة بين دقيقتين إلى ٥ دقائق لكل سنة من عمره (فالطفل في عمر ٤ سنوات ينتبه عادة بين ٨ إلى ٢٠ دقيقة في نشاط موجه). لذلك لا تنتظروا منه التركيز لساعات متواصلة، وابنوا التحدي بالتدريج وبجرعات تشجيع مستمرة.",
          ],
        },
      ],
      conclusion:
        "الاستمرارية في الأنشطة البسيطة هي المفتاح. خصصوا ١٥ دقيقة يوميًا من اللعب التفاعلي المركز الخالي من الشاشات، وستشهدون تطورًا ملحوظًا في مهارات طفلكم.",
    },
  },
];

export const articlesEn: Article[] = [
  {
    slug: "how-to-know-if-child-needs-speech-therapy",
    title: "How Do I Know If My Child Needs a Speech Evaluation?",
    category: "Speech Therapy",
    categorySlug: "speech-therapy",
    readTime: "5 min read",
    date: "2026",
    excerpt:
      "Gentle observations and clear indicators to help families identify the ideal timing to seek speech guidance without undue anxiety or prolonged delay.",
    themeColor: "cyan",
    content: {
      lead: "Many parents feel uncertain when comparing their child's speech milestones to siblings or age peers. The most frequent question is: 'Should we wait, or consult a specialist?' This guide aims to provide clear milestones to help you make a calm, informed decision.",
      sections: [
        {
          heading: "1 · What Is Typical Language Development?",
          paragraphs: [
            "Children progress through distinct communication milestones. While individual variation is completely natural, key guideposts deserve attention:",
          ],
          listItems: [
            "At 2 years: Children typically speak around 50 single words and begin combining two-word phrases (e.g., 'Daddy go', 'Drink water').",
            "At 3 years: Vocabulary expands into 3-word sentences, and speech is understood by immediate family at least 75% of the time.",
            "At 4 years: The child can narrate simple stories, use pronouns, and express thoughts clearly to unfamiliar listeners.",
          ],
        },
        {
          heading: "2 · Key Signs That Call for an Initial Assessment",
          paragraphs: [
            "If you consistently notice one or more of the following signs, an initial consultation provides clarity and timely support:",
          ],
          listItems: [
            "The child does not respond to their name or turn toward familiar environmental sounds.",
            "Limited eye contact and total reliance on pointing or crying rather than attempting words past age 2.",
            "Noticeable pronunciation difficulty leaving speech largely unintelligible to people outside the household after age 3.",
            "Frequent repetitions, word blockages, or visible physical tension when trying to produce words.",
            "Sudden loss of vocabulary or communication skills previously mastered.",
          ],
        },
        {
          heading: "3 · Why Is Early Evaluation Beneficial?",
          paragraphs: [
            "An early assessment is never about labeling a child or locking them into long therapy sessions. It is simply a gentle conversation clarifying whether the delay is a benign phase needing an enriched environment or whether targeted stimulation will accelerate development.",
          ],
        },
      ],
      conclusion:
        "Always trust parental intuition. If you feel uneasy, a friendly consultation with a speech specialist provides peace of mind and an actionable roadmap for your child.",
    },
  },
  {
    slug: "how-to-help-child-study-without-pressure",
    title: "How to Help Your Child Study Without Daily Stress",
    category: "Learning Difficulties",
    categorySlug: "learning-difficulties",
    readTime: "6 min read",
    date: "2026",
    excerpt:
      "Practical techniques to transform homework time from a daily battle into a positive experience by embracing your child's natural learning modality.",
    themeColor: "purple",
    content: {
      lead: "In many homes, homework hour turns into a battleground of tears and frustration. The root cause is rarely stubbornness or parental shortcomings; it is usually a mismatch between how the child's brain absorbs information and standard teaching styles.",
      sections: [
        {
          heading: "1 · Why Do Children Resist Studying?",
          paragraphs: [
            "When a child experiences genuine difficulty decoding a sentence or remembering arithmetic steps, their natural protective reflex is distraction, resistance, or withdrawal. Avoidance is often a shield against feelings of repeated failure and helplessness.",
          ],
        },
        {
          heading: "2 · Practical Strategies for a Peaceful Routine",
          paragraphs: [
            "Simple adjustments in the home learning environment create profound differences in your child's willingness to engage:",
          ],
          listItems: [
            "Chunked time blocks: Break study into 15–20 minute intervals followed by 5 minutes of physical movement, avoiding endless exhausting sessions.",
            "Deconstructing tasks: Instead of saying 'Finish the whole chapter', set a mini-goal: 'Let's read three lines together and summarize them.'",
            "Multi-sensory tools: Use colors, tactile flashcards, and physical objects to turn abstract symbols into memorable visual experiences.",
            "Praise effort over grades: Value perseverance: 'I loved how focused you were on this paragraph,' building intrinsic confidence.",
          ],
        },
        {
          heading: "3 · When to Seek a Learning Evaluation?",
          paragraphs: [
            "If your child exerts tremendous effort with continuous support yet continues struggling with letter reversals, math facts, or working memory, a specialized academic evaluation can identify their cognitive learning profile and provide tailored compensatory tools.",
          ],
        },
      ],
      conclusion:
        "Your bond with your child and their self-esteem matter far more than finishing a worksheet in record time. Soften expectations, adopt small incremental steps, and watch their enthusiasm return.",
    },
  },
  {
    slug: "daily-activities-for-attention-and-focus",
    title: "Simple Everyday Activities to Build Attention & Focus",
    category: "Skills Development",
    categorySlug: "skills-development",
    readTime: "4 min read",
    date: "2026",
    excerpt:
      "Accessible home games and routines that strengthen concentration, working memory, and sensory-motor regulation throughout the day.",
    themeColor: "green",
    content: {
      lead: "Attention is like a muscle: it strengthens through age-appropriate repetition and positive engagement. Building focus does not require costly gadgets or complicated programs; simple everyday games at home build sustained attention step-by-step.",
      sections: [
        {
          heading: "1 · Visual & Auditory Concentration Games",
          paragraphs: [
            "Activities requiring sequential tracking or spotting specific details reinforce the neural circuits responsible for focus:",
          ],
          listItems: [
            "'Spot the Difference': Either in picture books or by arranging 5 household items on a table and moving one while the child closes their eyes.",
            "Sorting games: Sorting colored pasta, matching socks by pattern, or arranging toy cars by size.",
            "Multi-step instructions: Start with two sequential instructions ('Put your shoes in the closet, then bring me the blue book') and gradually expand.",
            "Rhythmic clapping: Clap a simple pattern and invite your child to reproduce it with matching timing.",
          ],
        },
        {
          heading: "2 · The Role of Movement and Structured Routines",
          paragraphs: [
            "Young children need to release physical energy before settling into sedentary tasks. Prioritizing outdoor active play, routine walks, and minimizing screen time before bed and study immediately promotes cognitive calmness and stable focus.",
          ],
        },
        {
          heading: "3 · Patience and Age-Appropriate Windows",
          paragraphs: [
            "A child's natural focused attention span typically spans 2 to 5 minutes per year of age (a 4-year-old comfortably concentrates for 8 to 20 minutes in a guided activity). Avoid expecting adult-like stamina, and celebrate small, consistent milestones.",
          ],
        },
      ],
      conclusion:
        "Consistency in small daily moments is the true key. Dedicating 15 screen-free minutes a day to interactive, focused play yields remarkable improvements in your child's functional abilities.",
    },
  },
];

export function getArticles(locale: "ar" | "en" = "ar"): Article[] {
  return locale === "en" ? articlesEn : articlesAr;
}

export function getArticleBySlug(
  slug: string,
  locale: "ar" | "en" = "ar"
): Article | undefined {
  const list = getArticles(locale);
  return list.find((a) => a.slug === slug);
}

// Backward compatibility export
export const articles = articlesAr;
