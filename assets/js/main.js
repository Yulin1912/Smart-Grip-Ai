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
    quiet: { color: "#3dcc6a", label: "Green — Quiet viewing" },
    space: { color: "#c8964c", label: "Amber — Please give space" },
    rest: { color: "#9b594b", label: "Rest — Avoid interaction" },
    neutral: { color: "#c9c6bb", label: "Neutral — Recovered after reboot" },
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

  const ring = document.querySelector("[data-ring]");
  const epaper = document.querySelector("[data-epaper]");
  const pEl = document.querySelector("[data-p]");
  const oEl = document.querySelector("[data-o]");
  const aEl = document.querySelector("[data-a]");
  const dEl = document.querySelector("[data-d]");

  if (ring && epaper && pEl) {
    let P = 0;
    let O = 0;
    let A = 0;
    let override = false;
    let publicState = "green";

    const paint = () => {
      const D = override ? 21 : 2 * P + 3 * O + 0.25 * A;
      if (override || D > 20) publicState = "rest";
      else if (publicState === "green" && D >= 11) publicState = "amber";
      else if (publicState === "amber" && D < 8) publicState = "green";
      else if (publicState === "rest" && !override && D <= 20) publicState = D >= 11 ? "amber" : "green";
      else if (publicState === "amber" && D > 20) publicState = "rest";

      const map = {
        green: { color: "#3dcc6a", text: "Quiet viewing" },
        amber: { color: "#c8964c", text: "Please give space" },
        rest: { color: "#9b594b", text: "Rest period" },
      };
      const s = map[publicState];
      ring.style.borderColor = s.color;
      ring.style.boxShadow = `0 0 18px ${s.color}`;
      epaper.textContent = s.text;
      pEl.textContent = String(P);
      oEl.textContent = String(O);
      aEl.textContent = String(A);
      dEl.textContent = override ? "—" : String(Number(D.toFixed(2)));
    };

    document.querySelectorAll("[data-sim]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const kind = btn.dataset.sim;
        if (kind === "approach") P += 1;
        if (kind === "door") O += 1;
        if (kind === "sound") A += 1;
        if (kind === "reset") {
          P = 0;
          O = 0;
          A = 0;
          override = false;
          publicState = "green";
        }
        if (kind === "rest") override = true;
        paint();
      });
    });

    paint();
  }
})();
