/*
 * Conteúdos editáveis antes da publicação definitiva:
 * [NOME_OFICIAL_DO_CANIL]
 * WhatsApp oficial: +55 15 99606-2708
 * [INSTAGRAM_DO_CANIL]
 * [CIDADE_DO_CANIL]
 * [EMAIL_DO_CANIL]
 * [FOTO_REAL_DO_ALEX]
 * [HORÁRIOS_PARA_VISITAS]
 */
const siteConfig = {
  whatsappNumber: "5515996062708",
  messages: {
    default: "Olá, Alex! Encontrei o site do canil e gostaria de conhecer melhor seus Boston Terriers.",
    hero: "Olá, Alex! Encontrei o site do canil e gostaria de conhecer melhor seus Boston Terriers.",
    visit: "Olá, Alex! Conheci o canil pelo site e gostaria de combinar uma visita para conhecer os Boston Terriers pessoalmente.",
    stories: "Olá, Alex! Conheci a seção de novas histórias pelo site e gostaria de saber mais sobre as ninhadas e os Boston Terriers.",
  },
};

function whatsappUrl(message) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const base = number ? `https://wa.me/${number}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const key = link.dataset.message || "default";
  const message = siteConfig.messages[key] || siteConfig.messages.default;
  link.href = whatsappUrl(message);
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const header = document.querySelector("[data-header]");
function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

function closeMenu({ restoreFocus = false } = {}) {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  document.body.classList.remove("menu-open");
  if (restoreFocus) menuButton.focus();
}

function openMenu() {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Fechar menu");
  document.body.classList.add("menu-open");
  mobileMenu.querySelector("a")?.focus();
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMenu({ restoreFocus: true });
  else openMenu();
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    closeMenu({ restoreFocus: true });
    return;
  }

  if (event.key !== "Tab" || mobileMenu?.hidden) return;
  const focusable = [...mobileMenu.querySelectorAll("a"), menuButton];
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1180) closeMenu();
});

const dialog = document.querySelector(".gallery-dialog");
const dialogImage = dialog?.querySelector("img");
const dialogCaption = dialog?.querySelector("p");
const dialogClose = dialog?.querySelector(".dialog-close");
let galleryTrigger = null;

document.querySelectorAll(".gallery-item").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    if (!dialog || !image) return;
    galleryTrigger = button;
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = button.dataset.caption || image.alt;
    dialog.showModal();
    dialogClose?.focus();
  });
});

function closeDialog() {
  if (!dialog?.open) return;
  dialog.close();
  galleryTrigger?.focus();
}

dialogClose?.addEventListener("click", closeDialog);
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDialog();
});

const galleryTrack = document.querySelector(".gallery-track");
const galleryIndicators = [...document.querySelectorAll(".gallery-progress span")];
function updateGalleryIndicator() {
  if (!galleryTrack || !galleryIndicators.length) return;
  const maxScroll = galleryTrack.scrollWidth - galleryTrack.clientWidth;
  const progress = maxScroll > 0 ? galleryTrack.scrollLeft / maxScroll : 0;
  const index = Math.min(galleryIndicators.length - 1, Math.round(progress * (galleryIndicators.length - 1)));
  galleryIndicators.forEach((indicator, itemIndex) => {
    indicator.style.background = itemIndex === index ? "var(--turquoise)" : "rgba(255, 255, 255, 0.26)";
  });
}
galleryTrack?.addEventListener("scroll", updateGalleryIndicator, { passive: true });

const form = document.querySelector("#whatsapp-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get("nome") || "").trim();
  const city = String(data.get("cidade") || "").trim();
  const subject = String(data.get("assunto") || "").trim();
  const message = String(data.get("mensagem") || "").trim();
  const personalized = `Olá, Alex! Meu nome é ${name}. Sou de ${city}. Entrei em contato pelo site porque ${subject}. ${message}`;
  window.open(whatsappUrl(personalized), "_blank", "noopener,noreferrer");
});

const revealItems = document.querySelectorAll(".reveal");
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -7%", threshold: 0.08 },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}
