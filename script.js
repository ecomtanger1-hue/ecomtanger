let whatsappNumber = "212708012888";

const translations = {
  ar: {
    menuAria: "فتح القائمة",
    cartAria: "عرض السلة",
    closeCartAria: "إغلاق السلة",
    closeProductAria: "إغلاق المنتج",
    location: "طنجة اليوم",
    deliveryPill: "واتساب أو عند الاستلام",
    searchPlaceholder: "ابحث عن منتج",
    storefrontKicker: "اختيارات جاهزة للتوصيل",
    storefrontTitle: "تسوق منتجات TanjaMol",
    storefrontSubtitle: "منتجات عملية للبيت، الجمال، التقنية والمطبخ. أكد طلبك عبر واتساب وادفع عند الاستلام داخل طنجة.",
    storefrontOfferKicker: "عرض اليوم",
    storefrontOfferTitle: "اطلب الآن وخلّي التأكيد علينا",
    storefrontOfferAction: "شاهد المنتجات",
    shopByCategory: "تسوق حسب الفئة",
    shopByCategorySubtitle: "أو شاهد كل المنتجات في الأسفل",
    paymentWhatsAppTitle: "تأكيد عبر واتساب",
    paymentWhatsAppText: "تواصل معنا ونؤكد الطلب قبل الإرسال.",
    paymentCodTitle: "الدفع عند الاستلام",
    paymentCodText: "ادفع نقدا بعد توصل المنتج.",
    trustCodTitle: "الدفع عند الاستلام",
    trustCodText: "ادفع فقط بعد وصول الطلب.",
    trustDeliveryTitle: "توصيل طنجة",
    trustDeliveryText: "24-48 ساعة داخل المدينة.",
    trustConfirmTitle: "تأكيد سريع",
    trustConfirmText: "نراجع الطلب معك على واتساب.",
    tabAll: "الأكثر طلبا",
    tabHome: "المنزل",
    tabKitchen: "مطبخ",
    tabTech: "تقنية",
    tabBeauty: "جمال",
    newProducts: "منتجات جديدة",
    tangierDeals: "عروض طنجة",
    view: "عرض",
    viewAll: "عرض الكل",
    bestSellersSubtitle: "منتجات يطلبها الزبناء أكثر في طنجة هذا الأسبوع.",
    browseSubtitle: "اختر المنتج المناسب وأكد الطلب مباشرة عبر واتساب.",
    searchSubtitle: "نتائج مطابقة لما تبحث عنه.",
    newArrivals: "وصل حديثا",
    newArrivalsSubtitle: "منتجات جديدة أضفناها للمتجر مؤخرا.",
    todayOffers: "عروض اليوم",
    todayOffersSubtitle: "منتجات عليها تخفيض واضح لفترة محدودة.",
    categorySectionSubtitle: "اختيارات عملية جاهزة للطلب والتوصيل داخل طنجة.",
    badgeOffer: "عرض",
    badgeNew: "جديد",
    badgeBestSeller: "الأكثر طلبا",
    navHome: "الرئيسية",
    navShop: "المتجر",
    navCart: "السلة",
    navWhatsapp: "واتساب",
    cartEyebrow: "السلة",
    cartTitle: "طلبك",
    nameLabel: "الاسم الكامل",
    phoneLabel: "الهاتف",
    addressLabel: "الحي / المدينة",
    namePlaceholder: "اسمك",
    addressPlaceholder: "مثال: مالاباطا، طنجة",
    total: "المجموع",
    sendWhatsapp: "أكد الطلب عبر واتساب",
    checkoutNote: "الدفع عند الاستلام متاح. سنؤكد معك التفاصيل قبل الإرسال.",
    addPay: "أضف واطلب",
    delivery: "طنجة 24-48 ساعة",
    cod: "عند الاستلام",
    emptyCart: "السلة فارغة. أضف منتجا لإرسال الطلب عبر واتساب.",
    noProducts: "لم نجد أي منتج مطابق للبحث.",
    outOfStock: "غير متوفر حاليا",
    lowStock: "باقي عدد محدود",
    bestSellers: "الأكثر طلبا",
    homeSection: "منتجات المنزل",
    techSection: "تقنية واكسسوارات",
    beautySection: "جمال وعناية",
    qty: "الكمية",
    description: "الوصف",
    highlights: "المميزات",
    gallery: "صور المنتج",
    addToCart: "أضف إلى السلة",
    orderNow: "اطلب الآن",
    messageIntro: "سلام، أريد تأكيد هذا الطلب:",
    name: "الاسم",
    phone: "الهاتف",
    address: "العنوان",
    action: "طريقة الطلب",
    faqEyebrow: "أسئلة مهمة",
    faqTitle: "قبل أن تطلب",
    faqPaymentQ: "كيف يتم الدفع؟",
    faqPaymentA: "يمكنك تأكيد الطلب عبر واتساب أو الدفع نقدا عند الاستلام.",
    faqDeliveryQ: "كم يستغرق التوصيل في طنجة؟",
    faqDeliveryA: "غالبا بين 24 و48 ساعة حسب الحي وتوفر المنتج.",
    faqReturnQ: "هل يمكن الاستبدال؟",
    faqReturnA: "نراجع أي مشكل في الطلب عبر واتساب ونقترح الحل المناسب.",
    floatingWhatsapp: "مساعدة",
    floatingWhatsappAria: "مساعدة عبر واتساب",
    whatsappFallbackTitle: "لم يفتح واتساب؟",
    whatsappFallbackText: "اضغط الزر مرة أخرى لإرسال الطلب.",
    whatsappFallbackButton: "فتح واتساب",
    continueShopping: "متابعة التسوق",
  },
  fr: {
    menuAria: "Ouvrir le menu",
    cartAria: "Voir le panier",
    closeCartAria: "Fermer le panier",
    closeProductAria: "Fermer le produit",
    location: "Tanger aujourd'hui",
    deliveryPill: "WhatsApp ou livraison",
    searchPlaceholder: "Rechercher un produit",
    storefrontKicker: "Selections pretes a livrer",
    storefrontTitle: "Acheter les produits TanjaMol",
    storefrontSubtitle: "Produits pratiques pour la maison, beaute, tech et cuisine. Confirmez sur WhatsApp et payez a la livraison a Tanger.",
    storefrontOfferKicker: "Offre du jour",
    storefrontOfferTitle: "Commandez maintenant, on confirme avec vous",
    storefrontOfferAction: "Voir les produits",
    shopByCategory: "Shop par categorie",
    shopByCategorySubtitle: "Ou voyez tous les produits ci-dessous",
    paymentWhatsAppTitle: "Confirmation WhatsApp",
    paymentWhatsAppText: "Notre equipe confirme la commande avant l'envoi.",
    paymentCodTitle: "Paiement a la livraison",
    paymentCodText: "Reglez en cash apres reception.",
    trustCodTitle: "Paiement a la livraison",
    trustCodText: "Payez seulement a la reception.",
    trustDeliveryTitle: "Livraison Tanger",
    trustDeliveryText: "24-48h dans la ville.",
    trustConfirmTitle: "Confirmation rapide",
    trustConfirmText: "On verifie la commande sur WhatsApp.",
    tabAll: "Best sellers",
    tabHome: "Maison",
    tabKitchen: "Cuisine",
    tabTech: "Tech",
    tabBeauty: "Beaute",
    newProducts: "Nouveautes",
    tangierDeals: "Offres a Tanger",
    view: "Voir",
    viewAll: "Voir tout",
    bestSellersSubtitle: "Les produits les plus demandes a Tanger cette semaine.",
    browseSubtitle: "Choisissez le bon produit et confirmez directement via WhatsApp.",
    searchSubtitle: "Resultats correspondant a votre recherche.",
    newArrivals: "Nouveautes",
    newArrivalsSubtitle: "Produits ajoutes recemment a la boutique.",
    todayOffers: "Offres du jour",
    todayOffersSubtitle: "Produits avec une vraie reduction pour une duree limitee.",
    categorySectionSubtitle: "Selections pratiques, pretes a commander et livrer a Tanger.",
    badgeOffer: "Offre",
    badgeNew: "Nouveau",
    badgeBestSeller: "Populaire",
    navHome: "Home",
    navShop: "Shop",
    navCart: "Panier",
    navWhatsapp: "WhatsApp",
    cartEyebrow: "Panier",
    cartTitle: "Votre commande",
    nameLabel: "Nom complet",
    phoneLabel: "Telephone",
    addressLabel: "Quartier / ville",
    namePlaceholder: "Votre nom",
    addressPlaceholder: "Ex: Malabata, Tanger",
    total: "Total",
    sendWhatsapp: "Confirmer via WhatsApp",
    checkoutNote: "Le paiement a la livraison est disponible. On confirme les details avant l'envoi.",
    addPay: "Ajouter et commander",
    delivery: "Tanger 24-48h",
    cod: "COD",
    emptyCart: "Votre panier est vide. Ajoutez un produit pour commander par WhatsApp.",
    noProducts: "Aucun produit trouve pour cette recherche.",
    outOfStock: "Indisponible",
    lowStock: "Stock limite",
    bestSellers: "Best sellers",
    homeSection: "Maison",
    techSection: "Tech et accessoires",
    beautySection: "Beaute et soin",
    qty: "Quantite",
    description: "Description",
    highlights: "Points forts",
    gallery: "Images",
    addToCart: "Ajouter au panier",
    orderNow: "Commander maintenant",
    messageIntro: "Salam, je veux confirmer cette commande:",
    name: "Nom",
    phone: "Telephone",
    address: "Adresse",
    action: "Mode de commande",
    faqEyebrow: "Questions utiles",
    faqTitle: "Avant de commander",
    faqPaymentQ: "Comment se passe le paiement ?",
    faqPaymentA: "Vous pouvez confirmer via WhatsApp ou payer en cash a la livraison.",
    faqDeliveryQ: "Combien de temps pour livrer a Tanger ?",
    faqDeliveryA: "Generalement entre 24 et 48h selon le quartier et le stock.",
    faqReturnQ: "Est-ce qu'un echange est possible ?",
    faqReturnA: "On verifie tout probleme sur WhatsApp et on propose la meilleure solution.",
    floatingWhatsapp: "Aide",
    floatingWhatsappAria: "Aide WhatsApp",
    whatsappFallbackTitle: "WhatsApp ne s'est pas ouvert ?",
    whatsappFallbackText: "Appuyez encore une fois pour envoyer la commande.",
    whatsappFallbackButton: "Ouvrir WhatsApp",
    continueShopping: "Continuer mes achats",
  },
};

let products = [
  {
    id: 1,
    category: "Cuisine",
    price: 189,
    title: { ar: "خلاط صغير محمول", fr: "Mini blender portable" },
    description: {
      ar: "خلاط عملي للعصائر السريعة في البيت، العمل أو السفر. سهل الشحن والتنظيف ومناسب للاستعمال اليومي.",
      fr: "Un blender pratique pour les jus rapides a la maison, au bureau ou en deplacement. Rechargeable, compact et facile a nettoyer.",
    },
    highlights: {
      ar: ["بطارية قابلة للشحن", "حجم خفيف للحمل", "كوب مدمج للشرب"],
      fr: ["Batterie rechargeable", "Format leger", "Gobelet integre"],
    },
    images: [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622484211148-0eeabf46dc09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    category: "Maison",
    price: 129,
    title: { ar: "منظم منزلي قابل للطي", fr: "Organiseur maison pliable" },
    description: {
      ar: "حل بسيط لترتيب الملابس، الإكسسوارات أو أدوات المنزل بدون أخذ مساحة كبيرة.",
      fr: "Une solution simple pour organiser vetements, accessoires ou produits de maison sans prendre trop d'espace.",
    },
    highlights: {
      ar: ["قابل للطي", "مناسب للخزانة والرفوف", "سهل التنظيف"],
      fr: ["Pliable", "Ideal pour placards et etageres", "Facile a nettoyer"],
    },
    images: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    category: "Tech",
    price: 159,
    title: { ar: "سماعات بلوتوث صغيرة", fr: "Ecouteurs Bluetooth compact" },
    description: {
      ar: "سماعات لاسلكية للاستعمال اليومي مع علبة شحن صغيرة وصوت واضح للمكالمات والموسيقى.",
      fr: "Des ecouteurs sans fil pour le quotidien, avec boitier compact et son clair pour appels et musique.",
    },
    highlights: {
      ar: ["علبة شحن", "مناسبة للمكالمات", "تصميم خفيف"],
      fr: ["Boitier de charge", "Appels clairs", "Design leger"],
    },
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 4,
    category: "Beaute",
    price: 249,
    title: { ar: "فرشاة تصفيف 3 في 1", fr: "Brosse coiffante 3 en 1" },
    description: {
      ar: "فرشاة عملية لتجفيف وتصفيف الشعر بسرعة، مناسبة للاستعمال في البيت قبل الخروج.",
      fr: "Une brosse pratique pour secher et coiffer rapidement les cheveux a la maison.",
    },
    highlights: {
      ar: ["تصفيف سريع", "ثلاث وظائف", "مقبض مريح"],
      fr: ["Coiffage rapide", "Trois fonctions", "Poignee confortable"],
    },
    images: [
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 5,
    category: "Maison",
    price: 99,
    title: { ar: "مصباح LED قابل للشحن", fr: "Lampe LED rechargeable" },
    description: {
      ar: "مصباح خفيف للقراءة، المكتب أو غرفة النوم، يشتغل بالشحن ويعطي إضاءة ناعمة.",
      fr: "Une lampe legere pour la lecture, le bureau ou la chambre, rechargeable avec lumiere douce.",
    },
    highlights: {
      ar: ["إضاءة ناعمة", "قابل للشحن", "مناسب للمكتب"],
      fr: ["Lumiere douce", "Rechargeable", "Ideal bureau"],
    },
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 6,
    category: "Tech",
    price: 89,
    title: { ar: "حامل هاتف للسيارة", fr: "Support telephone voiture" },
    description: {
      ar: "حامل ثابت للهاتف داخل السيارة، يساعدك في استعمال الخرائط والمكالمات بدون إزعاج.",
      fr: "Un support stable pour utiliser le GPS et les appels en voiture plus confortablement.",
    },
    highlights: {
      ar: ["ثبات جيد", "دوران مرن", "مناسب لمعظم الهواتف"],
      fr: ["Bonne stabilite", "Rotation flexible", "Compatible avec la plupart des telephones"],
    },
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const cart = new Map();
let currentFilter = "all";
let currentSearch = "";
let currentLang = "ar";
let showAllProducts = false;
let storeSettings = {};
let storeCategories = [];
const publicStoreCacheKey = "casatanjaPublicStoreCache";

const productGrid = document.querySelector("[data-products]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartTotal = document.querySelector("[data-cart-total]");
const cartCounts = document.querySelectorAll("[data-cart-count]");
const checkoutForm = document.querySelector("[data-checkout-form]");
const searchInput = document.querySelector("#productSearch");
const langToggle = document.querySelector("[data-lang-toggle]");
const currentLangLabel = document.querySelector("[data-current-lang]");
const categorySections = document.querySelector("[data-category-sections]");
const categoryShowcase = document.querySelector("[data-category-showcase]");
const productsTitle = document.querySelector("[data-products-title]");
const productsSubtitle = document.querySelector("[data-products-subtitle]");
const viewAllButton = document.querySelector("[data-view-all]");
const publicStoreCacheMaxAgeMs = 10 * 60 * 1000;

const searchAliases = [
  ["حقيبة", "حقيبه", "شنطة", "شنطه", "bag", "sac"],
  ["خلاط", "blender", "mixer", "mixeur"],
  ["منظم", "ترتيب", "organizer", "organiseur", "rangement"],
  ["سماعات", "سماعة", "ecouteurs", "earbuds", "bluetooth"],
  ["مصباح", "لامبة", "lamp", "lampe", "led"],
  ["مطبخ", "cuisine", "kitchen"],
  ["منزل", "maison", "home"],
  ["تقنية", "tech", "accessoires"],
  ["جمال", "beaute", "beauty", "soin"],
];

function applyStore(store) {
  if (!store) return;
  if (Array.isArray(store.products) && store.products.length) {
    products = (store.products || []).filter((product) => product.active !== false);
  }
  storeCategories = Array.isArray(store.categories) ? store.categories.filter((category) => category.active !== false) : storeCategories;
  storeSettings = store.settings || storeSettings || {};
  whatsappNumber = storeSettings.whatsappNumber || whatsappNumber;
}

function readCachedPublicStore() {
  try {
    const cached = JSON.parse(localStorage.getItem(publicStoreCacheKey) || "null");
    if (!cached?.savedAt || Date.now() - Number(cached.savedAt) > publicStoreCacheMaxAgeMs) {
      localStorage.removeItem(publicStoreCacheKey);
      return null;
    }
    return cached?.store || null;
  } catch (error) {
    localStorage.removeItem(publicStoreCacheKey);
    return null;
  }
}

function cachePublicStore(store) {
  try {
    localStorage.setItem(publicStoreCacheKey, JSON.stringify({ savedAt: Date.now(), store }));
  } catch (error) {
    // Storage can fail in private browsing; the live store still works.
  }
}

let motionObserver = null;
let motionRefreshTimer = null;
const motionRevealSelector = [
  ".category-card",
  ".product-card",
  ".category-block",
  ".pay-method",
  ".faq-section",
].join(", ");

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function motionRevealObserver() {
  if (prefersReducedMotion()) return null;
  if (motionObserver) return motionObserver;
  motionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        motionObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  return motionObserver;
}

function applyMotionReveal(root = document) {
  if (prefersReducedMotion()) return;
  const observer = motionRevealObserver();
  if (!observer) return;
  root.querySelectorAll(motionRevealSelector).forEach((node, index) => {
    if (node.dataset.motionObserved) return;
    node.dataset.motionObserved = "true";
    node.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
    node.classList.add("motion-reveal");
    observer.observe(node);
  });
}

function scheduleMotionReveal() {
  window.clearTimeout(motionRefreshTimer);
  motionRefreshTimer = window.setTimeout(() => applyMotionReveal(), 0);
}

async function loadBackendStore() {
  try {
    const store = await StoreBackend.getPublicStore();
    applyStore(store);
    cachePublicStore(store);
    return true;
  } catch (error) {
    // File previews and GitHub Pages use the bundled fallback products.
    return false;
  }
}

function t(key) {
  return translations[currentLang][key] || key;
}

function trackEvent(event, payload = {}) {
  const record = { event, ...payload, createdAt: new Date().toISOString() };
  const localEvents = JSON.parse(localStorage.getItem("storeAnalytics") || "[]");
  localEvents.unshift(record);
  localStorage.setItem("storeAnalytics", JSON.stringify(localEvents.slice(0, 200)));
  StoreBackend.trackEvent(event, payload).catch(() => {});
}

function money(value) {
  return `${value} MAD`;
}

function localText(value) {
  return typeof value === "string" ? value : value?.[currentLang] || value?.ar || value?.fr || "";
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[إأآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[ؤ]/g, "و")
    .replace(/[ئ]/g, "ي")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function textValues(value) {
  if (!value) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(textValues);
  if (typeof value === "object") return Object.values(value).flatMap(textValues);
  return [String(value)];
}

function expandedSearchTerms(query) {
  const normalized = normalizeSearchText(query);
  if (!normalized) return [];
  const terms = new Set([normalized]);
  searchAliases.forEach((group) => {
    const normalizedGroup = group.map(normalizeSearchText);
    if (normalizedGroup.some((term) => term.includes(normalized) || normalized.includes(term))) {
      normalizedGroup.forEach((term) => terms.add(term));
    }
  });
  return [...terms].filter(Boolean);
}

function searchableProductText(product) {
  return normalizeSearchText(
    [
      ...textValues(product.title),
      ...textValues(product.description),
      ...textValues(product.highlights),
      ...textValues(product.box),
      product.sku,
      product.category,
      categoryLabel(product.category),
    ].join(" "),
  );
}

function categoryLabel(category) {
  const storedCategory = storeCategories.find((item) => item.id === category);
  if (storedCategory) return localText(storedCategory.title) || storedCategory.id;
  const labels = {
    Cuisine: { ar: "مطبخ", fr: "Cuisine" },
    Maison: { ar: "المنزل", fr: "Maison" },
    Tech: { ar: "تقنية", fr: "Tech" },
    Beaute: { ar: "جمال", fr: "Beaute" },
  };
  return labels[category]?.[currentLang] || category;
}

function categoryImage(category) {
  return storeCategories.find((item) => item.id === category)?.imageUrl || "";
}

function firstProductImage(product) {
  return Array.isArray(product.images) ? product.images.find(Boolean) : "";
}

function discountPercent(product) {
  if (!product.oldPrice || Number(product.oldPrice) <= Number(product.price)) return null;
  return Math.round(((Number(product.oldPrice) - Number(product.price)) / Number(product.oldPrice)) * 100);
}

function productImageMarkup(product) {
  const image = firstProductImage(product);
  if (!image) {
    return `<div class="product-image-placeholder">${localText(product.title)}</div>`;
  }
  return `<img src="${image}" alt="${localText(product.title)}" loading="lazy" />`;
}

function productHasDiscount(product) {
  return Number(product.oldPrice || 0) > Number(product.price || 0);
}

function numericSignal(...values) {
  for (const value of values) {
    const direct = Number(value);
    if (Number.isFinite(direct) && direct > 0) return direct;
    const match = String(localText(value) || value || "").match(/\d+/);
    if (match) return Number(match[0]);
  }
  return 0;
}

function productPopularityScore(product) {
  return numericSignal(product.socialProofCount, product.socialProof, product.reviewCount, product.ratingCount) || Number(product.id || 0);
}

function bestSellerProducts(items) {
  return [...items].sort((a, b) => productPopularityScore(b) - productPopularityScore(a));
}

function newestProducts(items) {
  return [...items].sort((a, b) => Number(b.id || 0) - Number(a.id || 0));
}

function productBadge(product, preferredType = "") {
  const limited = Number(product.stock || 0) > 0 && Number(product.stock || 0) <= 5;
  if (limited) return { label: t("lowStock"), tone: "low" };
  if (preferredType === "offer" && productHasDiscount(product)) return { label: t("badgeOffer"), tone: "offer" };
  if (preferredType === "new") return { label: t("badgeNew"), tone: "new" };
  if (preferredType === "best") return { label: t("badgeBestSeller"), tone: "best" };
  if (productHasDiscount(product)) return { label: t("badgeOffer"), tone: "offer" };
  return { label: t("cod"), tone: "cod" };
}

function productPriceMarkup(product) {
  const discount = discountPercent(product);
  const oldPrice = productHasDiscount(product) ? Number(product.oldPrice) : null;
  return `
    <div class="product-price-line">
      <strong class="price">${money(product.price)}</strong>
      ${oldPrice ? `<span class="card-old-price">${money(oldPrice)}</span>` : ""}
      ${discount ? `<span class="card-discount">-${discount}%</span>` : ""}
    </div>
  `;
}

function shortProductDescription(product) {
  const text = localText(product.box?.summary) || localText(product.description);
  const clean = String(text || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  return clean.length > 112 ? `${clean.slice(0, 109).trim()}...` : clean;
}

function renderLoadingProducts() {
  const skeletonCards = Array.from({ length: 4 }, (_, index) => `
    <article class="product-card product-card-skeleton" aria-hidden="true" style="--skeleton-delay: ${index * 85}ms">
      <div class="product-image skeleton-block"></div>
      <div class="product-info">
        <div class="skeleton-line skeleton-title"></div>
        <div class="skeleton-line skeleton-price"></div>
        <div class="skeleton-line skeleton-note"></div>
        <div class="skeleton-button"></div>
      </div>
    </article>
  `).join("");
  if (productGrid) productGrid.innerHTML = skeletonCards;
  if (categorySections) {
    categorySections.innerHTML = `
      <section class="category-block category-block-skeleton" aria-hidden="true">
        <div class="section-heading">
          <div>
            <div class="skeleton-line skeleton-heading"></div>
            <div class="skeleton-line skeleton-subheading"></div>
          </div>
        </div>
        <div class="product-grid category-grid">${skeletonCards}</div>
      </section>
    `;
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("storeLanguage", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("is-rtl", lang === "ar");
  currentLangLabel.textContent = lang.toUpperCase();
  langToggle.querySelector("small").textContent = lang === "ar" ? "FR" : "AR";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
  renderCategoryShowcase();
  updateFilterControls();
  renderProducts();
  renderCategorySections();
  renderCart();
  scheduleMotionReveal();
}

function visibleProducts() {
  const terms = expandedSearchTerms(currentSearch);
  return products.filter((product) => {
    if (product.active === false) return false;
    const matchesFilter = currentFilter === "all" || product.category === currentFilter;
    const searchText = searchableProductText(product);
    const matchesSearch = !terms.length || terms.some((term) => searchText.includes(term));
    return matchesFilter && matchesSearch;
  });
}

function renderCategoryShowcase() {
  if (!categoryShowcase) return;
  const activeProducts = products.filter((product) => product.active !== false);
  const categoryNames = [
    ...storeCategories.map((category) => category.id),
    ...activeProducts.map((product) => product.category).filter(Boolean),
  ].filter((category, index, list) => category && list.indexOf(category) === index);
  const categories = [
    { category: "all", product: activeProducts[0], count: activeProducts.length, label: t("tabAll") },
    ...categoryNames
    .map((category) => {
      const items = products.filter((product) => product.active !== false && product.category === category);
      if (!items.length && !categoryImage(category)) return null;
      return { category, product: items[0], count: items.length, label: categoryLabel(category) };
    })
    .filter(Boolean),
  ].filter((item) => item.product);

  categoryShowcase.innerHTML = categories
    .map(({ category, product, label }) => {
      const image = categoryImage(category) || firstProductImage(product || {});
      return `
        <button class="category-card" type="button" data-filter="${category}">
          <span class="category-card-image">${image ? `<img src="${image}" alt="${label}" loading="lazy" />` : ""}</span>
          <strong>${label}</strong>
        </button>
      `;
    })
    .join("");
  scheduleMotionReveal();
}

function updateFilterControls() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === currentFilter);
  });
}

function renderProducts() {
  const items = visibleProducts();
  const isSearching = Boolean(currentSearch.trim());
  const isFiltered = currentFilter !== "all";
  const isExpandedBestSellers = showAllProducts && !isFiltered && !isSearching;
  const isBrowsing = isFiltered || isSearching;
  const displayItems = isExpandedBestSellers
    ? bestSellerProducts(items)
    : isBrowsing
      ? items
      : bestSellerProducts(items).slice(0, 4);
  if (productsTitle) {
    productsTitle.textContent = isFiltered ? categoryLabel(currentFilter) : isSearching ? t("tangierDeals") : t("tabAll");
  }
  if (productsSubtitle) {
    productsSubtitle.textContent = isSearching
      ? t("searchSubtitle")
      : isFiltered
        ? t("browseSubtitle")
        : t("bestSellersSubtitle");
  }
  if (viewAllButton) {
    viewAllButton.hidden = isExpandedBestSellers || isBrowsing || items.length <= 4;
    viewAllButton.textContent = t("viewAll");
  }

  productGrid.innerHTML = displayItems
    .map((product) => productCard(product, { badgeType: isBrowsing ? "" : "best" }))
    .join("");

  if (!displayItems.length) {
    productGrid.innerHTML = `<p class="empty-cart">${t("noProducts")}</p>`;
  }
  scheduleMotionReveal();
}

function productCard(product, options = {}) {
  const badge = productBadge(product, options.badgeType);
  const description = shortProductDescription(product);
  return `
    <article class="product-card compact-card store-product-card" data-product="${product.id}" tabindex="0" role="button" aria-label="${localText(product.title)}">
      <div class="product-image">
        ${productImageMarkup(product)}
        <span class="badge badge-${badge.tone}">${badge.label}</span>
      </div>
      <div class="product-info">
        <h3 class="product-title">${localText(product.title)}</h3>
        ${description ? `<p class="product-card-desc">${escapeHtml(description)}</p>` : ""}
        <div class="product-card-footer">
          <div class="product-meta">
            ${productPriceMarkup(product)}
          </div>
          <button class="add-button" type="button" data-add="${product.id}">${t("addPay")}</button>
        </div>
      </div>
    </article>
  `;
}

function renderCategorySections() {
  if (currentFilter !== "all" || currentSearch.trim()) {
    categorySections.innerHTML = "";
    return;
  }
  const activeProducts = products.filter((product) => product.active !== false);
  const categoryNames = [
    ...storeCategories.map((category) => category.id),
    ...activeProducts.map((product) => product.category).filter(Boolean),
  ].filter((category, index, list) => category && list.indexOf(category) === index);
  const newestItems = newestProducts(activeProducts).slice(0, 4);
  const offerItems = activeProducts.filter(productHasDiscount).slice(0, 4);
  const sections = [
    { title: t("newArrivals"), subtitle: t("newArrivalsSubtitle"), items: newestItems, badgeType: "new" },
    offerItems.length ? { title: t("todayOffers"), subtitle: t("todayOffersSubtitle"), items: offerItems, badgeType: "offer" } : null,
    ...categoryNames
      .map((category) => {
        const items = products.filter((product) => product.active !== false && product.category === category);
        if (items.length < 3) return null;
        return { title: categoryLabel(category), subtitle: t("categorySectionSubtitle"), category, items: items.slice(0, 4) };
      })
      .filter(Boolean),
  ].filter(Boolean);

  categorySections.innerHTML = sections
    .map((section) => {
      const items = section.items || [];
      if (!items.length) return "";
      return `
        <section class="category-block">
          <div class="section-heading">
            <div>
              <h2>${section.title}</h2>
              <p>${section.subtitle || ""}</p>
            </div>
            ${section.category ? `<button class="text-button" type="button" data-filter="${section.category}">${t("viewAll")}</button>` : ""}
          </div>
          <div class="product-grid category-grid">${items.map((product) => productCard(product, { badgeType: section.badgeType || "" })).join("")}</div>
        </section>
      `;
    })
    .join("");
  scheduleMotionReveal();
}

function cartSummary() {
  const entries = [...cart.values()];
  const count = entries.reduce((sum, item) => sum + item.qty, 0);
  const total = entries.reduce((sum, item) => sum + item.qty * item.price, 0);
  return { entries, count, total };
}

function renderCart() {
  const { entries, count, total } = cartSummary();

  cartCounts.forEach((node) => {
    node.textContent = count;
  });

  cartTotal.textContent = money(total);

  if (!entries.length) {
    cartItems.innerHTML = `<p class="empty-cart">${t("emptyCart")}</p>`;
    return;
  }

  cartItems.innerHTML = entries
    .map(
      (item) => `
        <article class="cart-item">
          ${productImageMarkup(item)}
          <div>
            <h3>${localText(item.title)}</h3>
            <span>${money(item.price)} x ${item.qty}</span>
          </div>
          <div class="qty-control" aria-label="${t("qty")} ${localText(item.title)}">
            <button type="button" data-dec="${item.id}" aria-label="-">-</button>
            <strong>${item.qty}</strong>
            <button type="button" data-inc="${item.id}" aria-label="+">+</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function persistCart() {
  localStorage.setItem("storeCart", JSON.stringify([...cart.values()]));
}

function restoreCart() {
  try {
    const items = JSON.parse(localStorage.getItem("storeCart") || "[]");
    items.forEach((item) => cart.set(item.id, item));
  } catch (error) {
    localStorage.removeItem("storeCart");
  }
}

function openProduct(id) {
  trackEvent("product_click", { productId: Number(id) });
  window.location.href = `product.html?id=${id}`;
}

function closeProduct() {
  document.body.style.overflow = cartDrawer.classList.contains("open") ? "hidden" : "";
}

function addToCart(id, shouldOpenCart = true) {
  const product = products.find((item) => item.id === Number(id));
  if (!product) return;

  const existing = cart.get(product.id);
  cart.set(product.id, { ...product, qty: existing ? existing.qty + 1 : 1 });
  trackEvent("add_to_cart", { productId: product.id, qty: existing ? existing.qty + 1 : 1 });
  persistCart();
  renderCart();
  if (shouldOpenCart) openCart();
}

function updateQty(id, delta) {
  const item = cart.get(Number(id));
  if (!item) return;

  const nextQty = item.qty + delta;
  if (nextQty <= 0) {
    cart.delete(item.id);
  } else {
    cart.set(item.id, { ...item, qty: nextQty });
  }

  persistCart();
  renderCart();
}

function openCart() {
  cartDrawer.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("open");
  document.body.style.overflow = "";
}

function buildWhatsAppMessage(formData) {
  const { entries, total } = cartSummary();
  const lines = entries.map((item) => `- ${localText(item.title)} x${item.qty}: ${money(item.price * item.qty)}`);

  return [
    t("messageIntro"),
    ...lines,
    `${t("total")}: ${money(total)}`,
    "",
    `${t("name")}: ${formData.get("name")}`,
    `${t("phone")}: ${formData.get("phone")}`,
    `${t("address")}: ${formData.get("address")}`,
  ].join("\n");
}

async function saveOrder(formData) {
  const { entries, total } = cartSummary();
  if (!entries.length) return null;

  try {
    return await StoreBackend.createOrder({
      customer: {
        name: formData.get("name"),
        phone: formData.get("phone"),
        address: formData.get("address"),
      },
      items: entries.map((item) => ({
        id: item.id,
        sku: item.sku,
        title: item.title,
        qty: item.qty,
        price: item.price,
      })),
      total,
      source: "storefront_whatsapp",
    });
  } catch (error) {
    return null;
  }
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const incButton = event.target.closest("[data-inc]");
  const decButton = event.target.closest("[data-dec]");
  const openButton = event.target.closest(".cart-button, .nav-cart");
  const closeButton = event.target.closest("[data-close-cart]");
  const closeProductButton = event.target.closest("[data-close-product]");
  const filterButton = event.target.closest("[data-filter]");
  const viewAll = event.target.closest("[data-view-all]");
  const productCard = event.target.closest("[data-product]");

  if (addButton) {
    addButton.classList.remove("just-added");
    void addButton.offsetWidth;
    addButton.classList.add("just-added");
    window.setTimeout(() => addButton.classList.remove("just-added"), 460);
    addToCart(addButton.dataset.add);
    return;
  }
  if (incButton) updateQty(incButton.dataset.inc, 1);
  if (decButton) updateQty(decButton.dataset.dec, -1);
  if (openButton) openCart();
  if (closeButton) closeCart();
  if (closeProductButton) closeProduct();
  if (productCard && !event.target.closest("button")) {
    openProduct(productCard.dataset.product);
  }

  if (viewAll) {
    showAllProducts = true;
    currentFilter = "all";
    currentSearch = "";
    searchInput.value = "";
    updateFilterControls();
    renderProducts();
    renderCategorySections();
  }

  if (filterButton) {
    currentFilter = filterButton.dataset.filter;
    showAllProducts = filterButton.dataset.filter === "all" ? true : showAllProducts;
    updateFilterControls();
    renderProducts();
    renderCategorySections();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closeProduct();
  }

  if (event.key === "Enter") {
    const productCard = event.target.closest("[data-product]");
    if (productCard) openProduct(productCard.dataset.product);
  }
});

searchInput.addEventListener("input", (event) => {
  currentSearch = event.target.value;
  showAllProducts = Boolean(currentSearch.trim());
  renderProducts();
  renderCategorySections();
});

langToggle.addEventListener("click", () => {
  setLanguage(currentLang === "ar" ? "fr" : "ar");
});

checkoutForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { count } = cartSummary();
  if (!count) {
    openCart();
    return;
  }

  const formData = new FormData(checkoutForm);
  const submitButton = checkoutForm.querySelector(".whatsapp-checkout");
  submitButton?.classList.add("is-loading");
  trackEvent("checkout_submit", { itemCount: cartSummary().count, total: cartSummary().total });
  await saveOrder(formData);
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(formData))}`;
  trackEvent("whatsapp_redirect", { itemCount: cartSummary().count, total: cartSummary().total });
  window.location.href = url;
});

async function initStorefront() {
  restoreCart();
  const cachedStore = readCachedPublicStore();
  applyStore(cachedStore);
  setLanguage(localStorage.getItem("storeLanguage") || "ar");
  updateFilterControls();
  if (!cachedStore) renderLoadingProducts();
  const loaded = await loadBackendStore();
  if (loaded || !cachedStore) {
    setLanguage(currentLang);
    updateFilterControls();
  }
}

initStorefront();

