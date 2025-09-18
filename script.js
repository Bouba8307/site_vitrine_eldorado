document.addEventListener("DOMContentLoaded", function () {
  function cleanSteps(steps) {
    steps.forEach((s) => {
      if (s instanceof HTMLElement) {
        s.style.backgroundImage = "";
        s.style.backgroundSize = "";
        s.style.backgroundPosition = "";
        s.style.backgroundRepeat = "";
        s.style.boxShadow = "";
        s.style.border = "";
      }
    });
  }

  function animateWasteFlow() {
    const diagram = document.querySelector(".tech-diagram");
    if (!diagram) return;

    const images = [
      "img/collecte.jpg",
      "img/tri.jpg",
      "img/pyrogaz.png",
      "img/carburant.jpg",
    ];

    const steps = [
      diagram.querySelector(".step-1"),
      diagram.querySelector(".step-2"),
      diagram.querySelector(".step-3"),
      diagram.querySelector(".step-4"),
    ];

    let step = 0;

    function fillStep() {
      cleanSteps(steps);
      const currentStep = steps[step];

      if (currentStep instanceof HTMLElement) {
        currentStep.style.backgroundImage = `url('${images[step]}')`;
        currentStep.style.backgroundSize = "cover";
        currentStep.style.backgroundPosition = "center";
        currentStep.style.backgroundRepeat = "no-repeat";
        currentStep.style.boxShadow =
          "0 0 24px 8px #fe8402aa, 0 0 0 8px #41c13033";
        currentStep.style.border = "3px solid #41c130";
        currentStep.classList.add("animate__animated", "animate__bounceIn");

        setTimeout(() => {
          currentStep.classList.remove("animate__bounceIn");
          step++;
          if (step < steps.length) {
            setTimeout(fillStep, 900);
          } else {
            setTimeout(() => {
              cleanSteps(steps);
              step = 0;
              setTimeout(fillStep, 1200);
            }, 1200);
          }
        }, 700);
      }
    }

    fillStep();
  }

  animateWasteFlow();

  const enSavoirPlusBtn = document.querySelector(".en-savoir-plus");
  if (enSavoirPlusBtn) {
    enSavoirPlusBtn.addEventListener("click", function () {
      const modal = document.querySelector(".modal");
      if (modal instanceof HTMLElement) {
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
        const firstFocusable = modal.querySelector(
          "button, a, input, [tabindex]"
        );
        if (firstFocusable instanceof HTMLElement) firstFocusable.focus();
      }
    });
  }

  window.addEventListener("click", function (event) {
    const modal = document.querySelector(".modal");
    if (
      modal instanceof HTMLElement &&
      (event.target === modal ||
        event.target.classList.contains("modal-backdrop"))
    ) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    }
  });

  const modalClose = document.querySelector(".modal-close");
  if (modalClose) {
    modalClose.addEventListener("click", function () {
      const modal = document.querySelector(".modal");
      if (modal instanceof HTMLElement) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
      }
    });
  }

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const modal = document.querySelector(".modal");
      if (modal instanceof HTMLElement) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
      }
    }
  });

  // Animation avancée du diagramme technologie
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

    let i = 0;

    function nextStep() {
      if (i > 0) {
        const prev = steps[i - 1];
        if (prev instanceof Element) prev.classList.remove("active-step");
        const prevArrow = arrows[i - 1];
        if (prevArrow instanceof Element)
          prevArrow.classList.remove("active-arrow");
      }

      const current = steps[i];
      if (current instanceof Element) {
        current.classList.add(
          "active-step",
          "animate__animated",
          "animate__bounceIn"
        );
        const currentArrow = arrows[i];
        if (currentArrow instanceof Element) {
          setTimeout(() => {
            currentArrow.classList.add("active-arrow");
          }, 400);
        }
        setTimeout(() => {
          if (current instanceof Element)
            current.classList.remove("animate__bounceIn");
          i++;
          if (i < steps.length) {
            setTimeout(nextStep, 700);
          } else {
            setTimeout(() => {
              cleanSteps(steps);
              i = 0;
              setTimeout(nextStep, 1000);
            }, 1200);
          }
        }, 700);
      }
    }

    nextStep();
  }

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

  animateProcessFlow();

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
    if (header) {
      header.style.background = "rgba(255,255,255,0.98)";
      header.style.boxShadow =
        window.scrollY > 50
          ? "0 2px 12px rgba(0,0,0,0.12)"
          : "0 2px 12px rgba(0,0,0,0.08)";
    }
  });

  // Animate on scroll
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

  // Animation du compteur des statistiques (supporte data-target et data-suffix)
  document.querySelectorAll(".stat-number").forEach((stat) => {
    const targetAttr = stat.getAttribute("data-target");
    const suffix = stat.getAttribute("data-suffix") || "";
    const endValue = targetAttr
      ? parseInt(targetAttr, 10)
      : parseInt((stat.textContent || "").replace(/\D/g, ""), 10);
    if (!isNaN(endValue)) {
      let start = 0;
      const duration = 1200;
      const interval = 30;
      const steps = Math.max(1, Math.floor(duration / interval));
      const increment = Math.max(1, Math.round(endValue / steps));
      const fmt = new Intl.NumberFormat("fr-FR");
      function animateStat() {
        start += increment;
        if (start >= endValue) {
          stat.textContent = fmt.format(endValue) + suffix;
        } else {
          stat.textContent = fmt.format(start) + suffix;
          setTimeout(animateStat, interval);
        }
      }
      // initialise affichage
      stat.textContent = fmt.format(0) + suffix;
      setTimeout(animateStat, interval);
    }
  });

  // Animation des cartes solutions
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

  // Animation des icônes flottantes
  document.querySelectorAll(".floating-icon").forEach((icon) => {
    if (icon instanceof HTMLElement) {
      icon.addEventListener("mouseenter", () => {
        icon.style.opacity = "0.7";
        icon.style.transform = "scale(1.5)";
      });
      icon.addEventListener("mouseleave", () => {
        icon.style.opacity = "0.18";
        icon.style.transform = "";
      });
    }
  });

  // Animation du bouton contact
  const contactBtn = document.querySelector(".btn-accent");
  if (contactBtn) {
    contactBtn.addEventListener("mouseenter", () => {
      contactBtn.classList.add("animate__heartBeat");
    });
    contactBtn.addEventListener("animationend", () => {
      contactBtn.classList.remove("animate__heartBeat");
    });
  }

  // Animation du footer social links
  document.querySelectorAll(".social-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.classList.add("animate__animated", "animate__jello");
    });
    link.addEventListener("animationend", () => {
      link.classList.remove("animate__jello");
    });
  });

  // Animation du formulaire de contact
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

  // Animate tech-step cards on scroll

  // Animation de la carte (Contact)
  const map = document.querySelector(".map-container");
  if (map) {
    map.addEventListener("mouseenter", () => {
      map.classList.add("animate__animated", "animate__shakeX");
    });
    map.addEventListener("animationend", () => {
      map.classList.remove("animate__shakeX");
    });
  }

  // Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      const navMenu = document.querySelector(".nav-menu");
      if (navMenu) {
        navMenu.classList.toggle("active");
      }
    });
  }

  // Auto-scrolling team grid (single line, continuous loop)
  (function initTeamAutoScroll() {
    const grid = document.querySelector(".team-grid");
    if (!grid) return;

    // Ensure content is long enough for seamless loop: duplicate children once
    const children = Array.from(grid.children);
    if (children.length > 0) {
      const cloneFragment = document.createDocumentFragment();
      children.forEach((child) =>
        cloneFragment.appendChild(child.cloneNode(true))
      );
      grid.appendChild(cloneFragment);
    }

    let rafId = 0;
    let running = true;
    const speed = 0.6; // pixels per frame

    function step() {
      if (!running) {
        rafId = requestAnimationFrame(step);
        return;
      }
      grid.scrollLeft += speed;
      // Reset to the first half when we've scrolled past the original content width
      const half = grid.scrollWidth / 2;
      if (grid.scrollLeft >= half) {
        grid.scrollLeft -= half;
      }
      rafId = requestAnimationFrame(step);
    }

    // Pause on hover or when focusing inside
    function pause() {
      running = false;
    }
    function resume() {
      running = true;
    }
    grid.addEventListener("mouseenter", pause);
    grid.addEventListener("mouseleave", resume);
    grid.addEventListener("touchstart", pause, { passive: true });
    grid.addEventListener("touchend", resume, { passive: true });
    grid.addEventListener("focusin", pause);
    grid.addEventListener("focusout", resume);

    rafId = requestAnimationFrame(step);

    // Cleanup if needed (in case of SPA navigation later)
    window.addEventListener("beforeunload", () => cancelAnimationFrame(rafId));
  })();
});
