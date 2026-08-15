(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll(".bar i em").forEach((el) => {
    const width = el.dataset.width || "70";
    requestAnimationFrame(() => {
      el.style.width = `${width}%`;
    });
  });

  const ledButtons = document.querySelectorAll("[data-led]");
  const ledDot = document.querySelector("[data-led-dot]");
  const ledLabel = document.querySelector("[data-led-label]");
  const colors = {
    standby: { color: "#f5f6f8", label: "White — Standby" },
    connected: { color: "#3d9eff", label: "Blue — Connected" },
    recording: { color: "#3ee0a0", label: "Green — Recording" },
    battery: { color: "#ff5d5d", label: "Red — Low battery" },
  };

  ledButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      ledButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const state = colors[btn.dataset.led];
      if (ledDot && state) {
        ledDot.style.background = state.color;
        ledDot.style.color = state.color;
      }
      if (ledLabel && state) ledLabel.textContent = state.label;
    });
  });

  const tabs = document.querySelectorAll("[data-tab]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const group = tab.dataset.group;
      document.querySelectorAll(`[data-tab][data-group="${group}"]`).forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      document.querySelectorAll(`[data-panel][data-group="${group}"]`).forEach((panel) => {
        panel.hidden = panel.dataset.panel !== tab.dataset.tab;
      });
    });
  });

  const zones = document.querySelectorAll(".zone");
  const zoneReadout = document.querySelector("[data-zone-readout]");
  zones.forEach((zone) => {
    zone.addEventListener("click", () => {
      zones.forEach((z) => z.classList.remove("active"));
      zone.classList.add("active");
      if (zoneReadout) zoneReadout.textContent = zone.dataset.note;
    });
  });

  const hotspots = document.querySelectorAll(".hotspot");
  hotspots.forEach((spot) => {
    const card = spot.nextElementSibling;
    const show = () => card && card.classList.add("show");
    const hide = () => card && card.classList.remove("show");
    spot.addEventListener("mouseenter", show);
    spot.addEventListener("focus", show);
    spot.addEventListener("mouseleave", hide);
    spot.addEventListener("blur", hide);
  });
})();
