let whatsappNumber = "212708012888";

const translations = {
  ar: {
    backAria: "العودة إلى المنتجات",
    delivery: "طنجة 24-48 ساعة",
    cod: "الدفع عند الاستلام",
    description: "الوصف",
    highlights: "المميزات",
    orderTitle: "أكد طلبك عبر واتساب",
    nameLabel: "الاسم الكامل",
    phoneLabel: "الهاتف",
    addressLabel: "الحي / المدينة",
    namePlaceholder: "اسمك",
    addressPlaceholder: "مثال: مالاباطا، طنجة",
    qtyLabel: "الكمية",
    variantLabel: "الخيار",
    outOfStock: "غير متوفر حاليا",
    lowStock: "باقي عدد محدود",
    whatsInBox: "ماذا يوجد في العلبة",
    deliveryReturns: "التوصيل والاستبدال",
    howToOrder: "كيف تطلب",
    relatedProducts: "منتجات مشابهة",
    bestOffers: "أفضل العروض",
    discountBadge: "تخفيض",
    orderSummary: "طلب سريع",
    checkoutHeading: "اطلب الآن",
    estimatedTotal: "المجموع التقريبي",
    totalNote: "بدون مصاريف مخفية. نؤكد التفاصيل عبر واتساب قبل الإرسال.",
    deliveryPromise: "توصيل طنجة 24-48 ساعة",
    paymentPromise: "الدفع عند الاستلام",
    supportPromise: "تأكيد ومتابعة عبر واتساب",
    limitedOffer: "عرض محدود مع الدفع عند الاستلام",
    deliveryCityTitle: "توصيل داخل طنجة",
    deliveryCityText: "توصيل سريع وآمن إلى العنوان المحدد.",
    deliveryMoroccoTitle: "قريبا في مدن أخرى",
    deliveryMoroccoText: "نبدأ بطنجة ثم نوسع التوصيل لباقي المغرب.",
    easyReturnTitle: "استبدال سهل",
    easyReturnText: "أي مشكل في الطلب نراجعه معك عبر واتساب.",
    repeatCtaTitle: "جاهز تطلب هذا المنتج؟",
    repeatCtaText: "املأ معلوماتك في نموذج الطلب وسنؤكد معك التفاصيل عبر واتساب قبل الإرسال.",
    technicalSheet: "معلومات المنتج",
    specCategory: "الفئة",
    specStock: "المخزون",
    specDelivery: "التوصيل",
    boxDefault: "المنتج، التغليف، وأي ملحقات موضحة في الصور.",
    deliveryReturnsText: "التوصيل في طنجة خلال 24-48 ساعة. الدفع عند الاستلام متاح، ونراجع أي مشكل عبر واتساب.",
    howToOrderText: "اختر الكمية أو الخيار المناسب، املأ معلوماتك، ثم أكد الطلب عبر واتساب.",
    sectionDescription: "الوصف",
    sectionSpecs: "المعلومات",
    sectionDelivery: "التوصيل",
    sectionRelated: "مشابهة",
    fullscreenImage: "عرض الصورة",
    ratingReviews: "({count} تقييم)",
    availableStock: "المخزون متوفر",
    sendWhatsapp: "أكد الطلب عبر واتساب",
    note: "الدفع عند الاستلام متاح. سنؤكد معك التفاصيل قبل الإرسال.",
    missing: "لم نجد هذا المنتج.",
    backProducts: "العودة للمنتجات",
    total: "المجموع",
    messageIntro: "سلام، أريد تأكيد هذا الطلب:",
    name: "الاسم",
    phone: "الهاتف",
    address: "العنوان",
    variant: "الخيار",
  },
  fr: {
    backAria: "Retour aux produits",
    delivery: "Tanger 24-48h",
    cod: "Paiement a la livraison",
    description: "Description",
    highlights: "Points forts",
    orderTitle: "Confirmez via WhatsApp",
    nameLabel: "Nom complet",
    phoneLabel: "Telephone",
    addressLabel: "Quartier / ville",
    namePlaceholder: "Votre nom",
    addressPlaceholder: "Ex: Malabata, Tanger",
    qtyLabel: "Quantite",
    variantLabel: "Option",
    outOfStock: "Indisponible",
    lowStock: "Stock limite",
    whatsInBox: "Dans la boite",
    deliveryReturns: "Livraison et retours",
    howToOrder: "Comment commander",
    relatedProducts: "Produits similaires",
    bestOffers: "Meilleures offres",
    discountBadge: "Promo",
    orderSummary: "Commande rapide",
    checkoutHeading: "Commander",
    estimatedTotal: "Total estime",
    totalNote: "Sans frais caches. On confirme les details sur WhatsApp avant l'envoi.",
    deliveryPromise: "Livraison Tanger 24-48h",
    paymentPromise: "Paiement a la livraison",
    supportPromise: "Confirmation et suivi WhatsApp",
    limitedOffer: "Offre limitee avec paiement a la livraison",
    deliveryCityTitle: "Livraison a Tanger",
    deliveryCityText: "Livraison rapide et securisee a l'adresse indiquee.",
    deliveryMoroccoTitle: "Bientot dans d'autres villes",
    deliveryMoroccoText: "On commence par Tanger puis on etend au Maroc.",
    easyReturnTitle: "Echange facile",
    easyReturnText: "Tout probleme est traite avec vous sur WhatsApp.",
    repeatCtaTitle: "Pret a commander ce produit ?",
    repeatCtaText: "Remplissez le formulaire, puis on confirme les details sur WhatsApp avant l'envoi.",
    technicalSheet: "Fiche produit",
    specCategory: "Categorie",
    specStock: "Stock",
    specDelivery: "Livraison",
    boxDefault: "Le produit, son emballage, et les accessoires visibles sur les photos.",
    deliveryReturnsText: "Livraison a Tanger sous 24-48h. Paiement a la livraison disponible, probleme traite sur WhatsApp.",
    howToOrderText: "Choisissez la quantite ou l'option, renseignez vos infos, puis confirmez via WhatsApp.",
    sectionDescription: "Description",
    sectionSpecs: "Infos",
    sectionDelivery: "Livraison",
    sectionRelated: "Similaires",
    fullscreenImage: "Voir l'image",
    ratingReviews: "({count} avis)",
    availableStock: "Stock disponible",
    sendWhatsapp: "Confirmer via WhatsApp",
    note: "Le paiement a la livraison est disponible. On confirme les details avant l'envoi.",
    missing: "Produit introuvable.",
    backProducts: "Retour aux produits",
    total: "Total",
    messageIntro: "Salam, je veux confirmer cette commande:",
    name: "Nom",
    phone: "Telephone",
    address: "Adresse",
    variant: "Option",
  },
};

let products = [
  {
    id: 1,
    category: { ar: "مطبخ", fr: "Cuisine" },
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
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1622484211148-0eeabf46dc09?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 2,
    category: { ar: "المنزل", fr: "Maison" },
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
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 3,
    category: { ar: "تقنية", fr: "Tech" },
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
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 4,
    category: { ar: "جمال", fr: "Beaute" },
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
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 5,
    category: { ar: "المنزل", fr: "Maison" },
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
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 6,
    category: { ar: "تقنية", fr: "Tech" },
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
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

let currentLang = localStorage.getItem("storeLanguage") || "ar";
let storeSettings = {};
const publicStoreCacheKey = "casatanjaPublicStoreCache";
const publicStoreCacheMaxAgeMs = 10 * 60 * 1000;
const page = document.querySelector("[data-product-page]");
const langToggle = document.querySelector("[data-lang-toggle]");
const currentLangLabel = document.querySelector("[data-current-lang]");

function t(key) {
  return translations[currentLang][key] || key;
}

function interpolate(template, values) {
  return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);
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

function productId() {
  return Number(new URLSearchParams(window.location.search).get("id")) || 1;
}

function localText(value) {
  if (typeof value === "string") return value;
  return value?.[currentLang] ?? value?.ar ?? value?.fr ?? "";
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hasRichHtml(value) {
  return /<\/?[a-z][\s\S]*>/i.test(String(value || ""));
}

function cleanStyle(value) {
  return String(value || "")
    .split(";")
    .map((rule) => rule.trim())
    .filter((rule) => /^(text-align|direction|color|background-color)\s*:/i.test(rule))
    .join("; ");
}

function sanitizeRichHtml(value) {
  const html = String(value || "");
  if (!hasRichHtml(html)) {
    return html
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph) => `<p>${escapeHtml(paragraph).replaceAll("\n", "<br>")}</p>`)
      .join("");
  }

  const allowedTags = new Set(["P", "BR", "STRONG", "B", "EM", "I", "U", "S", "H2", "H3", "UL", "OL", "LI", "A", "IMG", "TABLE", "TBODY", "THEAD", "TR", "TD", "TH", "HR", "CODE", "SPAN", "DIV", "FONT"]);
  const doc = new DOMParser().parseFromString(html, "text/html");
  doc.body.querySelectorAll("*").forEach((node) => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(...node.childNodes);
      return;
    }

    [...node.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase();
      const value = attr.value;
      const keep =
        (node.tagName === "A" && ["href", "target", "rel"].includes(name)) ||
        (node.tagName === "IMG" && ["src", "alt"].includes(name)) ||
        ["dir", "style", "color", "size", "class"].includes(name);
      if (!keep) node.removeAttribute(attr.name);
      if (name === "class" && value !== "description-spacer") node.removeAttribute(attr.name);
      if (name === "href" && !/^(https?:|mailto:|tel:|#)/i.test(value)) node.removeAttribute(attr.name);
      if (name === "src" && !/^(https?:|data:image\/)/i.test(value)) node.removeAttribute(attr.name);
      if (name === "style") {
        const clean = cleanStyle(value);
        if (clean) node.setAttribute("style", clean);
        else node.removeAttribute(attr.name);
      }
    });

    if (node.tagName === "A") {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    }
  });

  return doc.body.innerHTML;
}

function richDescriptionMarkup(product) {
  return sanitizeRichHtml(localText(product.description));
}

function plainDescription(product) {
  const doc = new DOMParser().parseFromString(localText(product.description), "text/html");
  const text = (doc.body.textContent || localText(product.description) || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.length > 210 ? `${text.slice(0, 207).trim()}...` : text;
}

function productSummary(product) {
  const summary = localText(product.box?.summary);
  return summary || plainDescription(product);
}

function productBoxText(product) {
  return localText(product.box) || t("boxDefault");
}

function productSpecs(product) {
  return Array.isArray(product.box?.specs)
    ? product.box.specs.filter((spec) => spec?.label || spec?.value)
    : [];
}

function setMetaTag(selector, attrs) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    Object.entries(attrs.key || {}).forEach(([name, value]) => node.setAttribute(name, value));
    document.head.appendChild(node);
  }
  Object.entries(attrs.values || {}).forEach(([name, value]) => node.setAttribute(name, value));
}

function setLinkTag(selector, attrs) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("link");
    document.head.appendChild(node);
  }
  Object.entries(attrs).forEach(([name, value]) => node.setAttribute(name, value));
}

function updateProductMeta(product, soldOut) {
  const title = `${localText(product.title)} | CasaTanja`;
  const description = (productSummary(product) || plainDescription(product) || t("note")).slice(0, 155);
  const image = (product.images || []).find(Boolean) || "";
  const url = window.location.href;
  document.title = title;
  setMetaTag('meta[name="description"]', { key: { name: "description" }, values: { content: description } });
  setMetaTag('meta[property="og:title"]', { key: { property: "og:title" }, values: { content: title } });
  setMetaTag('meta[property="og:description"]', { key: { property: "og:description" }, values: { content: description } });
  setMetaTag('meta[property="og:type"]', { key: { property: "og:type" }, values: { content: "product" } });
  setMetaTag('meta[property="og:url"]', { key: { property: "og:url" }, values: { content: url } });
  if (image) setMetaTag('meta[property="og:image"]', { key: { property: "og:image" }, values: { content: image } });
  setLinkTag('link[rel="canonical"]', { rel: "canonical", href: url });

  let schema = document.querySelector("#product-json-ld");
  if (!schema) {
    schema = document.createElement("script");
    schema.id = "product-json-ld";
    schema.type = "application/ld+json";
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: localText(product.title),
    description,
    image: product.images || [],
    sku: product.sku || undefined,
    category: categoryText(product),
    offers: {
      "@type": "Offer",
      priceCurrency: "MAD",
      price: Number(product.price || 0),
      availability: soldOut ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      url,
    },
  });
}

function productHasManagedStock(product) {
  return product.stock !== undefined && product.stock !== null && product.stock !== "";
}

function categoryText(product) {
  if (typeof product.category !== "string") return localText(product.category);
  const labels = {
    Cuisine: { ar: "مطبخ", fr: "Cuisine" },
    Maison: { ar: "المنزل", fr: "Maison" },
    Tech: { ar: "تقنية", fr: "Tech" },
    Beaute: { ar: "جمال", fr: "Beaute" },
  };
  return labels[product.category]?.[currentLang] || product.category;
}

function applyStore(store) {
  if (!store) return;
  if (Array.isArray(store.products) && store.products.length) {
    products = (store.products || []).filter((product) => product.active !== false);
  }
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
const motionRevealSelector = [
  ".page-gallery",
  ".pdp-info-column",
  ".order-form-section",
  ".desktop-pdp-trust-strip",
  ".pdp-section-nav",
  ".landing-story",
  ".landing-specs",
  ".landing-repeat-cta",
  ".product-faq-section",
  ".related-products",
  ".product-card",
].join(", ");

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function applyMotionReveal(root = document) {
  if (prefersReducedMotion()) return;
  if (!motionObserver) {
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
  }
  root.querySelectorAll(motionRevealSelector).forEach((node, index) => {
    if (node.dataset.motionObserved) return;
    node.dataset.motionObserved = "true";
    node.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
    node.classList.add("motion-reveal");
    motionObserver.observe(node);
  });
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

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("storeLanguage", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("is-rtl", lang === "ar");
  currentLangLabel.textContent = lang.toUpperCase();
  langToggle.querySelector("small").textContent = lang === "ar" ? "FR" : "AR";
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
  render();
}

function buildProductMessage(product, formData) {
  const qty = Number(formData.get("qty")) || 1;
  const variantId = formData.get("variant");
  const selectedVariant = (product.variants || []).find((variant) => variant.id === variantId);
  const variantLine = selectedVariant ? [`${t("variant")}: ${localText(selectedVariant.name)}`] : [];
  const unitPrice = product.price + Number(selectedVariant?.extraPrice || 0);
  return [
    t("messageIntro"),
    `- ${localText(product.title)} x${qty}: ${money(unitPrice * qty)}`,
    ...variantLine,
    `${t("total")}: ${money(unitPrice * qty)}`,
    "",
    `${t("name")}: ${formData.get("name")}`,
    `${t("phone")}: ${formData.get("phone")}`,
    `${t("address")}: ${formData.get("address")}`,
  ].join("\n");
}

async function saveProductOrder(product, formData) {
  const qty = Number(formData.get("qty")) || 1;
  const variantId = formData.get("variant");
  const selectedVariant = (product.variants || []).find((variant) => variant.id === variantId);
  const unitPrice = product.price + Number(selectedVariant?.extraPrice || 0);
  try {
    return await StoreBackend.createOrder({
      customer: {
        name: formData.get("name"),
        phone: formData.get("phone"),
        address: formData.get("address"),
      },
      items: [
        {
          id: product.id,
          sku: product.sku,
          title: product.title,
          variant: selectedVariant || null,
          qty,
          price: unitPrice,
        },
      ],
      total: unitPrice * qty,
      source: "product_page_whatsapp",
    });
  } catch (error) {
    return null;
  }
}

function renderMissing() {
  page.innerHTML = `
    <section class="missing-product">
      <h1>${t("missing")}</h1>
      <a class="primary-action" href="index.html#products">${t("backProducts")}</a>
    </section>
  `;
}

function relatedCard(product) {
  const image = (product.images || []).find(Boolean);
  return `
    <article class="product-card compact-card" data-related-product="${product.id}">
      <div class="product-image">
        ${image ? `<img src="${image}" alt="${localText(product.title)}" loading="lazy" />` : `<div class="product-image-placeholder">${localText(product.title)}</div>`}
        <span class="badge">${money(product.price)}</span>
      </div>
      <div class="product-info">
        <h3 class="product-title">${localText(product.title)}</h3>
      </div>
    </article>
  `;
}

function discountPercent(product) {
  if (!product.oldPrice || Number(product.oldPrice) <= Number(product.price)) return null;
  return Math.round(((Number(product.oldPrice) - Number(product.price)) / Number(product.oldPrice)) * 100);
}

function stockText(product, soldOut, lowStock) {
  if (!productHasManagedStock(product)) return t("cod");
  if (soldOut) return t("outOfStock");
  return lowStock ? t("lowStock") : t("cod");
}

function productHighlights(product) {
  const highlights = product.highlights?.[currentLang] || product.highlights?.ar || product.highlights?.fr || [];
  if (Array.isArray(highlights)) return highlights.filter(Boolean);
  return String(highlights || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function offerText(value, fallback = "") {
  return localText(value) || fallback;
}

function defaultTrustBadges() {
  return [
    { label: { ar: t("paymentPromise"), fr: t("paymentPromise") }, tone: "green" },
    { label: { ar: t("deliveryPromise"), fr: t("deliveryPromise") }, tone: "teal" },
    { label: { ar: t("supportPromise"), fr: t("supportPromise") }, tone: "green" },
  ];
}

function productOffer(product) {
  const offer = product.box?.offer || {};
  const defaults = defaultTrustBadges();
  const badges = Array.isArray(offer.trustBadges) && offer.trustBadges.length ? offer.trustBadges : defaults;
  return {
    eyebrow: offerText(offer.eyebrow, t("limitedOffer")),
    ctaLabel: offerText(offer.ctaLabel, t("sendWhatsapp")),
    trustBadges: badges
      .map((badge, index) => ({
        label: offerText(badge.label, offerText(defaults[index]?.label, "")),
        tone: ["green", "teal", "neutral", "coral"].includes(badge.tone) ? badge.tone : defaults[index]?.tone || "green",
      }))
      .filter((badge) => badge.label)
      .slice(0, 3),
  };
}

function productDecisionFacts(product, soldOut, lowStock) {
  const facts = productHighlights(product);
  return [...new Set(facts.filter(Boolean))].slice(0, 5);
}

function productRating(product) {
  const rating = product.box?.rating || {};
  const value = Number(rating.value || product.ratingValue || 0);
  const count = Number(rating.count || product.reviewCount || 0);
  if (!value || !count) return null;
  return { value: Math.min(5, Math.max(1, value)), count };
}

function variantLabelForProduct(product) {
  const custom = localText(product?.box?.variantLabel);
  if (custom) return custom;
  const names = (product?.variants || []).map((variant) => localText(variant.name)).filter(Boolean);
  const colorNames = ["أسود", "أبيض", "أحمر", "أزرق", "بني", "رمادي", "Noir", "Blanc", "Rouge", "Bleu", "Brown", "Gray", "Grey"];
  const sizeNames = ["XS", "S", "M", "L", "XL", "XXL"];
  if (names.length && names.every((name) => colorNames.includes(name))) return currentLang === "ar" ? "اللون" : "Couleur";
  if (names.length && names.every((name) => sizeNames.includes(name))) return currentLang === "ar" ? "المقاس" : "Taille";
  return currentLang === "ar" ? "اللون / المقاس" : "Couleur / taille";
}

function variantInfoButtons(variants, product) {
  if (!variants.length) return "";
  const firstAvailable =
    variants.find((variant) => variant.stock === undefined || variant.stock === null || variant.stock === "" || Number(variant.stock) > 0) || variants[0];
  return `
    <div class="desktop-info-variants">
      <span>${variantLabelForProduct(product)}</span>
      <div>
        ${variants
          .map((variant, index) => {
            const unavailable = variant.stock !== undefined && variant.stock !== null && variant.stock !== "" && Number(variant.stock) <= 0;
            return `<button class="${firstAvailable?.id === variant.id ? "active" : ""}" type="button" data-info-variant="${variant.id}" ${unavailable ? "disabled" : ""}>${localText(variant.name)}</button>`;
          })
          .join("")}
      </div>
    </div>
  `;
}

function productGallery(product, discount) {
  const images = (product.images || []).filter(Boolean);
  if (!images.length) {
    return `
      <div class="detail-gallery page-gallery landing-gallery empty-gallery">
        <div class="detail-main-image missing-image">${localText(product.title)}</div>
      </div>
    `;
  }

  return `
    <div class="detail-gallery page-gallery landing-gallery ${images.length > 1 ? "has-thumbs" : ""}">
      ${discount ? `<span class="discount-ribbon">-${discount}%</span>` : ""}
      <button class="gallery-zoom-button" type="button" data-open-gallery="${images[0]}" aria-label="${t("fullscreenImage")}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5"/></svg>
      </button>
      <img class="detail-main-image" src="${images[0]}" alt="${localText(product.title)}" loading="eager" fetchpriority="high" />
      ${
        images.length > 1
          ? `<div class="detail-thumbs">
              ${images
                .map((image, index) => `<button class="${index === 0 ? "active" : ""}" type="button" data-thumb="${image}" aria-label="${localText(product.title)} ${index + 1}"><img src="${image}" alt="${localText(product.title)} ${index + 1}" loading="lazy" /></button>`)
                .join("")}
            </div>`
          : ""
      }
    </div>
  `;
}

function buySummary(product, soldOut, lowStock) {
  const discount = discountPercent(product);
  const intro = productSummary(product);
  const facts = productDecisionFacts(product, soldOut, lowStock);
  const offer = productOffer(product);
  const rating = productRating(product);
  const variants = product.variants || [];
  return `
    <section class="pdp-buy-summary pdp-info-column">
      <div class="desktop-promo-line">
        ${offer.eyebrow ? `<em>${escapeHtml(offer.eyebrow)}</em>` : ""}
      </div>
      <h1>${localText(product.title)}</h1>
      ${intro ? `<p class="buy-box-intro">${intro}</p>` : ""}
      ${
        rating
          ? `<div class="desktop-rating-row" aria-label="${rating.value} / 5">
              <span>${"★".repeat(Math.round(rating.value))}</span>
              <small>${interpolate(t("ratingReviews"), { count: rating.count })}</small>
            </div>`
          : ""
      }
      <div class="landing-price-row">
        ${product.oldPrice ? `<span>${money(product.oldPrice)}</span>` : ""}
        ${discount ? `<em>${t("discountBadge")} ${discount}%</em>` : ""}
        <strong>${money(product.price)}</strong>
      </div>
        ${
          facts.length
            ? `<ul class="quick-fact-list">
                ${facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}
              </ul>`
            : ""
        }
        ${variantInfoButtons(variants, product)}
        <div class="desktop-stock-status ${soldOut ? "is-out" : ""}">
          <span></span>
          <strong>${soldOut ? t("outOfStock") : lowStock ? t("lowStock") : t("availableStock")}</strong>
        </div>
    </section>
  `;
}

function desktopTrustStrip() {
  return `
    <section class="desktop-pdp-trust-strip" aria-label="${t("deliveryReturns")}">
      <article>
        <span class="trust-strip-icon">↩</span>
        <div>
          <h2>${t("easyReturnTitle")}</h2>
          <p>${t("easyReturnText")}</p>
        </div>
      </article>
      <article>
        <span class="trust-strip-icon">▣</span>
        <div>
          <h2>${t("deliveryCityTitle")}</h2>
          <p>${t("deliveryCityText")} ${t("delivery")}</p>
        </div>
      </article>
      <article>
        <span class="trust-strip-icon">▤</span>
        <div>
          <h2>${t("cod")}</h2>
          <p>${t("note")}</p>
        </div>
      </article>
    </section>
  `;
}

function orderForm(product, variants, soldOut) {
  const maxQty = productHasManagedStock(product) && Number(product.stock) > 0 ? ` max="${Number(product.stock)}"` : "";
  const firstAvailableVariant =
    variants.find((variant) => variant.stock === undefined || variant.stock === null || variant.stock === "" || Number(variant.stock) > 0) || variants[0];
  const firstExtraPrice = Number(firstAvailableVariant?.extraPrice || 0);
  const managedStock = productHasManagedStock(product);
  const lowStock = managedStock && !soldOut && Number(product.stock || 0) <= 5;
  const offer = productOffer(product);
  return `
    <form class="checkout-form product-order-form landing-order-form" data-product-order data-base-price="${Number(product.price || 0)}">
      <div class="desktop-order-price">
        <h2>${t("checkoutHeading")}</h2>
        <div class="landing-price-row">
          ${product.oldPrice ? `<span>${money(product.oldPrice)}</span>` : ""}
          <strong>${money(product.price)}</strong>
          ${discountPercent(product) ? `<em>-${discountPercent(product)}%</em>` : ""}
        </div>
      </div>
      <div class="order-form-heading">
        <span class="eyebrow">${categoryText(product)} - ${stockText(product, soldOut, lowStock)}</span>
        <h2>${t("orderTitle")}</h2>
        <p>${t("note")}</p>
      </div>
      ${
        variants.length
          ? `<fieldset class="variant-choice-group">
              <legend>${variantLabelForProduct(product)}</legend>
              <div class="variant-choice-list">
                ${variants
                  .map(
                    (variant) => {
                      const variantHasManagedStock = variant.stock !== undefined && variant.stock !== null && variant.stock !== "";
                      const unavailable = variantHasManagedStock && Number(variant.stock) <= 0;
                      return `
                        <label class="variant-choice ${unavailable ? "is-disabled" : ""}">
                          <input name="variant" type="radio" value="${variant.id}" data-extra-price="${Number(variant.extraPrice || 0)}" ${firstAvailableVariant?.id === variant.id ? "checked" : ""} ${unavailable ? "disabled" : ""} />
                          <span>${localText(variant.name)}${variant.extraPrice ? ` +${money(variant.extraPrice)}` : ""}</span>
                        </label>
                      `;
                    },
                  )
                  .join("")}
              </div>
            </fieldset>`
          : ""
      }
      <div class="order-contact-fields">
        <label>
          <span>${t("nameLabel")}</span>
          <input name="name" type="text" placeholder="${t("namePlaceholder")}" required />
        </label>
        <label>
          <span>${t("phoneLabel")}</span>
          <input name="phone" type="tel" placeholder="06 00 00 00 00" required />
        </label>
        <label>
          <span>${t("addressLabel")}</span>
          <input name="address" type="text" placeholder="${t("addressPlaceholder")}" required />
        </label>
      </div>
      <label class="quantity-field">
        <span>${t("qtyLabel")}</span>
        <div class="product-qty-stepper">
          <button type="button" data-qty-step="-1" aria-label="-">-</button>
          <input name="qty" type="number" min="1"${maxQty} value="1" required />
          <button type="button" data-qty-step="1" aria-label="+">+</button>
        </div>
      </label>
      <div class="order-cost-preview">
        <span>${t("estimatedTotal")}</span>
        <strong data-order-total>${money(Number(product.price || 0) + firstExtraPrice)}</strong>
        <small>${t("totalNote")}</small>
      </div>
      <button class="whatsapp-checkout" type="submit" ${soldOut ? "disabled" : ""}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a8.5 8.5 0 0 0-7.28 12.88L4 21l5.25-1.37A8.5 8.5 0 1 0 12 3Z"/><path d="M9.4 8.7c.2-.44.36-.45.62-.45h.45c.15 0 .38.06.58.3.2.23.76.82.76 2 0 1.17-.78 2.3-.9 2.45-.1.16-1.55 2.62-3.82 3.57-.53.22-.95.35-1.27.45-.54.18-1.03.15-1.42.09-.43-.07-1.33-.6-1.52-1.18-.18-.58-.18-1.08-.13-1.18.06-.1.2-.16.43-.3.22-.13 1.32-.72 1.52-.8.2-.08.35-.13.5.14.14.27.57.96.7 1.12.13.15.26.18.48.06.22-.13.94-.38 1.78-1.22.66-.66 1.1-1.47 1.23-1.72.13-.25.02-.39-.1-.52-.12-.12-.27-.32-.4-.48-.13-.16-.18-.27-.27-.45-.09-.18-.04-.34.02-.48.06-.13.5-1.32.7-1.8Z"/></svg>
        <span>${soldOut ? t("outOfStock") : escapeHtml(offer.ctaLabel)}</span>
      </button>
      <div class="checkout-reassurance-list">
        <span><i aria-hidden="true">✓</i>${t("cod")}</span>
        <span><i aria-hidden="true">✓</i>${t("note")}</span>
      </div>
    </form>
  `;
}

function productFaq(product) {
  return `
    <section class="product-faq-section">
      <div class="section-heading">
        <div>
          <span class="eyebrow">${t("howToOrder")}</span>
          <h2>${t("deliveryReturns")}</h2>
        </div>
      </div>
      <div class="faq-list">
        <details open>
          <summary>${t("howToOrder")}</summary>
          <p>${t("howToOrderText")}</p>
        </details>
        <details>
          <summary>${t("deliveryReturns")}</summary>
          <p>${t("deliveryReturnsText")}</p>
        </details>
        <details>
          <summary>${t("whatsInBox")}</summary>
          <p>${productBoxText(product)}</p>
        </details>
      </div>
    </section>
  `;
}

function updateOrderTotal(form) {
  const totalNode = form?.querySelector("[data-order-total]");
  if (!form || !totalNode) return;
  const basePrice = Number(form.dataset.basePrice || 0);
  const qty = Math.max(1, Number(form.elements.qty?.value || 1));
  const selectedVariant = form.querySelector('input[name="variant"]:checked');
  const extraPrice = Number(selectedVariant?.dataset.extraPrice || 0);
  totalNode.textContent = money((basePrice + extraPrice) * qty);
}

function updateInfoVariantState(variantId) {
  document.querySelectorAll("[data-info-variant]").forEach((button) => {
    button.classList.toggle("active", button.dataset.infoVariant === variantId);
  });
}

function sectionNavigation(relatedCount) {
  return `
    <nav class="pdp-section-nav" aria-label="Product page sections">
      <a href="#description-section">${t("sectionDescription")}</a>
      <a href="#specs-section">${t("sectionSpecs")}</a>
      <a href="#delivery-section">${t("sectionDelivery")}</a>
      ${relatedCount ? `<a href="#related-section">${t("sectionRelated")}</a>` : ""}
    </nav>
  `;
}

function galleryLightbox() {
  return `
    <div class="gallery-lightbox" data-gallery-lightbox hidden>
      <button class="gallery-lightbox-close" type="button" data-close-gallery aria-label="Close">×</button>
      <img data-gallery-lightbox-image alt="" />
    </div>
  `;
}

function render() {
  const product = products.find((item) => item.id === productId());
  if (!product) {
    renderMissing();
    return;
  }

  const managedStock = productHasManagedStock(product);
  const soldOut = managedStock && Number(product.stock) <= 0;
  const lowStock = managedStock && !soldOut && Number(product.stock || 0) <= 5;
  const variants = product.variants || [];
  const related = products
    .filter((item) => item.id !== product.id && item.active !== false && (item.category === product.category || categoryText(item) === categoryText(product)))
    .slice(0, 4);
  const bestOffers = products.filter((item) => item.id !== product.id && item.active !== false).slice(0, 4);
  const discount = discountPercent(product);
  const specs = productSpecs(product);
  trackEvent("product_view", { productId: product.id });
  updateProductMeta(product, soldOut);
  page.innerHTML = `
    <section class="product-page">
      <section class="product-landing-hero">
        ${productGallery(product, discount)}

        <div class="landing-order-wrap">
          ${buySummary(product, soldOut, lowStock)}
        </div>

        <section id="order-form" class="order-form-section">
          ${orderForm(product, variants, soldOut)}
        </section>
      </section>

      ${desktopTrustStrip()}

      ${sectionNavigation(related.length)}

      <a class="mobile-sticky-pdp-cta" href="#order-form">
        <span>${money(product.price)}</span>
        <strong>${soldOut ? t("outOfStock") : escapeHtml(productOffer(product).ctaLabel)}</strong>
      </a>

      <section class="product-detail-layout">
      <section id="description-section" class="landing-story">
        <div>
          <span class="eyebrow">${t("description")}</span>
          <h2>${localText(product.title)}</h2>
          <div class="rich-product-description">${richDescriptionMarkup(product)}</div>
        </div>
      </section>

      <section id="specs-section" class="landing-specs">
        <div>
          <span class="eyebrow">${t("technicalSheet")}</span>
          <h2>${t("technicalSheet")}</h2>
        </div>
        <dl>
          <div><dt>${t("specCategory")}</dt><dd>${categoryText(product)}</dd></div>
          <div><dt>${t("specStock")}</dt><dd>${managedStock ? (soldOut ? t("outOfStock") : `${product.stock} ${lowStock ? `· ${t("lowStock")}` : ""}`) : t("cod")}</dd></div>
          <div><dt>${t("specDelivery")}</dt><dd>${t("delivery")}</dd></div>
          ${specs.map((spec) => `<div><dt>${escapeHtml(spec.label)}</dt><dd>${escapeHtml(spec.value)}</dd></div>`).join("")}
          <div><dt>${t("whatsInBox")}</dt><dd>${productBoxText(product)}</dd></div>
        </dl>
      </section>

      </section>

      <section class="landing-repeat-cta">
        <div>
          <span class="eyebrow">${t("repeatCtaTitle")}</span>
          <h2>${t("repeatCtaTitle")}</h2>
          <p>${t("repeatCtaText")}</p>
        </div>
        <a class="primary-action" href="#order-form">${escapeHtml(productOffer(product).ctaLabel)}</a>
      </section>
      <div id="delivery-section">${productFaq(product)}</div>
      ${
        related.length
          ? `<section id="related-section" class="related-products">
              <div class="section-heading">
                <div>
                  <span class="eyebrow">${t("relatedProducts")}</span>
                  <h2>${t("relatedProducts")}</h2>
                </div>
              </div>
              <div class="product-grid category-grid">${related.map(relatedCard).join("")}</div>
            </section>`
          : ""
      }
      ${
        bestOffers.length
          ? `<section class="related-products best-offers">
              <div class="section-heading">
                <div>
                  <span class="eyebrow">${t("bestOffers")}</span>
                  <h2>${t("bestOffers")}</h2>
                </div>
              </div>
              <div class="product-grid category-grid">${bestOffers.map(relatedCard).join("")}</div>
            </section>`
          : ""
      }
      ${galleryLightbox()}
    </section>
  `;
  applyMotionReveal(page);
}

document.addEventListener("click", (event) => {
  const thumb = event.target.closest("[data-thumb]");
  const qtyStep = event.target.closest("[data-qty-step]");
  const infoVariant = event.target.closest("[data-info-variant]");
  const openGallery = event.target.closest("[data-open-gallery]");
  const closeGallery = event.target.closest("[data-close-gallery]");
  const lightbox = event.target.closest("[data-gallery-lightbox]");
  if (thumb) {
    const mainImage = document.querySelector(".detail-main-image");
    if (mainImage?.src !== thumb.dataset.thumb) {
      mainImage.classList.add("is-switching");
      window.setTimeout(() => {
        mainImage.src = thumb.dataset.thumb;
      }, 110);
      mainImage.addEventListener("load", () => mainImage.classList.remove("is-switching"), { once: true });
      window.setTimeout(() => mainImage.classList.remove("is-switching"), 520);
    }
    document.querySelector("[data-open-gallery]")?.setAttribute("data-open-gallery", thumb.dataset.thumb);
    document.querySelectorAll("[data-thumb]").forEach((button) => button.classList.toggle("active", button === thumb));
  }
  if (openGallery) {
    const modal = document.querySelector("[data-gallery-lightbox]");
    const image = document.querySelector("[data-gallery-lightbox-image]");
    if (modal && image) {
      image.src = openGallery.dataset.openGallery;
      image.alt = document.querySelector(".detail-main-image")?.alt || "";
      modal.hidden = false;
      document.body.classList.add("gallery-lightbox-open");
    }
  }
  if (closeGallery || (lightbox && event.target === lightbox)) {
    const modal = document.querySelector("[data-gallery-lightbox]");
    if (modal) {
      modal.hidden = true;
      document.body.classList.remove("gallery-lightbox-open");
    }
  }
  if (qtyStep) {
    const form = qtyStep.closest("[data-product-order]");
    const input = form?.elements.qty;
    if (!input) return;
    const min = Number(input.min || 1);
    const max = input.max ? Number(input.max) : Infinity;
    const next = Math.min(max, Math.max(min, Number(input.value || min) + Number(qtyStep.dataset.qtyStep)));
    input.value = next;
    updateOrderTotal(form);
  }
  if (infoVariant) {
    const form = document.querySelector("[data-product-order]");
    const target = [...(form?.querySelectorAll('input[name="variant"]') || [])].find((input) => input.value === infoVariant.dataset.infoVariant);
    if (target && !target.disabled) {
      target.checked = true;
      updateOrderTotal(form);
      updateInfoVariantState(infoVariant.dataset.infoVariant);
    }
  }
  const relatedProduct = event.target.closest("[data-related-product]");
  if (relatedProduct) {
    trackEvent("related_product_click", { productId: Number(relatedProduct.dataset.relatedProduct), fromProductId: productId() });
    window.location.href = `product.html?id=${relatedProduct.dataset.relatedProduct}`;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const modal = document.querySelector("[data-gallery-lightbox]");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("gallery-lightbox-open");
});

document.addEventListener("input", (event) => {
  const input = event.target.closest('input[name="qty"]');
  if (!input) return;
  updateOrderTotal(input.closest("[data-product-order]"));
});

document.addEventListener("change", (event) => {
  const variant = event.target.closest('input[name="variant"]');
  if (!variant) return;
  updateOrderTotal(variant.closest("[data-product-order]"));
  updateInfoVariantState(variant.value);
});

document.addEventListener("submit", async (event) => {
  const form = event.target.closest("[data-product-order]");
  if (!form) return;
  event.preventDefault();

  const product = products.find((item) => item.id === productId());
  const formData = new FormData(form);
  const submitButton = form.querySelector(".whatsapp-checkout");
  submitButton?.classList.add("is-loading");
  trackEvent("checkout_submit", { productId: product.id, source: "product_page" });
  await saveProductOrder(product, formData);
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildProductMessage(product, formData))}`;
  trackEvent("whatsapp_redirect", { productId: product.id, source: "product_page" });
  window.location.href = url;
});

langToggle.addEventListener("click", () => {
  setLanguage(currentLang === "ar" ? "fr" : "ar");
});

async function initProductPage() {
  applyStore(readCachedPublicStore());
  setLanguage(currentLang);
  const loaded = await loadBackendStore();
  if (loaded) {
    setLanguage(currentLang);
  }
}

initProductPage();
