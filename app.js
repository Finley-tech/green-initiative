// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ===== Dropdown toggle =====
document.querySelectorAll(".drop").forEach(drop => {
  const btn = drop.querySelector("button");
  btn?.addEventListener("click", (e) => {
    e.preventDefault();
    drop.classList.toggle("open");
  });
});

document.addEventListener("click", (e) => {
  document.querySelectorAll(".drop").forEach(drop => {
    if (!drop.contains(e.target)) drop.classList.remove("open");
  });
});

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// ===== Gallery lightbox =====
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lightboxImg");
const lbCap = document.getElementById("lightboxCap");

document.querySelectorAll("[data-lightbox]").forEach(el => {
  el.addEventListener("click", () => {
    const img = el.querySelector("img");
    const cap = el.querySelector(".gcap")?.textContent || "Preview";
    if (!lb || !lbImg) return;
    lbImg.src = img?.src || "";
    if (lbCap) lbCap.textContent = cap;
    lb.classList.add("open");
  });
});

function closeLightbox(){
  lb?.classList.remove("open");
  if (lbImg) lbImg.src = "";
}

document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
lb?.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });


const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formMsg) formMsg.textContent = "✅ Sent! (Prototype). Add backend later if needed.";
    contactForm.reset();
  });
}