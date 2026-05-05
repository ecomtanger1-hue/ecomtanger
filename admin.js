let store = { products: [], orders: [], settings: {} };
let selectedProductId = null;

const productsList = document.querySelector("[data-admin-products]");
const ordersList = document.querySelector("[data-admin-orders]");
const productForm = document.querySelector("[data-product-form]");
const settingsForm = document.querySelector("[data-settings-form]");
const imageList = document.querySelector("[data-image-list]");
const orderSearch = document.querySelector("[data-order-search]");

function money(value) {
  return `${Number(value || 0)} MAD`;
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

async function loadStore() {
  store = await api("/api/admin/store");
  renderAll();
}

function renderAll() {
  renderStats();
  renderProducts();
  renderOrders();
  renderSettings();
}

function renderStats() {
  document.querySelector("[data-stat-products]").textContent = store.products.length;
  document.querySelector("[data-stat-low-stock]").textContent = store.products.filter((product) => Number(product.stock) <= 5).length;
  document.querySelector("[data-stat-orders]").textContent = (store.orders || []).filter((order) => !["delivered", "cancelled"].includes(order.status)).length;
  document.querySelector("[data-stat-whatsapp]").textContent = (store.analytics || []).filter((event) => event.event === "whatsapp_redirect").length;
}

function renderProducts() {
  productsList.innerHTML = store.products
    .map(
      (product) => `
        <article class="admin-product-row" data-edit-product="${product.id}">
          <img src="${product.images?.[0] || ""}" alt="" />
          <div>
            <h3>${product.title?.fr || product.title?.ar || "Untitled product"}</h3>
            <p>${product.category} · ${money(product.price)} · stock ${product.stock}</p>
          </div>
          <span class="status-pill">${product.featured ? "Featured" : product.active ? "Live" : "Hidden"}</span>
        </article>
      `,
    )
    .join("");
}

function renderOrders() {
  const query = orderSearch.value.trim().toLowerCase();
  const orders = (store.orders || []).filter((order) => {
    const text = [
      order.id,
      order.status,
      order.createdAt,
      order.customer?.name,
      order.customer?.phone,
      order.customer?.address,
      ...(order.items || []).map((item) => item.title?.fr || item.title?.ar || item.title),
      ...(order.items || []).map((item) => item.variant?.name?.fr || item.variant?.name?.ar || ""),
    ]
      .join(" ")
      .toLowerCase();
    return text.includes(query);
  });
  if (!orders.length) {
    ordersList.innerHTML = `<p class="empty-cart">No orders yet. Storefront orders will appear here once customers submit checkout through the local server.</p>`;
    return;
  }

  ordersList.innerHTML = orders
    .map(
      (order) => `
        <article class="order-row">
          <div>
            <h3>#${order.id} · ${order.customer?.name || "Customer"} · ${money(order.total)}</h3>
            <p>${order.customer?.phone || ""} · ${order.customer?.address || ""}</p>
          </div>
          <select data-order-status="${order.id}">
            ${["new", "confirmed", "out_for_delivery", "delivered", "cancelled", "returned"]
              .map((status) => `<option value="${status}" ${order.status === status ? "selected" : ""}>${status.replaceAll("_", " ")}</option>`)
              .join("")}
          </select>
          <div class="order-items">
            ${(order.items || [])
              .map((item) => {
                const variant = item.variant ? ` · ${item.variant.name?.fr || item.variant.name?.ar || ""}` : "";
                return `<span>${item.title?.fr || item.title?.ar || item.title}${variant} x${item.qty} - ${money(item.price * item.qty)}</span>`;
              })
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSettings() {
  settingsForm.storeName.value = store.settings.storeName || "";
  settingsForm.whatsappNumber.value = store.settings.whatsappNumber || "";
  settingsForm.featuredProductId.value = store.settings.featuredProductId || 1;
}

function fillProductForm(product = null) {
  selectedProductId = product?.id || null;
  productForm.id.value = product?.id || "";
  productForm.sku.value = product?.sku || "";
  productForm.category.value = product?.category || "Maison";
  productForm.price.value = product?.price || "";
  productForm.oldPrice.value = product?.oldPrice || "";
  productForm.stock.value = product?.stock ?? 0;
  productForm.active.checked = product?.active ?? true;
  productForm.featured.checked = product?.featured || false;
  productForm.titleAr.value = product?.title?.ar || "";
  productForm.titleFr.value = product?.title?.fr || "";
  productForm.descriptionAr.value = product?.description?.ar || "";
  productForm.descriptionFr.value = product?.description?.fr || "";
  productForm.highlightsAr.value = (product?.highlights?.ar || []).join("\n");
  productForm.highlightsFr.value = (product?.highlights?.fr || []).join("\n");
  productForm.variants.value = (product?.variants || [])
    .map((variant) => `${variant.name?.ar || ""} | ${variant.name?.fr || ""} | ${variant.extraPrice || 0} | ${variant.stock ?? 0}`)
    .join("\n");
  productForm.images.value = (product?.images || []).join("\n");
  renderImageManager();
}

function productFromForm() {
  return {
    sku: productForm.sku.value,
    category: productForm.category.value,
    price: Number(productForm.price.value),
    oldPrice: productForm.oldPrice.value ? Number(productForm.oldPrice.value) : null,
    stock: Number(productForm.stock.value),
    active: productForm.active.checked,
    featured: productForm.featured.checked,
    title: {
      ar: productForm.titleAr.value,
      fr: productForm.titleFr.value,
    },
    description: {
      ar: productForm.descriptionAr.value,
      fr: productForm.descriptionFr.value,
    },
    highlights: {
      ar: productForm.highlightsAr.value.split("\n").map((item) => item.trim()).filter(Boolean),
      fr: productForm.highlightsFr.value.split("\n").map((item) => item.trim()).filter(Boolean),
    },
    variants: productForm.variants.value
      .split("\n")
      .map((line, index) => {
        const [ar = "", fr = "", extraPrice = "0", stock = "0"] = line.split("|").map((item) => item.trim());
        return ar || fr
          ? {
              id: `v${index + 1}`,
              name: { ar, fr },
              extraPrice: Number(extraPrice || 0),
              stock: Number(stock || 0),
            }
          : null;
      })
      .filter(Boolean),
    images: productForm.images.value.split("\n").map((item) => item.trim()).filter(Boolean),
  };
}

function currentImages() {
  return productForm.images.value.split("\n").map((item) => item.trim()).filter(Boolean);
}

function setImages(images) {
  productForm.images.value = images.join("\n");
  renderImageManager();
}

function renderImageManager() {
  const images = currentImages();
  if (!images.length) {
    imageList.innerHTML = `<p class="empty-cart">No images yet. Upload one or paste image URLs.</p>`;
    return;
  }
  imageList.innerHTML = images
    .map(
      (image, index) => `
        <div class="image-row">
          <img src="${image}" alt="" />
          <code>${index === 0 ? "Cover: " : ""}${image}</code>
          <div class="image-tools">
            <button type="button" data-image-up="${index}" aria-label="Move up">↑</button>
            <button type="button" data-image-down="${index}" aria-label="Move down">↓</button>
            <button type="button" data-image-remove="${index}" aria-label="Remove">×</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

document.addEventListener("click", async (event) => {
  const tab = event.target.closest("[data-admin-tab]");
  const edit = event.target.closest("[data-edit-product]");
  const up = event.target.closest("[data-image-up]");
  const down = event.target.closest("[data-image-down]");
  const remove = event.target.closest("[data-image-remove]");

  if (tab) {
    document.querySelectorAll("[data-admin-tab]").forEach((button) => button.classList.toggle("active", button === tab));
    document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === tab.dataset.adminTab));
  }

  if (event.target.closest("[data-new-product]") || event.target.closest("[data-reset-product]")) {
    fillProductForm();
  }

  if (event.target.closest("[data-logout]")) {
    await api("/api/logout", { method: "POST" });
    window.location.href = "admin-login.html";
  }

  if (edit) {
    fillProductForm(store.products.find((product) => product.id === Number(edit.dataset.editProduct)));
  }

  if (up || down || remove) {
    const images = currentImages();
    const index = Number((up || down || remove).dataset.imageUp ?? (up || down || remove).dataset.imageDown ?? (up || down || remove).dataset.imageRemove);
    if (up && index > 0) [images[index - 1], images[index]] = [images[index], images[index - 1]];
    if (down && index < images.length - 1) [images[index + 1], images[index]] = [images[index], images[index + 1]];
    if (remove) images.splice(index, 1);
    setImages(images);
  }

  if (event.target.closest("[data-delete-product]") && selectedProductId) {
    if (!confirm("Delete this product?")) return;
    await api(`/api/products/${selectedProductId}`, { method: "DELETE" });
    fillProductForm();
    await loadStore();
  }
});

document.addEventListener("change", async (event) => {
  const statusSelect = event.target.closest("[data-order-status]");
  const upload = event.target.closest("input[name='imageUpload']");
  if (upload?.files?.[0]) {
    const images = currentImages();
    images.push(await fileToDataUrl(upload.files[0]));
    upload.value = "";
    setImages(images);
    return;
  }
  if (!statusSelect) return;
  await api(`/api/orders/${statusSelect.dataset.orderStatus}`, {
    method: "PATCH",
    body: JSON.stringify({ status: statusSelect.value }),
  });
  await loadStore();
});

productForm.images.addEventListener("input", renderImageManager);
orderSearch.addEventListener("input", renderOrders);

productForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = productFromForm();
  const path = selectedProductId ? `/api/products/${selectedProductId}` : "/api/products";
  await api(path, {
    method: selectedProductId ? "PUT" : "POST",
    body: JSON.stringify(payload),
  });
  await loadStore();
});

settingsForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await api("/api/settings", {
    method: "PUT",
    body: JSON.stringify({
      storeName: settingsForm.storeName.value,
      whatsappNumber: settingsForm.whatsappNumber.value,
      featuredProductId: Number(settingsForm.featuredProductId.value),
    }),
  });
  await loadStore();
});

loadStore().catch((error) => {
  document.querySelector(".admin-main").innerHTML = `<p class="empty-cart">Could not load admin data. Start the local server with <code>node server.js</code> and open <code>http://127.0.0.1:4173/admin.html</code>.</p><pre>${error.message}</pre>`;
});
