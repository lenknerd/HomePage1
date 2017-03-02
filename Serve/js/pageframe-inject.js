// pageframe-inject.js
// Inject header and footer standard content into each html page during build
// David Lenkner, 2017

var gulp = require('gulp');
var inject = require('gulp-inject');

// Public items to be used in gulpfile.js
module.exports = {
	injectHeaderFooter: function () {
		return gulp.src(['index.html', 'about.html', 'contact.html'])
			.pipe(inject(gulp.src(['./html-snippets/head.html']), {
				starttag: '<!-- inject:head:html -->',
				relative: true,
				transform: function (filePath, file) {
					return file.contents.toString('utf8')
				}
			}))
			.pipe(inject(gulp.src(['./html-snippets/foot.html']), {
				starttag: '<!-- inject:foot:html -->',
				relative: true,
				transform: function (filePath, file) {
					return file.contents.toString('utf8')
				}
			}));
	}

};

// Internal Functions
