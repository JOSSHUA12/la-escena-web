/* =========================================================
   LA ESCENA — 3D FLIP CARDS
   Desktop/tablet: hover
   Mobile: tap
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".pillar-flip");

  cards.forEach((card) => {
    const toggleCard = () => {
      const flipped = card.classList.toggle("is-flipped");

      card.setAttribute("aria-pressed", flipped ? "true" : "false");
    };

    /* =========================================
       CELULAR / TABLET
       Tocar la tarjeta para girarla
       ========================================= */

    card.addEventListener("click", toggleCard);

    /* =========================================
       TECLADO
       Enter o barra espaciadora
       ========================================= */

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        toggleCard();
      }
    });
  });
});

/* =========================================================
   LA ESCENA — HEADER INTELIGENTE
   Compactar header después de 40px de scroll
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  if (!header) return;

  const updateHeader = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", updateHeader, {
    passive: true,
  });

  updateHeader();
});
