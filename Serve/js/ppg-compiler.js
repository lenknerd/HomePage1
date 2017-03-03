// ppg-compiler.js
// Tools to compile markdown into blog posts, generate pages of post links/summaries to show
// David Lenkner, 2017

var gulp = require('gulp');
var markdown = require('gulp-markdown');
var concat = require('gulp-concat-util');
var pageFrameInj  = require('./pageframe-inject.js');


// Public items to be used in gulpfile.js
module.exports = {
	// Takes markdown and turns to templates to be loaded via Underscore
	markdownToTemplates: function() {
		return gulp.src('posts/*.md')
			.pipe(markdown()) // Turns markdown into html
			.pipe(concat.header('<div id="postdiv">')) // Views like to be wrapped in div
			.pipe(concat.footer('</div>'))
			.pipe(gulp.dest('posts'));
	},

	// Takes pages, injects headers and footers
	insertHFAndSendPageHTMLs: function() {
		return pageFrameInj.injectHeaderFooter(gulp.src('posts/*.html'))
			.pipe(gulp.dest('posts'));
	}
	
};

// Internal Functions
