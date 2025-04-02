const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const terser = require("gulp-terser");

function minifyCSS() {
	console.log("🧼 Minifying CSS...");

	return gulp.src("src/_/css/style.css") // correct path to your original CSS
		.pipe(cleanCSS())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("_site/_/css")); // where the minified file should go
}

exports.minifyCSS = minifyCSS;

function minifyJS() {
	console.log("🗜️  Minifying JS...");

	return gulp.src("src/_/js/*.js") // grabs both master.js and project.js
		.pipe(terser())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("_site/_/js"));
}

exports.minifyJS = minifyJS;