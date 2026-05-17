const mainImage = document.getElementById("mainImage");
const galleryStage = document.querySelector(".gallery-stage");
const heroPrice = document.getElementById("heroPrice");
const checkoutPrice = document.getElementById("checkoutPrice");
const stickyPrice = document.getElementById("stickyPrice");
const quantityValue = document.getElementById("quantityValue");
const selectedColor = document.getElementById("selectedColor");

const state = {
  basePrice: 199,
  quantity: 1,
  addOns: 0
};

function money(value) {
  return `MAD ${value}`;
}

function updateTotals() {
  const total = state.basePrice * state.quantity + state.addOns;
  heroPrice.textContent = money(state.basePrice);
  checkoutPrice.textContent = money(total);
  stickyPrice.textContent = money(total);
}

document.querySelectorAll(".thumb").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.dataset.image;
    if (!image || mainImage.src === image) return;

    document.querySelectorAll(".thumb").forEach((thumb) => thumb.classList.remove("is-active"));
    button.classList.add("is-active");
    galleryStage.classList.add("is-changing");

    window.setTimeout(() => {
      mainImage.src = image;
      galleryStage.classList.remove("is-changing");
    }, 180);
  });
});

document.querySelectorAll('[data-choice-group="color"] .color-swatch').forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll('[data-choice-group="color"] .color-swatch').forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    selectedColor.textContent = button.dataset.label;
  });
});

document.querySelectorAll("[data-qty]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.qty;
    state.quantity = direction === "plus" ? state.quantity + 1 : Math.max(1, state.quantity - 1);
    quantityValue.textContent = state.quantity;
    updateTotals();
  });
});

document.querySelectorAll(".add-on-card").forEach((button) => {
  button.addEventListener("click", () => {
    const price = Number(button.dataset.addonPrice || 0);
    const isAdded = button.classList.toggle("is-added");
    button.setAttribute("aria-pressed", String(isAdded));
    const action = button.querySelector(".addon-action");
    if (action) {
      action.textContent = isAdded ? "مضاف للطلب" : "أضف للطلب";
    }
    state.addOns += isAdded ? price : -price;
    updateTotals();
  });
});

document.querySelector(".whatsapp-cta").addEventListener("click", () => {
  const text = [
    "مرحبا، أريد تأكيد هذا الطلب:",
    "المنتج: سماعات بلوتوث بعلبة شحن",
    `اللون: ${selectedColor.textContent}`,
    `الكمية: ${state.quantity}`,
    `المجموع: ${checkoutPrice.textContent}`
  ].join("\n");

  window.open(`https://wa.me/212708012888?text=${encodeURIComponent(text)}`, "_blank");
});

updateTotals();
