// Menu mobile
document.querySelector(".mobile-menu").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Fechar menu mobile após clicar em um link
      if (window.innerWidth <= 768) {
        document.querySelector(".nav-links").style.display = "none";
      }
    }
  });
});

// Ajustar menu mobile na redimensionamento da tela
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.querySelector(".nav-links").style.display = "flex";
  } else {
    document.querySelector(".nav-links").style.display = "none";
  }
});
