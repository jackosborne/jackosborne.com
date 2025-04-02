window.onload = function () {
  const bannerContainer = document.querySelector(".banner-container");
  const banner = document.querySelector(".banner");
  const images = document.querySelectorAll(".banner-container img");
  const controls = document.querySelector(".banner-container-controls");
  let isPaused = false;
  let intervalId;
  let resizeTimeout;

  // Set banner height based on the displayed aspect ratio of the first image
  function setBannerHeight() {
      const firstImage = bannerContainer.querySelector("img.first-image") || bannerContainer.querySelector("img");
      if (firstImage) {
          // Calculate aspect ratio
          const aspectRatio = firstImage.naturalHeight / firstImage.naturalWidth;
          // Use the current container width to compute the displayed height
          const containerWidth = bannerContainer.clientWidth;
          const computedHeight = containerWidth * aspectRatio;
          bannerContainer.style.height = `${computedHeight}px`;
          banner.style.height = `${computedHeight}px`;
          console.log("Banner height set to:", computedHeight);
      } else {
          console.warn("No images found to set height.");
      }
  }

  function addActiveClass() {
      const firstImage = bannerContainer.querySelector("img");
      if (firstImage) {
          firstImage.classList.add("active");
      }
  }

  function passActiveClass() {
      if (isPaused) return;
      const activeIndex = Array.from(images).findIndex((img) =>
          img.classList.contains("active")
      );
      if (activeIndex !== -1) {
          images[activeIndex].classList.remove("active");
          const nextIndex = (activeIndex + 1) % images.length;
          images[nextIndex].classList.add("active");
      }
  }

  function togglePause() {
      isPaused = !isPaused;

      if (!isPaused) {
          intervalId = setInterval(passActiveClass, 750);
          bannerContainer.classList.add("playing");
          bannerContainer.classList.remove("paused");
          controls.classList.add("playing");
          controls.classList.remove("paused");
      } else {
          clearInterval(intervalId);
          bannerContainer.classList.add("paused");
          bannerContainer.classList.remove("playing");
          controls.classList.add("paused");
          controls.classList.remove("playing");
      }
  }

  // Wait for all images to load before setting height and adding the active class
  Promise.all(
      Array.from(images).map(
          (img) =>
              new Promise((resolve) => {
                  if (img.complete) resolve();
                  else img.addEventListener("load", resolve);
              })
      )
  ).then(() => {
      setBannerHeight();
      addActiveClass();
  });

  // Recalculate height on window resize
  window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
          setBannerHeight();
      }, 100);
  });

  // Start slideshow
  intervalId = setInterval(passActiveClass, 1000);

  // Add click event listener to toggle pause/play
  if (bannerContainer) {
      bannerContainer.addEventListener("click", togglePause);
  }
};


/*
window.onload = function () {
  const bannerContainer = document.querySelector(".banner-container");
  const images = document.querySelectorAll('.banner-container img');
  const controls = document.querySelector(".banner-container-controls");
  let isPaused = false; // Flag to track if the slideshow is paused
  let intervalId;

  function setBannerHeight() {
    const bannerImage = bannerContainer.querySelector("img");
    if (bannerImage.complete) {
      const imageHeight = bannerImage.clientHeight;
      bannerContainer.style.height = `${imageHeight}px`;
    } else {
      bannerImage.addEventListener('load', () => {
        const imageHeight = bannerImage.clientHeight;
        bannerContainer.style.height = `${imageHeight}px`;
      });
    }
  }

  function findActiveIndex() {
    for (let i = 0; i < images.length; i++) {
      if (images[i].classList.contains('active')) {
        return i;
      }
    }
    return -1;
  }

  function removeAllActiveClasses() {
    images.forEach(img => img.classList.remove('active'));
  }

  function passActiveClass() {
    if (isPaused) return; // Exit if paused

    const activeIndex = findActiveIndex();
    if (activeIndex !== -1) {
      removeAllActiveClasses();
      const nextIndex = (activeIndex + 1) % images.length;
      images[nextIndex].classList.add('active');
    }
  }

  function addActiveClass() {
    const firstImage = bannerContainer.querySelector("img");
    if (firstImage) {
      firstImage.classList.add("active");
    }
  }

  function togglePause() {
    isPaused = !isPaused;

    if (!isPaused) {
      intervalId = setInterval(passActiveClass, 750);
      bannerContainer.classList.add('playing');
      bannerContainer.classList.remove('paused');
      controls.classList.add('playing');
      controls.classList.remove('paused');
    } else {
      clearInterval(intervalId);
      bannerContainer.classList.add('paused');
      bannerContainer.classList.remove('playing');
      controls.classList.add('paused');
      controls.classList.remove('playing');
    }
  }

  setBannerHeight();
  addActiveClass();

  // Ensure images are loaded before setting banner height
  // this is a new section and I can remove if it doesnt fix the height issue
  Promise.all(Array.from(images).map(img => new Promise(resolve => {
    if (img.complete) resolve();
    else img.addEventListener('load', resolve);
  }))).then(() => {
    setBannerHeight();
    addActiveClass();
  });

  window.addEventListener("resize", setBannerHeight);

  // Set initial interval for the slideshow
  intervalId = setInterval(passActiveClass, 750);

  // Add click event listener to the banner container
  if (bannerContainer) {
    bannerContainer.addEventListener("click", togglePause);
  }
};
*/