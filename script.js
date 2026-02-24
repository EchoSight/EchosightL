const menuBtn = document.getElementById("menuBtn");
const themeToggle = document.getElementById("themeToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const cookieConsentKey = "cookieConsent";

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

const accordionButtons = document.querySelectorAll("[data-accordion-button]");

if (accordionButtons.length) {
  const closeItem = (button) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;

    button.setAttribute("aria-expanded", "false");

    if (panel) {
      panel.hidden = true;
    }
  };

  const openItem = (button) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;

    button.setAttribute("aria-expanded", "true");

    if (panel) {
      panel.hidden = false;
    }
  };

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      accordionButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          closeItem(otherButton);
        }
      });

      if (isExpanded) {
        closeItem(button);
      } else {
        openItem(button);
      }
    });
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thanks — we’ll get back to you within one business day.";
    contactForm.reset();
  });
}

const getConsent = () => {
  const savedConsent = localStorage.getItem(cookieConsentKey);

  if (!savedConsent) {
    return null;
  }

  try {
    return JSON.parse(savedConsent);
  } catch {
    return null;
  }
};

const saveConsent = (consent) => {
  localStorage.setItem(
    cookieConsentKey,
    JSON.stringify({
      essential: true,
      analytics: Boolean(consent.analytics),
      marketing: Boolean(consent.marketing),
      updatedAt: new Date().toISOString(),
    }),
  );
};

const closeCookiePopup = () => {
  const popup = document.querySelector(".cookie-popup");
  if (!popup) {
    return;
  }

  popup.classList.add("is-closing");
  setTimeout(() => popup.remove(), 220);
};

const createCookiePopup = () => {
  const popup = document.createElement("section");
  popup.className = "cookie-popup";
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-live", "polite");
  popup.innerHTML = `
    <div class="cookie-popup__card container">
      <p class="cookie-popup__text">
        We use cookies to improve your experience. See our
        <a href="./privacy-policy.html">privacy policy</a>
        for details.
      </p>
      <div class="cookie-popup__actions">
        <button type="button" class="btn cookie-btn-accept">Accept All</button>
        <button type="button" class="btn btn-outline cookie-btn-reject">Reject Non-Essential</button>
        <button type="button" class="btn btn-secondary cookie-btn-manage">Manage Preferences</button>
      </div>
      <form class="cookie-popup__manage" hidden>
        <label>
          <input type="checkbox" name="analytics" checked />
          Analytics cookies
        </label>
        <label>
          <input type="checkbox" name="marketing" checked />
          Marketing cookies
        </label>
        <button type="submit" class="btn">Save Preferences</button>
      </form>
    </div>
  `;

  const manageBtn = popup.querySelector(".cookie-btn-manage");
  const acceptBtn = popup.querySelector(".cookie-btn-accept");
  const rejectBtn = popup.querySelector(".cookie-btn-reject");
  const manageForm = popup.querySelector(".cookie-popup__manage");

  acceptBtn?.addEventListener("click", () => {
    saveConsent({ analytics: true, marketing: true });
    closeCookiePopup();
  });

  rejectBtn?.addEventListener("click", () => {
    saveConsent({ analytics: false, marketing: false });
    closeCookiePopup();
  });

  manageBtn?.addEventListener("click", () => {
    if (!manageForm) {
      return;
    }

    manageForm.hidden = !manageForm.hidden;
    manageBtn.textContent = manageForm.hidden ? "Manage Preferences" : "Hide Preferences";
  });

  manageForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(manageForm);

    saveConsent({
      analytics: formData.get("analytics") === "on",
      marketing: formData.get("marketing") === "on",
    });
    closeCookiePopup();
  });

  document.body.appendChild(popup);
};

if (!getConsent()) {
  createCookiePopup();
}
