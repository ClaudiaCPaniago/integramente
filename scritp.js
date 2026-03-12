// Menu mobile - Versão com classe active
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Alternar ícone
    const icon = mobileMenu.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.className = "fas fa-times";
    } else {
      icon.className = "fas fa-bars";
    }
  });

  // Fechar ao clicar em um link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenu.querySelector("i").className = "fas fa-bars";
    });
  });

  // Fechar ao redimensionar para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      mobileMenu.querySelector("i").className = "fas fa-bars";
    }
  });
});
