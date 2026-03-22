document.addEventListener("DOMContentLoaded", () => {
  const navWrap = document.querySelector(".nav-wrap");
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle && navWrap) {
    menuToggle.addEventListener("click", () => navWrap.classList.toggle("open"));
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});