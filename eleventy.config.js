const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier-terser");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
const Image = require("@11ty/eleventy-img");
const { parseDocument } = require("htmlparser2");
const fs = require("fs");
const path = require("path");

/* ------------------------------------------------------
   🧠 Define helper functions OUTSIDE module.exports
------------------------------------------------------ */
function isRemoteUrl(value) {
  return typeof value === "string" && /^https?:\/\//i.test(value);
}

function imageSrc(value) {
  if (typeof value !== "string" || value.length === 0) {
    return value;
  }

  if (isRemoteUrl(value)) {
    return value;
  }

  if (value.startsWith("./")) {
    return value.replace(/^\.\//, "/");
  }

  return value;
}

function localImagePath(value) {
  if (typeof value !== "string" || value.length === 0 || isRemoteUrl(value)) {
    return value;
  }

  if (value.startsWith("/_/")) {
    return path.join("src", value.slice(1));
  }

  return value;
}

const responsiveImageProfiles = {
  phone: [240, 480, 720, 960],
  watch: [240, 480, 720, 960, 1296],
  wide: [480, 960, 1440, 2160],
  reading: [160, 320, 480, 660],
  about: [480, 888, 1332, 1776],
  pechakucha: [400, 800, 1200, 1310],
  tickets: [320, 640, 960],
  blog: [320, 640, 940],
  "blog-png": [320, 640, 940],
};

const responsiveImageFormats = {
  tickets: ["webp", "jpeg"],
  blog: ["webp", "jpeg"],
};

const projectContentImageProfiles = {
  1: {
    widths: [480, 960, 1440],
    sizes:
      "(min-width: 1140px) min(calc((100vw - 202px) / 2), 655px), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)",
  },
  2: {
    widths: [320, 640],
    sizes:
      "(min-width: 1140px) min(calc((100vw - 222px) / 4), 322.5px), (min-width: 1024px) calc((100vw - 202px) / 2), calc((100vw - 74px) / 2)",
  },
  3: {
    widths: [240, 480],
    sizes:
      "(min-width: 1140px) min(calc((100vw - 242px) / 6), 211.667px), (min-width: 1024px) calc((100vw - 212px) / 3), calc((100vw - 84px) / 3)",
  },
  4: {
    widths: [180, 360],
    sizes:
      "(min-width: 1140px) min(calc((100vw - 262px) / 8), 156.25px), (min-width: 1024px) calc((100vw - 222px) / 4), calc((100vw - 94px) / 4)",
  },
};

function hasClass(node, className) {
  return (` ${node.attribs?.class || ""} `).includes(` ${className} `);
}

function walkNodes(node, callback) {
  callback(node);
  for (const child of node.children || []) {
    walkNodes(child, callback);
  }
}

function projectContentProfile(node) {
  let ancestor = node.parent;

  while (ancestor) {
    if (hasClass(ancestor, "multi")) {
      if (!hasClass(ancestor, "row")) return projectContentImageProfiles[1];

      let imageCount = 0;
      walkNodes(ancestor, (child) => {
        if (child.type === "tag" && child.name === "img") imageCount += 1;
      });

      return projectContentImageProfiles[Math.min(imageCount, 4)] ||
        projectContentImageProfiles[1];
    }

    ancestor = ancestor.parent;
  }

  return projectContentImageProfiles[1];
}

async function projectContentImages(content = "") {
  const document = parseDocument(content, {
    decodeEntities: true,
    withEndIndices: true,
    withStartIndices: true,
  });
  const images = [];

  walkNodes(document, (node) => {
    const src = node.attribs?.src;
    if (
      node.type === "tag" &&
      node.name === "img" &&
      typeof src === "string" &&
      src.startsWith("/_/images/work/") &&
      src.includes("/content/")
    ) {
      images.push(node);
    }
  });

  const replacements = await Promise.all(
    images.map(async (node) => {
      const profile = projectContentProfile(node);
      const metadata = await Image(localImagePath(node.attribs.src), {
        widths: profile.widths,
        // Case-study body images do not need lossless PNG fallbacks. WebP is
        // preferred, with progressive JPEG as the broadly compatible fallback.
        // Eleventy Image retains WebP-only output for the small subset of
        // sources whose alpha channel is meaningful.
        formats: ["webp", "jpeg"],
        outputDir: "./_site/_/images/generated/",
        urlPath: "/_/images/generated/",
        sharpWebpOptions: { quality: 88 },
        sharpPngOptions: {
          compressionLevel: 9,
          adaptiveFiltering: true,
        },
        sharpJpegOptions: {
          quality: 88,
          progressive: true,
        },
      });

      return {
        start: node.startIndex,
        end: node.endIndex + 1,
        html: Image.generateHTML(metadata, {
          alt: node.attribs.alt || "",
          sizes: profile.sizes,
          loading: "lazy",
          decoding: "async",
        }),
      };
    }),
  );

  return replacements
    .sort((a, b) => b.start - a.start)
    .reduce(
      (html, replacement) =>
        html.slice(0, replacement.start) +
        replacement.html +
        html.slice(replacement.end),
      content,
    );
}

async function responsiveImage(src, alt, sizes, profile = "phone") {
  const metadata = await Image(localImagePath(src), {
    widths: responsiveImageProfiles[profile] || responsiveImageProfiles.phone,
    formats: responsiveImageFormats[profile] || ["webp", "png"],
    outputDir: "./_site/_/images/generated/",
    urlPath: "/_/images/generated/",
    sharpWebpOptions: {
      quality: 88,
    },
    sharpPngOptions: {
      compressionLevel: 9,
      adaptiveFiltering: true,
    },
    sharpJpegOptions: {
      quality: 88,
      progressive: true,
    },
  });

  return Image.generateHTML(metadata, {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  });
}

async function responsiveBannerImage(src, alt, index = 0) {
  const frameIndex = Number(index);
  const metadata = await Image(localImagePath(src), {
    widths: [640, 1280, 1920, 2560],
    formats: ["webp", "png"],
    outputDir: "./_site/_/images/generated/",
    urlPath: "/_/images/generated/",
    sharpWebpOptions: {
      quality: 88,
    },
    sharpPngOptions: {
      compressionLevel: 9,
      adaptiveFiltering: true,
    },
  });
  const attributes = {
    alt,
    sizes:
      "(min-width: 1512px) 902px, (min-width: 1024px) calc(80vw - 153.6px), calc(80vw - 51.2px)",
    loading: frameIndex < 3 ? "eager" : "lazy",
    decoding: "async",
  };

  if (frameIndex === 0) {
    attributes.class = "first-image active";
    attributes.fetchpriority = "high";
  }

  return Image.generateHTML(metadata, attributes);
}

/* ------------------------------------------------------
   🚀 Eleventy configuration
------------------------------------------------------ */
module.exports = function (eleventyConfig) {
  // Create a helpful production flag
  const isProduction = process.env.NODE_ENV === "production";

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("./src/_/css/");
  eleventyConfig.addPassthroughCopy("./src/_/images/");
  eleventyConfig.addPassthroughCopy("./src/_/js/");
  eleventyConfig.addPassthroughCopy("src/**/*.mp3");
  eleventyConfig.addPassthroughCopy(
    "src/blog/**/*.{gif,jpg,jpeg,png,svg,webp}",
  );
  eleventyConfig.addPassthroughCopy({
    "src/_data/checkins/enriched_checkins.json": "data/enriched_checkins.json",
  });
  eleventyConfig.addPassthroughCopy({
    "src/_data/checkins/icon_map.json": "data/icon_map.json",
  });
  eleventyConfig.addPassthroughCopy({
    "src/_data/checkins/venues_grouped.json": "data/venues_grouped.json",
  });
  eleventyConfig.addPassthroughCopy({
    "src/_data/checkins/venues.geojson": "data/venues.geojson",
  });
  eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "./robots.txt" });
  eleventyConfig.addPassthroughCopy({ "./src/humans.txt": "./humans.txt" });
  eleventyConfig.addPassthroughCopy({ "./src/CNAME": "./CNAME" });

  // Writing/blog posts, sort by year, newest first
  eleventyConfig.addCollection("writing", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("blog")
      .filter(
        (item) =>
          item.data.eleventyExcludeFromCollections !== true &&
          item.data.eleventyExcludeFromCollections !== "true",
      )
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addNunjucksFilter("newerWriting", (items = [], currentUrl) => {
    const index = items.findIndex((item) => item.url === currentUrl);
    return index > 0 ? items[index - 1] : null;
  });

  eleventyConfig.addNunjucksFilter("olderWriting", (items = [], currentUrl) => {
    const index = items.findIndex((item) => item.url === currentUrl);
    return index >= 0 && index < items.length - 1 ? items[index + 1] : null;
  });

  eleventyConfig.addNunjucksFilter("readingTime", (value = "") => {
    const words = String(value)
      .replace(/<[^>]*>/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  });

  // Blog post age warning for user
  eleventyConfig.addNunjucksFilter("yearsOld", (date) => {
    if (!date) return 0;

    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return 0;

    const now = new Date();

    let years = now.getFullYear() - d.getFullYear();

    // If we haven't reached the anniversary yet this year, subtract 1
    const hasHadAnniversaryThisYear =
      now.getMonth() > d.getMonth() ||
      (now.getMonth() === d.getMonth() && now.getDate() >= d.getDate());

    if (!hasHadAnniversaryThisYear) years -= 1;

    return Math.max(0, years);
  });

  // Add Date Filter
  eleventyConfig.addNunjucksFilter(
    "date",
    require("./src/filters/nunjucks-dayjs-filter"),
  );
  eleventyConfig.addNunjucksFilter("imageSrc", imageSrc);
  eleventyConfig.addNunjucksFilter("assetPath", (value) => {
    if (isProduction || typeof value !== "string") return value;
    return value.replace(/\.min\.(css|js)$/i, ".$1");
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addNunjucksAsyncShortcode(
    "cardImage",
    responsiveImage,
  );
  eleventyConfig.addNunjucksAsyncShortcode(
    "responsiveImage",
    responsiveImage,
  );
  eleventyConfig.addNunjucksAsyncShortcode(
    "responsiveBannerImage",
    responsiveBannerImage,
  );
  eleventyConfig.addNunjucksAsyncShortcode(
    "projectContentImages",
    projectContentImages,
  );

  // Hook up RSS plugin here if needed
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "blog",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "Blog | Jack Osborne",
      subtitle: "The Blog of Jack Osborne",
      base: "https://jackosborne.com/blog/",
      author: {
        name: "Jack Osborne",
        email: "jack@jackosborne.com",
      },
    },
  });

  // Minify HTML in production only
  eleventyConfig.addTransform("htmlmin", async function (content) {
    if (!isProduction) return content;

    if ((this.page.outputPath || "").endsWith(".html")) {
      return await htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  // Add Sitemap plugin with custom filtering
  eleventyConfig.addPlugin(pluginSitemap, {
    lastModifiedProperty: "modified",

    sitemap: {
      hostname: "https://jackosborne.com",
      filter: (url, page) => {
        if (!url || typeof url !== "string") return false;

        const normalizedUrl = url.replace(/\/+$/, "");

        const ignoredPaths = ["/feed.xml", "/404.html"];
        const isIgnored = ignoredPaths.some((path) =>
          normalizedUrl.endsWith(path),
        );
        const explicitlyIgnored = page.data?.sitemap?.ignore === true;

        return !isIgnored && !explicitlyIgnored;
      },
    },
  });

  // Add a filtered "pagesForSitemap" collection
  eleventyConfig.addCollection("pagesForSitemap", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => {
        if (!item.url) return false;
        if (!item.outputPath?.endsWith(".html")) return false;
        if (item.url.endsWith("/feed.xml") || item.url.endsWith("/404.html"))
          return false;
        if (item.data?.sitemap?.ignore === true) return false;
        return true;
      })
      .map((item) => ({
        url: item.url,
        data: item.data,
        // The sitemap plugin otherwise falls back to Eleventy's inferred
        // page date. Suppress that fallback unless front matter explicitly
        // provides a meaningful content modification date.
        date: item.data?.modified ? item.date : undefined,
      }));
  });

  eleventyConfig.addShortcode("personasvg", function (filename) {
    const filePath = path.join("src/_includes/personas", filename);
    try {
      return fs.readFileSync(filePath, "utf8");
    } catch (err) {
      console.warn(`SVG not found: ${filePath}`);
      return `<svg><!-- missing: ${filename} --></svg>`;
    }
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
