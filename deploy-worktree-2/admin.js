let store = { products: [], orders: [], settings: {} };
let currentProductFilter = "all";

const productsList = document.querySelector("[data-admin-products]");
const ordersList = document.querySelector("[data-admin-orders]");
const settingsForm = document.querySelector("[data-settings-form]");
const orderSearch = document.querySelector("[data-order-search]");
const productSearch = document.querySelector("[data-product-search]");

function money(value) {
  return `${Number(value || 0)} MAD`;
}

function textValue(value) {
  if (typeof value === "string") return value;
  return value?.ar || value?.fr || "";
}

function productStockLabel(product) {
  if (product.stock === undefined || product.stock === null || product.stock === "") return "Not tracked";
  return Number(product.stock) <= 0 ? "Out of stock" : `${product.stock} in stock`;
}

function productStatus(product) {
  if (product.featured) return "Featured";
  return product.active === false ? "Draft" : "Live";
}

async function loadStore() {
  store = await StoreBackend.getAdminStore();
  renderAll();
}

function renderAll() {
  renderStats();
  renderProducts();
  renderOrders();
  renderSettings();
}

function renderStats() {
  const openOrders = (store.orders || []).filter((order) => !["delivered", "cancelled"].includes(order.status)).length;
  document.querySelector("[data-stat-products]").textContent = store.products.length;
  document.querySelector("[data-stat-low-stock]").textContent = store.products.filter((product) => product.stock !== undefined && product.stock !== null && product.stock !== "" && Number(product.stock) <= 5).length;
  document.querySelector("[data-stat-orders]").textContent = openOrders;
  document.querySelector("[data-stat-whatsapp]").textContent = (store.analytics || []).filter((event) => event.event === "whatsapp_redirect").length;
  document.querySelector("[data-side-products]").textContent = store.products.length;
  document.querySelector("[data-side-orders]").textContent = openOrders;
}

function filteredProducts() {
  const query = productSearch.value.trim().toLowerCase();
  return store.products.filter((product) => {
    const lowStock = product.stock !== undefined && product.stock !== null && product.stock !== "" && Number(product.stock) <= 5;
    const matchesFilter =
      currentProductFilter === "all" ||
      (currentProductFilter === "live" && product.active !== false) ||
      (currentProductFilter === "draft" && product.active === false) ||
      (currentProductFilter === "featured" && product.featured) ||
      (currentProductFilter === "low" && lowStock);

    const haystack = [product.id, product.sku, product.category, textValue(product.title), productStatus(product), money(product.price), productStockLabel(product)]
      .join(" ")
      .toLowerCase();
    return matchesFilter && haystack.includes(query);
  });
}

function renderProducts() {
  const products = filteredProducts();
  if (!products.length) {
    productsList.innerHTML = `<p class="empty-cart">No products match this view.</p>`;
    return;
  }

  productsList.innerHTML = products
    .map(
      (product) => `
        <article class="admin-product-row product-management-row" data-edit-product="${product.id}">
          <img src="${product.images?.[0] || ""}" alt="" />
          <div class="product-management-main">
            <div>
              <h3>${textValue(product.title) || "Untitled product"}</h3>
              <p>${product.sku || `Product #${product.id}`} · ${product.category || "Uncategorized"} · ${money(product.price)}</p>
            </div>
            <div class="product-management-meta">
              <span>${productStockLabel(product)}</span>
              <span>${(product.variants || []).length ? `${product.variants.length} variants` : "No variants"}</span>
              <span>${(product.images || []).length} images</span>
            </div>
          </div>
          <span class="status-pill ${product.active === false ? "muted-status" : ""}">${productStatus(product)}</span>
          <div class="product-row-actions">
            <a class="ghost-admin-button" href="product.html?id=${product.id}" data-view-product>View</a>
            <a class="primary-action" href="product-create.html?id=${product.id}">Edit</a>
          </div>
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
      ...(order.items || []).map((item) => textValue(item.title)),
      ...(order.items || []).map((item) => textValue(item.variant?.name)),
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
                const variant = item.variant ? ` · ${textValue(item.variant.name)}` : "";
                return `<span>${textValue(item.title)}${variant} x${item.qty} - ${money(item.price * item.qty)}</span>`;
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
  settingsForm.featuredProductId.value = store.settings.featuredProductId || "";
}

document.addEventListener("click", async (event) => {
  const tab = event.target.closest("[data-admin-tab]");
  const productFilter = event.target.closest("[data-product-filter]");
  const editProduct = event.target.closest("[data-edit-product]");

  if (tab) {
    document.querySelectorAll("[data-admin-tab]").forEach((button) => button.classList.toggle("active", button === tab));
    document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === tab.dataset.adminTab));
  }

  if (productFilter) {
    currentProductFilter = productFilter.dataset.productFilter;
    document.querySelectorAll("[data-product-filter]").forEach((button) => button.classList.toggle("active", button === productFilter));
    renderProducts();
  }

  if (editProduct && !event.target.closest("a, button")) {
    window.location.href = `product-create.html?id=${editProduct.dataset.editProduct}`;
  }

  if (event.target.closest("[data-logout]")) {
    await StoreBackend.logout();
    window.location.href = "admin-login.html";
  }
});

document.addEventListener("change", async (event) => {
  const statusSelect = event.target.closest("[data-order-status]");
  if (!statusSelect) return;
  await StoreBackend.updateOrderStatus(statusSelect.dataset.orderStatus, statusSelect.value);
  await loadStore();
});

productSearch.addEventListener("input", renderProducts);
orderSearch.addEventListener("input", renderOrders);

settingsForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await StoreBackend.saveSettings({
    storeName: settingsForm.storeName.value,
    whatsappNumber: settingsForm.whatsappNumber.value,
    featuredProductId: Number(settingsForm.featuredProductId.value) || null,
  });
  await loadStore();
});

loadStore().catch((error) => {
  if (error.message === "Admin login required") return;
  document.querySelector(".admin-main").innerHTML = `<p class="empty-cart">Could not load admin data. Check Supabase setup or start the local server for fallback mode.</p><pre>${error.message}</pre>`;
});
