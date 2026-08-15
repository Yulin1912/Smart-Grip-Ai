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
    requestAnimationFrame(() => {
      el.style.width = `${el.dataset.width || 70}%`;
    });
  });

  document.querySelectorAll("[data-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const group = tab.dataset.group;
      document.querySelectorAll(`[data-tab][data-group="${group}"]`).forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      document.querySelectorAll(`[data-panel][data-group="${group}"]`).forEach((panel) => {
        panel.hidden = panel.dataset.panel !== tab.dataset.tab;
      });
    });
  });

  document.querySelectorAll(".hotspot").forEach((spot) => {
    const card = spot.nextElementSibling;
    const show = () => card && card.classList.add("show");
    const hide = () => card && card.classList.remove("show");
    spot.addEventListener("mouseenter", show);
    spot.addEventListener("focus", show);
    spot.addEventListener("mouseleave", hide);
    spot.addEventListener("blur", hide);
  });

  const p = document.querySelector("[data-p]");
  const o = document.querySelector("[data-o]");
  const a = document.querySelector("[data-a]");
  const out = document.querySelector("[data-score]");
  const state = document.querySelector("[data-state]");
  const update = () => {
    if (!p || !o || !a || !out) return;
    const D = 2 * Number(p.value) + 3 * Number(o.value) + 0.25 * Number(a.value);
    out.textContent = D.toFixed(1);
    let label = "Quiet viewing";
    let cls = "green";
    if (D > 20) { label = "Rest period"; cls = "rest"; }
    else if (D >= 11) { label = "Please give space"; cls = "amber"; }
    if (state) {
      state.textContent = label;
      state.className = `state ${cls}`;
    }
    document.querySelector("[data-p-val]") && (document.querySelector("[data-p-val]").textContent = p.value);
    document.querySelector("[data-o-val]") && (document.querySelector("[data-o-val]").textContent = o.value);
    document.querySelector("[data-a-val]") && (document.querySelector("[data-a-val]").textContent = a.value);
  };
  [p, o, a].forEach((el) => el && el.addEventListener("input", update));
  update();
})();
