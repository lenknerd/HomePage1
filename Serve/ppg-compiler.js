// ppg-compiler.js
// Tools to compile markdown into blog posts, generate pages of post links/summaries to show
// David Lenkner, 2017

var gulp = require('gulp');
var markdown = require('gulp-markdown');

// Public items to be used in gulpfile.js
module.exports = {
	runTaskAndReturnPipe: function() {
		return gulp.src('posts/*.md')
			.pipe(markdown())
			.pipe(gulp.dest('posts')); // Later add rest of stuff (header/footer/links/etc)
	}
};

// Internal Functions
