/* =====================================================================
   Damashq Travel — VISA DATA (تأشيرات شركة دمشق للسفر والسياحة)
   ===================================================================== */
window.DAMASHQ_VISA = {
  messages: {
    noData: "للاستفسار عن سعر التأشيرة والمتطلبات، تواصل معنا",
    noPrice: "يرجى التواصل لمعرفة السعر",
    estimateNote: "السعر تقديري وقد يتغير حسب نوع التأشيرة والرسوم والخدمات المطلوبة. يرجى التواصل لتأكيد السعر النهائي.",
    nationality: "قد تختلف شروط التأشيرة وأسعارها حسب جنسية جواز السفر. يرجى تأكيد جنسية المسافر مع الشركة قبل الحجز."
  },
  contact: { tel: "+9647506622144" },
  currencyLabels: { USD: "$", IQD: "د.ع", EUR: "€", AED: "د.إ", TRY: "₺" },
  countries: {
    "ae": {
      "verified": "2026-10-01",
      "countryName": "الإمارات (دبي)",
      "visaType": "فيزا البالغ أقامه شهر غير متعدد",
      "price": { "amount": 90, "currency": "USD" },
      "duration": "30 يوم",
      "processing": "3 - 1 يوم عمل",
      "validity": "60 يوم",
      "documents": [
        "جواز سكنر",
        "صورة خلفية بيضاء دقة عالية",
        "الجنسيه العراقية او البطاقة الموحده",
        "غرامة التجاوز عن مدة الإقامة 2000 دولار"
      ],
      "options": [
        {
          "visaType": "فيزا الطفل أقامه شهر غير متعدد",
          "duration": "30 يوم",
          "price": { "amount": 45, "currency": "USD" }
        }
      ]
    },
    "jo": {
      "verified": "2026-10-01",
      "countryName": "الأردن",
      "visaType": "فيزه الاردن سياحي شهر غير متعددة",
      "price": { "amount": 25, "currency": "USD" },
      "duration": "30 يوم سفره وحده",
      "processing": "15 - 8 يوم عمل (الجمعه والسبت ويوم التقديم غير محسوب)",
      "validity": "90 يوم من تاريخ الإصدار",
      "documents": [
        "جواز سكنر - (مطلوب جواز الزوج/ه في حال كان المسافر/ه متزوج/ه)",
        "التقديم على النوع المتعدد (6 اشهر / سنة / 5 سنوات)",
        "الاصدار يكون حسب قرار السفارة ولا يشترط ان يصدر النوع المطلوب",
        "الأسعار غير شامل رسوم دخول الأردن"
      ],
      "options": [
        {
          "visaType": "فيزه الاردن سياحي شهر متعددة",
          "duration": "30 يوم سفره متعدد",
          "price": { "amount": 60, "currency": "USD" }
        },
        {
          "visaType": "فيزه الاردن سياحي 6 اشهر متعددة",
          "duration": "6 اشهر",
          "price": { "amount": 75, "currency": "USD" }
        },
        {
          "visaType": "فيزه الاردن سياحي سنه متعددة",
          "duration": "سنه متعدد",
          "price": { "amount": 100, "currency": "USD" }
        },
        {
          "visaType": "فيزه الاردن سياحي 5 سنوات متعددة",
          "duration": "5 سنوات متعدد",
          "price": { "amount": 150, "currency": "USD" }
        },
        {
          "visaType": "موافقه VIP",
          "duration": "30 يوم سفره وحده",
          "processing": "يكون اصدار الموافقه الامنيه VIP في اليوم الثاني عند الساعه 5 عصرا",
          "validity": "50 يوم من تاريخ الإصدار",
          "price": { "amount": 150, "currency": "USD" },
          "documents": ["جواز سكنر"]
        }
      ]
    },
    "eg": {
      "verified": "2026-10-01",
      "countryName": "مصر",
      "visaType": "موافقه الحربية البالغ (فوق 15 سنة - تحت 60 سنة)",
      "price": { "amount": 130, "currency": "USD" },
      "duration": "30 يوم سفره وحده",
      "processing": "2-1 أيام عمل",
      "validity": "30 يوم",
      "documents": ["جواز سكنر"],
      "options": [
        {
          "visaType": "موافقه الماستر البالغ (فوق 15 سنة - تحت 60 سنة)",
          "processing": "8-5 أيام عمل",
          "validity": "3 اشهر",
          "price": { "amount": 210, "currency": "USD" }
        },
        {
          "visaType": "موافقه (الطفل تحت 15 سنة والمسن فوق ال 60 سنة)",
          "processing": "5-3 أيام عمل",
          "price": { "amount": 45, "currency": "USD" }
        }
      ]
    },
    "om": {
      "verified": "2026-10-01",
      "countryName": "سلطنة عمان (مسقط)",
      "visaType": "سياحية 10 أيام",
      "price": { "amount": 30, "currency": "USD" },
      "duration": "10 أيام",
      "processing": "7 - 3 يوم عمل",
      "validity": "60 يوم",
      "documents": [
        "صورة شخصية",
        "جواز سكنر",
        "البطاقه الموحده",
        "ذكر اخر دوله سافر ألها",
        "غرامة التجاوز عن مدة الإقامة 5000$"
      ],
      "options": [
        {
          "visaType": "سياحية 30 يوم",
          "duration": "30 يوم",
          "price": { "amount": 75, "currency": "USD" }
        }
      ]
    },
    "th": {
      "verified": "2026-10-01",
      "countryName": "تايلند",
      "visaType": "سياحية",
      "price": { "amount": 75, "currency": "USD" },
      "duration": "30 يوم",
      "processing": "15 - 7 يوم عمل",
      "validity": "85 يوم",
      "documents": [
        "صورة شخصية",
        "جواز سكنر",
        "البطاقه الموحده",
        "كشف حساب اخر 3 اشهر"
      ]
    },
    "id": {
      "verified": "2026-10-01",
      "countryName": "إندونيسيا",
      "visaType": "سياحية",
      "price": { "amount": 100, "currency": "USD" },
      "duration": "أقامه 60 يوم",
      "processing": "15 - 7 يوم عمل",
      "validity": "60 يوم",
      "documents": ["صورة شخصية - جواز سكنر"]
    },
    "am": {
      "verified": "2026-10-01",
      "countryName": "أرمينيا",
      "visaType": "سياحية (21 يوم)",
      "price": { "amount": 20, "currency": "USD" },
      "duration": "أقامه 21 يوم",
      "processing": "15 - 7 أيام عمل",
      "validity": "90 يوم",
      "documents": [
        "صورة - جواز سكنر - كشف حساب - دعوة",
        "يفضل وجود أقامة شنكن",
        "المبلغ غير مسترجع في حالة الرفض"
      ],
      "options": [
        {
          "visaType": "سياحية (120 يوم)",
          "duration": "أقامه 120 يوم",
          "price": { "amount": 58, "currency": "USD" }
        }
      ]
    },
    "lk": {
      "verified": "2026-10-01",
      "countryName": "سريلانكا",
      "visaType": "سياحية",
      "price": { "amount": 100, "currency": "USD" },
      "duration": "الإقامة 30 يوم",
      "processing": "5 - 2 أيام عمل",
      "validity": "60 يوم",
      "documents": ["جواز سكنر - صوره شخصية خلفية بيضاء"]
    },
    "sg": {
      "verified": "2026-10-01",
      "countryName": "سنغافورة",
      "visaType": "سياحية",
      "price": { "amount": 110, "currency": "USD" },
      "duration": "الإقامة 30 يوم (دخول مزدوج)",
      "processing": "10 - 7 يوم عمل",
      "validity": "صلاحية 60 يوم",
      "documents": [
        "نسخة من جواز السفر",
        "صورة شخصية",
        "رسالة دعم الوظيفة (باللغة الإنجليزية)",
        "شهادة التخرج (باللغة الإنجليزية)"
      ]
    },
    "ge": {
      "verified": "2026-10-01",
      "countryName": "جورجيا",
      "visaType": "سياحية",
      "price": { "amount": 370, "currency": "USD" },
      "duration": "الإقامة 30 يوم",
      "processing": "15 - 10 يوم عمل",
      "validity": "90 يوم",
      "documents": ["جواز سكنر - صوره شخصية خلفية بيضاء"]
    },
    "tz": {
      "verified": "2026-10-01",
      "countryName": "تنزانيا",
      "visaType": "سياحية",
      "price": { "amount": 70, "currency": "USD" },
      "duration": "30 يوم",
      "processing": "اصدار خلال 30 - 40 يوم عمل",
      "validity": "90 يوم",
      "documents": [
        "صورة - جواز سكنر",
        "تحديد تاريخ السفر (الفيزا تكون فعالة من تاريخ المحدد للسفر)"
      ]
    },
    "kh": {
      "verified": "2026-10-01",
      "countryName": "كمبوديا",
      "visaType": "سياحية",
      "price": { "amount": 60, "currency": "USD" },
      "duration": "الاقامه 30 يوم",
      "processing": "الإصدار 5 أيام عمل",
      "validity": "90 يوم",
      "documents": [
        "صورة - جواز سكنر",
        "حساب بنك حركات اخر 3 اشهر",
        "حجز فندق - تذكره ذهاب و عوده"
      ]
    },
    "ma": {
      "verified": "2026-10-01",
      "countryName": "المغرب",
      "visaType": "سياحية (إصدار سريع)",
      "price": { "amount": 155, "currency": "USD" },
      "duration": "الاقامه 30 يوم",
      "processing": "الإصدار خلال 2 - 3 أيام",
      "validity": "صلاحية 60 يوم",
      "documents": [
        "جواز سكنر - صوره دقة عاليه",
        "الاقامه الاماراتيه سكنر وجه و ضهر وفيزا الاقامه الاماراتيه او فيزا شنكن متعدد او أقامه شنكن",
        "ملاحظه: يجب ان تكون صلاحية الاقامة المرفقة اكثر من 180 يوم ويجب ان تكون الفيزا المرفقة متعددة وصالحة اكثر من 90 يوم من تاريخ الدخول"
      ],
      "options": [
        {
          "visaType": "سياحية (إصدار عادي)",
          "processing": "الإصدار خلال 4 - 5 أيام",
          "price": { "amount": 130, "currency": "USD" }
        }
      ]
    },
    "bh": {
      "verified": "2026-10-01",
      "countryName": "البحرين",
      "visaType": "صلاحيه ثلاث اشهر متعدد",
      "price": { "amount": 70, "currency": "USD" },
      "duration": "متعدد كل سفره أقامة شهر",
      "processing": "3 - 1 يوم عمل",
      "validity": "90 يوم",
      "documents": [
        "جواز سكنر - صوره دقة عاليه",
        "الاقامه الاماراتيه سكنر وجه و ضهر او فيزا شنكن متعدد او أقامه شنكن"
      ],
      "options": [
        {
          "visaType": "صلاحيه سنه متعدد",
          "duration": "متعدد كل سفره أقامة شهر",
          "price": { "amount": 150, "currency": "USD" }
        }
      ]
    },
    "cn": {
      "verified": "2026-10-01",
      "countryName": "الصين",
      "visaType": "في حال وجود دعوة اصدار",
      "price": { "amount": 350, "currency": "USD" },
      "duration": "30 يوم",
      "processing": "من 8 الى 12 يوم عمل",
      "validity": "90 يوم",
      "documents": [
        "1- الجواز الأصلي",
        "2- صور عدد 2 خلفية بيضاء",
        "سكنر: بطاقة موحدة وبطاقة السكن",
        "لمن يملك دعوه: الدعوه الحكومية + المكتبية + الجدارية"
      ],
      "options": [
        {
          "visaType": "في حال وجود دخول سابق",
          "processing": "من 25 الى 30 يوم عمل",
          "price": { "amount": 1650, "currency": "USD" }
        },
        {
          "visaType": "في حال عدم وجود دخول سابق",
          "price": { "amount": 1950, "currency": "USD" }
        }
      ]
    },
    "tr": {
      "verified": "2026-10-01",
      "countryName": "تركيا",
      "visaType": "سياحية",
      "price": { "amount": 35, "currency": "USD" },
      "duration": "إقامة 30 يوم سفرة واحدة",
      "processing": "خلال 24 ساعة",
      "validity": "صلاحية 6 اشهر",
      "documents": [
        "1- جواز سكنر",
        "2- أقامة شنكن او إقامة الامريكية"
      ]
    },
    "sa": {
      "verified": "2026-10-01",
      "countryName": "السعودية",
      "visaType": "عمره (إقامة 10 أيام)",
      "price": { "amount": 158, "currency": "USD" },
      "duration": "إقامة 10 أيام",
      "processing": "5 - 1 يوم عمل",
      "validity": "سنه متعدد",
      "documents": ["جواز سكنر حصرا", "صورة شخصية"],
      "options": [
        {
          "visaType": "عمره (إقامة 15 يوم)",
          "duration": "إقامة 15 يوم",
          "price": { "amount": 165, "currency": "USD" }
        },
        {
          "visaType": "عمره (إقامة 20 يوم)",
          "duration": "إقامة 20 يوم",
          "price": { "amount": 177, "currency": "USD" }
        },
        {
          "visaType": "عمره (إقامة 30 يوم)",
          "duration": "إقامة 30 يوم",
          "price": { "amount": 199, "currency": "USD" }
        },
        {
          "visaType": "عمره (إقامة 85 يوم)",
          "duration": "إقامة 85 يوم",
          "processing": "7 - 1 يوم عمل",
          "price": { "amount": 250, "currency": "USD" }
        }
      ]
    }
  }
};
