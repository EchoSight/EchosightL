const menuBtn = document.getElementById("menuBtn");
const themeToggle = document.getElementById("themeToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.classList.add("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thanks — we’ll get back to you within one business day.";
    contactForm.reset();
  });
}
