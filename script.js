document.addEventListener("DOMContentLoaded", function () {
  // Animation visuelle : chaque niveau a son image et le déchet remplit le cercle à chaque passage
  function animateWasteFlow() {
    const diagram = document.querySelector(".tech-diagram");
    if (!diagram) return;

    // Images pour chaque étape (remplace les chemins par tes images)
    const images = [
      "img/collecte.jpg", // Collecte
      "img/tri.jpg", // Tri
      "img/pyrogaz.png", // Pyrogazéification
      "img/carburant.jpg", // Carburant
    ];

    // Sélecteurs des cercles
    const steps = [
      diagram.querySelector(".step-1"),
      diagram.querySelector(".step-2"),
      diagram.querySelector(".step-3"),
      diagram.querySelector(".step-4"),
    ];

    // Nettoie les backgrounds
    steps.forEach((s) => {
      // @ts-ignore
      s.style.backgroundImage = "";
      // @ts-ignore
      s.style.backgroundSize = "";
      // @ts-ignore
      s.style.backgroundPosition = "";
      // @ts-ignore
      s.style.backgroundRepeat = "";
      // @ts-ignore
      s.style.boxShadow = "";
      // @ts-ignore
      s.style.border = "";
    });

    let step = 0;
    function fillStep() {
      // Nettoie tous les cercles
      // @ts-ignore
      // @ts-ignore
      steps.forEach((s, i) => {
        // @ts-ignore
        s.style.backgroundImage = "";
        // @ts-ignore
        s.style.backgroundSize = "";
        // @ts-ignore
        s.style.backgroundPosition = "";
        // @ts-ignore
        s.style.backgroundRepeat = "";
        // @ts-ignore
        s.style.boxShadow = "";
        // @ts-ignore
        s.style.border = "";
      });

      // Ajoute l'image dans le cercle courant
      // @ts-ignore
      steps[step].style.backgroundImage = `url('${images[step]}')`;
      // @ts-ignore
      steps[step].style.backgroundSize = "cover";
      // @ts-ignore
      steps[step].style.backgroundPosition = "center";
      // @ts-ignore
      steps[step].style.backgroundRepeat = "no-repeat";
      // @ts-ignore
      steps[step].style.boxShadow =
        "0 0 24px 8px #fe8402aa, 0 0 0 8px #41c13033";
      // @ts-ignore
      steps[step].style.border = "3px solid #41c130";

      // @ts-ignore
      steps[step].classList.add("animate__animated", "animate__bounceIn");
      setTimeout(() => {
        // @ts-ignore
        steps[step].classList.remove("animate__bounceIn");
        step++;
        if (step < steps.length) {
          setTimeout(fillStep, 900);
        } else {
          setTimeout(() => {
            // Nettoie tous les cercles
            // @ts-ignore
            // @ts-ignore
            steps.forEach((s, i) => {
              // @ts-ignore
              s.style.backgroundImage = "";
              // @ts-ignore
              s.style.backgroundSize = "";
              // @ts-ignore
              s.style.backgroundPosition = "";
              // @ts-ignore
              s.style.backgroundRepeat = "";
              // @ts-ignore
              s.style.boxShadow = "";
              // @ts-ignore
              s.style.border = "";
            });
            step = 0;
            setTimeout(fillStep, 1200);
          }, 1200);
        }
      }, 700);
    }

    fillStep();
  }

  // Lance l'animation du déchet qui traverse les étapes avec images dans les cercles
  animateWasteFlow();
});
document.addEventListener("DOMContentLoaded", function () {
  // Animation visuelle : chaque niveau a son image et le déchet remplit le cercle à chaque passage
  // @ts-ignore
  animateWasteFlow();

  // Ajoute l'écouteur d'événement pour le clic sur le bouton "En savoir plus"
  const enSavoirPlusBtn = document.querySelector(".en-savoir-plus");
  // @ts-ignore
  enSavoirPlusBtn.addEventListener("click", function () {
    const modal = document.querySelector(".modal");
    // @ts-ignore
    modal.style.display = "block";
  });

  // Ferme la modale lorsque l'utilisateur clique en dehors de celle-ci
  window.addEventListener("click", function (event) {
    const modal = document.querySelector(".modal");
    if (event.target === modal) {
      // @ts-ignore
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // ...existing code...

  // Animation avancée du diagramme technologie (Process steps)
  // Animation visuelle du flux du processus de "Collecte" à "Carburant"
  function animateProcessFlow() {
    const steps = [
      document.querySelector(".step-1"),
      document.querySelector(".step-2"),
      document.querySelector(".step-3"),
      document.querySelector(".step-4"),
    ];
    const arrows = [
      document.querySelector(".arrow-1"),
      document.querySelector(".arrow-2"),
      document.querySelector(".arrow-3"),
    ];

    // Reset all
    // @ts-ignore
    steps.forEach((s) =>
      s.classList.remove(
        "active-step",
        "animate__animated",
        "animate__bounceIn"
      )
    );
    // @ts-ignore
    arrows.forEach((a) => a.classList.remove("active-arrow"));

    // Animation sequence
    let i = 0;
    function nextStep() {
      if (i > 0) {
        // @ts-ignore
        steps[i - 1].classList.remove("active-step");
        // @ts-ignore
        if (arrows[i - 1]) arrows[i - 1].classList.remove("active-arrow");
      }
      if (steps[i]) {
        // @ts-ignore
        steps[i].classList.add(
          "active-step",
          "animate__animated",
          "animate__bounceIn"
        );
        if (arrows[i]) {
          setTimeout(() => {
            // @ts-ignore
            arrows[i].classList.add("active-arrow");
          }, 400);
        }
        setTimeout(() => {
          // @ts-ignore
          steps[i].classList.remove("animate__bounceIn");
          i++;
          if (i < steps.length) {
            setTimeout(nextStep, 700);
          } else {
            // Reset after a delay for looping
            setTimeout(() => {
              // @ts-ignore
              steps.forEach((s) => s.classList.remove("active-step"));
              // @ts-ignore
              arrows.forEach((a) => a.classList.remove("active-arrow"));
              i = 0;
              setTimeout(nextStep, 1000);
            }, 1200);
          }
        }, 700);
      }
    }
    nextStep();
  }

  // Ajoute le style pour l'animation visuelle
  const style = document.createElement("style");
  style.innerHTML = `
      .tech-diagram .active-step {
        box-shadow: 0 0 24px 8px #fe8402aa, 0 0 0 8px #41c13033;
        border: 3px solid #41c130;
        z-index: 2;
      }
      .tech-diagram .active-arrow {
        background: linear-gradient(90deg, #41c130 60%, #fe8402 100%);
        box-shadow: 0 0 12px 2px #41c13088;
      }
    `;
  document.head.appendChild(style);

  // Lance l'animation du processus
  animateProcessFlow();

  // ...existing code...
});
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || !document.querySelector(targetId)) return;
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      document
        .querySelectorAll("nav ul li a")
        .forEach((a) => a.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Tab functionality for Impact section
  const tabs = document.querySelectorAll(".impact-tab");
  const panels = document.querySelectorAll(".impact-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      panels.forEach((panel) => panel.classList.remove("active"));
      const panelId = tab.getAttribute("data-tab");
      if (panelId) {
        const panel = document.getElementById(panelId);
        if (panel) {
          panel.classList.add("active");
        }
      }
    });
  });

  // Sticky header effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 50) {
      header.style.background = "rgba(255,255,255,0.98)";
      header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)";
    } else {
      header.style.background = "rgba(255,255,255,0.98)";
      header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
    }
  });

  // Animate on scroll (simple version)
  function animateOnScroll() {
    document.querySelectorAll(".animate__animated").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("animate__fadeInUp");
      }
    });
  }
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();

  // Simple form validation feedback
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        alert("Veuillez remplir tous les champs requis.");
      }
    });
  });

  // ----------- AJOUTS AVANCÉS ET ANIMATIONS -----------

  // 1. Animation du compteur des statistiques (Mission)
  document.querySelectorAll(".stat-number").forEach((stat) => {
    if (stat.textContent !== null) {
      const endValue = parseInt(stat.textContent.replace("%", ""));
      if (!isNaN(endValue)) {
        let start = 0;
        let suffix = stat.textContent.includes("%") ? "%" : "";
        const duration = 1200;
        const step = Math.ceil(endValue / (duration / 30));
        function animateStat() {
          if (start < endValue) {
            start += step;
            stat.textContent = (start > endValue ? endValue : start) + suffix;
            setTimeout(animateStat, 30);
          } else {
            stat.textContent = endValue + suffix;
          }
        }
        animateStat();
      }
    }
  });

  // 2. Animation du diagramme technologie (Process steps)
  document.querySelectorAll(".process-step").forEach((step, i) => {
    step.addEventListener("mouseenter", () => {
      step.classList.add("animate__animated", "animate__rubberBand");
    });
    step.addEventListener("animationend", () => {
      step.classList.remove("animate__rubberBand");
    });
  });

  // 3. Animation des cartes solutions et avantages au survol
  document
    .querySelectorAll(".solution-card, .advantage-card")
    .forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("animate__animated", "animate__pulse");
      });
      card.addEventListener("animationend", () => {
        card.classList.remove("animate__pulse");
      });
    });

  // 4. Animation des icônes flottantes (Hero)
  document.querySelectorAll(".floating-icon").forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.opacity = "0.7";
      icon.style.transform = "scale(1.5)";
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.opacity = "0.18";
      icon.style.transform = "";
    });
  });

  // 5. Animation du bouton contact (Hero)
  const contactBtn = document.querySelector(".btn-accent");
  if (contactBtn) {
    contactBtn.addEventListener("mouseenter", () => {
      contactBtn.classList.add("animate__heartBeat");
    });
    contactBtn.addEventListener("animationend", () => {
      contactBtn.classList.remove("animate__heartBeat");
    });
  }

  // 6. Animation du footer social links
  document.querySelectorAll(".social-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.classList.add("animate__animated", "animate__jello");
    });
    link.addEventListener("animationend", () => {
      link.classList.remove("animate__jello");
    });
  });

  // 7. Animation du formulaire de contact à la soumission
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      if (this.checkValidity()) {
        e.preventDefault();
        this.classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => {
          this.reset();
          this.classList.remove("animate__fadeOut");
          alert("Message envoyé ! Nous vous répondrons bientôt.");
        }, 800);
      }
    });
  }

  // 8. Animation de la carte (Contact)
  const map = document.querySelector(".map-container");
  if (map) {
    map.addEventListener("mouseenter", () => {
      map.classList.add("animate__animated", "animate__shakeX");
    });
    map.addEventListener("animationend", () => {
      map.classList.remove("animate__shakeX");
    });
  }
});

const menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu) {
      navMenu.classList.toggle("active");
    }
  });
}
