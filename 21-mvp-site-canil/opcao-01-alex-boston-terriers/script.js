const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
}

menuButton?.addEventListener("click", () => {
  if (!mobileMenu) return;
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const faqButtons = [...document.querySelectorAll(".faq-trigger")];

faqButtons.forEach((button) => {
  const content = document.getElementById(button.getAttribute("aria-controls"));
  if (!content) return;

  button.addEventListener("click", () => {
    const willOpen = button.getAttribute("aria-expanded") !== "true";

    faqButtons.forEach((otherButton) => {
      const otherContent = document.getElementById(
        otherButton.getAttribute("aria-controls"),
      );
      otherButton.setAttribute("aria-expanded", "false");
      otherButton.dataset.state = "closed";
      otherButton.closest(".faq-item")?.setAttribute("data-state", "closed");
      if (otherContent) {
        otherContent.hidden = true;
        otherContent.dataset.state = "closed";
      }
    });

    if (willOpen) {
      button.setAttribute("aria-expanded", "true");
      button.dataset.state = "open";
      button.closest(".faq-item")?.setAttribute("data-state", "open");
      content.hidden = false;
      content.dataset.state = "open";
    }
  });
});

const galleryButtons = [...document.querySelectorAll(".gallery-item")];
let lastGalleryTrigger;
const dialog = document.createElement("div");
dialog.className = "static-dialog";
dialog.hidden = true;
dialog.innerHTML = `
  <div class="dialog-overlay" data-dialog-close></div>
  <div class="dialog-content" role="dialog" aria-modal="true" aria-label="Fotografia ampliada">
    <img class="dialog-image" alt="" />
    <p class="dialog-caption"></p>
    <button class="dialog-close" type="button" aria-label="Fechar fotografia ampliada" data-dialog-close>×</button>
  </div>`;
document.body.append(dialog);

function closeDialog() {
  if (dialog.hidden) return;
  dialog.hidden = true;
  document.body.style.overflow = "";
  lastGalleryTrigger?.focus();
}

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sourceImage = button.querySelector("img");
    if (!sourceImage) return;
    lastGalleryTrigger = button;
    const dialogImage = dialog.querySelector(".dialog-image");
    const caption = dialog.querySelector(".dialog-caption");
    dialogImage.src = sourceImage.src;
    dialogImage.alt = sourceImage.alt;
    caption.textContent = button.querySelector(".gallery-item__overlay span")?.textContent ?? "";
    dialog.hidden = false;
    document.body.style.overflow = "hidden";
    dialog.querySelector(".dialog-close")?.focus();
  });
});

dialog.querySelectorAll("[data-dialog-close]").forEach((element) => {
  element.addEventListener("click", closeDialog);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeDialog();
  closeMenu();
});

const dogContainer = document.querySelector(".dogs-carousel__container");
const dogCards = dogContainer ? [...dogContainer.children] : [];
const dogDots = [...document.querySelectorAll(".carousel-dots span")];
const dogButtons = [...document.querySelectorAll(".carousel-arrows button")];
let dogIndex = 0;

function visibleDogCards() {
  if (window.innerWidth <= 760) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 3;
}

function updateDogCarousel() {
  if (!dogContainer || !dogCards.length) return;
  const maxIndex = Math.max(0, dogCards.length - visibleDogCards());
  dogIndex = Math.min(Math.max(dogIndex, 0), maxIndex);
  const cardWidth = dogCards[0].getBoundingClientRect().width;
  dogContainer.style.transform = `translateX(-${dogIndex * (cardWidth + 18)}px)`;
  dogDots.forEach((dot, index) => dot.classList.toggle("is-active", index === dogIndex));
}

dogButtons[0]?.addEventListener("click", () => {
  dogIndex -= 1;
  updateDogCarousel();
});
dogButtons[1]?.addEventListener("click", () => {
  dogIndex += 1;
  updateDogCarousel();
});
window.addEventListener("resize", updateDogCarousel);
updateDogCarousel();

const revealElements = [...document.querySelectorAll(".editorial-reveal")];
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  revealElements.forEach((element) => observer.observe(element));
}
