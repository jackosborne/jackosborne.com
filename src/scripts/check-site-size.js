const fs = require("fs");
const path = require("path");

const MEBIBYTE = 1024 * 1024;
const WARNING_LIMIT = 800 * MEBIBYTE;
const FAILURE_LIMIT = 900 * MEBIBYTE;
const SITE_DIRECTORY = path.resolve("_site");
const GENERATED_IMAGES_DIRECTORY = path.join(
  SITE_DIRECTORY,
  "_",
  "images",
  "generated",
);

function directorySize(directory) {
  if (!fs.existsSync(directory)) return 0;

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .reduce((total, entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) return total + directorySize(entryPath);
      if (entry.isFile()) return total + fs.statSync(entryPath).size;

      return total;
    }, 0);
}

function formatMebibytes(bytes) {
  return `${(bytes / MEBIBYTE).toFixed(1)} MiB`;
}

if (!fs.existsSync(SITE_DIRECTORY)) {
  console.error("Site size check failed: _site does not exist. Run the build first.");
  process.exitCode = 1;
} else {
  const siteSize = directorySize(SITE_DIRECTORY);
  const generatedImagesSize = directorySize(GENERATED_IMAGES_DIRECTORY);

  console.log(`Built site: ${formatMebibytes(siteSize)}`);
  console.log(`Generated images: ${formatMebibytes(generatedImagesSize)}`);

  if (siteSize >= FAILURE_LIMIT) {
    console.error(
      `Site size check failed: ${formatMebibytes(siteSize)} exceeds the ${formatMebibytes(FAILURE_LIMIT)} deployment budget.`,
    );
    process.exitCode = 1;
  } else if (siteSize >= WARNING_LIMIT) {
    console.warn(
      `Site size warning: ${formatMebibytes(siteSize)} exceeds the ${formatMebibytes(WARNING_LIMIT)} warning threshold.`,
    );
  } else {
    console.log(
      `Site size check passed with ${formatMebibytes(FAILURE_LIMIT - siteSize)} remaining before the deployment budget.`,
    );
  }
}
