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
    dealEyebrow: "عرض اليوم",
    dealTitle: "خلاط صغير محمول",
    dealText: "الأكثر طلبا هذا الأسبوع في طنجة. توصيل سريع والدفع عند الاستلام.",
    dealOrder: "اطلب الآن",
    dealDetails: "التفاصيل",
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
    tabTech: "تقنية",
    tabBeauty: "جمال",
    newProducts: "منتجات جديدة",
    tangierDeals: "عروض طنجة",
    view: "عرض",
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
    orderedThisWeek: "تم طلبه {count} مرة هذا الأسبوع",
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
    dealEyebrow: "Offre du jour",
    dealTitle: "Mini blender portable",
    dealText: "Best seller cette semaine a Tanger. Livraison rapide et paiement a la reception.",
    dealOrder: "Commander",
    dealDetails: "Details",
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
    tabTech: "Tech",
    tabBeauty: "Beaute",
    newProducts: "Nouveautes",
    tangierDeals: "Offres a Tanger",
    view: "Voir",
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
    orderedThisWeek: "Commande {count} fois cette semaine",
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
let storeSettings = {};

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

async function loadBackendStore() {
  try {
    const store = await StoreBackend.getPublicStore();
    products = (store.products || []).filter((product) => product.active !== false);
    storeSettings = store.settings || {};
    whatsappNumber = storeSettings.whatsappNumber || whatsappNumber;
  } catch (error) {
    // File previews and GitHub Pages use the bundled fallback products.
  }
}

function t(key) {
  return translations[currentLang][key] || key;
}

function interpolate(template, values) {
  return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);
}

function socialCount(product) {
  return Number(product.ordersThisWeek || product.socialProof || 24 + Number(product.id || 1) * 7);
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
  return typeof value === "string" ? value : value[currentLang];
}

function categoryLabel(category) {
  const labels = {
    Cuisine: { ar: "مطبخ", fr: "Cuisine" },
    Maison: { ar: "المنزل", fr: "Maison" },
    Tech: { ar: "تقنية", fr: "Tech" },
    Beaute: { ar: "جمال", fr: "Beaute" },
  };
  return labels[category]?.[currentLang] || category;
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
  renderFeaturedDeal();
  renderProducts();
  renderCategorySections();
  renderCart();
}

function renderFeaturedDeal() {
  const featuredId = Number(storeSettings.featuredProductId);
  const product = products.find((item) => item.id === featuredId) || products.find((item) => item.featured) || products[0];
  const dealBand = document.querySelector(".deal-band");
  if (!product) {
    if (dealBand) dealBand.hidden = true;
    return;
  }
  if (dealBand) dealBand.hidden = false;

  const dealTitle = document.querySelector("[data-i18n='dealTitle']");
  const orderButton = document.querySelector("[data-i18n='dealOrder']");
  const detailsLink = document.querySelector("[data-i18n='dealDetails']");
  const bgLink = document.querySelector(".deal-bg-link");
  const priceRow = document.querySelector(".deal-price-row");

  if (dealTitle) dealTitle.textContent = localText(product.title);
  if (orderButton) orderButton.dataset.add = product.id;
  if (detailsLink) detailsLink.href = `product.html?id=${product.id}`;
  if (bgLink) bgLink.href = `product.html?id=${product.id}`;
  if (dealBand && product.images?.[0]) dealBand.style.backgroundImage = `url("${product.images[0]}")`;
  if (priceRow) {
    priceRow.innerHTML = `<strong>${money(product.price)}</strong>${product.oldPrice ? `<span>${money(product.oldPrice)}</span>` : ""}`;
  }
}

function visibleProducts() {
  return products.filter((product) => {
    if (product.active === false) return false;
    const matchesFilter = currentFilter === "all" || product.category === currentFilter;
    const searchText = `${product.title.ar} ${product.title.fr} ${categoryLabel(product.category)}`.toLowerCase();
    return matchesFilter && searchText.includes(currentSearch);
  });
}

function renderProducts() {
  const items = visibleProducts();

  productGrid.innerHTML = items
    .map((product) => {
      const soldOut = Number(product.stock || 0) <= 0;
      const limited = !soldOut && Number(product.stock || 0) <= 5;
      return `
        <article class="product-card" data-product="${product.id}" tabindex="0" role="button" aria-label="${localText(product.title)}">
          <div class="product-image">
            <img src="${product.images[0]}" alt="${localText(product.title)}" loading="lazy" />
            <span class="badge">${soldOut ? t("outOfStock") : limited ? t("lowStock") : t("cod")}</span>
            <button class="wishlist" type="button" aria-label="Wishlist">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.8 4.8 0 0 1 12 5.5a4.8 4.8 0 0 1 8.8 3.3Z" />
              </svg>
            </button>
          </div>
          <div class="product-info">
            <h3 class="product-title">${localText(product.title)}</h3>
            <div class="product-meta">
              <strong class="price">${money(product.price)}</strong>
              <span class="category">${categoryLabel(product.category)}</span>
            </div>
            <div class="delivery-note">${t("delivery")}</div>
            <div class="social-proof">${interpolate(t("orderedThisWeek"), { count: socialCount(product) })}</div>
            <button class="add-button" type="button" data-add="${product.id}" ${soldOut ? "disabled" : ""}>${soldOut ? t("outOfStock") : t("addPay")}</button>
          </div>
        </article>
      `;
    })
    .join("");

  if (!items.length) {
    productGrid.innerHTML = `<p class="empty-cart">${t("noProducts")}</p>`;
  }
}

function productCard(product) {
  const soldOut = Number(product.stock || 0) <= 0;
  const limited = !soldOut && Number(product.stock || 0) <= 5;
  return `
    <article class="product-card compact-card" data-product="${product.id}" tabindex="0" role="button" aria-label="${localText(product.title)}">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${localText(product.title)}" loading="lazy" />
        <span class="badge">${soldOut ? t("outOfStock") : limited ? t("lowStock") : t("cod")}</span>
      </div>
      <div class="product-info">
        <h3 class="product-title">${localText(product.title)}</h3>
        <div class="product-meta">
          <strong class="price">${money(product.price)}</strong>
          <span class="category">${categoryLabel(product.category)}</span>
        </div>
        <div class="social-proof">${interpolate(t("orderedThisWeek"), { count: socialCount(product) })}</div>
      </div>
    </article>
  `;
}

function renderCategorySections() {
  const sections = [
    { key: "bestSellers", items: products.filter((product) => product.active !== false && Number(product.stock || 0) > 0).slice(0, 4) },
    { key: "homeSection", category: "Maison" },
    { key: "techSection", category: "Tech" },
    { key: "beautySection", category: "Beaute" },
  ];

  categorySections.innerHTML = sections
    .map((section) => {
      const items = section.items || products.filter((product) => product.active !== false && product.category === section.category).slice(0, 4);
      if (!items.length) return "";
      return `
        <section class="category-block">
          <div class="section-heading">
            <div>
              <span class="eyebrow">${t(section.key)}</span>
              <h2>${t(section.key)}</h2>
            </div>
          </div>
          <div class="product-grid category-grid">${items.map(productCard).join("")}</div>
        </section>
      `;
    })
    .join("");
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
          <img src="${item.images[0]}" alt="${localText(item.title)}" />
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
  if (Number(product.stock || 0) <= 0) return;

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
  const productCard = event.target.closest("[data-product]");

  if (addButton) {
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

  if (filterButton) {
    currentFilter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("active", button === filterButton);
    });
    renderProducts();
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
  currentSearch = event.target.value.trim().toLowerCase();
  renderProducts();
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
  trackEvent("checkout_submit", { itemCount: cartSummary().count, total: cartSummary().total });
  await saveOrder(formData);
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(formData))}`;
  trackEvent("whatsapp_redirect", { itemCount: cartSummary().count, total: cartSummary().total });
  window.location.href = url;
});

async function initStorefront() {
  await loadBackendStore();
  restoreCart();
  setLanguage(localStorage.getItem("storeLanguage") || "ar");
}

initStorefront();
