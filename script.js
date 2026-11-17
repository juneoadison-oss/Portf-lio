const yearElement = document.getElementById("year");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("nav-links");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });
}
