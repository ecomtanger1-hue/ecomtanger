let whatsappNumber = "212708012888";

const translations = {
  ar: {
    backAria: "Ø§Ù„Ø¹ÙˆØ¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª",
    delivery: "Ø·Ù†Ø¬Ø© 24-48 Ø³Ø§Ø¹Ø©",
    cod: "Ø§Ù„Ø¯ÙØ¹ Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…",
    description: "Ø§Ù„ÙˆØµÙ",
    highlights: "Ø§Ù„Ù…Ù…ÙŠØ²Ø§Øª",
    orderTitle: "Ø£ÙƒØ¯ Ø·Ù„Ø¨Ùƒ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨",
    nameLabel: "Ø§Ù„Ø§Ø³Ù… Ø§Ù„ÙƒØ§Ù…Ù„",
    phoneLabel: "Ø§Ù„Ù‡Ø§ØªÙ",
    addressLabel: "Ø§Ù„Ø­ÙŠ / Ø§Ù„Ù…Ø¯ÙŠÙ†Ø©",
    namePlaceholder: "Ø§Ø³Ù…Ùƒ",
    addressPlaceholder: "Ù…Ø«Ø§Ù„: Ù…Ø§Ù„Ø§Ø¨Ø§Ø·Ø§ØŒ Ø·Ù†Ø¬Ø©",
    qtyLabel: "Ø§Ù„ÙƒÙ…ÙŠØ©",
    variantLabel: "Ø§Ù„Ø®ÙŠØ§Ø±",
    outOfStock: "ØºÙŠØ± Ù…ØªÙˆÙØ± Ø­Ø§Ù„ÙŠØ§",
    lowStock: "Ø¨Ø§Ù‚ÙŠ Ø¹Ø¯Ø¯ Ù…Ø­Ø¯ÙˆØ¯",
    whatsInBox: "Ù…Ø§Ø°Ø§ ÙŠÙˆØ¬Ø¯ ÙÙŠ Ø§Ù„Ø¹Ù„Ø¨Ø©",
    deliveryReturns: "Ø§Ù„ØªÙˆØµÙŠÙ„ ÙˆØ§Ù„Ø§Ø³ØªØ¨Ø¯Ø§Ù„",
    howToOrder: "ÙƒÙŠÙ ØªØ·Ù„Ø¨",
    relatedProducts: "Ù…Ù†ØªØ¬Ø§Øª Ù…Ø´Ø§Ø¨Ù‡Ø©",
    bestOffers: "Ø£ÙØ¶Ù„ Ø§Ù„Ø¹Ø±ÙˆØ¶",
    discountBadge: "ØªØ®ÙÙŠØ¶",
    orderSummary: "Ø·Ù„Ø¨ Ø³Ø±ÙŠØ¹",
    checkoutHeading: "Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†",
    estimatedTotal: "Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹",
    totalNote: "Ø¨Ø¯ÙˆÙ† Ù…ØµØ§Ø±ÙŠÙ Ù…Ø®ÙÙŠØ©. Ù†Ø¤ÙƒØ¯ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨ Ù‚Ø¨Ù„ Ø§Ù„Ø¥Ø±Ø³Ø§Ù„.",
    deliveryPromise: "ØªÙˆØµÙŠÙ„ Ø·Ù†Ø¬Ø© 24-48 Ø³Ø§Ø¹Ø©",
    paymentPromise: "Ø§Ù„Ø¯ÙØ¹ Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…",
    supportPromise: "ØªØ£ÙƒÙŠØ¯ ÙˆÙ…ØªØ§Ø¨Ø¹Ø© Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨",
    limitedOffer: "Ø¹Ø±Ø¶ Ù…Ø­Ø¯ÙˆØ¯ Ù…Ø¹ Ø§Ù„Ø¯ÙØ¹ Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…",
    deliveryCityTitle: "ØªÙˆØµÙŠÙ„ Ø¯Ø§Ø®Ù„ Ø·Ù†Ø¬Ø©",
    deliveryCityText: "ØªÙˆØµÙŠÙ„ Ø³Ø±ÙŠØ¹ ÙˆØ¢Ù…Ù† Ø¥Ù„Ù‰ Ø§Ù„Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ù…Ø­Ø¯Ø¯.",
    deliveryMoroccoTitle: "Ù‚Ø±ÙŠØ¨Ø§ ÙÙŠ Ù…Ø¯Ù† Ø£Ø®Ø±Ù‰",
    deliveryMoroccoText: "Ù†Ø¨Ø¯Ø£ Ø¨Ø·Ù†Ø¬Ø© Ø«Ù… Ù†ÙˆØ³Ø¹ Ø§Ù„ØªÙˆØµÙŠÙ„ Ù„Ø¨Ø§Ù‚ÙŠ Ø§Ù„Ù…ØºØ±Ø¨.",
    easyReturnTitle: "Ø§Ø³ØªØ¨Ø¯Ø§Ù„ Ø³Ù‡Ù„",
    easyReturnText: "Ø£ÙŠ Ù…Ø´ÙƒÙ„ ÙÙŠ Ø§Ù„Ø·Ù„Ø¨ Ù†Ø±Ø§Ø¬Ø¹Ù‡ Ù…Ø¹Ùƒ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨.",
    repeatCtaTitle: "Ù‡Ù„ ÙŠÙ†Ø§Ø³Ø¨Ùƒ Ù‡Ø°Ø§ Ø§Ù„Ù…Ù†ØªØ¬ØŸ",
    repeatCtaText: "Ø±Ø§Ø¬Ø¹ Ø§Ù„ØªÙØ§ØµÙŠÙ„ØŒ Ø«Ù… Ø§Ù…Ù„Ø£ Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ø·Ù„Ø¨ Ø¹Ù†Ø¯Ù…Ø§ ØªÙƒÙˆÙ† Ø¬Ø§Ù‡Ø²Ø§. Ø³Ù†Ø¤ÙƒØ¯ Ù…Ø¹Ùƒ ÙƒÙ„ Ø´ÙŠØ¡ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨ Ù‚Ø¨Ù„ Ø§Ù„Ø¥Ø±Ø³Ø§Ù„.",
    repeatCtaButton: "Ø§Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ø¥Ù„Ù‰ Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ø·Ù„Ø¨",
    technicalSheet: "Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ù…Ù†ØªØ¬",
    specCategory: "Ø§Ù„ÙØ¦Ø©",
    specStock: "Ø§Ù„Ù…Ø®Ø²ÙˆÙ†",
    specDelivery: "Ø§Ù„ØªÙˆØµÙŠÙ„",
    boxDefault: "Ø§Ù„Ù…Ù†ØªØ¬ØŒ Ø§Ù„ØªØºÙ„ÙŠÙØŒ ÙˆØ£ÙŠ Ù…Ù„Ø­Ù‚Ø§Øª Ù…ÙˆØ¶Ø­Ø© ÙÙŠ Ø§Ù„ØµÙˆØ±.",
    deliveryReturnsText: "Ø§Ù„ØªÙˆØµÙŠÙ„ ÙÙŠ Ø·Ù†Ø¬Ø© Ø®Ù„Ø§Ù„ 24-48 Ø³Ø§Ø¹Ø©. Ø§Ù„Ø¯ÙØ¹ Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù… Ù…ØªØ§Ø­ØŒ ÙˆÙ†Ø±Ø§Ø¬Ø¹ Ø£ÙŠ Ù…Ø´ÙƒÙ„ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨.",
    howToOrderText: "Ø§Ø®ØªØ± Ø§Ù„ÙƒÙ…ÙŠØ© Ø£Ùˆ Ø§Ù„Ø®ÙŠØ§Ø± Ø§Ù„Ù…Ù†Ø§Ø³Ø¨ØŒ Ø§Ù…Ù„Ø£ Ù…Ø¹Ù„ÙˆÙ…Ø§ØªÙƒØŒ Ø«Ù… Ø£ÙƒØ¯ Ø§Ù„Ø·Ù„Ø¨ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨.",
    problemSolutionEyebrow: "Ù„Ù…Ø§Ø°Ø§ Ù‡Ø°Ø§ Ø§Ù„Ù…Ù†ØªØ¬ØŸ",
    problemSolutionTitle: "Ù…Ø´ÙƒÙ„Ø© Ø¨Ø³ÙŠØ·Ø©ØŒ Ø­Ù„ Ø¹Ù…Ù„ÙŠ",
    problemLabel: "Ù‚Ø¨Ù„",
    solutionLabel: "Ø¨Ø¹Ø¯",
    problemText: "ØªØ¨Ø­Ø« Ø¹Ù† Ø­Ù„ Ø¹Ù…Ù„ÙŠ Ø¨Ø¯ÙˆÙ† ØªØ¹Ù‚ÙŠØ¯ØŒ ÙˆØªØ±ÙŠØ¯ Ø£Ù† ØªØªØ£ÙƒØ¯ Ù…Ù† Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ù‚Ø¨Ù„ Ø§Ù„Ø´Ø±Ø§Ø¡.",
    solutionText: "Ø§Ø®ØªØ± Ø§Ù„Ù…Ù†ØªØ¬ØŒ Ø£ÙƒØ¯ Ø§Ù„Ø·Ù„Ø¨ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨ØŒ ÙˆØ§Ø¯ÙØ¹ Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù… Ø¨Ø¹Ø¯ Ø§Ù„ØªÙˆØµÙ„.",
    sectionDescription: "Ø§Ù„ÙˆØµÙ",
    sectionSpecs: "Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª",
    sectionDelivery: "Ø§Ù„ØªÙˆØµÙŠÙ„",
    sectionRelated: "Ù…Ø´Ø§Ø¨Ù‡Ø©",
    fullscreenImage: "Ø¹Ø±Ø¶ Ø§Ù„ØµÙˆØ±Ø©",
    ratingReviews: "({count} ØªÙ‚ÙŠÙŠÙ…)",
    availableStock: "Ø§Ù„Ù…Ø®Ø²ÙˆÙ† Ù…ØªÙˆÙØ±",
    sendWhatsapp: "Ø£ÙƒØ¯ Ø§Ù„Ø·Ù„Ø¨ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨",
    note: "Ø§Ù„Ø¯ÙØ¹ Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù… Ù…ØªØ§Ø­. Ø³Ù†Ø¤ÙƒØ¯ Ù…Ø¹Ùƒ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ù‚Ø¨Ù„ Ø§Ù„Ø¥Ø±Ø³Ø§Ù„.",
    missing: "Ù„Ù… Ù†Ø¬Ø¯ Ù‡Ø°Ø§ Ø§Ù„Ù…Ù†ØªØ¬.",
    backProducts: "Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ù„Ù…Ù†ØªØ¬Ø§Øª",
    total: "Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹",
    messageIntro: "Ø³Ù„Ø§Ù…ØŒ Ø£Ø±ÙŠØ¯ ØªØ£ÙƒÙŠØ¯ Ù‡Ø°Ø§ Ø§Ù„Ø·Ù„Ø¨:",
    name: "Ø§Ù„Ø§Ø³Ù…",
    phone: "Ø§Ù„Ù‡Ø§ØªÙ",
    address: "Ø§Ù„Ø¹Ù†ÙˆØ§Ù†",
    variant: "Ø§Ù„Ø®ÙŠØ§Ø±",
    viewDetails: "Ø§Ù„ØªÙØ§ØµÙŠÙ„",
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
    estimatedTotal: "Total",
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
    repeatCtaTitle: "Ce produit vous convient ?",
    repeatCtaText: "Verifiez les details, puis remplissez le formulaire quand vous etes pret. On confirme tout sur WhatsApp avant l'envoi.",
    repeatCtaButton: "Aller au formulaire",
    technicalSheet: "Fiche produit",
    specCategory: "Categorie",
    specStock: "Stock",
    specDelivery: "Livraison",
    boxDefault: "Le produit, son emballage, et les accessoires visibles sur les photos.",
    deliveryReturnsText: "Livraison a Tanger sous 24-48h. Paiement a la livraison disponible, probleme traite sur WhatsApp.",
    howToOrderText: "Choisissez la quantite ou l'option, renseignez vos infos, puis confirmez via WhatsApp.",
    problemSolutionEyebrow: "Pourquoi ce produit ?",
    problemSolutionTitle: "Un besoin simple, une solution pratique",
    problemLabel: "Avant",
    solutionLabel: "Apres",
    problemText: "Vous cherchez une solution utile sans complication, avec les details verifies avant l'achat.",
    solutionText: "Choisissez le produit, confirmez sur WhatsApp, puis payez a la livraison apres reception.",
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
    viewDetails: "Details",
  },
};

let products = [
  {
    id: 1,
    category: { ar: "Ù…Ø·Ø¨Ø®", fr: "Cuisine" },
    price: 189,
    title: { ar: "Ø®Ù„Ø§Ø· ØµØºÙŠØ± Ù…Ø­Ù…ÙˆÙ„", fr: "Mini blender portable" },
    description: {
      ar: "Ø®Ù„Ø§Ø· Ø¹Ù…Ù„ÙŠ Ù„Ù„Ø¹ØµØ§Ø¦Ø± Ø§Ù„Ø³Ø±ÙŠØ¹Ø© ÙÙŠ Ø§Ù„Ø¨ÙŠØªØŒ Ø§Ù„Ø¹Ù…Ù„ Ø£Ùˆ Ø§Ù„Ø³ÙØ±. Ø³Ù‡Ù„ Ø§Ù„Ø´Ø­Ù† ÙˆØ§Ù„ØªÙ†Ø¸ÙŠÙ ÙˆÙ…Ù†Ø§Ø³Ø¨ Ù„Ù„Ø§Ø³ØªØ¹Ù…Ø§Ù„ Ø§Ù„ÙŠÙˆÙ…ÙŠ.",
      fr: "Un blender pratique pour les jus rapides a la maison, au bureau ou en deplacement. Rechargeable, compact et facile a nettoyer.",
    },
    highlights: {
      ar: ["Ø¨Ø·Ø§Ø±ÙŠØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ø´Ø­Ù†", "Ø­Ø¬Ù… Ø®ÙÙŠÙ Ù„Ù„Ø­Ù…Ù„", "ÙƒÙˆØ¨ Ù…Ø¯Ù…Ø¬ Ù„Ù„Ø´Ø±Ø¨"],
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
    category: { ar: "Ø§Ù„Ù…Ù†Ø²Ù„", fr: "Maison" },
    price: 129,
    title: { ar: "Ù…Ù†Ø¸Ù… Ù…Ù†Ø²Ù„ÙŠ Ù‚Ø§Ø¨Ù„ Ù„Ù„Ø·ÙŠ", fr: "Organiseur maison pliable" },
    description: {
      ar: "Ø­Ù„ Ø¨Ø³ÙŠØ· Ù„ØªØ±ØªÙŠØ¨ Ø§Ù„Ù…Ù„Ø§Ø¨Ø³ØŒ Ø§Ù„Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª Ø£Ùˆ Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ù…Ù†Ø²Ù„ Ø¨Ø¯ÙˆÙ† Ø£Ø®Ø° Ù…Ø³Ø§Ø­Ø© ÙƒØ¨ÙŠØ±Ø©.",
      fr: "Une solution simple pour organiser vetements, accessoires ou produits de maison sans prendre trop d'espace.",
    },
    highlights: {
      ar: ["Ù‚Ø§Ø¨Ù„ Ù„Ù„Ø·ÙŠ", "Ù…Ù†Ø§Ø³Ø¨ Ù„Ù„Ø®Ø²Ø§Ù†Ø© ÙˆØ§Ù„Ø±ÙÙˆÙ", "Ø³Ù‡Ù„ Ø§Ù„ØªÙ†Ø¸ÙŠÙ"],
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
    category: { ar: "ØªÙ‚Ù†ÙŠØ©", fr: "Tech" },
    price: 159,
    title: { ar: "Ø³Ù…Ø§Ø¹Ø§Øª Ø¨Ù„ÙˆØªÙˆØ« ØµØºÙŠØ±Ø©", fr: "Ecouteurs Bluetooth compact" },
    description: {
      ar: "Ø³Ù…Ø§Ø¹Ø§Øª Ù„Ø§Ø³Ù„ÙƒÙŠØ© Ù„Ù„Ø§Ø³ØªØ¹Ù…Ø§Ù„ Ø§Ù„ÙŠÙˆÙ…ÙŠ Ù…Ø¹ Ø¹Ù„Ø¨Ø© Ø´Ø­Ù† ØµØºÙŠØ±Ø© ÙˆØµÙˆØª ÙˆØ§Ø¶Ø­ Ù„Ù„Ù…ÙƒØ§Ù„Ù…Ø§Øª ÙˆØ§Ù„Ù…ÙˆØ³ÙŠÙ‚Ù‰.",
      fr: "Des ecouteurs sans fil pour le quotidien, avec boitier compact et son clair pour appels et musique.",
    },
    highlights: {
      ar: ["Ø¹Ù„Ø¨Ø© Ø´Ø­Ù†", "Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù…ÙƒØ§Ù„Ù…Ø§Øª", "ØªØµÙ…ÙŠÙ… Ø®ÙÙŠÙ"],
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
    category: { ar: "Ø¬Ù…Ø§Ù„", fr: "Beaute" },
    price: 249,
    title: { ar: "ÙØ±Ø´Ø§Ø© ØªØµÙÙŠÙ 3 ÙÙŠ 1", fr: "Brosse coiffante 3 en 1" },
    description: {
      ar: "ÙØ±Ø´Ø§Ø© Ø¹Ù…Ù„ÙŠØ© Ù„ØªØ¬ÙÙŠÙ ÙˆØªØµÙÙŠÙ Ø§Ù„Ø´Ø¹Ø± Ø¨Ø³Ø±Ø¹Ø©ØŒ Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ø§Ø³ØªØ¹Ù…Ø§Ù„ ÙÙŠ Ø§Ù„Ø¨ÙŠØª Ù‚Ø¨Ù„ Ø§Ù„Ø®Ø±ÙˆØ¬.",
      fr: "Une brosse pratique pour secher et coiffer rapidement les cheveux a la maison.",
    },
    highlights: {
      ar: ["ØªØµÙÙŠÙ Ø³Ø±ÙŠØ¹", "Ø«Ù„Ø§Ø« ÙˆØ¸Ø§Ø¦Ù", "Ù…Ù‚Ø¨Ø¶ Ù…Ø±ÙŠØ­"],
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
    category: { ar: "Ø§Ù„Ù…Ù†Ø²Ù„", fr: "Maison" },
    price: 99,
    title: { ar: "Ù…ØµØ¨Ø§Ø­ LED Ù‚Ø§Ø¨Ù„ Ù„Ù„Ø´Ø­Ù†", fr: "Lampe LED rechargeable" },
    description: {
      ar: "Ù…ØµØ¨Ø§Ø­ Ø®ÙÙŠÙ Ù„Ù„Ù‚Ø±Ø§Ø¡Ø©ØŒ Ø§Ù„Ù…ÙƒØªØ¨ Ø£Ùˆ ØºØ±ÙØ© Ø§Ù„Ù†ÙˆÙ…ØŒ ÙŠØ´ØªØºÙ„ Ø¨Ø§Ù„Ø´Ø­Ù† ÙˆÙŠØ¹Ø·ÙŠ Ø¥Ø¶Ø§Ø¡Ø© Ù†Ø§Ø¹Ù…Ø©.",
      fr: "Une lampe legere pour la lecture, le bureau ou la chambre, rechargeable avec lumiere douce.",
    },
    highlights: {
      ar: ["Ø¥Ø¶Ø§Ø¡Ø© Ù†Ø§Ø¹Ù…Ø©", "Ù‚Ø§Ø¨Ù„ Ù„Ù„Ø´Ø­Ù†", "Ù…Ù†Ø§Ø³Ø¨ Ù„Ù„Ù…ÙƒØªØ¨"],
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
    category: { ar: "ØªÙ‚Ù†ÙŠØ©", fr: "Tech" },
    price: 89,
    title: { ar: "Ø­Ø§Ù…Ù„ Ù‡Ø§ØªÙ Ù„Ù„Ø³ÙŠØ§Ø±Ø©", fr: "Support telephone voiture" },
    description: {
      ar: "Ø­Ø§Ù…Ù„ Ø«Ø§Ø¨Øª Ù„Ù„Ù‡Ø§ØªÙ Ø¯Ø§Ø®Ù„ Ø§Ù„Ø³ÙŠØ§Ø±Ø©ØŒ ÙŠØ³Ø§Ø¹Ø¯Ùƒ ÙÙŠ Ø§Ø³ØªØ¹Ù…Ø§Ù„ Ø§Ù„Ø®Ø±Ø§Ø¦Ø· ÙˆØ§Ù„Ù…ÙƒØ§Ù„Ù…Ø§Øª Ø¨Ø¯ÙˆÙ† Ø¥Ø²Ø¹Ø§Ø¬.",
      fr: "Un support stable pour utiliser le GPS et les appels en voiture plus confortablement.",
    },
    highlights: {
      ar: ["Ø«Ø¨Ø§Øª Ø¬ÙŠØ¯", "Ø¯ÙˆØ±Ø§Ù† Ù…Ø±Ù†", "Ù…Ù†Ø§Ø³Ø¨ Ù„Ù…Ø¹Ø¸Ù… Ø§Ù„Ù‡ÙˆØ§ØªÙ"],
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

function repairText(value) {
  const text = String(value ?? "");
  if (!/[ÃÂØÙ]/.test(text)) return text;
  try {
    const cp1252 = {
      "€": 0x80,
      "‚": 0x82,
      "ƒ": 0x83,
      "„": 0x84,
      "…": 0x85,
      "†": 0x86,
      "‡": 0x87,
      "ˆ": 0x88,
      "‰": 0x89,
      "Š": 0x8a,
      "‹": 0x8b,
      "Œ": 0x8c,
      "Ž": 0x8e,
      "‘": 0x91,
      "’": 0x92,
      "“": 0x93,
      "”": 0x94,
      "•": 0x95,
      "–": 0x96,
      "—": 0x97,
      "˜": 0x98,
      "™": 0x99,
      "š": 0x9a,
      "›": 0x9b,
      "œ": 0x9c,
      "ž": 0x9e,
      "Ÿ": 0x9f,
    };
    const bytes = Uint8Array.from([...text].map((char) => cp1252[char] ?? char.charCodeAt(0)));
    return new TextDecoder("utf-8").decode(bytes);
  } catch (error) {
    return text;
  }
}

function t(key) {
  return repairText(translations[currentLang][key] || key);
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
  if (typeof value === "string") return repairText(value);
  return repairText(value?.[currentLang] ?? value?.ar ?? value?.fr ?? "");
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

function productHasBoxContent(product) {
  return Boolean(localText(product.box));
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
  const title = `${localText(product.title)} | TanjaMol`;
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
    Cuisine: { ar: "Ù…Ø·Ø¨Ø®", fr: "Cuisine" },
    Maison: { ar: "Ø§Ù„Ù…Ù†Ø²Ù„", fr: "Maison" },
    Tech: { ar: "ØªÙ‚Ù†ÙŠØ©", fr: "Tech" },
    Beaute: { ar: "Ø¬Ù…Ø§Ù„", fr: "Beaute" },
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
  ".product-content-cards",
  ".problem-solution-section",
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

function selectedAddOns() {
  return [...document.querySelectorAll("[data-addon-product].is-added")].map((button) => ({
    id: Number(button.dataset.addonProduct),
    title: button.dataset.addonTitle || "",
    price: Number(button.dataset.addonPrice || 0),
  }));
}

function buildProductMessage(product, formData) {
  const qty = Number(formData.get("qty")) || 1;
  const variantId = formData.get("variant");
  const selectedVariant = (product.variants || []).find((variant) => variant.id === variantId);
  const variantLine = selectedVariant ? [`${t("variant")}: ${localText(selectedVariant.name)}`] : [];
  const unitPrice = product.price + Number(selectedVariant?.extraPrice || 0);
  const addOns = selectedAddOns();
  const addOnLines = addOns.length
    ? ["", currentLang === "ar" ? "Ø¥Ø¶Ø§ÙØ§Øª Ø§Ù„Ø·Ù„Ø¨:" : "Ajouts:", ...addOns.map((item) => `- ${item.title}: ${money(item.price)}`)]
    : [];
  const addOnTotal = addOns.reduce((sum, item) => sum + item.price, 0);
  return [
    t("messageIntro"),
    `- ${localText(product.title)} x${qty}: ${money(unitPrice * qty)}`,
    ...variantLine,
    ...addOnLines,
    `${t("total")}: ${money(unitPrice * qty + addOnTotal)}`,
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
  const addOns = selectedAddOns();
  const addOnItems = addOns.map((item) => ({
    id: item.id,
    title: item.title,
    variant: null,
    qty: 1,
    price: item.price,
  }));
  const addOnTotal = addOns.reduce((sum, item) => sum + item.price, 0);
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
        ...addOnItems,
      ],
      total: unitPrice * qty + addOnTotal,
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
  const discount = discountPercent(product);
  return `
    <article class="product-card compact-card" data-related-product="${product.id}">
      <div class="product-image">
        ${image ? `<img src="${image}" alt="${localText(product.title)}" loading="lazy" />` : `<div class="product-image-placeholder">${localText(product.title)}</div>`}
        <span class="badge ${discount ? "badge-offer" : "badge-cod"}">${discount ? `-${discount}%` : t("cod")}</span>
      </div>
      <div class="product-info">
        <h3 class="product-title">${localText(product.title)}</h3>
        <div class="product-meta">
          <div class="product-price-line">
            <strong class="price">${money(product.price)}</strong>
            ${product.oldPrice ? `<span class="card-old-price">${money(product.oldPrice)}</span>` : ""}
          </div>
        </div>
        <div class="delivery-note">${t("delivery")}</div>
        <button class="add-button related-details-button" type="button">${t("viewDetails")}</button>
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
  const colorNames = ["Ø£Ø³ÙˆØ¯", "Ø£Ø¨ÙŠØ¶", "Ø£Ø­Ù…Ø±", "Ø£Ø²Ø±Ù‚", "Ø¨Ù†ÙŠ", "Ø±Ù…Ø§Ø¯ÙŠ", "Noir", "Blanc", "Rouge", "Bleu", "Brown", "Gray", "Grey"];
  const sizeNames = ["XS", "S", "M", "L", "XL", "XXL"];
  if (names.length && names.every((name) => colorNames.includes(name))) return currentLang === "ar" ? "Ø§Ù„Ù„ÙˆÙ†" : "Couleur";
  if (names.length && names.every((name) => sizeNames.includes(name))) return currentLang === "ar" ? "Ø§Ù„Ù…Ù‚Ø§Ø³" : "Taille";
  return currentLang === "ar" ? "Ø§Ù„Ù„ÙˆÙ† / Ø§Ù„Ù…Ù‚Ø§Ø³" : "Couleur / taille";
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
  const rating = productRating(product);
  const variants = product.variants || [];
  return `
    <section class="pdp-buy-summary pdp-info-column">
      <h1>${localText(product.title)}</h1>
      ${intro ? `<p class="buy-box-intro">${intro}</p>` : ""}
      ${
        rating
          ? `<div class="desktop-rating-row" aria-label="${rating.value} / 5">
              <span>${"â˜…".repeat(Math.round(rating.value))}</span>
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
        <span class="trust-strip-icon">â†©</span>
        <div>
          <h2>${t("easyReturnTitle")}</h2>
          <p>${t("easyReturnText")}</p>
        </div>
      </article>
      <article>
        <span class="trust-strip-icon">â–£</span>
        <div>
          <h2>${t("deliveryCityTitle")}</h2>
          <p>${t("deliveryCityText")} ${t("delivery")}</p>
        </div>
      </article>
      <article>
        <span class="trust-strip-icon">â–¤</span>
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
    <form class="checkout-form product-order-form landing-order-form" data-product-order data-base-price="${Number(product.price || 0)}" data-old-price="${Number(product.oldPrice || 0)}">
      <div class="desktop-order-price">
        <h2>${t("checkoutHeading")}</h2>
        <div class="landing-price-row">
          ${product.oldPrice ? `<span data-order-old-total>${money(product.oldPrice)}</span>` : ""}
          <strong data-order-total>${money(Number(product.price || 0) + firstExtraPrice)}</strong>
          ${discountPercent(product) ? `<em>-${discountPercent(product)}%</em>` : ""}
        </div>
      </div>
      <div class="order-form-heading">
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
      <label class="quantity-field">
        <span>${t("qtyLabel")}</span>
        <div class="product-qty-stepper">
          <button type="button" data-qty-step="-1" aria-label="-">-</button>
          <input name="qty" type="number" min="1"${maxQty} value="1" required />
          <button type="button" data-qty-step="1" aria-label="+">+</button>
        </div>
      </label>
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
        <span><i aria-hidden="true">âœ“</i>${t("cod")}</span>
        <span><i aria-hidden="true">âœ“</i>${t("note")}</span>
      </div>
    </form>
  `;
}

function productFaq(product) {
  const boxText = productHasBoxContent(product) ? productBoxText(product) : t("boxDefault");
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
          <p>${boxText}</p>
        </details>
      </div>
    </section>
  `;
}

function productDescriptionSection(product) {
  if (!localText(product.description)) return "";
  return `
    <section id="description-section" class="landing-story">
      <div>
        <span class="eyebrow">${t("description")}</span>
        <h2>${localText(product.title)}</h2>
        <div class="rich-product-description">${richDescriptionMarkup(product)}</div>
      </div>
    </section>
  `;
}

function productContentCards(product) {
  const highlights = productHighlights(product).slice(0, 6);
  const boxText = productHasBoxContent(product) ? productBoxText(product) : "";
  const cards = [
    highlights.length
      ? `
        <article class="content-card content-card-list">
          <span class="eyebrow">${t("highlights")}</span>
          <h2>${t("highlights")}</h2>
          <ul>
            ${highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      `
      : "",
    boxText
      ? `
        <article class="content-card">
          <span class="eyebrow">${t("whatsInBox")}</span>
          <h2>${t("whatsInBox")}</h2>
          <p>${escapeHtml(boxText)}</p>
        </article>
      `
      : "",
    `
      <article class="content-card">
        <span class="eyebrow">${t("deliveryReturns")}</span>
        <h2>${t("deliveryReturns")}</h2>
        <p>${t("deliveryReturnsText")}</p>
      </article>
    `,
    `
      <article class="content-card">
        <span class="eyebrow">${t("howToOrder")}</span>
        <h2>${t("howToOrder")}</h2>
        <p>${t("howToOrderText")}</p>
      </article>
    `,
  ].filter(Boolean);

  return `<section class="product-content-cards">${cards.join("")}</section>`;
}

function productProblemSolution(product) {
  const summary = productSummary(product);
  return `
    <section class="problem-solution-section">
      <div class="problem-solution-heading">
        <span class="eyebrow">${t("problemSolutionEyebrow")}</span>
        <h2>${t("problemSolutionTitle")}</h2>
        ${summary ? `<p>${escapeHtml(summary)}</p>` : ""}
      </div>
      <div class="problem-solution-grid">
        <article>
          <strong>${t("problemLabel")}</strong>
          <p>${t("problemText")}</p>
        </article>
        <article>
          <strong>${t("solutionLabel")}</strong>
          <p>${t("solutionText")}</p>
        </article>
      </div>
    </section>
  `;
}

function modernText(ar, fr) {
  return repairText(currentLang === "fr" ? fr : ar);
}

function modernMoney(value) {
  return `MAD ${Number(value || 0)}`;
}

function modernImages(product) {
  const images = (product.images || []).filter(Boolean);
  return images.length ? images : [""];
}

function firstAvailableVariant(variants) {
  return variants.find((variant) => variant.stock === undefined || variant.stock === null || variant.stock === "" || Number(variant.stock) > 0) || variants[0];
}

function variantName(variant) {
  return localText(variant?.name);
}

function variantKind(product, variants) {
  const label = variantLabelForProduct(product).toLowerCase();
  const names = variants.map((variant) => variantName(variant).toLowerCase());
  const colorWords = ["Ø£Ø¨ÙŠØ¶", "Ø§Ø¨ÙŠØ¶", "Ø£Ø³ÙˆØ¯", "Ø§Ø³ÙˆØ¯", "Ø£Ø²Ø±Ù‚", "Ø§Ø²Ø±Ù‚", "Ø£Ø­Ù…Ø±", "Ø§Ø­Ù…Ø±", "Ø£Ø®Ø¶Ø±", "Ø§Ø®Ø¶Ø±", "ÙˆØ±Ø¯ÙŠ", "Ø±Ù…Ø§Ø¯ÙŠ", "ÙØ¶ÙŠ", "Ø°Ù‡Ø¨ÙŠ", "blanc", "noir", "bleu", "rouge", "vert", "rose", "gris", "argent", "or"];
  return label.includes("Ù„ÙˆÙ†") || label.includes("couleur") || names.some((name) => colorWords.includes(name)) ? "color" : "pill";
}

function swatchColor(label) {
  const name = String(label || "").toLowerCase();
  if (["Ø£Ø¨ÙŠØ¶", "Ø§Ø¨ÙŠØ¶", "blanc", "white"].includes(name)) return "#f8fafc";
  if (["Ø£Ø³ÙˆØ¯", "Ø§Ø³ÙˆØ¯", "noir", "black"].includes(name)) return "#111827";
  if (["Ø£Ø²Ø±Ù‚", "Ø§Ø²Ø±Ù‚", "bleu", "blue"].includes(name)) return "#2563eb";
  if (["Ø£Ø­Ù…Ø±", "Ø§Ø­Ù…Ø±", "rouge", "red"].includes(name)) return "#ef4444";
  if (["Ø£Ø®Ø¶Ø±", "Ø§Ø®Ø¶Ø±", "vert", "green"].includes(name)) return "#22c55e";
  if (["ÙˆØ±Ø¯ÙŠ", "rose", "pink"].includes(name)) return "#ec4899";
  if (["Ø±Ù…Ø§Ø¯ÙŠ", "gris", "gray", "grey"].includes(name)) return "#9ca3af";
  if (["ÙØ¶ÙŠ", "argent", "silver"].includes(name)) return "#d1d5db";
  if (["Ø°Ù‡Ø¨ÙŠ", "or", "gold"].includes(name)) return "#d4a017";
  return "#e5e7eb";
}

function modernGallery(product) {
  const images = modernImages(product);
  const title = escapeHtml(localText(product.title));
  return `
    <div class="gallery-card">
      <div class="gallery-stage">
        ${
          images[0]
            ? `<img class="detail-main-image" data-main-image src="${images[0]}" alt="${title}" loading="eager" fetchpriority="high" />`
            : `<div class="modern-image-placeholder">${title}</div>`
        }
      </div>
      ${
        images.length > 1
          ? `<div class="thumb-strip" aria-label="Product images">
              ${images
                .map(
                  (image, index) => `
                    <button class="thumb ${index === 0 ? "is-active active" : ""}" type="button" data-thumb="${image}" aria-label="${title} ${index + 1}">
                      <img src="${image}" alt="${title} ${index + 1}" loading="lazy" />
                    </button>
                  `,
                )
                .join("")}
            </div>`
          : ""
      }
    </div>
  `;
}

function modernRating(product) {
  const rating = productRating(product);
  if (!rating) return "";
  const stars = "â˜…".repeat(Math.round(rating.value));
  return `
    <div class="rating-row" aria-label="${rating.value} / 5">
      <span class="stars">${stars}</span>
      <span>${rating.value} ${modernText("Ù…Ù†", "sur")} ${rating.count} ${modernText("ØªÙ‚ÙŠÙŠÙ…", "avis")}</span>
    </div>
  `;
}

function modernPriceRow(product, firstExtraPrice = 0) {
  const price = Number(product.price || 0) + Number(firstExtraPrice || 0);
  const discount = discountPercent(product);
  return `
    <div class="price-row">
      <strong data-hero-price>${modernMoney(price)}</strong>
      ${product.oldPrice ? `<span>${modernMoney(Number(product.oldPrice || 0) + Number(firstExtraPrice || 0))}</span>` : ""}
      ${discount ? `<em>${modernText("ØªØ®ÙÙŠØ¶", "Promo")} ${discount}%</em>` : ""}
    </div>
  `;
}

function modernVariantSelector(product, variants) {
  if (!variants.length) return "";
  const first = firstAvailableVariant(variants);
  const kind = variantKind(product, variants);
  const label = repairText(variantLabelForProduct(product));
  if (kind === "color") {
    return `
      <fieldset class="choice-block color-choice modern-variant-control">
        <div class="choice-title">
          <span>${label}</span>
        </div>
        <div class="swatch-row" aria-label="${label}">
          ${variants
            .map((variant) => {
              const unavailable = variant.stock !== undefined && variant.stock !== null && variant.stock !== "" && Number(variant.stock) <= 0;
              const selected = first?.id === variant.id;
              const name = variantName(variant);
              return `
                <label class="color-swatch ${selected ? "is-selected" : ""} ${unavailable ? "is-disabled" : ""}" style="--swatch: ${swatchColor(name)};" aria-label="${escapeHtml(name)}">
                  <input name="variant" form="product-order-form" type="radio" value="${variant.id}" data-extra-price="${Number(variant.extraPrice || 0)}" ${selected ? "checked" : ""} ${unavailable ? "disabled" : ""} />
                  <span></span>
                </label>
              `;
            })
            .join("")}
        </div>
      </fieldset>
    `;
  }

  return `
    <fieldset class="choice-block modern-variant-control">
      <div class="choice-title">
        <span>${label}</span>
      </div>
      <div class="variant-pill-row">
        ${variants
          .map((variant) => {
            const unavailable = variant.stock !== undefined && variant.stock !== null && variant.stock !== "" && Number(variant.stock) <= 0;
            const selected = first?.id === variant.id;
            return `
              <label class="variant-pill ${selected ? "is-selected" : ""} ${unavailable ? "is-disabled" : ""}">
                <input name="variant" form="product-order-form" type="radio" value="${variant.id}" data-extra-price="${Number(variant.extraPrice || 0)}" ${selected ? "checked" : ""} ${unavailable ? "disabled" : ""} />
                <span>${escapeHtml(variantName(variant))}${variant.extraPrice ? ` +${modernMoney(variant.extraPrice)}` : ""}</span>
              </label>
            `;
          })
          .join("")}
      </div>
    </fieldset>
  `;
}

function modernBenefits(product) {
  const highlights = productHighlights(product).slice(0, 5);
  if (!highlights.length) return "";
  return `
    <ul class="benefit-list" aria-label="${t("highlights")}">
      ${highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function stockLine(product, soldOut, lowStock) {
  if (soldOut) return t("outOfStock");
  if (lowStock) return t("lowStock");
  return modernText("Ù…ØªÙˆÙØ± Ø§Ù„Ø¢Ù† Ø¯Ø§Ø®Ù„ Ø·Ù†Ø¬Ø©", "Disponible a Tanger");
}

function modernCheckout(product, variants, soldOut, lowStock) {
  const first = firstAvailableVariant(variants);
  const firstExtraPrice = Number(first?.extraPrice || 0);
  const maxQty = productHasManagedStock(product) && Number(product.stock) > 0 ? ` max="${Number(product.stock)}"` : "";
  const offer = productOffer(product);
  return `
    <div class="checkout-card" id="order-form">
      <h2 id="order-title">${modernText("Ø£ÙƒØ¯ Ø·Ù„Ø¨Ùƒ", "Confirmez votre commande")}</h2>
      <div class="checkout-price">
        <span data-order-total>${modernMoney(Number(product.price || 0) + firstExtraPrice)}</span>
      </div>

      <form id="product-order-form" class="order-form" data-product-order data-base-price="${Number(product.price || 0)}" data-old-price="${Number(product.oldPrice || 0)}">
        <label>
          ${t("nameLabel")}
          <input name="name" type="text" placeholder="${repairText(currentLang === "ar" ? "Ù…Ø«Ø§Ù„: Ù…Ø­Ù…Ø¯ Ø£Ù…ÙŠÙ†" : "Ex: Mohamed Amine")}" required />
        </label>
        <label>
          ${t("phoneLabel")}
          <input name="phone" type="tel" placeholder="06 12 34 56 78" required />
        </label>
        <label>
          ${t("addressLabel")}
          <input name="address" type="text" placeholder="${repairText(currentLang === "ar" ? "Ù…Ø«Ø§Ù„: Ø·Ù†Ø¬Ø©ØŒ Ù…Ø§Ù„Ø§Ø¨Ø§Ø·Ø§" : "Ex: Tanger, Malabata")}" required />
        </label>
        <div class="quantity-row">
          <span>${t("qtyLabel")}</span>
          <div class="quantity-control">
            <button type="button" data-qty-step="-1" aria-label="-">-</button>
            <input name="qty" type="number" min="1"${maxQty} value="1" required aria-label="${t("qtyLabel")}" />
            <button type="button" data-qty-step="1" aria-label="+">+</button>
          </div>
        </div>
        <button class="whatsapp-cta whatsapp-checkout" type="submit" ${soldOut ? "disabled" : ""}>
          <svg class="whatsapp-mark" viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3.2c-7.06 0-12.8 5.72-12.8 12.77 0 2.25.59 4.45 1.72 6.38L3.13 29l6.82-1.79a12.73 12.73 0 0 0 6.09 1.55h.01c7.05 0 12.79-5.72 12.79-12.77 0-3.41-1.33-6.62-3.75-9.04a12.7 12.7 0 0 0-9.05-3.75Zm0 23.4h-.01c-1.93 0-3.82-.52-5.46-1.5l-.39-.23-4.04 1.06 1.08-3.94-.25-.4a10.58 10.58 0 0 1-1.62-5.62c0-5.87 4.79-10.64 10.69-10.64 2.85 0 5.53 1.11 7.55 3.13a10.55 10.55 0 0 1 3.13 7.53c0 5.86-4.79 10.61-10.68 10.61Zm5.86-7.95c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.52-.16-.74.16-.21.32-.85 1.04-1.04 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.74-1.78-1.02-2.44-.27-.64-.54-.55-.74-.56h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.67s1.15 3.1 1.31 3.31c.16.22 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.67.77.24 1.46.2 2.01.12.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z"/></svg>
          <span>${soldOut ? t("outOfStock") : escapeHtml(offer.ctaLabel)}</span>
        </button>
      </form>

      <div class="trust-mini">
        <span>${t("cod")}</span>
        <span>${modernText("Ù†ØªÙˆØ§ØµÙ„ Ù…Ø¹Ùƒ Ù„ØªØ£ÙƒÙŠØ¯ Ø§Ù„ØªÙØ§ØµÙŠÙ„", "Confirmation sur WhatsApp")}</span>
      </div>
    </div>
  `;
}

function modernAddOns(product) {
  const addOns = products
    .filter((item) => item.id !== product.id && item.active !== false)
    .slice(0, 3);
  if (!addOns.length) return "";
  return `
    <section class="add-ons-section" aria-labelledby="addons-title">
      <div class="section-heading add-ons-heading">
        <h2 id="addons-title">${modernText("Ù…Ù†ØªØ¬Ø§Øª ØªÙƒÙ…Ù„ Ø·Ù„Ø¨Ùƒ", "Produits qui completent votre commande")}</h2>
      </div>
      <div class="add-ons-grid">
        ${addOns
          .map((item) => {
            const image = (item.images || []).find(Boolean);
            return `
              <button class="add-on-card" type="button" data-addon-product="${item.id}" data-addon-title="${escapeHtml(localText(item.title))}" data-addon-price="${Number(item.price || 0)}" aria-pressed="false">
                <span class="addon-media">
                  ${image ? `<img src="${image}" alt="${escapeHtml(localText(item.title))}" loading="lazy" />` : `<span>${escapeHtml(localText(item.title))}</span>`}
                </span>
                <span class="addon-copy">
                  <span class="addon-title">${escapeHtml(localText(item.title))}</span>
                  <span class="addon-desc">${escapeHtml(productSummary(item))}</span>
                </span>
                <span class="addon-footer">
                  <strong>+ ${modernMoney(item.price)}</strong>
                  <span class="addon-action">${modernText("Ø£Ø¶Ù Ù„Ù„Ø·Ù„Ø¨", "Ajouter")}</span>
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function modernLandingSections(product) {
  const images = modernImages(product);
  const summary = productSummary(product);
  const highlights = productHighlights(product);
  const boxText = productHasBoxContent(product) ? productBoxText(product) : t("boxDefault");
  const specs = productSpecs(product).slice(0, 4);
  return `
    <section class="landing-section split-feature" aria-labelledby="why-title">
      <div class="section-copy">
        <p class="section-kicker">${modernText("Ù„Ù…Ø§Ø°Ø§ ØªØ®ØªØ§Ø±Ù‡ØŸ", "Pourquoi le choisir ?")}</p>
        <h2 id="why-title">${localText(product.title)}</h2>
        ${summary ? `<p>${escapeHtml(summary)}</p>` : ""}
        ${
          highlights.length
            ? `<div class="feature-list">
                ${highlights
                  .slice(0, 3)
                  .map(
                    (item, index) => `
                      <article>
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <strong>${escapeHtml(item)}</strong>
                        <p>${modernText("ØªÙØµÙŠÙ„ Ø¨Ø³ÙŠØ· ÙŠØ³Ø§Ø¹Ø¯ Ø§Ù„Ø¹Ù…ÙŠÙ„ ÙŠÙÙ‡Ù… Ø§Ù„Ù‚ÙŠÙ…Ø© Ù‚Ø¨Ù„ Ø§Ù„Ø·Ù„Ø¨.", "Un detail simple pour comprendre la valeur avant de commander.")}</p>
                      </article>
                    `,
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>
      <div class="section-media tall">
        ${images[1] ? `<img src="${images[1]}" alt="${escapeHtml(localText(product.title))}" loading="lazy" />` : ""}
      </div>
    </section>

    <section class="use-section flexible-product-section" aria-labelledby="use-title">
      <div class="section-heading">
        <h2 id="use-title">${modernText("Ù†Ø¸Ø±Ø© Ø£Ù‚Ø±Ø¨ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ù†ØªØ¬", "Un regard plus proche sur le produit")}</h2>
      </div>
      <div class="step-grid">
        <article>
          ${images[0] ? `<img src="${images[0]}" alt="${escapeHtml(localText(product.title))}" loading="lazy" />` : ""}
          <span>1</span>
          <h3>${modernText("ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø§Ø³ØªØ¹Ù…Ø§Ù„", "Details d'utilisation")}</h3>
          <p>${summary ? escapeHtml(summary) : modernText("ÙÙƒØ±Ø© Ø³Ø±ÙŠØ¹Ø© Ø¹Ù† Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø§Ø³ØªÙØ§Ø¯Ø© Ù…Ù† Ø§Ù„Ù…Ù†ØªØ¬ ÙÙŠ Ø§Ù„ÙŠÙˆÙ…ÙŠ.", "Une idee rapide de l'utilisation du produit au quotidien.")}</p>
        </article>
        <article>
          ${images[1] ? `<img src="${images[1]}" alt="${escapeHtml(localText(product.title))}" loading="lazy" />` : ""}
          <span>2</span>
          <h3>${modernText("Ø£Ø¨Ø±Ø² Ø§Ù„Ù…Ù…ÙŠØ²Ø§Øª", "Points forts")}</h3>
          <p>${highlights[0] ? escapeHtml(highlights[0]) : modernText("Ø§Ø³ØªØ¹Ø±Ø§Ø¶ Ø¨Ø³ÙŠØ· Ù„Ù…Ø§ ÙŠØ¬Ø¹Ù„ Ø§Ù„Ù…Ù†ØªØ¬ Ù…ÙÙŠØ¯Ø§.", "Un resume simple de ce qui rend le produit utile.")}</p>
        </article>
        <article>
          ${images[2] ? `<img src="${images[2]}" alt="${escapeHtml(localText(product.title))}" loading="lazy" />` : ""}
          <span>3</span>
          <h3>${modernText("Ù…Ù†Ø§Ø³Ø¨ Ù„Ù…Ù†ØŸ", "Pour qui ?")}</h3>
          <p>${highlights[1] ? escapeHtml(highlights[1]) : modernText("Ù…Ø³Ø§Ø­Ø© Ù…Ø±Ù†Ø© Ù„Ø´Ø±Ø­ Ø£ÙŠ Ø²Ø§ÙˆÙŠØ© ØªØ³ÙˆÙŠÙ‚ÙŠØ© Ù„Ù„Ù…Ù†ØªØ¬.", "Un espace flexible pour expliquer l'angle marketing du produit.")}</p>
        </article>
      </div>
    </section>

    <section class="proof-section" aria-labelledby="proof-title">
      <div>
        <p class="section-kicker">${modernText("Ø«Ù‚Ø© Ù‚Ø¨Ù„ Ø§Ù„Ø·Ù„Ø¨", "Confiance avant commande")}</p>
        <h2 id="proof-title">${modernText("Ø·Ù„Ø¨ ÙˆØ§Ø¶Ø­ØŒ ØªØ£ÙƒÙŠØ¯ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨ØŒ ÙˆØ¯ÙØ¹ Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù….", "Commande claire, confirmation WhatsApp et paiement a la livraison.")}</h2>
      </div>
      <div class="proof-grid">
        <article><strong>24-48h</strong><span>${t("delivery")}</span></article>
        <article><strong>COD</strong><span>${t("cod")}</span></article>
        <article><strong>WhatsApp</strong><span>${modernText("ØªØ£ÙƒÙŠØ¯ Ù‚Ø¨Ù„ Ø§Ù„Ø¥Ø±Ø³Ø§Ù„", "Confirmation avant envoi")}</span></article>
      </div>
    </section>

    <section class="landing-section reverse">
      <div class="section-media">
        ${images[2] ? `<img src="${images[2]}" alt="${escapeHtml(localText(product.title))}" loading="lazy" />` : ""}
      </div>
      <div class="section-copy">
        <p class="section-kicker">${t("whatsInBox")}</p>
        <h2>${modernText("ÙƒÙ„ Ù…Ø§ ØªØ­ØªØ§Ø¬Ù‡ Ù‚Ø¨Ù„ Ø§Ù„Ø·Ù„Ø¨ ÙˆØ§Ø¶Ø­ Ù‡Ù†Ø§.", "Tout ce qu'il faut savoir avant de commander.")}</h2>
        <ul class="box-list">
          <li>${escapeHtml(boxText)}</li>
          ${specs.map((spec) => `<li>${escapeHtml(localText(spec.label) || spec.label)}: ${escapeHtml(localText(spec.value) || spec.value)}</li>`).join("")}
        </ul>
        <a class="soft-cta" href="#order-form">${t("repeatCtaButton")}</a>
      </div>
    </section>

    <section class="faq-section" aria-labelledby="faq-title">
      <div class="section-heading">
        <p>${modernText("Ø£Ø³Ø¦Ù„Ø© Ø³Ø±ÙŠØ¹Ø©", "Questions rapides")}</p>
        <h2 id="faq-title">${modernText("ÙƒÙ„ Ù…Ø§ ØªØ­ØªØ§Ø¬ Ù…Ø¹Ø±ÙØªÙ‡ Ù‚Ø¨Ù„ Ø§Ù„Ø·Ù„Ø¨", "Ce qu'il faut savoir avant de commander")}</h2>
      </div>
      <details open>
        <summary>${t("deliveryReturns")}</summary>
        <p>${t("deliveryReturnsText")}</p>
      </details>
      <details>
        <summary>${t("whatsInBox")}</summary>
        <p>${escapeHtml(boxText)}</p>
      </details>
    </section>
  `;
}

function updateOrderTotal(form) {
  if (!form) return;
  const basePrice = Number(form.dataset.basePrice || 0);
  const oldPrice = Number(form.dataset.oldPrice || 0);
  const qty = Math.max(1, Number(form.elements.qty?.value || 1));
  const selectedVariant = form.querySelector('input[name="variant"]:checked') || document.querySelector('input[name="variant"]:checked');
  const extraPrice = Number(selectedVariant?.dataset.extraPrice || 0);
  const addOnTotal = selectedAddOns().reduce((sum, item) => sum + item.price, 0);
  const total = (basePrice + extraPrice) * qty + addOnTotal;
  document.querySelectorAll("[data-order-total]").forEach((node) => {
    node.textContent = modernMoney(total);
  });
  document.querySelectorAll("[data-mobile-total]").forEach((node) => {
    node.textContent = modernMoney(total);
  });
  document.querySelectorAll("[data-hero-price]").forEach((node) => {
    node.textContent = modernMoney(basePrice + extraPrice);
  });
  const oldTotalNode = form.querySelector("[data-order-old-total]");
  if (oldTotalNode && oldPrice > basePrice) {
    oldTotalNode.textContent = modernMoney((oldPrice + extraPrice) * qty + addOnTotal);
  }
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
      <button class="gallery-lightbox-close" type="button" data-close-gallery aria-label="Close">Ã—</button>
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
  const discount = discountPercent(product);
  const firstVariant = firstAvailableVariant(variants);
  const firstExtraPrice = Number(firstVariant?.extraPrice || 0);

  trackEvent("product_view", { productId: product.id });
  updateProductMeta(product, soldOut);

  page.innerHTML = `
    <section class="product-page modern-product-page">
      <section class="product-hero" aria-labelledby="product-title">
        <div class="media-column">
          ${modernGallery(product)}
        </div>

        <article class="details-column">
          ${modernRating(product)}
          <h1 id="product-title">${escapeHtml(localText(product.title))}</h1>
          ${productSummary(product) ? `<p class="summary">${escapeHtml(productSummary(product))}</p>` : ""}
          ${modernPriceRow(product, firstExtraPrice)}
          ${modernVariantSelector(product, variants)}
          ${modernBenefits(product)}
        </article>

        <aside class="purchase-column" aria-labelledby="order-title">
          ${modernCheckout(product, variants, soldOut, lowStock)}
        </aside>
      </section>

      ${modernAddOns(product)}
      ${modernLandingSections(product)}

      <section class="final-cta" aria-labelledby="final-cta-title">
        <p>${modernText("Ø¬Ø§Ù‡Ø² ØªØ·Ù„Ø¨ØŸ", "Pret a commander ?")}</p>
        <h2 id="final-cta-title">${t("repeatCtaTitle")}</h2>
        <a href="#order-form">${t("repeatCtaButton")}</a>
      </section>

      <div class="mobile-sticky">
        <div>
          <span data-mobile-total>${modernMoney(Number(product.price || 0) + firstExtraPrice)}</span>
          <small>${t("cod")}</small>
        </div>
        <a href="#order-form">${modernText("Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†", "Commander")}</a>
      </div>
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
  const addOn = event.target.closest("[data-addon-product]");
  if (thumb) {
    const mainImage = document.querySelector(".detail-main-image");
    const galleryStage = thumb.closest(".gallery-card")?.querySelector(".gallery-stage");
    if (mainImage?.src !== thumb.dataset.thumb) {
      galleryStage?.classList.add("is-changing");
      mainImage.classList.add("is-switching");
      window.setTimeout(() => {
        mainImage.src = thumb.dataset.thumb;
      }, 140);
      mainImage.addEventListener("load", () => {
        mainImage.classList.remove("is-switching");
        galleryStage?.classList.remove("is-changing");
      }, { once: true });
      window.setTimeout(() => mainImage.classList.remove("is-switching"), 520);
    }
    document.querySelector("[data-open-gallery]")?.setAttribute("data-open-gallery", thumb.dataset.thumb);
    document.querySelectorAll("[data-thumb]").forEach((button) => {
      button.classList.toggle("active", button === thumb);
      button.classList.toggle("is-active", button === thumb);
    });
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
  if (addOn) {
    const isAdded = addOn.classList.toggle("is-added");
    addOn.setAttribute("aria-pressed", String(isAdded));
    const action = addOn.querySelector(".addon-action");
    if (action) {
      action.textContent = isAdded ? modernText("Ù…Ø¶Ø§Ù Ù„Ù„Ø·Ù„Ø¨", "Ajoute") : modernText("Ø£Ø¶Ù Ù„Ù„Ø·Ù„Ø¨", "Ajouter");
    }
    updateOrderTotal(document.querySelector("[data-product-order]"));
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
  const group = variant.closest(".modern-variant-control");
  if (group) {
    group.querySelectorAll(".color-swatch, .variant-pill").forEach((node) => {
      const input = node.querySelector('input[name="variant"]');
      node.classList.toggle("is-selected", input === variant);
    });
  }
  updateOrderTotal(document.querySelector("[data-product-order]"));
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

