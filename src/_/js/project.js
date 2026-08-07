window.addEventListener("DOMContentLoaded", () => {
    const bannerContainer = document.querySelector(".banner-container");
    const banner = document.querySelector(".banner");
    const images = bannerContainer
      ? Array.from(bannerContainer.querySelectorAll("img"))
      : [];
    const controls = document.querySelector(".banner-controls");
  
    if (!bannerContainer || images.length === 0) return;
  
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const decodedImages = new WeakSet();
    let isPaused = prefersReducedMotion;
    let isChangingFrame = false;
    let intervalId = null;
    const INTERVAL_MS = 400;
  
    /* ------------------------------------------------------------------
       Ensure first frame is visible immediately (HTML should already do this,
       but this guarantees no blank state even if markup changes)
    ------------------------------------------------------------------ */
    images.forEach(img => img.classList.remove("active"));
    images[0].classList.add("active");
  
    /* ------------------------------------------------------------------
       Utility: is an image fully ready to display?
    ------------------------------------------------------------------ */
    function isImageReady(img) {
      return img.complete && img.naturalWidth > 0;
    }

    async function ensureImageDecoded(img) {
      if (decodedImages.has(img)) return true;

      try {
        await img.decode();
        decodedImages.add(img);
        return true;
      } catch (error) {
        return isImageReady(img);
      }
    }
  
    /* ------------------------------------------------------------------
       Advance carousel only if the next frame is ready
       (prevents flicker with loading="lazy")
    ------------------------------------------------------------------ */
    async function passActiveClass() {
      if (isPaused || isChangingFrame) return;

      isChangingFrame = true;
  
      const currentIndex = images.findIndex(img =>
        img.classList.contains("active")
      );
  
      const safeCurrentIndex = currentIndex === -1 ? 0 : currentIndex;
      const nextIndex = (safeCurrentIndex + 1) % images.length;
      const nextImage = images[nextIndex];
  
      if ((await ensureImageDecoded(nextImage)) && !isPaused) {
        images[safeCurrentIndex].classList.remove("active");
        nextImage.classList.add("active");
      }

      isChangingFrame = false;
    }
  
    /* ------------------------------------------------------------------
       Pause / Play toggle
    ------------------------------------------------------------------ */
    function togglePause() {
      isPaused = !isPaused;
  
      bannerContainer.classList.toggle("paused", isPaused);
      bannerContainer.classList.toggle("playing", !isPaused);
  
      if (controls) {
        controls.classList.toggle("paused", isPaused);
        controls.classList.toggle("playing", !isPaused);
      }
  
      if (isPaused) {
        clearInterval(intervalId);
        intervalId = null;
      } else if (
        !intervalId &&
        bannerContainer.classList.contains("is-ready")
      ) {
        intervalId = setInterval(passActiveClass, INTERVAL_MS);
      }
    }
  
    /* ------------------------------------------------------------------
       Start slideshow only after first image is ready
       (prevents initial flicker / flash)
    ------------------------------------------------------------------ */
    async function prepareSlideshow() {
      if (!(await ensureImageDecoded(firstImage))) return;

      bannerContainer.classList.add("is-ready");

      if (controls) {
        controls.classList.toggle("paused", isPaused);
        controls.classList.toggle("playing", !isPaused);
      }

      if (!isPaused && !intervalId) {
        intervalId = setInterval(passActiveClass, INTERVAL_MS);
      }
    }
  
    const firstImage = images[0];

    prepareSlideshow();
  
    /* ------------------------------------------------------------------
       Click to pause / play
    ------------------------------------------------------------------ */
    if (banner) {
      banner.addEventListener("click", togglePause);
    }
  });
