const form = document.querySelector("[data-login-form]");
const message = document.querySelector("[data-login-message]");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });

  if (!response.ok) {
    message.textContent = "Login failed. Check username and password.";
    return;
  }

  const next = new URLSearchParams(window.location.search).get("next") || "/admin.html";
  window.location.href = next;
});
