window.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  const container = banner?.querySelector(".banner-container");
  const images = container ? Array.from(container.querySelectorAll("img")) : [];
  const controls = banner?.querySelector(".banner-controls");
  if (!images.length) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const INTERVAL_MS = 400;
  let paused = motion.matches;
  let ready = false;
  let current = 0;
  let candidate = 0;
  let timer = null;
  let generation = 0;

  function stop() {
    clearTimeout(timer);
    timer = null;
    generation += 1;
  }

  function updateControl() {
    if (!controls) return;
    controls.classList.toggle("paused", paused);
    controls.classList.toggle("playing", !paused);
    controls.setAttribute("aria-label", paused ? "Play image sequence" : "Pause image sequence");
    controls.hidden = !ready || images.length < 2;
  }

  async function decodeCurrentSource(img) {
    // Request the upcoming frame even when native lazy loading defers it.
    img.loading = "eager";
    const source = img.currentSrc || img.src;
    try {
      await img.decode();
      // A resize can select a new source while decode is pending. Keep the
      // visible frame until that replacement has itself been decoded.
      return img.complete && img.naturalWidth > 0 && source === (img.currentSrc || img.src);
    } catch {
      return false;
    }
  }

  function schedule() {
    if (!ready || paused || document.hidden || images.length < 2) return;
    const version = generation;
    timer = setTimeout(async () => {
      candidate = (candidate + 1) % images.length;
      const next = images[candidate];
      const decoded = await decodeCurrentSource(next);
      if (version !== generation) return;
      if (decoded) {
        // Both updates happen within one task; a failed decode never clears
        // the visible image. Do not cache decode state across source changes.
        next.classList.add("active");
        if (candidate !== current) images[current].classList.remove("active");
        current = candidate;
      }
      schedule();
    }, INTERVAL_MS);
  }

  function toggle() {
    if (!ready || images.length < 2) return;
    paused = !paused;
    stop();
    updateControl();
    schedule();
  }

  images.forEach((img, index) => img.classList.toggle("active", index === 0));
  banner.addEventListener("click", toggle);
  // The native button's keyboard-generated click bubbles to the banner once.
  document.addEventListener("visibilitychange", () => {
    stop();
    schedule();
  });
  motion.addEventListener("change", () => {
    if (!motion.matches) return;
    paused = true;
    stop();
    updateControl();
  });

  async function prepare() {
    if (ready || !(await decodeCurrentSource(images[0])) || ready) return;
    ready = true;
    container.classList.add("is-ready");
    updateControl();
    schedule();
  }
  // Retry if the first responsive source changes during initial decoding.
  images[0].addEventListener("load", prepare);
  prepare();
});
