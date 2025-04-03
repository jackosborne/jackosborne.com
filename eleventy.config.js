const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier-terser");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy("./src/_/css/");
    eleventyConfig.addPassthroughCopy("./src/_/images/");
    eleventyConfig.addPassthroughCopy("./src/_/js/");
    //eleventyConfig.addPassthroughCopy("./src/blog/");
    eleventyConfig.addPassthroughCopy({ "./src/CNAME": "CNAME" });

    // Create a helpful production flag
    const isProduction = process.env.NODE_ENV === "production";

    // Returns work items, sorted by display order
    const addSortedCollection = (config, name, globPattern) => {
        config.addCollection(name, (collection) => {
            return collection
                .getFilteredByGlob(globPattern)
                .sort((a, b) =>
                    Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
                );
        });
    };

    // Adding collections using the utility function
    addSortedCollection(eleventyConfig, "fsqcityguide", "./src/work/foursquare/city-guide/**/*.md");
    addSortedCollection(eleventyConfig, "fsqswarm", "./src/work/foursquare/swarm/**/*.md");
    addSortedCollection(eleventyConfig, "fsqlabs", "./src/work/foursquare/labs/**/*.md");

    // Add Date Filter
    eleventyConfig.addNunjucksFilter(
        "date", 
        require("./src/filters/nunjucks-dayjs-filter")
    );

    eleventyConfig.addShortcode(
        "year", () => `${new Date().getFullYear()}`
    );

    // Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// Output formats for each image.
		formats: ["avif", "webp", "auto"],
		failOnError: false,
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			}
		},
        sharpOptions: {
			animated: true,
		},
	});

    // Hook up RSS plugin here if needed
    eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "blog", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Blog | Jack Osborne",
			subtitle: "The Blog of Jack Osborne",
			base: "https://jackosborne.com/blog/",
			author: {
				name: "Jack Osborne",
				email: "jack@jackosborne.com", // Optional
			}
		}
	});

    // Minfy HTML
    eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});

			return minified;
		}

		// If not an HTML output, return content as-is
		return content;
	});

    // Minfy CSS
    eleventyConfig.addTransform("cssmin", function (content, outputPath) {
		if (outputPath && outputPath.endsWith(".css")) {
			return new CleanCSS({}).minify(content).styles;
		}
		return content;
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
