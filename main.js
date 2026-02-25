// Mobile menu toggle
const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
  navBtn.setAttribute("aria-expanded", !isExpanded);
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navBtn.contains(e.target) && !menuBar.contains(e.target)) {
    navBtn.setAttribute("aria-expanded", "false");
    menuBar.classList.add("hidden");
    menuBar.classList.remove("flex");
  }
});

// Scroll reveal with IntersectionObserver
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// Smooth header background on scroll
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    header.style.borderBottomColor = "rgba(96, 128, 250, 0.06)";
  } else {
    header.style.borderBottomColor = "";
  }
  lastScroll = currentScroll;
}, { passive: true });
