(function () {
  const config = window.CASATANJA_SUPABASE || {};
  const hasSupabaseConfig =
    config.url &&
    config.anonKey &&
    !String(config.url).includes("YOUR_SUPABASE") &&
    !String(config.anonKey).includes("YOUR_SUPABASE");

  const client = hasSupabaseConfig && window.supabase
    ? window.supabase.createClient(config.url, config.anonKey)
    : null;

  const storageBucket = config.storageBucket || "product-images";

  function enabled() {
    return Boolean(client);
  }

  async function localApi(path, options = {}) {
    const response = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
  }

  function textRecord(value) {
    if (typeof value === "string") return { ar: value, fr: value };
    return value || { ar: "", fr: "" };
  }

  function normalizeProduct(row) {
    return {
      id: Number(row.id),
      sku: row.sku || "",
      category: row.category || "Maison",
      price: Number(row.price || 0),
      oldPrice: row.old_price === null || row.old_price === undefined ? null : Number(row.old_price),
      stock: row.stock === null || row.stock === undefined ? "" : Number(row.stock),
      active: row.active !== false,
      title: textRecord(row.title),
      description: textRecord(row.description),
      highlights: row.highlights || { ar: [], fr: [] },
      box: row.box || { ar: "", fr: "" },
      images: Array.isArray(row.images) ? row.images : [],
      variants: Array.isArray(row.variants) ? row.variants : [],
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  function productRow(product) {
    return {
      sku: product.sku || null,
      category: product.category || "Maison",
      price: Number(product.price || 0),
      old_price: product.oldPrice === "" || product.oldPrice === undefined ? null : product.oldPrice,
      stock: product.stock === "" || product.stock === undefined ? null : product.stock,
      active: product.active !== false,
      title: textRecord(product.title),
      description: textRecord(product.description),
      highlights: product.highlights || { ar: [], fr: [] },
      box: product.box || { ar: "", fr: "" },
      images: product.images || [],
      variants: product.variants || [],
    };
  }

  function normalizeSettings(row) {
    return {
      storeName: row?.store_name || "CasaTanja",
      whatsappNumber: row?.whatsapp_number || "212708012888",
    };
  }

  function normalizeCategory(row) {
    return {
      id: row.id || "",
      title: textRecord(row.title || row.id),
      imageUrl: row.image_url || "",
      active: row.active !== false,
      sortOrder: Number(row.sort_order || 100),
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  function categoryRow(category) {
    return {
      id: category.id,
      title: textRecord(category.title || category.id),
      image_url: category.imageUrl || null,
      active: category.active !== false,
      sort_order: Number(category.sortOrder || 100),
    };
  }

  function normalizeOrder(row) {
    return {
      id: Number(row.id),
      customer: row.customer || {},
      items: row.items || [],
      total: Number(row.total || 0),
      status: row.status || "new",
      source: row.source || "storefront_whatsapp",
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async function getSession() {
    if (!enabled()) return null;
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    return data.session;
  }

  async function requireAdmin() {
    if (!enabled()) {
      const session = await localApi("/api/session");
      if (session.authenticated) return session;
      const next = encodeURIComponent(`${window.location.pathname}${window.location.search}`);
      window.location.href = `admin-login.html?next=${next}`;
      throw new Error("Admin login required");
    }
    const session = await getSession();
    if (!session) {
      const next = encodeURIComponent(`${window.location.pathname}${window.location.search}`);
      window.location.href = `admin-login.html?next=${next}`;
      throw new Error("Admin login required");
    }
    const { data: isAdmin, error } = await client.rpc("is_admin");
    if (error) throw error;
    if (!isAdmin) {
      await client.auth.signOut();
      const next = encodeURIComponent(`${window.location.pathname}${window.location.search}`);
      window.location.href = `admin-login.html?next=${next}`;
      throw new Error("Admin access required");
    }
    return session;
  }

  async function login(email, password) {
    if (!enabled()) return localApi("/api/login", {
      method: "POST",
      body: JSON.stringify({ username: email, password }),
    });
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    const { data: isAdmin, error: adminError } = await client.rpc("is_admin");
    if (adminError) throw adminError;
    if (!isAdmin) {
      await client.auth.signOut();
      throw new Error("Admin access required");
    }
    return data;
  }

  async function logout() {
    if (!enabled()) return localApi("/api/logout", { method: "POST" });
    const { error } = await client.auth.signOut();
    if (error) throw error;
    return true;
  }

  async function getSettings() {
    const { data, error } = await client.from("settings").select("*").eq("id", "main").maybeSingle();
    if (error) throw error;
    return normalizeSettings(data);
  }

  async function getPublicStore() {
    if (!enabled()) return localApi("/api/store");
    const [{ data: products, error: productsError }, { data: categories, error: categoriesError }, settings] = await Promise.all([
      client.from("products").select("*").eq("active", true).order("created_at", { ascending: false }),
      client.from("categories").select("*").eq("active", true).order("sort_order", { ascending: true }),
      getSettings(),
    ]);
    if (productsError) throw productsError;
    if (categoriesError) throw categoriesError;
    return {
      products: (products || []).map(normalizeProduct),
      categories: (categories || []).map(normalizeCategory),
      settings,
      orders: [],
      analytics: [],
    };
  }

  async function getAdminStore() {
    if (!enabled()) return localApi("/api/admin/store");
    await requireAdmin();
    const [productsResult, categoriesResult, ordersResult, settingsResult, analyticsResult] = await Promise.all([
      client.from("products").select("*").order("created_at", { ascending: false }),
      client.from("categories").select("*").order("sort_order", { ascending: true }),
      client.from("orders").select("*").order("created_at", { ascending: false }),
      client.from("settings").select("*").eq("id", "main").maybeSingle(),
      client.from("analytics").select("*").order("created_at", { ascending: false }).limit(200),
    ]);
    if (productsResult.error) throw productsResult.error;
    if (categoriesResult.error) throw categoriesResult.error;
    if (ordersResult.error) throw ordersResult.error;
    if (settingsResult.error) throw settingsResult.error;
    if (analyticsResult.error) throw analyticsResult.error;
    return {
      products: (productsResult.data || []).map(normalizeProduct),
      categories: (categoriesResult.data || []).map(normalizeCategory),
      orders: (ordersResult.data || []).map(normalizeOrder),
      settings: normalizeSettings(settingsResult.data),
      analytics: analyticsResult.data || [],
    };
  }

  async function saveProduct(product, id = null) {
    if (!enabled()) {
      return localApi(id ? `/api/products/${id}` : "/api/products", {
        method: id ? "PUT" : "POST",
        body: JSON.stringify(product),
      });
    }
    await requireAdmin();
    const query = id
      ? client.from("products").update(productRow(product)).eq("id", id).select("*").single()
      : client.from("products").insert(productRow(product)).select("*").single();
    const { data, error } = await query;
    if (error) throw error;
    return normalizeProduct(data);
  }

  async function saveCategory(category) {
    if (!enabled()) return category;
    await requireAdmin();
    const { data, error } = await client
      .from("categories")
      .upsert(categoryRow(category), { onConflict: "id" })
      .select("*")
      .single();
    if (error) throw error;
    return normalizeCategory(data);
  }

  async function saveSettings(settings) {
    if (!enabled()) {
      return localApi("/api/settings", {
        method: "PUT",
        body: JSON.stringify(settings),
      });
    }
    await requireAdmin();
    const { data, error } = await client
      .from("settings")
      .upsert({
        id: "main",
        store_name: settings.storeName || "CasaTanja",
        whatsapp_number: settings.whatsappNumber || "212708012888",
      })
      .select("*")
      .single();
    if (error) throw error;
    return normalizeSettings(data);
  }

  async function updateOrderStatus(id, status) {
    if (!enabled()) {
      return localApi(`/api/orders/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
    }
    await requireAdmin();
    const { data, error } = await client.from("orders").update({ status }).eq("id", id).select("*").single();
    if (error) throw error;
    return normalizeOrder(data);
  }

  async function createOrder(order) {
    if (!enabled()) {
      return localApi("/api/orders", {
        method: "POST",
        body: JSON.stringify(order),
      });
    }
    const { data, error } = await client
      .from("orders")
      .insert({
        customer: order.customer || {},
        items: order.items || [],
        total: Number(order.total || 0),
        source: order.source || "storefront_whatsapp",
        status: order.status || "new",
      })
      .select("*")
      .single();
    if (error) throw error;
    return normalizeOrder(data);
  }

  async function trackEvent(event, payload = {}) {
    if (!enabled()) {
      return fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event, productId: payload.productId || null, meta: payload }),
      }).catch(() => {});
    }
    const { error } = await client.from("analytics").insert({
      event,
      product_id: payload.productId || null,
      meta: payload,
    });
    if (error) throw error;
    return true;
  }

  function safeFileName(file) {
    const extension = file.name.includes(".") ? file.name.split(".").pop().toLowerCase() : "jpg";
    const token = Math.random().toString(36).slice(2);
    return `${Date.now()}-${token}.${extension}`;
  }

  async function uploadImage(file, folder = "products") {
    if (!enabled()) return null;
    await requireAdmin();
    const path = `${folder}/${safeFileName(file)}`;
    const { error } = await client.storage.from(storageBucket).upload(path, file, {
      cacheControl: "31536000",
      upsert: false,
    });
    if (error) throw error;
    const { data } = client.storage.from(storageBucket).getPublicUrl(path);
    return data.publicUrl;
  }

  window.StoreBackend = {
    enabled,
    client,
    getSession,
    requireAdmin,
    login,
    logout,
    getPublicStore,
    getAdminStore,
    saveProduct,
    saveCategory,
    saveSettings,
    updateOrderStatus,
    createOrder,
    trackEvent,
    uploadImage,
  };
})();
