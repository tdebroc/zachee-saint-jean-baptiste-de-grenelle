/* Parcours Zachée — interactions */
(function () {
  "use strict";

  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");
  const progress = document.getElementById("scrollProgress");

  /* Nav shrink + scroll progress bar */
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle("is-scrolled", y > 40);

    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = h > 0 ? (y / h) * 100 + "%" : "0%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  function closeMenu() {
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Ouvrir le menu");
  }
  burger.addEventListener("click", function () {
    const open = navLinks.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  });
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* Reveal on scroll */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Animated count-up for facts */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const co = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count"), 10) || 0;
          const dur = 1100;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(eased * target);
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          co.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { co.observe(el); });
  }

  /* Subtle parallax on hero tree */
  const tree = document.querySelector(".hero__tree");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (tree && !reduce) {
    window.addEventListener(
      "scroll",
      function () {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          tree.style.transform = "translateY(" + y * 0.12 + "px)";
        }
      },
      { passive: true }
    );
  }
})();
