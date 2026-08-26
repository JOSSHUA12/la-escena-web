
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

      card.setAttribute(
        "aria-pressed",
        flipped ? "true" : "false"
      );
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