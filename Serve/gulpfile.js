var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var pkg = require('./package.json');

var postPages = require('./js/ppg-compiler.js');
var pageFrameInj  = require('./js/pageframe-inject.js');

// Where to publish things when all done...
var pubRoot = '/var/www/lenknerd2.com/Serve/';

// Task for processing the posts and making the pages
gulp.task('pagepostprocess', function() {
	// This turns the markdown into view html
	var str1 = postPages.markdownToTemplates(pubRoot);
	// Then we inject header/footer to actual page pages and send
	var str2 = postPages.insertHFAndSendPageHTMLs(pubRoot);

	return merge(str1, str2);
});

// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('less/clean-blog.less')
        .pipe(less())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('css/clean-blog.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest(pubRoot + 'css'));
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('js/clean-blog.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest(pubRoot + 'js'));
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map']).pipe(gulp.dest(pubRoot + 'vendor/bootstrap'));

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js']).pipe(gulp.dest(pubRoot + 'vendor/jquery'));

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ]).pipe(gulp.dest(pubRoot + 'vendor/font-awesome'));
});

// Publish any other non-processed files to apache directory (wait until posts done)
gulp.task('publ', ['pagepostprocess'], function() {

	pageFrameInj.injectHeaderFooter(gulp.src(['index.html', 'about.html', 'contact.html']))
		.pipe(gulp.dest(pubRoot));

	gulp.src(['js/jqBootstrapValidation.js','js/contact_me.js'])
		.pipe(gulp.dest(pubRoot + 'js'));

	gulp.src('php/*')
		.pipe(gulp.dest(pubRoot + 'php'));

	gulp.src('img/*')
		.pipe(gulp.dest(pubRoot + 'img'));
});

// Run everything
gulp.task('default', ['less', 'minify-css', 'minify-js', 'copy', 'pagepostprocess', 'publ']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-css', 'minify-js'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});
