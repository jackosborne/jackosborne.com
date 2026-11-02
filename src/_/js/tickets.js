document.addEventListener("DOMContentLoaded", () => {
  const tickets = Array.from(document.querySelectorAll(".ticket"));
  const ticketList = document.getElementById("ticket-list");
  const yearFiltersContainer = document.getElementById("year-filters");

  if (!tickets.length || !yearFiltersContainer) return;

  const getTicketYear = (ticket) => ticket.dataset.year || "";

  const allYears = [...new Set(tickets.map(getTicketYear))]
    .filter(Boolean)
    .sort((a, b) => Number(b) - Number(a));

  const state = {
    year: "all",
  };

  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get("year")) {
    state.year = urlParams.get("year");
  }

  function createYearButton({ label, value, isActive = false }) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "floating-bar__button";
    btn.dataset.filterValue = value;
    btn.textContent = label;
    btn.setAttribute("aria-pressed", String(isActive));
  
    if (isActive) {
      btn.classList.add("is-active");
    }
  
    return btn;
  }

  function buildYearFilters() {
    yearFiltersContainer.innerHTML = "";

    yearFiltersContainer.appendChild(
      createYearButton({
        label: "All",
        value: "all",
        isActive: state.year === "all",
      })
    );

    allYears.forEach((year) => {
      yearFiltersContainer.appendChild(
        createYearButton({
          label: year,
          value: year,
          isActive: state.year === year,
        })
      );
    });
  }

  function syncYearButtonStates() {
    yearFiltersContainer.querySelectorAll("[data-filter-value]").forEach((btn) => {
      const active = btn.dataset.filterValue === state.year;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function updateYearFilterSpacing() {
    const styles = getComputedStyle(yearFiltersContainer);
    const inset = parseFloat(styles.paddingLeft);
    const widths = Array.from(yearFiltersContainer.children, (button) => button.getBoundingClientRect().width);
    const available = yearFiltersContainer.clientWidth;
    const naturalWidth = widths.reduce((sum, width) => sum + width, 0) + inset * (widths.length + 1);
    if (naturalWidth <= available) {
      yearFiltersContainer.style.removeProperty("--ticket-filter-gap");
      return;
    }

    // Keep the shell aligned to the content column. Choose the gap closest to
    // the shared inset that places the viewport edge halfway through a year.
    let precedingWidth = widths[0];
    let bestGap = null;
    widths.slice(1).forEach((width, offset) => {
      const gaps = offset + 1;
      const gap = (available - inset - precedingWidth - width / 2) / gaps;
      if (gap >= 0 && (bestGap === null || Math.abs(gap - inset) < Math.abs(bestGap - inset))) {
        bestGap = gap;
      }
      precedingWidth += width;
    });
    if (bestGap !== null) yearFiltersContainer.style.setProperty("--ticket-filter-gap", `${bestGap}px`);
  }

  function updateUrl() {
    const params = new URLSearchParams();

    if (state.year !== "all") {
      params.set("year", state.year);
    }

    const query = params.toString();
    const newUrl = query
      ? `${window.location.pathname}?${query}`
      : window.location.pathname;

    window.history.replaceState({}, "", newUrl);
  }

  function closeAllTicketCards() {
    document.querySelectorAll("[data-ticket-card]").forEach((card) => {
      const trigger = card.querySelector("[data-ticket-toggle]");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
      card.classList.remove("is-open");
    });
  }

  function applyYearFilter() {
    tickets.forEach((ticket) => {
      const matches = state.year === "all" || getTicketYear(ticket) === state.year;
      ticket.style.display = matches ? "" : "none";
    });

    syncYearButtonStates();
    updateUrl();
    closeAllTicketCards();
  }

  function handleYearClick(event) {
    const btn = event.target.closest("[data-filter-value]");
    if (!btn) return;

    const value = btn.dataset.filterValue;
    if (!value) return;

    state.year = value;
    applyYearFilter();
  }

  function handleTicketToggle(event) {
    const trigger = event.target.closest("[data-ticket-toggle]");
    if (!trigger) return;

    const card = trigger.closest("[data-ticket-card]");
    if (!card) return;

    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    closeAllTicketCards();

    if (!isExpanded) {
      trigger.setAttribute("aria-expanded", "true");
      card.classList.add("is-open");
    }
  }

  function handleEscape(event) {
    if (event.key === "Escape") {
      closeAllTicketCards();
    }
  }

  buildYearFilters();
  updateYearFilterSpacing();
  new ResizeObserver(updateYearFilterSpacing).observe(yearFiltersContainer.parentElement.parentElement);
  document.fonts.ready.then(updateYearFilterSpacing);
  applyYearFilter();

  yearFiltersContainer.addEventListener("click", handleYearClick);

  if (ticketList) {
    ticketList.addEventListener("click", handleTicketToggle);
  }

  document.addEventListener("keydown", handleEscape);
});
