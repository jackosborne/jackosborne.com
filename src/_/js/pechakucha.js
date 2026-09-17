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

    const mq = window.matchMedia('(min-width: 768px)');
    const isHorizontal = () => mq.matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const presentation = document.getElementById('presentation');
    if (presentation && typeof presentation.showModal === 'function') {
      const media = document.getElementById('presentation-media');
      const caption = document.getElementById('presentation-caption');
      const count = document.getElementById('presentation-count');
      const announcement = document.getElementById('presentation-announcement');
      const back = document.getElementById('presentation-prev');
      const forward = document.getElementById('presentation-next');
      const close = document.getElementById('presentation-close');
      const figure = presentation.querySelector('.presentation__figure');
      const footer = presentation.querySelector('.presentation__footer');
      const toolbar = presentation.querySelector('.presentation__toolbar');
      let index = 0;
      let opener;
      let renderVersion = 0;
      let loadingTimer;

      function showMessage(message, retry = false) {
        const content = document.createElement('div');
        content.className = 'presentation__message';
        const text = document.createElement('div');
        text.textContent = message;
        content.append(text);
        if (retry) {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'presentation__retry';
          button.textContent = 'Try again';
          button.addEventListener('click', () => {
            close.focus({ preventScroll: true });
            showSlide(index);
          });
          content.append(button);
        }
        media.replaceChildren(content);
      }

      function fitImage() {
        if (!presentation.open) return;
        // A fixed stage and reserved footer keep every slide on the same baseline.
        const ratio = 16 / 9;
        const gap = parseFloat(getComputedStyle(figure).rowGap);
        const availableHeight = Math.max(0, figure.clientHeight - footer.offsetHeight - gap);
        const width = Math.min(figure.clientWidth, availableHeight * ratio);
        media.style.width = `${width}px`;
        media.style.height = `${width / ratio}px`;
        footer.style.width = `${width}px`;
        toolbar.style.width = `${width}px`;
      }

      new ResizeObserver(fitImage).observe(figure);
      new ResizeObserver(fitImage).observe(footer);

      async function showSlide(nextIndex) {
        const version = ++renderVersion;
        clearTimeout(loadingTimer);
        index = Math.max(0, Math.min(slides.length - 1, nextIndex));
        const slide = slides[index];
        const picture = slide.querySelector('picture, img').cloneNode(true);
        const img = picture.matches('img') ? picture : picture.querySelector('img');
        img.loading = 'eager';
        img.sizes = '100vw';
        picture.querySelectorAll('source').forEach(source => { source.sizes = '100vw'; });
        // Keep controls focusable at the ends so keyboard focus stays predictable.
        back.setAttribute('aria-disabled', index === 0 ? 'true' : 'false');
        forward.setAttribute('aria-disabled', index === slides.length - 1 ? 'true' : 'false');
        caption.textContent = slide.querySelector('p').textContent;
        caption.scrollTop = 0;
        count.textContent = `${index + 1} / ${slides.length}`;
        count.setAttribute('aria-label', `Slide ${index + 1} of ${slides.length}`);
        media.setAttribute('aria-busy', 'true');
        showMessage('Loading image…');
        announcement.textContent = `Loading slide ${index + 1} of ${slides.length}.`;
        fitImage();
        let failed = false;
        try {
          await Promise.race([
            img.decode(),
            new Promise((_, reject) => {
              loadingTimer = setTimeout(() => reject(new Error('Image loading timed out')), 15000);
            }),
          ]);
        } catch (_) {
          failed = true;
        }
        if (version !== renderVersion || !presentation.open) return;
        clearTimeout(loadingTimer);
        media.setAttribute('aria-busy', 'false');
        if (failed) {
          showMessage('This image couldn’t be loaded. Try again or continue to the next slide.', true);
        } else {
          media.replaceChildren(picture);
        }
        announcement.textContent = `Slide ${index + 1} of ${slides.length}. ${failed ? 'Image couldn’t be loaded. ' : ''}${caption.textContent}`;
      }

      slides.forEach((slide, slideIndex) => {
        const trigger = slide.querySelector('.slide__open');
        trigger.hidden = !isHorizontal();
        trigger.addEventListener('click', () => {
          if (!isHorizontal()) return;
          opener = trigger;
          presentation.showModal();
          showSlide(slideIndex);
          document.documentElement.classList.add('presentation-open');
        });
      });
      function updatePresentationAvailability() {
        slides.forEach(slide => { slide.querySelector('.slide__open').hidden = !isHorizontal(); });
        if (!isHorizontal() && presentation.open) presentation.close();
      }
      mq.addEventListener('change', updatePresentationAvailability);

      close.addEventListener('click', () => presentation.close());
      back.addEventListener('click', () => { if (index > 0) showSlide(index - 1); });
      forward.addEventListener('click', () => { if (index < slides.length - 1) showSlide(index + 1); });
      presentation.addEventListener('keydown', event => {
        if (event.target === caption || event.altKey || event.ctrlKey || event.metaKey) return;
        const targets = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: slides.length - 1 };
        if (Object.hasOwn(targets, event.key)) {
          event.preventDefault();
          showSlide(targets[event.key]);
        }
      });
      presentation.addEventListener('click', event => {
        if (event.target === presentation) presentation.close();
      });
      presentation.addEventListener('close', () => {
        renderVersion++;
        clearTimeout(loadingTimer);
        media.setAttribute('aria-busy', 'false');
        media.replaceChildren();
        caption.textContent = '';
        count.textContent = '';
        announcement.textContent = '';
        document.documentElement.classList.remove('presentation-open');
        if (isHorizontal()) {
          opener?.focus({ preventScroll: true });
        } else {
          const slide = slides[index];
          slide.setAttribute('tabindex', '-1');
          slide.focus({ preventScroll: true });
          slide.scrollIntoView({ block: 'nearest', behavior: 'instant' });
          slide.addEventListener('blur', () => slide.removeAttribute('tabindex'), { once: true });
        }
      });
    }

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
      viewport.scrollBy({ left:  delta, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }
    function goPrev() {
      const delta = isHorizontal() ? stepWidth() : viewport.clientWidth * 0.8;
      viewport.scrollBy({ left: -delta, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }

    function atLeftEdge() {
      return viewport.scrollLeft <= 1;
    }

    function atRightEdge() {
      return viewport.scrollLeft >= viewport.scrollWidth - viewport.clientWidth - 1;
    }

    function updateButtons() {
      if (!(prev && next)) return;
      const horiz = isHorizontal();
      // Visible cards can sit left of the content column before reaching the start.
      // Disable controls only at the actual scroll boundaries.
      const disablePrev = !horiz || atLeftEdge();
      const disableNext = !horiz || atRightEdge();
      setDisabled(prev, disablePrev);
      setDisabled(next, disableNext);
    }

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

    window.addEventListener('load', () => { setLeftPad(); updateButtons(); });
    window.addEventListener('resize', () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { setLeftPad(); updateButtons(); });
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
