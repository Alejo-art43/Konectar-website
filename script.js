// === Transiciones suaves entre páginas ===
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const body = document.body;

  // Efecto de aparición inicial
  body.classList.add("fade-in");

  // Transición al cambiar de página
  links.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href.startsWith("http") && !href.startsWith("#")) {
        e.preventDefault();
        body.classList.remove("fade-in");
        body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 400);
      }
    });
  });
});

// === Efecto FadeOut ===
const style = document.createElement('style');
style.innerHTML = `
  .fade-out {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
`;
document.head.appendChild(style);

// === Efecto de aparición de tarjetas al hacer scroll ===
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card, .persona");
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    }
  });
});

// === Animación CSS para las tarjetas ===
const cardStyle = document.createElement('style');
cardStyle.innerHTML = `
  .card, .persona {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .card.visible, .persona.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(cardStyle);
