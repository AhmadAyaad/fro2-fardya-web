export interface Article {
  slug: string;
  title: string;
  category: string;
  categorySlug: "speech-therapy" | "learning-difficulties" | "skills-development";
  readTime: string;
  date: string;
  isoDate: string;
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
    isoDate: "2026-01-10",
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
    isoDate: "2026-01-18",
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
    isoDate: "2026-01-25",
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
  {
    slug: "causes-of-speech-delay-in-children",
    title: "أسباب تأخر الكلام عند الأطفال وطرق تحفيز النطق في البيت",
    category: "التخاطب",
    categorySlug: "speech-therapy",
    readTime: "٦ دقائق قراءة",
    date: "٢٠٢٦",
    isoDate: "2026-02-05",
    excerpt:
      "دليل شامل ومطمئن للأمهات والآباء للتعرف على الأسباب البيئية والنمائية لتأخر النطق، وكيفية بناء بيئة لغوية محفزة للطفل في البيت.",
    themeColor: "cyan",
    content: {
      lead: "يعد تأخر الكلام من أكثر المواضيع التي تشغل بال الأمهات والآباء في السنوات الأولى من عمر الطفل. والخبر المطمئن هو أن معظم حالات التأخر اللغوي البسيط تستجيب بشكل ملحوظ وسريع بمجرد تحديد الأسباب وتقديم التحفيز المناسب في البيت والمركز.",
      sections: [
        {
          heading: "١ · ما الفرق بين تأخر الكلام وصعوبات النطق؟",
          paragraphs: [
            "من المهم أن نميز بين أمرين مختلفين: تأخر الكلام (تأخر في تكوين الكلمات أو قلة الحصيلة اللغوية مقارنة بالعمر)، وصعوبات النطق أو اللدغات (حيث يتكلم الطفل بجمل كاملة لكنه ينطق بعض الحروف مثل الراء أو الكاف أو السين بطريقة غير دقيقة). التقييم الدقيق يحدد أيهما يحتاجه طفلك.",
          ],
        },
        {
          heading: "٢ · أبرز أسباب تأخر الكلام عند الأطفال",
          paragraphs: [
            "تتعدد أسباب تأخر النطق، ولكنها تنقسم غالبًا إلى عوامل بيئية وعوامل نمائية:",
          ],
          listItems: [
            "التعرض المفرط للشاشات والهواتف الذكية في سن مبكرة: استقبال سلبي للصوت والصورة دون تفاعل متبادل يضعف الرغبة في التواصل اللفظي.",
            "قلة الحوار المباشر داخل البيت: انشغال الأهل أو عدم التحدث مع الطفل بشكل متكرر وتسمية الأشياء المحيطة به.",
            "تلبية طلبات الطفل بالإشارة أو البكاء دون تشجيعه على المحاولة اللفظية: حين يحصل الطفل على ما يريد بمجرد الإشارة، يقل الحافز للكلام.",
            "التهابات الأذن الوسطى المتكررة أو تجمع السوائل: تؤثر مؤقتًا على وضوح سماع الطفل للأصوات ومخارج الحروف.",
            "أسباب نمائية أو وراثية: مثل وجود تاريخ عائلي لتأخر النطق، أو سمات نمائية تتطلب تدخلاً متخصصًا.",
          ],
        },
        {
          heading: "٣ · خطوات عملية لتحفيز النطق يوميًا في البيت",
          paragraphs: [
            "يمكن للأهل إحداث فارق كبير من خلال تعديل عادات التواصل اليومية:",
          ],
          listItems: [
            "علّقوا بصوت مسموع على ما يفعل الطفل: تحدثوا عن أفعاله وكأنكم معلق رياضي («نضع المكعب الأحمر فوق المكعب الأزرق»)، مما يثري قاموسه السمعي.",
            "اقرأوا قصصًا مصورة تفاعلية يوميًا: ليس الهدف قراءة النص حرفيًا، بل الإشارة للصور وتسمية الحيوانات والألوان وسؤال الطفل عنها.",
            "قدّموا له خيارات ثنائية بدل الأسئلة المغلقة: اسألوه «تحب تشرب ماء ولا عصير؟» بدل «عايز تشرب؟»، لإتاحة فرصة نطق الكلمة.",
            "أوقفوا تمامًا الشاشات التفاعلية قبل سن سنتين، وقللوها لأقل من ساعة في اليوم بعد ذلك مع المشاهدة المشتركة.",
          ],
        },
        {
          heading: "٤ · متى تستشيرون أخصائي تخاطب؟",
          paragraphs: [
            "إذا أتم الطفل سنتين دون نطق كلمات مفردة واضحة، أو أتم ٣ سنوات دون تكوين جمل بسيطة من كلمتين إلى ٣ كلمات، فإن جلسة التقييم المبدئي تمنحكم خطة مريحة وواضحة ترشدكم لما يحتاجه طفلكم بالضبط.",
          ],
        },
      ],
      conclusion:
        "كل طفل يمتلك إيقاعه الخاص. التدخل الهادئ المبكر والبيئة المحفزة هما أفضل استثمار يمنح طفلكم الثقة والقدرة على التعبير بسلاسة.",
    },
  },
  {
    slug: "difference-between-learning-difficulties-and-slow-learning",
    title: "الفرق بين صعوبات التعلم وبطء التعلم والتأخر الدراسي",
    category: "صعوبات التعلم",
    categorySlug: "learning-difficulties",
    readTime: "٥ دقائق قراءة",
    date: "٢٠٢٦",
    isoDate: "2026-02-12",
    excerpt:
      "توضيح الفروق الجوهرية بين المفاهيم الثلاثة من حيث نسبة الذكاء وطريقة التدخل، لمساعدة الأهل على اختيار الدعم الأكاديمي والتربوي الصحيح لطفلهم.",
    themeColor: "purple",
    content: {
      lead: "كثيرًا ما يخلط أولياء الأمور بين مصطلحات «صعوبات التعلم»، «بطء التعلم»، و«التأخر الدراسي»، مما قد يؤدي إلى اتباع أساليب تدريسية لا تناسب طبيعة الطفل وتزيد من إحباطه. فهم الفروق الحقيقية هو المفتاح لاختيار الطريق الصحيح للدعم.",
      sections: [
        {
          heading: "١ · صعوبات التعلم المحددة (Specific Learning Difficulties)",
          paragraphs: [
            "الأطفال ذوو صعوبات التعلم يتمتعون بنسبة ذكاء طبيعية تمامًا أو حتى فوق المتوسطة (عباقرة في جوانب أخرى كالرسم أو الفك والتركيب). المشكلة تنحصر في طريقة معالجة الدماغ لمعلومات محددة، مثل عسر القراءة (الديسلكسيا) أو عسر الحساب (الديسكلكوليا).",
            "يحتاج الطفل هنا إلى استراتيجيات تعليمية تعويضية متعددة الحواس تساعده على تجاوز هذه الفجوة الأكاديمية بنجاح.",
          ],
        },
        {
          heading: "٢ · بطء التعلم (Slow Learner)",
          paragraphs: [
            "تكون قدرات الطفل العقلية العامة في المدى الحدي (أقل قليلاً من المتوسط الطبيعي). يواجه الطفل صعوبة في جميع المواد الدراسية بشكل عام وليس في مادة واحدة فقط، ويحتاج إلى وقت أطول وتكرار أكبر لاستيعاب أي مفهوم دراسي جديد.",
          ],
        },
        {
          heading: "٣ · التأخر الدراسي (Academic Underachievement)",
          paragraphs: [
            "الطفل يمتلك قدرات عقلية سليمة وطبيعية، ولا يعاني من صعوبات تعلم نمائية، لكن درجاته المدرسية منخفضة بسبب ظروف خارجية: مثل الإهمال، الغياب المتكرر، المشكلات الأسرية، أو قلة الدافعية وفقدان الشغف بالدراسة.",
          ],
        },
        {
          heading: "٤ · كيف نحدد نوع التحدي بدقة؟",
          paragraphs: [
            "التقييم التربوي والنفسي المتخصص واختبارات الذكاء المقننة (مثل مقياس ستانفورد بينيه) هي الوسيلة العلمية الوحيدة لتحديد موقع طفلك بدقة، ووضع برنامج دعم يناسب قدراته دون لوم أو مقارنات.",
          ],
        },
      ],
      conclusion:
        "حين نفهم قدرات طفلنا الحقيقية ونتقبلها، يتحول وقت المذاكرة من عبء وتوتر إلى مساحة للتطور المستمر وبناء الثقة بالنفس.",
    },
  },
  {
    slug: "adhd-and-attention-how-to-help-your-child",
    title: "فرط الحركة وتشتت الانتباه: كيف تدعم طفلك لتنظيم تركيزه وسلوكه؟",
    category: "تنمية المهارات",
    categorySlug: "skills-development",
    readTime: "٥ دقائق قراءة",
    date: "٢٠٢٦",
    isoDate: "2026-02-20",
    excerpt:
      "استراتيجيات علمية هادئة للتعامل مع صعوبات التركيز وكثرة الحركة عند الأطفال، وتحويل طاقتهم إلى إنجازات وتفاعل إيجابي.",
    themeColor: "green",
    content: {
      lead: "الطفل كثير الحركة وسريع التشتت لا يقصد إزعاج من حوله أو إفساد النظام؛ فدماغه يبحث باستمرار عن محفزات حسية تساعده على البقاء يقظًا. عندما يفهم الأهل والمدرسون هذه الطبيعة، يصبح التعامل معه رحلة شيقة وناجحة.",
      sections: [
        {
          heading: "١ · مؤشرات تدل على صعوبة تنظيم الانتباه",
          paragraphs: [
            "قد يظهر على الطفل صعوبة مستمرة في الجلوس لفترات قصيرة، الانتقال السريع بين الألعاب دون إكمال واحدة، النسيان المتكرر للأدوات المدرسية، والاندفاع في الإجابة قبل انتهاء السؤال.",
          ],
        },
        {
          heading: "٢ · استراتيجيات منزلية أثبتت فعاليتها",
          paragraphs: [
            "خطوات عملية بسيطة تصنع فرقًا هائلاً في روتين طفلك:",
          ],
          listItems: [
            "قسّموا المهام الكبيرة إلى خطوات بصرية صغيرة: استخدموا قائمة مصورة أو بطاقات بالألوان لترتيب خطوات الصباح أو حل الواجبات.",
            "فرّغوا الطاقة الحركية قبل المهام الذهنية: ١٠ دقائق من القفز أو الجري أو التمارين الحركية الخفيفة تساعد دماغه على الاستقرار قبل المذاكرة.",
            "استخدموا المؤقت البصري: رؤية الوقت وهو ينقضي بوضوح يساعد الطفل على الصبر والتركيز حتى انتهاء المدة المتفق عليها.",
            "تواصلوا بالعين ولمس الكتف برفق عند إعطاء التعليمات: تأكدوا من انتباهه البصري الكامل قبل التحدث.",
          ],
        },
        {
          heading: "٣ · دور جلسات تنمية المهارات والتكامل الحسي",
          paragraphs: [
            "تساعد جلسات تنمية المهارات المتخصصة في المركز على تدريب الدماغ على إطالة مدة الانتباه، والتحكم في الاندفاعية، وتنظيم الاستجابات للمثيرات الخارجية من خلال أنشطة حسية حركية ممتعة وموجهة.",
          ],
        },
      ],
      conclusion:
        "طاقة طفلك وحيويته ليست عيبًا، بل هي ميزة قيادية وإبداعية هائلة إذا تم توجيهها بالصبر والاستراتيجيات الصحيحة والتدريب المتخصص.",
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
    isoDate: "2026-01-10",
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
    isoDate: "2026-01-18",
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
    isoDate: "2026-01-25",
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
  {
    slug: "causes-of-speech-delay-in-children",
    title: "Causes of Speech Delay in Children & Practical Home Speech Activities",
    category: "Speech Therapy",
    categorySlug: "speech-therapy",
    readTime: "6 min read",
    date: "2026",
    isoDate: "2026-02-05",
    excerpt:
      "A comprehensive, reassuring guide for parents exploring developmental and environmental causes of speech delay, and how to create a rich speech-stimulating environment at home.",
    themeColor: "cyan",
    content: {
      lead: "Speech delay is one of the most frequent developmental concerns for parents of young toddlers. The reassuring truth is that most cases of early speech delay respond remarkably well once underlying triggers are identified and purposeful stimulation begins.",
      sections: [
        {
          heading: "1 · Speech Delay vs. Articulation Difficulties",
          paragraphs: [
            "It is important to distinguish between two different challenges: speech delay (a lag in acquiring first words and building age-appropriate vocabulary) and articulation differences or phonological difficulties (where a child speaks fluently in full sentences but struggles producing specific consonant sounds such as R, K, or S). A clinical evaluation pinpoints exactly what your child needs.",
          ],
        },
        {
          heading: "2 · Common Underlying Causes of Speech Delays",
          paragraphs: [
            "Speech delays generally arise from a blend of environmental and developmental factors:",
          ],
          listItems: [
            "Early screen exposure and passive device use: One-way screen consumption limits conversational turn-taking, dampening the motivation for verbal dialogue.",
            "Limited interactive dialogue at home: Busy schedules can unintentionally reduce conversational narration, questions, and labeling of everyday objects.",
            "Anticipating every wish: Fulfilling needs instantly when the child points or whimpers reduces their necessity to produce words.",
            "Recurrent middle-ear fluid or ear infections: Fluctuating hearing levels can muffle consonant sounds during critical phonetic learning windows.",
            "Neurodevelopmental factors: Family history of late talkers or specific developmental profiles requiring dedicated clinical support.",
          ],
        },
        {
          heading: "3 · Everyday Strategies to Stimulate Speech at Home",
          paragraphs: [
            "Parents can trigger huge developmental leaps through simple adjustments to daily interactions:",
          ],
          listItems: [
            "Narrate everyday actions: Speak aloud about what your child is doing ('We are putting the red block on top of the blue block'), immersing them in rich descriptive vocabulary.",
            "Shared picture book reading: Point at pictures, make playful sound effects, and ask simple open-ended questions rather than merely reading the text verbatim.",
            "Offer binary choices: Ask 'Do you want water or juice?' rather than 'Are you thirsty?', giving them a clear word model to repeat.",
            "Strictly eliminate screens before age two, limiting them to under an hour of co-viewing thereafter.",
          ],
        },
        {
          heading: "4 · When Should You Consult a Speech-Language Pathologist?",
          paragraphs: [
            "If your child has reached age 2 without consistent single words, or age 3 without connecting words into 2- to 3-word phrases, an initial evaluation provides reassurance and an individualized roadmap tailored to their unique pace.",
          ],
        },
      ],
      conclusion:
        "Every child develops along their own timeline. Calm, early targeted support and a linguistically rich home environment empower your child to speak with ease and confidence.",
    },
  },
  {
    slug: "difference-between-learning-difficulties-and-slow-learning",
    title: "The Difference Between Learning Difficulties, Slow Learning & Academic Delay",
    category: "Learning Difficulties",
    categorySlug: "learning-difficulties",
    readTime: "5 min read",
    date: "2026",
    isoDate: "2026-02-12",
    excerpt:
      "Clarifying the fundamental distinctions between learning difficulties, slow learning, and academic delay regarding cognitive profiles and intervention methods.",
    themeColor: "purple",
    content: {
      lead: "Parents frequently conflate learning difficulties, slow learning, and academic underachievement. This confusion can lead to teaching approaches mismatched with the child's true cognitive profile. Understanding the real differences is key to offering the right support.",
      sections: [
        {
          heading: "1 · Specific Learning Difficulties (SpLD)",
          paragraphs: [
            "Children with specific learning difficulties possess typical or above-average general intelligence (often showing exceptional gifts in spatial reasoning, mechanics, or art). The obstacle lies strictly in how their brain processes specific symbolic information—such as in dyslexia (reading) or dyscalculia (mathematics).",
            "These children require multi-sensory compensatory strategies rather than simply repeating standard drills.",
          ],
        },
        {
          heading: "2 · Slow Learning Profiles",
          paragraphs: [
            "A child with a slow learning profile exhibits cognitive functioning in the borderline range across all academic disciplines, not just one isolated subject. They require additional processing time, reduced task complexity, and structured repetition to master new concepts.",
          ],
        },
        {
          heading: "3 · Academic Delay (Underachievement)",
          paragraphs: [
            "Here, cognitive faculties and neurological processing are completely sound, yet school marks suffer due to external circumstances: prolonged absence, family stress, emotional anxiety, or lost academic motivation.",
          ],
        },
        {
          heading: "4 · How Clinical Assessment Establishes Clarity",
          paragraphs: [
            "Standardized psycho-educational evaluations and accredited cognitive scales (such as Stanford-Binet) objectively identify your child's cognitive strengths and obstacles, replacing guesswork and frustration with targeted intervention.",
          ],
        },
      ],
      conclusion:
        "When we understand our children's genuine abilities and respect their unique learning style, study time transforms from stressful friction into an empowering journey of self-confidence.",
    },
  },
  {
    slug: "adhd-and-attention-how-to-help-your-child",
    title: "ADHD & Attention Regulation: How to Support Your Child's Focus and Behavior",
    category: "Skills Development",
    categorySlug: "skills-development",
    readTime: "5 min read",
    date: "2026",
    isoDate: "2026-02-20",
    excerpt:
      "Evidence-based strategies for navigating focus challenges and hyperactivity in children, turning high energy into positive engagement and accomplishment.",
    themeColor: "green",
    content: {
      lead: "A hyperactive, easily distracted child is not willfully defying parents or teachers; their nervous system is naturally seeking sensory stimulation to maintain alertness. When adults recognize this developmental drive, guidance becomes a collaborative, joyful partnership.",
      sections: [
        {
          heading: "1 · Recognizing Common Signs of Attention Regulation Struggles",
          paragraphs: [
            "Indicators often include difficulty remaining seated for age-appropriate intervals, rapidly abandoning toys halfway through, frequent forgetfulness with school supplies, and answering impulsively before a question is completed.",
          ],
        },
        {
          heading: "2 · Tested Home Strategies That Create Real Impact",
          paragraphs: [
            "Practical environmental tweaks transform your child's daily routine:",
          ],
          listItems: [
            "Deconstruct complex routines into visual steps: Utilize pictorial checklists or color-coded charts for morning routines and homework.",
            "Active physical discharge before seated work: 10 minutes of jumping, running, or sensory-motor exercises calms the nervous system prior to study time.",
            "Visual timers: Being able to physically see time elapse helps children maintain focus until an agreed milestone is reached.",
            "Touch and direct eye contact: Ensure full visual connection and a gentle shoulder touch before delivering multi-step instructions.",
          ],
        },
        {
          heading: "3 · The Role of Skills Development & Sensory Integration",
          paragraphs: [
            "Specialized developmental sessions train the brain to lengthen attention span, regulate impulsive responses, and organize sensory input through engaging, structured play activities.",
          ],
        },
      ],
      conclusion:
        "Your child's exuberant energy is not a flaw; it is a remarkable creative and leadership asset when guided by patient, evidence-based developmental support.",
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
