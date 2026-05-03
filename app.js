const siteConfig = {
  brand: "SS Catering Service",
  phoneDisplay: "9444251444",
  phoneIntl: "919444251444",
  instagram: "https://www.instagram.com/saravanan_redhills",
  directions: "https://share.google/m91X2LN6wP7cZ9A7I",
  menuUrl: "https://sscatering.in/menu.html",
  address: "Devaki Street, Redhills, Chennai - 600052",
  locality: "Best catering service in Chennai for weddings, receptions, birthdays, and corporate events near Redhills.",
  serviceArea: "Services available only in Chennai.",
};

const plannerMenus = {
  wedding: {
    veg: {
      starter: ["Badam milk", "Medhu vadai", "Mini idli with sambar"],
      main: ["Banana leaf saapadu", "Beans poriyal", "Aviyal", "Sambar", "Rasam", "Curd rice"],
      dessert: ["Kesari", "Paal payasam", "Jangiri"],
    },
    nonveg: {
      starter: ["Badam milk", "Medhu vadai", "Pepper chicken fry"],
      main: ["Chicken biryani", "Mutton gravy", "Vegetable kurma", "White rice with rasam", "Onion raita"],
      dessert: ["Gulab jamun", "Semiya payasam", "Ice cream cup"],
    },
    brahmin: {
      starter: ["Panagam", "Paruppu vadai", "Mini idli"],
      main: ["Paruppu with ghee", "Sambar", "Mor kuzhambu", "Beans usili", "Aviyal", "Curd rice"],
      dessert: ["Sweet pongal", "Badam kheer", "Mysore pak"],
    },
    jain: {
      starter: ["Fresh lime juice", "Jain cutlet", "Mini veg roll"],
      main: ["Jain vegetable pulao", "Dal without onion and garlic", "Paneer gravy", "Phulka", "Curd rice"],
      dessert: ["Fruit custard", "Kesari", "Basundi"],
    },
  },
  birthday: {
    veg: {
      starter: ["Rose milk", "Vegetable cutlet", "Mini samosa"],
      main: ["Vegetable biryani", "Paneer butter masala", "Chapati", "Curd rice"],
      dessert: ["Gulab jamun", "Fruit salad", "Cake support service"],
    },
    nonveg: {
      starter: ["Rose milk", "Chicken 65", "Mini spring roll"],
      main: ["Chicken biryani", "Pepper chicken gravy", "Parotta", "Veg pulao"],
      dessert: ["Brownie slice", "Gulab jamun", "Ice cream cup"],
    },
    brahmin: {
      starter: ["Badam milk", "Paruppu vadai", "Mini idli"],
      main: ["Lemon rice", "Vegetable kootu", "Sambar rice", "Curd rice"],
      dessert: ["Kesari", "Payasam", "Laddu"],
    },
    jain: {
      starter: ["Mango juice", "Jain veg cutlet", "Roasted peanuts"],
      main: ["Jain pulao", "Dal", "Vegetable curry", "Phulka", "Curd rice"],
      dessert: ["Fruit bowl", "Basundi", "Milk sweet"],
    },
  },
  corporate: {
    veg: {
      starter: ["Filter coffee", "Mini idli", "Vegetable puff"],
      main: ["South Indian meals", "Paneer pepper fry", "Sambar", "Rasam", "Curd rice"],
      dessert: ["Kesari", "Payasam"],
    },
    nonveg: {
      starter: ["Tea or coffee", "Chicken cutlet", "Mini sandwich"],
      main: ["Chicken biryani", "Boiled egg", "Dalcha", "Vegetable kurma", "Raita"],
      dessert: ["Gulab jamun", "Fruit cream"],
    },
    brahmin: {
      starter: ["Filter coffee", "Medhu vadai", "Mini idli"],
      main: ["Brahmin meals", "Paruppu", "Sambar", "Kootu", "Curd rice"],
      dessert: ["Sweet pongal", "Payasam"],
    },
    jain: {
      starter: ["Tea", "Jain kachori", "Mini veg roll"],
      main: ["Jain veg pulao", "Dal", "Mixed veg curry", "Phulka", "Curd"],
      dessert: ["Fruit custard", "Milk sweet"],
    },
  },
  outdoor: {
    veg: {
      starter: ["Nannari sarbath", "Masala vadai", "Sundal"],
      main: ["Tamarind rice", "Curd rice", "Vegetable kurma", "Poori", "Sambar rice"],
      dessert: ["Kesari", "Jangiri"],
    },
    nonveg: {
      starter: ["Lemon juice", "Chicken 65", "Masala vadai"],
      main: ["Mutton biryani", "Chicken gravy", "White rice", "Rasam", "Raita"],
      dessert: ["Gulab jamun", "Payasam"],
    },
    brahmin: {
      starter: ["Panagam", "Paruppu vadai", "Sundal"],
      main: ["Coconut rice", "Sambar", "Mor kuzhambu", "Poriyal", "Curd rice"],
      dessert: ["Sweet pongal", "Payasam"],
    },
    jain: {
      starter: ["Fresh lime", "Veg cutlet", "Corn sundal"],
      main: ["Jain pulao", "Dal", "Vegetable stew", "Phulka", "Curd rice"],
      dessert: ["Fruit custard", "Kesari"],
    },
  },
};

function getPageName() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function buildHeader() {
  const page = getPageName();
  const navItems = [
    ["index.html", "Home"],
    ["menu.html", "Menu"],
    ["wedding-catering.html", "Wedding"],
    ["corporate-catering.html", "Corporate"],
    ["gallery.html", "Gallery"],
    ["about.html", "About"],
    ["contact.html", "Contact"],
  ];

  const navLinks = navItems
    .map(([href, label]) => `<a href="${href}" ${page === href ? 'aria-current="page"' : ""}>${label}</a>`)
    .join("");

  return `
    <header class="site-header" id="siteHeader">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="${siteConfig.brand} home">
          <strong>SS Catering</strong>
          <span>Redhills • Chennai</span>
        </a>
        <nav class="nav-links" aria-label="Primary">${navLinks}</nav>
        <div class="nav-cta">
          <a class="button-secondary" href="tel:${siteConfig.phoneDisplay}">Call Now</a>
          <a class="button" href="contact.html#booking">Book Now</a>
          <button class="menu-toggle" type="button" aria-label="Open menu" id="menuToggle">☰</button>
        </div>
      </div>
    </header>
  `;
}

function buildFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <div class="brand">
            <strong>SS Catering</strong>
            <span>Traditional taste, premium presentation</span>
          </div>
          <p style="margin-top:1rem;">${siteConfig.locality}</p>
          <p style="margin-top:0.8rem; font-weight:700;">${siteConfig.serviceArea}</p>
        </div>
        <div>
          <h3>Visit Us</h3>
          <p>${siteConfig.address}</p>
          <p style="margin-top:0.8rem;"><a href="${siteConfig.directions}" target="_blank" rel="noreferrer">Open Google Maps</a></p>
        </div>
        <div>
          <h3>Reach Us</h3>
          <p><a href="tel:${siteConfig.phoneDisplay}">${siteConfig.phoneDisplay}</a></p>
          <p style="margin-top:0.5rem;"><a href="https://wa.me/${siteConfig.phoneIntl}" target="_blank" rel="noreferrer">WhatsApp Enquiry</a></p>
          <p style="margin-top:0.5rem;"><a href="${siteConfig.instagram}" target="_blank" rel="noreferrer">Instagram</a></p>
        </div>
      </div>
      <div class="container footer-note">© 2026 SS Catering Service, Redhills. Wedding catering Tamil Nadu, banana leaf service, buffet setup, and outdoor event catering. ${siteConfig.serviceArea}</div>
    </footer>
    <div class="floating-actions" aria-label="Quick contact">
      <a class="wa-float" href="https://wa.me/${siteConfig.phoneIntl}?text=${encodeURIComponent("Vanakkam, I would like to enquire about catering for my event.")}" target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
      <a class="call-float" href="tel:${siteConfig.phoneDisplay}" aria-label="Call">Call</a>
    </div>
    <div class="lightbox" id="lightbox" aria-hidden="true">
      <figure>
        <img id="lightboxImage" alt="">
        <figcaption id="lightboxCaption"></figcaption>
      </figure>
    </div>
  `;
}

function initShell() {
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  if (header) header.innerHTML = buildHeader();
  if (footer) footer.innerHTML = buildFooter();

  const toggle = document.getElementById("menuToggle");
  const siteHeader = document.getElementById("siteHeader");
  if (toggle && siteHeader) {
    toggle.addEventListener("click", () => siteHeader.classList.toggle("menu-open"));
  }
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function initMenuFilter() {
  const buttons = document.querySelectorAll("[data-menu-filter]");
  const groups = document.querySelectorAll("[data-menu-group]");
  if (!buttons.length || !groups.length) return;

  const applyFilter = (target) => {
    const activeTarget = target || "all";
    buttons.forEach((button) => {
      const isActive = button.dataset.menuFilter === activeTarget;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    groups.forEach((group) => {
      const showGroup = activeTarget === "all" || group.dataset.menuGroup === activeTarget;
      group.hidden = !showGroup;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.menuFilter));
  });

  const defaultButton = document.querySelector("[data-menu-filter].is-active") || buttons[0];
  applyFilter(defaultButton?.dataset.menuFilter || "all");
}

function initGalleryLightbox() {
  const cards = document.querySelectorAll("[data-lightbox-src]");
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  if (!cards.length || !lightbox || !image || !caption) return;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      image.src = card.dataset.lightboxSrc;
      image.alt = card.dataset.lightboxAlt || "";
      caption.textContent = card.dataset.lightboxCaption || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  });
}

function initQuoteForms() {
  const forms = document.querySelectorAll("[data-quote-form]");
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const required = ["name", "phone", "eventDate", "location", "guests", "budget"];
      const missing = required.find((key) => !String(formData.get(key) || "").trim());

      if (missing) {
        window.alert("Please complete all booking fields before requesting a quote.");
        return;
      }

      const messageLines = [
        "Vanakkam SS Catering, I would like a catering quote.",
        `Name: ${formData.get("name")}`,
        `Phone: ${formData.get("phone")}`,
        `Event Type: ${formData.get("eventType") || "General enquiry"}`,
        `Event Date: ${formData.get("eventDate")}`,
        `Location: ${formData.get("location")}`,
        `Guests: ${formData.get("guests")}`,
        `Budget: ${formData.get("budget")}`,
        `Menu Preference: ${formData.get("preference") || "Not specified"}`,
        `Notes: ${formData.get("notes") || "No additional notes"}`,
      ];

      const url = `https://wa.me/${siteConfig.phoneIntl}?text=${encodeURIComponent(messageLines.join("\n"))}`;
      window.open(url, "_blank", "noopener");
    });
  });
}

function getPlannerKey(value) {
  if (value === "Vegetarian") return "veg";
  if (value === "Non-Vegetarian") return "nonveg";
  if (value === "Brahmin") return "brahmin";
  if (value === "Jain") return "jain";
  return "veg";
}

function getPlannerEventKey(value) {
  if (!value) return "wedding";
  const normalized = value.toLowerCase();
  if (normalized.includes("corporate")) return "corporate";
  if (normalized.includes("birthday")) return "birthday";
  if (normalized.includes("outdoor")) return "outdoor";
  return "wedding";
}

function buildPlannerResult(menu, guests, eventLabel, preferenceLabel) {
  const guestText = guests >= 500 ? "large gathering" : guests >= 150 ? "mid-size function" : "closer family event";
  return `
    <div class="planner-output">
      <div class="planner-empty">
        <strong>Suggested plan:</strong> ${eventLabel} for ${guests} guests, tuned for a ${guestText} with ${preferenceLabel.toLowerCase()} service.
      </div>
      <div class="planner-group">
        <h4>Welcome / Starter</h4>
        <ul>${menu.starter.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="planner-group">
        <h4>Main Course</h4>
        <ul>${menu.main.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="planner-group">
        <h4>Dessert</h4>
        <ul>${menu.dessert.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function initSmartPlanner() {
  const form = document.querySelector("[data-smart-planner]");
  const output = document.querySelector("[data-planner-result]");
  if (!form || !output) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventType = form.querySelector("[name='plannerEvent']").value;
    const guests = Number(form.querySelector("[name='plannerGuests']").value || "0");
    const preference = form.querySelector("[name='plannerPreference']").value;

    if (!guests || guests < 25) {
      output.innerHTML = '<div class="planner-empty">Enter a guest count of at least 25 to generate a useful menu suggestion.</div>';
      return;
    }

    const eventKey = getPlannerEventKey(eventType);
    const preferenceKey = getPlannerKey(preference);
    const eventMenus = plannerMenus[eventKey] || plannerMenus.wedding;
    const menu = eventMenus[preferenceKey] || eventMenus.veg;
    output.innerHTML = buildPlannerResult(menu, guests, eventType, preference);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initShell();
  initReveal();
  initMenuFilter();
  initGalleryLightbox();
  initQuoteForms();
  initSmartPlanner();
});
