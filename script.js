document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for in-page anchors
  const links = document.querySelectorAll('a[href^="#"]');
  const htmlEl = document.documentElement;
  const langToggle = document.querySelector(".lang-pill");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Language toggle
  if (langToggle && htmlEl) {
    langToggle.addEventListener("click", () => {
      const current = htmlEl.getAttribute("data-lang") === "en" ? "en" : "cn";
      const next = current === "cn" ? "en" : "cn";
      htmlEl.setAttribute("data-lang", next);
    });
  }
});

