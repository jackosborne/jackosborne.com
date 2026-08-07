module.exports = {
  // One cache-busting value per Eleventy process. Every page in a build now
  // references the same asset URL, so browsers can reuse CSS and JavaScript
  // across pages while a new build still receives a fresh URL.
  assetHash: Date.now().toString(36),
};
