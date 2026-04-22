const menuItems = [
  {
    id: "m1",
    category: "coffee",
    name: { en: "Spanish Latte", ar: "سبانش لاتيه" },
    description: {
      en: "Velvety espresso with sweet milk and caramel notes.",
      ar: "اسبريسو مخملي مع حليب محلى ولمسة كراميل.",
    },
    priceAED: 24,
    tags: ["Popular", "Bestseller"],
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m2",
    category: "coffee",
    name: { en: "Flat White", ar: "فلات وايت" },
    description: {
      en: "Double ristretto with micro-foamed milk.",
      ar: "دبل ريستريتو مع رغوة حليب ناعمة.",
    },
    priceAED: 22,
    tags: ["Chef's Choice"],
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m3",
    category: "coffee",
    name: { en: "Cappuccino", ar: "كابتشينو" },
    description: {
      en: "Balanced espresso, steamed milk, and rich foam.",
      ar: "اسبريسو متوازن مع حليب مبخر ورغوة غنية.",
    },
    priceAED: 21,
    tags: ["Popular"],
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m4",
    category: "breakfast",
    name: { en: "Avocado Toast", ar: "توست الأفوكادو" },
    description: {
      en: "Sourdough toast, smashed avocado, feta, and seeds.",
      ar: "خبز ساوردو مع أفوكادو مهروس وجبن فيتا وبذور.",
    },
    priceAED: 36,
    tags: ["Bestseller"],
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m5",
    category: "breakfast",
    name: { en: "French Toast", ar: "فرنش توست" },
    description: {
      en: "Brioche toast with berries, cream, and maple glaze.",
      ar: "خبز بريوش مع توت وكريمة وصوص القيقب.",
    },
    priceAED: 34,
    tags: ["Chef's Choice"],
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m6",
    category: "breakfast",
    name: { en: "Acai Bowl", ar: "وعاء الأساي" },
    description: {
      en: "Acai blend topped with granola, banana, and berries.",
      ar: "خليط أساي مع غرانولا وموز وتوت.",
    },
    priceAED: 33,
    tags: ["Popular"],
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m7",
    category: "desserts",
    name: { en: "Tiramisu", ar: "تيراميسو" },
    description: {
      en: "Classic Italian layered dessert with espresso cream.",
      ar: "حلى إيطالي كلاسيكي بطبقات وكريمة الاسبريسو.",
    },
    priceAED: 30,
    tags: ["Bestseller"],
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m8",
    category: "desserts",
    name: { en: "Dubai Chocolate Cake", ar: "كيك شوكولاتة دبي" },
    description: {
      en: "Dark cocoa sponge with ganache and pistachio crunch.",
      ar: "كيك كاكاو داكن مع جاناش وقرمشة فستق.",
    },
    priceAED: 38,
    tags: ["Popular", "Chef's Choice"],
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m9",
    category: "mocktails",
    name: { en: "Berry Mint Mojito", ar: "موهيتو التوت والنعناع" },
    description: {
      en: "Fresh berries, mint leaves, and sparkling citrus.",
      ar: "توت طازج وأوراق نعناع مع حمضيات فوارة.",
    },
    priceAED: 26,
    tags: ["Popular"],
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1551751299-1b51cab2694c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m10",
    category: "juices",
    name: { en: "Fresh Orange Juice", ar: "عصير برتقال طازج" },
    description: {
      en: "Cold-pressed orange juice served chilled.",
      ar: "عصير برتقال معصور على البارد يقدم باردا.",
    },
    priceAED: 19,
    tags: ["Bestseller"],
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "m11",
    category: "coffee",
    name: { en: "Matcha Latte", ar: "ماتشا لاتيه" },
    description: {
      en: "Ceremonial matcha whisked with silky milk.",
      ar: "ماتشا فاخرة مخفوقة مع حليب ناعم.",
    },
    priceAED: 27,
    tags: ["Chef's Choice"],
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80",
  },
];
