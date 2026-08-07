(() => {
  const sectionLinks = [...document.querySelectorAll("[data-pattern-section]")];
  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveSection = (id) => {
    sectionLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  if ("IntersectionObserver" in window) {
    const visible = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
        else visible.delete(entry.target.id);
      });
      const current = [...visible.entries()].sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]))[0];
      if (current) setActiveSection(current[0]);
    }, { rootMargin: "-18% 0px -62% 0px" });
    sections.forEach((section) => observer.observe(section));
  }
  setActiveSection(sections[0]?.id);

  const bindSwitcher = (selector, attribute, onChange) => {
    const switcher = document.querySelector(selector);
    if (!switcher) return;
    switcher.addEventListener("click", (event) => {
      const button = event.target.closest(`[${attribute}]`);
      if (!button) return;
      switcher.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      onChange(button.getAttribute(attribute));
    });
  };

  const colorSchemePreference = window.matchMedia("(prefers-color-scheme: dark)");
  const colorThemeSwitcher = document.querySelector("[data-pattern-theme-switcher]");
  const colorPreview = document.querySelector("[data-pattern-color-preview]");
  let colorThemeOverridden = false;

  const applyColorTheme = (theme) => {
    if (!colorThemeSwitcher || !colorPreview) return;
    colorPreview.dataset.patternTheme = theme;
    colorThemeSwitcher.querySelectorAll("[data-pattern-theme]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.patternTheme === theme));
    });
  };

  applyColorTheme(colorSchemePreference.matches ? "dark" : "light");
  colorSchemePreference.addEventListener?.("change", (event) => {
    if (!colorThemeOverridden) applyColorTheme(event.matches ? "dark" : "light");
  });

  bindSwitcher("[data-pattern-theme-switcher]", "data-pattern-theme", (theme) => {
    colorThemeOverridden = true;
    applyColorTheme(theme);
  });

  bindSwitcher("[data-pattern-stage-switcher]", "data-pattern-stage", (stage) => {
    const preview = document.querySelector("[data-pattern-project-stage]");
    const labels = { phone: "Single phone", laptop: "Wide laptop", split: "Split stage" };
    const modifiers = {
      phone: "work-card--single-phone",
      laptop: "work-card--wide-browser",
      split: "work-card--split-stage",
    };
    Object.values(modifiers).forEach((modifier) => preview.classList.remove(modifier));
    preview.classList.add(modifiers[stage]);
    preview.dataset.patternProjectStage = stage;
    preview.setAttribute("aria-label", `${labels[stage]} project stage example`);
  });

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const motionStatus = document.querySelector("[data-motion-status]");
  const updateMotionStatus = () => {
    if (motionStatus) motionStatus.textContent = motionPreference.matches ? "Reduced motion" : "Standard motion";
  };
  updateMotionStatus();
  motionPreference.addEventListener?.("change", updateMotionStatus);

  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy-code]");
    if (!button) return;
    const code = button.closest("[data-pattern-code]")?.querySelector("code")?.textContent;
    if (!code) return;

    const original = button.textContent;
    button.textContent = "Copied";
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      button.textContent = "Select code";
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(button.closest("[data-pattern-code]").querySelector("code"));
      selection.removeAllRanges();
      selection.addRange(range);
    }
    window.setTimeout(() => { button.textContent = original; }, 1600);
  });
})();
