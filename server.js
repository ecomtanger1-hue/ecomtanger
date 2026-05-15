const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const dataFile = path.join(root, "data", "store.json");
const port = Number(process.env.PORT || 4173);
const sessions = new Map();
const adminCredentials = {
  username: process.env.ADMIN_USER || "admin",
  password: process.env.ADMIN_PASSWORD || "admin123",
};

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function readStore() {
  return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

function writeStore(store) {
  fs.writeFileSync(dataFile, `${JSON.stringify(store, null, 2)}\n`, "utf8");
}

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function parseCookies(request) {
  return Object.fromEntries(
    String(request.headers.cookie || "")
      .split(";")
      .map((cookie) => cookie.trim().split("="))
      .filter((parts) => parts.length === 2),
  );
}

function isAdmin(request) {
  const sessionId = parseCookies(request).ct_admin;
  return Boolean(sessionId && sessions.has(sessionId));
}

function requireAdmin(request, response) {
  if (isAdmin(request)) return true;
  sendJson(response, 401, { error: "Admin login required" });
  return false;
}

function redirect(response, location) {
  response.writeHead(302, { Location: location });
  response.end();
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    let bodyTooLarge = false;
    request.on("data", (chunk) => {
      if (bodyTooLarge) return;
      body += chunk;
      if (body.length > 20_000_000) {
        bodyTooLarge = true;
        body = "";
      }
    });
    request.on("end", () => {
      if (bodyTooLarge) {
        const error = new Error("Request body too large. Use smaller images or fewer embedded images.");
        error.statusCode = 413;
        reject(error);
        return;
      }
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
}

function normalizeProduct(input, fallback = {}) {
  const title = input.title || {};
  const description = input.description || {};
  const highlights = input.highlights || {};
  const box = input.box || {};
  const variants = Array.isArray(input.variants) ? input.variants : fallback.variants || [];
  const images = Array.isArray(input.images)
    ? input.images
    : String(input.images || "")
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

  return {
    ...fallback,
    sku: String(input.sku || fallback.sku || "").trim(),
    category: String(input.category || fallback.category || "Maison"),
    price: Number(input.price ?? fallback.price ?? 0),
    oldPrice: input.oldPrice === "" || input.oldPrice === null ? null : Number(input.oldPrice ?? fallback.oldPrice ?? 0),
    stock: input.stock === "" ? "" : Number(input.stock ?? fallback.stock ?? 0),
    active: Boolean(input.active ?? fallback.active ?? true),
    title: {
      ar: String(title.ar ?? fallback.title?.ar ?? "").trim(),
      fr: String(title.fr ?? fallback.title?.fr ?? "").trim(),
    },
    description: {
      ar: String(description.ar ?? fallback.description?.ar ?? "").trim(),
      fr: String(description.fr ?? fallback.description?.fr ?? "").trim(),
    },
    highlights: {
      ar: Array.isArray(highlights.ar) ? highlights.ar : String(highlights.ar ?? fallback.highlights?.ar?.join("\n") ?? "").split("\n").filter(Boolean),
      fr: Array.isArray(highlights.fr) ? highlights.fr : String(highlights.fr ?? fallback.highlights?.fr?.join("\n") ?? "").split("\n").filter(Boolean),
    },
    box: {
      ar: String(box.ar ?? fallback.box?.ar ?? "").trim(),
      fr: String(box.fr ?? fallback.box?.fr ?? "").trim(),
      summary: {
        ar: String(box.summary?.ar ?? fallback.box?.summary?.ar ?? "").trim(),
        fr: String(box.summary?.fr ?? fallback.box?.summary?.fr ?? "").trim(),
      },
      socialProof: {
        ar: String(box.socialProof?.ar ?? fallback.box?.socialProof?.ar ?? "").trim(),
        fr: String(box.socialProof?.fr ?? fallback.box?.socialProof?.fr ?? "").trim(),
      },
      rating: {
        value: box.rating?.value === "" || box.rating?.value === null ? null : Number(box.rating?.value ?? fallback.box?.rating?.value ?? 0) || null,
        count: box.rating?.count === "" || box.rating?.count === null ? null : Number(box.rating?.count ?? fallback.box?.rating?.count ?? 0) || null,
      },
      variantLabel: {
        ar: String(box.variantLabel?.ar ?? fallback.box?.variantLabel?.ar ?? "").trim(),
        fr: String(box.variantLabel?.fr ?? fallback.box?.variantLabel?.fr ?? "").trim(),
      },
      specs: Array.isArray(box.specs) ? box.specs : fallback.box?.specs || [],
      offer: box.offer || fallback.box?.offer || {},
    },
    images,
    variants: variants.map((variant, index) => ({
      id: variant.id || `v${index + 1}`,
      name: {
        ar: String(variant.name?.ar || "").trim(),
        fr: String(variant.name?.fr || "").trim(),
      },
      extraPrice: Number(variant.extraPrice || 0),
      stock: Number(variant.stock ?? 0),
    })),
  };
}

async function handleApi(request, response, url) {
  const store = readStore();
  const parts = url.pathname.split("/").filter(Boolean);
  const resource = parts[1];
  const id = Number(parts[2]);

  if (request.method === "POST" && url.pathname === "/api/login") {
    const body = await readBody(request);
    if (body.username === adminCredentials.username && body.password === adminCredentials.password) {
      const sessionId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
      sessions.set(sessionId, { username: body.username, createdAt: Date.now() });
      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": `ct_admin=${sessionId}; HttpOnly; SameSite=Lax; Path=/`,
      });
      response.end(JSON.stringify({ ok: true, username: body.username }));
      return;
    }
    sendJson(response, 401, { error: "Invalid login" });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/logout") {
    const sessionId = parseCookies(request).ct_admin;
    if (sessionId) sessions.delete(sessionId);
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Set-Cookie": "ct_admin=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0",
    });
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/session") {
    sendJson(response, 200, { authenticated: isAdmin(request), username: isAdmin(request) ? adminCredentials.username : null });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/store") {
    sendJson(response, 200, { settings: store.settings, products: store.products });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/admin/store") {
    if (!requireAdmin(request, response)) return;
    sendJson(response, 200, store);
    return;
  }

  if (resource === "products") {
    if (request.method === "GET") {
      sendJson(response, 200, store.products);
      return;
    }

    if (!requireAdmin(request, response)) return;
    const body = await readBody(request);

    if (request.method === "POST") {
      const nextId = Math.max(0, ...store.products.map((product) => Number(product.id) || 0)) + 1;
      const product = { id: nextId, ...normalizeProduct(body) };
      store.products.push(product);
      writeStore(store);
      sendJson(response, 201, product);
      return;
    }

    if (request.method === "PUT" && id) {
      const index = store.products.findIndex((product) => product.id === id);
      if (index === -1) {
        sendJson(response, 404, { error: "Product not found" });
        return;
      }
      const product = { id, ...normalizeProduct(body, store.products[index]) };
      store.products[index] = product;
      writeStore(store);
      sendJson(response, 200, product);
      return;
    }

    if (request.method === "DELETE" && id) {
      store.products = store.products.filter((product) => product.id !== id);
      writeStore(store);
      sendJson(response, 200, { ok: true });
      return;
    }
  }

  if (resource === "orders") {
    if (request.method === "GET") {
      if (!requireAdmin(request, response)) return;
      sendJson(response, 200, store.orders || []);
      return;
    }

    if (request.method === "POST") {
      const body = await readBody(request);
      const nextId = Math.max(0, ...(store.orders || []).map((order) => Number(order.id) || 0)) + 1;
      const order = {
        id: nextId,
        status: "new",
        createdAt: new Date().toISOString(),
        customer: body.customer || {},
        items: body.items || [],
        total: Number(body.total || 0),
        source: body.source || "storefront",
        notes: body.notes || "",
      };
      store.orders = store.orders || [];
      store.orders.unshift(order);
      writeStore(store);
      sendJson(response, 201, order);
      return;
    }

    if (request.method === "PATCH" && id) {
      if (!requireAdmin(request, response)) return;
      const body = await readBody(request);
      const order = (store.orders || []).find((item) => item.id === id);
      if (!order) {
        sendJson(response, 404, { error: "Order not found" });
        return;
      }
      Object.assign(order, body, { updatedAt: new Date().toISOString() });
      writeStore(store);
      sendJson(response, 200, order);
      return;
    }
  }

  if (resource === "analytics") {
    if (request.method === "POST") {
      const body = await readBody(request);
      store.analytics = store.analytics || [];
      store.analytics.unshift({
        id: Date.now(),
        event: String(body.event || "unknown"),
        productId: body.productId || null,
        meta: body.meta || {},
        createdAt: new Date().toISOString(),
      });
      store.analytics = store.analytics.slice(0, 1000);
      writeStore(store);
      sendJson(response, 201, { ok: true });
      return;
    }

    if (request.method === "GET") {
      if (!requireAdmin(request, response)) return;
      sendJson(response, 200, store.analytics || []);
      return;
    }
  }

  if (resource === "settings") {
    if (request.method === "GET") {
      if (!requireAdmin(request, response)) return;
      sendJson(response, 200, store.settings);
      return;
    }
    if (request.method === "PUT") {
      if (!requireAdmin(request, response)) return;
      store.settings = { ...store.settings, ...(await readBody(request)) };
      writeStore(store);
      sendJson(response, 200, store.settings);
      return;
    }
  }

  sendJson(response, 404, { error: "Not found" });
}

function serveStatic(request, response, url) {
  const pathname = decodeURIComponent(url.pathname);
  const target = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(root, target));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
    });
    response.end(data);
  });
}

http
  .createServer(async (request, response) => {
    const url = new URL(request.url, "http://localhost");
    try {
      if (url.pathname.startsWith("/api/")) {
        await handleApi(request, response, url);
        return;
      }
      serveStatic(request, response, url);
    } catch (error) {
      sendJson(response, error.statusCode || 500, { error: error.message });
    }
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`CasaTanja running at http://127.0.0.1:${port}`);
    console.log(`Admin dashboard: http://127.0.0.1:${port}/admin.html`);
  });
