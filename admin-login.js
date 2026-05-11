const form = document.querySelector("[data-login-form]");
const message = document.querySelector("[data-login-message]");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  message.textContent = "Checking access...";
  try {
    await StoreBackend.login(formData.get("email"), formData.get("password"));
    const next = new URLSearchParams(window.location.search).get("next") || "admin.html";
    window.location.href = next;
  } catch (error) {
    if (!StoreBackend.enabled()) {
      message.textContent = "Login failed. Add Supabase credentials or start the local server for fallback mode.";
      return;
    }
    message.textContent = error.message === "Admin access required"
      ? "Login failed. This user is not approved as an admin."
      : "Login failed. Check email and password.";
  }
});
