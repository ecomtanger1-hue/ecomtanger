let store = { products: [], categories: [], orders: [], settings: {} };
let currentProductFilter = "all";
const selectedProductIds = new Set();

const productsList = document.querySelector("[data-admin-products]");
const ordersList = document.querySelector("[data-admin-orders]");
const settingsForm = document.querySelector("[data-settings-form]");
const orderSearch = document.querySelector("[data-order-search]");
const productSearch = document.querySelector("[data-product-search]");
const categoryModal = document.querySelector("[data-category-modal]");
const categoryForm = document.querySelector("[data-category-form]");
const categoryStatus = document.querySelector("[data-category-status]");
const productBulkBar = document.querySelector("[data-product-bulk-bar]");
const selectedProductsCount = document.querySelector("[data-selected-products-count]");

function money(value) {
  return `${Number(value || 0)} MAD`;
}

function textValue(value) {
  if (typeof value === "string") return value;
  return value?.ar || value?.fr || "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function productStockLabel(product) {
  if (product.stock === undefined || product.stock === null || product.stock === "") return "Not tracked";
  return Number(product.stock) <= 0 ? "Out of stock" : `${product.stock} in stock`;
}

function productStatus(product) {
  return product.active === false ? "Draft" : "Live";
}

function productImage(product) {
  return product.images?.find(Boolean) || "";
}

function productReadiness(product) {
  const checks = [
    Boolean(textValue(product.title)),
    Boolean(textValue(product.description) || textValue(product.summary)),
    Boolean(productImage(product)),
    Number(product.price || 0) > 0,
  ];
  const score = checks.filter(Boolean).length;
  return {
    score,
    total: checks.length,
    ready: score === checks.length,
    label: score === checks.length ? "Landing ready" : `${score}/${checks.length} ready`,
  };
}

function stockTone(product) {
  if (product.stock === undefined || product.stock === null || product.stock === "") return "neutral";
  const stock = Number(product.stock);
  if (stock <= 0) return "critical";
  if (stock <= 5) return "warning";
  return "success";
}

function productCounts() {
  const products = store.products || [];
  return {
    all: products.length,
    live: products.filter((product) => product.active !== false).length,
    draft: products.filter((product) => product.active === false).length,
    low: products.filter((product) => product.stock !== undefined && product.stock !== null && product.stock !== "" && Number(product.stock) <= 5).length,
    ready: products.filter((product) => productReadiness(product).ready).length,
  };
}

function categoryIdFromName(name) {
  return name
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function uploadedCategoryImage() {
  const file = categoryForm.categoryImageUpload.files?.[0];
  if (!file) return "";
  if (!StoreBackend.enabled()) throw new Error("Image upload needs Supabase. Paste an image URL instead for local fallback mode.");
  return StoreBackend.uploadImage(file, "categories");
}

function openCategoryModal() {
  categoryForm.reset();
  categoryForm.categoryActive.checked = true;
  categoryForm.categorySortOrder.value = "100";
  categoryStatus.textContent = "";
  categoryModal.hidden = false;
  categoryForm.categoryName.focus();
}

function closeCategoryModal() {
  categoryModal.hidden = true;
}

async function loadStore() {
  store = await StoreBackend.getAdminStore();
  renderAll();
}

function renderAll() {
  renderStats();
  renderProductFilterCounts();
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

function renderProductFilterCounts() {
  const counts = productCounts();
  document.querySelectorAll("[data-filter-count]").forEach((node) => {
    node.textContent = counts[node.dataset.filterCount] || 0;
  });
}

function filteredProducts() {
  const query = productSearch.value.trim().toLowerCase();
  return store.products.filter((product) => {
    const lowStock = product.stock !== undefined && product.stock !== null && product.stock !== "" && Number(product.stock) <= 5;
    const ready = productReadiness(product).ready;
    const matchesFilter =
      currentProductFilter === "all" ||
      (currentProductFilter === "live" && product.active !== false) ||
      (currentProductFilter === "draft" && product.active === false) ||
      (currentProductFilter === "low" && lowStock) ||
      (currentProductFilter === "ready" && ready);

    const haystack = [product.id, product.sku, product.category, textValue(product.title), textValue(product.description), productStatus(product), money(product.price), productStockLabel(product), productReadiness(product).label]
      .join(" ")
      .toLowerCase();
    return matchesFilter && haystack.includes(query);
  });
}

function updateBulkBar() {
  if (!productBulkBar || !selectedProductsCount) return;
  selectedProductsCount.textContent = selectedProductIds.size;
  productBulkBar.hidden = selectedProductIds.size === 0;
}

function renderProducts() {
  const products = filteredProducts();
  const visibleIds = new Set(products.map((product) => Number(product.id)));
  [...selectedProductIds].forEach((id) => {
    if (!visibleIds.has(Number(id))) selectedProductIds.delete(id);
  });
  updateBulkBar();

  if (!products.length) {
    productsList.innerHTML = `
      <div class="polaris-empty-state">
        <strong>No products match this view</strong>
        <p>Try another search or create a new product for the storefront.</p>
        <a class="primary-action" href="product-create.html">Add product</a>
      </div>
    `;
    return;
  }

  const allSelected = products.every((product) => selectedProductIds.has(Number(product.id)));

  productsList.innerHTML = `
    <div class="polaris-table-shell">
      <table class="polaris-product-table">
        <thead>
          <tr>
            <th class="select-cell">
              <input type="checkbox" data-select-all-products aria-label="Select all products" ${allSelected ? "checked" : ""} />
            </th>
            <th>Product</th>
            <th>Status</th>
            <th>Inventory</th>
            <th>Landing page</th>
            <th>Price</th>
            <th class="actions-cell">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${products
            .map((product) => {
              const readiness = productReadiness(product);
              const image = productImage(product);
              const selected = selectedProductIds.has(Number(product.id));
              const title = textValue(product.title) || "Untitled product";
              return `
                <tr class="polaris-product-row" data-edit-product="${product.id}">
                  <td class="select-cell">
                    <input type="checkbox" data-select-product="${product.id}" aria-label="Select ${escapeHtml(title)}" ${selected ? "checked" : ""} />
                  </td>
                  <td>
                    <div class="polaris-product-cell">
                      <div class="polaris-product-thumb">${image ? `<img src="${image}" alt="" />` : `<span>${escapeHtml(title.slice(0, 1) || "P")}</span>`}</div>
                      <div>
                        <h3>${escapeHtml(title)}</h3>
                        <p>${escapeHtml(product.sku || `Product #${product.id}`)} - ${escapeHtml(product.category || "Uncategorized")}</p>
                        <div class="polaris-row-meta">
                          <span>${(product.images || []).length} images</span>
                          <span>${(product.variants || []).length ? `${(product.variants || []).length} variants` : "No variants"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td><span class="polaris-badge ${product.active === false ? "tone-neutral" : "tone-success"}">${productStatus(product)}</span></td>
                  <td><span class="polaris-badge tone-${stockTone(product)}">${productStockLabel(product)}</span></td>
                  <td>
                    <div class="landing-readiness">
                      <span class="readiness-meter" style="--ready: ${(readiness.score / readiness.total) * 100}%"></span>
                      <strong>${readiness.label}</strong>
                    </div>
                  </td>
                  <td class="price-cell">
                    <strong>${money(product.price)}</strong>
                    ${product.oldPrice ? `<span>${money(product.oldPrice)}</span>` : ""}
                  </td>
                  <td class="actions-cell">
                    <a class="ghost-admin-button" href="product.html?id=${product.id}" data-view-product>View page</a>
                    <a class="primary-action" href="product-create.html?id=${product.id}">Edit</a>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderProductsLegacy() {
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
}

document.addEventListener("click", async (event) => {
  const tab = event.target.closest("[data-admin-tab]");
  const productFilter = event.target.closest("[data-product-filter]");
  const editProduct = event.target.closest("[data-edit-product]");
  const clearSelection = event.target.closest("[data-clear-product-selection]");

  if (event.target.closest("[data-open-category-modal]")) {
    openCategoryModal();
  }

  if (event.target.closest("[data-close-category-modal]") || event.target === categoryModal) {
    closeCategoryModal();
  }

  if (tab) {
    document.querySelectorAll("[data-admin-tab]").forEach((button) => button.classList.toggle("active", button === tab));
    document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === tab.dataset.adminTab));
  }

  if (productFilter) {
    currentProductFilter = productFilter.dataset.productFilter;
    document.querySelectorAll("[data-product-filter]").forEach((button) => button.classList.toggle("active", button.dataset.productFilter === currentProductFilter));
    selectedProductIds.clear();
    renderProducts();
  }

  if (clearSelection) {
    selectedProductIds.clear();
    renderProducts();
  }

  if (editProduct && !event.target.closest("a, button, input")) {
    window.location.href = `product-create.html?id=${editProduct.dataset.editProduct}`;
  }

  if (event.target.closest("[data-logout]")) {
    await StoreBackend.logout();
    window.location.href = "admin-login.html";
  }
});

document.addEventListener("change", async (event) => {
  const selectedProduct = event.target.closest("[data-select-product]");
  const selectAll = event.target.closest("[data-select-all-products]");
  const statusSelect = event.target.closest("[data-order-status]");
  if (selectedProduct) {
    const id = Number(selectedProduct.dataset.selectProduct);
    if (selectedProduct.checked) selectedProductIds.add(id);
    else selectedProductIds.delete(id);
    renderProducts();
    return;
  }
  if (selectAll) {
    filteredProducts().forEach((product) => {
      if (selectAll.checked) selectedProductIds.add(Number(product.id));
      else selectedProductIds.delete(Number(product.id));
    });
    renderProducts();
    return;
  }
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
  });
  await loadStore();
});

categoryForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = categoryForm.categoryName.value.trim();
  const id = categoryIdFromName(name);
  const pastedImage = categoryForm.categoryImageUrl.value.trim();

  if (!id) {
    categoryStatus.textContent = "Add a clear category name.";
    return;
  }

  categoryStatus.textContent = "Saving category...";
  try {
    const imageUrl = await uploadedCategoryImage() || pastedImage;
    if (!imageUrl) {
      categoryStatus.textContent = "Add a category image before saving.";
      return;
    }
    await StoreBackend.saveCategory({
      id,
      title: { ar: name, fr: name },
      imageUrl,
      active: categoryForm.categoryActive.checked,
      sortOrder: Number(categoryForm.categorySortOrder.value || 100),
    });
    await loadStore();
    categoryStatus.textContent = "Category saved.";
    setTimeout(closeCategoryModal, 350);
  } catch (error) {
    categoryStatus.textContent = error.message || "Could not save category.";
  }
});

loadStore().catch((error) => {
  if (error.message === "Admin login required") return;
  document.querySelector(".admin-main").innerHTML = `<p class="empty-cart">Could not load admin data. Check Supabase setup or start the local server for fallback mode.</p><pre>${error.message}</pre>`;
});
