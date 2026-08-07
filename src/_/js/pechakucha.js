// /_/js/slider.js
(() => {
  function init() {
    const viewport = document.getElementById('slider-viewport');
    const track    = document.getElementById('slider-track');
    if (!viewport || !track) return;

    const slides = Array.from(track.querySelectorAll('.slide'));
    const prev   = document.getElementById('slider-prev');
    const next   = document.getElementById('slider-next');

    const setDisabled = (btn, val) => {
      if (!btn) return;
      btn.disabled = !!val;
      btn.setAttribute('aria-disabled', val ? 'true' : 'false');
    };

    const mq = window.matchMedia('(min-width: 700px)');
    const isHorizontal = () => mq.matches;

    slides.forEach(s => s.setAttribute('tabindex', '0'));

    function stepWidth() {
      const first = slides[0];
      if (!first) return viewport.clientWidth * 0.8;
      const rect   = first.getBoundingClientRect();
      const styles = getComputedStyle(track);
      const gap    = parseFloat(styles.columnGap || styles.gap || 0);
      return rect.width + gap;
    }

    function goNext() {
      const delta = isHorizontal() ? stepWidth() : viewport.clientWidth * 0.8;
      viewport.scrollBy({ left:  delta, behavior: 'smooth' });
    }
    function goPrev() {
      const delta = isHorizontal() ? stepWidth() : viewport.clientWidth * 0.8;
      viewport.scrollBy({ left: -delta, behavior: 'smooth' });
    }

    let activeIdx = 0;

    function atLeftEdge() {
      return viewport.scrollLeft <= 1;
    }

    function updateButtons() {
      if (!(prev && next)) return;
      const horiz = isHorizontal();
      const disablePrev = !horiz || atLeftEdge() || activeIdx <= 0;
      const disableNext = !horiz || activeIdx >= slides.length - 1;
      setDisabled(prev, disablePrev);
      setDisabled(next, disableNext);
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeIdx = slides.indexOf(entry.target);
          updateButtons();
        }
      });
    }, { root: viewport, threshold: 0.6 });

    slides.forEach(s => io.observe(s));

    function onKey(e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
    }
    viewport.addEventListener('keydown', onKey);

    if (prev && next) {
      prev.addEventListener('click', goPrev);
      next.addEventListener('click', goNext);
    }

    if (mq.addEventListener) mq.addEventListener('change', updateButtons);
    else if (mq.addListener) mq.addListener(updateButtons);

    let raf;
    viewport.addEventListener('scroll', () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateButtons);
    }, { passive: true });

    const anchor =
      document.querySelector('.content-main') ||
      document.querySelector('header .row-start-7') ||
      document.body;

    function setLeftPad() {
      if (!viewport || !anchor) return;
      const rect = anchor.getBoundingClientRect();
      const cs   = getComputedStyle(anchor);
      const padL = parseFloat(cs.paddingLeft || 0);
      const left = Math.max(0, Math.round(rect.left + padL));
      viewport.style.setProperty('--slider-left-pad', left + 'px');
    }

    function nudgeIO() {
      viewport.scrollBy({ left: 1 });
      viewport.scrollBy({ left: -1 });
    }

    window.addEventListener('load', () => { setLeftPad(); updateButtons(); nudgeIO(); });
    window.addEventListener('resize', () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { setLeftPad(); updateButtons(); nudgeIO(); });
    });

    if ('ResizeObserver' in window && anchor) {
      new ResizeObserver(() => { setLeftPad(); updateButtons(); }).observe(anchor);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { setLeftPad(); updateButtons(); }).catch(() => {});
    }

    setDisabled(prev, true);
    updateButtons();
  }

  // Run after DOM is ready (works with or without `defer`)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
