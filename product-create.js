const form = document.querySelector("[data-create-product-form]");
const statusMessage = document.querySelector("[data-form-status]");
const imageList = document.querySelector("[data-create-image-list]");
const completionLabel = document.querySelector("[data-completion-label]");
const completionBar = document.querySelector("[data-completion-bar]");
const completionHelp = document.querySelector("[data-completion-help]");
const variantControls = document.querySelector("[data-variant-controls]");
const presetChipGrid = document.querySelector("[data-preset-chip-grid]");
const variantTable = document.querySelector("[data-variant-table]");
const richEditor = document.querySelector("[data-rich-editor]");
const htmlSourceEditor = document.querySelector("[data-rich-editor-source]");
const descriptionValue = document.querySelector("[data-description-value]");
const editorPopover = document.querySelector("[data-editor-popover]");
const editorImageUpload = document.querySelector("[data-editor-image-upload]");
const publishChecklist = document.querySelector("[data-publish-checklist]");
const productPreview = document.querySelector("[data-product-preview]");
const editingProductId = Number(new URLSearchParams(window.location.search).get("id")) || null;

const defaultCategories = ["Maison", "Cuisine", "Tech", "Beaute", "Clothing"];

const variantPresets = {
  Size: ["S", "M", "L", "XL"],
  Color: ["أسود", "أبيض", "أحمر", "أزرق"],
  Material: ["قطن", "جلد", "خشب", "بلاستيك"],
  Pack: ["قطعة واحدة", "زوج", "3 قطع", "6 قطع"],
  Scent: ["ورد", "عود", "مسك", "فانيلا"],
  Capacity: ["250ml", "500ml", "1L", "2L"],
};

const variantLabels = {
  Size: { ar: "المقاس", fr: "Taille" },
  Color: { ar: "اللون", fr: "Couleur" },
  Material: { ar: "المادة", fr: "Matiere" },
  Pack: { ar: "الكمية", fr: "Pack" },
  Scent: { ar: "الرائحة", fr: "Parfum" },
  Capacity: { ar: "السعة", fr: "Capacite" },
};

let selectedVariantValues = [];
let customVariantValues = [];
let variantDrafts = {};
let savedEditorRange = null;
let sourceMode = false;

function categoryTitle(category) {
  if (typeof category?.title === "string") return category.title;
  return category?.title?.ar || category?.title?.fr || category?.id || "";
}

function addCategoryOption(category, label = category) {
  if (!category) return;
  const existing = [...form.category.options].find((option) => option.value === category);
  if (existing) {
    existing.textContent = label || category;
    return;
  }
  const option = new Option(category, category);
  option.textContent = label || category;
  form.category.add(option);
}

function renderCategorySuggestions(products = [], categoriesFromStore = []) {
  defaultCategories.forEach((category) => addCategoryOption(category));
  categoriesFromStore.forEach((category) => addCategoryOption(category.id, categoryTitle(category)));
  products.map((product) => product.category).filter(Boolean).forEach((category) => addCategoryOption(category));
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function productImageSource(file) {
  if (StoreBackend.enabled()) return StoreBackend.uploadImage(file, "products");
  return imageToCompressedDataUrl(file, 1400, 0.82);
}

async function editorImageSource(file) {
  if (StoreBackend.enabled()) return StoreBackend.uploadImage(file, "descriptions");
  return imageToCompressedDataUrl(file, 1100, 0.76);
}

function imageToCompressedDataUrl(file, maxSize = 1200, quality = 0.78) {
  if (!file.type.startsWith("image/")) return fileToDataUrl(file);
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(image.src);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    image.onerror = async () => {
      URL.revokeObjectURL(image.src);
      resolve(await fileToDataUrl(file));
    };
    image.src = URL.createObjectURL(file);
  });
}

function lines(value) {
  return String(value || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function offerDefaults() {
  return {
    eyebrow: { ar: "عرض اليوم", fr: "Offre du jour" },
    ctaLabel: { ar: "اطلب الآن", fr: "Commander" },
    trustBadges: [
      { label: { ar: "الدفع عند الاستلام", fr: "Paiement a la livraison" }, tone: "green" },
      { label: { ar: "توصيل داخل طنجة", fr: "Livraison a Tanger" }, tone: "teal" },
      { label: { ar: "تأكيد سريع", fr: "Confirmation rapide" }, tone: "green" },
    ],
  };
}

function textRecord(value, fallback = "") {
  if (typeof value === "string") return { ar: value, fr: value };
  return {
    ar: value?.ar || value?.fr || fallback,
    fr: value?.fr || value?.ar || fallback,
  };
}

function offerPayload() {
  const defaults = offerDefaults();
  const eyebrow = form.offerEyebrow.value.trim() || defaults.eyebrow.ar;
  const ctaLabel = form.offerCtaLabel.value.trim() || defaults.ctaLabel.ar;
  return {
    eyebrow: { ar: eyebrow, fr: eyebrow },
    ctaLabel: { ar: ctaLabel, fr: ctaLabel },
    trustBadges: [0, 1, 2]
      .map((index) => {
        const fallback = defaults.trustBadges[index];
        const label = form[`trustBadgeLabel${index}`].value.trim() || fallback.label.ar;
        return {
          label: { ar: label, fr: label },
          tone: form[`trustBadgeTone${index}`].value || fallback.tone,
        };
      })
      .filter((badge) => badge.label.ar || badge.label.fr),
  };
}

function specsFromText(value) {
  return lines(value).map((line) => {
    const separator = line.includes(":") ? ":" : line.includes("：") ? "：" : null;
    if (!separator) return { label: line, value: "" };
    const [label, ...rest] = line.split(separator);
    return {
      label: label.trim(),
      value: rest.join(separator).trim(),
    };
  }).filter((spec) => spec.label || spec.value);
}

function specsToText(specs = []) {
  return specs
    .map((spec) => [spec.label, spec.value].filter(Boolean).join(": "))
    .filter(Boolean)
    .join("\n");
}

function productBoxPayload() {
  const included = form.box.value.trim();
  const summary = form.summary.value.trim();
  const socialProof = form.socialProofText.value.trim();
  const ratingValue = form.ratingValue.value ? Number(form.ratingValue.value) : null;
  const reviewCount = form.reviewCount.value ? Number(form.reviewCount.value) : null;
  const variantLabel = form.hasVariants.checked ? variantLabels[form.variantPreset.value] || { ar: form.variantPreset.value, fr: form.variantPreset.value } : { ar: "", fr: "" };
  return {
    ar: included,
    fr: included,
    summary: { ar: summary, fr: summary },
    socialProof: { ar: socialProof, fr: socialProof },
    rating: { value: ratingValue, count: reviewCount },
    variantLabel,
    specs: specsFromText(form.specs.value),
    offer: offerPayload(),
  };
}

function currentImages() {
  return lines(form.images.value);
}

function setImages(images) {
  form.images.value = images.join("\n");
  renderImages();
  updateCompletion();
}

function renderImages() {
  const images = currentImages();
  if (!images.length) {
    imageList.innerHTML = `<p class="empty-cart">No images yet.</p>`;
    return;
  }

  imageList.innerHTML = images
    .map(
      (image, index) => `
        <div class="create-image-row">
          <img src="${escapeHtml(image)}" alt="" />
          <div>
            <strong>${index === 0 ? "Cover image" : `Image ${index + 1}`}</strong>
            <span class="image-source-label">${image.startsWith("data:") ? "Uploaded image" : "Image URL"}</span>
          </div>
          <div class="create-image-actions">
            <button type="button" data-cover-image="${index}" ${index === 0 ? "disabled" : ""} aria-label="Set image as cover">Cover</button>
            <button type="button" data-move-image="${index}" data-direction="-1" ${index === 0 ? "disabled" : ""} aria-label="Move image up">Up</button>
            <button type="button" data-move-image="${index}" data-direction="1" ${index === images.length - 1 ? "disabled" : ""} aria-label="Move image down">Down</button>
            <button type="button" data-insert-product-image="${index}" aria-label="Insert image in description">Insert</button>
            <button type="button" data-remove-image="${index}" aria-label="Remove image">Remove</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderPresetChips() {
  const values = variantPresets[form.variantPreset.value] || [];
  const allValues = [...values, ...customVariantValues];
  selectedVariantValues = selectedVariantValues.filter((value) => allValues.includes(value));
  presetChipGrid.innerHTML = allValues
    .map(
      (value) => `
        <button class="${selectedVariantValues.includes(value) ? "selected" : ""}" type="button" data-preset-value="${value}">
          ${value}
        </button>
      `,
    )
    .join("");
  renderVariantTable();
}

function renderVariantTable() {
  if (!selectedVariantValues.length) {
    variantTable.innerHTML = `<p class="empty-cart">Choose one or more preset values to create variant rows.</p>`;
    return;
  }

  variantTable.innerHTML = `
    <div class="variant-table-header">
      <span>Option</span>
      <span>Extra MAD</span>
      <span>Stock</span>
    </div>
    ${selectedVariantValues
      .map(
        (value, index) => `
          <div class="variant-table-row">
            <strong>${value}</strong>
            <input name="variantExtra${index}" type="number" min="0" value="${variantDrafts[value]?.extraPrice ?? 0}" aria-label="${value} extra price" />
            <input name="variantStock${index}" type="number" min="0" value="${variantDrafts[value]?.stock ?? form.stock.value ?? 0}" aria-label="${value} stock" />
          </div>
        `,
      )
      .join("")}
  `;
}

function sanitizeDescriptionHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html || "";
  template.content.querySelectorAll("script, style, iframe, object, embed, link, meta").forEach((node) => node.remove());
  template.content.querySelectorAll("*").forEach((node) => {
    [...node.attributes].forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim().toLowerCase();
      if (name.startsWith("on")) node.removeAttribute(attribute.name);
      if ((name === "href" || name === "src") && value.startsWith("javascript:")) node.removeAttribute(attribute.name);
    });
  });
  return template.innerHTML.trim();
}

function currentDescriptionHtml() {
  return sourceMode ? htmlSourceEditor.value.trim() : richEditor.innerHTML.trim();
}

function syncDescriptionValue() {
  descriptionValue.value = sanitizeDescriptionHtml(currentDescriptionHtml());
  updateCompletion();
}

function saveEditorSelection() {
  const selection = window.getSelection();
  if (!selection?.rangeCount) return;
  const range = selection.getRangeAt(0);
  if (richEditor.contains(range.commonAncestorContainer)) {
    savedEditorRange = range.cloneRange();
  }
}

function restoreEditorSelection() {
  focusEditor();
  const selection = window.getSelection();
  selection.removeAllRanges();
  if (savedEditorRange) {
    selection.addRange(savedEditorRange);
    return;
  }
  const range = document.createRange();
  range.selectNodeContents(richEditor);
  range.collapse(false);
  selection.addRange(range);
}

function plainDescription() {
  if (!sourceMode) return richEditor.innerText.trim();
  const template = document.createElement("template");
  template.innerHTML = htmlSourceEditor.value;
  return template.content.textContent.trim();
}

function focusEditor() {
  richEditor.focus();
}

function runEditorCommand(command, value = null) {
  restoreEditorSelection();
  document.execCommand(command, false, value);
  saveEditorSelection();
  syncDescriptionValue();
}

function closeEditorPopover() {
  editorPopover.hidden = true;
  editorPopover.innerHTML = "";
}

function showEditorChoices(items) {
  editorPopover.innerHTML = items
    .map((item) => `<button type="button" data-editor-insert="${item.value}">${item.label}</button>`)
    .join("");
  editorPopover.hidden = false;
}

function insertHtml(html) {
  runEditorCommand("insertHTML", html);
}

function insertLink() {
  const url = prompt("Paste the link URL");
  if (!url) return;
  runEditorCommand("createLink", url);
}

function insertMedia(type) {
  const url = prompt(type === "image" ? "Paste the image URL" : "Paste the video URL");
  if (!url) return;
  if (type === "image") {
    insertHtml(`<img src="${url}" alt="" />`);
    return;
  }
  insertHtml(`<p><a href="${url}" target="_blank" rel="noopener">Video link</a></p>`);
}

function insertTable() {
  insertHtml("<table><tbody><tr><td>ميزة</td><td>تفاصيل</td></tr><tr><td></td><td></td></tr></tbody></table><p></p>");
}

function insertSpacer() {
  insertHtml('<div class="description-spacer" aria-hidden="true"></div><p></p>');
}

function toggleFullscreenEditor() {
  document.body.classList.toggle("rich-editor-fullscreen");
  if (sourceMode) htmlSourceEditor.focus();
  else focusEditor();
}

function toggleSourceMode() {
  const sourceButton = document.querySelector("[data-editor-command='sourceMode']");
  if (sourceMode) {
    const cleanHtml = sanitizeDescriptionHtml(htmlSourceEditor.value);
    richEditor.innerHTML = cleanHtml;
    htmlSourceEditor.value = cleanHtml;
    htmlSourceEditor.hidden = true;
    richEditor.hidden = false;
    sourceMode = false;
    sourceButton?.classList.remove("is-active");
    syncDescriptionValue();
    focusEditor();
    return;
  }
  syncDescriptionValue();
  htmlSourceEditor.value = descriptionValue.value;
  richEditor.hidden = true;
  htmlSourceEditor.hidden = false;
  sourceMode = true;
  sourceButton?.classList.add("is-active");
  htmlSourceEditor.focus();
}

function setEditorDirection(direction) {
  richEditor.setAttribute("dir", direction);
  richEditor.style.textAlign = direction === "rtl" ? "right" : "left";
  runEditorCommand(direction === "rtl" ? "justifyRight" : "justifyLeft");
}

function updateCompletion() {
  const checks = [
    { key: "title", label: "Product name", done: Boolean(form.title.value.trim()), required: true },
    { key: "price", label: "Price", done: Boolean(form.price.value), required: true },
    { key: "images", label: "At least one image", done: currentImages().length > 0, required: true },
    { key: "description", label: "Rich description", done: Boolean(plainDescription()), required: true },
    { key: "summary", label: "Short selling summary", done: Boolean(form.summary.value.trim()), required: false },
    { key: "benefits", label: "Quick benefits", done: lines(form.highlights.value).length >= 3, required: false },
    { key: "social", label: "Social proof", done: Boolean(form.socialProofText.value.trim()), required: false },
    { key: "reviews", label: "Rating and reviews", done: Boolean(form.ratingValue.value && form.reviewCount.value), required: false },
    { key: "specs", label: "Structured specs", done: specsFromText(form.specs.value).length > 0, required: false },
  ];
  const done = checks.filter((check) => check.done).length;
  const percent = Math.round((done / checks.length) * 100);
  if (completionLabel) completionLabel.textContent = `${percent}%`;
  if (completionBar) completionBar.style.width = `${percent}%`;
  const missingRequired = checks.filter((check) => check.required && !check.done);
  if (completionHelp) {
    completionHelp.textContent = missingRequired.length ? `Required: ${missingRequired.map((check) => check.label).join(", ")}.` : "Ready to save. Optional improvements can still make the product page stronger.";
  }
  renderPublishChecklist(checks);
  renderProductPreview();
}

function renderPublishChecklist(checks) {
  if (!publishChecklist) return;
  publishChecklist.innerHTML = `
    <strong>Publishing checklist</strong>
    ${checks
      .map(
        (check) => `
          <span class="${check.done ? "done" : ""}">
            ${check.done ? "✓" : "•"} ${check.label}${check.required ? "" : " (recommended)"}
          </span>
        `,
      )
      .join("")}
  `;
}

function renderProductPreview() {
  if (!productPreview) return;
  const title = form.title.value.trim() || "Product preview";
  const price = form.price.value ? `MAD ${Number(form.price.value)}` : "MAD --";
  const oldPrice = form.oldPrice.value ? `MAD ${Number(form.oldPrice.value)}` : "";
  const image = currentImages()[0];
  const summary = form.summary.value.trim() || plainDescription() || "Add a short summary to preview the product decision area.";
  const offer = offerPayload();
  const trustBadges = offer.trustBadges.slice(0, 3);
  const socialProof = form.socialProofText.value.trim();
  const reviewCount = form.reviewCount.value.trim();
  productPreview.innerHTML = `
    ${image ? `<img src="${escapeHtml(image)}" alt="" />` : `<div class="mini-product-placeholder">Image</div>`}
    <div>
      <small>${escapeHtml(offer.eyebrow.ar)}</small>
      <strong>${escapeHtml(title)}</strong>
      <span>${oldPrice ? `<del>${oldPrice}</del> ` : ""}${price}</span>
      ${socialProof ? `<small>${escapeHtml(socialProof)}</small>` : ""}
      ${reviewCount ? `<small>★★★★★ (${escapeHtml(reviewCount)})</small>` : ""}
      <p>${escapeHtml(summary)}</p>
      <div class="mini-trust-row">
        ${trustBadges.map((badge) => `<em class="tone-${badge.tone || "green"}">${escapeHtml(badge.label.ar || badge.label.fr)}</em>`).join("")}
      </div>
      <button type="button">${escapeHtml(offer.ctaLabel.ar)}</button>
    </div>
  `;
}

function productPayload() {
  const title = form.title.value.trim();
  syncDescriptionValue();
  const description = descriptionValue.value.trim();

  return {
    sku: form.sku.value.trim(),
    category: form.category.value || "Maison",
    price: Number(form.price.value || 0),
    oldPrice: form.oldPrice.value ? Number(form.oldPrice.value) : null,
    stock: form.stock.value === "" ? "" : Number(form.stock.value),
    active: form.status.value === "active",
    featured: form.featured.checked,
    title: { ar: title, fr: title },
    description: { ar: description, fr: description },
    highlights: { ar: lines(form.highlights.value), fr: lines(form.highlights.value) },
    box: productBoxPayload(),
    images: currentImages(),
    variants: form.hasVariants.checked
      ? selectedVariantValues.map((value, index) => ({
          id: variantDrafts[value]?.id || `v${index + 1}`,
          name: { ar: value, fr: value },
          extraPrice: Number(form[`variantExtra${index}`]?.value || 0),
          stock: Number(form[`variantStock${index}`]?.value || 0),
        }))
      : [],
  };
}

function setPageMode(product = null) {
  document.querySelector(".create-hero h1").textContent = product ? "Edit product" : "Create product";
  document.querySelector(".create-hero p").textContent = product ? "Update the product listing, rich description, images, pricing, and variants." : "Write one clear Arabic product listing now. Translation can come later.";
  document.querySelectorAll(".primary-action[form='product-create-form'], .publishing-card .primary-action").forEach((button) => {
    button.textContent = product ? "Save changes" : "Save product";
  });
  statusMessage.textContent = product ? `Editing product #${product.id}` : "Draft not saved";
}

function variantValue(variant) {
  return variant.name?.ar || variant.name?.fr || "";
}

function fillOfferFields(offer = {}) {
  const defaults = offerDefaults();
  const eyebrow = textRecord(offer.eyebrow, defaults.eyebrow.ar);
  const ctaLabel = textRecord(offer.ctaLabel, defaults.ctaLabel.ar);
  const badges = Array.isArray(offer.trustBadges) ? offer.trustBadges : [];
  form.offerEyebrow.value = eyebrow.ar || defaults.eyebrow.ar;
  form.offerCtaLabel.value = ctaLabel.ar || defaults.ctaLabel.ar;
  [0, 1, 2].forEach((index) => {
    const fallback = defaults.trustBadges[index];
    const badge = badges[index] || fallback;
    const label = textRecord(badge.label, fallback.label.ar);
    form[`trustBadgeLabel${index}`].value = label.ar || fallback.label.ar;
    form[`trustBadgeTone${index}`].value = badge.tone || fallback.tone;
  });
}

function fillProductForm(product) {
  form.title.value = product.title?.ar || product.title?.fr || "";
  form.sku.value = product.sku || "";
  addCategoryOption(product.category);
  form.category.value = product.category || "Maison";
  form.status.value = product.active === false ? "draft" : "active";
  form.images.value = (product.images || []).join("\n");
  form.price.value = product.price ?? "";
  form.oldPrice.value = product.oldPrice ?? "";
  form.stock.value = product.stock ?? "";
  form.featured.checked = Boolean(product.featured);
  richEditor.innerHTML = product.description?.ar || product.description?.fr || "";
  form.summary.value = product.box?.summary?.ar || product.box?.summary?.fr || "";
  form.socialProofText.value = product.box?.socialProof?.ar || product.box?.socialProof?.fr || "";
  form.ratingValue.value = product.box?.rating?.value ?? 5;
  form.reviewCount.value = product.box?.rating?.count ?? "";
  form.highlights.value = (product.highlights?.ar || product.highlights?.fr || []).join("\n");
  form.box.value = product.box?.ar || product.box?.fr || "";
  form.specs.value = specsToText(product.box?.specs || []);
  fillOfferFields(product.box?.offer);

  selectedVariantValues = [];
  customVariantValues = [];
  variantDrafts = {};
  if ((product.variants || []).length) {
    form.hasVariants.checked = true;
    variantControls.hidden = false;
    selectedVariantValues = product.variants.map(variantValue).filter(Boolean);
    customVariantValues = [...selectedVariantValues];
    product.variants.forEach((variant) => {
      const value = variantValue(variant);
      if (value) {
        variantDrafts[value] = {
          id: variant.id,
          extraPrice: Number(variant.extraPrice || 0),
          stock: Number(variant.stock || 0),
        };
      }
    });
  }

  setPageMode(product);
  renderImages();
  renderPresetChips();
  syncDescriptionValue();
}

async function loadEditableProduct() {
  let store = null;
  try {
    store = await StoreBackend.getAdminStore();
    renderCategorySuggestions(store.products || [], store.categories || []);
  } catch (error) {
    if (!editingProductId) {
      renderCategorySuggestions();
      setPageMode();
      return;
    }
    throw error;
  }

  if (!editingProductId) {
    setPageMode();
    return;
  }
  statusMessage.textContent = "Loading product...";
  const product = (store.products || []).find((item) => item.id === editingProductId);
  if (!product) {
    statusMessage.textContent = "Product not found";
    alert("Product not found");
    window.location.href = "admin.html";
    return;
  }
  fillProductForm(product);
}

document.addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove-image]");
  const insertProductImage = event.target.closest("[data-insert-product-image]");
  const coverImage = event.target.closest("[data-cover-image]");
  const moveImage = event.target.closest("[data-move-image]");
  const preset = event.target.closest("[data-preset-value]");
  const editorButton = event.target.closest("[data-editor-command]");
  const editorInsert = event.target.closest("[data-editor-insert]");

  if (editorButton) {
    saveEditorSelection();
    const command = editorButton.dataset.editorCommand;
    if (command === "sourceMode") toggleSourceMode();
    else if (command === "fullscreen") toggleFullscreenEditor();
    else if (sourceMode) return;
    else if (command === "directionRtl") setEditorDirection("rtl");
    else if (command === "directionLtr") setEditorDirection("ltr");
    else if (command === "createLink") insertLink();
    else if (command === "insertTable") insertTable();
    else if (command === "spacer") insertSpacer();
    else if (command === "emoji") showEditorChoices(["✨", "🔥", "✅", "😍", "🎁", "⭐"].map((value) => ({ label: value, value })));
    else if (command === "symbol") showEditorChoices(["Ω", "™", "®", "✓", "×", "→"].map((value) => ({ label: value, value })));
    else if (command === "code") insertHtml("<code>code</code>");
    else if (command === "image") editorImageUpload.click();
    else if (command === "video") insertMedia("video");
    else runEditorCommand(command);
  }

  if (editorInsert) {
    insertHtml(editorInsert.dataset.editorInsert);
    closeEditorPopover();
  }

  if (event.target.closest("[data-save-draft]")) {
    form.status.value = "draft";
    form.requestSubmit();
  }

  if (event.target.closest("[data-add-custom-variant]")) {
    const value = form.customVariant.value.trim();
    if (!value) return;
    if (!customVariantValues.includes(value) && !(variantPresets[form.variantPreset.value] || []).includes(value)) {
      customVariantValues.push(value);
    }
    if (!selectedVariantValues.includes(value)) selectedVariantValues.push(value);
    if (!variantDrafts[value]) variantDrafts[value] = { extraPrice: 0, stock: Number(form.stock.value || 0) };
    form.customVariant.value = "";
    renderPresetChips();
  }

  if (remove) {
    const images = currentImages();
    images.splice(Number(remove.dataset.removeImage), 1);
    setImages(images);
  }

  if (coverImage) {
    const images = currentImages();
    const index = Number(coverImage.dataset.coverImage);
    const [image] = images.splice(index, 1);
    if (image) setImages([image, ...images]);
  }

  if (moveImage) {
    const images = currentImages();
    const index = Number(moveImage.dataset.moveImage);
    const nextIndex = index + Number(moveImage.dataset.direction || 0);
    if (nextIndex >= 0 && nextIndex < images.length) {
      [images[index], images[nextIndex]] = [images[nextIndex], images[index]];
      setImages(images);
    }
  }

  if (insertProductImage) {
    saveEditorSelection();
    const image = currentImages()[Number(insertProductImage.dataset.insertProductImage)];
    if (image) insertHtml(`<img src="${image}" alt="" />`);
  }

  if (preset) {
    const value = preset.dataset.presetValue;
    selectedVariantValues = selectedVariantValues.includes(value)
      ? selectedVariantValues.filter((item) => item !== value)
      : [...selectedVariantValues, value];
    if (!variantDrafts[value]) variantDrafts[value] = { extraPrice: 0, stock: Number(form.stock.value || 0) };
    renderPresetChips();
  }
});

form.addEventListener("input", updateCompletion);

richEditor.addEventListener("input", syncDescriptionValue);
richEditor.addEventListener("keyup", saveEditorSelection);
richEditor.addEventListener("mouseup", saveEditorSelection);
richEditor.addEventListener("focus", saveEditorSelection);
richEditor.addEventListener("blur", () => {
  saveEditorSelection();
  syncDescriptionValue();
});

htmlSourceEditor.addEventListener("input", syncDescriptionValue);

document.addEventListener("change", (event) => {
  const format = event.target.closest("[data-editor-format]");
  const block = event.target.closest("[data-editor-block]");
  if (format) runEditorCommand(format.dataset.editorFormat, format.value);
  if (block) runEditorCommand("formatBlock", block.value);
});

form.addEventListener("change", async (event) => {
  if (event.target === form.hasVariants) {
    variantControls.hidden = !form.hasVariants.checked;
    renderPresetChips();
  }

  if (event.target === form.variantPreset) {
    selectedVariantValues = [];
    customVariantValues = [];
    renderPresetChips();
  }

  if (event.target === form.stock && form.hasVariants.checked) {
    renderVariantTable();
  }

  if (event.target === form.imageUpload && form.imageUpload.files?.[0]) {
    const images = currentImages();
    statusMessage.textContent = "Uploading image...";
    images.push(await productImageSource(form.imageUpload.files[0]));
    form.imageUpload.value = "";
    setImages(images);
    statusMessage.textContent = editingProductId ? `Editing product #${editingProductId}` : "Draft not saved";
  }

  if (event.target === editorImageUpload && editorImageUpload.files?.[0]) {
    statusMessage.textContent = "Uploading editor image...";
    restoreEditorSelection();
    insertHtml(`<img src="${await editorImageSource(editorImageUpload.files[0])}" alt="" />`);
    editorImageUpload.value = "";
    statusMessage.textContent = editingProductId ? `Editing product #${editingProductId}` : "Draft not saved";
  }
});

form.images.addEventListener("input", renderImages);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  syncDescriptionValue();
  if (!plainDescription()) {
    statusMessage.textContent = "Add a product description";
    richEditor.focus();
    return;
  }
  statusMessage.textContent = "Saving...";
  try {
    const payload = productPayload();
    const product = await StoreBackend.saveProduct(payload, editingProductId);
    statusMessage.textContent = editingProductId ? `Product #${product.id} updated` : `Product #${product.id} saved`;
    setTimeout(() => {
      window.location.href = "admin.html";
    }, 700);
  } catch (error) {
    statusMessage.textContent = "Could not save product";
    alert(error.message === "Failed to fetch" ? "The product could not be saved. Check your Supabase connection or local server." : error.message);
  }
});

renderImages();
renderPresetChips();
renderCategorySuggestions([], []);
fillOfferFields();
updateCompletion();
StoreBackend.requireAdmin()
  .then(loadEditableProduct)
  .catch((error) => {
    if (error.message === "Admin login required") return;
    statusMessage.textContent = "Could not load product";
    alert(error.message);
  });
