document.querySelector(".btn-logout").addEventListener("click", async () => {
  try {
    await fetch("/api/users/logout", { method: "POST" });
    document.location.replace("/login");
  } catch (error) {
    console.error(error);
    console.error("Failed to logout.");
  }
});
document.querySelector(".btn-logout").addEventListener("click", async () => {
  try {
    await fetch("/api/users/login", { method: "POST" });
    document.location.replace("/login");
  } catch (error) {
    console.error(error);
    console.error("Failed to logout.");
  }
});
document.querySelector(".btn-logout").addEventListener("click", async () => {
  try {
    await fetch("/api/users/create-account", { method: "POST" });
    document.location.replace("/create-account");
  } catch (error) {
    console.error(error);
    console.error("Failed to logout.");
  }
});
