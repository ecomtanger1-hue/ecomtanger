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
    orderedThisWeek: "تم طلبه {count} مرة هذا الأسبوع",
    whatsInBox: "ماذا يوجد في العلبة",
    deliveryReturns: "التوصيل والاستبدال",
    howToOrder: "كيف تطلب",
    relatedProducts: "منتجات مشابهة",
    boxDefault: "المنتج، التغليف، وأي ملحقات موضحة في الصور.",
    deliveryReturnsText: "التوصيل في طنجة خلال 24-48 ساعة. الدفع عند الاستلام متاح، ونراجع أي مشكل عبر واتساب.",
    howToOrderText: "اختر الكمية أو الخيار المناسب، املأ معلوماتك، ثم أكد الطلب عبر واتساب.",
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
    whatsappFallbackTitle: "لم يفتح واتساب؟",
    whatsappFallbackText: "اضغط الزر مرة أخرى لإرسال الطلب.",
    whatsappFallbackButton: "فتح واتساب",
    continueShopping: "متابعة التسوق",
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
    orderedThisWeek: "Commande {count} fois cette semaine",
    whatsInBox: "Dans la boite",
    deliveryReturns: "Livraison et retours",
    howToOrder: "Comment commander",
    relatedProducts: "Produits similaires",
    boxDefault: "Le produit, son emballage, et les accessoires visibles sur les photos.",
    deliveryReturnsText: "Livraison a Tanger sous 24-48h. Paiement a la livraison disponible, probleme traite sur WhatsApp.",
    howToOrderText: "Choisissez la quantite ou l'option, renseignez vos infos, puis confirmez via WhatsApp.",
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
    whatsappFallbackTitle: "WhatsApp ne s'est pas ouvert ?",
    whatsappFallbackText: "Appuyez encore une fois pour envoyer la commande.",
    whatsappFallbackButton: "Ouvrir WhatsApp",
    continueShopping: "Continuer mes achats",
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
const page = document.querySelector("[data-product-page]");
const langToggle = document.querySelector("[data-lang-toggle]");
const currentLangLabel = document.querySelector("[data-current-lang]");
const whatsappFallback = document.querySelector("[data-whatsapp-fallback]");
const whatsappRetry = document.querySelector("[data-whatsapp-retry]");

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
  fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, productId: payload.productId || null, meta: payload }),
  }).catch(() => {});
}

function money(value) {
  return `${value} MAD`;
}

function productId() {
  return Number(new URLSearchParams(window.location.search).get("id")) || 1;
}

function localText(value) {
  if (typeof value === "string") return value;
  return value[currentLang];
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

async function loadBackendStore() {
  try {
    const response = await fetch("/api/store");
    if (!response.ok) return;
    const store = await response.json();
    products = (store.products || []).filter((product) => product.active !== false);
    storeSettings = store.settings || {};
    whatsappNumber = storeSettings.whatsappNumber || whatsappNumber;
  } catch (error) {
    // File previews and GitHub Pages use the bundled fallback products.
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
  document.querySelector("[data-fallback-title]").textContent = t("whatsappFallbackTitle");
  document.querySelector("[data-fallback-text]").textContent = t("whatsappFallbackText");
  document.querySelector("[data-fallback-button]").textContent = t("whatsappFallbackButton");
  document.querySelector("[data-close-fallback]").textContent = t("continueShopping");
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
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
      }),
    });
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    return null;
  }
}

function showWhatsAppFallback(url) {
  whatsappRetry.href = url;
  whatsappFallback.classList.add("open");
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
  return `
    <article class="product-card compact-card" data-related-product="${product.id}">
      <div class="product-image">
        <img src="${product.images?.[0] || ""}" alt="${localText(product.title)}" loading="lazy" />
        <span class="badge">${money(product.price)}</span>
      </div>
      <div class="product-info">
        <h3 class="product-title">${localText(product.title)}</h3>
        <div class="social-proof">${interpolate(t("orderedThisWeek"), { count: socialCount(product) })}</div>
      </div>
    </article>
  `;
}

function render() {
  const product = products.find((item) => item.id === productId());
  if (!product) {
    renderMissing();
    return;
  }

  const soldOut = Number(product.stock || 0) <= 0;
  const lowStock = !soldOut && Number(product.stock || 0) <= 5;
  const variants = product.variants || [];
  const related = products
    .filter((item) => item.id !== product.id && item.active !== false && (item.category === product.category || categoryText(item) === categoryText(product)))
    .slice(0, 4);
  trackEvent("product_view", { productId: product.id });
  document.title = `${localText(product.title)} | CasaTanja Deals`;
  page.innerHTML = `
    <section class="product-page">
      <div class="detail-gallery page-gallery">
        <img class="detail-main-image" src="${product.images[0]}" alt="${localText(product.title)}" />
        <div class="detail-thumbs">
          ${product.images
            .map((image, index) => `<button type="button" data-thumb="${image}"><img src="${image}" alt="${localText(product.title)} ${index + 1}" /></button>`)
            .join("")}
        </div>
      </div>

      <div class="detail-body page-detail-body">
        <span class="eyebrow">${categoryText(product)} · ${t("delivery")}</span>
        <h1>${localText(product.title)}</h1>
        <strong class="detail-price">${money(product.price)}</strong>
        <div class="social-proof product-social">${interpolate(t("orderedThisWeek"), { count: socialCount(product) })}</div>
        <div class="product-trust-row">
          <span>${t("cod")}</span>
          <span>${soldOut ? t("outOfStock") : lowStock ? t("lowStock") : t("delivery")}</span>
        </div>
        <section>
          <h2>${t("description")}</h2>
          <p>${localText(product.description)}</p>
        </section>
        <section>
          <h2>${t("highlights")}</h2>
          <ul>
            ${product.highlights[currentLang].map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
        <section class="product-info-blocks">
          <article>
            <h2>${t("whatsInBox")}</h2>
            <p>${product.box?.[currentLang] || t("boxDefault")}</p>
          </article>
          <article>
            <h2>${t("deliveryReturns")}</h2>
            <p>${t("deliveryReturnsText")}</p>
          </article>
          <article>
            <h2>${t("howToOrder")}</h2>
            <p>${t("howToOrderText")}</p>
          </article>
        </section>
      </div>

      <form class="checkout-form product-order-form" data-product-order>
        <h2>${t("orderTitle")}</h2>
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
        ${
          variants.length
            ? `<label>
                <span>${t("variantLabel")}</span>
                <select name="variant">
                  ${variants
                    .map(
                      (variant) =>
                        `<option value="${variant.id}" ${Number(variant.stock || 0) <= 0 ? "disabled" : ""}>${localText(variant.name)}${variant.extraPrice ? ` (+${money(variant.extraPrice)})` : ""}${Number(variant.stock || 0) <= 0 ? ` - ${t("outOfStock")}` : ""}</option>`,
                    )
                    .join("")}
                </select>
              </label>`
            : ""
        }
        <label>
          <span>${t("qtyLabel")}</span>
          <input name="qty" type="number" min="1" max="${Math.max(1, Number(product.stock || 0))}" value="1" required />
        </label>
        <button class="whatsapp-checkout" type="submit" ${soldOut ? "disabled" : ""}>${soldOut ? t("outOfStock") : t("sendWhatsapp")}</button>
        <p class="checkout-note">${t("note")}</p>
      </form>
      ${
        related.length
          ? `<section class="related-products">
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
    </section>
  `;
}

document.addEventListener("click", (event) => {
  const thumb = event.target.closest("[data-thumb]");
  if (thumb) {
    document.querySelector(".detail-main-image").src = thumb.dataset.thumb;
  }
  const relatedProduct = event.target.closest("[data-related-product]");
  if (relatedProduct) {
    trackEvent("related_product_click", { productId: Number(relatedProduct.dataset.relatedProduct), fromProductId: productId() });
    window.location.href = `product.html?id=${relatedProduct.dataset.relatedProduct}`;
  }
});

document.addEventListener("submit", async (event) => {
  const form = event.target.closest("[data-product-order]");
  if (!form) return;
  event.preventDefault();

  const product = products.find((item) => item.id === productId());
  const formData = new FormData(form);
  trackEvent("checkout_submit", { productId: product.id, source: "product_page" });
  await saveProductOrder(product, formData);
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildProductMessage(product, formData))}`;
  trackEvent("whatsapp_redirect", { productId: product.id, source: "product_page" });
  showWhatsAppFallback(url);
  window.location.href = url;
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-fallback]")) {
    whatsappFallback.classList.remove("open");
  }
});

langToggle.addEventListener("click", () => {
  setLanguage(currentLang === "ar" ? "fr" : "ar");
});

async function initProductPage() {
  await loadBackendStore();
  setLanguage(currentLang);
}

initProductPage();
